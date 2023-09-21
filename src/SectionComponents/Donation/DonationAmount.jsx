import React, { useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import FormInput from "@/SectionCommon/Form/FormInput";
import Text from '@/SectionsLayout/Elements/TextElement/Text'
import { DonationAmountContainer, AmountWrap, AmountSelectWrap, InputWrap, TimeWrap, TimeWrapMain, Button, Doller } from "./Donation.style"






const DonationAmount = ({ data, style, timedata }) => {

  const DataAmount = data;

  const [Other, setOther] = useState(false)
  const [valueSelect, setvalueSelect] = useState(0)
  const [InputvalueSelect, setInputvalueSelect] = useState("")
  const [Active, setActive] = useState(false)
  const HandleOther = () => {
    setOther(!Other)
    setInputvalueSelect("")
    setvalueSelect(false)
  }
  const HandleAmount = (e) => {
    setInputvalueSelect(e)
    setOther(false)
    setvalueSelect(e)

  }
  const [defaultTime, setDefaultTime] = useState(true)
  const [recuringSchedult, setrecuringSchedule] = useState("")
  const HandleActive = (e) => {
    setDefaultTime(false)
    setrecuringSchedule(timedata[e])
    setActive(e)
  }
  const HandleInput = (e) => {
    let value = e.target.value
    if (value.length === 1 && value.startsWith('0')) {
      value = '';
    }
    setInputvalueSelect(value)
  }

  const Azlitref = useRef();

  const handleazlit = () => {
    Azlitref.current.open()
  }
  const Closeazlit = () => {
    Azlitref.current.close();
  }

  const symbolsArr = [",", " ", '"', `'`, "!", "@", "`", "~", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "=", "+", ".", "<", ">", "/", "?", ":", ";", "{", "}", "[", "]", `|`, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  return (
    <DonationAmountContainer item={style.DonationAmountContainer}>
      <Text tagType={style.HeaderHeadingAmount.tagType} style={style.HeaderHeadingAmount.style}>{style.HeaderHeadingAmount.text}</Text>
      <Text tagType={style.SubHeading.tagType} style={style.SubHeading.style}>{style.SubHeading.text}</Text>
      <TimeWrapMain item={style.TimeWrapMain}>
        {timedata.map((item, key) => {
          return (
            <TimeWrap item={style.TimeWrap} className={`${Active === key ? "active" : key == 0 && defaultTime ? "active" : ""}`} key={key} onClick={() => HandleActive(key)}><Text style={style.Para.style}>{item.timedata}</Text></TimeWrap>
          )
        })
        }
      </TimeWrapMain>
      <Text tagType={style.Amount.tagType} style={style.Amount.style}>&#36; {InputvalueSelect ? InputvalueSelect : Other ? InputvalueSelect : "100"}</Text>
      <AmountWrap item={style.AmountWrap}>
        {DataAmount.map((item, keys) => {

          return (
            <AmountSelectWrap
              item={style.AmountSelectWrap}
              key={keys}
              onClick={() => HandleAmount(item)}
              className={`${valueSelect === item && "active"}`}
            >
              <Text tagType={style.AmountSelect.tagType} style={style.AmountSelect.style}>&#36;{item.amount}</Text>
            </AmountSelectWrap>
          )
        })
        }
        <AmountSelectWrap item={style.AmountSelectWrap} onClick={() => HandleOther()} className={`${Other ? "active" : ""}`}><Text tagType={style.AmountSelect.tagType} style={style.AmountSelect.style}>Other</Text></AmountSelectWrap>
      </AmountWrap>
      {
        Other &&
        <InputWrap item={style.InputWrap}>
          <FormInput
            type="text"
            value={InputvalueSelect}
            onChange={(r) => HandleInput(r)}
            onKeyDown={(e) => symbolsArr.includes(e.key) && e.preventDefault()}

          />
          <Doller item={style.Doller}>&#36;</Doller>
        </InputWrap>

      }
      <Button item={style.button} onClick={(() => handleazlit())}>Donate Now</Button>


    </DonationAmountContainer>
  );
};

export default DonationAmount;
