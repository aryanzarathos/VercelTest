import styled from "styled-components";

export const FeaturedBlogsTopContainer = styled.div`
    margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
  margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
  margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
  margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
`;

export const CategoriesTopHeading = styled.h3`
  font-family: 'Gilroy-Bold','sans-serif';
  font-size: 36px;
  line-height: 36px;
  color: #003459;
  margin-bottom: 17px;
`;

export const HeadContainer = styled.div`
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  position: ${({ item }) => item?.desktop?.position};
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  background-color: ${({ item }) => item?.desktop?.backgroundColor};
`;

export const LineInner = styled.span`
  width: ${({ item }) => item?.desktop?.width};
  height:  ${({ item }) => item?.desktop?.height};
  background-color:  ${({ item }) => item?.desktop?.backgroundColor};
  position:  ${({ item }) => item?.desktop?.position};
  top:  ${({ item }) => item?.desktop?.top};
  transform:  ${({ item }) => item?.desktop?.transform};
  
  @media screen and (max-width: 1024px) {
    width: ${({ item }) => item?.tablet?.width};
  }

  @media screen and (max-width: 767px) {
    width: ${({ item }) => item?.mobile?.width};
  }
`;


//Sub-Conatainer Start from here

export const FeaturedBlogsSubContainer = styled.div`
   margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
  margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
  margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
  margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
`;

export const SubTopContainer = styled.div`
  background: ${({ item }) => item?.desktop?.background};
  box-shadow: ${({ item }) => item?.desktop?.boxShadow};
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  padding-top: ${({ item }) => item?.desktop?.padding?.paddingTop};
  padding-left: ${({ item }) => item?.desktop?.padding?.paddingLeft};
  padding-bottom: ${({ item }) => item?.desktop?.padding?.paddingBottom};
  padding-right: ${({ item }) => item?.desktop?.padding?.paddingRight};
  margin-bottom: ${({ item }) => item?.desktop?.margin?.marginBottom};
  cursor: ${({ item }) => item?.desktop?.cursor};

  @media screen and (max-width: 425px) {
    padding-top: ${({ item }) => item?.mobile?.padding?.paddingTop};
  padding-left: ${({ item }) => item?.mobile?.padding?.paddingLeft};
  padding-bottom: ${({ item }) => item?.mobile?.padding?.paddingBottom};
  padding-right: ${({ item }) => item?.mobile?.padding?.paddingRight};
  }
`;

export const TopSection = styled.div`
  display: ${({ item }) => item?.desktop?.display};
  grid-template-columns: ${({ item }) => item?.desktop?.gridTemplateColumns};
  gap: ${({ item }) => item?.desktop?.gap};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  align-items: ${({ item }) => item?.desktop?.alignItems};

  @media screen and (max-width: 425px) {
    display: ${({ item }) => item?.mobile?.display};
  }
`;

export const TopSectionImageConatainer = styled.div`
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  border: ${({ item }) => item?.desktop?.border};
  overflow: hidden;

`;

export const TopSectionImgContent = styled.div`
  display: ${({ item }) => item?.desktop?.display};
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
  margin-top:${({ item }) => item?.desktop?.margin?.marginTop};
  margin-right:${({ item }) => item?.desktop?.margin?.marginRight};
  margin-bottom:${({ item }) => item?.desktop?.margin?.marginBottom};
  margin-left:${({ item }) => item?.desktop?.margin?.marginLeft};
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
  display: ${({ item }) => item?.desktop?.display};
  justify-content: ${({ item }) => item?.desktop?.justifyContent};
  gap: ${({ item }) => item?.desktop?.gap};
  align-items: ${({ item }) => item?.desktop?.alignItems};
  svg:hover {
    cursor: pointer;
    &:not(.dislikeButton){
      fill: ${({ itemLike }) => itemLike?.desktop?.hover.fill};
    }
  }
.likeButton{
height: ${({ itemLike }) => itemLike?.desktop?.height};
width: ${({ itemLike }) => itemLike?.desktop?.width};
fill:${({ itemLike }) => itemLike?.desktop?.fill};
}
.dislikeButton{
height: ${({ itemDisLike }) => itemDisLike?.desktop?.height};
width: ${({ itemDisLike }) => itemDisLike?.desktop?.width};
fill: ${({ itemDisLike }) => itemDisLike?.desktop?.fill};
&:hover{
  path{
    stroke: ${({ itemLike }) => itemLike?.desktop?.hover.fill};
  }
}
path{
  stroke: ${({ itemDisLike }) => itemDisLike?.desktop?.stroke};
}

}
.commontButton{
height: ${({ itemComment }) => itemComment?.desktop?.height};
width: ${({ itemComment }) => itemComment?.desktop?.width};
fill: ${({ itemComment }) => itemComment?.desktop?.fill};
}
.shareButton{
height: ${({ itemShare }) => itemShare?.desktop?.height};
width: ${({ itemShare }) => itemShare?.desktop?.width};
fill: ${({ itemShare }) => itemShare?.desktop?.fill};
}
.copyButton{
height: ${({ itemCopy }) => itemCopy?.desktop?.height};
width: ${({ itemCopy }) => itemCopy?.desktop?.width};
fill: ${({ itemCopy }) => itemCopy?.desktop?.fill};
}
`;


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
  width: ${({ item }) => item?.desktop?.width};
  height: ${({ item }) => item?.desktop?.height};
  border-radius: ${({ item }) => item?.desktop?.borderRadius};
  margin-top: ${({ item }) => item?.desktop?.margin?.marginTop};
  overflow: ${({ item }) => item?.desktop?.overflow};

  @media screen and (max-width: 600px) {
    height: ${({ item }) => item?.mobile?.height};
  }

  /* img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  } */
`;
