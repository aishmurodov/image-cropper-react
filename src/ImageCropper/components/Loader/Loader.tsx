import React, {useState} from 'react';
import ImageCropperLoaderInterface from "../../interfaces/ImageCropperLoaderInterface";
import "./styles/Loader.css"
import ru from "../../langs/ru";

const Loader: React.FunctionComponent<ImageCropperLoaderInterface> = (props) => {
  const [texts] = useState<{title: string, description: string}>(props.text ?? {title: ru.loading, description: ru.loading_description})

  return <div className="ImageCropper-Loader">
    <div className="ImageCropper-Loader__inner">
      <div className="ImageCropper-Loader__title">
        {texts.title}
      </div>
      <div className="ImageCropper-Loader__line">
        <div className="ImageCropper-Loader__line__inner" style={{width: props.percent + "%"}} />
      </div>
      <div className="ImageCropper-Loader__description">
        {texts.description}
      </div>
    </div>
  </div>
}

export default Loader