const axios = require("axios");

let upstream;
let origin;

Promise.all([
  axios.get('https://unpkg.com/vue-cli-locales/package.json').then(({ data: { version } }) => origin = version),
  axios.get('https://unpkg.com/@vue/cli/package.json').then(({ data: { version } }) => upstream = version)
]).then(() => {
  console.log(`upstream: ${upstream}`);
  console.log(`origin  : ${origin}`);
  if (origin === upstream) {
    console.log(`origin is up-to-date.`);
    process.exit();
  } else {
    console.log(`origin is OUTDATED.`)
    process.exit(1);
  }
})
