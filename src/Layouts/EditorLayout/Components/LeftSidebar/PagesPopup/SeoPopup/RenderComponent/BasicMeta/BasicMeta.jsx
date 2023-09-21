import React, { useEffect, useState } from 'react';
import styles from "./BasicMeta.module.scss"
import FormInput from '../../../../../../../../CommonComponents/Form/FormInput';
import FormTextArea from '../../../../../../../../CommonComponents/Form/FormTextArea';
import InputChip from '../../../../../../../../CommonComponents/InputChip/InputChip';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import FormError from '@/CommonComponents/Form/FormError';

const BasicMeta = ({ meta_title, meta_desc, meta_keywords, url_slug, handleonChange, checkAvailability, meta_titleError,
    handlePageSlugChange, setmeta_keywords, url_slugError }) => {

    return (
        <React.Fragment>
            <div className={styles.BasicMeta_Wrapper}>
                <div className={styles.LeftPanel}>
                    <div className={styles.LeftPanel_Wrap}>
                        <div className={styles.FormField_Wrap}>
                            <FormInput
                                labelPosition="top"
                                type="text"
                                label="Meta Title "
                                placeholder="Home"
                                value={meta_title}
                                maxlength={60}
                                LabelClassName={styles.label}
                                className={styles.FormControl}
                                onChange={(e) => handleonChange(e, "title")}
                            />
                            <FormError show={meta_titleError && !meta_title} error="Meta Title required." />
                        </div>
                        <div className={styles.FormField_Wrap}>
                            <FormTextArea
                                labelPosition="top"
                                label="Meta Description"
                                placeholder="K8 School is India’s First and Only Recognised Online School. K8 School in partnership with Discovery Education is the world’s most affordable online School."
                                LabelClassName={styles.label}
                                className={styles.FormControl}
                                rows={5}
                                value={meta_desc}
                                maxlength={160}
                                onChange={(e) => handleonChange(e, "desc")}
                            />
                        </div>
                        <div className={styles.FormField_Wrap}>
                            <InputChip
                                meta_keywords={meta_keywords}
                                setmeta_keywords={setmeta_keywords}
                                label={'Meta Keywords'}
                                placeholder={'Enter Keywords '}
                            />
                        </div>
                        <div className={styles.FormField_Wrap}>
                            <FormInput
                                labelPosition="top"
                                label="URL Slug"
                                placeholder="homepage"
                                value={url_slug}
                                LabelClassName={styles.label}
                                className={styles.FormControl}
                                onChange={(e) => handlePageSlugChange(e)}
                            />
                            <FormError
                                show={checkAvailability === "Not Available!"}
                                error={"Slug is not avialable."}
                            />
                            <FormError
                                show={url_slugError}
                                error={"please enter slug."}
                            />
                            {checkAvailability === "Available" && url_slug ?
                                <p>Slug is avialable.</p>
                                : ""
                            }
                        </div>
                    </div>
                    {/* <div className={styles.ButtonGroup}>
                        <button type="button" className="button btn-o-primary btn-oval btn-xs" onClick={closeModal}>Cancel</button>
                        <button type="button" className="button button-primary btn-oval btn-xs" onClick={handleDoneBtn}>Done</button>
                    </div> */}
                </div>
                <div className={styles.RightPanel}>
                    <h4 className={styles.title}>Website Meta Preview</h4>
                    <button className={styles.SearchEngine_button}>Search Engine Preview</button>
                    <p className={`${styles.GoogleSearch_title}`}>Google Search</p>
                    <a href={AppLinkUrl.getHost() ? `https://${AppLinkUrl.getHost()}` : `https://${AppLinkUrl.subdomain()}.webneed.com`}
                        target="_blank" className={`${styles.Link}`}>
                        {AppLinkUrl.getHost() ?
                            `https://${AppLinkUrl.getHost()}`
                            :
                            `https://${AppLinkUrl.subdomain()}.webneed.com`
                        }
                    </a>

                    <h5 className={styles.subTitle}>
                        {meta_title}
                        {/* India&#10076;s First  Recognised Online
                        School I Your Child Deserves */}
                    </h5>

                    <p className={styles.discription}>
                        {meta_desc}
                        {/* K8 School is India&#10076;s First and Only Recognised Online School. K8 School in partnership with Discovery Education is the world&#10076;s most
                        affordable online School. */}
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default BasicMeta