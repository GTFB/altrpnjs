import BaseElement from "./BaseElement";
import WidgetIcon from "../../../svgs/accordion.svg";
import {
  CONTROLLER_TEXTAREA,
  CONTROLLER_COLOR,
  CONTROLLER_SELECT,
  CONTROLLER_TEXT,
  CONTROLLER_TYPOGRAPHIC,
  CONTROLLER_SHADOW,
  TAB_CONTENT,
  TAB_STYLE,
  CONTROLLER_NUMBER,
  CONTROLLER_DIMENSIONS,
  CONTROLLER_SLIDER,
  CONTROLLER_LINK,
  CONTROLLER_TRANSFORM,
  CONTROLLER_CHOOSE, CONTROLLER_REPEATER, CONTROLLER_WYSIWYG, CONTROLLER_MEDIA, CONTROLLER_SWITCHER,
} from "../modules/ControllersManager";
import Repeater from "../Repeater";
import { advancedTabControllers } from "../../decorators/register-controllers";

class Accordion extends BaseElement {
  static getName() {
    return "accordion";
  }
  static getTitle() {
    return "Accordion";
  }
  static getIconComponent() {
    return WidgetIcon;
  }
  static getType() {
    return "widget";
  }
  _registerControls() {
    if (this.controllersRegistered) {
      return;
    }

    this.startControlSection("accordion_content", {
      tab: TAB_CONTENT,
      label: "Accordion",
    });

    let repeater = new Repeater();

    repeater.addControl('title_repeater', {
      type: CONTROLLER_TEXT,
      label: 'Title',
    });

    repeater.addControl("content_select_repeater", {
      type: CONTROLLER_SELECT,
      label: "Icon",
      options: [
        {
          value: "custom",
          label: "custom"
        },
        {
          value: "template",
          label: "template"
        },
      ],
    });

    repeater.addControl("wysiwyg_repeater", {
      type: CONTROLLER_TEXTAREA,
      label: "Text",
      default: "I Am Advanced Text"
    });

    this.addControl('repeater_meta_data_section', {
      label: 'Accordion items',
      type: CONTROLLER_REPEATER,
      fields: repeater.getControls(),
      default: [
        {
          title_repeater: "Title #1",
          wysiwyg_repeater: "Content #1"
        },
        {
          title_repeater: "Title #2",
          wysiwyg_repeater: "Content #2"
        },
        {
          title_repeater: "Title #3",
          wysiwyg_repeater: "Content #3"
        }
      ]
    });

    this.addControl("title_html_tag_accordion_content", {
      type: CONTROLLER_SELECT,
      label: "Title HTML tag",
      default: "div",
      options: [
        {
          value: "h1",
          label: "h1"
        },
        {
          value: "h2",
          label: "h2"
        },
        {
          value: "h3",
          label: "h3"
        },
        {
          value: "h4",
          label: "h4"
        },
        {
          value: "h5",
          label: "h5"
        },
        {
          value: "h6",
          label: "h6"
        },
        {
          value: "span",
          label: "span"
        },
        {
          value: "div",
          label: "div"
        },
        {
          value: "p",
          label: "p"
        },

      ],
    });

    this.addControl('icon_accordion_content', {
      type: CONTROLLER_MEDIA,
      label: 'Icon',
    });

    this.addControl('active_icon_accordion_content', {
      type: CONTROLLER_MEDIA,
      label: 'Active icon',
    });

    this.endControlSection();

    this.startControlSection("additional_content", {
      tab: TAB_CONTENT,
      label: "Additional",
    });

    this.addControl('multiple_additional_content', {
      type: CONTROLLER_SWITCHER,
      default: false,
      label: 'Multiple open',
    });

    this.addControl("active_item_additional_content", {
      type: CONTROLLER_NUMBER,
      label: "Acitve item no",
    });

    this.endControlSection();

    this.startControlSection("item_style", {
      tab: TAB_STYLE,
      label: "Item",
    });

    this.addControl('alignment_item_style', {
      type: CONTROLLER_CHOOSE,
      label: 'Alignment',
      options: [
        {
          icon: 'left',
          value: 'left',
        },
        {
          icon: 'center',
          value: 'center',
        },
        {
          icon: 'right',
          value: 'right',
        },
      ],
    });

    this.addControl('spacing_item_style', {
      type: CONTROLLER_SLIDER,
      label: 'Item spacing',
      default: {
        unit: 'px',
      },
      max: 100,
      min: 0,
    });

    this.endControlSection();

    this.startControlSection("title_style", {
      tab: TAB_STYLE,
      label: "Title",
    });

    this.addControl('background_color_title_style', {
      type: CONTROLLER_COLOR,
      label: 'Background color',
      default: {
        color: "",
        colorPickedHex: "",
      },
    });

    this.addControl('color_title_style', {
      type: CONTROLLER_COLOR,
      label: 'Color',
      default: {
        color: "",
        colorPickedHex: "",
      },
    }
    );

    this.addControl('box_shadow_title_style', {
      type: CONTROLLER_SHADOW,
      label: 'Box shadow',
      default: {
      },
      presetColors: [
        '#eaeaea',
        '#9c18a8'
      ],
    }
    );

    this.addControl('padding_title_style', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Padding',
      default: {
        unit: 'px',
        bind: true
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    });

    this.addControl('border_type_title_style', {
      type: CONTROLLER_SELECT,
      label: 'Border Type',
      options: [
        {
          'value': 'none',
          'label': 'None',
        },
        {
          'value': 'solid',
          'label': 'Solid',
        },
        {
          'value': 'double',
          'label': 'Double',
        },
        {
          'value': 'dotted',
          'label': 'Dotted',
        },
        {
          'value': 'dashed',
          'label': 'Dashed',
        },
        {
          'value': 'groove',
          'label': 'Groove',
        },
      ],
    }
    );

    this.addControl(
      'border_width_title_style', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Border Width',
      default: {
        bind: true
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    }
    );

    this.addControl('border_color_title_style', {
      type: CONTROLLER_COLOR,
      label: 'Border Color',
      default: {
        color: "",
        colorPickedHex: "",
      },
    }
    );

    this.addControl('border_radius_title_style', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Border radius',
      default: {
        unit: 'px',
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      max: 100,
      min: 0,
    });

    this.addControl('font_typographic_title_style', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'Typographic',
    }
    );

    this.endControlSection();

    this.startControlSection("icon_style", {
      tab: TAB_STYLE,
      label: "Icon",
    });

    this.addControl('alignment_icon_style', {
      type: CONTROLLER_CHOOSE,
      label: 'Alignment',
      options: [
        {
          icon: 'left',
          value: 'row-reverse',
        },
        {
          icon: 'right',
          value: 'row',
        },
      ],
    });

    this.addControl('color_icon_style', {
      type: CONTROLLER_COLOR,
      label: 'Color',
      default: {
        color: "",
        colorPickedHex: "",
      },
    }
    );

    this.addControl('spacing_icon_style', {
      type: CONTROLLER_SLIDER,
      label: 'Spacing',
      default: {
        unit: 'px',
      },
      max: 100,
      min: 0,
    });

    this.endControlSection();

    this.startControlSection("content_style", {
      tab: TAB_STYLE,
      label: "Content",
    });

    this.addControl('background_color_content_style', {
      type: CONTROLLER_COLOR,
      label: 'Background color',
      default: {
        color: "",
        colorPickedHex: "",
      },
    }
    );

    this.addControl('color_content_style', {
      type: CONTROLLER_COLOR,
      label: 'Color',
      default: {
        color: "",
        colorPickedHex: "",
      },
    }
    );

    this.addControl('border_radius_content_style', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Border radius',
      default: {
        unit: 'px',
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      max: 100,
      min: 0,
    });

    this.addControl('padding_content_style', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Padding',
      default: {
        unit: 'px',
        bind: true
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    });

    this.addControl('spacing_content_style', {
      type: CONTROLLER_SLIDER,
      label: 'Spacing',
      default: {
        unit: 'px',
      },
      max: 100,
      min: 0,
    });

    this.addControl('typographic_content_style', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'Typographic',
    }
    );

    this.endControlSection();

    advancedTabControllers(this);
  }
}

export default Accordion;
