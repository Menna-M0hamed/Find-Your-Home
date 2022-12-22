import React from 'react';
import Hero from "../Hero/Hero";
import Info from "../Info/Info";

import { InfoData } from "../../data/InfoData";
import { InfoDataTwo } from "../../data/InfoData";
import {SliderData} from "../../data/SliderData"

const Main = () => {
    return (
        <div>
            <Hero slides={SliderData}/>
            <Info {...InfoData} />
            <Info {...InfoDataTwo} />
        </div>
    )
}

export default Main
