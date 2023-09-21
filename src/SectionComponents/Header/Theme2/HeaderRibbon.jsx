import React from 'react'
import styled from 'styled-components';
import {ContainerFluid} from "../../CommonComponent/ContainerFluid.styled";
import {Container} from "../../CommonComponent/Container.styled";
import Divider from '../../CommonComponent/Divider';
import FacebookIcon from "../../assets/Icons/Theme2/facebook.svg"; 
import InstagramIcon from "../../assets/Icons/Theme2/instagram.svg"; 
import TwitterIcon from "../../assets/Icons/Theme2/twitter.svg"; 
import MailIcon from "../../assets/Icons/Theme2/mail.svg"; 
import DropDownList from '../../WebsiteNewTemplateEcommerce/HeaderLayout/CurrencySelector/DropDownList/DropDownList';
import useCurrency from '../../../CustomHooks/useCurrency';
import CurrencySelector from '../../WebsiteNewTemplateEcommerce/HeaderLayout/CurrencySelector/CurrencySelector';

const HeaderRibbon = () => {

   
    const ribbon = {
        color: "white",
        background: "linear-gradient(270deg, #6AA9FF 0%, #428BC1 100%)",
        padding: "8px",
      };

      const ContentTopbar = styled.div`
      display: flex;
      Justify-content: flex-end;
      `;
      const ContentItem = styled.div`
      display: flex;
      align-items: center;
      gap: 8px;
      }
      `;
      const ContentItemSocialLabel = styled.label`
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: #FFF;      
      `;
      const ContentItemIcon = styled.a`
      .icon{
        width: 18px;
        height: 16px;
        display: block;
        cursor: pointer;
        background-color: #FFF;    

        &.facebook{

                -webkit-mask: url(${FacebookIcon}) no-repeat center;
                mask-image: url(${FacebookIcon}) no-repeat center;
        }
        &.instagram{

                -webkit-mask: url(${InstagramIcon}) no-repeat center;
                mask-image: url(${InstagramIcon}) no-repeat center;
        }
        &.twitter{

                -webkit-mask: url(${TwitterIcon}) no-repeat center;
                mask-image: url(${TwitterIcon}) no-repeat center;
        }
        &.mail{

                -webkit-mask: url(${MailIcon}) no-repeat center;
                mask-image: url(${MailIcon}) no-repeat center;
        }
}    
      `;
  const [
    currencyList, selectedCurrency, selectCurrencyHandler,
    currencyApplyHandler
  ] = useCurrency();
  return (
    <ContainerFluid style={ribbon}>
      <Container>
        <ContentTopbar>
          <ContentItem>
            <ContentItemSocialLabel>
              Follow us :
            </ContentItemSocialLabel>
            <ContentItemIcon href="/">
              <i className="icon facebook"></i>
            </ContentItemIcon>
            <ContentItemIcon href="/">
              <i className="icon instagram"></i>
            </ContentItemIcon>
            <ContentItemIcon href="/">
              <i className="icon twitter"></i>
            </ContentItemIcon>
            <ContentItemIcon href="/">
              <i className="icon mail"></i>
            </ContentItemIcon>
          </ContentItem>
          <ContentItem>
            <Divider Direction="Vertical"/>
            currency
            {/* <DropDownList
              type="currency"
              label={'Currency'}
              curr={currRef.current} 
              list={currencyList}
              selectionMaker={(val) => { selectCurrencyHandler(val) }}
            /> */}
            <CurrencySelector></CurrencySelector>
          </ContentItem>
        </ContentTopbar>
      </Container>
    </ContainerFluid>
  )
}

export default HeaderRibbon