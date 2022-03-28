import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {useInitial} from "./useInitial";
import {Card} from "../components/card/card.component";
import {CardList} from "../components/card-list/card-list.component";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/useInitial">
                <useInitial/>
            </ComponentPreview>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
            <ComponentPreview path="/CardList">
                <CardList/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;