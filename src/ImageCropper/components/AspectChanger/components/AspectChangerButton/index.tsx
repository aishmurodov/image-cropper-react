import React from "react"
import ImageCropperAspectChangerButtonInterface from "../../../../interfaces/ImageCropperAspectChangerButtonInterface";

const AspectChangerButton: React.FunctionComponent<ImageCropperAspectChangerButtonInterface> = (props) => {
    return <button
        className={`ImageCropper-AspectChanger__button${props.active ? ' active' : ""}`}
        onClick={() => {props.onClick(props.ratio)}}>
            <span className="ImageCropper-AspectChanger__button__inner">
                {props.children}
            </span>
    </button>
}

export default AspectChangerButton