import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {getImageActions} from '../store/actions/getImageActions'
import '../assets/styles/style.css'

const Photo = (props) => { 
    
    const [currentPage, setCurrentPage] = useState (1)

    useEffect (()=> {
        console.log ("current index.....", currentPage)
        props.getImageData (currentPage)                
    }, [currentPage])

    const onScroll = (e) => {        
        let element = e.target        
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {            
            setCurrentPage (currentPage + 1)
        }
    };       

    return (
        <main className='App'>            
            <div onScroll={onScroll}  style={{ height: 1000, overflowY: "scroll" }}>
                {
                    props.data && props.data?.map ((item, index) => {
                        return (
                            <img src={item.previewURL} width="30%" ></img>
                        )
                    })
                }                
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {       
    return {
        data: state.imageReducer.data,
        err: state.imageReducer.err,        
        isLoading: state.imageReducer.isLoading        
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getImageData: (page) => dispatch(getImageActions(page))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photo);
