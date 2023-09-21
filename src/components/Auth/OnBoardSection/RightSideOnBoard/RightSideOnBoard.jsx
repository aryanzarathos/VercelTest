import React from "react";
import styles from "./RightSideOnBoard.module.scss";
import homePage from "../../../../Assets/images/img/HomePage.png"
import Image from 'next/image'


const RightSideOnBoard = () =>{
    return(
        <>
        <div className={styles.mainRightSide}>
        <Image src={homePage} alt="home_page" />
        </div>
        </>
    )
}
export default RightSideOnBoard