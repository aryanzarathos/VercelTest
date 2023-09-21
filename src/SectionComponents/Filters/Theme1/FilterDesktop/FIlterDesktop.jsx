import React, { useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'
import CategoriesFilter from '../../../../SectionCommon/Filters/CategoriesFilter/CategoriesFilter'
import CollectionFilter from '../../../../SectionCommon/Filters/CollectionFilter/CollectionFilter'
// import FilterDropDown from '../../../CommonComponent/Filters/FilterDropdown/FilterDropDown'
import FilterDropDown from '../../../../SectionCommon/Filters/FilterDropdown/FilterDropDown'
import PriceSlider from '../../../../SectionCommon/Filters/PriceSlider/PriceSlider'
import { FiltersContainer, FilterMainConatiner, HeadingWrap } from './FilterDesktop.style'
import Text from '../../../../SectionsLayout/Elements/TextElement/Text'
import FilterMobile from '../FilterMobile/FilterMobile'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryFilterChanges, CollectionFilterChanges, PriceFilterChanges, RemoveCategoryFilterChanges, getCategroyProductList, getCollectionProductList, getFileteredProductList, getSubCategroyProductList, getSubSubCategroyProductList, updateFilterServer } from '@/store/actions/productList'
import { useRouter } from 'next/router';
import { useParams } from 'react-router-dom'
const FIlterDesktop = ({ data }) => {
    const router = useRouter();
    const param = useParams();
    let { business, productFilters, productSearchandSortBy, localApi, serverApi } = useSelector((state) => {
        return {
            business: state.websiteTemplate?.getTemplate?.data?.business,
            productFilters: state.productList?.productFilters?.data,
            productSearchandSortBy: state.productList?.productSearchandSortBy?.data,
            localApi: state?.productList?.customerProductList?.localApi,
            serverApi: state?.productList?.customerProductList?.serverApi,
        }
    });

    let FinalData = data?.data?.data;
    const styles = {
        filterWrapper: data.custom_section_editable[0]?.style,
        filterDropDown: {
            filterButton: data.custom_section_editable[1]?.style,
            mainHeading: data.custom_section_editable[2]?.style,
        },
        CollectionList: {
            mainElement: data.custom_section_editable[3]?.style,
            collectionWrap: data.custom_section_editable[4]?.style,
            checkboxList: data.custom_section_editable[5]?.style,
            InputBox: {
                label: data.custom_section_editable[6]?.style,
                Span: data.custom_section_editable[7]?.style,
                Input: data.custom_section_editable[8]?.style,
            }
        },
        PriceSlider: {
            PriceWrapper: data.custom_section_editable[9]?.style,
            PriceFilter: data.custom_section_editable[10]?.style,
            PriceFilterInput: data.custom_section_editable[11]?.style,
            RangeLabel: data.custom_section_editable[12]?.style,
            PriceLabel: data.custom_section_editable[13]?.style,
            InputWapper: data.custom_section_editable[14]?.style,
            LeftInputWapper: data.custom_section_editable[15]?.style,
            Input: data.custom_section_editable[16]?.style,
            ParagraphWrap: data.custom_section_editable[17]?.style,
            Paragraph: data.custom_section_editable[18]?.style,
        },
        CategoryList: {
            CategorisFilterContainer: data.custom_section_editable[19]?.style,
            FilterList: data.custom_section_editable[20]?.style,
            CatergoryCheckBoxWrap: data.custom_section_editable[21]?.style,
            SubcategoryCheckBoxWrap: data.custom_section_editable[22]?.style,
            SubSubcategoryCheckBoxWrap: data.custom_section_editable[23]?.style,
            noCategory: data.custom_section_editable[24],
            InputBox: {
                label: data.custom_section_editable[6]?.style,
                Span: data.custom_section_editable[7]?.style,
                Input: data.custom_section_editable[8]?.style,
            }
        },

        FilterMainConatiner: data.custom_section_editable[25]?.style,
        HeadingWrap: data.custom_section_editable[26]?.style,
        FilterPara: data.custom_section_editable[27],
        ClearAllPara: data.custom_section_editable[28],

        FilterMobileStyle: {
            MobileFilterContainer: data.custom_section_editable[29].style,
            HeaderFilterItem: data.custom_section_editable[30].style,
            FiltersPara: data.custom_section_editable[31],
            ClearAllPara: data.custom_section_editable[32],
            FilterContainer: data.custom_section_editable[33].style,
            FilterItem: data.custom_section_editable[34].style,
            CollectionItem: data.custom_section_editable[35].style,
            active: data.custom_section_editable[36].style,
            BottomBtn: data.custom_section_editable[37].style,
            CloseBtn: data.custom_section_editable[38],
            ApplyBtn: data.custom_section_editable[39],
            Line: data.custom_section_editable[40].style,
            TabSection: data.custom_section_editable[41].style,
        }

    }
    const dispatch = useDispatch();
    const [closeFilter, setCloseFilter] = useState(false);

    useEffect(() => {
        let query = ShopPageFilter(router?.query);
        if (serverApi && query) {
            if (query?.collection || query?.level || query?.price || query?.page) {
                dispatch(updateFilterServer(query))
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serverApi]);

    function ShopPageFilter(filters) {
        let data = {};
        if (filters?.col) {
            data.collection = filters?.col?.split("-");
        }
        if (filters?.cat || filters?.sbcat || filters?.sbsbcat) {
            data.level = [
                { "category_level": 0, "_id": filters?.cat?.length ? filters?.cat?.split("-") : [] },
                { "category_level": 1, "_id": filters?.sbcat?.length ? filters?.sbcat?.split("-") : [] },
                { "category_level": 2, "_id": filters?.sbsbcat?.length ? filters?.sbsbcat?.split("-") : [] }
            ]
        }
        if (filters?.price) {
            data.price = {
                start: filters?.price?.length ? filters?.price?.split("-")[0] : [],
                end: filters?.price?.length ? filters?.price?.split("-")[1] : []
            }
        }
        if (filters?.sort) {
            data.sortby = filters?.sort;
        }
        if (filters?.page) {
            data.page = filters?.page;
        }
        return data;
    }
    useEffect(() => {
        if (business && localApi) {
            let pathname = router.asPath;
            pathname = pathname.split("?")[0];
            pathname = pathname.split("/");
            if (pathname[1] === "category" && pathname.length === 5) {
                // categroy/catslug/subCatSlug/subsubCat
                dispatch(getSubSubCategroyProductList(business, "", productFilters, productSearchandSortBy?.sortby, pathname[2], pathname[3], pathname[4]))

            } else if (pathname[1] === "category" && pathname.length === 4) {
                // categroy/catslug/subCatSlug
                alert("sub")
                dispatch(getSubCategroyProductList(business, "", productFilters, productSearchandSortBy?.sortby, pathname[2], pathname[3]))

            } else if (pathname[1] === "category" && pathname.length === 3) {
                // categroy/catslug
                dispatch(getCategroyProductList(business, "", productFilters, productSearchandSortBy?.sortby, pathname[2]))

            } else if (pathname[1] === "collection" && pathname.length === 3) {
                dispatch(getCollectionProductList(business, "", productFilters, productSearchandSortBy?.sortby, pathname[2]))
            } else if (pathname[1] === "shop") {
                dispatch(getFileteredProductList(business, "", productFilters, productSearchandSortBy?.sortby))
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [business, productFilters, productSearchandSortBy?.sortby])

    // const ClearAll = () => {
    //     setCloseFilter(true)
    //     router.replace({
    //         pathname: router.pathname,
    //         query: { ...router.query, cat: "", sbcat: "", sbsbcat: "", col: [] }
    //     }, null, { shallow: true });
    //     dispatch(RemoveCategoryFilterChanges());
    //     dispatch(CollectionFilterChanges([]));
    //     setTimeout(() => {
    //         setCloseFilter(false)
    //     }, 500);
    // }

    const clearQueryParameters = () => {
        setCloseFilter(true)
        let queryData = router.query;
        delete queryData?.col;
        delete queryData?.cat;
        delete queryData?.sbcat;
        delete queryData?.sbsbcat;
        delete queryData?.price;
        router.push({
            pathname: router.pathname,
            query: queryData,
        });
        dispatch(RemoveCategoryFilterChanges());
        dispatch(CollectionFilterChanges([]));
        dispatch(PriceFilterChanges({
            start: FinalData?.Price?.priceLow,
            end: FinalData?.Price?.priceMax
        }));

        setTimeout(() => {
            setCloseFilter(false)
        }, 500);
    };
    console.log(styles, FinalData, "jiijijiji")
    return (
        <>

            {
                window.innerWidth > 768 ?
                    <FilterMainConatiner item={styles.FilterMainConatiner}>
                        <HeadingWrap item={styles.HeadingWrap}>
                            <Text
                                tagType={styles.FilterPara.tagType}
                                style={styles.FilterPara.style}
                                text={styles.FilterPara.text}
                            />
                            <Text
                                onClick={() => clearQueryParameters()}
                                tagType={styles.ClearAllPara.tagType}
                                style={styles.ClearAllPara.style}
                                text={styles.ClearAllPara.text}
                                className={'cursor'}
                            />
                            {/* <p>Clear All</p> */}
                        </HeadingWrap>
                        <FiltersContainer item={styles.filterWrapper}>
                            {
                                FinalData?.CategoryInfo && FinalData?.CategoryInfo.length ?
                                    <FilterDropDown setCloseFilter={setCloseFilter} closeFilter={closeFilter} filterItem={styles.filterDropDown} filterHeading={'Categories'}>
                                        <CategoriesFilter Style={styles.CategoryList} CategoryData={FinalData?.CategoryInfo} />
                                    </FilterDropDown> : ""
                            }
                            {
                                FinalData?.Price ?
                                    <FilterDropDown closeFilter={closeFilter} setCloseFilter={setCloseFilter} filterItem={styles.filterDropDown} filterHeading={'Price'}>
                                        <PriceSlider priceItem={styles.PriceSlider} minValue={FinalData?.Price?.priceLow} maxValue={FinalData?.Price?.priceMax} />
                                    </FilterDropDown> : ""
                            }

                            {
                                FinalData?.CollectionInfo && FinalData?.CollectionInfo.length ?
                                    <FilterDropDown setCloseFilter={setCloseFilter} closeFilter={closeFilter} filterItem={styles.filterDropDown} filterHeading={'Collection'}>
                                        <CollectionFilter CollectionItem={styles.CollectionList} colllectionList={FinalData?.CollectionInfo} />
                                    </FilterDropDown> : ""
                            }


                        </FiltersContainer>
                    </FilterMainConatiner>
                    :
                    (

                        <FilterMobile
                            CategoryListStyle={styles.CategoryList}
                            PriceSliderStyle={styles.PriceSlider}
                            CollectionListStyle={styles.CollectionList}
                            FilterMobileStyle={styles.FilterMobileStyle}
                            FinalData={FinalData}

                        />
                    )

            }
        </>
    )
}

export default FIlterDesktop