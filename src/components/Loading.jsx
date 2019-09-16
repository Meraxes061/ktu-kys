import React from 'react'
import { BeatLoader } from 'react-spinners';

function Loading() {
    return (
        <div className="d-flex justify-content-center mt-3 h-100 align-items-center">
            <BeatLoader
                sizeUnit='px'
                size={24}
                color='#007bff' />
        </div>
    )
}

export default Loading
