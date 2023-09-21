import React from 'react'
import { Button, CallText, Section1, Text } from './ActionTheme1.style'
// import ActionThemeTitle from './ActionThemeTitle';

const ActionTheme1 = () => {
  return (
    <>
      <CallText><h2>CALL TO ACTION</h2></CallText>
      {/* <CallSubText><h3>SUB CALL TO ACTION</h3></CallSubText> */}
      <Section1>

        <Text>
          <h2>Call to action Call to action</h2>
          <p>This is a call to action. To edit it, simply highlight the text and
            replace it with your own content. Use this call to action to show
            site visitors what they should do next.</p>
          <Button>Button</Button>
        </Text>
      </Section1>
    </>
  )
}

export default ActionTheme1
