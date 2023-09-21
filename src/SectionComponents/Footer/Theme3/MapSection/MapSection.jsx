import React from 'react';
import { MapContainer, ImageContainer } from "./MapSectionStyled"
// import Image from '../../../../SectionsLayout/Elements/ImageElement/ImageElement';
import { dummyImg } from '@/Constant/constants'
import ImageElement from '../../../../SectionsLayout/Elements/ImageElement/ImageElement';
import { useSelector } from 'react-redux';

const MapSection = ({ children }) => {
  //// console.log(children, 'map section')
  const data = children;
  const mapData = children?.data;
  // console.log(mapData?.Appearance?.object_fit, "map") 
  const style = {
    mapContainer: data?.custom_section_editable[0],
    image: data?.custom_section_editable[1]
  }
  const { getbusinessInfoData } = useSelector((state) => {
    return {

      getbusinessInfoData: state.websiteTemplate.getTemplate.data?.businessData,

    };
  })
  let ImageStyle = {
    desktop: {
      ...data?.custom_section_editable[1]?.style?.desktop,
      objectFit: mapData?.MapsOrImage?.object_fit,
      objectPosition: mapData?.MapsOrImage?.position
    }
  }

  // console.log(mapData,"datadata")
  return (
    <>
      {
        mapData?.MapsOrImage?.map_type === "Maps"  ? (
          <MapContainer item={style.mapContainer}>
            {
              mapData?.MapsOrImage?.mapUrl ? (
                <iframe src={mapData?.MapsOrImage?.mapUrl}></iframe>
              ) : (
                ""
              )
            }
          </MapContainer >
        ) : ("")
      }
      {
        mapData?.MapsOrImage?.map_type === "Images" ? (
          <MapContainer item={style.mapContainer}>
            <ImageElement src={mapData?.MapsOrImage?.image_url ? mapData?.MapsOrImage?.image_url : dummyImg} style={ImageStyle} />
          </MapContainer >
        ) : ""
      }

    </>
  )
}

export default MapSection