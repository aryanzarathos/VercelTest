import { Helmet } from "react-helmet"
import { useSelector } from "react-redux"
import React from "react"
const FontLoader = ({ headerFont, paragraphFont }) => {
   const { template } = useSelector((state) => {
      return {
         template: state.websiteTemplate.getTemplate.data
      }
   })
   return (

      template?.font_family?.length ?
         template?.font_family?.map((item, key) => {
            return (
               <Helmet key={key}>
                  <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${encodeURIComponent(item)}&display=swap`} />
               </Helmet>
            )
         }) :
         <Helmet>
            <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${"Poppins"}&display=swap`} />
            <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=${"Roboto"}&display=swap`} />
         </Helmet>





   )
}
export default FontLoader