import React, {useState, useEffect} from 'react'
import LabelTiltle from '../components/LabelTitle'
import { useLocation } from "react-router-dom";

import '../assets/styles/style.css'
import { Image } from 'antd';

function PhotoDetail() {
    const location = useLocation();
    const item = location.state.item

    useEffect (()=> {
        console.log ("parma....", item)
    }, [])
    return (        
        
        <div className='detail-main'>            
            <div className='user-container'>
                <h2>Name: {item.user}</h2>                
            </div>
            <img src={item.largeImageURL} width='80%' />       
            <h2>downloads: {item.downloads}</h2>                                             
            <h2>views: {item.views}</h2>                     
            <h2>size: {item.imageSize}</h2>           
            <h2>Tags: {item.tags}</h2>
        </div>            
    )
}
export default PhotoDetail
