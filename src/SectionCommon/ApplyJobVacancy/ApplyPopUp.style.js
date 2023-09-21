import styled from "styled-components";

export const ApplyJobVacancyWrapper = styled.div``;
export const DashedInstructionList = styled.ul``;
export const List = styled.li`
  color: rgba(32, 32, 32, 0.6);
`;
export const VacancyButton = styled.button`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* or 171% */

display: flex;
align-items: center;
text-align: center;
letter-spacing: 0.2px;

color: #FFFFFF;
  
background: #343F64;
border-radius: 4px;
  border: 1px solid #343f64;
  padding:6px 24px;
  cursor: pointer;
  &:hover{
  background: #fff;
  color: #343f64;
  border: 1px solid 343f64;
  -webkit-transition-duration: 700ms;
  -moz-transition-duration: 700ms;
  -o-transition-duration: 700ms;
  transition-duration: 700ms;
  }
`
export const FormFieldwrap = styled.div`
  &.formFieldwrap{
    .form-group{
      .animLabel{
        background-color:transparent;
      }
    }
    .form-group{
      small{
        color: rgba(32, 32, 32, 0.6);        
        span{
            color: rgba(32, 32, 32, 0.6);        
        }
      }
    }
  }
`;
export const DatePickerWrap = styled.div`
  &.datePickerWrap{
    .form-group{
      .animLabel{
        background-color:transparent;
      }
    }
  }
`;
export const ApplyJobVacancyForm = styled.div`
  &.ApplyJobVacancyForm{
    grid-template-columns: repeat(2, 1fr);
    @media (max-width:480px){
      grid-template-columns: 1fr;
    }
    .formFieldwrap:nth-child(8){
      grid-column: auto;
    }
    .formFieldwrap:last-child{
      grid-column:1/3;
      @media (max-width:480px){
        grid-column:1;
      }
    }
  }
`;

export const DiscriptionWrapper = styled.div`
  &.ApplyJobVacancyBanner{
    &.Discription{
      ul{
        grid-template-columns: repeat(2, 1fr);
        padding-bottom:20px;
      }
    }
  }

  .vacancyPostionHeaing {
    letter-spacing: inherit;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #343F64;
  }

  .vacancyPostionPara {
    letter-spacing: inherit;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #343F64;
  }
`;
export const ModalHeaderWrap = styled.div`
.detail-header-wrap{
  padding-top: 36px;
}
`;