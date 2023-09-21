import React, { createContext } from 'react'
// import useWindowDimensions from '../../SectionCommon/WindowSize/widnowSize';
import useWindowDimensions from '../../../SectionCommon/WindowSize/widnowSize';

// import MyProfileDesktop from './Theme1/Desktop';
import MyProfileDesktop from './Desktop/Desktop';
import MyProfileMobile from './Mobile/Mobile';
export const MyProfile = createContext();

const MyProfileTheme1 = ({children}) => {
    const data = children;
    const { width } = useWindowDimensions();
    return (
        <MyProfile.Provider value={data}>
            {
                width > 768 ? <MyProfileDesktop /> : <MyProfileMobile />
            }
        </MyProfile.Provider>
    )
}

export default MyProfileTheme1
