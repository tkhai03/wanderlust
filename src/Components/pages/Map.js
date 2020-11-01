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
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    })
    const [markers, setMarkers] = React.useState([])
    const [selected, setSelected] = React.useState(null)

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
            }
        ])
    }, [])

    const mapRef = React.useRef()
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map
    }, [])

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng })
        mapRef.current.setZoom(14)
    }, [])

    if (loadError) return "Error loading maps"
    if (!isLoaded) return "Loading..."

    return (
        <div className='map'>
            <Search panTo={panTo} />

            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map((marker) => (
                    <Marker
                    key={`${marker.lat}-${marker.lng}`}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => {
                        setSelected(marker)
                    }}
                    />
                ))}
            </GoogleMap>
        </div>
    )
}
function Search({ panTo }) {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 35.6762, lng: () => 139.6503 },
            radius: 200 * 1000,
        },
    })

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const handleSelect = async (address) => {
        setValue(address, false)
        clearSuggestions()

        try {
            const results = await getGeocode({address})
            const {lat, lng} = await getLatLng(results[0])
            panTo({lat, lng})
        } catch (error) {
            console.log("The British are coming. Error")
        }
    }

    return (
        <div className='search'>
            <Combobox onSelect={handleSelect} >
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="Enter an address" />
                <ComboboxPopover>
                    <ComboboxList>
                        {status === "OK" && 
                        data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}

export default Map
