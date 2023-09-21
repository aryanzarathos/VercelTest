import WishlistPopUpData from "./AddToWishListPopUpStyle.json"
const useAddToCartStyle = () => {

    const AddToWishListPopUp=(data)=>{
        // //// console.log(WishlistPopUpData,WishlistPopUpData.custom_section_editable[16].style,"limne 91")
        const WishlistPopupStyle = {
            WishlistPopUpContainer: WishlistPopUpData.custom_section_editable[16].style,
            MainContainer: WishlistPopUpData.custom_section_editable[17].style,
            ContainerMainRight: WishlistPopUpData?.custom_section_editable[18]?.style,
            ProductCode: WishlistPopUpData?.custom_section_editable[19],
            ProductHeading: WishlistPopUpData?.custom_section_editable[20],
            PriceDetail: WishlistPopUpData?.custom_section_editable[21]?.style,
            Price: WishlistPopUpData?.custom_section_editable[22],
            OldPrice: WishlistPopUpData?.custom_section_editable[23],
            Offer: WishlistPopUpData?.custom_section_editable[24],
            Hr: WishlistPopUpData?.custom_section_editable[25]?.style,
            ProductCategoryListWrappper: WishlistPopUpData?.custom_section_editable[26].style,
            ProductCategoryboldText: WishlistPopUpData?.custom_section_editable[27],
            ProductCategoryList: WishlistPopUpData?.custom_section_editable[28]?.style,
            ProductCategoryListItem: WishlistPopUpData?.custom_section_editable[29]?.style,
            ButtonAddToCart: WishlistPopUpData?.custom_section_editable[30]?.style,
            Bag: WishlistPopUpData?.custom_section_editable[31]?.style.desktop,
            QuantityItem: WishlistPopUpData?.custom_section_editable[32]?.style,
            QuantityText: WishlistPopUpData?.custom_section_editable[33],
            ProductList: WishlistPopUpData?.custom_section_editable[34].style,
            ProductListImg: WishlistPopUpData?.custom_section_editable[35].style,
            ProductSmallImgStyle: WishlistPopUpData?.custom_section_editable[36].style,
            ProductSmallImg: WishlistPopUpData.WishlistPopUpData,
            ContainerMainLeft: WishlistPopUpData?.custom_section_editable[37].style,
            ImageContainer: WishlistPopUpData?.custom_section_editable[38].style,
        }
    
    
    
        const style4Slider = {
            ImgWraper: WishlistPopUpData?.custom_section_editable[39].style,
            DataImgsStyle: WishlistPopUpData?.custom_section_editable[40].style,
            ProductList: WishlistPopUpData?.custom_section_editable[41].style,
            ProductListImg: WishlistPopUpData?.custom_section_editable[42].style,
            DataImgsStyleMain: WishlistPopUpData?.custom_section_editable[43].style,
            DataImgs: data,
            mySwiper2: WishlistPopUpData?.custom_section_editable[44].style,
            swiperButton: WishlistPopUpData?.custom_section_editable[45].style,
            swiperPagination: WishlistPopUpData?.custom_section_editable[46].style,
            swiperPaginationBullet: WishlistPopUpData?.custom_section_editable[47].style,
            SliderSetting: {
                Slider1: WishlistPopUpData.settings[0],
                Slider2: WishlistPopUpData.settings[1],
            }
        }
        return {WishlistPopupStyle,style4Slider}
    }

    return [AddToWishListPopUp]
}

export default useAddToCartStyle