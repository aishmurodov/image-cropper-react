import React from "react"
import ImageCropperAspectChangerImageChangerButtonInterface
    from "../../../../interfaces/ImageCropperAspectChangerImageChangerButtonInterface";
import ImageChangerIcon from "../../icons/ImageChangeIcon";

const ImageChangerButton: React.FunctionComponent<ImageCropperAspectChangerImageChangerButtonInterface> = (props) => {
    return  <label
        className="ImageCropper-AspectChanger__button"
        data-save="1"
        data-colored="0">
        {!props.freezeActions ?
            <input
            type="file"
            onChange={props.onImageChange} /> : ""}
        <span
            className="ImageCropper-AspectChanger__button__icon">
            <ImageChangerIcon />
        </span>
        <span
            className="ImageCropper-AspectChanger__button__inner">
            Заменить картинку
        </span>
    </label>
}

export default ImageChangerButton