import React, { useEffect, useState } from 'react'
import './FilterBox.css'
import PreLoader from '../../../pre-loaders/PreLoader'


const arr = ['Residential & Commercial', 'yacht', 'art', 'land', 'car', 'jewellery']


const FilterBox = () => {



    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    if (arr.length === 0) {
        return (
            <PreLoader />
        )
    }

    return (
        <div className='filterbox-wrap'>
        </div>
    )
}

export default FilterBox