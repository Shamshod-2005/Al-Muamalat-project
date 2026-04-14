const config = {
  locales: ["en", "uz"],
  output: "src/locales/$LOCALE/translation.json",

  createOldCatalogs: false,
  keepRemoved: false,
  sort: true,

  keySeparator: false,
  namespaceSeparator: false,
  defaultNamespace: "translation",

  defaultValue: (
    locale: string,
    _namespace: string,
    key: string,
    _value: string,
  ) => {
    if (locale === "en") {
      return key;
    }
    return "";
  },
};

export default config;
