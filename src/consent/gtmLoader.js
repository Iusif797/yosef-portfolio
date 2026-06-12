const GTM_ID = 'GTM-WBBZGGTS';

export function injectGtm() {
  if (typeof window === 'undefined' || window.__portfolioGtmLoaded) return;
  window.__portfolioGtmLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
  const ns = document.createElement('noscript');
  ns.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden" title=""></iframe>`;
  document.body.insertBefore(ns, document.body.firstChild);
}
