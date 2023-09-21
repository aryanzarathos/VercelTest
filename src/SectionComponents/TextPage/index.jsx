import React from 'react'
import TextHeader from './TextHeader/TextHeader'
import TextTheme4 from './Theme4/Theme4'
import TextTheme5 from './Theme5/Theme5'
import TextTheme6 from './Theme6/Theme6'
import TextTheme7 from './Theme7/Theme7'
import TextTheme8 from './Theme8/Theme8'
import TextTheme1 from './Theme1/Theme1'
import TextTheme2 from './Theme2/Theme2'
import TextTheme3 from './Theme3/Theme3'

const TextPage = () => {
  return (
    <React.Fragment>
      <TextHeader />
      <TextTheme1 />
      <TextTheme2 />
      <TextTheme3 />
      <TextTheme4 />
      <TextTheme5 />
      <TextTheme6 />
      <TextTheme7 />
      <TextTheme8 />
    </React.Fragment>
  )
}

export default TextPage