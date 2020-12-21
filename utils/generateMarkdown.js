function renderBadge(license) {
    if (license == 'MIT') {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }
    if (license == 'Apache 2.0') {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }
    if (license == 'Creative Commons 1.0') {
        return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"
    }
    if (license == 'GPLv3') {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    if (license == 'WTFPL') {
        return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    }
};

// function renderMedia(media) {
//     if (media == 'screenshot1') {
//         return "![README screenshots](./assets/images/screenshot1.PNG)"
//     }
//     if (media == 'screenshot2') {
//         return "![README screenshots](./assets/images/screenshot2.PNG)"
//     }
//     if (media == 'screenshot3') {
//         return "![README screenshots](./assets/images/screenshot3.PNG)"
//     }
//     if (media == 'screenshot4') {
//         return "![README screenshots](./assets/images/screenshot4.PNG)"
//     }
// };

// Function to generate markdown for README
// Format was templated the same as it is shown in professional README files
generateMarkdown = response => {
    return `# ${response.Title}

${renderBadge(response.License)}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)

## Description
${response.Description}

## Installation
${response.Installationdetails}

    ${response.Installation}

## Usage
${response.Usage}

${renderMedia(response.Media)}

## License
${response.License}  

## Badges
${response.Badges}

## Contributing
${response.Contributing}

## Test
${response.Test}

Would you like to reach us?
</br>
Contact Me:

Github: ${response.Github}

Email: ${response.Email}
`;
}

module.exports = generateMarkdown;