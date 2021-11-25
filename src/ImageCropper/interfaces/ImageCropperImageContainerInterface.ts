import ImageCropperInterface from "./ImageCropperInterface";

interface ImageCropperImageContainerInterface extends ImageCropperInterface {
  imageSizes: {
    width: number,
    height: number
  },
  ratio: number,
  toggleAngle: boolean,
  angle: number,
  toggleClose: boolean,
}

export default ImageCropperImageContainerInterface