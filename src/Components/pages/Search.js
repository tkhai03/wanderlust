import React from 'react'
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

function Search() {
    const {ready, value, suggestions:{status, data}, setValue, clearSuggestion} = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 35.6762, lng: () => 139.6503},
            radius: 200 * 1000,
        },
    })

    return (
        <div>
            <Combobox onSelect={(address) => {console.log(address}}>
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

export default Search
