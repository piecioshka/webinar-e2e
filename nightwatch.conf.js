module.exports = {
    "src_folders": ["test/e2e/"],

    "detailed_output": false,

    "test_runner": {
        "type": "mocha",
        "options": {
            "ui": "bdd",
            "reporter": "list"
        }
    },

    "webdriver": {
        "start_process": true,
        "server_path": 'node_modules/.bin/chromedriver',
        "port": 9515
    },

    "custom_commands_path": ["node_modules/nightwatch-helpers/commands"],
    "custom_assertions_path": ["node_modules/nightwatch-helpers/assertions"],

    "test_settings": {
        "default": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "chromeOptions": {
                    "args": [
                        "--headless"
                    ]
                }
            }
        }
    }
};
