import { h } from "vue";

import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";

import { generatorId } from "../../utils";
import { uiConfig } from "../../index";

const AtRadioCardGroup = (props, { emit, slots }) => {
  return h(
    RadioGroup,
    {
      modelValue: props.modelValue,
      "onUpdate:modelValue": (value) => emit("update:modelValue", value),
    },
    {
      default: () => [
        h("div", { class: "space-y-4" }, [
          props.items.map((item) => {
            return h(
              RadioGroupOption,
              {
                as: "template",
                value: item[props.valueType],
              },
              {
                default: ({ checked, active }) => {
                  return h(
                    "div",
                    {
                      class: [
                        active
                          ? "ring-1 ring-offset-2 ring-" +
                            uiConfig.primaryBorderColor +
                            "-500"
                          : "",
                        "relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none",
                        {
                          "border-red-300 form-radio--error": props.error,
                          "border-green-500 form-radio--success": props.success,
                        },
                      ],
                    },
                    [
                      h("div", { class: "flex items-center" }, [
                        h("div", { class: "text-sm" }, [
                          h(
                            RadioGroupLabel,
                            {
                              as: "p",
                              class: "font-medium text-gray-900",
                            },
                            { default: () => item.title }
                          ),
                          item.subtitle
                            ? h(
                                RadioGroupDescription,
                                { as: "div", class: "text-gray-500" },
                                { default: () => item.subtitle }
                              )
                            : null,
                        ]),
                      ]),
                      "right" in slots
                        ? h(
                            RadioGroupDescription,
                            {
                              as: "div",
                              class:
                                "mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right",
                            },
                            { default: () => slots.right({ item }) }
                          )
                        : null,
                      h("div", {
                        class: [
                          checked
                            ? "border-" + uiConfig.primaryBorderColor + "-500"
                            : "border-transparent",
                          "absolute -inset-px rounded-lg border-2 pointer-events-none",
                        ],
                        "aria-hidden": true,
                      }),
                    ]
                  );
                },
              }
            );
          }),
        ]),
      ],
    }
  );
};

AtRadioCardGroup.props = {
  id: { type: String, default: () => generatorId("at-radio-") },
  valueType: { type: String, default: "label" },
  items: { type: Array, required: true },
  noBorder: { type: Boolean, default: false },
  modelValue: {},
  error: { type: [Boolean, String, Number], default: false },
  success: { type: [Boolean, String, Number], default: false },
  disabled: { type: [Boolean, String, Number], default: false },
};
AtRadioCardGroup.emits = ["update:modelValue"];

export default AtRadioCardGroup;
