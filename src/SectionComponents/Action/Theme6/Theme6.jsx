import React from 'react'
import lapcup from "../../../Assets/SectionComponent/Images/Action/Rectangle1368.png";
import Image from 'next/image';
import { ActionLt, Button, CallText, FigureRt, Section6, Text } from './ActionTheme6.style';

const ActionTheme6 = () => {
  return (
    <>
        <CallText><h2>CALL TO ACTION</h2></CallText>
        {/* <CallSubText><h3>SUB CALL TO ACTION</h3></CallSubText> */}
      <Section6>
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
          <Image src={lapcup} alt='img' />
        </FigureRt>
      </Section6>
    </>

  )
}

export default ActionTheme6
