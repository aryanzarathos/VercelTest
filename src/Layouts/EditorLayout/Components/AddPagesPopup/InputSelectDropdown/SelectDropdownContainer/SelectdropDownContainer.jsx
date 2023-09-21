import React from 'react';
import styles from './selectDropDownContainer.module.scss';

const InputSelectdropDownContainer = ({ values, onChange, selectListClassName }) => {

  const handleOnSelect = (val, categoryType, valueObj) => {
    if (categoryType === "Category") {
      onChange(val, valueObj);
    } else if (categoryType === "SubCategory") {
      onChange(val, valueObj);
    } else {
      onChange(val, valueObj);
    }
  }

  return (
    <div className={`${styles.selectdropDowncontainerContainer} ${selectListClassName}`}>
      <ul className={styles.ListWrap}>
        {values && values?.length ?
          <>
            {values?.filter((item) => !item?.pagedata).length ?
              values?.filter((item) => !item?.pagedata)?.map((item, key) => {
                return (
                  <React.Fragment key={key}>
                    <li className={styles.List} onClick={() => handleOnSelect(item?.categoryName, "Category", item)}>{item?.categoryName}</li>
                  </React.Fragment>
                )
              })
              :
              ("")
            }
            {
              values?.filter((item) => item?.data && item?.data?.length > 0)?.length ?
                values?.filter((item) => item?.data && item?.data?.length > 0)?.map((item, key) => {
                  return (
                    item?.data?.filter((item) => !item?.pagedata)?.length ? item?.data?.filter((item) => !item?.pagedata)?.map((subItem, subkey) => {
                      return (
                        <React.Fragment key={subkey}>
                          <li onClick={() => handleOnSelect(`${item?.categoryName} > ${subItem?.subCategoryName}`, "SubCategory", subItem)} className={styles.List}>{`${item?.categoryName} > ${subItem?.subCategoryName}`}</li>
                        </React.Fragment>
                      )
                    }) : ("")
                  )
                })
                :
                ("")
            }
            {values?.filter((item) => item?.data && item?.data?.length > 0)?.length ?
              values?.filter((item) => item?.data && item?.data?.length > 0)?.map((item, key) => {
                return (
                  item?.data?.filter((item) => item?.data && item?.data?.length > 0)?.length ?
                    item?.data?.filter((item) => item?.data && item?.data?.length > 0)?.map((subItem, subkey) => {
                      return (
                        <React.Fragment key={subkey}>
                          {subItem?.data?.filter((item) => !item?.pagedata)?.length > 0 ?
                            subItem?.data?.filter((item) => !item?.pagedata)?.map((subSubItem, subSubKey) => {
                              return (
                                <React.Fragment key={subSubKey}>
                                  <li onClick={() => handleOnSelect(`${item?.categoryName} > ${subItem?.subCategoryName} > ${subSubItem?.subSubCategoryName}`, "SubSubCategory", subSubItem)} className={styles.List}>{`${item?.categoryName} > ${subItem?.subCategoryName} > ${subSubItem?.subSubCategoryName}`}</li>
                                </React.Fragment>
                              )
                            }) : ("")
                          }
                        </React.Fragment>
                      )
                    }) : ("")
                )
              })
              :
              ("")
            }
          </>
          :
          <p className={styles.NotFound}>{"No Record Found"}</p>
        }
      </ul>
    </div>
  )
}

export default InputSelectdropDownContainer