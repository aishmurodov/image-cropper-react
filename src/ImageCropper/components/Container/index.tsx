import React from "react"
import "./styles/Container.css"
import ImageCropperContainerInterface from "../../interfaces/ImageCropperContainerInterface";

const Container: React.FunctionComponent<ImageCropperContainerInterface> = (props) => {

    return <div className="ImageCropper-Container" data-mounted={props.mounted}>
        <div className="ImageCropper-Container__inner" data-orientation={props.imageSizes.width > props.imageSizes.height ? "horizontal" : "vertical"}>
            {props.children}
            <div className="ImageCropper-Container__inner__bottom">
                {props.bottomItems}
            </div>
        </div>
    </div>
}

export default Container