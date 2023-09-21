import React from 'react'
import styles from './FooterElement.module.scss'
import SwitchButton from '../../../../../CommonComponents/SwitchButton'
const FooterElement = () => {
    return (
        <div className={styles.FooterElementHero}>
            <div className={styles.HeadingWrapper}>
                <h1 className='text-xxs w-500 base '>Footer Elements</h1>
            </div>
            <div className={styles.formWrapper }>
                <form >
                    <div className="container-fluid">
                        <div className="row between-sm middle-sm pb-20">
                            <p className='text-xxs w-400 black' >Website Logo</p>
                            <SwitchButton />
                        </div>
                        <div className="row between-sm middle-sm pb-20">
                            <p className='text-xxs w-400 black' >Website Name</p>
                            <SwitchButton />
                        </div>
                        <div className="row between-sm middle-sm pb-20">
                            <p className='text-xxs w-400 black' >Description</p>
                            <SwitchButton />
                        </div>
                        <div className="row between-sm middle-sm pb-20">
                            <p className='text-xxs w-400 black' >Quick Links</p>
                            <SwitchButton />
                        </div>
                        <div className="row between-sm middle-sm pb-20">
                            <p className='text-xxs w-400 black' >Policies</p>
                            <SwitchButton />
                        </div>
                        <div className="row between-sm middle-sm pb-20">
                            <p className='text-xxs w-400 black' >Location</p>
                            <SwitchButton />
                        </div>
                        <div className="row between-sm middle-sm pb-20">
                            <p className='text-xxs w-400 black' >Social media</p>
                            <SwitchButton />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FooterElement
