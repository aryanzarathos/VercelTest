import React from 'react'
import CategoriesFilter from '../../../../SectionCommon/Filters/CategoriesFilter/CategoriesFilter'
import PriceSlider from '../../../../SectionCommon/Filters/PriceSlider/PriceSlider'
import CollectionFilter from '../../../../SectionCommon/Filters/CollectionFilter/CollectionFilter'
import { useState } from "react";
// import Button from '../../../Assets/Images/Filter/button.png'
import Tabs from '../../../../CommonComponents/Tabs/Tabs';
import { Apply, BottomBtn, ClearAll, Close, Filter, FilterContainer, FilterItem, HeaderFilterItem, Line, UpperSectionWrap, MobileFilterContainer, TabSection, SortWrapper, SortList, SortListItem, SortContent, SortOverlay } from './FliterMobile.style';
import Text from '../../../../SectionsLayout/Elements/TextElement/Text';
import ButtonElement from '../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryFilterChanges, CollectionFilterChanges, PriceFilterChanges, RemoveCategoryFilterChanges, sortByChange } from '@/store/actions/productList';


const FilterMobile = ({ FilterMobileStyle, CategoryListStyle, PriceSliderStyle, CollectionListStyle, FinalData }) => {
    const [active, setActive] = useState("Categories");
    const [activeTab, setActiveTab] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch()
    const [mobilefilter, setmobilefilter] = useState(false);
    const { productFilters } = useSelector((state) => {
        return {
            productFilters: state.productList?.productFilters?.data
        }
    })
    const [selectedCollections, setSelectedCollections] = useState(productFilters?.collection?.length ? productFilters?.collection : [])
    const [categorylevel, SetCategoryLevel] = useState(productFilters?.level?.length ? { level: productFilters?.level } : {
        level: [
            { "category_level": 0, "_id": [] },
            { "category_level": 1, "_id": [] },
            { "category_level": 2, "_id": [] }
        ]
    })
    const [sliderMinValue, setSliderMinValue] = useState(productFilters?.price?.start ? productFilters?.price?.start : FinalData?.Price?.priceLow);
    const [sliderMaxValue, setSliderMaxValue] = useState(productFilters?.price?.end ? productFilters?.price?.end : FinalData?.Price?.priceMax);
    const [sort, setSort] = useState(false)
    const [sortedText, setSortedText] = useState("Recent To Old")
    const handleActive = (index) => {
        setActiveTab(index)
    }
    const HandleFilter = (val) => {
        setmobilefilter(!mobilefilter)
        if (val === "Apply") {
            if (selectedCollections?.length) {
                const updatedQuery = { col: selectedCollections?.join("-"), ...router.query };
                router.push({
                    pathname: router.pathname,
                    query: updatedQuery,
                }, null, { shallow: true });
            } else {
                const updatedQuery = router.query;
                delete router?.query?.col;
                router.push({
                    pathname: router.pathname,
                    query: updatedQuery,
                }, null, { shallow: true });
            }
            dispatch(CollectionFilterChanges([...selectedCollections]));

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
                let data = categorylevel?.level
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
            dispatch(PriceFilterChanges({
                start: parseInt(sliderMinValue),
                end: parseInt(sliderMaxValue)
            }));
            const updatedQuery = { ...router.query, price: parseInt(sliderMinValue) + "-" + parseInt(sliderMaxValue) };
            router.push({
                pathname: router.pathname,
                query: updatedQuery,
            }, null, { shallow: true });
        }
    }
    const Handleclosefilter = () => {
        setmobilefilter(!mobilefilter)
        // if (sortPopUp === "sort") {
        //     setSort(!sort)
        // }
    }
    const HandleOpenSort = () => {
        setSort(!sort)

    }

    const SelectCheck = (value) => {
        if (value) {
            const updatedQuery = { ...router.query, sort: value };
            router.push({
                pathname: router.pathname,
                query: updatedQuery,
            }, null, { shallow: true });
            dispatch(sortByChange(value))
            setSort(false)
        }
    }

    const clearQueryParameters = () => {
        setmobilefilter(false)
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



    };
    // //// console.log(FilterMobileStyle.Line, "FilterMobileStyle.Line")
    //// console.log(FinalData, "line 21")
    return (

        <>

            <MobileFilterContainer item={FilterMobileStyle.MobileFilterContainer} >

                {
                    mobilefilter &&

                    <UpperSectionWrap item={FilterMobileStyle.MobileFilterContainer} >
                        <HeaderFilterItem item={FilterMobileStyle.HeaderFilterItem}>
                            <Text
                                tagType={FilterMobileStyle.FiltersPara.tagType}
                                style={FilterMobileStyle.FiltersPara.style}
                                text={FilterMobileStyle.FiltersPara.text}
                            />
                            <ButtonElement
                                style={FilterMobileStyle.ClearAllPara.style}
                                text={FilterMobileStyle.ClearAllPara.text}
                                onClick={() => clearQueryParameters(false)}
                            />
                        </HeaderFilterItem>
                        <FilterContainer item={FilterMobileStyle.FilterContainer}>
                            <FilterItem item={FilterMobileStyle.FilterItem} item2={FilterMobileStyle.CollectionItem} item3={FilterMobileStyle.active}  >
                                <Tabs
                                    valueState={true}
                                    activeTitle={(val) => setActive(val)}
                                    TabWrapperClass={'externalPage-tab-btn'}
                                    clearState={true}
                                    defaultValue={active}
                                    TabButtonClass={`CollectionItem`}
                                    ActiveTabClass={'active'}
                                    tabs={["Categories", "Price", "Collection"]}
                                />
                            </FilterItem>
                            <TabSection item={FilterMobileStyle.TabSection}>
                                {
                                    active === "Categories" && FinalData?.CategoryInfo && FinalData?.CategoryInfo.length ?
                                        <CategoriesFilter
                                            Style={CategoryListStyle}
                                            CategoryData={FinalData?.CategoryInfo}
                                            mobileFilter={true}
                                            getSelectedCategories={(val) => SetCategoryLevel(val)}
                                        /> :
                                        active === "Price" && FinalData?.Price ?
                                            <PriceSlider
                                                priceItem={PriceSliderStyle}
                                                minValue={FinalData?.Price?.priceLow}
                                                maxValue={FinalData?.Price?.priceMax}
                                                mobileFilter={true}
                                                getPriceValues={(min, max) => { setSliderMinValue(min); setSliderMaxValue(max) }}
                                            /> :
                                            active === "Collection" && FinalData?.CollectionInfo && FinalData?.CollectionInfo.length ?
                                                <CollectionFilter
                                                    CollectionItem={CollectionListStyle}
                                                    colllectionList={FinalData?.CollectionInfo}
                                                    mobilefilter={true}
                                                    getSelectedCollections={(val) => setSelectedCollections(val)}
                                                /> : ""
                                }



                            </TabSection>
                        </FilterContainer>
                    </UpperSectionWrap>
                }
                {
                    sort &&
                    <SortWrapper item={FilterMobileStyle?.SortWrapper}>
                        <SortOverlay onClick={() => setSort(false)}>
                        </SortOverlay>
                        <SortContent>

                            <p>Sort by</p>
                            <SortList>
                                <SortListItem onClick={() => SelectCheck("RTO")}>
                                    Recent To Old
                                </SortListItem>
                                <SortListItem onClick={() => SelectCheck("OTR")}>
                                    Old To Recent
                                </SortListItem>
                                <SortListItem onClick={() => SelectCheck("PriceHTL")}>
                                    Price : High to Low
                                </SortListItem>
                                <SortListItem onClick={() => SelectCheck("PriceLTH")}>
                                    Price : Low to High
                                </SortListItem>
                            </SortList>
                        </SortContent>

                    </SortWrapper>
                }

                <BottomBtn item={FilterMobileStyle.BottomBtn}>
                    <ButtonElement
                        style={mobilefilter ? FilterMobileStyle.CloseBtn.style : FilterMobileStyle.ApplyBtn.style}
                        text={mobilefilter ? FilterMobileStyle.CloseBtn.text : "Sort"}
                        onClick={() => { mobilefilter ? Handleclosefilter() : HandleOpenSort() }}
                    />
                    <Line item={FilterMobileStyle.Line}></Line>
                    <ButtonElement
                        style={FilterMobileStyle.ApplyBtn.style}
                        text={mobilefilter ? FilterMobileStyle.ApplyBtn.text : "Filter"}
                        onClick={() => HandleFilter(mobilefilter ? FilterMobileStyle.ApplyBtn.text : "Filter")}
                    />
                </BottomBtn>
            </MobileFilterContainer>
        </>
    )
}

export default FilterMobile