import React from 'react';
import FormInput from '../../../../../CommonComponents/Form/FormInput';
// import FormInput from '../../../../Common/Form/FormInput';
import styles from './socialMedia.module.scss';

const SocialMedia = () => {
  return (
    <div className={styles.socialMediaContainer}>
      <p className={`${styles.socialMediaTitleText} w-400 base`}>These url will be linked to the header and footer social media icons.</p>
      <div className={styles.socialMediaWrapper}>
        <div className={styles.formWrapper}>
            <FormInput
             label={'Facebook'}
             labelPosition={'top'}
             placeholder="eg. https://www.facebook.com/Ed..."
             name={'facebookInput'}
             className="mt-10"
             LabelClassName={`${styles.LabelClassName}`}
            />
        </div>

        <div className={styles.formWrapper}>
            <FormInput
             label={'Youtube'}
             labelPosition={'top'}
             placeholder="eg. https://www.youtube.com/wat..."
             name={'youtubeInput'}
             className="mt-10"
             LabelClassName={`${styles.LabelClassName}`}
            />
        </div>

        <div className={styles.formWrapper}>
            <FormInput
             label={'Instagram'}
             labelPosition={'top'}
             placeholder="eg. https://www.instagram.com/ed..."
             name={'instagramInput'}
             className="mt-10"
             LabelClassName={`${styles.LabelClassName}`}
            />
        </div>
        <div className={styles.formWrapper}>
            <FormInput
             label={'Twitter'}
             labelPosition={'top'}
             placeholder="eg. https://twitter.com/EdneedTec..."
             name={'twitterInput'}
             className="mt-10"
             LabelClassName={`${styles.LabelClassName}`}
            />
        </div>

        <div className={styles.formWrapper}>
            <FormInput
             label={'Linkedin'}
             labelPosition={'top'}
             placeholder="eg. https://www.linkedin.com/com..."
             name={'linkedinInput'}
             className="mt-10"
             LabelClassName={`${styles.LabelClassName}`}
            />
        </div>
      </div>
    </div>
  )
}

export default SocialMedia