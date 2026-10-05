(() => {
  const chineseLanguage = "zh-Hans";
  const englishLanguage = "en";
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const shouldUseChinese = requestedLanguage
    ? requestedLanguage.toLowerCase().startsWith("zh")
    : browserLanguages.some((language) => language?.toLowerCase().startsWith("zh"));
  const activeLanguage = shouldUseChinese ? chineseLanguage : englishLanguage;

  document.documentElement.lang = activeLanguage;
  document.title = activeLanguage === chineseLanguage ? "隐私政策 · 病友饭卡" : "Privacy Policy · Sated";

  document.querySelectorAll("[data-language-section]").forEach((element) => {
    element.hidden = element.dataset.languageSection !== activeLanguage;
  });
})();
