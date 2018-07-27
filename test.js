var fetchUrl = require("fetch").fetchUrl;

const compareLatest = function(base, current, latest, path = []) {
  let hasErrors = false;
  const pathString = path.join(".") || "()";

  if (typeof latest !== "object") {
    return;
  }

  Object.keys(latest).forEach(key => {
    const baseValue = typeof base === 'object' && base !== null ? base[key] : null;
    const currentValue = typeof current === 'object' && current !== null ? current[key] : null;
    const latestValue = latest[key];

    if (typeof latestValue === "string") {
      if (typeof baseValue === "undefined" || baseValue === null) {
        return;
      } else if (baseValue !== latestValue && currentValue !== latestValue) {
        console.error(
          `\x1b[32m\x1b[1m${pathString}\x1b[0m:\n  base    = \x1b[31m${JSON.stringify(baseValue)}\x1b[0m\n  current = \x1b[31m${JSON.stringify(currentValue)}\x1b[0m\n  latest  = \x1b[31m${JSON.stringify(latestValue)}\x1b[0m\n`
        );
        hasErrors = true;
      }
    } else if (typeof latestValue === "object") {
      compareLatest(baseValue, currentValue, latestValue, [...path, key]);
    }

  });

  return hasErrors;
};

const unpkg = (pkg, file) => `https://unpkg.com/vue-cli-locale-${pkg}@latest/locales/${file || pkg}.json`

const mapping = {
  ar: unpkg('ar'),
  de: unpkg('de'),
  es: unpkg('es'),
  fr: unpkg('fr'),
  id: unpkg('id'),
  ja: unpkg('ja'),
  ko: unpkg('ko'),
  nb_NO: unpkg('nb-no'),
  pl: unpkg('pl'),
  pt_BR: unpkg('pt-br'),
  pt: unpkg('pt'),
  ru: unpkg('ru'),
  th: unpkg('th'),
  tr: unpkg('tr'),
  zh_TW: unpkg('zh-tw', 'zh-TW'),
  zh: unpkg('zh'),
};

fetchUrl(`https://unpkg.com/@vue/cli-ui@latest/locales/en.json`, function(
  error,
  meta,
  body
) {
  const base = JSON.parse(body.toString());

  const promises = Object.keys(mapping).map(key => {
    return new Promise((resolve, reject) => {
      const url = mapping[key];
      const current = require(`./locales/${key}.json`);

      fetchUrl(url, function(error, meta, body) {
        if (error) {
          reject(error);
        }

        let latest = JSON.parse(body.toString());
        if (!('org' in latest)) {
          latest = {
            org: {
              vue: latest
            }
          };
        }

        compareLatest(base, current, latest, [key]);

        resolve();
      })
    })
  });
});
