import React from 'react';
import styles from './EditFooter.module.scss';
// import InputColorPicker from '../../../../../CommonComponents/Form/InputColorPicker'
const FooterElement = () => {
    const submitHandle = (e) => {
        e.preventDefault();
    }
    return (
        <div className={styles.EditFooterHero}>
            <div className={styles.HeadingWrapper}>
                <h1 className='text-xxs w-500 black'>Social Media</h1>
            </div>
            <div className={`${styles.formWrapper} pb-50`}>
                <form action="" onSubmit={submitHandle}>
                    {
                        // <InputColorPicker selectedColor={'#1F2B6C'} />
                    }
                    <div className={styles.SocialWrapper}>
                        <div className="pb-10 ">
                            <label className={`text-2xs w-300 black mb-5 ${styles.inlineLabel}`}>Facebook</label>
                            <input type="text" className={`text-2xs w-400 ${styles.formControl}`} name="" id="" placeholder='Your social media link' />
                        </div>
                        <div className="pb-10">
                            <label className={`text-2xs w-300 black mb-5 ${styles.inlineLabel}`}>Instagram</label>
                            <input type="text" className={`text-2xs w-400 ${styles.formControl}`} name="" id="" placeholder='Your social media link' />
                        </div>
                        <div className="pb-10">
                            <label className={`text-2xs w-300 black mb-5 ${styles.inlineLabel}`}>LinkedIn</label>
                            <input type="text" className={`text-2xs w-400 ${styles.formControl}`} name="" id="" placeholder='Your social media link' />
                        </div>
                        <div className=" pb-10">
                            <label className={`text-2xs w-300 black mb-5 ${styles.inlineLabel}`}>Youtube</label>
                            <input type="text" className={`text-2xs w-400 ${styles.formControl}`} name="" id="" placeholder='Your social media link' />
                        </div>
                        <div className=" pb-10">
                            <label className={`text-2xs w-300 black mb-5 ${styles.inlineLabel}`}>Twitter</label>
                            <input type="text" className={`text-2xs w-400 ${styles.formControl}`} name="" id="" placeholder='Your social media link' />
                        </div>
                    </div>
                    <div className={`${styles.HeadingWrapper} bg-silver pb-15 pt-15 mb-10`}>
                        <h1 className='text-xxs w-500 black'>Appearance</h1>
                    </div>
                    <div className="container-fluid">
                        <div className={`${styles.SocialWrapper} ${styles.ColorPickerWrapper}  row  between-sm middle-sm`}>
                            <label className='text-xxs w-400 black '>Footer Colour</label>
                            <div className={`${styles.ColorPickerWrap} row middle-sm`}>
                                <button className={`${styles.ColorType} text-3xs w-400 mr-15`}>Hex</button>
                                <p className={`${styles.ColorCode} text-2xs w-400 mr-10`}>#1F2B6C</p>
                                <div className={styles.ColorPicker}>
                                    {
                                        // <InputColorPicker selectedColor={'#1F2B6C'} />
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.SocialWrapper} ${styles.ColorPickerWrapper}  row  between-sm middle-sm`}>
                            <label className='text-xxs w-400 black '>Text Colour</label>
                            <div className={`${styles.ColorPickerWrap} row middle-sm`}>
                                <button className={`${styles.ColorType} text-3xs w-400 mr-15`}>Hex</button>
                                <p className={`${styles.ColorCode} text-2xs w-400 mr-10`}>#FFFFFF</p>
                                <div className={styles.ColorPicker}>
                                    {
                                        // <InputColorPicker selectedColor={'#1F2B6C'} />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default FooterElement
