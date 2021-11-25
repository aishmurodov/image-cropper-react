import React, {useState} from 'react';
import ImageCropper from "./ImageCropper";

import horizontalImage from "./horizontal-image.jpg"
import avatarImage from "./avatar.jpeg"
import Loader from "./ImageCropper/components/Loader/Loader";
import {ImageCropperMode} from "./ImageCropper/interfaces/ImageCropperInterface";


const App: React.FunctionComponent = () => {

    const [show, setShow] = useState<boolean>(false)
    const [saving, setSaving] = useState<boolean>(false)
    const [percent, setPercent] = useState<number>(0)
    const [mode, setMode] = useState<ImageCropperMode>("default")

    return (
        <div>
            <div style={{padding: 20, display: "flex", gap: 10}}>
                <button onClick={() => { setMode("default"); setShow(true) }}>Обрезать фотографию</button>
                <button onClick={() => { setMode("avatar"); setShow(true) }}>Обрезать аватарку</button>
            </div>
            {show ? <ImageCropper
                image={mode === "avatar" ? avatarImage : horizontalImage}
                onClose={(e) => {
                    console.log(e)
                    if (e.event === "exit") {
                        return setShow(false)
                    }
                    setSaving(true)
                    let i = 0
                    let int__ = setInterval(() => {
                        if (i >= 100) {
                            setPercent(100)
                            clearInterval(int__)
                            setSaving(false)

                            const iframe = "<img alt='' style='box-shadow: 0 4px 20px 0 rgb(255 255 255 / 20%); max-width: 80vw; height: auto' src='" + e.data?.base64 + "' />"
                            const x = window.open()

                            if (x) {
                                x.document.open()
                                x.document.write(iframe)
                                x.document.body.style.margin = "0px"
                                x.document.body.style.display = "flex"
                                x.document.body.style.justifyContent = "center"
                                x.document.body.style.alignItems = "center"
                                x.document.body.style.background = "#0e0e0e"
                                x.document.close()
                            }
                            setShow(false)
                            return setPercent(0)
                        }
                        setPercent(i++)
                    }, 100)
                }}
                enabled={show}
                freezeActions={saving}
                freezeActionsInner={<Loader percent={percent} />}
                mode={mode}
            /> : ""}
        </div>
    )
}
export default App