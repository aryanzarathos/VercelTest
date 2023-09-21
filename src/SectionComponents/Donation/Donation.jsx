import React from "react";
import styled from "styled-components";
import DonationAmount from "./DonationAmount";
import Text from '@/SectionsLayout/Elements/TextElement/Text'
import { DonationContainer, HeaderHeading, HeaderSubHeading, ParaGraph, Line } from './Donation.style.js'


const Donation = ({ children }) => {

  const data = children;
  const donationData = data.data;
  const DataAmount = data.amountData;
  const timedata = data.timedata

  const style = {
    DonationContainer: data.custom_section_editable[0].style,
    HeaderHeading: data.custom_section_editable[1],
    HeaderSubHeading: data.custom_section_editable[2],
    Text: data.custom_section_editable[3].style,
    Line: data.custom_section_editable[4].style,
    DonationAmountContainer: data.custom_section_editable[5].style,
    HeaderHeadingAmount: data.custom_section_editable[6],
    SubHeading: data.custom_section_editable[7],
    TimeWrapMain: data.custom_section_editable[8].style,
    TimeWrap: data.custom_section_editable[9].style,
    Para: data.custom_section_editable[10],
    Amount: data.custom_section_editable[11],
    AmountWrap: data.custom_section_editable[12].style,
    AmountSelectWrap: data.custom_section_editable[13].style,
    AmountSelect: data.custom_section_editable[14],
    InputWrap: data.custom_section_editable[15].style,
    Doller: data.custom_section_editable[16].style,
    button: data.custom_section_editable[17].style,

  }

  return (

    <DonationContainer item={style.DonationContainer}>
      <HeaderHeading item={style.HeaderHeading.style}>{style?.HeaderHeading?.text}</HeaderHeading>
      <HeaderSubHeading item={style?.HeaderSubHeading?.style}>{style?.HeaderSubHeading?.text}</HeaderSubHeading>
      {
        donationData?.map((item, key) => {
          return (
            <Text key={key} style={style?.Text}>
              {item.text}<b>{item?.item}</b>
            </Text>
          )
        })
      }
      <Line item={style.Line} />
      <DonationAmount data={DataAmount} style={style} timedata={timedata} />
    </DonationContainer>


  );
};

export default Donation;
