import React from 'react'
import { useState } from "react";
import Prev from '../../../Assets/SectionComponent/Images/Pagination/left.svg'
import Next from '../../../Assets/SectionComponent/Images/Pagination/right.svg'
import { NextButton, Number, PaginationContainer, PaginationNumber, PrivButton } from './PaginationTheme1.style';
import { DOTS, usePagination } from '@/CommonComponents/Pagination/usePagination';
// import './pagination.scss'


const PaginationTheme1 = ({ style, currentPage, totalCount, pageSize, siblingCount = 0, onPageChange }) => {

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0) {
        return null;
    }
    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    console.log(totalCount, "totalCounttotalCount")

    return (
        <PaginationContainer item={style?.PaginationContainer}>
            <PrivButton item={style?.PrivButton}
                itemSvgDisable={style?.Prev} itemSvgEnable={style?.Next} item2={style?.NextButton} onClick={onPrevious} disabled={currentPage <= 1}>
                <Prev />
            </PrivButton>
            <PaginationNumber item={style?.PaginationNumber}>
                {paginationRange.length > 0 && paginationRange.map((pageNumber, key) => {
                    if (pageNumber === DOTS) {
                        return <Number key={key} item={style?.Number} >...</Number>;
                    }
                    return (<Number item={style?.Number} key={key} onClick={() => onPageChange(pageNumber)} className={`${currentPage === pageNumber ? "active" : "Number"}`} >
                        {pageNumber}
                    </Number>)
                })}
                {/* {values1.map((val) => (
                <>
                    <Number item={style.Number} >{val.text}</Number>
                </>
            ))}
            {values2.map((val, key) => (
                <Number item={style.Number} key={key} onClick={() => setActiveId(val.id)} className={`${activeClass === val.id ? "active" : "Number"}`} >
                    {val.text1}
                </Number>
            ))} */}
            </PaginationNumber>
            <NextButton item={style?.NextButton}
                itemSvgEnable={style?.Next} itemSvgDisable={style?.Prev} item2={style?.PrivButton} onClick={onNext} disabled={totalCount / pageSize <= currentPage}>
                <Next />
            </NextButton>
        </PaginationContainer>
    )
}

export default PaginationTheme1