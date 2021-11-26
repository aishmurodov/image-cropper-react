import React, {useEffect, useState} from "react"
import Container from "./components/Container";
import "./themes/default.css"

import ImageCropperInterface from "./interfaces/ImageCropperInterface";
import ImageCropperLanguagesInterface from "./interfaces/ImageCropperLanguagesInterface";
import ru from "./langs/ru"
import Heading from "./components/Heading";
import Closer from "./components/Closer";
import ImageContainer from "./components/ImageContainer";
import AspectChanger from "./components/AspectChanger";
import DefaultRotateAngle from "./constants/DefaultRotateAngle";
import ToggleActionsDelay from "./constants/ToggleActionsDelay";
import Ratios from "./constants/Ratios";


const ImageCropper: React.FunctionComponent<ImageCropperInterface> = (props) => {
    const [language, setLanguage] = useState<ImageCropperLanguagesInterface>(props.language ?? ru)
    const [enabled, setEnabled] = useState<boolean>(props.enabled)
    const [toggleEnabledWithData, setToggleEnabledWithData] = useState<boolean>(false)
    const [imageSize, setImageSize] = useState<{width: number, height: number}|null>(null)
    const [imageRatio, setImageRatio] = useState<number>(props.mode === "avatar" ? 1 : (props.ratio ?? 16/9))
    const [toggleRotation, setToggleRotation] = useState<boolean>(false)
    const [image, setImage] = useState<string>(props.image)
    const [mounted, setMounted] = useState(false)

    const changeImageSize = (imgSource: string) => {
        let img = new Image()
        img.src = imgSource

        img.onload = () => {
            const div = document.createElement("div")
            div.innerHTML = `<div class="ImageCropper-Image-Checker" data-orientation="${img.width > img.height ? "horizontal" : "vertical"}"></div>`
            div.querySelector(".ImageCropper-Image-Checker")?.append(img)
            document.body.append(div)
            let createdImage = (div.querySelector(".ImageCropper-Image-Checker img") as HTMLImageElement)

            setImageSize({
                width: createdImage.width,
                height: createdImage.height
            })
            div.remove()
        }
    }

    useEffect(() => {
        if (props.language) {
            setLanguage(props.language)
        }
    }, [props.language])

    useEffect(() => {
        setEnabled(props.enabled)
    }, [props.enabled])

    useEffect(() => {
        if (props.mode === "avatar") {
            setImageRatio(1)
        }
        else if (props.ratio) {
            setImageRatio(props.ratio)
        }
    }, [props.mode, props.ratio])

    useEffect(() => {
        setImage(props.image)
    }, [props.image])

    useEffect(() => {
        changeImageSize(image)
    }, [image])

    useEffect(() => {
        setTimeout(() => {
            setMounted(true)
        }, 100)
        return () => {
            setMounted(false)
        };
    }, [enabled])

    if (!enabled || !imageSize) return <></>

    return <Container
        mounted={mounted}
        imageSizes={imageSize}
        bottomItems={<>

            <AspectChanger
                mode={props.mode}
                freezeActions={props.freezeActions}
                initedRatio={imageRatio}
                onRotationClick={() => {
                    if (!props.freezeActions) {
                        setToggleRotation(true)
                        setTimeout(() => {setToggleRotation(false)})
                    }
                }}
                ratios={Ratios}
                onChangeRatio={(newRatio) => {
                    if (!props.freezeActions) {
                        setImageRatio(newRatio)
                    }
                }}
                onImageChange={(e) => {
                    if (!props.freezeActions) {
                        e.preventDefault();

                        if (!e.target.files) return

                        const files = e.target.files,
                            reader = new FileReader()

                        reader.onload = () => {
                            setImage(reader.result as string);
                        }

                        reader.readAsDataURL(files[0])
                    }
                }}
                onSaveClick={() => {
                    if (!props.freezeActions) {
                        setToggleEnabledWithData(true)
                        setTimeout(() => {
                            setToggleEnabledWithData(false)
                        }, ToggleActionsDelay)
                    }
                }}
            />

        </>}
    >
        <Closer onClick={() => {
            if (!props.freezeActions) {
                props.onClose({event: "exit"})
            }
        }} />
        <Heading text={language.heading} />
        <ImageContainer
            onClose={props.onClose}
            mode={props.mode}
            enabled={enabled}
            image={image}
            ratio={imageRatio}
            imageSizes={imageSize}
            angle={props.angle ?? DefaultRotateAngle}
            toggleAngle={toggleRotation}
            toggleClose={toggleEnabledWithData}
            freezeActions={props.freezeActions}
            freezeActionsInner={props.freezeActionsInner}
        />
    </Container>
}

export default ImageCropper