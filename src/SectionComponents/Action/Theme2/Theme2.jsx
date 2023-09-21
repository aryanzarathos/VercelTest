import React from 'react'
import ImageS from "../../../Assets/SectionComponent/Images/Action/CallToAction1.png";
import Image from 'next/image';
import { ActionLtSection2, Button, CallText, FigureRt, Section2, Text } from './ActionTheme2.style';

const ActionTheme2 = () => {
  return (
    <>
      <CallText><h2>CALL TO ACTION</h2></CallText>
      {/* <CallSubText><h3>SUB CALL TO ACTION</h3></CallSubText> */}
      <Section2>
        <ActionLtSection2>
          <Text>
            <h2>Call to action Call to action</h2>
            <p>This is a call to action. To edit it, simply highlight the text and
              replace it with your own content. Use this call to action to show
              site visitors what they should do next</p>
            <Button>Button</Button>
          </Text>
        </ActionLtSection2>
        <FigureRt>
        <Image src={ImageS} alt={"sszzx"}/>
        </FigureRt>
      </Section2>
    </>
  )
}

export default ActionTheme2
