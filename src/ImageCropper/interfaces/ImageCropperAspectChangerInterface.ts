import {ImageCropperMode} from "./ImageCropperInterface";
import {ChangeEvent} from "react";

interface ImageCropperAspectChangerInterface {
    mode: ImageCropperMode,
    ratios: Array<{ratio: number, title: string}>,
    onRotationClick: () => void,
    onChangeRatio: (ratio: number) => void,
    onImageChange: (e: ChangeEvent<HTMLInputElement>) => void,
    initedRatio: number,
    onSaveClick: () => void,
    freezeActions?: boolean
}

export default ImageCropperAspectChangerInterface