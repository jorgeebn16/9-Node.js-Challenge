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

// Function to generate markdown for README
// Format was templated the same as it is shown in professional README files
generateMarkdown = response => {
    return `# ${response.Title}

## Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)
* [Screenshot](#screenshot)
* [Deployment](#deployment)
</br>
</br>

## Description
${response.Description}
</br>
</br>

## Installation
</br>

### To use this application, please install:
* ${response.Installationdetails}
</br>
</br>

### code utilized to download these files
* ${response.Installation}
</br>
</br>

## Usage
${response.Usage}
</br>
</br>

## License 
${renderBadge(response.License)}
</br>
</br>

## Badges
${response.Badges}
</br>
</br>

## Test
${response.Test}
</br>
</br>

## Screenshot
View Screenshot [${response.Screenshot}](${response.Screenshot})
</br>
</br>

## Deployment
View the deployed page at [${response.Title}](${response.deployment})
</br>
</br>

## Contributing
${response.Contributing}
</br>
</br>

Would you like to reach us?
</br>
Contact Me:

Github: ${response.Github}
Email: ${response.Email}
`;
}

module.exports = generateMarkdown;