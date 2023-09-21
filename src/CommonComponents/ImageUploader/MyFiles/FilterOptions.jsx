import React, { forwardRef, useState } from 'react'
import CheckboxInput from '../../Form/CheckboxInput';
import styles from "./myFiles.module.scss";

// eslint-disable-next-line react/display-name
const FilterOptions = forwardRef(({ applyFilter, filter, className }, ref) => {
  const [selectedFilter, setSelectedFilter] = useState(filter || [])
  const filterArray = [
    { value: "img", show: "Images" },
    { value: "video", show: "Videos" },
    { value: "file", show: "Files" },
    { value: "music", show: "Audio" },
  ];
  const handleSelect = (e, value) => {
    let array = selectedFilter
    if (e.target.checked) {
      array.push(value)
    } else {
      let index = array.indexOf(value)
      array.splice(index, 1)
    }
    setSelectedFilter([...array])
  }
  const apply = () => {
    applyFilter(selectedFilter)
  }
  return (
    <div ref={ref} className={className}>
      {
        filterArray.map((item, key) => {
          return (
            <div className={styles.collectionLatestWrap} key={key}>
              <CheckboxInput
                label={item.show}
                LabelClass={`${styles.labelHeading } ${styles.eCommCheckboxCenter}`}
                className={`${styles.eCommCheckbox} ${styles.checkBoxWrap}`}
                value={item.value}
                key={key}
                checked={selectedFilter.includes(item.value)}
                onChange={(e) => handleSelect(e, item.value)}
              />
            </div>
          )
        })
      }
      <div className={`${styles.btnWrap} inline`}>
        <button className={`button btn-oval button-primary ${styles.btnApply}`} onClick={() => apply()}>Apply</button>
      </div>
    </div>
  )
})
export default FilterOptions