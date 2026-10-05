(() => {
  const chineseLanguage = "zh-Hans";
  const englishLanguage = "en";
  const requestedLanguage = new URLSearchParams(window.location.search).get("lang");
  const browserLanguages = navigator.languages?.length ? navigator.languages : [navigator.language];
  const shouldUseChinese = requestedLanguage
    ? requestedLanguage.toLowerCase().startsWith("zh")
    : browserLanguages[0]?.toLowerCase().startsWith("zh");
  const activeLanguage = shouldUseChinese ? chineseLanguage : englishLanguage;

  document.documentElement.lang = activeLanguage;
  document.title = shouldUseChinese
    ? document.documentElement.dataset.titleZh
    : document.documentElement.dataset.titleEn;

  document.querySelectorAll("[data-language-section]").forEach((element) => {
    element.hidden = element.dataset.languageSection !== activeLanguage;
  });

  document.querySelectorAll("[data-localized-navigation]").forEach((element) => {
    element.setAttribute("aria-label", shouldUseChinese ? "相关页面" : "Related pages");
  });
  document.querySelectorAll("[data-label-zh]").forEach((element) => {
    element.textContent = shouldUseChinese ? element.dataset.labelZh : element.dataset.labelEn;
  });
  document.querySelectorAll('a[href*="privacy.html"], a[href*="support.html"]').forEach((element) => {
    const url = new URL(element.getAttribute("href"), window.location.href);
    if (element.hasAttribute("data-language-switch")) {
      const nextLanguage = shouldUseChinese ? englishLanguage : chineseLanguage;
      url.searchParams.set("lang", nextLanguage);
      element.hreflang = nextLanguage;
      element.textContent = shouldUseChinese ? "English" : "简体中文";
    } else {
      url.searchParams.set("lang", activeLanguage);
    }
    element.href = url.href;
  });
})();
