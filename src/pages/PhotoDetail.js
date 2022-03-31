import React from 'react'
import { useLocation } from "react-router-dom";
import '../assets/styles/style.css'


const PhotoDetail = () => {
    const location = useLocation();
    const item = location.state.item

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
