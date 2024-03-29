/*!
 * 2Click-Iframe-Privacy v0.3.0
 * https://github.com/01-Scripts/2Click-Iframe-Privacy
 * 
 * Licensed MIT © 2018-2019 Michael Lorer - https://www.01-scripts.de/
 */
var _2ClickIframePrivacy = new function() {
    function e(e, n, i) {
        var t = new Date;
        t.setTime(t.getTime() + 864e5 * i), document.cookie = e + "=" + n + ";path=/;expires=" + t.toGMTString()
    }

    function n(e, n) {
        document.cookie = e + "=" + n + ";path=/"
    }

    function t(e) {
        var n = document.cookie.match("(^|;) ?" + e + "=([^;]*)(;|$)");
        return n ? n[2] : null
    }

    function r(e, n, i, t) {
        e.parentNode.insertBefore(n, e),
        n.className = "privacy-msg privacy-" + i + "-msg", n.style.width = e.clientWidth + "px", n.style.height = e.clientHeight + "px", 
        n.innerHTML = t + '<a href="#foo" onclick="_2ClickIframePrivacy.EnableContent(\'' + i + "'); return false;\">" + 
        o.showContentLabel + "</a>", 
        o.enableCookies, 
        o.privacyPolicyUrl && (n.innerHTML = n.innerHTML + '<br /><a href="' + o.privacyPolicyUrl + '">' + o.privacyPolicyLabel + "</a>"), n.innerHTML = "<p>" + n.innerHTML + "</p>", n.appendChild(e)
    }
    var o = {
        enableCookies: !0,
        useSessionCookie: !0,
        cookieNamespace: "_2ClickIPEnable-",
        showContentLabel: "Karte anzeigen",
        rememberChoiceLabel: "Auswahl merken",
        privacyPolicyLabel: "Datenschutzerklärung",
        privacyPolicyUrl: !1
    };
    this.types = new Array({
        type: "video",
        description: "Zum Aktivieren des Videos bitte auf den Link klicken. Durch das Aktivieren von eingebetteten Videos werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können unserer Datenschutzerklärung entnommen werden.<br />"
    }, {
        type: "map",
        description: "Zum Aktivieren der eingebetteten Karte bitte auf den Link klicken. Durch das Aktivieren werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können unserer Datenschutzerklärung entnommen werden.<br />"
    }, {
        type: "calendar",
        description: "Zum Aktivieren des eingebetteten Kalenders bitte auf den Link klicken. Durch das Aktivieren werden Daten an den jeweiligen Anbieter übermittelt. Weitere Informationen können unserer Datenschutzerklärung entnommen werden.<br />"
    }), this.EnableContent = function(i) {
        document.cookie=("_2ClickIPEnable-map=1");
               var t;
        if (o.enableCookies) {
            var r = !1,
                a = document.querySelectorAll("div.privacy-" + i + "-msg p input");
            for (t = 0; t < a.length; t++) 1 == a[t].checked && (r = !0);
            r && (o.useSessionCookie ? n(o.cookieNamespace + i, "1") : e(o.cookieNamespace + i, "1", 30))
        }
        var a = document.querySelectorAll("div.privacy-" + i + "-msg p");
        for (t = 0; t < a.length; t++) a[t].parentNode.removeChild(a[t]);
        for (a = document.querySelectorAll("div.privacy-" + i + "-msg"), t = 0; t < a.length; t++) {
            for (var c = a[t].parentNode; a[t].firstChild;) c.insertBefore(a[t].firstChild, a[t]);
            c.removeChild(a[t])
        }
        for (a = document.querySelectorAll('iframe[data-2click-type="' + i + '"]'), t = 0; t < a.length; t++) a[t].src = a[t].getAttribute("data-src");
        for (t = 0; t < this.types.length; t++) this.types[t].type == i && this.types[t].callback && window[this.types[t].callback]()
    }, this.init = function(e) {
        for ("undefined" != typeof e.enableCookies && (o.enableCookies = e.enableCookies), "undefined" != typeof e.useSessionCookie && (o.useSessionCookie = e.useSessionCookie), "undefined" != typeof e.cookieNamespace && (o.cookieNamespace = e.cookieNamespace), "undefined" != typeof e.privacyPolicyUrl && (o.privacyPolicyUrl = e.privacyPolicyUrl), "undefined" != typeof e.showContentLabel && (o.showContentLabel = e.showContentLabel), "undefined" != typeof e.rememberChoiceLabel && (o.rememberChoiceLabel = e.rememberChoiceLabel), "undefined" != typeof e.privacyPolicyLabel && (o.privacyPolicyLabel = e.privacyPolicyLabel), Array.isArray(e.CustomTypes) && (this.types = e.CustomTypes), i = 0; i < this.types.length; i++) {
            var n, a = document.querySelectorAll('iframe[data-2click-type="' + this.types[i].type + '"]');
            if (t(o.cookieNamespace + this.types[i].type))
                for (n = 0; n < a.length; n++) a[n].src = a[n].getAttribute("data-src");
            else
                for (n = 0; n < a.length; n++) r(a[n], document.createElement("div"), this.types[i].type, this.types[i].description)
        }
    }
};