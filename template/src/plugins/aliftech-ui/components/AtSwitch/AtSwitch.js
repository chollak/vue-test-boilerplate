import { h } from "vue";
import { generatorId } from "../../utils";

import AtInputHelp from "../AtInputHelp/AtInputHelp";

const AtSwitch = (props, context) => {
  return "default" in context.slots
    ? h(
        "div",
        Object.assign({}, context.attrs, {
          class: [
            "text-sm leading-5 flex-grow",
            {
              "ml-3": props.position === "left",
              "mr-3": props.position === "right",
            },
          ].concat("class" in context.attrs ? context.attrs.class : ""),
        }),
        [
          h(
            "label",
            {
              class: "cursor-pointer font-medium text-gray-700",
              for: props.id,
            },
            [
              h(
                AtInputHelp,
                { mt: 0 },
                { default: () => context.slots.default() }
              ),
            ]
          ),
        ]
      )
    : null;
};

AtSwitch.props = {
  id: { type: String, default: () => generatorId("at-switch-") },
  position: {
    type: String,
    default: "left",
    validator: (position) => position === "left" || position === "right",
  },
};

export default AtSwitch;
