const shell = require('shelljs');
const colors = require('colors');
const figlet = require('figlet');
const openUrl = require('open');
const waitOnFe = require('wait-on');

const feUrl = 'http://localhost:4200';
const storybook = 'http://localhost:4400';
const api = 'http://localhost:3333/api/movies';

const openUrlInBrowser = async (url) => {
  await openUrl(url);
};

figlet('Welcome to WTC Tech test!!', function (err, data) {
  if (err) return;
  console.log(colors.cyan(data));
});

const child = shell.exec('yarn serve:fe', { async: true });

waitOnFe({
  resources: [feUrl, api, storybook],
})
  .then(function () {
    console.log(colors.cyan('The API is now up'));
    console.log(colors.cyan('Storybook is now up'));
    console.log(colors.cyan(`Launching the FE app at: ${feUrl}`));
    openUrlInBrowser(feUrl);
  })
  .catch(function (err) {
    console.log(colors.red(err));
  });
