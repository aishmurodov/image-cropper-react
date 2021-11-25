import ImageCropperCloseEventInterface from "./ImageCropperCloseEventInterface";
import ImageCropperLanguagesInterface from "./ImageCropperLanguagesInterface";
import React from "react";

export type ImageCropperMode = "default"|"avatar"

interface ImageCropperInterface {
    enabled: boolean,
    onClose: (e: ImageCropperCloseEventInterface) => void
    image: string,
    mode: ImageCropperMode,
    language?: ImageCropperLanguagesInterface,
    ratio?: number,
    angle?: number,
    freezeActions?: boolean,
    freezeActionsInner?: React.FunctionComponent|JSX.Element|React.ReactNode
}

export default ImageCropperInterface