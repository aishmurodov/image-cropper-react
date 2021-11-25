import React, {useState} from "react";
import "./styles/AspectChanger.css"
import rotateIcon from "./icons/rotate.png"
import ImageCropperAspectChangerInterface from "../../interfaces/ImageCropperAspectChangerInterface";

const AspectChanger: React.FunctionComponent<ImageCropperAspectChangerInterface> = (props) => {
    const [lastRotation, setLastRotation] = useState<number>(Date.now() / 1000 | 0)

    return <div className="ImageCropper-AspectChanger">
        <button
            className="ImageCropper-AspectChanger__button"
            data-bordered="1"
            onClick={() => {
                const now = Date.now() / 1000 | 0
                if (now - lastRotation >= 1) {
                    props.onRotationClick()
                    setLastRotation(now)
                }
            }}>
            <span className="ImageCropper-AspectChanger__button__inner">
                <img src={rotateIcon} alt=""/>
            </span>
        </button>
        { props.mode !== "avatar" ? <div className="ImageCropper-AspectChanger__ratios">
            {
                props.ratios.map((ratio) => {
                    return <button
                        key={ratio.ratio}
                        className={`ImageCropper-AspectChanger__button ${props.initedRatio === ratio.ratio ? 'active' : ""}`}
                        onClick={() => {props.onChangeRatio(ratio.ratio)}}
                    >
                        <span className="ImageCropper-AspectChanger__button__inner">
                            {ratio.title}
                        </span>
                    </button>
                })
            }
        </div> : "" }
        <div className="ImageCropper-AspectChanger__right">
            <label
                className="ImageCropper-AspectChanger__button" 
                data-save="1" 
                data-colored="0">
                {!props.freezeActions ? <input
                    type="file"
                    onChange={props.onImageChange} /> : ""}
                <span
                    className="ImageCropper-AspectChanger__button__icon">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="sync"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <path
                            fill="currentColor"
                              d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z" />
                        </svg>
                </span>
                <span
                    className="ImageCropper-AspectChanger__button__inner">
                    Заменить картинку
                </span>
            </label>
            <button
                className="ImageCropper-AspectChanger__button"
                data-save="1"
                data-bordered="1"
                onClick={props.onSaveClick}>
                <span
                    className="ImageCropper-AspectChanger__button__inner">
                    Сохранить
                </span>
            </button>
        </div>
    </div>

}

export default AspectChanger