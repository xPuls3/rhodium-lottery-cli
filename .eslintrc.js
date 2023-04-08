module.exports = {
    root: true,
    "env": {
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],

    overrides: [{

        files: ["*.ts"],

        parserOptions: {
            project: ['./tsconfig.json']
        },

    }],

    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/ban-types": ["error", {
            "types": {
                "Function": false
            }
        }],
        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": ["error", "always"],
        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }],
        "brace-style": "off",
        "@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
        "@typescript-eslint/await-thenable": "warn",
        "semi": ["off"],
        "@typescript-eslint/semi": ["error", "always"],
        "no-loss-of-precision": "off",
        "@typescript-eslint/no-loss-of-precision": ["error"],
        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": ["error", "never"],
        "@typescript-eslint/explicit-member-accessibility": ["error", {
            accessibility: 'explicit',
            overrides: { constructors: 'no-public', }
        }],
        "padded-blocks": ["error", { "classes": "always" }],
        "lines-between-class-members": ["error", "always", {
            exceptAfterSingleLine: true,
        }],
        "no-extra-semi": "off",
        "@typescript-eslint/no-extra-semi": ["off"],
        "prefer-const": ["off"],
        "@typescript-eslint/no-empty-function": ["off"],
        "no-async-promise-executor": ["off"],
        "@typescript-eslint/no-unused-vars": ["off"],
        "@typescript-eslint/no-inferrable-types": ["off"],
        "@typescript-eslint/no-explicit-any": ["off"],
        "@typescript-eslint/no-var-requires": ["off"],
        "indent": ["error", 4],
        "linebreak-style": ["off"],
        "quotes": ["error", "double"],
    }
};
