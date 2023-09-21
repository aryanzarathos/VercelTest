import styled from "styled-components";

export const ContactHomeHeroSection = styled.div`
background: rgba(55, 125, 239, 0.05);
padding: 32px 0;
`;
export const ContactHomeHero = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 40px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}
`;

export const MobilePinWrap = styled.div`
  .form-group{
    margin-bottom: 5px;
    margin-top: 8px;
  }

  .react-tel-input{
    padding-bottom: 0px;
    .form-control{
      width: 100%;
      background-color: $white;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      height: 40px;
    }

    .flag-dropdown{
      .selected-flag{
        background: $white;
      }
      .country-list{
        .search{
          z-index: 1;
        }
      }
      &.open{
        background: transparent;
      }
    }
  }
  @media screen and (max-width:1024px) {
    margin-bottom: 10px;
  }
`;

export const ContactHomeHeroAddress = styled.div`
h2{
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 59px;
/* identical to box height */
color: #343F64;
}
h3{
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 26px;
line-height: 32px;
color: #343F64;
}
ul{
margin-top: 95px;
@media screen and (max-width: 768px) {
  margin-top: 35px;
}
li{
display: grid;
grid-template-columns: minmax(auto, 140px) 1fr;
gap: 10px;
align-items: flex-start;
font-weight: 400;
font-size: 16px;
line-height: 28px;
color: rgb(32, 32, 32);
margin-bottom: 10px;
/* word-break: break-all; */
&:last-child{
margin-bottom: 0;
}
label{
  display: flex;
  align-items: center;
  gap: 10px;
}
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  margin-bottom: 20px;
  gap: 0;
}

}
}
`;
export const ContactHomeHeroForm = styled.div`
form{
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 16px 32px;
@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
  gap: 10px;
}

.form-group-topheading{
  margin-bottom: 8px;
  color:rgb(139, 65, 125);
}

.form-group{
  &.react-tel-input {
          .flag-dropdown {
            .country-list {
              .search {
                z-index: 10;
              }
            }
          }
        }
        @media screen and (max-width: 768px) {
          grid-column: 1/3;
        }
input::placeholder,
textarea::placeholder {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
text-decoration-line: underline;
color: rgba(32, 32, 32, 0.6);
}
input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
text-decoration-line: underline;
color: rgba(32, 32, 32, 0.6);
}
input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
text-decoration-line: underline;
color: rgba(32, 32, 32, 0.6);
}
&:nth-child(3), &:nth-child(4){
grid-column: 1/3;
@media screen and (max-width: 768px) {
  grid-column: 1/3;
}
}
.input-control, .textarea-control{
    border-radius: 4px;
    border: 1px solid rgba(55, 125, 239, 0.2);
    height: 44px;
    padding: 12px 24px;
    width: 100%;
    color: rgb(52, 63, 100);
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    outline: none;
    box-shadow: none;
    font-family: inherit;
}
.textarea-control{
height: auto;
}
}
button{
font-family: 'Poppins'sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 24px;
background: rgb(52, 63, 100);
border: 1px solid rgb(52, 63, 100);
border-radius: 4px;
color: rgb(255, 255, 255);
padding: 10px 40px;
cursor: pointer;
&:hover{
background: rgb(49, 70, 143);
color: rgb(255, 230, 167);
border: 1px solid rgb(49, 70, 143);
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
}
}

.btn-wrapper {
  grid-column: 1/3;
}

.formArea-wrapper {
  grid-column: 1/3;
}
.phoneInput-wrapper {
  width: 100%;
  .flag-dropdown {
    height: 40px;

  }
  .form-control {
    height: 40px;
    width: 100%;
  }
}
`;