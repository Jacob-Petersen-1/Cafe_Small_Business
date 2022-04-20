import React, { useState } from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import "./ProductSlider.css";
import { ProductSliderData } from './ProductSliderData';
import "bootswatch/dist/lux/bootstrap.min.css";

const ProductSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    return ( 
        <div className='slider'>
            <AiOutlineArrowLeft className="arrow-prev" />
            <AiOutlineArrowRight className="arrow-next" />
            {ProductSliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? " slide-current" : "slide"} key={index}>
                    {index === currentSlide && (
                        <>
                            <img src={slide.image} alt="slide" />
                            <div className='content'>
                                <h2>{slide.heading}</h2>
                                <p>{slide.desc}</p>
                                <button type="button" class="btn btn-info">Contact Us!</button>
                            </div>
                        </>
                        )};
                        
                           
                        


                    </div>
                );
            })};

        </div>
     );
}
 
export default ProductSlider;