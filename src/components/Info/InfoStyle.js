import styled from "styled-components";



export const Section = styled.section`
 width: 100%;
 height: 100%;
 padding: 0rem;
 `;

export const Container = styled.div`
 padding: 2rem calc((100vw - 1300px) /2);
 display: grid;
 grid-template-columns: 1fr 1fr;
 grid-template-rows: 600px;

 @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
 }

  @media screen and (max-width: 450px){
     grid-template-rows: 400px;
 }
 `;

export const ColumnLeft = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 line-height: 1.4rem;
 padding: 1rem 2rem;
 order: ${({reverse}) => (reverse ? '2' : '1')}; //trtebha 1

 h1{
     margin-bottom: 2.5rem;
     font-size: clamp(1.5rem, 6vw, 2.5rem);
     color:#CD853F ;
 }

 p{
     margin-bottom: 2rem;
     color:black ;
 }

 @media screen and (max-width: 768px){
    order: ${({reverse}) => (reverse ? '1' : '2')}; // lma as8r trtebha yb2a 2
 }
`;

export const ColumnRight = styled.div`
 padding: 1rem 2rem;
 order: ${({reverse}) => (reverse ? '1' : '2')}; //trtebha 2
 display: flex;
 justify-content: center;
 align-items: center;

 @media screen and (max-width: 768px){
    order: ${({reverse}) => (reverse ? '2' : '1')}; // lma as8r trtebha yb2a 1
 }

 img{
     height: 80%;
     width: 100%;
     object-fit: cover;

     @media screen and (max-width: 768px){
       height: 90%;
       width: 90%;
 }
 }
 `;