import {ChangeEvent} from "react";

interface ImageCropperAspectChangerImageChangerButtonInterface {
    freezeActions: boolean|undefined,
    onImageChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export default ImageCropperAspectChangerImageChangerButtonInterface