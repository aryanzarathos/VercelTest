import React from 'react'
import SearchIcon from "../../../../../Assets/SectionComponent/Icons/headerSearch.svg";
import Image from 'next/image';
import { MainSearch, SearchInput } from "./search3.style"
import { useContext } from 'react';
import { UserContext3 } from '..';

const SearchBar3 = ({ className, searchStyle }) => {
    const data = useContext(UserContext3);
    let styles = {
        MainSearch: data?.custom_section_editable[10]?.style,
        SearchInput: data?.custom_section_editable[11]?.style,
        SearchIcon: data?.custom_section_editable[63]?.style,
    }
    return (
        <MainSearch item={styles?.MainSearch} itemSearch={searchStyle} className={`${className}`}
            itemSvg={styles.SearchIcon}>
            {/* <Image src={searchIcon} alt="search-icon" /> */}
            <SearchIcon />
            <SearchInput item={styles?.SearchInput} placeholder="Search something here!"
                itemSearch={searchStyle} />
        </MainSearch >
    )
}

export default SearchBar3
