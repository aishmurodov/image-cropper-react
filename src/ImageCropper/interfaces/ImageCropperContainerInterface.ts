import React from "react";

interface ImageCropperContainerInterface {
    imageSizes: {
        width: number,
        height: number
    },
    mounted: boolean,
    bottomItems?: React.ReactNode
}

export default ImageCropperContainerInterface