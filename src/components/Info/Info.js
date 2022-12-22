import React from 'react';
import { Button } from '../Navbar/ButtonStyle';
import { ColumnLeft, ColumnRight, Container, Section } from './InfoStyle';

const Info = ({heading, paragraphOne, paragraphTwo, buttonLabel, image, reverse}) => {
    return (
        <Section>
            <Container>
                <ColumnLeft reverse={reverse}>
                   <h1>{heading}</h1>
                   <p>{paragraphOne}</p>
                   <p>{paragraphTwo}</p>
                   <Button to="/homes" primary="true">{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt='home'/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Info
