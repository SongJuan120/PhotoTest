import React, {useState, useEffect} from 'react'
import LabelTiltle from '../components/LabelTitle'
import { useLocation } from "react-router-dom";

import '../assets/styles/style.css'
import { Image } from 'antd';

function PhotoDetail() {
    const location = useLocation();
    const data = location.state 

    useEffect (()=> {
        console.log ("parma....", location.state)
    }, [])
    return (
        <main className='Main'>                 
            <div className='SideBar'>
                <img
                    className='Avatar'
                    src= {data.picture.large}
                    width="200"                    
                />
                <h1>{data.login.username}</h1>                
            </div>
            <div className='RightContent'>
                <h1>{data.name.first} {data.name.last} ({data.name.title})</h1>
                <LabelTiltle name="Age" value={data.dob.age} />
                <LabelTiltle name="Gender" value={data.gender} />
                <LabelTiltle name="Street" value={data.location.street.name + data.location.street.number } />
                <LabelTiltle name="City" value={data.location.city} />
                <LabelTiltle name="State" value={data.location.state} />
                <LabelTiltle name="Country" value={data.location.country} />
                <LabelTiltle name="PostCode" value={data.location.postcode} />
                <LabelTiltle name="Latitude" value={data.location.coordinates.latitude} />
                <LabelTiltle name="Longitude" value={data.location.coordinates.longitude} />
                <LabelTiltle name="Timezone" value={data.location.timezone.description + ' ' + data.location.timezone.offset} />
                <LabelTiltle name="Email" value={data.email} />
                <LabelTiltle name="Phone" value={data.phone}   />
                <LabelTiltle name="Cell" value={data.cell}  />
            </div>
        </main>
    )
}
export default PhotoDetail
