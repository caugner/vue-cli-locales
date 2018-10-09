#!/usr/bin/env bash

wget -O ./locales/ar.json https://unpkg.com/vue-cli-locale-ar/locales/ar.json
wget -O ./locales/ca.json https://unpkg.com/vue-cli-locale-ca/locales/ca.json
wget -O ./locales/da.json https://unpkg.com/vue-cli-locale-da/locales/da.json
wget -O ./locales/de.json https://unpkg.com/vue-cli-locale-de/locales/de.json
wget -O ./locales/es.json https://unpkg.com/vue-cli-locale-es/locales/es.json
wget -O ./locales/fr.json https://unpkg.com/vue-cli-locale-fr/locales/fr.json
wget -O ./locales/id.json https://unpkg.com/vue-cli-locale-id/locales/id.json
wget -O ./locales/ja.json https://unpkg.com/vue-cli-locale-ja/locales/ja.json
wget -O ./locales/ko.json https://unpkg.com/vue-cli-locale-ko/locales/ko.json
wget -O ./locales/nb_NO.json https://unpkg.com/vue-cli-locale-nb-no/locales/nb-no.json
wget -O ./locales/pl.json https://unpkg.com/vue-cli-locale-pl/locales/pl.json
wget -O ./locales/pt.json https://unpkg.com/vue-cli-locale-pt/locales/pt.json
wget -O ./locales/pt_BR.json https://unpkg.com/vue-cli-locale-pt-br/locales/pt-br.json
wget -O ./locales/ru.json https://unpkg.com/vue-cli-locale-ru/locales/ru.json
wget -O ./locales/th.json https://unpkg.com/vue-cli-locale-th/locales/th.json
wget -O ./locales/tr.json https://unpkg.com/vue-cli-locale-tr/locales/tr.json
wget -O ./locales/zh.json https://unpkg.com/vue-cli-locale-zh/locales/zh.json
wget -O ./locales/zh_TW.json https://unpkg.com/vue-cli-locale-zh-tw/locales/zh-TW.json
node ./lint.js ./locales/*.json
