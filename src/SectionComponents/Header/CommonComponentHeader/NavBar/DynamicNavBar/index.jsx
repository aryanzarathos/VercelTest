import React from 'react'
import Link from 'next/link'
import { MenuList, MenuListItem, MenuListItemInside, Navbar } from './DynamicNavBar.style'
import { useContext } from 'react';
import { UserContext } from '../../../HeaderVariation/HeaderVariation1';
import IntersectionObserverWrap from '../../../../../CommonComponents/IntersectionObserver/intersection-observer-wrapper';
// import { Button } from '../../../../ProductLists/Theme4/ProductListsTheme4.style';
import { styled } from 'styled-components';
import DropDownArrow from "../../../../../Assets/SectionComponent/Icons/DropdownArrow.svg"
const Button = styled.button`
  /* padding:35px; */

  display: flex;
  flex: 0 0 auto;
    position:relative;
    color:#003459; 
    // font-family: 'Gilroy-SemiBold';
    font-size: 16px;
    line-height: 24px;
    transition: all .3s;
    background: #fff;
    border: none;
    /* &::after{
            position: absolute;
            transition: all .3s;
            content: "";
            left: inherit;
            right: 20px;
            height: 4px;
            width: 4px;
            border-right: 2px solid #003459;
            border-bottom: 2px solid #003459;
            top: 50%;
            transform: translateY(-75%) rotate(45deg);
            z-index: 1;
    } */

    &:hover{
        color:#428BC1;
         .active{
        visibility:visible;
        opacity:1;
        transform: translateY(62px);
    }
        &::after{
         
            border-right:2px solid #428BC1;
            border-bottom:2px solid #428BC1;
        
    }
        
    }
    /* &:hover  */
`;

const Submenu = styled.ul`
   position: absolute;
  left:0;
  width: 238px;
  max-width: 700px;
  z-index: -1;
  opacity:0;
  visibility:hidden;
  background:#fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(100px);
  transition: all 300ms linear;
  max-height: 540px;
  min-height: auto;
  overflow: auto;
  padding: 12px;
  &::-webkit-scrollbar-thumb {
      background-color: rgb(204, 204, 204);
      border: 4px solid transparent;
      border-radius: 8px;
      background-clip: padding-box;
  }
  &::-webkit-scrollbar {
      width: 8px !important;
  }
`;
const SubMenuItem = styled.li`
list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    cursor: pointer;
    .main{
        font-family: 'Gilroy-SemiBold';
        font-size: 14px;
        line-height: 18px;
        letter-spacing: 0.04em;
        color: #003459;
    }
`;

const DynamicNavBar = () => {
    const data = useContext(UserContext);
    // const classE = {
    //     button: {
    //         margin: 1,
    //         display: "flex",
    //         flex: "0 0 auto"
    //     }
    // }
    const navData = [
        {
            Name: "Home",
            _id: "1",
            dataTargetId: "Home",
            subData: [
                {
                    Name: "subData1",
                    _id: "1",
                    subSubData: [
                        {
                            Name: "Sub_subItem1",
                            _id: "1",
                        },
                        {
                            Name: "Sub_subItem2",
                            _id: "2"
                        },
                        {
                            Name: "Sub_subItem3",
                            _id: "3"
                        },
                        {
                            Name: "Sub_subItem4",
                            _id: "4"
                        },
                        {
                            Name: "Sub_subItem5",
                            _id: "5"
                        }
                    ]
                },
                {
                    Name: "subData2",
                    _id: "2"
                },
                {
                    Name: "subData3",
                    _id: "3"
                },
                {
                    Name: "subData4",
                    _id: "4"
                },
                {
                    Name: "subData5",
                    _id: "5"
                },
            ]
        },
        {
            Name: "Shop",
            _id: "2",
            dataTargetId: "Shop",
            subData: []
        },
        {
            Name: "about us",
            _id: "3",
            dataTargetId: "About",
            subData: []
        },
        {
            Name: "Contact us",
            _id: "4",
            dataTargetId: "Contact",
            subData: []
        },
        {
            Name: "Blog",
            _id: "5",
            dataTargetId: "Blog",
            subData: [
                {
                    Name: "subData1",
                    _id: "1",
                    subSubData: [
                        {
                            Name: "Sub_subItem1",
                            _id: "1",
                        },
                        {
                            Name: "Sub_subItem2",
                            _id: "2"
                        },
                        {
                            Name: "Sub_subItem3",
                            _id: "3"
                        },
                        {
                            Name: "Sub_subItem4",
                            _id: "4"
                        },
                        {
                            Name: "Sub_subItem5",
                            _id: "5"
                        }
                    ]
                },
                {
                    Name: "subData2",
                    _id: "2",
                    subSubData: []
                },
                {
                    Name: "subData3",
                    _id: "3",
                    subSubData: [
                        {
                            Name: "Sub_subItem1",
                            _id: "1",
                        },
                        {
                            Name: "Sub_subItem2",
                            _id: "2"
                        },
                        {
                            Name: "Sub_subItem3",
                            _id: "3"
                        },
                        {
                            Name: "Sub_subItem4",
                            _id: "4"
                        },
                        {
                            Name: "Sub_subItem5",
                            _id: "5"
                        }
                    ]
                },
                {
                    Name: "subData4",
                    _id: "4",
                    subSubData: []
                },
                {
                    Name: "subData5",
                    _id: "5",
                    subSubData: []
                },
            ]
        },
        {
            Name: "collection",
            _id: "6",
            dataTargetId: "Collection",
            subData: []
        },
        {
            Name: "Category",
            _id: "7",
            dataTargetId: "Category",
            subData: []
        },
        {
            Name: "Men",
            _id: "8",
            dataTargetId: "Men",
            subData: []
        },
        {
            Name: "Women",
            _id: "10",
            dataTargetId: "Women",
            subData: [
                {
                    Name: "subData1",
                    _id: "1",
                    subSubData: [
                        {
                            Name: "Sub_subItem1",
                            _id: "1",
                        },
                        {
                            Name: "Sub_subItem2",
                            _id: "2"
                        },
                        {
                            Name: "Sub_subItem3",
                            _id: "3"
                        },
                        {
                            Name: "Sub_subItem4",
                            _id: "4"
                        },
                        {
                            Name: "Sub_subItem5",
                            _id: "5"
                        }
                    ]
                },
                {
                    Name: "subData2",
                    _id: "2",
                    subSubData: []
                },
                {
                    Name: "subData3",
                    _id: "3",
                    subSubData: []
                },
                {
                    Name: "subData4",
                    _id: "4",
                    subSubData: []
                },
                {
                    Name: "subData5",
                    _id: "5",
                    subSubData: []
                },
            ]
        }
    ]
    const list = [
        {
            Name: "Home",
            _id: "1",
            href: "#"
        },
        {
            Name: "Shop",
            _id: "2",
            href: "#"

        },
        {
            Name: "About Us",
            _id: "3",
            href: "#"
        },
        {
            Name: "Contact Us",
            _id: "4",
            href: "#"

        },
        {
            Name: "Contact Us",
            _id: "4",
            href: "#"

        },
        {
            Name: "Contact Us",
            _id: "4",
            href: "#"

        },
        {
            Name: "Contact Us",
            _id: "4",
            href: "#"

        },

    ]
    return (
        // <IntersectionObserverWrap>
        //     {
        //         list.map((value) => {
        //             return (
        //                 <button href={value.href} key={value._id} itemProp={data} data-targetid={value._id} style={classE.button}>
        //                     {value.Name}
        //                 </button>

        //             )
        //         })
        //     }
        // </IntersectionObserverWrap>
        <IntersectionObserverWrap>
            {
                navData?.map((value) => {
                    return (

                        <Button data-targetid={value?.dataTargetId} key={value?._id}>
                            {value?.Name}
                            {/* <Submenu className='active'> */}
                            {
                                value.subData.length ? <Submenu className='active'>
                                    {
                                        value.subData.map((item) => {


                                            return (
                                                <SubMenuItem key={item?._id}><a className='main'>{item?.Name}</a>
                                                    <DropDownArrow />
                                                </SubMenuItem>
                                            )
                                        })
                                    }
                                </Submenu> : ""
                            }
                            {/* </Submenu> */}

                        </Button>

                    )
                })
            }

            {/* <Button

                data-targetid="talk"
            >
                Home
            </Button>
            <Button

                data-targetid="save"
            >
                Shop
            </Button>
            <Button

                data-targetid="upload"
            >
                Category

            </Button>
            <Button

                data-targetid="download"
            >
                Download
            </Button>
            <Button

                data-targetid="send"
            >
                collection

            </Button>
            <Button

                data-targetid="star"
            >
                Star
            </Button>
            <Button

                data-targetid="mark-as-read"
            >
                Mark as Read
            </Button>
            <Button

                data-targetid="test1"
            >
                test1
            </Button>
            <Button

                data-targetid="test2"
            >
                test
            </Button>
            <Button

                data-targetid="test3"
            >
                test3
            </Button>
            <Button

                data-targetid="archive"
            >
                Archive
            </Button>
            <Button

                data-targetid="delete"
            >

                Delete

            </Button> */}

        </IntersectionObserverWrap >
    )
}

export default DynamicNavBar
