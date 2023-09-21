import useAppNavigate from '@/CustomHooks/useAppNavigate'
import React from 'react'
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux'
import { CategoryName, ProductName, SearchDroDownContainer, SearchDroDownList, SearchDroDownWrapper, LoaderWrap, Overlaydropdown } from './SearchListDropDownStyle'
import { isBrowser } from '@/CommonFunctions/isBrowser';
import ImageElement from '@/SectionsLayout/Elements/ImageElement/ImageElement';
import Loader from '../../../Assets/SectionComponent/Icons/threedotloader.gif'
import Image from 'next/image';
const SearchListDropdown = ({ onClose, SearchInput }) => {
    const navigate = useAppNavigate()
    const { globalSearchList, globalSearchSuccess } = useSelector((state) => {
        return {
            globalSearchList: state.globalSearch.getSearchList.data,
            globalSearchSuccess: state.globalSearch.getSearchList.success
        }
    })
    const handleRedirect = (url) => {
        navigate(`/${url}`)
        onClose()
    }



    const getBoldedStatement = (statement) => {
        if (SearchInput && SearchInput !== "" && statement?.toLowerCase().includes(SearchInput?.toLowerCase())) {
            const startIndex = statement?.toLowerCase().indexOf(SearchInput?.toLowerCase());
            const endIndex = startIndex + SearchInput?.length;
            return (
                <>
                    {statement.substring(0, startIndex)}
                    <strong>{statement.substring(startIndex, endIndex)}</strong>
                    {statement.substring(endIndex)}
                </>
            );
        }
        return statement;
    };


    return createPortal(
        <Overlaydropdown>
            <SearchDroDownWrapper >
                <SearchDroDownContainer >
                    {
                        globalSearchSuccess ?
                            globalSearchList && globalSearchList.length ?
                                globalSearchList.map((item, key) => {
                                    return (
                                        <React.Fragment key={key}>
                                            <SearchDroDownList onClick={() => handleRedirect(item.url)}>
                                                <ProductName>{getBoldedStatement(item?.title)} - </ProductName> <CategoryName>{item.serviceType}</CategoryName>
                                            </SearchDroDownList>
                                        </React.Fragment>
                                    )
                                }) : "" :
                            <LoaderWrap>
                                <Image src={Loader} alt="loader" />
                            </LoaderWrap>
                    }
                </SearchDroDownContainer >
            </SearchDroDownWrapper>
        </Overlaydropdown>,
        isBrowser() && document.getElementById("mainSection")
    )
}
export default SearchListDropdown