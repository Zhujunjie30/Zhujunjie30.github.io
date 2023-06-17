// 跟随系统主题
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const toggleDarkMode = (darkModeMediaQuery) => {
  if (darkModeMediaQuery.matches) {
    document.documentElement.classList.add("dark-mode");
  } else {
    document.documentElement.classList.remove("dark-mode");
  }
};
darkModeMediaQuery.addListener(toggleDarkMode);
toggleDarkMode(darkModeMediaQuery);
