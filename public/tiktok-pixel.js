!(function (w, d, t) {
  w.TiktokAnalyticsObject = t;
  var ttq = (w[t] = w[t] || []);
  ttq.methods = [
    "page",
    "track",
    "identify",
    "instances",
    "debug",
    "on",
    "off",
    "once",
    "ready",
    "alias",
    "group",
    "enableCookie",
    "disableCookie",
    "holdConsent",
    "revokeConsent",
    "grantConsent",
  ];
  ttq.setAndDefer = function (obj, method) {
    obj[method] = function () {
      obj.push([method].concat(Array.prototype.slice.call(arguments, 0)));
    };
  };
  for (var i = 0; i < ttq.methods.length; i++) {
    ttq.setAndDefer(ttq, ttq.methods[i]);
  }
  ttq.instance = function (id) {
    var inst = ttq._i[id] || [];
    for (var i = 0; i < ttq.methods.length; i++) {
      ttq.setAndDefer(inst, ttq.methods[i]);
    }
    return inst;
  };
  ttq.load = function (id, opts) {
    var url = "https://analytics.tiktok.com/i18n/pixel/events.js";
    ttq._i = ttq._i || {};
    ttq._i[id] = [];
    ttq._i[id]._u = url;
    ttq._t = ttq._t || {};
    ttq._t[id] = +new Date();
    ttq._o = ttq._o || {};
    ttq._o[id] = opts || {};
    var scriptElem = d.createElement("script");
    scriptElem.type = "text/javascript";
    scriptElem.async = true;
    scriptElem.src = url + "?sdkid=" + id + "&lib=" + t;
    var firstScript = d.getElementsByTagName("script")[0];
    firstScript.parentNode.insertBefore(scriptElem, firstScript);
  };

  ttq.load("D489R3RC77UABSR4TMO0");
  ttq.page();
})(window, document, "ttq");
