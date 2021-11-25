import React from "react";
import ImageCropperHeadingInterface from "../../interfaces/ImageCropperHeadingInterface";
import "./styles/Heading.css"

const Heading: React.FunctionComponent<ImageCropperHeadingInterface> = (props) => {

    return <div className="ImageCropper-Heading">{props.text}</div>

}

export default Heading