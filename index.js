"use strict"

module.exports = {
  "extends": "stylelint-config-recommended-scss",
  "rules": {
    // Color:
    "color-no-invalid-hex": true,
    "color-hex-case": "upper",
    "color-hex-length": "long",
    "color-hex-alpha": "never",
    "color-named": "never",
    "color-function-notation": "legacy",

    // Font-family:
    "font-family-no-duplicate-names": true,
    "font-family-name-quotes": "always-unless-keyword",

    // Named grid areas:
    "named-grid-areas-no-invalid": true,

    // Function:
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-no-unknown": null,
    "function-url-no-scheme-relative": true,
    "function-url-quotes": "always",
    "scss/function-no-unknown": true,
    "scss/function-quote-no-quoted-strings-inside": true,
    "scss/function-unquote-no-unquoted-strings-inside": true,

    // String:
    "string-no-newline": true,

    // Unit:
    "unit-no-unknown": true,

    // Custom property:
    "custom-property-no-missing-var-function": true,

    // Property:
    "property-no-unknown": true,
    "property-no-vendor-prefix": true,

    // Keyframe declaration
    "keyframe-declaration-no-important": true,

    // Declaration block:
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-duplicate-custom-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-single-line-max-declarations": 1,

    // Block:
    "block-no-empty": true,

    // Selector:
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "scss/selector-no-redundant-nesting-selector": true,

    // Media feature:
    "media-feature-name-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,

    // At-rule
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,
    "at-rule-no-vendor-prefix": true,

    // Comment:
    "comment-no-empty": null,
    "scss/comment-no-empty": true,

    // General/Sheet:
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "max-nesting-depth": 3,
    "scss/no-duplicate-dollar-variables": true,
    "scss/no-duplicate-mixins": true,
    "scss/no-global-function-names": true,

    // Alpha value:
    "alpha-value-notation": "number",

    // Length:
    "length-zero-no-unit": true,

    // Font weigth:
    "font-weight-notation": "named-where-possible",

    // Number:
    "number-max-precision": 2,

    // Unit:
    "unit-disallowed-list": ["cm", "mm", "Q", "in", "pc", "pt", "ch", "lh"],

    // Value:
    "value-no-vendor-prefix": true,

    // Declaration:
    "declaration-no-important": true,
    "scss/declaration-nested-properties": "never",
    "scss/declaration-nested-properties-no-divided-groups": true,

    // Selector:
    "selector-attribute-quotes": "always",
    "selector-max-specificity": "0,4,0",
    "selector-max-universal": 1,
    "selector-no-vendor-prefix": true,
    "selector-pseudo-element-colon-notation": "double",
    "no-unknown-animations": true,

    // @-each
    "scss/at-each-key-value-single-line": true,

    // @-else
    "scss/at-else-closing-brace-newline-after": "always-last-in-chain",

    // @-extend
    "scss/at-extend-no-missing-placeholder": true,

    // @-function
    "scss/at-function-parentheses-space-before": "never",

    // @-if
    "scss/at-if-closing-brace-newline-after": "always-last-in-chain",

    // @-import
    "scss/at-import-partial-extension": "never",

    // @-mixin
    "scss/at-mixin-argumentless-call-parentheses": "always",

    // @-use
    "scss/at-use-no-unnamespaced": true,

    // $-variable
    "scss/dollar-variable-colon-newline-after": "always",
    "scss/dollar-variable-colon-space-after": "always",
    "scss/dollar-variable-default": true,
    "scss/dollar-variable-first-in-block": [
      true,
      {
        "ignore": ["comments", "imports"],
      }
    ],
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-no-namespaced-assignment": true,

    // Dimension
    "scss/dimension-no-non-numeric-values": true,

    // Operator:
    "scss/operator-no-unspaced": true,
  }
}
