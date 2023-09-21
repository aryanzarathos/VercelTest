import React, { useState } from 'react'
import styled from 'styled-components'
import InputCheckbox from '../../Form/InputCheckbox'
import { useDispatch, useSelector } from 'react-redux'
import { CollectionFilterChanges } from '@/store/actions/productList'
import { useRouter } from 'next/router'
const CategorisFilterContainer = styled.div`
    width: ${({ item }) => item.desktop.width};
    margin-bottom: ${({ item }) => item.desktop.marginBottom};
    margin-top: ${({ item }) => item.desktop.marginTop};
    background-color: ${({ item }) => item.desktop.backgroundColor};
    max-height: ${({ item }) => item.desktop.maxHeight};
    overflow-y: ${({ item }) => item.desktop.overflowY};
`

const FilterList = styled.div`
 width: ${({ item }) => item.desktop.width};
`
const CheckBoxWrap = styled.div`
  margin-top: ${({ item }) => item.desktop.marginTop};
  @media screen {
    margin-top: ${({ item }) => item.mobile.marginTop};
    margin-bottom: ${({ item }) => item.mobile.marginBottom};
  }
`


const CollectionFilter = ({ CollectionItem, colllectionList, mobilefilter, getSelectedCollections }) => {
    const { productFilters } = useSelector((state) => {
        return {
            productFilters: state.productList?.productFilters?.data
        }
    })
    const router = useRouter();
    const [collectionIds, setCollectionIds] = useState(productFilters?.collection?.length ? productFilters?.collection : []);
    const dispatch = useDispatch();
    const handleCollection = (e, id) => {
        let data = collectionIds;
        if (e?.target?.checked) {
            if (!data?.includes(id)) data?.push(id);
        } else if (!e?.target?.checked) {
            if (data?.includes(id)) data = data?.filter((item) => item !== id);
        }
        if (mobilefilter) {
            getSelectedCollections([...data])
        } else {
            if (data?.length) {
                const updatedQuery = { col: data?.join("-"), ...router.query };
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
            dispatch(CollectionFilterChanges([...data]));
        }

        setCollectionIds([...data]);

    }
    return (
        <CategorisFilterContainer item={CollectionItem.mainElement}>
            <FilterList item={CollectionItem.collectionWrap}>
                {
                    colllectionList.map((item, index) => {
                        return (
                            <CheckBoxWrap item={CollectionItem.checkboxList} key={index}>
                                <InputCheckbox checked={collectionIds?.includes(item?._id)} onClick={(e) => handleCollection(e, item?._id)} checkboxItem={CollectionItem.InputBox} label={item.collectionName} labelPostion={'right'} checkBoxSize={'sm'} labelFontSize={14} />
                            </CheckBoxWrap>

                        )
                    })
                }
            </FilterList>
        </CategorisFilterContainer>
    )
}

export default CollectionFilter