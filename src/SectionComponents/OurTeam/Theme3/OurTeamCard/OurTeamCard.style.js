import { styled } from "styled-components";

export const OurTeamImgContainerSecond = styled.div`
width:${({ item }) => item.desktop.width};
display:${({ item }) => item.desktop.display};
background:${({ item }) => item.desktop.background};
margin-bottom:${({ item }) => item.desktop.marginBottom};
    padding: ${({ item }) => item?.desktop?.padding?.paddingTop} ;
    border-style:  ${({ item }) => item?.desktop?.borderStyle} ;
    border-width:${({ item }) => item?.desktop?.borderWidth};
    border-color:${({ item }) => item?.desktop?.borderColor} ;


/* background-color: red; */

@media screen and (max-width: 767px) {
  flex-wrap:${({ item }) => item.mobile.flexWrap};
}
`;

export const ImgContainerSecond = styled.figure`
width:${({ item }) => item.desktop.width};
height: ${({ item }) => item.desktop.height};

@media screen and (max-width:767px) {
  width:${({ item }) => item.mobile.width};
}

/* */
`;
export const TeamAboutSectionSecond = styled.div`
width: ${({ item }) => item.desktop.width};
padding: ${({ item }) => item.desktop.padding};

@media screen and (max-width: 767px) {
  width:${({ item }) => item.mobile.width};
}
`;
// export const AboutSecond = styled.p`
// font-size: 14px;
// line-height: 24px;
// font-weight: 500;
// color: #202020;
// font-family: 'Nunito', sans-serif;
// display: -webkit-box;
// max-width: 100%;
// -webkit-line-clamp: 8;
// -webkit-box-orient: vertical;
// overflow: hidden;
// `;
// export const ContainerSecond = styled.div`
//   display: flex;
//   gap: 20px;
//   width: 100%;

//   @media screen and (max-width: 1000px) {
//     flex-wrap: wrap;
//   }
// `;
// export const Position = styled.p`
// font-size: 14px;
// font-weight: 500;
// line-height: 18.89px;
// color: #202020;
// margin: 4px 0px 4px 0px;
// font-family: 'Nunito', sans-serif;
// overflow: hidden;
// white-space: nowrap;
// text-overflow: ellipsis;
// `;
// export const Name = styled.p`
// font-size: 20px;
// line-height: 26.56px;
// font-weight: 500px;
// color: #202020;
// margin-bottom: 12px;
// font-family: 'Nunito', sans-serif;
// overflow: hidden;
// white-space: nowrap;
// text-overflow: ellipsis;
// `;

// export const OurTeamHeadingSection = styled.div`
// padding-top: 60px;
// padding-bottom: 36px;
// text-align: center;

// h1 {
//   font-size: 24px;
//   line-height: 31.88px;
//   font-weight: 500;
//   margin-bottom: 8px;
//   overflow: hidden;
//   color:#202020;
//   word-wrap: break-word;
//   text-overflow: ellipsis;
//   font-family: 'Nunito', sans-serif;
// }

// h2 {
//   font-size: 16px;
//   font-weight: 500;
//   line-height: 21.25px;
//   overflow: hidden;
//   color:#202020;
//   word-wrap: break-word;
//   text-overflow: ellipsis;
//   font-family: 'Nunito', sans-serif;
// }
// `;