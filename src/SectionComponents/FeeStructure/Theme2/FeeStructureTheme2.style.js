import styled from "styled-components";

export const FeeStructureSection = styled.div`
padding: 40px 0;
`;
export const FeeStructure = styled.div`

`;
export const FeeStructureHead = styled.div`
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
text-align: center;
color: #343F64;
letter-spacing:inherit;
text-align: center;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;
}
h3{

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;

    color: #4E616B;

  letter-spacing:inherit;
  text-align:center;
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
export const FeeStructureListGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 80px;
`;
export const FeeStructureListCard = styled.div`
background: #FFFFFF;
box-shadow: 0px 0px 12px 2px rgba(0, 0, 0, 0.15);
border-radius: 16px;
padding: 24px;
text-align: center;
h4{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #343F64;
    letter-spacing: inherit;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
p{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #000000;
    letter-spacing: inherit;
    text-align: center;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top:16px;
}
`;
export const ViewFeeStructureButtonSection = styled.div`
margin-top: 16px;
`;
export const ViewFeeStructureButton = styled.button`

font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 19px;
line-height: 34px;
text-align: center;
text-decoration-line: underline;
color: #343F64;
background: transparent;
border-radius: 4px;
border:none;
outine:none;
padding: 9px 40px;
cursor: pointer;
text-align: center;
&:hover{
background: transparent;
color: #343f64;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;

export const FeeStructureModalBody = styled.div`
margin-top: 20px;
`;
export const FeeStructureModalBodyHead = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 10px;
@media screen and (max-width: 768px) {
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
  }
`;
export const FeeStructureModalBodyHeadLeft = styled.div`
h4{
font-weight: 500;
font-size: 20px;
line-height: 24px;
font-style: normal;
font-family: 'Monsterrat';
letter-spacing: inherit;
text-align: center;
color:#343f64 ;
},
h5{
  
font-weight: 18px;
font-size: 500;
line-height: 30px;
font-style: normal;
font-family: 'Monsterrat';
letter-spacing: inherit;
text-align: center;
color: #343f64;
}
`;
export const FeeStructureModalBodyHeadRight = styled.div`

`;

export const DownloadFileButton = styled.a`
display: block;
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
text-align: center;
letter-spacing: 0.2px;

color: #FFFFFF;
background: #343F64;
border-radius: 4px;
border: 1px solid #343F64;
padding: 6px 24px;
cursor: pointer;
&:hover{
background: #fff;
color: #343f64;
-webkit-transition-duration: 700ms;
-moz-transition-duration: 700ms;
-o-transition-duration: 700ms;
transition-duration: 700ms;
}
`;

export const FeeStructureBreakuplist = styled.ul`
padding: 2rem 0;
table{
width: 100%;
tr{
  border-top: 1px solid #000;
}
th{
  padding: 10px 0;
}
td{
  padding: 10px 0;
}
thead{
  th{
    text-align:center;
    width: 25%;
    
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #343F64;
    &:first-child{
      text-align: left;
    }
    &:last-child{
      text-align: right;
    }
  }
}
tbody{
  td{
    text-align:center;
    width: 25%;
    
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #343F64;
    &:first-child{
      text-align: left;
    }
    &:last-child{
      text-align: right;
    }
  }
}
tfoot{
  td{
    text-align:center;
    width: 25%;
    
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #343F64;
    &:first-child{
      text-align: left;
    }
    &:last-child{
      text-align: right;
    }
  }
}
}
`;
export const Description = styled.div`
margin-top: 3rem;
h6{

font-weight: 500;
font-size: 16px;
line-height: 20px;
font-style: normal;
font-family: 'Monsterret';
letter-spacing: inherit;
text-align: inherit;
color: #343f64;
}
p{
  margin-top: 5px;
  
  font-weight: 400;
  font-size: 16px;
  line-height: inherit;
  font-style: normal;
  font-family: 'Monsterret';
  letter-spacing: inherit;
  text-align: left;
  color: #343f64;
}
`;
export const TermsAndCondition = styled.div`
margin-top: 3rem;
h6{

font-weight: 500;
font-size: 18px;
line-height: inherit;
font-style: normal;
font-family: 'Monsterret';
letter-spacing: inherit;
text-align: inherit;
color: #323f64;
}
p{
  margin-top: 5px;
  
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  font-style: normal;
  font-family: 'Monsterret';
  letter-spacing: inherit;
  text-align: inherit;
  color: #323f64;
}
`;
