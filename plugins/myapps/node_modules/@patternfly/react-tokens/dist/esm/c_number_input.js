export const c_number_input = {
  ".pf-c-number-input": {
    "c_number_input__unit_c_input_group_MarginLeft": {
      "name": "--pf-c-number-input__unit--c-input-group--MarginLeft",
      "value": "0.5rem",
      "values": [
        "--pf-global--spacer--sm",
        "$pf-global--spacer--sm",
        "pf-size-prem(8px)",
        "0.5rem"
      ]
    },
    "c_number_input__icon_FontSize": {
      "name": "--pf-c-number-input__icon--FontSize",
      "value": "0.75rem",
      "values": [
        "--pf-global--FontSize--xs",
        "$pf-global--FontSize--xs",
        "pf-font-prem(12px)",
        "0.75rem"
      ]
    },
    "c_number_input_c_form_control_width_base": {
      "name": "--pf-c-number-input--c-form-control--width-base",
      "value": "calc(0.5rem * 2 + 1px * 2)",
      "values": [
        "calc(--pf-global--spacer--sm * 2 + --pf-global--BorderWidth--sm * 2)",
        "calc($pf-global--spacer--sm * 2 + $pf-global--BorderWidth--sm * 2)",
        "calc(pf-size-prem(8px) * 2 + 1px * 2)",
        "calc(0.5rem * 2 + 1px * 2)"
      ]
    },
    "c_number_input_c_form_control_width_icon": {
      "name": "--pf-c-number-input--c-form-control--width-icon",
      "value": "0px"
    },
    "c_number_input_m_status_c_form_control_width_icon": {
      "name": "--pf-c-number-input--m-status--c-form-control--width-icon",
      "value": "2rem",
      "values": [
        "--pf-global--spacer--xl",
        "$pf-global--spacer--xl",
        "pf-size-prem(32px)",
        "2rem"
      ]
    },
    "c_number_input_c_form_control_width_chars": {
      "name": "--pf-c-number-input--c-form-control--width-chars",
      "value": "4"
    },
    "c_number_input_c_form_control_Width": {
      "name": "--pf-c-number-input--c-form-control--Width",
      "value": "calc(\n      calc(\n        calc(0.5rem * 2 + 1px * 2) + 4 * 1ch\n      ) + 0px\n    )",
      "values": [
        "calc(\n      calc(\n        --pf-c-number-input--c-form-control--width-base + --pf-c-number-input--c-form-control--width-chars * 1ch\n      ) + --pf-c-number-input--c-form-control--width-icon\n    )",
        "calc(\n      calc(\n        calc(--pf-global--spacer--sm * 2 + --pf-global--BorderWidth--sm * 2) + 4 * 1ch\n      ) + 0px\n    )",
        "calc(\n      calc(\n        calc($pf-global--spacer--sm * 2 + $pf-global--BorderWidth--sm * 2) + 4 * 1ch\n      ) + 0px\n    )",
        "calc(\n      calc(\n        calc(pf-size-prem(8px) * 2 + 1px * 2) + 4 * 1ch\n      ) + 0px\n    )",
        "calc(\n      calc(\n        calc(0.5rem * 2 + 1px * 2) + 4 * 1ch\n      ) + 0px\n    )"
      ]
    }
  },
  ".pf-c-number-input.pf-m-status": {
    "c_number_input_c_form_control_width_icon": {
      "name": "--pf-c-number-input--c-form-control--width-icon",
      "value": "2rem",
      "values": [
        "--pf-c-number-input--m-status--c-form-control--width-icon",
        "--pf-global--spacer--xl",
        "$pf-global--spacer--xl",
        "pf-size-prem(32px)",
        "2rem"
      ]
    }
  }
};
export default c_number_input;