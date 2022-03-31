import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {getImageActions} from '../store/actions/getImageActions'
import '../assets/styles/style.css'
import { useHistory } from "react-router-dom";

const Photo = (props) => { 
    
    const history = useHistory();
    const [currentPage, setCurrentPage] = useState (1)
    const [leftArray, setLeftArray] = useState ([])
    const [midArray, setMidArray] = useState ([])
    const [rightArray, setRightArray] = useState ([])

    useEffect (()=> {        
        if (!props.isLoading) {
            props.getImageData (currentPage)                
        }        
    }, [currentPage])

    const onScroll = (e) => {           
        let element = e.target        
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {            
            setCurrentPage (currentPage + 1)
        }
    };

    useEffect (()=> {        
       
        const nCount = props.data.length;        
        let left =[]
        let mid =[]
        let right =[]
        for (let i = 0; i < nCount; i++) {
            if (i % 3 === 0) left.push (props.data[i])
            else if (i % 3 === 1) mid.push (props.data[i])
            else right.push (props.data[i])
        }
        setLeftArray (left)
        setRightArray (right)
        setMidArray (mid)

    }, [props.data])

    const moveDetailView = (item) => {        
        history.push("detail", {item: item});
    }

    return (
        <main className='App'>                       
            <div className="container" onScroll={onScroll} >
                <div className='section'>
                {
                    leftArray.length > 0 && leftArray.map ((item, index)=> {
                        return (                            
                            <img key={'img1' + item.id} src={item.previewURL} width='100%' onClick={()=>moveDetailView(item)} alt='' />                            
                        )
                    })
                }
                </div>
                <div className='section'>
                {
                    midArray.length > 0 && midArray.map ((item, index)=> {
                        return (                            
                            <img key={'img2' + item.id} src={item.previewURL} width='100%'onClick={()=>moveDetailView(item)} alt='' />                            
                        )
                    })
                }
                </div>
                <div className='section'>
                {
                    rightArray.length > 0 && rightArray.map ((item, index)=> {
                        return (                            
                            <img key={'img3' + item.id} src={item.previewURL} width='100%' onClick={()=>moveDetailView(item)} alt='' />                            
                        )
                    })
                }
                </div>
                {
                    props.isLoading && <h1>Loading.....</h1>
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
