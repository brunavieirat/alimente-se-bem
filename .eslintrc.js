module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ['plugin:react/recommended', "eslint:recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ],
        "linebreak-style": 0,
        "no-console": 0,
        "react/prop-types": 0,
    }
};