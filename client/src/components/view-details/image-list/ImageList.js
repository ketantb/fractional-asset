import * as React from 'react';
import './ImageList.css'
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper';


export default function ViewdetailsImageList({ property }) {
    const images = property.images
    return (
        <div className='image-wrapper'>
            {images && images.length > 0 && (
                images.map((item,i) => {
                    return (
                            <img src={item} alt="" key={i+1} />
                    )
                })
            )}

        </div>
    );
}

// {/* <SwiperSlide className='slider-image-wrapper' >
//                     <img style={{ width: '100%', height: '100%' }}
//                         src={banner} alt="propertyImage" />
//                 </SwiperSlide> */}
// {/* <ImageList >
//                 {property && property.images && property.images.length > 0 && (
//                     property.images.map((item) => {
//                         return (
//                             <img src={item} alt="" />
//                         )
//                     })
//                 )}
//             </ImageList> */}
