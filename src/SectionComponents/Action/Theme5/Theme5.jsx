import React from 'react'
import background from "../../../Assets/SectionComponent/Images/Action/back-ground.png";
import Image from 'next/image';
import { Button, CallText, Content, Section5, Text } from './ActionTheme5.style';

const ActionTheme5 = () => {
  return (
    <>
      <CallText><h2>CALL TO ACTION</h2></CallText>
      {/* <CallSubText><h3>SUB CALL TO ACTION</h3></CallSubText> */}
      <Section5>
        <Image src={background} alt={"img"} />
        <Content>
          <Text>
            <h2>Call to action Call to action</h2>
            <p>This is a call to action. To edit it, simply highlight the text and
              replace it with your own content. Use this call to action to show
              site visitors what they should do next</p>
            <Button>Button</Button>
          </Text>
        </Content>
      </Section5>
    </>

  )
}

export default ActionTheme5
