import React, {useEffect, useRef, useState} from "react"
import "./styles/ImageContainer.css"
import ImageCropperImageContainerInterface from "../../interfaces/ImageCropperImageContainerInterface";
import Cropper from "react-cropper";


const ImageContainer: React.FunctionComponent<ImageCropperImageContainerInterface> = (props) => {

    const ref = useRef(null);

    const [cropper, setCropper] = useState<Cropper>();
    const [sizes, setSizes] = useState<{width: number, height: number}>(props.imageSizes)
    const [image, setImage] = useState<string>(props.image);
    const [reloadImage, setReloadImage] = useState<boolean>(false)


    useEffect(() => {
        if (cropper) {
            cropper.setAspectRatio(props.ratio)
        }
    }, [props.ratio])

    useEffect(() => {
        if (props.toggleAngle && cropper) {
            cropper.rotate(-props.angle)
        }
    }, [props.toggleAngle])

    useEffect(() => {
        if (props.toggleClose && cropper) {
            const croppedCanvas = cropper.getCroppedCanvas()
            croppedCanvas.toBlob((blob) => {
                props.onClose({
                    event: "save",
                    data: {
                        blob: blob,
                        base64: croppedCanvas.toDataURL()
                    }
                })
            })

        }
    }, [props.toggleClose])

    useEffect(() => {
        setSizes(props.imageSizes)
    }, [props.imageSizes])

    useEffect(() => {
        setImage(props.image)
        setReloadImage(true)
        setTimeout(() => {
            setReloadImage(false)
        })
    }, [props.image])


    return <div className="ImageCropper-Image-Container">
        <div
            className="ImageCropper-Image-Container__inner"
            style={ !props.freezeActions ? {
                width: sizes.width,
                height: sizes.height,
            } : {}}>
            {
                props.freezeActions
                    ? (props.freezeActionsInner ?? "")
                    : (
                        reloadImage ? "" : <Cropper
                            src={image}
                            style={{
                                width: sizes.width,
                                height: sizes.height,
                            }}
                            guides={false}
                            center={false}
                            zoomable={false}
                            aspectRatio={props.ratio}
                            onInitialized={(instance) => {
                                setCropper(instance)
                            }}
                            viewMode={1}
                            responsive={true}
                            ref={ref}
                        />
                    )
            }
        </div>
    </div>

}

export default ImageContainer