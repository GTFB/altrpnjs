import BaseElement from "./BaseElement";
import FromIcon from "../../../svgs/form-horizontal.svg";
import {
  CONTROLLER_COLOR, CONTROLLER_DIMENSIONS,
  CONTROLLER_SHADOW, CONTROLLER_SLIDER, CONTROLLER_SWITCHER, CONTROLLER_TEXT, CONTROLLER_TEXTAREA,
  CONTROLLER_TYPOGRAPHIC,
  TAB_CONTENT,
  TAB_STYLE
} from "../modules/ControllersManager";
import {advancedTabControllers} from "../../decorators/register-controllers";

class InputDateRange extends BaseElement {
  static getName() {
    return "input-date-range";
  }
  static getTitle() {
    return "Input Date Range";
  }
  static getIconComponent() {
    return FromIcon;
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
      label: "Content"
    });

    this.addControl("form_id_start", {
      type: CONTROLLER_TEXT,
      label: "Start form ID",
      responsive: false
    });

    this.addControl("field_id_start", {
      type: CONTROLLER_TEXT,
      responsive: false,
      label: "Start field ID (Column Name)"
    });

    this.addControl("content_default_value_start", {
      type: CONTROLLER_TEXTAREA,
      responsive: false,
      label: "Start default Value"
    });

    this.addControl("content_calculation_start", {
      type: CONTROLLER_TEXTAREA,
      label: "Start calculation",
      responsive: false,
      description:
        "E.g {{altrpforms.form_id.field_id}}*{{altrpforms.form_id.field_id_2}}+10"
    });

    this.addControl("form_id_end", {
      type: CONTROLLER_TEXT,
      label: "End form ID",
      responsive: false
    });

    this.addControl("field_id_end", {
      type: CONTROLLER_TEXT,
      responsive: false,
      label: "End field ID (Column Name)"
    });

    this.addControl("content_default_value_end", {
      type: CONTROLLER_TEXTAREA,
      responsive: false,
      label: "End default Value"
    });

    this.addControl("content_calculation_end", {
      type: CONTROLLER_TEXTAREA,
      label: "End calculation",
      responsive: false,
      description:
        "E.g {{altrpforms.form_id.field_id}}*{{altrpforms.form_id.field_id_2}}+10"
    });


    this.addControl("shortcuts", {
      type: CONTROLLER_SWITCHER,
      label: "Shortcuts",
      default: false
    });

    this.endControlSection();

    this.startControlSection("inputs_styles", {
      tab: TAB_STYLE,
      label: "Inputs"
    });

    this.addControl("width", {
      type: CONTROLLER_TEXT,
      label: "Width"
    });

    this.addControl("height", {
      type: CONTROLLER_TEXT,
      label: "Height"
    });

    this.addControl('typographic', {
        type: CONTROLLER_TYPOGRAPHIC,
        label: 'Typographic',
      }
    );

    this.addControl('color', {
      type: CONTROLLER_COLOR,
      label: 'Color',
    });

    this.addControl('placeholder_typographic', {
        type: CONTROLLER_TYPOGRAPHIC,
        label: 'Placeholder typographic',
      }
    );

    this.addControl('placeholder_color', {
      type: CONTROLLER_COLOR,
      label: 'Placeholder color',
    });

    this.addControl('background', {
      type: CONTROLLER_COLOR,
      label: 'Background color',
    });

    this.addControl('padding', {
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

    this.addControl('border_radius', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Border Radius',
      default: {
        unit: 'px',
        bind: true,
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    });

    this.endControlSection();

    this.startControlSection("popover_styles", {
      tab: TAB_STYLE,
      label: "Popover"
    });

    this.addControl('popover_background', {
      type: CONTROLLER_COLOR,
      label: 'Background color',
    });

    this.addControl('popover_shadow', {
      type: CONTROLLER_SHADOW,
      label: 'Shadow',
    });

    this.addControl('popover_padding', {
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

    this.addControl('popover_border_radius', {
      type: CONTROLLER_DIMENSIONS,
      label: 'Border Radius',
      default: {
        unit: 'px',
        bind: true,
      },
      units: [
        'px',
        '%',
        'vh',
      ],
    });

    this.addControl('popover_dividers', {
      type: CONTROLLER_COLOR,
      label: 'Dividers color',
    });

    this.endControlSection();

    this.startControlSection("shortcuts_styles", {
      tab: TAB_STYLE,
      label: "Shortcuts",
      conditions: {
        shortcuts: true
      },
    });

    this.addControl('shortcuts_typographic', {
        type: CONTROLLER_TYPOGRAPHIC,
        label: 'Typographic',
      }
    );

    this.addControl('shortcuts_color', {
      type: CONTROLLER_COLOR,
      label: 'color',
    });

    this.addControl('shortcuts_background_shortcut', {
      type: CONTROLLER_COLOR,
      label: 'Shortcut background color',
    });

    this.addControl('shortcuts_background', {
      type: CONTROLLER_COLOR,
      label: 'Background color',
    });

    this.addControl('shortcuts_padding', {
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

    this.endControlSection();

    this.startControlSection("caption_styles", {
      tab: TAB_STYLE,
      label: "Caption",
    });

    this.addControl('caption_background', {
      type: CONTROLLER_COLOR,
      label: 'Background color',
    });

    this.addControl('caption_padding', {
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

    this.addControl('caption_arrow_color', {
      type: CONTROLLER_COLOR,
      label: 'Arrow color',
    });

    this.addControl('caption_arrow_size', {
      type: CONTROLLER_SLIDER,
      label: 'Arrow size',
      units: [
        'px',
      ],
      max: 50,
      min: 0,
    });

    this.addControl('caption_typographic', {
        type: CONTROLLER_TYPOGRAPHIC,
        label: 'Typographic',
      }
    );

    this.addControl('caption_color', {
      type: CONTROLLER_COLOR,
      label: 'color',
    });

    this.addControl('caption_select_background-color', {
      type: CONTROLLER_COLOR,
      label: 'Select background color',
    });

    this.addControl('caption_select_arrows_size', {
      type: CONTROLLER_SLIDER,
      label: 'Select arrows size',
      units: [
        'px',
      ],
      max: 50,
      min: 0,
    });

    this.endControlSection();

    this.startControlSection("calendar_styles", {
      tab: TAB_STYLE,
      label: "Calendar",
    });

    this.addControl('calendar_weekday_typographic', {
        type: CONTROLLER_TYPOGRAPHIC,
        label: 'Weekday Typographic',
      }
    );

    this.addControl('calendar_weekday_color', {
      type: CONTROLLER_COLOR,
      label: 'Weekday color',
    });

    this.addControl('calendar_typographic', {
        type: CONTROLLER_TYPOGRAPHIC,
        label: 'Typographic',
      }
    );

    this.addControl('calendar_color', {
      type: CONTROLLER_COLOR,
      label: 'color',
    });

    this.addControl('calendar_background-color', {
      type: CONTROLLER_COLOR,
      label: 'Background color',
    });

    this.addControl('calendar_day_background-color', {
      type: CONTROLLER_COLOR,
      label: 'Day background color',
    });

    this.endControlSection();

    advancedTabControllers(this);
  }
}
export default InputDateRange;

