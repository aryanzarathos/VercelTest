import React, { useEffect, useState } from 'react';
import styles from './inputChip.module.scss';

const InputChip = ({ label, placeholder, meta_keywords, setmeta_keywords }) => {
  const [metaInputWrapper, setMetaInputWrapper] = useState(false);
  const [metakeywords, setMetakeywords] = useState([]);
  const [inputKey, setInputKey] = useState("");

  useEffect(() => {
    if (meta_keywords && meta_keywords?.length > 0) {
      setMetakeywords([...meta_keywords]);
    }
  }, [meta_keywords])

  const handleInput = (e) => {

    let array = metakeywords;
    let inputValue = e.target.value;
    setInputKey(inputValue);
    let key = e.key
    if (e.key === "Enter") {
      array.push(inputValue);
      setMetakeywords([...array]);
      setmeta_keywords([...array]);
      setInputKey("");
    }
  }

  const handleRemoveKeyword = (key) => {
    let array = metakeywords;
    array.splice(key, 1);
    setMetakeywords([...array]);
    setmeta_keywords([...array]);
  }

  return (
    <div className={styles.inputChipContainer}>
      {
        label ? (
          <label className={styles.labelHeading}>
            {label}
          </label>
        )
          : ''
      }
      <div className={`${styles.metaKeywordsWrapper} ${metaInputWrapper ? `${styles.metaKeywordsBorder}` : ''}`} onClick={() => setMetaInputWrapper(!metaInputWrapper)}>
        {/* <p className="placeholder  text-xxs w-300">Enter meta keywords</p>
               <p className="text-xxs w-500 base" > hello people</p> */}
        <div className={styles.metaKeywordsWrap}>
          {
            metakeywords?.length ? metakeywords?.map((options, key) => (
              <div className={styles.chipsContainer} key={key}>
                <div role={'button'} className={styles.chipButton}><span className={styles.chipName}>{options}</span>
                  <i className={styles.iconCross} onClick={() => handleRemoveKeyword(key)}></i></div>
              </div>
            )) : ""
          }
          <div className={styles.inputContainer}>
            <input type="text" placeholder={placeholder} value={inputKey}
              onChange={handleInput}
              onKeyUp={handleInput}
              // onKeyDown={handleInput}
              name="meta_input" className={styles.metaKeywordInput} />
            {/* onKeyDown={(e) => e.key === "Enter" ? handleSave(e) : e.key === "Backspace" && !e.target.value && handleRemove(e)} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InputChip