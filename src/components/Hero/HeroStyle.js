import styled , {css} from "styled-components/macro";
import {IoMdArrowRoundForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';




export const HeroSection = styled.section`
 height: 100vh;
 max-height: 1100px;
 position: relative;
 overflow: hidden;
 `;

export const HeroWrapper = styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
position: relative;
overflow: hidden;
margin-top:30px ;
`;

export const HeroSlide = styled.div`
height: 100%;
width: 100%;
z-index: 1;
`;

export const HeroSlider = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
display: flex;
justify-content: center;
align-items: center;

&::before{
    content: '';
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    overflow: hidden;
    opacity: 0.9;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 50%,
        rgba(0, 0, 0, 0.8) 100%
    );
}
`;

export const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
object-fit: cover;
`;

export const HeroContent = styled.div`
position: relative;
z-index: 10;
display: flex;
flex-direction: column;
color: #fff;
max-width: 1600px;
width: calc(100% - 100px);

h1{
    font-size: clamp(1rem, 8vh, 2rem);
    font-weight: 400;
    text-transform: uppercase;
    text-align: left;
    margin-bottom: 0.8rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
}

p{
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    font-weight: bold;
}
`;

export const Arrow = styled(IoMdArrowRoundForward)`
padding-left: 3px;
`;

export const SliderButtons = styled.div`
position: absolute;
right: 50px;
bottom: 50px;
display: flex;
z-index: 10;
`;

export const arrowButtons = css`
width: 50px;
height: 50px;
color: #fff;
cursor: pointer;
background-color: #000d1a;
border-radius: 50px;
padding: 10px;
margin-right: 1rem;
user-select: none;
transition: 0.3s;

&:hover{
    background: #cd853f;
    transform: scale(1.05);
}
`;

export const PrevArrow = styled(IoArrowBack)`
${arrowButtons}
`;

export const NextArrow = styled(IoArrowForward)`
${arrowButtons}
`;

