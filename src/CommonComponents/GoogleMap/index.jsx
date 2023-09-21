import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'


const GoogleMap = ({ handleLocation, defaultValue }) => {
  const [value, setValue] = useState(defaultValue || "");
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const [getMapUrl, setGetMapUrl] = useState()
  const [locationData, setLocationData] = useState({
    center: {
      lat: "",
      lng: ""
    },
  })
  useEffect(() => {
    // if (value) {
    var location = value;

    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: JSON.stringify(location),
        key: 'AIzaSyCnHsbHlyAEsjRBse6D2FsSriujZETOalw'
      }
    }).then((res) => {
      setLocationData({
        center: {
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng
        },
      })
      let latdata = res.data.results[0].geometry.location.lat
      let lngData = res.data.results[0].geometry.location.lng
      if (latdata && lngData) {
        let getMapUrlReplace = "https://maps.google.com/maps?q=lat,lng&hl=es;z=14&output=embed"
        setGetMapUrl(getMapUrlReplace.replace("lat", latdata).replace("lng", lngData))

      } else {
        setIndiaMap(<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19451819.707779944!2d72.28784066297035!3d22.072999048774875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1664262698830!5m2!1sen!2sin" width="300" height="150"></iframe>)
      }
      setLatitude(latdata)
      setLongitude(lngData)
      //   locationAndContactDatapost({
      //     addressDetails: addressDetails,
      //     optionalAddress: optionalAddress,
      //     getMapUrl: getMapUrl,
      //     latitude: res.data.results[0].geometry.location.lat,
      //     longitude: res.data.results[0].geometry.location.lng,
      //     showUserSide: showUserSide,
      //     value: value,
      //     // addressDetailsError: addressDetailsError

      //   })
      handleLocation(getMapUrl, value)
      return res;
    }).catch(error => {
      return error;
    });
    // }
  }, [getMapUrl, value])
  return (
    <GooglePlacesAutocomplete
      apiKey="AIzaSyCnHsbHlyAEsjRBse6D2FsSriujZETOalw"
      debounce={300}
      selectProps={{
        value,
        onChange: (e) => setValue(e)
      }}
    />
  )
}
export default GoogleMap