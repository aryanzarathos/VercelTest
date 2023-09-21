import styled from "styled-components";

export const FeaturedBlogsTopContainer = styled.div`
  margin: 64px 0px 0px 0px;
`;

export const CategoriesTopHeading = styled.h3`
  font-family: 'Gilroy-Bold','sans-serif';
  font-size: 36px;
  line-height: 36px;
  color: #003459;
  margin-bottom: 17px;
`;

export const HeadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  background-color: rgba(214, 214, 214, 1);
`;

export const LineInner = styled.span`
  width: 10%;
  height: 4px;
  background-color: rgba(31, 50, 89, 1);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 992px) {
    width: 18%;
  }

  @media screen and (max-width: 600px) {
    width: 25%;
  }
`;

//Sub-Conatainer Start from here

export const FeaturedBlogsSubContainer = styled.div`
  margin: 50px 0px 96px 0px;
`

export const SubTopContainer = styled.div`
  background: transparent;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  padding: 20px 40px;
  margin-bottom: 50px;
  cursor: pointer;

  @media screen and (max-width: 425px) {
    padding: 20px 20px;
  }
`;

export const TopSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 425px) {
    display: block;
  }
`;

export const TopSectionImageConatainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const TopSectionImgContent = styled.div`
  display: block;
`;

export const ImgContainerHeading = styled.h3`
  font-family: 'Gilroy-Bold','sans-serif';
  font-size: 16px;
  line-height: 19px;
  color: #202020;
`;

export const ImgContainerContent = styled.p`
  font-family: 'Gilroy-Regular','sans-serif';
  font-size: 14px;
  line-height: 16px;
  color: rgba(32, 32, 32, 0.8);
  margin-top: 3px;
`;

export const MidSection = styled.div`
  margin: 20px 0px;
`;

export const MidSectionHeading = styled.h4`
  font-family: 'Gilroy-Bold','sans-serif';
  font-size: 18px;
  line-height: 21px;
  color: #202020;
`;

export const MidSectionContent = styled.p`
  font-family: 'Gilroy-Regular','sans-serif';
  font-size: 16px;
  line-height: 26px;
  color: #202020;
  margin-top: 8px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 22px;
`
// export const LikeButtonImg = styled.i`
// -webkit-mask: url(${LikeButton}) no-repeat center;
// mask-image: url(${LikeButton}) no-repeat center;
// display: block;
// width: 20px;
// height: 19px;
// background-color: rgba(32, 32, 32, 0.8);
// cursor : pointer;
// `;

// export const DisLikeButtonImg = styled.i`
// -webkit-mask: url(${DisLikeButton}) no-repeat center;
// mask-image: url(${DisLikeButton}) no-repeat center;
// display: block;
// width: 20px;
// height: 19px;
// background-color: rgba(32, 32, 32, 0.8);
// cursor : pointer;
// `;

// export const CopyButtonImg = styled.i`
// -webkit-mask: url(${CopyButton}) no-repeat center;
// mask-image: url(${CopyButton}) no-repeat center;
// display: block;
// width: 19px;
// height: 19px;
// background-color: rgba(32, 32, 32, 0.8);
// cursor : pointer;
// `;

// export const ShareButtonImg = styled.i`
// -webkit-mask: url(${ShareButton}) no-repeat center;
// mask-image: url(${ShareButton}) no-repeat center;
// display: block;
// width: 19px;
// height: 20px;
// background-color: rgba(32, 32, 32, 0.8);
// cursor : pointer;
// `;

// export const CommentButtonImg = styled.i`
// -webkit-mask: url(${CommentButton}) no-repeat center;
// mask-image: url(${CommentButton}) no-repeat center;
// display: block;
// width: 21px;
// height: 18px;
// background-color: rgba(32, 32, 32, 0.8);
// cursor : pointer;
// `;

export const SubBottomContainer = styled.div`
  background: transparent;
  box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  padding: 20px 40px;
  margin-top: 56px;

  @media screen and (max-width: 425px) {
    padding: 20px 20px;
  }
`;

export const BottomMidSectionImgContainer = styled.div`
  width: 100%;
  height: 454px;
  border-radius: 12px;
  margin-top: 16px;

  @media screen and (max-width: 600px) {
    height: auto;
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
`;
