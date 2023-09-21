import React from 'react'
import Image2 from "../../../Assets/SectionComponent/Images/Action/CallToAction3.png";
import Image from 'next/image';
import { Button, CallText, InnerContent, SectionBlue, Text } from './Actiontheme3.style';

const ActionTheme3 = () => {
  return (
    <>
      <CallText><h2>CALL TO ACTION</h2></CallText>
      {/* <CallSubText><h3>SUB CALL TO ACTION</h3></CallSubText> */}
      <SectionBlue>
      <Image src={Image2} alt={"sszzx"}/>
        {/* <Image2 /> */}
        <InnerContent>
          <Text>
            <h2>Call to action Call to action</h2>
            <p>This is a call to action. To edit it, simply highlight the text and
              replace it with your own content. Use this call to action to show
              site visitors what they should do next</p>
            <Button>Button</Button>
          </Text>
        </InnerContent>
      </SectionBlue>
    </>

  )
}

export default ActionTheme3
