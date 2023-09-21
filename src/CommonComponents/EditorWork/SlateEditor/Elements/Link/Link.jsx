import React from 'react';
import { useFocused, useSelected, useSlateStatic } from 'slate-react'

import { removeLink } from '../../utils/link.js'
import unlink from '../../Toolbar/toolbarIcons/unlink.svg'
// import './styles.css'
const Link = ({ attributes, element, children }) => {
    const editor = useSlateStatic();
    const selected = useSelected();
    const focused = useFocused();
    return (
        <div className='link'>
            {element?.data?.action ? (
                <>
                    {
                        (element?.data?.action === 'webUrl' || element?.data?.action === 'download') ? (
                            <a href={element.href} {...attributes} {...element.atr} target='_blank'>
                                {children}
                            </a>
                        ) : element?.data?.action === 'email' ? (
                            <a href={`mailto:${element.href}`} {...attributes} {...element.atr} target='_blank'>
                                {children}
                            </a>
                        ) : element?.data?.action === 'call' ? (
                            <a href={`tel:${element.href}`} {...attributes} {...element.atr} target='_blank'>
                                {children}
                            </a>
                        ) : element?.data?.action === 'openpage' ? (
                            <a href={element.href} {...attributes} {...element.atr} target='_blank'>
                                {children}
                            </a>
                        ) : <a href={element.href} {...attributes} {...element.attr} target={element.target}>{children}</a>
                    }

                </>

            ) : (
                <a href={element.href} {...attributes} {...element.attr} target={element.target}>{children}</a>
            )
            }
            {/* {selected && focused && (
                <div className='link-popup' contentEditable={false}>
                    <a href={element.href} target={element.target}>{element.href}</a>
                    <button onClick={()=>removeLink(editor)}><img src={unlink} alt="" /></button>
                </div>
            )} */}
        </div>
    )
}

export default Link