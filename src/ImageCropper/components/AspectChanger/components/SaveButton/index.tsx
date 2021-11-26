import React from "react"
import ImageCropperAspectChangerSaveButtonInterface from "../../../../interfaces/ImageCropperAspectChangerSaveButtonInterface";

const SaveButton: React.FunctionComponent<ImageCropperAspectChangerSaveButtonInterface> = (props) => {
    return <button
        className="ImageCropper-AspectChanger__button"
        data-save="1"
        data-bordered="1"
        onClick={props.onSaveClick}>
            <span
                className="ImageCropper-AspectChanger__button__inner">
                Сохранить
            </span>
    </button>
}

export default SaveButton