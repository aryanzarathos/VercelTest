import React, { forwardRef, useState } from 'react'
import Modals from '../Modals'
import ModalsHeader from '../Modals/ModalsHeader'
import ModalsBody from '../Modals/ModalsBody'
import ModalsFooter from '../Modals/ModalsFooter'
import { styled } from 'styled-components'
import style from './SearchLocation.module.scss'
import SearchControl from '../SearchControl'
import GoogleMap from '../GoogleMap'

const SearchWrap = styled.div`
    .SearchControlRadius{
        input{
            border-radius: 6px;
            border: 1.5px solid #ECECEC;
            background: #FFF;
        }
    }
`
const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
`
// eslint-disable-next-line react/display-name
const SearchLocationPopup = forwardRef(({ closeModal,handleSave,defaultValue }, ref) => {
    const [value,setValue]=useState(defaultValue||"")
    const [mapUrl,setMapUrl]=useState("")
    const handleLocation = (url,value)=>{
        setValue(value)
        setMapUrl(url)
    }
    const save = ()=>{
        handleSave(mapUrl,value)
    }
    return (
        <Modals ref={ref} Position="center" slide="top" ClosePopUp={() => closeModal()} ModalsSize={'modalM'} >
            <ModalsHeader title={'Search Location'} />
            <ModalsBody className={style.Search_Location_MOdal_body_main}>
                <SearchWrap>
                    {/* <SearchControl
                        classNameWrappper="SearchControlRadius"
                        placeholder="e.g. New Valley, India"
                    /> */}
                    <GoogleMap handleLocation={(url,value)=>handleLocation(url,value)} defaultValue={value}/>
                </SearchWrap>
            </ModalsBody>
            <ModalsFooter>
                <ButtonWrap>
                    <button className='button btn-oval btn-xs btn-o-gray' onClick={()=>closeModal()}>Cancel</button>
                    <button className='button btn-oval btn-xs button-primary' onClick={()=>save()}>Done</button>
                </ButtonWrap>
            </ModalsFooter>
        </Modals>
    )
})

export default SearchLocationPopup