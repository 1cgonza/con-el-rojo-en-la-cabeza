/*!
 * FitText.js 1.0 jQuery free version
 *
 * Copyright 2011, Dave Rupert http://daverupert.com
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 * Modified by Slawomir Kolodziej http://slawekk.info
 *
 * Date: Tue Aug 09 2011 10:45:54 GMT+0200 (CEST)
 */

export default (el, kompressor) => {
  const settings = {
    minFontSize: -1 / 0,
    maxFontSize: 1 / 0
  };

  function fit(el) {
    const compressor = kompressor || 1;

    el.style.fontSize =
      Math.max(
        Math.min(el.clientWidth / (compressor * 10), parseFloat(settings.maxFontSize)),
        parseFloat(settings.minFontSize)
      ) + 'px';
  }

  if (el.length) for (let i = 0; i < el.length; i++) fit(el[i]);
  else fit(el);

  return el;
};
