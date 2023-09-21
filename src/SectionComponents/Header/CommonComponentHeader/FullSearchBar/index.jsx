import React, { useEffect, useState } from 'react'
import { MainSearchBar, SearchBtn, SearchForm, SearchInput } from './fullSearch.style';
import SearchIcon from "../../../../Assets/SectionComponent/Icons/fullSearchIcon.svg";
import CloseIcon from "../../../../Assets/SectionComponent/Icons/fullCloseIcon.svg";
import Button from '../../../../SectionsLayout/Elements/ButtonElement/ButtonElement';
import { useDebounceFunction } from '@/CommonFunctions/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { getGlobalSearchList } from '@/store/actions/globalSearch';
import useTemplateId from '@/CustomHooks/useTemplateId';
import SearchListDropdown from '../../GlobalSearchListDropdown/SearchListDropdown';
import AppLinkUrl from '@/CommonComponents/AppLink/AppLinkUrl';
import { createPortal } from 'react-dom';
import { isBrowser } from '@/CommonFunctions/isBrowser';


const FullSearchBar = ({ FullSearch, style, searchStyle }) => {
    const dispatch = useDispatch()
    const [disabled, setDisabled] = useState(false)
    const { business } = useSelector((state) => state.websiteTemplate.getTemplate.data)
    const [searchTerm, setSearchTerm] = useState("")
    const debounce = useDebounceFunction(
        (callback) => callback(),
        2000
    );
    const [dropDown, setDropDown] = useState(false)
    const templateId = useTemplateId()
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        if (e.target.value) {
            setDropDown(true)
            debounce(() => dispatch(getGlobalSearchList({ business: business, search: e.target.value, template: templateId, editor: true })))
        }
        else {
            setDropDown(false)
        }
    }
    useEffect(() => {
        if (AppLinkUrl.isEditor()) {
            setDisabled(true)
        }

    }, [])

    useEffect(() => {
        if (searchTerm) {
            document.body.style.overflow = 'hidden';
        }
        else if (!searchTerm) {
            document.body.style.overflow = 'scroll';
        }
        return (() => {
            document.body.style.overflow = 'scroll';
        })
    }, [searchTerm])

    const handleClick = () => {
        FullSearch();
        setDropDown(false);
        setSearchTerm("");
    }

    return createPortal(
        <MainSearchBar item={style.MainSearchBar}
            itemFullSearch={searchStyle} itemSearch={style.SearchIcon}
            itemClose={style.CloseIcon}>
            <SearchIcon className="searchIcon" />
            <SearchForm item={style.SearchForm}>
                <SearchInput type='text' placeholder='Search any Products' disabled={disabled} item={style.SearchInput}
                    onChange={(e) => handleSearch(e)}
                    onKeyUp={(e) => handleSearch(e)}
                    itemFullSearch={searchStyle} />
            </SearchForm>
            <Button style={style.CloseBtn} onClick={() => { handleClick() }} >
                <CloseIcon className="closeIcon" />
                {/* <Image src={closeIcon} alt='closeIcon' /> */}
            </Button>
            {
                dropDown && <SearchListDropdown SearchInput={searchTerm} onClose={() => { setDropDown(false); setSearchTerm("") }} />
            }
        </MainSearchBar>,
        isBrowser() && document.getElementById("mainSection")
    )
}

export default FullSearchBar
