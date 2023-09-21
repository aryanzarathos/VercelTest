import React, { useEffect, useRef } from "react";
import styles from './MapImage.module.scss'
import SelectDropDown from "../../../../../../../CommonComponents/SelectDropdown";
import { useState } from "react";
import ImageUploade from "../ImageUploade";
import { useDispatch, useSelector } from "react-redux";
import { useDebounceFunction } from "../../../../../../../CommonFunctions/debounce";
import { updateFooterData } from "../../../../../../../store/actions/siteEditor";
import { UPDATE_FOOTER } from "@/store/reducers/websiteTemplate";
import SearchLocationPopup from "@/CommonComponents/SearchLocationPopup";

const MapImageFooter = () => {
    const LocationRef = useRef();
    const dispatch = useDispatch();

    const { footerData, getTemplateData } = useSelector((state) => {
        return {
            footerData: state.editor.footerData.data,
            getTemplateData: state.websiteTemplate.getTemplate.data
        }
    })

    const value = ["Maps", "Images", "Nothing"];

    const [MapsOrImage, setMapsOrImage] = useState({
        map_type: "Maps",
        image_url: "",
        object_fit: "fill",
        mapValue: "",
        mapUrl: "",
        position: "center"
    })

    useEffect(() => {
        if (footerData) {
            setMapsOrImage({ ...MapsOrImage, ...footerData?.MapsOrImage })
        };
    }, [footerData])

    const selectedHandle = (type, val) => {
        setMapsOrImage({ ...MapsOrImage, [type]: val });
        dispatch(updateFooterData({ id: footerData?._id, body: { MapsOrImage: { ...MapsOrImage, [type]: val } } }))
        dispatch(UPDATE_FOOTER({ data: { MapsOrImage: { ...MapsOrImage, [type]: val } } }))
    }
    const HandleLocation = () => {
        LocationRef.current.open()
    }
    const CloseLocation = () => {
        LocationRef.current.close()
    }
    const handleSave = (mapUrl, value) => {
        LocationRef.current.close()
        setMapsOrImage({ ...MapsOrImage, mapUrl: mapUrl, mapValue: value });
        dispatch(updateFooterData({ id: footerData?._id, body: { MapsOrImage: { ...MapsOrImage, mapUrl: mapUrl, mapValue: value } } }))
        dispatch(UPDATE_FOOTER({ data: { MapsOrImage: { ...MapsOrImage, mapUrl: mapUrl, mapValue: value } } }))
    }
    const closeImageHandle = () => {
        setMapsOrImage({ ...MapsOrImage, image_url: "" });
        dispatch(updateFooterData({ id: footerData?._id, body: { MapsOrImage: { ...MapsOrImage, image_url: "" } } }))
        dispatch(UPDATE_FOOTER({ data: { MapsOrImage: { ...MapsOrImage, image_url: "" } } }))
    }

    return (
        <div className={styles.mapImageMain}>
            <p className={styles.showSelectionTxt}>What do you want to show?</p>
            <SelectDropDown handleSelect={(val) => selectedHandle("map_type", val)} className={styles.dropdownmap}
                showValue={MapsOrImage?.map_type}
                deafultValue={MapsOrImage?.map_type} values={value} />
            {
                MapsOrImage?.map_type === "Maps" ?
                    <button className={styles.ManageLocation_btn} onClick={() => HandleLocation()}>Manage Location</button>
                    :
                    MapsOrImage?.map_type === "Images" ?
                        <ImageUploade object_data={MapsOrImage} closeImageHandle={closeImageHandle} selectedHandle={selectedHandle} />
                        :
                        MapsOrImage?.map_type === "Nothing" ?
                            "" : ""
            }
            <SearchLocationPopup ref={LocationRef} closeModal={CloseLocation} defaultValue={MapsOrImage?.mapValue} handleSave={(mapUrl, value) => handleSave(mapUrl, value)} />
        </div>
    )
}

export default MapImageFooter;