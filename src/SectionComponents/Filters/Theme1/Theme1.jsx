import React from 'react'
import FIlterDesktop from './FilterDesktop/FIlterDesktop'
// import FilterMobile from './FilterMobile/FilterMobile'
import { useState } from 'react'
import { useEffect } from 'react'

const FiltersTheme1 = ({ children }) => {



    // //// console.log(children, "children");


    const [windowResize, setWindowResize] = useState({
        width: undefined
    });

    const ResizeHandle = () => {
        setWindowResize({
            width: window.innerWidth
        })
    }

    useEffect(() => {
        window.addEventListener('resize', ResizeHandle);
        return () => {
            window.removeEventListener('resize', ResizeHandle)
        }
    }, [])




    return (
        <>
            <FIlterDesktop data={children} />
            {
                // windowResize.width > 768 ? (
                //     <FIlterDesktop />
                // ) : (
                //     <FilterMobile />
                // )
            }
        </>
    )
}

export default FiltersTheme1
