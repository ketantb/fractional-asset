import React, { useEffect } from 'react'
import './PreLoader.css'


const PreLoader = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='loader-wrap' >
            <div className="loading-container">
                <div className="loading-text">
                    <span>L</span>
                    <span>O</span>
                    <span>A</span>
                    <span>D</span>
                    <span>I</span>
                    <span>N</span>
                    <span>G</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                </div>
            </div>

        </div>
    )
}

export default PreLoader