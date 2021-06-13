module.exports = {
    root: true,
    env: { node: true },
    parserOptions: { parser: "@typescript-eslint/parser" },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/prettier",
        "@vue/typescript"],
    rules: {
        "prettier/prettier": [
            "warn", {
                "singleQuote": false,
                "trailingComma": "all",
                "useTabs": false,
                "tabWidth": 4,
                "printWidth": 300,
            }],
        "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ?
            "warn" : "off"
    }
};
