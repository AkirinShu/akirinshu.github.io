//本文件为网站切换主题相关

const savedTheme = localStorage.getItem("theme");
  
// 加载主题
if (savedTheme && savedTheme !== "default") {
  document.documentElement.classList.add(savedTheme);
}

function setTheme(themeName) {
  // 清除所有主题类
  document.documentElement.classList.remove(
    "theme-tho1",
    "theme-tho2",
    "theme-tho3",
    "theme-tho4"
    //更多主题类名在此添加
  );

  // 默认主题：不加任何类
  if (themeName !== "default") {
    document.documentElement.classList.add(themeName);
  }

  // 记忆主题
  localStorage.setItem("theme", themeName);
}

// 多标签同步
window.addEventListener("storage", (e) => {
  if (e.key === "theme") {
    setTheme(e.newValue);
  }
});