import MediaGallery from '@/CommonComponents/MediaGalleryEditor'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import { FaqsSection, FaqListItem, FaqList, } from './FaqTheme5.style'
import RecordNotFound from '@/CommonComponents/RecordNotFound/RecordNotFound'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'

const FaqTheme5 = ({ children }) => {

    let data = children;
    const faqList = useSelector((state) => state.Faq.faqList.data);

    const [faqListData, setFaqListData] = useState([]);

    const style = {
        FaqsSection: children.custom_section_editable[0].style,
        FaqList: children.custom_section_editable[1].style,
        FaqListItem: children.custom_section_editable[2].style,
        Text1: children.custom_section_editable[3],
        Text2: children.custom_section_editable[4],
        data: children.data,
    }

    useEffect(() => {
        if (data.data && data.data?.length && faqList && faqList?.length) {
            let array = [];
            let newData = {};
            for (let index = 0; index < data.data.length; index++) {
                const element = data.data[index];
                newData = faqList?.find((item) => item?._id === element?._id)
                if (newData) {
                    array.push(newData);
                }
            }
            setFaqListData([...array]);
        }
    }, [data])

    return (
        <MediaGallery sectionName={"ManageFaq"} manageText={"Manage Faq"} data={data} showSettings={false} showAltText={false}>
            {AppLinkUrl?.isEditor() ?
                faqListData && faqListData?.length ?
                    <FaqsSection item={style.FaqsSection}>
                        <FaqList item={style.FaqList}>
                            {
                                faqListData?.map((item, key) => {
                                    return (
                                        <FaqListItem item={style.FaqListItem} key={key}>
                                            <Text text={item.title} tagType={style.Text1.tagType} style={style.Text1.style} />
                                            <Text dangerouslySetInnerHTML={{
                                                __html:
                                                    item.description,
                                            }} tagType={style.Text2.tagType} style={style.Text2.style} />
                                        </FaqListItem>
                                    )
                                })
                                // <FaqListItem item={style.FaqListItem}>
                                //     <Text text={"New Faq"} tagType={style.Text1.tagType} style={style.Text1.style} />
                                //     <Text text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} tagType={style.Text2.tagType} style={style.Text2.style} />
                                // </FaqListItem>
                            }
                        </FaqList>
                    </FaqsSection>
                    :
                    <RecordNotFound />
                :
                data?.data && data?.data?.length ?
                    <FaqsSection item={style.FaqsSection}>
                        <FaqList item={style.FaqList}>
                            {
                                data?.data?.map((item, key) => {
                                    return (
                                        <FaqListItem item={style.FaqListItem} key={key}>
                                            <Text text={item.title} tagType={style.Text1.tagType} style={style.Text1.style} />
                                            <Text dangerouslySetInnerHTML={{
                                                __html:
                                                    item.description,
                                            }} tagType={style.Text2.tagType} style={style.Text2.style} />
                                        </FaqListItem>
                                    )
                                })
                                // <FaqListItem item={style.FaqListItem}>
                                //     <Text text={"New Faq"} tagType={style.Text1.tagType} style={style.Text1.style} />
                                //     <Text text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} tagType={style.Text2.tagType} style={style.Text2.style} />
                                // </FaqListItem>
                            }
                        </FaqList>
                    </FaqsSection>
                    :
                    <RecordNotFound />

            }

        </MediaGallery>
    )
}

export default FaqTheme5