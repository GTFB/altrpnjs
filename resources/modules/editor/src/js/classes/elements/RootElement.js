  import BaseElement from "./BaseElement";
import {
  CONTROLLER_DIMENSIONS,
  CONTROLLER_NUMBER,
  CONTROLLER_SWITCHER,
  CONTROLLER_TEXT,
  CONTROLLER_TEXTAREA,
  CONTROLLER_SELECT,
  CONTROLLER_CHOOSE,
  CONTROLLER_SLIDER,
  CONTROLLER_SELECT2,
  CONTROLLER_LINK,
  CONTROLLER_COLOR,
  CONTROLLER_BUTTON,
  CONTROLLER_HEADING,
  CONTROLLER_CSSEDITOR,
  CONTROLLER_TYPOGRAPHIC,
  CONTROLLER_FILTERS,
  CONTROLLER_GRADIENT,
  TAB_ADVANCED,
  TAB_CONTENT,
  TAB_STYLE,
  CONTROLLER_SHADOW,
  CONTROLLER_MEDIA, CONTROLLER_REPEATER,
} from "../modules/ControllersManager";
  import Repeater from "../Repeater";
  import SaveImportModule from "../modules/SaveImportModule";

class RootElement extends BaseElement {
  constructor() {
    super();
  }

  static getName() {
    return 'root-element';
  }

  static getTitle() {
    return 'Page';
  }

  static getType() {
    return 'root-element';
  }

  _registerControls() {
    if (this.controllersRegistered) {
      return
    }
/*
    this.addControl( 'test_repeater', {
      label: 'test Items',
      type: CONTROLLER_REPEATER,
      fields: repeater.getControls(),
      default : [{
        text: 'Item 1',
      }, {
        text: 'Item 2',
      },],
  } );
*/

    this.startControlSection('preview_section',{
      label: 'Preview Settings',
    });

    this.addControl('choose_page', {
      type: CONTROLLER_SELECT2,
      label: 'Choose Page',
      options_resource: '/admin/ajax/pages_options',
    });

    this.addControl('preview_heading', {
      label: 'Model Settings',
      type: CONTROLLER_HEADING
    });

    this.addControl('preview_model', {
      type: CONTROLLER_SELECT,
      resource: '/admin/ajax/models_options?with_names=1&not_plural=1',
      nullable: true,
    });
    this.addControl('preview_model_instance', {
      type: CONTROLLER_SELECT2,
      options_resource: '/ajax/models/{{preview_model}}_options',
      conditions:{
        'preview_model!': [null, '', undefined],
      },
      nullable: true,
    });

    this.endControlSection();

    this.startControlSection('content_section', {
      tab: TAB_STYLE,
      label: 'Page Styles',
    });

    this.addControl("section_style_background_color", {
      type: CONTROLLER_COLOR,
      label: "Background color",
      default: {
        color: "",
        colorPickedHex: "",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        "body": "background-color: {{COLOR}};"
      }
    });

    this.addControl('background_image', {
      type: CONTROLLER_MEDIA,
      label: 'Background Image',
      default: { url: "" },
      rules: {
        "body": "background-image: url({{URL}});"
      }
    });

    this.addControl('background_position', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "top left",
          label: "top left"
        },
        {
          value: "top",
          label: "top"
        },
        {
          value: "top right",
          label: "top right"
        },
        {
          value: "right",
          label: "right"
        },
        {
          value: "bottom right",
          label: "bottom right"
        },
        {
          value: "bottom",
          label: "bottom"
        },
        {
          value: "bottom left",
          label: "bottom left"
        },
        {
          value: "left",
          label: "left"
        },
        {
          value: "center",
          label: "center"
        }
      ],
      label: 'Background Position',
      default: 'top left',
      rules: {
        "body": "background-position: {{VALUE}};"
      }
    });

    this.addControl('background_attachment', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "scroll",
          label: "scroll"
        },
        {
          value: "fixed",
          label: "fixed"
        },
        {
          value: "local",
          label: "local"
        }
      ],
      label: 'Background Attachment',
      default: 'scroll',
      rules: {
        "body": "background-attachment: {{VALUE}};"
      }
    });

    this.addControl('background_repeat', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "repeat",
          label: "repeat"
        },
        {
          value: "repeat-x",
          label: "repeat-x"
        },
        {
          value: "repeat-y",
          label: "repeat-y"
        },
        {
          value: "space",
          label: "space"
        },
        {
          value: "round",
          label: "round"
        },
        {
          value: "no-repeat",
          label: "no-repeat"
        }
      ],
      label: 'Background Repeat',
      default: 'repeat',
      rules: {
        "body": "background-repeat: {{VALUE}};"
      }
    });

    this.addControl("background_image_width", {
      type: CONTROLLER_SLIDER,
      label: 'Width',
      default: {
        size: 100,
        unit: 'px',
      },
      conditions: {
        'background_size': [''],
      },
      units: [
        'px',
        '%',
        'vw',
      ],
      max: 1000,
      min: 0,
      rules: {
        "body": "background-size: {{SIZE}}{{UNIT}};"
      }
    });

    this.addControl('background_size', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "unset",
          label: "unset"
        },
        {
          value: "cover",
          label: "cover"
        },
        {
          value: "contain",
          label: "contain"
        },
        {
          value: "",
          label: "set width"
        },
      ],
      label: 'Background Size',
      default: 'unset',
      rules: {
        "body": "background-size: {{VALUE}};"
      }
    });

    this.addControl('gradient', {
      type: CONTROLLER_GRADIENT,
      label: 'Gradient',
      default: {
        isWithGradient: false,
        firstColor: "rgba(97,206,112,1)",
        firstPoint: '0',
        secondColor: "rgba(242,41,91,1)",
        secondPoint: "100",
        angle: "0",
        value: ""
      },
      rules: {
        "body{{STATE}}": "background-image: {{VALUE}}"
      }
    });

    this.addControl('position_padding', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Padding',
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: 'px',
        bind: true
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        'body': [
          'padding-top: {{TOP}}{{UNIT}};',
          'padding-right: {{RIGHT}}{{UNIT}};',
          'padding-bottom: {{BOTTOM}}{{UNIT}};',
          'padding-left: {{LEFT}}{{UNIT}};'
        ]
      },
    });

    this.endControlSection();

    this.startControlSection('heading_defaults', {
      tab: TAB_STYLE,
      label: 'Heading Defaults',
    });

    this.addControl("heading_h1_color", {
      type: CONTROLLER_COLOR,
      label: "H1 Color",
      default: {
        color: "",
        colorPickedHex: "#000",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        "h1.altrp-heading{{STATE}}": "color: {{COLOR}};"
      }
    });

    this.addControl("heading_h2_color", {
      type: CONTROLLER_COLOR,
      label: "H2 Color",
      default: {
        color: "",
        colorPickedHex: "#000",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        "h2.altrp-heading{{STATE}}": "color: {{COLOR}};"
      }
    });

    this.addControl("heading_h3_color", {
      type: CONTROLLER_COLOR,
      label: "H3 Color",
      default: {
        color: "",
        colorPickedHex: "#000",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        "h3.altrp-heading{{STATE}}": "color: {{COLOR}};"
      }
    });

    this.addControl("heading_h4_color", {
      type: CONTROLLER_COLOR,
      label: "H4 Color",
      default: {
        color: "",
        colorPickedHex: "#000",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        "h4.altrp-heading{{STATE}}": "color: {{COLOR}};"
      }
    });

    this.addControl("heading_h5_color", {
      type: CONTROLLER_COLOR,
      label: "H5 Color",
      default: {
        color: "",
        colorPickedHex: "#000",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        "h5.altrp-heading{{STATE}}": "color: {{COLOR}};"
      }
    });

    this.addControl("heading_h6_color", {
      type: CONTROLLER_COLOR,
      label: "H6 Color",
      default: {
        color: "",
        colorPickedHex: "#000",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        "h6.altrp-heading{{STATE}}": "color: {{COLOR}};"
      }
    });

    this.addControl("heading_p_color", {
      type: CONTROLLER_COLOR,
      label: "P Color",
      default: {
        color: "",
        colorPickedHex: "#000",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        "p.altrp-heading{{STATE}}": "color: {{COLOR}};"
      }
    });

    this.addControl('heading_h1_typographic', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'H1 Typographic',
      rules: {
        'h1.altrp-heading{{STATE}}': [
          'font-family: "{{FAMILY}}", sans-sefir;',
          'font-size: {{SIZE}}px;',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    });

    this.addControl('heading_h2_typographic', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'H2 Typographic',

      rules: {
        'h2.altrp-heading{{STATE}}': [
          'font-family: "{{FAMILY}}", sans-sefir;',
          'font-size: {{SIZE}}px;',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    });
    this.addControl('heading_h3_typographic', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'H3 Typographic',

      rules: {
        'h3.altrp-heading{{STATE}}': [
          'font-family: "{{FAMILY}}", sans-sefir;',
          'font-size: {{SIZE}}px;',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    });
    this.addControl('heading_h4_typographic', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'H4 Typographic',

      rules: {
        'h4.altrp-heading{{STATE}}': [
          'font-family: "{{FAMILY}}", sans-sefir;',
          'font-size: {{SIZE}}px;',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    });
    this.addControl('heading_h5_typographic', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'H5 Typographic',

      rules: {
        'h5.altrp-heading{{STATE}}': [
          'font-family: "{{FAMILY}}", sans-sefir;',
          'font-size: {{SIZE}}px;',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    });
    this.addControl('heading_h6_typographic', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'H6 Typographic',

      rules: {
        'h6.altrp-heading{{STATE}}': [
          'font-family: "{{FAMILY}}", sans-sefir;',
          'font-size: {{SIZE}}px;',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    });
    this.addControl('heading_p_typographic', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'P Typographic',

      rules: {
        'p.altrp-heading{{STATE}}': [
          'font-family: "{{FAMILY}}", sans-sefir;',
          'font-size: {{SIZE}}px;',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    });

    this.addControl('heading_default_margin', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Margin',
      default: {
        top: 5,
        right: 0,
        bottom: 5,
        left: 0,
        unit: 'px'
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        '.altrp-heading{{STATE}}': [
          'margin-top: {{TOP}}{{UNIT}};',
          'margin-right: {{RIGHT}}{{UNIT}};',
          'margin-bottom: {{BOTTOM}}{{UNIT}};',
          'margin-left: {{LEFT}}{{UNIT}};'
        ]
      },
    });

    this.addControl("heading_default_padding", {
      type: CONTROLLER_DIMENSIONS,
      label: "Padding",
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: "px"
      },
      units: ["px", "%", "vh"],
      rules: {
        ".altrp-heading{{STATE}}": [
          "padding-top: {{TOP}}{{UNIT}};",
          "padding-right: {{RIGHT}}{{UNIT}};",
          "padding-bottom: {{BOTTOM}}{{UNIT}};",
          "padding-left: {{LEFT}}{{UNIT}};"
        ]
      }
    });

    this.addControl("heading_default_background_color", {
      type: CONTROLLER_COLOR,
      label: "Background color",
      default: {
        color: "",
        colorPickedHex: "",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        ".altrp-heading{{STATE}}": "background-color: {{COLOR}};"
      }
    });

    this.addControl("heading_default_opacity", {
      type: CONTROLLER_SLIDER,
      label: "Opacity",
      default: {
        size: 1
      },
      max: 1,
      min: 0,
      step: 0.01,
      rules: {
        ".altrp-heading{{STATE}}": "opacity: {{SIZE}}"
      }
    });

    this.addControl('heading_default_background_image', {
      type: CONTROLLER_MEDIA,
      label: 'Background Image',
      default: { url: "" },
      rules: {
        ".altrp-heading{{STATE}}": "background-image: url({{URL}});"
      }
    });

    this.addControl('heading_default_background_position', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "top left",
          label: "top left"
        },
        {
          value: "top",
          label: "top"
        },
        {
          value: "top right",
          label: "top right"
        },
        {
          value: "right",
          label: "right"
        },
        {
          value: "bottom right",
          label: "bottom right"
        },
        {
          value: "bottom",
          label: "bottom"
        },
        {
          value: "bottom left",
          label: "bottom left"
        },
        {
          value: "left",
          label: "left"
        },
        {
          value: "center",
          label: "center"
        }
      ],
      label: 'Background Position',
      default: 'top left',
      rules: {
        ".altrp-heading{{STATE}}": "background-position: {{VALUE}};"
      }
    });

    this.addControl('heading_default_background_attachment', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "scroll",
          label: "scroll"
        },
        {
          value: "fixed",
          label: "fixed"
        },
        {
          value: "local",
          label: "local"
        }
      ],
      label: 'Background Attachment',
      default: 'scroll',
      rules: {
        ".altrp-heading{{STATE}}": "background-attachment: {{VALUE}};"
      }
    });

    this.addControl('heading_default_background_repeat', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "repeat",
          label: "repeat"
        },
        {
          value: "repeat-x",
          label: "repeat-x"
        },
        {
          value: "repeat-y",
          label: "repeat-y"
        },
        {
          value: "space",
          label: "space"
        },
        {
          value: "round",
          label: "round"
        },
        {
          value: "no-repeat",
          label: "no-repeat"
        }
      ],
      label: 'Background Repeat',
      default: 'repeat',
      rules: {
        ".altrp-heading{{STATE}}": "background-repeat: {{VALUE}};"
      }
    });

    this.addControl("heading_default_background_image_width", {
      type: CONTROLLER_SLIDER,
      label: 'Width',
      default: {
        size: 100,
        unit: 'px',
      },
      conditions: {
        'background_size': [''],
      },
      units: [
        'px',
        '%',
        'vw',
      ],
      max: 1000,
      min: 0,
      rules: {
        ".altrp-heading{{STATE}}": "background-size: {{SIZE}}{{UNIT}};"
      }
    });

    this.addControl('heading_default_background_size', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "unset",
          label: "unset"
        },
        {
          value: "cover",
          label: "cover"
        },
        {
          value: "contain",
          label: "contain"
        },
        {
          value: "",
          label: "set width"
        },
      ],
      label: 'Background Size',
      default: 'unset',
      rules: {
        ".altrp-heading{{STATE}}": "background-size: {{VALUE}};"
      }
    });

    this.endControlSection();

    this.startControlSection('button_defaults', {
      tab: TAB_STYLE,
      label: 'Button Defaults',
    });

    this.addControl('button_padding', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Padding',
      default: {
        top: 20,
        right: 25,
        bottom: 20,
        left: 25,
        unit: 'px',
        bind: true
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        '.altrp-btn{{STATE}}': [
          'padding-top: {{TOP}}{{UNIT}};',
          'padding-right: {{RIGHT}}{{UNIT}};',
          'padding-bottom: {{BOTTOM}}{{UNIT}};',
          'padding-left: {{LEFT}}{{UNIT}};'
        ]
      },
    });

    this.addControl('button_typographic', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'Typographic',
      default: {
        lineHeight: 1,
        spacing: 0,
        size: 16,
        weight: "normal",
        family: "Open Sans",
        decoration: ""
      },
      rules: {
        '.altrp-btn{{STATE}}': [
          'font-size: {{SIZE}}px;',
          'font-family: {{FAMILY}}',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    });

    this.addControl('button_font_color', {
      type: CONTROLLER_COLOR,
      label: 'Color',
      default: {
        color: "rgb(255,255,255)",
        colorPickedHex: "#FFF",
      },
      rules: {
        '.altrp-btn{{STATE}}': 'color: {{COLOR}};',
      },
    });

    this.addControl('button_border_type', {
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
      rules: {
        '.altrp-btn{{STATE}}': 'border-style: {{VALUE}};',
      },
    }
    );

    this.addControl('button_border_width', {
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
      rules: {
        '.altrp-btn{{STATE}}': 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
      },
    }
    );

    this.addControl('button_border_color', {
      type: CONTROLLER_COLOR,
      label: 'Border Color',
      default: {
        color: "rgb(50,168,82)",
        colorPickedHex: "#32a852",
      },
      rules: {
        '.altrp-btn{{STATE}}': 'border-color: {{COLOR}};',
      },
    }
    );

    this.addControl('button_border_radius', {
      type: CONTROLLER_SLIDER,
      label: 'Border radius',
      default: {
        size: 6,
        unit: 'px',
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      max: 100,
      min: 0,
      rules: {
        '.altrp-btn{{STATE}}': 'border-radius: {{SIZE}}{{UNIT}}',
      },
    });

    this.addControl('button_box_shadow', {
      type: CONTROLLER_SHADOW,
      label: 'Shadow',
      default: {
        blur: 0,
        horizontal: 0,
        vertical: 0,
        opacity: 1,
        spread: 0,
        colorRGB: 'rgb(0, 0, 0)',
        color: 'rgb(0, 0, 0)',
        colorPickedHex: '#000000',
        type: ""
      },
      presetColors: [
        '#eaeaea',
        '#9c18a8'
      ],
      rules: {
        '.altrp-btn{{STATE}}': 'box-shadow: {{TYPE}} {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{SPREAD}}px {{COLOR}};',
      },
    });

    this.addControl('button_background_color', {
      type: CONTROLLER_COLOR,
      label: 'Background color',
      default: {
        color: "rgb(52,59,76)",
        colorPickedHex: "#343B4C",
      },
      rules: {
        '.altrp-btn{{STATE}}': 'background-color: {{COLOR}};',
      },
    });

    // this.addControl('button_gradient', {
    //   type: CONTROLLER_GRADIENT,
    //   label: 'Gradient',
    //   default: {
    //     isWithGradient: false,
    //     firstColor: "rgba(97,206,112,1)",
    //     firstPoint: '0',
    //     secondColor: "rgba(242,41,91,1)",
    //     secondPoint: "100",
    //     angle: "0",
    //     value: ""
    //   },
    //   rules: {
    //     ".altrp-btn{{STATE}}": "background-image: {{VALUE}}"
    //   }
    // });

    this.addControl('button_background_image', {
      type: CONTROLLER_MEDIA,
      label: 'Background Image',
      default: { url: "" },
      rules: {
        ".altrp-btn{{STATE}}": "background-image: url({{URL}});"
      }
    });

    this.addControl('button_background_position', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "top left",
          label: "top left"
        },
        {
          value: "top",
          label: "top"
        },
        {
          value: "top right",
          label: "top right"
        },
        {
          value: "right",
          label: "right"
        },
        {
          value: "bottom right",
          label: "bottom right"
        },
        {
          value: "bottom",
          label: "bottom"
        },
        {
          value: "bottom left",
          label: "bottom left"
        },
        {
          value: "left",
          label: "left"
        },
        {
          value: "center",
          label: "center"
        }
      ],
      label: 'Background Position',
      default: 'top left',
      rules: {
        ".altrp-btn{{STATE}}": "background-position: {{VALUE}};"
      }
    });

    this.addControl('button_background_attachment', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "scroll",
          label: "scroll"
        },
        {
          value: "fixed",
          label: "fixed"
        },
        {
          value: "local",
          label: "local"
        }
      ],
      label: 'Background Attachment',
      default: 'scroll',
      rules: {
        ".altrp-btn{{STATE}}": "background-attachment: {{VALUE}};"
      }
    });

    this.addControl('button_background_repeat', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "repeat",
          label: "repeat"
        },
        {
          value: "repeat-x",
          label: "repeat-x"
        },
        {
          value: "repeat-y",
          label: "repeat-y"
        },
        {
          value: "space",
          label: "space"
        },
        {
          value: "round",
          label: "round"
        },
        {
          value: "no-repeat",
          label: "no-repeat"
        }
      ],
      label: 'Background Repeat',
      default: 'repeat',
      rules: {
        ".altrp-btn{{STATE}}": "background-repeat: {{VALUE}};"
      }
    });

    this.addControl("button_background_image_width", {
      type: CONTROLLER_SLIDER,
      label: 'Width',
      default: {
        size: 100,
        unit: 'px',
      },
      conditions: {
        'button_background_size': [''],
      },
      units: [
        'px',
        '%',
        'vw',
      ],
      max: 1000,
      min: 0,
      rules: {
        ".altrp-btn{{STATE}}": "background-size: {{SIZE}}{{UNIT}};"
      }
    });

    this.addControl('button_background_size', {
      type: CONTROLLER_SELECT,
      options: [
        {
          value: "unset",
          label: "unset"
        },
        {
          value: "cover",
          label: "cover"
        },
        {
          value: "contain",
          label: "contain"
        },
        {
          value: "",
          label: "set width"
        },
      ],
      label: 'Background Size',
      default: 'unset',
      rules: {
        ".altrp-btn{{STATE}}": "background-size: {{VALUE}};"
      }
    });
    
    this.endControlSection();

    this.startControlSection('list_defaults', {
      tab: TAB_STYLE,
      label: 'List Defaults',
    });

    this.addControl('list_default_margin', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Margin',
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        '.altrp-list{{STATE}}': [
          'margin-top: {{TOP}}{{UNIT}};',
          'margin-right: {{RIGHT}}{{UNIT}};',
          'margin-bottom: {{BOTTOM}}{{UNIT}};',
          'margin-left: {{LEFT}}{{UNIT}};'
        ]
      },
    });

    this.addControl('list_default_padding', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Padding',
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        '.altrp-list{{STATE}}': [
          'padding-top: {{TOP}}{{UNIT}};',
          'padding-right: {{RIGHT}}{{UNIT}};',
          'padding-bottom: {{BOTTOM}}{{UNIT}};',
          'padding-left: {{LEFT}}{{UNIT}};'
        ]
      },
    });

    this.addControl('alignment_list_default', {
      type: CONTROLLER_CHOOSE,
      label: 'Alignment',
      default: 'left',
      options: [
        {
          icon: 'left',
          value: 'flex-start',
        },
        {
          icon: 'center',
          value: 'center',
        },
        {
          icon: 'right',
          value: 'flex-end',
        }
      ],
      rules: {
        '.altrp-list-ul-inline{{STATE}}': 'justify-content: {{VALUE}};',
        '.altrp-list-ul-default .altrp-list-li{{STATE}}': 'justify-content: {{VALUE}};'
      },
    });

    this.addControl("indent_list_text_default", {
      type: CONTROLLER_SLIDER,
      label: 'Indent',
      default: {
        size: 0,
        unit: 'px',
      },
      max: 50,
      min: 0,
      rules: {
        ".altrp-list-label{{STATE}}": "margin-left: {{SIZE}}{{UNIT}}"
      }
    });

    this.addControl("color_list_text_default", {
      type: CONTROLLER_COLOR,
      label: "Text color",
      default: {
        color: "",
        colorPickedHex: "",
      },
      rules: {
        ".altrp-list-label{{STATE}}": "color: {{COLOR}};"
      }
    });

    this.addControl("background_color_list_text_default", {
      type: CONTROLLER_COLOR,
      label: "Background color",
      default: {
        color: "",
        colorPickedHex: "",
      },
      rules: {
        ".altrp-list-label{{STATE}}": "background-color: {{COLOR}};"
      }
    });

    this.addControl('padding_list_text_default', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Text Padding',
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: 'px'
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        '.altrp-list-label{{STATE}}': [
          'padding-top: {{TOP}}{{UNIT}};',
          'padding-right: {{RIGHT}}{{UNIT}};',
          'padding-bottom: {{BOTTOM}}{{UNIT}};',
          'padding-left: {{LEFT}}{{UNIT}};'
        ]
      },
    });

    this.addControl('typographic_list_text_default', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'Typographic',
      default: {
        lineHeight: 1,
        spacing: 0,
        size: 16,
        weight: "normal",
        family: "Open Sans",
        decoration: ""
      },
      rules: {
        '.altrp-list-label{{STATE}}': [
          'font-family: "{{FAMILY}}", sans-sefir;',
          'font-size: {{SIZE}}px;',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    }
    );

    this.addControl("link_decoration_text_default", {
      type: CONTROLLER_SELECT,
      label: "Text decoration",
      default: "none",
      options: [
        {
          value: "none",
          label: "none"
        },
        {
          value: "underline",
          label: "underline"
        },
        {
          value: "overline",
          label: "overline"
        },
        {
          value: "line-through",
          label: "line-through"
        },
      ],
      rules: {
        ".altrp-list-li-link{{STATE}}": "text-decoration: {{VALUE}};"
      }
    });

    this.endControlSection();

    this.startControlSection('text_defaults', {
      tab: TAB_STYLE,
      label: 'Text Defaults',
    });

    this.addControl("text_style_position_padding", {
      type: CONTROLLER_DIMENSIONS,
      label: "Padding",
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: "px"
      },
      units: ["px", "%", "vh"],
      rules: {
        ".altrp-text{{STATE}}": [
          "padding-top: {{TOP}}{{UNIT}};",
          "padding-right: {{RIGHT}}{{UNIT}};",
          "padding-bottom: {{BOTTOM}}{{UNIT}};",
          "padding-left: {{LEFT}}{{UNIT}};"
        ]
      }
    });

    this.addControl('text_style_position_margin', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Margin',
      default: {
        top: 5,
        right: 0,
        bottom: 5,
        left: 0,
        unit: 'px'
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        '.altrp-text{{STATE}}': [
          'margin-top: {{TOP}}{{UNIT}};',
          'margin-right: {{RIGHT}}{{UNIT}};',
          'margin-bottom: {{BOTTOM}}{{UNIT}};',
          'margin-left: {{LEFT}}{{UNIT}};'
        ]
      },
    });

    this.addControl("text_style_background_color", {
      type: CONTROLLER_COLOR,
      label: "Background color",
      default: {
        color: "",
        colorPickedHex: "",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        ".altrp-text{{STATE}}": "background-color: {{COLOR}};"
      }
    });

    this.addControl("text_style_background_opacity", {
      type: CONTROLLER_SLIDER,
      label: "Opacity",
      default: {
        size: 1
      },
      max: 1,
      min: 0,
      step: 0.01,
      rules: {
        ".altrp-text{{STATE}}": "opacity: {{SIZE}}"
      }
    });

    this.addControl('text_style_font_typographic', {
      type: CONTROLLER_TYPOGRAPHIC,
      label: 'Typographic',
      default: {
        lineHeight: 1.5,
        spacing: 0,
        size: 16,
        weight: "normal",
        family: "Open Sans",
        decoration: ""
      },
      rules: {
        '.altrp-text{{STATE}}': [
          'font-family: "{{FAMILY}}", sans-sefir;',
          'font-size: {{SIZE}}px;',
          'line-height: {{LINEHEIGHT}};',
          'letter-spacing: {{SPACING}}px',
          'font-weight: {{WEIGHT}}',
          'text-transform: {{TRANSFORM}}',
          'font-style: {{STYLE}}',
          'text-decoration: {{DECORATION}}'
        ],
      },
    }
    );

    this.addControl("text_style_font_color", {
      type: CONTROLLER_COLOR,
      label: "Color",
      default: {
        color: "rgb(0, 0, 1)",
        colorPickedHex: "#000000"
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        ".altrp-text{{STATE}}": "color: {{COLOR}};"
      }
    });

    this.addControl("text_style_border_type", {
      type: CONTROLLER_SELECT,
      label: "Border type",
      units: ["px", "%", "vh"],
      options: [
        {
          value: "none",
          label: "None"
        },
        {
          value: "solid",
          label: "Solid"
        },
        {
          value: "double",
          label: "Double"
        },
        {
          value: "dotted",
          label: "Dotted"
        },
        {
          value: "dashed",
          label: "Dashed"
        },
        {
          value: "groove",
          label: "Groove"
        }
      ],
      rules: {
        ".altrp-text{{STATE}}": "border-style: {{VALUE}};"
      }
    });

    this.addControl("text_style_border_width", {
      type: CONTROLLER_DIMENSIONS,
      label: "Border width",
      units: ["px", "%", "vh"],
      rules: {
        ".altrp-text{{STATE}}":
          "border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};"
      }
    });

    this.addControl("text_style_border_color", {
      type: CONTROLLER_COLOR,
      label: "Border color",
      default: {
        color: "rgb(50,168,82)",
        colorPickedHex: "#32a852"
      },
      rules: {
        ".altrp-text{{STATE}}": "border-color: {{COLOR}};"
      }
    });

    this.addControl("text_style_border_radius", {
      type: CONTROLLER_SLIDER,
      label: 'Border radius',
      default: {
        size: 0,
        unit: 'px',
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      max: 100,
      min: 0,
      rules: {
        ".altrp-text{{STATE}}": "border-radius: {{SIZE}}{{UNIT}}"
      }
    });

    this.endControlSection();

    this.startControlSection('image_defaults', {
      tab: TAB_STYLE,
      label: 'Image Defaults',
    });

    this.addControl('image_default_margin', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Margin',
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: 'px'
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        '.altrp-image{{STATE}}': [
          'margin-top: {{TOP}}{{UNIT}};',
          'margin-right: {{RIGHT}}{{UNIT}};',
          'margin-bottom: {{BOTTOM}}{{UNIT}};',
          'margin-left: {{LEFT}}{{UNIT}};'
        ]
      },
    });

    this.addControl('image_default_padding', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Padding',
      default: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        unit: 'px'
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        '.altrp-image-container{{STATE}}': [
          'padding-top: {{TOP}}{{UNIT}};',
          'padding-right: {{RIGHT}}{{UNIT}};',
          'padding-bottom: {{BOTTOM}}{{UNIT}};',
          'padding-left: {{LEFT}}{{UNIT}};'
        ]
      },
    });

    this.addControl('image_default_opacity', {
      type: CONTROLLER_SLIDER,
      label: 'Opacity',
      default: {
        size: 1,
      },
      max: 1,
      min: 0,
      step: 0.01,
      rules: {
        '.altrp-image{{STATE}}': 'opacity: {{SIZE}}',
      },
    });

    this.addControl('image_default_fit_size', {
      type: CONTROLLER_SELECT,
      label: 'Image fit',
      default: "cover",
      options: [
        {
          'value': 'fill',
          'label': 'Fill',
        },
        {
          'value': 'contain',
          'label': 'Contain',
        },
        {
          'value': 'cover',
          'label': 'Cover',
        },
        {
          'value': 'none',
          'label': 'None',
        },
        {
          'value': 'scale-down',
          'label': 'Scale down',
        }
      ],
      rules: {
        '.altrp-image{{STATE}}': 'object-fit: {{VALUE}};',
      },
    }
    );

    this.addControl('image_default_border_type', {
      type: CONTROLLER_SELECT,
      label: 'Border Type',
      units: [
        'px',
        '%',
        'vh',
      ],
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
      rules: {
        '.altrp-image{{STATE}}': 'border-style: {{VALUE}};',
      },
    }
    );

    this.addControl('image_default_border_width', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Border Width',
      units: [
        'px',
        '%',
        'vh',
      ],
      rules: {
        '.altrp-image{{STATE}}': `border-top-width: {{TOP}}{{UNIT}};
          border-right-width: {{RIGHT}}{{UNIT}};
          border-bottom-width: {{BOTTOM}}{{UNIT}};
          border-left-width: {{LEFT}}{{UNIT}};`,
      },
    }
    );

    this.addControl('image_default_border_color', {
      type: CONTROLLER_COLOR,
      label: 'Border Color',
      default: {
        color: "rgb(50,168,82)",
        colorPickedHex: "#32a852",
      },
      rules: {
        '.altrp-image{{STATE}}': 'border-color: {{COLOR}};',
      },
    }
    );

    this.addControl('image_default_border_radius', {
      type: CONTROLLER_SLIDER,
      label: 'Border radius',
      default: {
        size: 0,
        unit: 'px',
      },
      units: [
        'px',
        '%',
        'vh',
      ],
      max: 100,
      min: 0,
      rules: {
        '.altrp-image{{STATE}}': 'border-radius: {{SIZE}}{{UNIT}}',
      },
    });

    this.endControlSection();

    this.startControlSection('input_defaults', {
      tab: TAB_STYLE,
      label: 'Input Defaults',
    });

    this.addControl("label_default_font_color", {
      type: CONTROLLER_COLOR,
      label: "Label Font Color",
      default: {
        color: "",
        colorPickedHex: "",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        ".altrp-field-label{{STATE}}": "color: {{COLOR}};"
      }
    });

    // this.addControl('label_default_font_typographic', {
    //   type: CONTROLLER_TYPOGRAPHIC,
    //   label: 'Label Typographic',
    //   default: {
    //     lineHeight: 1.5,
    //     spacing: 0,
    //     size: 16,
    //     weight: "normal",
    //     family: "Open Sans",
    //     decoration: ""
    //   },
    //   rules: {
    //     '.altrp-field-label{{STATE}}': [
    //       'font-family: "{{FAMILY}}", sans-sefir;',
    //       'font-size: {{SIZE}}px;',
    //       'line-height: {{LINEHEIGHT}};',
    //       'letter-spacing: {{SPACING}}px',
    //       'font-weight: {{WEIGHT}}',
    //       'text-transform: {{TRANSFORM}}',
    //       'font-style: {{STYLE}}',
    //       'text-decoration: {{DECORATION}}'
    //     ],
    //   },
    // }
    // );

    // this.addControl('field_default_typographic', {
    //   type: CONTROLLER_TYPOGRAPHIC,
    //   label: 'Field Typographic',
    //   default: {
    //     lineHeight: 1.5,
    //     spacing: 0,
    //     size: 16,
    //     weight: "normal",
    //     family: "Open Sans",
    //     decoration: ""
    //   },
    //   rules: {
    //     '.altrp-field-select2__single-value{{STATE}}': [
    //       'font-family: "{{FAMILY}}", sans-sefir;',
    //       'font-size: {{SIZE}}px;',
    //       'line-height: {{LINEHEIGHT}};',
    //       'letter-spacing: {{SPACING}}px;',
    //       'font-weight: {{WEIGHT}};',
    //       'text-transform: {{TRANSFORM}};',
    //       'font-style: {{STYLE}};',
    //       'text-decoration: {{DECORATION}};'
    //     ],
    //     '.altrp-field{{STATE}}': [
    //       'font-family: "{{FAMILY}}", sans-sefir;',
    //       'font-size: {{SIZE}}px;',
    //       'line-height: {{LINEHEIGHT}};',
    //       'letter-spacing: {{SPACING}}px;',
    //       'font-weight: {{WEIGHT}};',
    //       'text-transform: {{TRANSFORM}};',
    //       'font-style: {{STYLE}};',
    //       'text-decoration: {{DECORATION}};'
    //     ]
    //   },
    // });

    this.addControl("field_default_color", {
      type: CONTROLLER_COLOR,
      label: "Field Font Color",
      default: {
        color: "",
        colorPickedHex: "",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        '.altrp-field-select2__single-value{{STATE}}': 'color : {{COLOR}};',
        '.altrp-field{{STATE}}': 'color : {{COLOR}};'
      }
    });

    // this.addControl('placeholder_and_value_alignment_default', {
    //   type: CONTROLLER_CHOOSE,
    //   label: 'Alignment, value',
    //   default: 'left',
    //   options: [
    //     {
    //       icon: 'left',
    //       value: 'left',
    //     },
    //     {
    //       icon: 'center',
    //       value: 'center',
    //     },
    //     {
    //       icon: 'right',
    //       value: 'right',
    //     }
    //   ],
    //   rules: {
    //     '.altrp-field{{STATE}}': 'text-align: {{VALUE}};',
    //     '.altrp-field-select2__control{{STATE}}': 'text-align: {{VALUE}};'
    //   },
    // });

    // this.addControl('field_default_margin', {
    //   type: CONTROLLER_DIMENSIONS,
    //   label: 'Margin',
    //   default: {
    //     top: 0,
    //     right: 0,
    //     bottom: 0,
    //     left: 0,
    //     unit: 'px'
    //   },
    //   units: [
    //     'px',
    //     '%',
    //     'vh',
    //   ],
    //   rules: {
    //     '.altrp-field-container{{STATE}}': [
    //       'margin-top: {{TOP}}{{UNIT}};',
    //       'margin-right: {{RIGHT}}{{UNIT}};',
    //       'margin-bottom: {{BOTTOM}}{{UNIT}};',
    //       'margin-left: {{LEFT}}{{UNIT}};'
    //     ]
    //   },
    // });

    // this.addControl('field_default_padding', {
    //   type: CONTROLLER_DIMENSIONS,
    //   label: 'Padding',
    //   default: {
    //     top: 2,
    //     right: 2,
    //     bottom: 2,
    //     left: 2,
    //     unit: 'px'
    //   },
    //   units: [
    //     'px',
    //     '%',
    //     'vh',
    //   ],
    //   rules: {
    //     '.altrp-field{{STATE}}': [
    //       'padding-top: {{TOP}}{{UNIT}};',
    //       'padding-right: {{RIGHT}}{{UNIT}};',
    //       'padding-bottom: {{BOTTOM}}{{UNIT}};',
    //       'padding-left: {{LEFT}}{{UNIT}};'
    //     ],
    //     '.altrp-field-select2__control{{STATE}}': [
    //       'padding-top: {{TOP}}{{UNIT}};',
    //       'padding-right: {{RIGHT}}{{UNIT}};',
    //       'padding-bottom: {{BOTTOM}}{{UNIT}};',
    //       'padding-left: {{LEFT}}{{UNIT}};'
    //     ]
    //   },
    // });

    this.addControl("placeholder_default_color", {
      type: CONTROLLER_COLOR,
      label: "PLaceholder Font Color",
      default: {
        color: "",
        colorPickedHex: "",
      },
      presetColors: ["#eaeaea", "#9c18a8"],
      rules: {
        ".altrp-field::placeholder{{STATE}}": "color: {{COLOR}};",
        ".altrp-field-select2__placeholder{{STATE}}": "color: {{COLOR}};"
      }
    });

    // this.addControl('placeholder_default_typographic', {
    //   type: CONTROLLER_TYPOGRAPHIC,
    //   label: 'Placeholder Typographic',
    //   default: {
    //     lineHeight: 1.5,
    //     spacing: 0,
    //     size: 13,
    //     weight: "normal",
    //     family: "Open Sans",
    //     decoration: ""
    //   },
    //   rules: {
    //     '.altrp-field::placeholder{{STATE}}': [
    //       'font-family: "{{FAMILY}}", sans-sefir;',
    //       'font-size: {{SIZE}}px;',
    //       'line-height: {{LINEHEIGHT}};',
    //       'letter-spacing: {{SPACING}}px',
    //       'font-weight: {{WEIGHT}}',
    //       'text-transform: {{TRANSFORM}}',
    //       'font-style: {{STYLE}}',
    //       'text-decoration: {{DECORATION}}'
    //     ],
    //     '.altrp-field-select2__placeholder{{STATE}}': [
    //       'font-family: "{{FAMILY}}", sans-sefir;',
    //       'font-size: {{SIZE}}px;',
    //       'line-height: {{LINEHEIGHT}};',
    //       'letter-spacing: {{SPACING}}px',
    //       'font-weight: {{WEIGHT}}',
    //       'text-transform: {{TRANSFORM}}',
    //       'font-style: {{STYLE}}',
    //       'text-decoration: {{DECORATION}}'
    //     ],
    //   },
    // }
    // );

    this.addControl('input_default_background_color', {
      type: CONTROLLER_COLOR,
      label: 'Background Color',
      default: {
        color: "",
        colorPickedHex: "",
      },
      rules: {
        '.altrp-field{{STATE}}': 'background-color: {{COLOR}};',
        '.altrp-field-select2__control{{STATE}}': 'background-color: {{COLOR}};',
      },
    }
    );

    // this.addControl('input_default_border_type', {
    //   type: CONTROLLER_SELECT,
    //   label: 'Border Type',
    //   default: 'solid',
    //   options: [
    //     {
    //       'value': 'none',
    //       'label': 'None',
    //     },
    //     {
    //       'value': 'solid',
    //       'label': 'Solid',
    //     },
    //     {
    //       'value': 'double',
    //       'label': 'Double',
    //     },
    //     {
    //       'value': 'dotted',
    //       'label': 'Dotted',
    //     },
    //     {
    //       'value': 'dashed',
    //       'label': 'Dashed',
    //     },
    //     {
    //       'value': 'groove',
    //       'label': 'Groove',
    //     },
    //   ],
    //   rules: {
    //     '.altrp-field{{STATE}}': 'border-style: {{VALUE}};',
    //     '.altrp-field-select2__control{{STATE}}': 'border-style: {{VALUE}};'

    //   },
    // }
    // );

    // this.addControl('input_default_border_width', {
    //   type: CONTROLLER_DIMENSIONS,
    //   label: 'Border Width',
    //   units: [
    //     'px',
    //     '%',
    //     'vh',
    //   ],
    //   default: {
    //     top: 2,
    //     right: 2,
    //     bottom: 2,
    //     left: 2
    //   },
    //   rules: {
    //     '.altrp-field{{STATE}}': 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
    //     '.altrp-field-select2__control{{STATE}}': 'border-width: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};'
    //   },
    // }
    // );

    // this.addControl('input_default_border_color', {
    //   type: CONTROLLER_COLOR,
    //   label: 'Border Color',
    //   default: {
    //     color: "rgb(142,148,170)",
    //     colorPickedHex: "#8E94AA",
    //   },
    //   rules: {
    //     '.altrp-field{{STATE}}': 'border-color: {{COLOR}};',
    //     '.altrp-field-select2__control{{STATE}}': 'border-color: {{COLOR}};'
    //   },
    // }
    // );

    // this.addControl('input_default_box_shadow', {
    //   type: CONTROLLER_SHADOW,
    //   label: 'Box shadow',
    //   default: {
    //     blur: 0,
    //     horizontal: 0,
    //     vertical: 0,
    //     opacity: 1,
    //     spread: 0,
    //     colorRGB: 'rgb(0, 0, 0)',
    //     color: 'rgb(0, 0, 0)',
    //     colorPickedHex: '#000000',
    //     type: ""
    //   },
    //   presetColors: [
    //     '#eaeaea',
    //     '#9c18a8'
    //   ],
    //   rules: {
    //     '.altrp-field{{STATE}}': 'box-shadow: {{TYPE}} {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{SPREAD}}px {{COLOR}};',
    //     '.altrp-field-select2__control{{STATE}}': 'box-shadow: {{TYPE}} {{HORIZONTAL}}px {{VERTICAL}}px {{BLUR}}px {{SPREAD}}px {{COLOR}};'
    //   },
    // });

    // this.addControl('input_default_border_radius', {
    //   type: CONTROLLER_DIMENSIONS,
    //   label: 'Radius',
    //   default: {
    //     top: 0,
    //     right: 0,
    //     bottom: 0,
    //     left: 0,
    //     unit: 'px'
    //   },
    //   units: [
    //     'px',
    //     '%',
    //     'vh',
    //   ],
    //   rules: {
    //     '.altrp-field{{STATE}}': [
    //       'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
    //     ],
    //     '.altrp-field-select2__control{{STATE}}': [
    //       'border-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};',
    //     ]
    //   },
    // });

    this.endControlSection();

    /**
     * импорт/сохранение глобальных настроек
     */
    this.startControlSection('import_settings', {
      tab: TAB_ADVANCED,
      label: 'Import Settings',
    });


    this.addControl('settings_choose', {
      type: CONTROLLER_SELECT2,
      label: 'Choose Settings',
      options_resource: '/admin/ajax/global_styles_options',
    });

    this.addControl('settings_choose_button', {
      type: CONTROLLER_BUTTON,
      buttonText: 'Import',
      onClick: async () => {
        if(saveImportModule){
          let res = await saveImportModule.importGlobalSettings();
          if(! res.success){
            alert(res.message);
          }
        }
      },
    });

    this.addControl('settings_heading', {
      type: CONTROLLER_HEADING,
      label: 'Save Current Settings',
    });

    this.addControl('settings_save_title', {
      type: CONTROLLER_TEXT,
      dynamic: false,
      responsive: false,
      label: 'Save as ... (Global Style Title)',
    });

    this.addControl('settings_save_button', {
      type: CONTROLLER_BUTTON,
      buttonText: 'Save',
      onClick: async () => {
        if(saveImportModule){
          let res = await saveImportModule.saveRootElementSettings();
          if(! res.success){
            alert(res.message);
          }
        }
      },
    });

    this.endControlSection();

  }

  

  appendNewSection(newSection) {
    if (newSection.getType() !== 'section') {
      throw 'Only Section can be a Child of Template';
    }
    this.appendChild(newSection);
  }

  /**
   * css селектор для корневого элемента
   * @return {string}
   */
  getSelector(){
    return `.altrp-template-root${this.getId()}`;
  }

  /**
   * Задать настройки
   * для корневого элемента проверим настройки моделей для предпросмотра
   * @param settings
   */
  setSettings(settings){
    super.setSettings(settings);
    if(this.settings.choose_page){
      this.addModelInfo({
        modelName: 'page',
        modelId: this.settings.choose_page
      })
    }
  }
}

export default RootElement;
