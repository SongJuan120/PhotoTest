import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import {getImageActions} from '../store/actions/getImageActions'
import '../assets/styles/style.css'

const Photo = (props) => {            
    const [ImgList, setImgList] = useState ([])  
    
    useEffect (()=> {
        getImages (1)
    }, [])

    const getImages = (page) => {
        props.getImageData (page)
    }   
   
    return (
        <main className='App'>            
            <div>
                Hello World
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getImageData: (page) => dispatch(getImageActions(page))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Photo);
