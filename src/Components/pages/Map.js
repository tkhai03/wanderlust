import React from 'react'
import './Map.css'
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api"

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete"

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox"
import "@reach/combobox/styles.css"

const libraries = ["places"]
const mapContainerStyle = {
    width: '100%',
    height: '100vh',
}
const center = {
    lat: 35.6762,
    lng: 139.6503,
}

const options = {
    disableDefaultUI: true,
    zoomControl: true,
}

function Map() {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading Maps"

    return (
        <div className='map'>
            <Search />

           <GoogleMap 
           mapContainerStyle={mapContainerStyle}
           zoom={8}
           center={center}
           options={options}
           ></GoogleMap>
        </div>
    )
}
function Search() {
    const {ready, value, suggestions:{status, data}, setValue, clearSuggestion} = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 35.6762,lng: () => 139.6503},
            radius: 200 * 1000,
        },
    })

    return (
        <div className='search'>
            <Combobox onSelect={(address) => {console.log(address)}} >
            <ComboboxInput 
            value={value} 
            onChange={(e) => { setValue(e.target.value)}}
            disabled={!ready}
            placeholder="Enter an address"/>
            <ComboboxPopover>
                {status === "OK" && data.map(({id, description}) => <ComboboxOption key={id} value={description} />)}
            </ComboboxPopover>
            </Combobox>      
        </div>
    )
}

export default Map
