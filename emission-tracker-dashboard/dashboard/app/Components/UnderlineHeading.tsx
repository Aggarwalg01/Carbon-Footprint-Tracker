import React from "react";


interface UnderlineHeadingPropType {
    content: string,
    color: string

}

const UnderlineHeading = ({content, color}: UnderlineHeadingPropType) => {
    return <h1 className={`text-[${color}] p-10 font-bold inline-block text-[3rem] uppercase relative`}>
        {content}
        <div className={`w-full bg-[${color}] h-[10px] rounded-full `}/>
    </h1>
}

export default UnderlineHeading;
