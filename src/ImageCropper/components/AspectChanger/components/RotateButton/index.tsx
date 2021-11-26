import React, {useState} from "react"
import rotateIcon from "../../icons/rotate.png";
import ImageCropperAspectChangerRotateButtonInterface
    from "../../../../interfaces/ImageCropperAspectChangerRotateButtonInterface";

const RotateButton: React.FunctionComponent<ImageCropperAspectChangerRotateButtonInterface> = (props) => {
    const [lastRotation, setLastRotation] = useState<number>(Date.now() / 1000 | 0)

    const onClickRotation = () => {
        const now = Date.now() / 1000 | 0
        if (now - lastRotation >= 1) {
            props.onRotationClick()
            setLastRotation(now)
        }
    }
    return <button
        className="ImageCropper-AspectChanger__button"
        data-bordered="1"
        onClick={onClickRotation}>
            <span className="ImageCropper-AspectChanger__button__inner">
                <img src={rotateIcon} alt=""/>
            </span>
    </button>
}

export default RotateButton