import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
  box-sizing: border-box;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  word-break: break-word;

}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}



h1,h2,h3,h4,h5,h6{
  span{
    font-family: var(--global-typography-fontFamilyH1)
  }
}

p{
  span{
    font-family: var(--global-typography-fontFamilyP);
  }
}



*{
  margin: 0;
  padding: 0;
  user-select: ${({ item }) => item?.userSelection?.none}
}

    body>.skiptranslate {
      display: none;
    }

    .goog-te-banner-frame.skiptranslate {
      display: none !important;
    }

    body {
      top: 0px !important;
    }

    @media print {
      #google_translate_element {
        display: none;
      }
    }

    div#goog-gt-tt {
      display: none !important;
    }

    div#goog-gt-tt:hover {
      display: none !important;
    }

    .goog-text-highlight {
      background-color: transparent !important;
      box-shadow: none !important;
    }

    .goog-logo-link {
      display: none !important;
    }

    .goog-te-gadget {
      color: transparent !important;
      font-size: 0;
    }

#template_body {
    margin: 0;
    padding: 0;
    background: var(--global-color-penitentiary)
  }
  
  :root {

  }



  .sectionGap {
    padding: 40px 0;
  }





  /* width */
::-webkit-scrollbar {
  width: 6px;
  
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 5rem;
  background: ${({ item }) => item?.ScrollSelection?.background ? item?.ScrollSelection?.background : ` #f1f1f1`};
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${({ item }) => item?.ScrollSelection?.color ? item?.ScrollSelection?.color : `var(--global-color-primary)`} ; 
}

  ::selection {
    background-color: var(--global-color-primary);
    color:var(--global-color-penitentiary);
  }



`



export default GlobalStyle;