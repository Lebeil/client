import React, {FunctionComponent} from 'react';
import {IFile} from "../libs/types";
import {size} from "../libs/size";
import Image from "next/image";


const RenderFile: FunctionComponent<{ file: IFile }> = ({ file: {format, sizeInBytes, name}}) => {
    return (
        <div className="flex items-center w-full p-4 my-2">
            <Image src={`/images/${format}.png`} alt="" className="w-14 h-14"/>
            <span className="mx-2">{name}</span>
            <span className="ml-auto">{size(sizeInBytes)}</span>
        </div>
    );
};

export default RenderFile;