import React, {cloneElement, Component} from 'react';
import {renderAsset} from "../../../../../front-app/src/js/helpers";

class AltrpImage extends Component {
  render() {
    let media = { ...this.props.image };

    if(this.props.default) {
      if(Object.keys(media).length === 0) {
        media = this.props.default;
      }
    } else {
      if(pro)
        media.url = media.url || '/img/nullImage.png';
        media.name = media.name || 'null';
        media.assetType = media.assetType || undefined;
    }

    console.log(this.props);
    let image = renderAsset(media);

    return cloneElement(image, {
      className: this.props.className,
      id: this.props.id || null,
    })
  }
}

export default AltrpImage;
