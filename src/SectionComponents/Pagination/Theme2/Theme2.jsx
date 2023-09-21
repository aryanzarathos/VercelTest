import React from 'react'
import { useState } from "react";
import Prev from '../../../Assets/SectionComponent/Images/Pagination/left.svg'
import Next from '../../../Assets/SectionComponent/Images/Pagination/right.svg'
import { Number, PaginationContainer, PaginationNumber, PrivButton } from './PaginationTheme2.style';
import { NextButton } from '../Theme1/PaginationTheme1.style';
// import './pagination.scss'


const PaginationTheme2 = () => {
    const values = [
        { id: 1, text: 1 },
        { id: 2, text: 2 },
        { id: 3, text: 3 }
    ];

    const values1 = [
        { id: 4, text: "..." }
    ];

    const values2 = [
        { id: 5, text1: 10 }
    ];

    const [activeClass, setActiveId] = useState(1);


    return (
        <PaginationContainer>
            <PrivButton>
                <Prev fill={'rgba(0, 52, 89, 0.4)'} height={6} width={12} />
            </PrivButton>
            <PaginationNumber>
                {values.map((val,key) => (
                    <Number key={key} onClick={() => setActiveId(val.id)} className={`${activeClass === val.id ? "active" : "Number"}`} >
                        {val.text}
                    </Number>
                ))}
                {values1.map((val) => (
                    <>
                        <Number >{val.text}</Number>
                    </>
                ))}
                {values2.map((val,key) => (
                    <Number key={key} onClick={() => setActiveId(val.id)} className={`${activeClass === val.id ? "active" : "Number"}`} >
                        {val.text1}
                    </Number>
                ))}
            </PaginationNumber>
            <NextButton>
                <Next fill={'rgba(0, 52, 89, 0.4)'} height={6} width={12} />
            </NextButton>
        </PaginationContainer>
    )
}

export default PaginationTheme2