import {ImageCropperMode} from "./ImageCropperInterface";
import {ChangeEvent} from "react";
import ImageCropperRatioInterface from "./ImageCropperRatioInterface";

interface ImageCropperAspectChangerInterface {
    mode: ImageCropperMode,
    ratios: Array<ImageCropperRatioInterface>,
    onRotationClick: () => void,
    onChangeRatio: (ratio: number) => void,
    onImageChange: (e: ChangeEvent<HTMLInputElement>) => void,
    initedRatio: number,
    onSaveClick: () => void,
    freezeActions?: boolean
}

export default ImageCropperAspectChangerInterface