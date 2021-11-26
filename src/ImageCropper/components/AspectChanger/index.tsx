import React from "react";
import "./styles/AspectChanger.css"
import ImageCropperAspectChangerInterface from "../../interfaces/ImageCropperAspectChangerInterface";
import RotateButton from "./components/RotateButton";
import ImageChangerButton from "./components/ImageChangerButton";
import SaveButton from "./components/SaveButton";

const AspectChanger: React.FunctionComponent<ImageCropperAspectChangerInterface> = (props) => {

    return <div className="ImageCropper-AspectChanger">
        <RotateButton
            onRotationClick={props.onRotationClick} />
        {
            props.mode !== "avatar" ?
                <div className="ImageCropper-AspectChanger__ratios">
                {
                    props.ratios.map((ratio) => {
                        return <button
                            key={ratio.ratio}
                            className={`ImageCropper-AspectChanger__button ${props.initedRatio === ratio.ratio ? 'active' : ""}`}
                            onClick={() => {props.onChangeRatio(ratio.ratio)}}>
                            <span className="ImageCropper-AspectChanger__button__inner">
                                {ratio.title}
                            </span>
                        </button>
                    })
                }
                </div>
            : <></>
        }
        <div className="ImageCropper-AspectChanger__right">
            <ImageChangerButton
                freezeActions={props.freezeActions}
                onImageChange={props.onImageChange} />
            <SaveButton
                onSaveClick={props.onSaveClick} />
        </div>
    </div>

}

export default AspectChanger