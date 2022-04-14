import React, { useState, useEffect } from 'react';
import axios from 'axios';


const MarkerForm = () => {
    const[lat, setLat] = useState("");
    const[lng, setLng] = useState("");
    const[address, setAddress] = useState("")

    async function handleSubmitMarker(marker){
        marker.preventDefault();
        let newMarker = {
            address: address,
            lat: lat,
            lng: lng,
        }
        console.log(newMarker)
        await axios.patch("http://127.0.0.1:8000/map/marker/1/", newMarker);
    }

    
    
    
    
    return (  
        <div>
            <form on onSubmit={handleSubmitMarker}>
                <div class="form-row">
                    <div class="col-7">
                        <input type="text" class="form-control" placeholder="Location" value={address} onChange={(m) => setAddress(m.target.value)}/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Latitude" value={lat} onChange={(m) => setLat(m.target.value)}/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Longitude" value={lng} onChange={(m) => setLng(m.target.value)}/>
                    </div>
                    <div class="col">
                        <button type="submit" class="btn btn-primary mb-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>
            
    );

}
 
export default MarkerForm;