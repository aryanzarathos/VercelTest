import React from 'react';
import CheckboxInput from '../../../../../CommonComponents/Form/CheckboxInput';
import FormInput from '../../../../../CommonComponents/Form/FormInput';
import styles from './externalPagesTab.module.scss';

const ExternalPagesTab = () => {
  return (
    <div className={styles.externalPagesTabContainer}>
      <div className={styles.externalPagesWrap}>
        <div className={styles.fromWrapper}>
          <div className={styles.linkFormWrap}>
            <FormInput
              label={'Link'}
              labelPosition={'top'}
              type="text"
              placeholder={'Enter external page url'}
            />
          </div>
          <div className={styles.pageNameWrap}>
            <FormInput
              label={'Page Name'}
              labelPosition={'top'}
              type="text"
              placeholder={'Enter the page name'}
            />
          </div>
        </div>
        <div className={styles.checkboxWrapper}>
          <CheckboxInput
            className={styles.checkboxClass}
            LabelClass={styles.checkboxLableClass}
            name={'newtab'}
            label={'Open in new tab'}
          />
        </div>
      </div>
      <div className={`${styles.addPageBtnWrapper} text-right`}>
        <button className='button btn-2xs button-primary'>Add Page</button>
      </div>
    </div>
  )
}

export default ExternalPagesTab