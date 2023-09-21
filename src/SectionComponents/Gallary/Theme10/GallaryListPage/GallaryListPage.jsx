import React, { useEffect, useState } from 'react';
import DefaultImage1 from "../../../../Assets/SectionComponent/Images/Gallery/default1.jpg";
import Image from 'next/image';
import { GalleryListAlbum, GalleryListFilter, GalleryListFilterButton, GalleryListHead, GalleryListImage, GalleryListSection } from './GallaryListPage.style';


const GalleryListPage = ({ galleryId }) => {

    // const [galleryPopup, setGalleryPopup] = useState({})
    // const [previewModel, setPreviewModel] = useState(false)
    // const handlePopup = (item) => {
    //     setGalleryPopup(item)
    //     setPreviewModel(true)
    // }
    return (
        <React.Fragment>
            <GalleryListSection>
                <GalleryListHead>
                    <h2>Gallery</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, eveniet?</h3>

                </GalleryListHead>
                <GalleryListFilter>
                    <GalleryListFilterButton >All</GalleryListFilterButton>
                    <GalleryListFilterButton >Images</GalleryListFilterButton>
                    <GalleryListFilterButton >Videos</GalleryListFilterButton>
                </GalleryListFilter>

                <GalleryListAlbum>

                    <React.Fragment >
                        <GalleryListImage>
                            <Image src={DefaultImage1} alt="Album" />
                        </GalleryListImage>
                    </React.Fragment>
                </GalleryListAlbum>

            </GalleryListSection>





            <div className="ThumnailPopWrapper">
                {/* <ThumnailPopBody>
                            <video
                                src={galleryPopup.videos}
                                alt={galleryPopup.videos}
                                controls
                                autoPlay
                                loop
                            />
                        </ThumnailPopBody> */}
            </div>


        </React.Fragment>
    )
}

export default GalleryListPage