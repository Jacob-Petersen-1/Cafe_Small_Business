import React, { useState,useEffect } from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import "./ProductSlider.css";
import { ProductSliderData } from './ProductSliderData';
import "bootswatch/dist/lux/bootstrap.min.css";

const ProductSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = ProductSliderData.length;
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 10000;
    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength -1 ? 0 : currentSlide + 1)
    };

    const previousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength -1 :currentSlide - 1)
    };

    function auto() {
        slideInterval = setInterval(nextSlide, intervalTime)
    };

    useEffect(() => {
        setCurrentSlide(0)
    }, []);
    
    useEffect(() => {
        if (autoScroll){
            auto();
        };
        return () => clearInterval(slideInterval)
    }, [currentSlide]);
    
    return ( 
        <div className='slider'>
            <AiOutlineArrowLeft className="arrow prev" onClick={previousSlide} />
            <AiOutlineArrowRight className="arrow next" onClick={nextSlide}  />
            {ProductSliderData.map((slide, index) => {
                return (
                    <div className={index === currentSlide ? "slide-current" : "slide"} key={index}>
                    {index === currentSlide && (
                        <>
                            <img src={slide.image} alt="slide" />
                            <div className="content">
                                <h2>{slide.heading}</h2>
                                <p>{slide.desc}</p>
                                <hr></hr>
                            </div>
                            
                        </>
                        )}
                        
                           
                        


                    </div>
                )
            })}

        </div>
     );
}
 
export default ProductSlider;