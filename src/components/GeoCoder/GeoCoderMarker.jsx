import React, { useEffect, useState } from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import "leaflet/dist/leaflet.css"
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import * as ELG from 'esri-leaflet-geocoder'

// configuration for making the map icon
let DefaulIcon = L.icon ({
    iconUrl : icon, 
    shadowUrl: iconShadow
})
L.Marker.prototype.options.icon = DefaulIcon


const GeoCoderMarker = ({address}) => {

    const map = useMap()

    // useState([60, 19]) means if there is no position set, use 60 by 19
    const [position, setPosition] = useState([60,19])  

    // this translate the english address into map coordinate 
    useEffect(()=> {
        ELG.geocode().text(address).run((err, results, response)=> {
            if(results?.results?.length > 0){
                const {lat, lng} = results?.results[0].latlng
                setPosition([lat, lng])
                // // the zoom level is 6
                map.flyTo([lat, lng], 15)
            }
        })
    }, [address])
    // useEffect(()=> {
    //     ELG.geocode().text(address).run((err, results, response)=> {
    //         if(results?.results?.length > 0){
    //             const {lat, lng} = results?.results[0].latlng
    //             setPosition([lat, lng])

                
    //             map.flyTo([lat, lng], 6)
    //         }
    //     })
    // }, [address])

  return (
    <Marker position={position} icon={DefaulIcon}>
        <Popup/>
    </Marker>
  )
}

export default GeoCoderMarker
