import styled from "styled-components";
export const WebsiteBookAppoinmentWrapper = styled.div`

`;

export const BreadcrumbDiv = styled.div`
  display: ${({ item }) => item.desktop.display};
  align-items: ${({ item }) => item.desktop.alignItems};
  justify-content: ${({ item }) => item.desktop.justifyContent};
  margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};

  @media (max-width: 767px) {
    flex-wrap: ${({ item }) => item.mobile.flexWrap};
    gap: ${({ item }) => item.mobile.gap};
  }
`;

export const UserBreadcrumbWrap = styled.div`
  display: ${({ item }) => item.desktop.display};
  align-items: ${({ item }) => item.desktop.alignItems};
  gap: ${({ item }) => item.desktop.gap};

  @media (max-width: 767px) {
    flex-wrap: ${({ item }) => item.mobile.flexWrap};
  }
  .Breadcrumbs-wrap{
    width: auto;
    a{
      color: ${({ item2 }) => item2.desktop.color};
    }
  }
  
`;

export const BackButton = styled.button`
  background-color: transparent;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #1f2b6c;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  .icon-arrow {
    transform: rotate(180deg);
    float: left;
  }
`;

export const BookAppointmentGrid = styled.div`
  gap:${({ item }) => item.desktop.gap};
  display: ${({ item }) => item.desktop.display};
  grid-template-columns: ${({ item }) => item.desktop.gridTemplateColumns};
  position: ${({ item }) => item.desktop.position};
  
  @media (max-width: 1024px) {
    grid-template-columns: ${({ item }) => item.tablet.gridTemplateColumns};
  }
`;

export const Aside = styled.div`
  display: ${({ item }) => item.desktop.display};
  align-items: ${({ item }) => item.desktop.alignItems};
  justify-content: ${({ item }) => item.desktop.justifyContent};
  flex-wrap: ${({ item }) => item.desktop.flexWrap};
  flex-direction: ${({ item }) => item.desktop.flexDirection};
  gap: ${({ item }) => item.desktop.gap};
  position: ${({ item }) => item.desktop.position};
  top: ${({ item }) => item.desktop.top};

  @media (max-width: 1024px) {
    flex-direction:${({ item }) => item.tablet.flexDirection};
    /* justify-content: ${({ item }) => item.tablet.justifyContent}; */
    gap: ${({ item }) => item.tablet.gap};
    position: ${({ item }) => item.tablet.position};
  }
`;

export const CalendarWrap = styled.div`
  width:  ${({ item }) => item.desktop.width};

  @media (max-width: 1024px) {
    max-width: ${({ item }) => item.tablet.maxWidth};
    width:${({ item }) => item.tablet.width};
  }

  .react-datepicker {
    width: 100%;
  }
  .react-datepicker__day--disabled {
    margin-right: 10px;
  }
  .react-datepicker__month-container {
    float: none;
  }
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__quarter-text--keyboard-selected,
  .react-datepicker__year-text--keyboard-selected {
    background-color: transparent;
  }
  .react-datepicker__day--selected {
    background: ${({ item2 }) => item2.desktop.background};
    color: ${({ item2 }) => item2.desktop.color};
  }
`;

export const BookingCard = styled.div`
  width: ${({ item }) => item.desktop.width};
  min-height: ${({ item }) => item.desktop.minHeight};
  background: ${({ item }) => item.desktop.background};
  box-shadow: ${({ item }) => item.desktop.boxShadow};
  border-radius: ${({ item }) => item.desktop.borderRadius};
  border-left: ${({ item }) => item.desktop.borderLeft};
  padding-top: ${({ item }) => item.desktop?.padding?.paddingTop};
  padding-right: ${({ item }) => item.desktop?.padding?.paddingRight};
  padding-bottom: ${({ item }) => item.desktop?.padding?.paddingBottom};
  padding-left: ${({ item }) => item.desktop?.padding?.paddingLeft};


  @media (max-width: 767px) {
    width: ${({ item }) => item.mobile.width};
  }
`;

export const BookingParaWrap = styled.div`
position: relative;
 &::after {
      content:  ${({ item }) => item.desktop.after.content};
      border:  ${({ item }) => item.desktop.after.border};
      width:  ${({ item }) => item.desktop.after.width};
      bottom:  ${({ item }) => item.desktop.after.bottom};
    }
`

export const Timetable = styled.div`
  padding: ${({ item }) => item.desktop.padding};
  box-shadow: ${({ item }) => item.desktop.boxShadow};
  border-radius: ${({ item }) => item.desktop.borderRadius};

  @media (max-width: 767px) {
    padding: ${({ item }) => item.mobile.padding};
  }


`;

export const Time = styled.div`
  display:  ${({ item }) => item.desktop.display};
  align-items:  ${({ item }) => item.desktop.alignItems};
  justify-content:  ${({ item }) => item.desktop.justifyContent};
  flex-wrap: ${({ item }) => item.desktop.flexWrap};
  gap:  ${({ item }) => item.desktop.gap};
  margin-bottom:  ${({ item }) => item.desktop.margin.marginBottom};
  
  @media (max-width: 767px) {
    justify-content:  ${({ item }) => item.mobile.justifyContent};
  }
`;
export const ShiftWrap = styled.div`
  display: ${({ item }) => item.desktop.display};
  align-items:${({ item }) => item.desktop.alignItems};
  gap: ${({ item }) => item.desktop.gap};
  margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};
`

export const Col = styled.div`
  flex-basis:  ${({ item }) => item.desktop.flexBasis};
`;
export const TimeCard = styled.div`
  background:${({ item }) => item.desktop.background};
  border: ${({ item }) => item.desktop.border};
  border-radius: ${({ item }) => item.desktop.borderRadius};
  font-weight: ${({ item }) => item.desktop.fontWeight};
  width: ${({ item }) => item.desktop.width};
  height: ${({ item }) => item.desktop.height};
  font-size: ${({ item }) => item.desktop.fontSize};
  line-height: ${({ item }) => item.desktop.lineHeight};
  text-align: ${({ item }) => item.desktop.textAlign};
  color: ${({ item }) => item.desktop.color};
  display: ${({ item }) => item.desktop.display};
  align-items:${({ item }) => item.desktop.alignItems};
  justify-content:${({ item }) => item.desktop.justifyContent};
  gap: ${({ item }) => item.desktop.gap};
  padding-top: ${({ item }) => item.desktop?.padding?.paddingTop};
  padding-right: ${({ item }) => item.desktop?.padding?.paddingRight};
  padding-bottom: ${({ item }) => item.desktop?.padding?.paddingBottom};
  padding-left: ${({ item }) => item.desktop?.padding?.paddingLeft};
  &.active {
    background: ${({ item }) => item.desktop.active.background};
    color: ${({ item }) => item.desktop.active.color};
    border-color:${({ item }) => item.desktop.active.borderColor};
  }
`;
export const Dots = styled.span`
  width: ${({ item }) => item.desktop.width};
  height: ${({ item }) => item.desktop.height};
  background: ${({ item }) => item.desktop.background};
  border-radius: ${({ item }) => item.desktop.borderRadius};
  margin-right: ${({ item }) => item.desktop.marginRight};
  &.active{
    background: ${({ item }) => item.desktop.active.background};
  }
`
export const Slot = styled.div`
  /* font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #4a9e42;
  margin-top: 5px; */
`;

 export const SlotAvailable = styled.div`
   color: green;
 `

export const InputCustomType = styled.div`
  display: ${({ item }) => item.desktop.display};
  gap: ${({ item }) => item.desktop.gap};

`;
export const Label = styled.label`
  display: ${({ item }) => item.desktop.display};
  gap: ${({ item }) => item.desktop.gap};
  color: ${({ item }) => item.desktop.color};
  font-size: ${({ item }) => item.desktop.fontSize};
  line-height: ${({ item }) => item.desktop.lineHeight};
  font-family: ${({ item }) => item.desktop.fontFamily};
  font-style: ${({ item }) => item.desktop.fontStyle};
  font-weight: ${({ item }) => item.desktop.fontWeight};
  cursor: pointer;
  &.active{
    font-weight: ${({ item }) => item.desktop.active.fontWeight};
  }
  `
export const InputRadio = styled.input`
accent-color:  ${({ item }) => item.desktop.accentColor};
`

export const FromWrapper = styled.div`
  display: ${({ item }) => item.desktop.display};
  align-items:${({ item }) => item.desktop.alignItems};
  justify-content: ${({ item }) => item.desktop.justifyContent};
  flex-wrap: ${({ item }) => item.desktop.flexWrap};
  row-gap: ${({ item }) => item.desktop.rowGap};
  column-gap: ${({ item }) => item.desktop.columnGap};


`;

export const Column = styled.div`
  flex-basis:  ${({ item }) => item.desktop.flexBasis};
  
  @media (max-width: 767px) {
    flex-basis:  ${({ item }) => item.mobile.flexBasis};
  }
`;
export const FormFieldwrap = styled.div``;

export const MobileLabel = styled.label`
display: inline-block;
 font-family:  ${({ item }) => item.desktop.fontFamily};
 font-size:  ${({ item }) => item.desktop.fontSize};
 font-style:  ${({ item }) => item.desktop.fontStyle};
 font-weight:  ${({ item }) => item.desktop.fontWeight};
 color:  ${({ item }) => item.desktop.color};
 line-height:  ${({ item }) => item.desktop.lineHeight};
 margin-bottom: ${({ item }) => item.desktop.margin.marginBottom};;
`;
export const PhoneInputWrap = styled.div`

.react-tel-input {
        .form-control{
            font-family:  ${({ item }) => item.desktop.fontFamily};
            font-size:  ${({ item }) => item.desktop.fontSize};
            font-style:  ${({ item }) => item.desktop.fontStyle};
            font-weight:  ${({ item }) => item.desktop.fontWeight};
            color:  ${({ item }) => item.desktop.color};
            line-height:  ${({ item }) => item.desktop.lineHeight};
            padding-top: ${({ item }) => item.desktop?.padding?.paddingTop};
            padding-right: ${({ item }) => item.desktop?.padding?.paddingRight};
            padding-bottom: ${({ item }) => item.desktop?.padding?.paddingBottom};
            padding-left: ${({ item }) => item.desktop?.padding?.paddingLeft};
            height: ${({ item }) => item.desktop?.height};
            border: ${({ item }) => item.desktop?.border};
            width: 100%;
        }
        .flag-dropdown {
            border: none;
            background-color: transparent;
            .selected-flag{
                background-color: transparent;
            }
        }
    }
`
export const BookBtn = styled.div`
 
`;
export const Term = styled.div`
  
`;
