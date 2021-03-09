import BaseElement from "./BaseElement";
import VideoIcon from "../../../svgs/widescreen.svg";
import { advancedTabControllers } from "../../decorators/register-controllers";
import {
  CONTROLLER_TEXT,
  CONTROLLER_SWITCHER,
  CONTROLLER_NUMBER,
  CONTROLLER_DIMENSIONS,
  CONTROLLER_SLIDER,
  CONTROLLER_QUERY,
  CONTROLLER_EVENT_HANDLER,
  TAB_CONTENT,
  TAB_STYLE,
  CONTROLLER_MEDIA
} from "../modules/ControllersManager";

class Video extends BaseElement {
  static getName() {
    return "video";
  }
  static getTitle() {
    return "Video";
  }
  static getIconComponent() {
    return VideoIcon;
  }
  static getType() {
    return "widget";
  }
  _registerControls() {
    if (this.controllersRegistered) {
      return;
    }

    this.startControlSection("content_section", {
      tab: TAB_CONTENT,
      label: "Content",
    });

    this.addControl('video_file', {
      type: CONTROLLER_MEDIA,
      label: 'Choose Video',
    });

    this.addControl('is_youtube', {
      type: CONTROLLER_SWITCHER,
      label: 'Youtube Video',
    });

    this.addControl('youtube_id', {
      type: CONTROLLER_TEXT,
      label: 'Youtube Video ID',
      conditions: { 'is_youtube': true },
    });

    this.addControl('content_path', {
      type: CONTROLLER_TEXT,
      dynamic: false,
      responsive: false,
      label: 'Path',
    });

    this.addControl('video_width', {
      type: CONTROLLER_SLIDER,
      label: 'Width',
      units: ['px', '%', 'vh', 'vw'],
      max: 1000,
      min: 0,
      rules: {
        '{{ELEMENT}} .altrp-video{{STATE}}': 'width: {{SIZE}}{{UNIT}};',
      },
    });

    this.addControl('video_height', {
      type: CONTROLLER_SLIDER,
      label: 'Height',
      units: ['px', '%', 'vh', 'vw'],
      max: 1000,
      min: 0,
      rules: {
        '{{ELEMENT}} .altrp-video{{STATE}}': 'height: {{SIZE}}{{UNIT}};',
      },
    });

    advancedTabControllers(this);
  }
}
export default Video;
