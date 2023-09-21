import styled from "styled-components";

export const GallerySection = styled.div`
padding: 40px 0;
`;
export const Gallery = styled.div`
`;
export const GalleryHead = styled.div`
margin-bottom: 48px;

display: flex;
align-items: center;
flex-direction: column;
h2{

        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-size: 48px;
        line-height: 59px;
        color: #343F64;
        letter-spacing: inherit;
        text-align: center;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
}
h3{
  font-weight: 600;
  font-size: 32px;
  line-height: 42px;
  font-style: normal;
  font-family: 'Montserrat';
  letter-spacing: inherit;
  color: #343f64;
  text-align: center;
  position: relative;
  display: inline-block;
  &::after{
  position: absolute;
  width: 100%;
  height: auto;
  background-color: inherit;
  bottom: auto;
  }
  }
`;
export const GalleryImage = styled.div`
width: 100%;
height: 352px;
position: relative;
img{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: top;
}
`;
export const GalleryImageOverlay = styled.div`
position: absolute;
bottom: 0;
padding: 24px;
width: 100%;
height: 100%;
background:linear-gradient(180deg, rgba(32, 32, 32, 0) 60.3%, #202020 105.23%);
cursor: pointer;
display: flex;
align-items: flex-end;
h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #ffffff;
    letter-spacing: inherit;
}
`;
export const GalleryAlbum = styled.div`
display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 20px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
    }

`;