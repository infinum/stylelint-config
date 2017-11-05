"use strict"

module.exports = {
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    "color-hex-case": "upper",
    "color-hex-length": "long",
    "color-named": "never",
    "color-no-invalid-hex": true,

    "font-family-name-quotes": "always-unless-keyword",

    "font-weight-notation": "named-where-possible",

    "function-calc-no-unspaced-operator": true,
    "function-comma-space-after": "always",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-parentheses-newline-inside": "never-multi-line",
    "function-parentheses-space-inside": "never",
    "function-url-quotes": "always",
    "function-whitespace-after": "always",

    "number-leading-zero": "always",
    "number-max-precision": 2,
    "number-no-trailing-zeros": true,
    "length-zero-no-unit": true,

    "string-no-newline": true,
    "unit-no-unknown": true,
    "string-quotes": "single",

    "value-no-vendor-prefix": true,
    "value-list-comma-newline-before": "never-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",

    "property-no-vendor-prefix": true,

    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-no-important": true,

    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always",
    "declaration-block-semicolon-newline-before": "never-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",

    "block-closing-brace-newline-after": "always",
    "block-closing-brace-newline-before": "always",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always",
    "block-opening-brace-newline-before": "always-single-line",
    "block-opening-brace-space-before": "always",

    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-max-specificity": "0,4,0",
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",

    "selector-list-comma-newline-after": "always",
    "selector-list-comma-newline-before": "never-multi-line",

    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-no-vendor-prefix": true,
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",

    "at-rule-empty-line-before": [
      "always", {
        "except": [
          "after-same-name",
          "first-nested"
        ],
        "ignore": [
          "after-comment"
        ]
      }
    ],
    "at-rule-no-vendor-prefix": true,

    "comment-empty-line-before": "always",
    "comment-whitespace-inside": "always",

    "indentation": 2,
    "max-line-length": 120,
    "max-nesting-depth": 3,
    "no-duplicate-selectors": true,
    "no-eol-whitespace": true,
    "no-unknown-animations": true
  },
  "order/properties-order": [
    {
      "emptyLineBefore": "always",
      "properties": [
        "font",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "font-size-adjust",
        "font-stretch",
        "font-effect",
        "font-emphasize",
        "font-emphasize-position",
        "font-emphasize-style",
        "font-smooth",
        "line-height"
      ]
    },
    {
      "emptyLineBefore": "always",
      "properties": [
        "position",
        "z-index",
        "top",
        "right",
        "bottom",
        "left"
      ]
    },
    {
      "emptyLineBefore": "always",
      "properties": [
        "display",
        "visibility",
        "float",
        "clear",
        "overflow",
        "overflow-x",
        "overflow-y",
        "clip",
        "zoom",
        "flex-direction",
        "flex-order",
        "flex-pack",
        "flex-align"
      ]
    },
    {
      "emptyLineBefore": "always",
      "properties": [
        "box-sizing",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height",
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left"
      ]
    },
    {
      "emptyLineBefore": "always",
      "properties": [
        "table-layout",
        "empty-cells",
        "caption-side",
        "border-spacing",
        "border-collapse",
        "list-style",
        "list-style-position",
        "list-style-type",
        "list-style-image"
      ]
    },
    {
      "emptyLineBefore": "always",
      "properties": [
        "content",
        "quotes",
        "counter-reset",
        "counter-increment",
        "resize",
        "cursor",
        "user-select",
        "nav-index",
        "nav-up",
        "nav-right",
        "nav-down",
        "nav-left",
        "transition",
        "transition-delay",
        "transition-timing-function",
        "transition-duration",
        "transition-property",
        "transform",
        "transform-origin",
        "animation",
        "animation-name",
        "animation-duration",
        "animation-play-state",
        "animation-timing-function",
        "animation-delay",
        "animation-iteration-count",
        "animation-direction",
        "text-align",
        "text-align-last",
        "vertical-align",
        "white-space",
        "text-decoration",
        "text-emphasis",
        "text-emphasis-color",
        "text-emphasis-style",
        "text-emphasis-position",
        "text-indent",
        "text-justify",
        "letter-spacing",
        "word-spacing",
        "text-outline",
        "text-transform",
        "text-wrap",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "word-wrap",
        "word-break",
        "tab-size",
        "hyphens",
        "pointer-events"
      ]
    },
    {
      "emptyLineBefore": "always",
      "properties": [
        "opacity",
        "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
        "color",
        "border",
        "border-width",
        "border-style",
        "border-color",
        "border-top",
        "border-top-width",
        "border-top-style",
        "border-top-color",
        "border-right",
        "border-right-width",
        "border-right-style",
        "border-right-color",
        "border-bottom",
        "border-bottom-width",
        "border-bottom-style",
        "border-bottom-color",
        "border-left",
        "border-left-width",
        "border-left-style",
        "border-left-color",
        "border-radius",
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius",
        "border-image",
        "border-image-source",
        "border-image-slice",
        "border-image-width",
        "border-image-outset",
        "border-image-repeat",
        "outline",
        "outline-width",
        "outline-style",
        "outline-color",
        "outline-offset",
        "background",
        "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
        "background-color",
        "background-image",
        "background-repeat",
        "background-attachment",
        "background-position",
        "background-position-x",
        "background-position-y",
        "background-clip",
        "background-origin",
        "background-size",
        "box-decoration-break",
        "box-shadow",
        "filter:progid:DXImageTransform.Microsoft.gradient",
        "text-shadow"
      ]
    },
    {
      "unspecified": "bottomAlphabetical"
    }
  ],
}
