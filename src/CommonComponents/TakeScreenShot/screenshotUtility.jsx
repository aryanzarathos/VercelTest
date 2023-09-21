import html2canvas from 'html2canvas';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import Request from '@/Classes/Request';
import { setError } from '@/store/reducers/commonerrorSlice';
import { useDispatch } from 'react-redux';


const uploadScreenshotToS3 = async (targetSelector, user, templateId, router, routerUrl, dispatch) => {
    // const dispatch = useDispatch();
    const UploadRequest = new Request();

    if (targetSelector) {
        try {
            const canvas = await html2canvas(targetSelector, { useCORS: true });
            canvas.toBlob(async (blob) => {
                const blobData = new Blob([blob], { type: 'image/png' });

                const s3 = new S3Client({
                    region: process.env.NEXT_PUBLIC_REGION,
                    credentials: {
                        accessKeyId: Encryption.DecryptAccessId(),
                        secretAccessKey: Encryption.DecryptAccessKey(),
                    },
                });

                let dataNow = Date.now().toString();
                let bucketName = process.env.NEXT_PUBLIC_BUCKET_NAME;

                let fileName = `${process.env.NEXT_PUBLIC_S3_URL}/${user.user_business}/${user._id}/${dataNow}screenshot.png`;
                let keyCheck = `${user.user_business}/${user._id}/${dataNow}screenshot.png`;

                const params = {
                    Bucket: bucketName,
                    Key: keyCheck,
                    Body: blobData,
                };

                try {
                    const command = new PutObjectCommand(params);
                    await s3.send(command);

                    const image = {
                        src: `${fileName}`,
                        business: user.user_business,
                        owner: user._id,
                        title: 'screenshot',
                        alt: '',
                        size: blobData.size,
                        key: params.Key,
                        type: 'img',
                        desc: '',
                    };

                    let payload = {
                        template: templateId,
                        templateImg: image.src,
                    };

                    await UploadRequest.patch(
                        UploadRequest.url(`/draft-site-editor/updateDrafttemplate/${templateId}`, 'commonservices'),
                        payload,
                        (success) => {
                            success.data;
                            //   window.open('https://manage.nanakway.com/', "_blank");
                            routerUrl && router.push(routerUrl);
                        },
                        (error) => {
                            dispatch(setError('Error in upload.'));
                        }
                    );

                } catch (error) {
                    console.error('Error uploading to S3:', error);
                }
            }, 'image/png');
        } catch (error) {
            console.error('Error creating screenshot:', error);
        }
    }
};

export default uploadScreenshotToS3;
