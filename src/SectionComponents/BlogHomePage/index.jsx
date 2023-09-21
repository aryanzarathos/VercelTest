import React from 'react'
import BolgHomeTheme1 from './Theme1/Theme1'
import BolgHomeTheme2 from './Theme2/Theme2'
import BlogHomeTheme3 from './Theme3/Theme3'
import BlogHomeTheme4 from './Theme4/Theme4'
import { getWebsiteBlogs } from '@/store/actions/instituteblogs/Instituteblog'
import { useDispatch } from 'react-redux'
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl'

const BlogHome = () => {

    

    // console.log(user,preview,"previewpreviewpreviewpreviewpreviewpreview")
    return (
        <>
            <BolgHomeTheme1 preview={preview} industry={"Ecommerce"} />
            <BolgHomeTheme2 preview={preview} industry={"Ecommerce"} />
            <BlogHomeTheme3 preview={preview} industry={"Ecommerce"} />
            <BlogHomeTheme4 preview={preview} industry={"Ecommerce"} />
        </>
    )
}

export default BlogHome
