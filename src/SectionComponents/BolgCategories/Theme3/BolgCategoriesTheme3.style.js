import styled from "styled-components";

export const BlogsTopContainer = styled.div`
  margin: 64px 0px 50px 0px;
`;

export const BlogsTopHeading = styled.h3`
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

export const BlogsSubContainer = styled.div`

margin: 50px 0px 0px 0px;

.slick-slide {
  padding: 0px 10px;
}

.slick-prev {
  z-index: 1;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid rgba(0, 52, 89, 1);
  left: 0;
  position: absolute;
  top: -80px;
  left: 92%;
  
  @media screen and (max-width:1000px){
    left: 87%;
  }
  @media screen and (max-width:700px){
    left: 84%;
  }
  @media screen and (max-width:500px){
    left: 77%;
  }
}

.slick-dots li button:before{
  display: none;
}

.slick-prev:before {
  border-right: 2px solid rgba(0, 52, 89, 1);
  border-bottom: 2px solid rgba(0, 52, 89, 1);
  transform: rotate(135deg);
  color: transparent;
  width: 8px;
  height: 8px;
  top: 8px;
  left: 8px;
  z-index: 3;
}

.slick-prev:after{
  width: 12px;
  height: 2px;
  background-color: rgba(0, 52, 89, 1);
  top: 12px;
  left: 8px;
}

.slick-next {
  z-index: 1;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid rgba(0, 52, 89, 1);
  right: 0;
  position: absolute;
  top: -80px;
}

.slick-next:before {
  position: absolute;
  font-size: 40px;
  border-right: 2px solid rgba(0, 52, 89, 1);
  border-bottom: 2px solid rgba(0, 52, 89, 1);
  color: transparent;
  width: 8px;
  height: 8px;
  top: 8px;
  left: 8px;
  transform: rotate(-45deg);
}


.slick-next:after{
  width: 12px;
  height: 2px;
  background-color: rgba(0, 52, 89, 1);
  top: 12px;
  left: 5px;
} 

.slick-prev.slick-disabled:before, .slick-next.slick-disabled:before {
  opacity: 1;
}
 .slick-prev:focus:before, .slick-next:focus:before {
  opacity: 0.3;
}
.slick-next.slick-disabled:before, .slick-prev.slick-disabled:before {
  opacity: 1;
}
.slick-next:focus:before, .slick-prev:focus:before {
  opacity: 0.3;
}


.slick-prev.slick-disabled:after, .slick-next.slick-disabled:after {
  opacity: 1;
}
 .slick-prev:focus:after, .slick-next:focus:after {
  opacity: 0.3;
}
.slick-next.slick-disabled:after, .slick-prev.slick-disabled:after {
  opacity: 1;
}
.slick-next:focus:after, .slick-prev:focus:after {
  opacity: 0.3;
}


.slick-prev.slick-disabled, .slick-next.slick-disabled {
  opacity: 1;
}
 .slick-prev:focus, .slick-next:focus {
  opacity: 0.3;
}
.slick-next.slick-disabled, .slick-prev.slick-disabled {
  opacity: 1;
}
.slick-next:focus, .slick-prev:focus {
  opacity: 0.3;
}
`;


export const BlogsBottomContainer = styled.div`
  /* margin-top: 40px; */
  display: grid;
  align-items: center;
  grid-template-columns: 3fr auto;
  gap: 24px;
`;

export const BottomContainerButton = styled.button`
  background: transparent;
  border: 1px solid #003459;
  border-radius: 44px;
  padding: 8px 24px;
  color: #003459;
  /* width: 12%; */
  cursor: pointer;
`;


export const CardContainer = styled.div`
  /* padding: 10px; */
`;

export const CardImages = styled.div`
  width: 100%;
  height: 212px;
  
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 600px) {
    height: auto;
  }
`;

export const CardContent = styled.div`
  background-color: #ffffff;
  padding: 3px;
  margin-bottom: 48px;
`;

export const CardHeading = styled.h4`
  font-family: 'Gilroy-Medium','sans-serif';
  font-size: 18px;
  line-height: 21px;
  color: #202020;
  margin: 12px 0px 8px 0px;
`;

export const CardBottomContent = styled.p`
  font-family: 'Gilroy-Regular','sans-serif';
  font-size: 14px;
  line-height: 20px;
  color: #202020;
  margin-top: 12px;
`;

export const CardButton = styled.button`
  font-family: 'Gilroy-SemiBold','sans-serif';
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  column-gap: 7px;
  margin-top: 12px;
  color: rgba(0, 52, 89, 1);
`;