function injectCSS(file) {
  if (document.getElementById("domain-warning-css")) return;

  const link = document.createElement("link");
  link.id = "domain-warning-css";
  link.rel = "stylesheet";
  link.href = chrome.runtime.getURL(file);
  document.head.appendChild(link);
}

window.WarningUI = (() => {
  let templateHTML = null;

  /**
   * HTMLテンプレートを読み込む
   */
  async function loadTemplate() {
    if (templateHTML) return templateHTML;

    const response = await fetch(
      chrome.runtime.getURL("ui/warning.html")
    );
    templateHTML = await response.text();
    return templateHTML;
  }

  /**
   * 警告UIを表示する
   * @param {string[]} domains
   * @param {() => void} onAcknowledge
   */
  async function showWarning(domains, onAcknowledge) {
    injectCSS("ui/warning.css");

    let el = document.getElementById("domain-warning");
    if (!el) {
      const html = await loadTemplate();
      const wrapper = document.createElement("div");
      wrapper.innerHTML = html;
      el = wrapper.firstElementChild;
      document.body.appendChild(el);
    }
    el.querySelector(".domain-warning__domains").textContent = domains.join(", \n");
    el.querySelector(".domain-warning__ok").onclick = () => {
      onAcknowledge?.();
      el.remove();
    };
  }

  /**
   * 警告UIを削除する
   */
  function removeWarning() {
    document.getElementById("domain-warning")?.remove();
  }

  return {
    showWarning,
    removeWarning,
  };
})();
