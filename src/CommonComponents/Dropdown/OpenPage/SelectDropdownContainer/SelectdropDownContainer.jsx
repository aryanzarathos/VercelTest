import React from 'react';
import styles from './selectDropDownContainer.module.scss';

const ProductPageSelectContainer = ({ values, NavigationValues, onChange, selectListClassName }) => {

  const handleOnSelect = (val, title) => {
    onChange(val);
  }


  return (
    <div className={`${styles.selectDropdownContainer} ${selectListClassName}`}>
      <ul className={styles.selectDropdownBody}>
        {
          NavigationValues?.length > 0 && NavigationValues?.map((item, key) => (
            <li key={key}>
              <h5 className={styles.heading}>Navigation Menu</h5>
              {
                item.mergedArray.length > 0 && item.mergedArray.map((SubItem, subKey) => (
                  <React.Fragment key={subKey}>
                    {
                      SubItem.page.length > 0 && SubItem.page.map((SubSubItem, subSubkey) => (
                        <ul key={subSubkey} className={styles.selectDropdownBodyItemUI}>
                          <li onClick={() => handleOnSelect(SubSubItem?.page_slug)}>{SubSubItem?.page_name}</li>
                        </ul>
                      ))
                    }
                  </React.Fragment>
                ))
              }
            </li>
          ))
        }
        {
          values.map((item, key) => (
            <li key={key}>
              <h5 className={styles.heading}>{item?.category_name}</h5>
              {
                item.pagemodels.length > 0 && item.pagemodels.map((subItem, subKey) => (
                  <ul key={subKey} className={styles.selectDropdownBodyItemUI}>
                    <li onClick={() => handleOnSelect(subItem?.page_slug)}>{subItem?.page_name}</li>
                  </ul>
                ))
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductPageSelectContainer