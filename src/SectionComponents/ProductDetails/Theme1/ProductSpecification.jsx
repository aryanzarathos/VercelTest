import React from 'react'
import {  Tabs__Content, Tabs__Content__List, Tabs__Content__List__Item } from './ProductDetailsTheme1.style';


const ProductSpecification = ({styles,data}) => {
    //// console.log(data,"line 6")
    return (
        <Tabs__Content item={styles.Tabs__Content}>
            <Tabs__Content__List item={styles?.Tabs__Content__List}>
                <Tabs__Content__List__Item dangerouslySetInnerHTML={{
                                        __html:data
                                    }} item={styles?.Tabs__Content__List__Item}></Tabs__Content__List__Item>
            </Tabs__Content__List>
        </Tabs__Content>
    )
}

export default ProductSpecification