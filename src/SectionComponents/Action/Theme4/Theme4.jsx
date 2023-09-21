import React from 'react'
import Image4 from "../../../Assets/SectionComponent/Images/Action/CallToAction4.png";
import Image from 'next/image';
import { ActionLt, Button, CallText, FigureRt, Section4, Text } from './ActionTheme4.style';

const ActionTheme4 = () => {
  return (
    <>
      <CallText><h2>CALL TO ACTION</h2></CallText>
      {/* <CallSubText><h3>SUB CALL TO ACTION</h3></CallSubText> */}
      <Section4>
        <ActionLt>
          <Text>
            <h2>Call to action Call to action</h2>
            <p>This is a call to action. To edit it, simply highlight the text and
              replace it with your own content. Use this call to action to show
              site visitors what they should do next</p>
            <Button>Button</Button>
          </Text>
        </ActionLt>
        <FigureRt>
        <Image src={Image4} alt={"sszzx"}/>
        </FigureRt>
      </Section4>
    </>

  )
}

export default ActionTheme4
