const fs = require('fs');
const path = require('path');
const glob = require('glob');
const babel = require('@babel/core');

const messages = {};

const extractMessages = (file) => {
  const result = babel.transformFileSync(file, {
    presets: ['next/babel'],
    plugins: [['react-intl', { extractFromFormatMessageCall: true, extractSourceLocation: true }]]
  });

  if (result.metadata && result.metadata['react-intl']) {
    result.metadata['react-intl'].messages.forEach(({ id, defaultMessage }) => {
      if (!messages[id]) {
        messages[id] = defaultMessage;
      }
    });
  }
};

// Modify the glob pattern to match all JSX files in the src directory and its subdirectories
const files = glob.sync('src/**/*.jsx');
files.forEach(extractMessages);

const outputDir = path.join(__dirname, 'lang');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const outputFile = path.join(outputDir, 'en.js');
fs.writeFileSync(outputFile, `module.exports = ${JSON.stringify(messages, null, 2)};\n`);
