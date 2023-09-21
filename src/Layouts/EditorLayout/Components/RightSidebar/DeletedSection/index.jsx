import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import BlankImg from './blankBox.png'
import Template1 from './template1.png'
import Template2 from './template2.png'
import Template3 from './template3.png'
const MenuContentHead = styled.div`
    padding: 12px 40px 12px 16px;
    border-bottom: 1px solid rgba(32, 32, 32, 0.1);

    h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;
    color: #202020;
    }
`
const MenuContentBody = styled.div`
    margin: 8px 0;
    padding: 0 4px;
`
const MenuList = styled.div`
    overflow: hidden;
    overflow-y: auto;
    height: calc(100vh - 122px);
`
const BlankDataWrapper = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: calc(100vh - 122px);
        gap: 20px;
        p{
            font-family: 'Poppins',sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            text-align: center;
            color: rgba(32, 32, 32, 0.3);
        }
        `
const MenuListDeletedItemWrapper = styled.div`
`
const ParaWrapper = styled.div`
            padding: 0 12px ;
        p{
        font-family: 'Poppins',sans-serif;
        font-weight: 400;
        font-size: 10px;
        line-height: 15px;
        color: rgba(32, 32, 32, 0.6);
          }  
`
const DeletedContentWrapper = styled.div` 
`
const DeletedSecWrappper = styled.div` 
    margin: 9px 0;
    width: 100%;
    height: 100%;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        padding: 9px 5px;
    }
    &:hover .active{
        opacity: 1 !important;
        button{
            opacity: 1 !important;
        }
        
    }
    `
const OverLay = styled.div`
    background: rgba(32, 32, 32, 0.6);
    border-radius: 8px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.5s;
    opacity: 0;
    button{
        font-family: 'Poppins',sans-serif;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        text-transform: capitalize;
        color: #FFFFFF;
        background: #0184FF;
        border-radius: 4px;
        padding: 3px 16px;
        border: none;
        transition: all 0.5s;
        opacity: 0;
    }
`
const Index = () => {
    const data = [
        {
            img: Template1
        },
        {
            img: Template2
        },
        {
            img: Template3
        },
    ]

    return (
        <React.Fragment>
            <MenuContentHead>
                <h4>Home Page Sections</h4>
            </MenuContentHead>
            <MenuContentBody>
                <MenuList>
                    {false ? <BlankDataWrapper>
                        <Image src={BlankImg} alt="blankimg" />
                        <p>No deleted section <br />
                            found !</p>
                    </BlankDataWrapper> :
                        <MenuListDeletedItemWrapper className='Tym'>
                            <ParaWrapper>
                                <p>Section shown here are removed from your home
                                    page you can add these sections to home page
                                    again by hovering over section and click add.</p>
                            </ParaWrapper>
                            <DeletedContentWrapper>
                                {data.map((val,key) => {
                                    return (
                                        // eslint-disable-next-line react/jsx-key
                                        <DeletedSecWrappper key={key}>
                                            <Image src={val.img} alt="" />
                                            <OverLay className='active'>
                                                <button>Add</button>
                                            </OverLay>
                                        </DeletedSecWrappper>

                                    )
                                })}
                            </DeletedContentWrapper>
                        </MenuListDeletedItemWrapper>
                    }

                </MenuList>
            </MenuContentBody>
        </React.Fragment >
    )
}

export default Index