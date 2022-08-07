import i18next from 'i18next';
import * as React from 'preact';
import { Suspense } from 'preact/compat';
import { I18nextProvider, initReactI18next } from 'react-i18next';

i18next.use(initReactI18next).init({
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translations'],
  defaultNS: 'translations',

  debug: true,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  react: {
    useSuspense: true,
  },
});

function test() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <I18nextProvider i18n={i18next}>
        <h1>Foo</h1>
      </I18nextProvider>
    </Suspense>
  );
}

function testDefaultNS() {
  return (
    <Suspense fallback={<p>Loading</p>}>
      <I18nextProvider i18n={i18next} defaultNS={'translations'}>
        <h1>Foo</h1>
      </I18nextProvider>
    </Suspense>
  );
}
