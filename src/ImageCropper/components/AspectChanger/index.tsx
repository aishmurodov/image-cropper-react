import React from "react";
import "./styles/AspectChanger.css"
import ImageCropperAspectChangerInterface from "../../interfaces/ImageCropperAspectChangerInterface";
import RotateButton from "./components/RotateButton";
import ImageChangerButton from "./components/ImageChangerButton";
import SaveButton from "./components/SaveButton";
import AspectChangerButton from "./components/AspectChangerButton";

const AspectChanger: React.FunctionComponent<ImageCropperAspectChangerInterface> = (props) => {

    return <div className="ImageCropper-AspectChanger">
        <RotateButton
            onRotationClick={props.onRotationClick} />
        {
            props.mode !== "avatar" ?
                <div className="ImageCropper-AspectChanger__ratios">
                {
                    props.ratios.map((ratio) => {
                        return <AspectChangerButton
                            key={ratio.ratio}
                            ratio={ratio.ratio}
                            onClick={props.onChangeRatio}
                            active={props.initedRatio === ratio.ratio}>
                            {ratio.title}
                        </AspectChangerButton>
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