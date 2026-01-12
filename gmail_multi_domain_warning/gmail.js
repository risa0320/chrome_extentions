window.GmailUtils = {

  /**
   * Gmailの宛先欄からメールアドレスを取得する
   * @returns {string[]}
   */
  getEmailAddresses() {
    return Array.from(
      document.querySelectorAll('div[role="option"][data-hovercard-id]')
    )
      .map(el => el.getAttribute("data-hovercard-id"))
      .filter(email => email.includes("@"));
  },

  /**
   * 宛先入力欄の親コンテナを取得する
   * @returns {HTMLElement|null}
   */
  getRecipientContainer() {
    const option = document.querySelector(
      'div[role="option"][data-hovercard-id]'
    );
    if (!option) return null;

    return option.closest('div[role="listbox"]')?.parentElement;
  },
};
