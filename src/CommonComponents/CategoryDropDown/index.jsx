import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { useDetectOutsideClick } from '../../CommonComponents/DetectOutsideClick/useDetectOutsideClick';
import style from './Category.module.scss'
import CategoryData from './CategoryData.json'

const ProductCategory = ({ setSelectedCategroy, selectedValues, handleApplyBtn }) => {

    const openref = useRef(null);
    const [openDropDown, setOpenDropDown] = useDetectOutsideClick(openref, false);
    const [Category, setCategroy] = useState("")
    const [category, setcategroy] = useState(selectedValues?.category || []);
    const [subcategory, setsubcategory] = useState(selectedValues?.subcategory || []);
    const [subsubcategory, setsubsubcategory] = useState(selectedValues?.subsubcategory || []);

    const dispatch = useDispatch();

    const { user, getCategorylistSuccess, getCategorylistData, } = useSelector((state) => {
        return {
            user: state.user,
            getCategorylistSuccess: state.ecomCategory.adminCategoryList.success,
            getCategorylistData: state.ecomCategory.adminCategoryList.data,
        }
    })

    const handleOpenDrop = () => {
        setOpenDropDown(!openDropDown)
    }

    useEffect(() => {
        if (category && subcategory && subsubcategory) {
            setCategroy(category.length + subcategory.length + subsubcategory.length);
        }
    }, [category, subcategory, subsubcategory])

    const handleOnChangeCategory = (e) => {
        let inputChecked = e.target.checked;
        let inputValue = e.target.value;
        let inputName = e.target.name;
        let array = category;
        if (inputChecked) {
            array.push(inputValue);
        } else {
            let index = array.indexOf(inputValue);
            array.splice(index, 1);
        }
        setcategroy([...array]);
    }

    const handleOnChangeSubCategory = (e) => {
        let inputChecked = e.target.checked;
        let inputValue = e.target.value;
        let inputName = e.target.name;
        let array = subcategory;
        if (inputChecked) {
            array.push(inputValue);
        } else {
            let index = array.indexOf(inputValue);
            array.splice(index, 1);
        }
        setsubcategory([...array]);
    }

    const handleOnChangeSubSubCategory = (e) => {
        let inputChecked = e.target.checked;
        let inputValue = e.target.value;
        let inputName = e.target.name;
        let array = subsubcategory;
        if (inputChecked) {
            array.push(inputValue);
        } else {
            let index = array.indexOf(inputValue);
            array.splice(index, 1);
        }
        setsubsubcategory([...array]);
    }

    useEffect(() => {
        setSelectedCategroy({
            subsubcategory: subsubcategory,
            category: category,
            subcategory: subcategory
        })

    }, [category, subcategory, subsubcategory]);

    const handleCategoryApplyBtn = () => {
        handleApplyBtn();
    }

    return (
        <div className={style.ProductLatestCategoryContainer} ref={openref}>
            <div className={style.categoryContainer}>
                <div className={style.category_dropdown}>
                    <button className={` ${true ? style.categoryDropDpwn_btn_border_radius : style.categoryDropDpwn_btn} `} height={"50px"} onClick={handleOpenDrop}>
                        {
                            Category ? `${Category} Selected`
                                : "Categories"
                        }

                        <i className={`${style.icon_openIcon} ${style.icons} ${style.icon_dropdown} ${style.icons_s} ${openDropDown ? style.rotate_icon : ''}`}> </i> </button>
                    {
                        openDropDown &&
                        <div className={`${style.dropdown_content}`}>
                            <div className={style.dropdown_content_wrap}>
                                <React.Fragment>
                                    {getCategorylistSuccess && getCategorylistData && getCategorylistData?.data &&
                                        getCategorylistData?.data?.length && getCategorylistData?.data?.map((item, key) => {
                                            return (
                                                <React.Fragment key={key}>
                                                    <ul
                                                    // onClick={() => onChangeCategorySelect(item, item.categoryName)}
                                                    >
                                                        <label className={style.small}>
                                                            <input
                                                                type="checkbox"
                                                                name={item.categoryName}
                                                                value={item._id}
                                                                checked={category?.includes(item._id) || false}
                                                                onChange={handleOnChangeCategory}
                                                            />
                                                            {item.categoryName}
                                                        </label> </ul>
                                                    {item.subcategories?.length > 0 ? item.subcategories.map((subItem, subkey) => {
                                                        return (
                                                            <React.Fragment key={subkey}>
                                                                <ul>
                                                                    <label className={style.small}>
                                                                        <input
                                                                            type="checkbox"
                                                                            name={`${item.categoryName} > ${subItem.subCategoryName}`}
                                                                            value={subItem._id}
                                                                            checked={subcategory?.includes(subItem._id) || false}
                                                                            onChange={handleOnChangeSubCategory}
                                                                        />
                                                                        {/* {`${item.categoryName} > ${subItem.subCategoryName}`} */}
                                                                        <span>
                                                                            {`${item.categoryName}  `} <span className={style.subCategoryName}>{`> ${subItem.subCategoryName} `}</span>
                                                                        </span>
                                                                    </label>
                                                                </ul>
                                                                {
                                                                    subItem.subsubcategories?.length > 0 ? subItem.subsubcategories.map((subSubItem, subSubKey) => {
                                                                        return (
                                                                            <React.Fragment key={subSubKey}>
                                                                                <ul >
                                                                                    <label className={style.small}>
                                                                                        <input
                                                                                            type="checkbox"
                                                                                            name={`${item.categoryName} > ${subItem.subCategoryName} > ${subSubItem.subSubCategoryName}`}
                                                                                            value={subSubItem._id}
                                                                                            checked={subsubcategory?.includes(subSubItem._id) || false}
                                                                                            onChange={handleOnChangeSubSubCategory}
                                                                                        />
                                                                                        <span>
                                                                                            {`${item.categoryName} > ${subItem.subCategoryName}  `} <span className={style.subSubCategoryName}>{`> ${subSubItem.subSubCategoryName}`}</span>
                                                                                        </span>
                                                                                    </label>
                                                                                </ul>
                                                                            </React.Fragment>
                                                                        )
                                                                    }) : ("")
                                                                }
                                                            </React.Fragment>
                                                        )
                                                    }) : ("")
                                                    }
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </React.Fragment>
                            </div>
                            {<div className={style.apply_wrap}>
                                <button className={style.apply_btn} onClick={handleCategoryApplyBtn}>Apply</button></div>}
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}

export default ProductCategory