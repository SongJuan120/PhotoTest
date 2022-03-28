import React from 'react'


const LabelTiltle = ({name, value}) => {

    return (
        <div className='Label'>
            <div className='Title'>{name}:</div>
            <div className='Content'>{value}</div>
        </div>
    )

}

export default LabelTiltle