export default [
    {
        files: ["**/*.js"],
        rules: {
            "semi":["error", "always"]
            "qoutes":["error","double"],
        },
        languageOptions: {
            paserOptions:{
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
    },
];
