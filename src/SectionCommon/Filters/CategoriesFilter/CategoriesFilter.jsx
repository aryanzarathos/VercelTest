import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InputCheckbox from '../../Form/InputCheckbox'
import { CategorisFilterContainer, FilterList, CatergoryCheckBoxWrap, SubcategoryCheckBoxWrap, SubSubcategoryCheckBoxWrap, ArrowIconSpan } from './CategoriesFilter.style'
import getCategorylistData from './data.json'
import Text from '../../../SectionsLayout/Elements/TextElement/Text'
import ArrowUp from '../../../Assets/SectionComponent/Icons/arrowup.svg'
import ArrowDown from '../../../Assets/SectionComponent/Icons/arrowdown.svg'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryFilterChanges, RemoveCategoryFilterChanges } from '@/store/actions/productList';
import { useRouter } from 'next/router';
const CategoriesFilter = ({ Style, CategoryData, mobileFilter, getSelectedCategories }) => {
  const [activeCategory, setActiveCategory] = useState(false)
  const [activeSubcategory, setActiveSubcategory] = useState(false);
  const [activeFilter, setActiveFilter] = useState(-1);
  const router = useRouter();
  const { productFilters } = useSelector((state) => {
    return {
      productFilters: state.productList?.productFilters?.data
    }
  })
  const dispatch = useDispatch();
  const handleActiveCategory = (val) => {
    setActiveFilter(activeFilter === val ? -1 : val)
    // setActiveCategory();
  }
  const handleactiveSubcategory = (val) => {
    setActiveSubcategory((prevState) => val === prevState ? '' : val);
  }
  const [categorylevel, SetCategoryLevel] = useState(productFilters?.level?.length ? { level: productFilters?.level } : {
    level: [
      { "category_level": 0, "_id": [] },
      { "category_level": 1, "_id": [] },
      { "category_level": 2, "_id": [] }
    ]
  })
  const handleCategoryFilters = (item, i, e) => {
    let data = categorylevel?.level;
    switch (item?.category_level) {
      case 0:
        if (e.target.checked) {
          data[0]?._id.push(item?._id)
          for (let i = 0; i < item?.data?.length; i++) {
            data[1]?._id.push(item?.data[i]?._id);
            for (let j = 0; j < item?.data[i]?.data?.length; j++) {
              data[2]?._id.push(item?.data[i]?.data[j]?._id);
            }
          }
        } else if (!e.target.checked) {
          let data = categorylevel?.level;
          if (data[item?.category_level]?._id) data[0]._id = data[item?.category_level]?._id.filter((fil) => fil !== item?._id);
          for (let i = 0; i < item?.data?.length; i++) {
            if (data[1]?._id) data[1]._id = data[1]?._id.filter((fil) => fil !== item?.data[i]?._id);
            for (let j = 0; j < item?.data[i]?.data?.length; j++) {
              if (data[2]?._id) data[2]._id = data[2]?._id.filter((fil) => fil !== item?.data[i]?.data[j]?._id);
            }
          }
        }
        break;
      case 1:
        if (e.target.checked) {
          data[1]?._id.push(item?._id)
          for (let j = 0; j < item?.data?.length; j++) {
            data[2]?._id.push(item?.data[j]?._id);
          }
        } else if (!e.target.checked) {
          let data = categorylevel?.level;
          if (data[item?.category_level]?._id) data[1]._id = data[item?.category_level]?._id.filter((fil) => fil !== item?._id);
          for (let j = 0; j < item?.data?.length; j++) {
            if (data[2]?._id) data[2]._id = data[2]?._id.filter((fil) => fil !== item?.data[j]?._id);
          }
        }
        break;
      case 2:
        if (e.target.checked) {
          data[2]?._id.push(item?._id)
        } else if (!e.target.checked) {
          let data = categorylevel?.level;
          if (data[item?.category_level]?._id) data[2]._id = data[item?.category_level]?._id.filter((fil) => fil !== item?._id);
        }
        break;
    }
    if (mobileFilter) {
      getSelectedCategories({ ...data, level: data })
      SetCategoryLevel({ ...categorylevel, level: data })
    } else {
      if (categorylevel?.level[0]?._id?.length === 0 && categorylevel?.level[1]?._id?.length === 0 && categorylevel?.level[2]?._id?.length === 0) {
        const updatedQuery = router.query;
        delete router?.query?.cat;
        delete router?.query?.sbcat;
        delete router?.query?.sbsbcat;
        router.replace({
          pathname: router.pathname,
          query: updatedQuery,
        }, null, { shallow: true });
        dispatch(RemoveCategoryFilterChanges())
      } else {
        let Addquery = {}
        data[0]?._id ? Addquery.cat = data[0]?._id?.join("-") : "";
        data[1]?._id ? Addquery.sbcat = data[1]?._id?.join("-") : "";
        data[2]?._id ? Addquery.sbsbcat = data[2]?._id?.join("-") : ""
        const updatedQuery = { ...Addquery, ...router.query, };
        router.replace({
          pathname: router.pathname,
          query: updatedQuery,
        }, null, { shallow: true });
        dispatch(CategoryFilterChanges(data))
      }
      SetCategoryLevel({ ...categorylevel, level: data })
    }

  }
  const SetByDefaultCategoryData = () => {
    if (productFilters?.level) {
      let data = productFilters?.level;
      return {
        level: [
          { "category_level": 0, "_id": data[0]?._id ? data[0]?._id : [] },
          { "category_level": 1, "_id": data[1]?._id ? data[1]?._id : [] },
          { "category_level": 2, "_id": data[2]?._id ? data[2]?._id : [] }
        ]
      }
    } else {
      return categorylevel;
    }
  }
  const CHeckCategoryName = (data) => {
    return data?.categoryName ? data?.categoryName : data?.subCategoryName ? data?.subCategoryName : data?.subSubCategoryName ? data?.subSubCategoryName : ""
  }
  return (
    <CategorisFilterContainer item={Style.CategorisFilterContainer}>
      <FilterList item={Style.FilterList}>
        {CategoryData?.length ? CategoryData.map((item, key) => {
          return (
            <React.Fragment key={key}>
              <CatergoryCheckBoxWrap item={Style.CatergoryCheckBoxWrap} onClick={() => { handleActiveCategory(key) }}>
                <InputCheckbox id={item._id} checked={categorylevel?.level[item?.category_level]?._id?.includes(item?._id)} onChange={(e) => handleCategoryFilters(item, key, e)} checkboxItem={Style.InputBox} label={CHeckCategoryName(item)} labelPostion={'right'} checkBoxSize={'sm'} labelFontSize={14} />
                {item?.data?.length > 0 ?
                  <ArrowIconSpan>
                    {activeFilter === key ? <ArrowUp /> : <ArrowDown />}
                  </ArrowIconSpan>
                  : ''
                }
              </CatergoryCheckBoxWrap>

              {
                item?.data?.length ? ((activeFilter === key) && <div>
                  {item.data.map((subcategory, key) => {
                    return (
                      <React.Fragment key={key}>
                        <SubcategoryCheckBoxWrap item={Style.SubcategoryCheckBoxWrap} onClick={() => { handleactiveSubcategory(subcategory) }} key={key} >
                          <InputCheckbox id={subcategory._id} checked={categorylevel?.level[subcategory?.category_level]?._id?.includes(subcategory?._id)} onChange={(e) => handleCategoryFilters(subcategory, key, e)} checkboxItem={Style.InputBox} label={CHeckCategoryName(subcategory)} labelPostion={'right'} checkBoxSize={'sm'} labelFontSize={14} />
                          {subcategory?.data?.length > 0 ?
                            <ArrowIconSpan>
                              {activeSubcategory === subcategory ? <ArrowUp /> : <ArrowDown />}
                            </ArrowIconSpan>
                            : ''
                          }
                        </SubcategoryCheckBoxWrap>
                        {
                          subcategory?.data?.length ? (activeSubcategory === subcategory ? (
                            subcategory.data.map((subsubcategory, key) => {
                              return (
                                <SubSubcategoryCheckBoxWrap item={Style.SubSubcategoryCheckBoxWrap} key={key}>
                                  <InputCheckbox id={subsubcategory._id} checked={categorylevel?.level[subsubcategory?.category_level]?._id?.includes(subsubcategory?._id)} onChange={(e) => handleCategoryFilters(subsubcategory, key, e)} checkboxItem={Style.InputBox} label={CHeckCategoryName(subsubcategory)} labelPostion={'right'} checkBoxSize={'sm'} labelFontSize={14} />
                                </SubSubcategoryCheckBoxWrap>
                              )
                            })
                          )
                            : '') : ""
                        }
                      </React.Fragment>
                    )
                  })}
                </div>) : ""
              }
            </React.Fragment>)
        }) :

          <Text
            tagType={Style.noCategory.tagType}
            style={Style.noCategory.style}
            text={Style.noCategory.text}
          />
          // <p className='base text-2xs'>No categories found</p>
        }
      </FilterList>
    </CategorisFilterContainer>


  )
}

export default CategoriesFilter