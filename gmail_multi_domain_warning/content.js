console.log("Gmail Domain Warning loaded");

let lastDomainKey = null;
let acknowledgedDomainKey = null;
let lastNotifiedKey = null;


const observer = new MutationObserver(() => {
  const emails = GmailUtils.getEmailAddresses();
  if (emails.length === 0) {
    WarningUI.removeWarning();
    lastDomainKey = null;
    lastNotifiedKey = null;
    return;
  }

  const domains = EmailUtils.getDomains(emails);
  const domainKey = EmailUtils.makeDomainKey(domains);
  const hasMultiple = EmailUtils.hasMultipleDomains(emails);

  if (domainKey === lastNotifiedKey) {
    return;
  }

  lastDomainKey = domainKey;

  if (
    hasMultiple &&
    domainKey !== acknowledgedDomainKey
  ) {
    WarningUI.showWarning(domains, () => {
      acknowledgedDomainKey = lastDomainKey;
    });
    lastNotifiedKey = domainKey;
  } else {
    WarningUI.removeWarning();
    lastNotifiedKey = null;
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});
