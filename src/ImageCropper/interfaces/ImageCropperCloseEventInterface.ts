
export type ImageCropperCloseEventType = "save"|"exit"

export interface ImageCropperCloseSaveEventData {
    blob: Blob|null,
    base64: string
}

interface ImageCropperCloseEventInterface {
    event: ImageCropperCloseEventType,
    data?: ImageCropperCloseSaveEventData
}

export default ImageCropperCloseEventInterface