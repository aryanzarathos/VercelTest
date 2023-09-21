import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import SectionEditor from '../../CommonComponents/Repositioning/SectionEditor'
import ButtonEditor from '../../CommonComponents/ButtonEditor/index'
import TextEditor from '../../CommonComponents/TextEditor'


const AboutUs = ({ title}) => {


  return (
    <React.Fragment>
      <SectionEditor>
        <div className='relative' style={{ position: "relative" }}>
          {title ? title : ""}
          <Link href={"/"} >{`< Back`}</Link>
          <h1 contentEditable={true}>I am about us page</h1>
          <h1>I am about us page</h1>
          <h1>I am about us page</h1>
          <h1>I am about us page</h1>
          <div>
            <TextEditor>
              <h1>I am about us page</h1>
            </TextEditor>
          </div>
          <div>
            <ButtonEditor>
              <button className="button btn-sm button-base">Button</button>
            </ButtonEditor>
          </div>
        </div>
      </SectionEditor>

      <SectionEditor Changebutton={true} Editbutton={true}>
        <div className='relative' style={{ position: "relative" }}>
          {title ? title : ""}
          <Link href={"/"} >{`< Back`}</Link>
          <h1>I am other section page</h1>
        </div>
      </SectionEditor>
    </React.Fragment>
  )
}
export default AboutUs