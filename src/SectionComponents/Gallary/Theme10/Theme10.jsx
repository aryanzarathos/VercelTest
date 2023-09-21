
import sneek1 from "../../../Assets/SectionComponent/Images/Gallery/sneek1.jpg";
import DefaultImage from "../../../Assets/SectionComponent/Images/Gallery/Sneakpeak.png";
import React from 'react';
import GalleryListPage from "./GallaryListPage/GallaryListPage";
import Image from "next/image";
import { Gallery, GalleryAlbum, GalleryHead, GalleryImage, GalleryImageOverlay, GallerySection } from "./GallaryTheme10.style";

const GalleryTheme10 = () => {
    return (
        <React.Fragment>
            <GalleryListPage />
            <GallerySection>
                <Gallery>
                    <GalleryHead>
                        <h2>Gallary</h2>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, nemo!</h3>

                    </GalleryHead>
                    <GalleryAlbum>

                        <React.Fragment>
                            <GalleryImage>
                                <Image src={DefaultImage} alt="Album" />
                                <GalleryImageOverlay>
                                    <h4>My Gallery</h4>
                                </GalleryImageOverlay>
                            </GalleryImage>
                        </React.Fragment>

                        <GalleryImage>
                            <Image src={sneek1} alt="Album" />
                            <GalleryImageOverlay>
                                <h4>My Gallery</h4>
                            </GalleryImageOverlay>
                        </GalleryImage>

                    </GalleryAlbum>
                </Gallery>

            </GallerySection>


        </React.Fragment>
    )
}

export default GalleryTheme10