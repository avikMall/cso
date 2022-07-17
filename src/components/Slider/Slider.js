import React, {useState, useEffect} from 'react'
import './Slider.css'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'
import slide1 from './slide1.jpg'
import slide5 from './slide2.jpg'
import slide4 from './slide3.jpg'
import slide2 from './slide4.jpg'
import slide3 from './slide5.jpg'

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(1)
    const delay = 2500;
    const timeoutRef = React.useRef(null);

    const nextSlide = () => {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    const slideArr = [slide1, slide2, slide3, slide4, slide5]

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
            nextSlide(), delay)
        
        return () => {
            resetTimeout();
        };
    }, [slideIndex]);

    return (
        <div className='ovr'>
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
                return (
                    <div
                    key={obj.id}
                    className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>   
                        <img 
                        src={slideArr[index]}
                        /> {console.log("../slide" + index + ".jpg")}
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
            </div>
        </div>
    )
}
