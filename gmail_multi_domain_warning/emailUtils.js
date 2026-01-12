window.EmailUtils = {

  /**
   * メールアドレス配列からドメイン一覧を取得する
   * @param {string[]} emails
   * @returns {string[]} 重複を除いたドメイン配列
   */
  getDomains(emails) {
    return [...new Set(
      emails.map(e => e.split("@")[1])
    )];
  },

  /**
   * ドメイン配列から比較用キーを生成する
   * @param {string[]} domains
   * @returns {string}
   */
  makeDomainKey(domains) {
    return domains.sort().join(",");
  },

  /**
   * 複数ドメインが含まれているか判定する
   * @param {string[]} emails
   * @returns {boolean}
   */
  hasMultipleDomains(emails) {
    return this.getDomains(emails).length >= 2;
  },
};
