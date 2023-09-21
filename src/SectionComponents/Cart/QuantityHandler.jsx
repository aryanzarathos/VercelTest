import React from 'react'

const QuantityHandler = ({ pr,outofStock, quantityPlus, quantityMinus, quantity,showAllTime,...props }) => {
  return (
    <React.Fragment>
      {!pr?.stock || pr?.stock === 0 ? outofStock?outofStock:"Out Of Stock"
        :
        <React.Fragment >
          {pr?.quantity > 1 ?
            quantityMinus
            :
            showAllTime? quantityMinus:""
          }
          {quantity}
          <React.Fragment>
            {pr?.quantity === pr?.stock ?
             showAllTime? quantityPlus:""
              :
              quantityPlus
            }
          </React.Fragment>
        </React.Fragment>
      }

    </React.Fragment>
  )
}
export default QuantityHandler