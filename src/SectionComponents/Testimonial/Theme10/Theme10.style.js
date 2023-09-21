import styled from "styled-components";

export const TestimonialPageListSection = styled.div`
margin: 72px 0;
`;
export const TestimonialPageListHead = styled.div`
margin-bottom: 48px;
h2{
  font-weight:700;
  font-size: 32px;
  line-height: 42px;
  font-style: normal;
  font-family: "";
  letter-spacing:inherit;
  text-align: center;
  text-transform: capitalize;
  color: #000000;
  }
  h3{
  font-weight: 500;
  font-size: 20px;
  line-height:24px;
  font-style: normal;
  font-family: "";
  letter-spacing: inherit;
  text-align: center;
  text-transform: capitalize;
  color: #000;
  }
`;

export const TestimonialPageListGrid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 100px 48px;
margin-top: 88px;
@media screen and (max-width: 768px) {
  grid-template-columns: repeat(1, 1fr);
  }
`;
export const TestimonialPageListItem = styled.div`
width: 100%;
min-height: 284px;
/* background: ; */

// border: 1px solid #000;
box-shadow: 2px 5px 15px rgba(0, 0, 0, 0.1);
border-radius: 8px;
padding: 58px 24px 24px 24px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
p{
font-weight: 400;
font-size: 16px;
line-height: 20px;
font-style: normal;
font-family: "";
letter-spacing: inherit;
text-align: center;
text-transform: capitalize;
color: #000;
display: -webkit-box;
-webkit-line-clamp: 10;
-webkit-box-orient: vertical;
overflow: hidden;
}
h6{
font-weight: 600;
font-size: 18px;
line-height: 24px;
font-style: normal;
font-family: "";
letter-spacing: inherit;
text-align: center;
text-transform: capitalize;
color: #000;
margin-top: 16px;
}
img{
width: 72px;
height: 72px;
filter: drop-shadow(2px 5px 15px rgba(32, 32, 32, 0.15));
border-radius: 50%;
object-fit: cover;
position: absolute;
top: -31px;
}
`;