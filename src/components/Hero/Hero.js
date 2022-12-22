import React, {useState, useRef, useEffect} from 'react';
import { CustomButton } from '../Navbar/ButtonStyle';
import { Arrow, HeroContent, HeroImage, HeroSection, HeroSlide, HeroSlider, HeroWrapper, NextArrow, PrevArrow, SliderButtons } from './HeroStyle';


const Hero = ({slides}) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1));
        };
        timeout.current = setTimeout(nextSlide, 3000);

        return function() {
            if(timeout.current) {
                clearTimeout(timeout.current);
            }
        };

    }, [current, length]);

    const nextSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent( current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        if(timeout.current) {
            clearTimeout(timeout.current);
        }

        setCurrent( current === 0 ? length - 1 : current - 1);
    };

    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return(
                        <HeroSlide key={index}>
                            {index === current && (
                            <HeroSlider>
                                <HeroImage src={slide.image} alt={slide.alt}/>
                                <HeroContent>
                                    <h1>{slide.title}</h1>
                                    <p>{slide.price}</p>
                                    <CustomButton to={slide.path} primary='true'>
                                        {slide.label}
                                        <Arrow/>
                                    </CustomButton>
                                </HeroContent>
                            </HeroSlider>
                            )}
                        </HeroSlide>
                    )
                })}
                <SliderButtons>
                    <PrevArrow onClick={prevSlide}/>
                    <NextArrow onClick={nextSlide}/>
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
