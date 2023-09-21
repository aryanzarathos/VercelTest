
import React from 'react';
import HeaderDesktop from './HeaderDesktop';
import HeaderRibbon from './HeaderRibbon';

 const  HeaderTheme2 = ()=> {
  
 
  return (
   <React.Fragment>
    <HeaderRibbon preview={preview}/>
    <HeaderDesktop preview={preview}/>
   </React.Fragment>
  )
}

export default HeaderTheme2;
