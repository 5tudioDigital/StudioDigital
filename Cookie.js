var Webflow = Webflow || [];

function getCookie(e) {
    for (var t = e + "=", o = document.cookie.split(";"), c = 0; c < o.length; c++) {
        for (var n = o[c];
            " " == n.charAt(0);) n = n.substring(1, n.length);
        if (0 == n.indexOf(t)) return n.substring(t.length, n.length)
    }
    return null
}

function setCookie(e, t, o) {
    var c = "";
    if (o) {
        var n = new Date;
        n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3), c = "; expires=" + n.toUTCString()
    }
    document.cookie = e + "=" + (t || "") + c + "; path=/"
};

    
document.getElementById("consentBtn").onclick = function () {
    setCookie("CB", "true", 30), checkSettings()
};
    
    
document.getElementById("DeleteCookies").onclick = function () {
    deletecookies()
};
    
document.getElementById("NoCookies").onclick = function () {
    nocookies()
}; 
    


var GA_cookie = getCookie("GA_DS"),
    FB_cookie = getCookie("FB_DS"),
    GR_cookie = getCookie("GR_DS"),
    alreadyLoaded = "true" === getCookie("CB");


function checkSettings() {
    document.getElementById("GA_Check").checked ? setCookie("GA_DS", "true", 999) : setCookie("GA_DS", "false", 999), 
    document.getElementById("FB_Check").checked ? setCookie("FB_DS", "true", 999) : setCookie("FB_DS", "false", 999), 
    document.getElementById("GR_Check").checked ? setCookie("GR_DS", "true", 999) : setCookie("GR_DS", "false", 999), 
    location.reload()
};


function deletecookies() {
    for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
        var o = e[t].split("=");
        document.cookie = o[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;"
    }
    setCookie("CB", "false", 30);
    localStorage.clear();
    location.reload();
};


function nocookies() {
    deletecookies(), 
    setCookie("FB_DS", "false", 999), 
    setCookie("GA_DS", "false", 999), 
    setCookie("GR_DS", "false", 999), 
    setCookie("NOCO", "true", 30), 
    setCookie("CB", "true", 30)
    location.reload()
};



"true" == GA_cookie && (document.getElementById("GA_Check").checked = !0), 
"true" == FB_cookie && (document.getElementById("FB_Check").checked = !0), 
"true" == GR_cookie && (document.getElementById("GR_Check").checked = !0), 
    
    
"false" == GA_cookie && (document.getElementById("GA_Check").checked = !1), 
"false" == FB_cookie && (document.getElementById("FB_Check").checked = !1), 
"false" == GR_cookie && (document.getElementById("GR_Check").checked = !1), 

                                                                               
    GA_cookie || (document.getElementById("GA_Check").checked = !0), 
    FB_cookie || (document.getElementById("FB_Check").checked = !0), 
    GR_cookie || (document.getElementById("GR_Check").checked = !0), 
    

    alreadyLoaded ? console.log("Cookie Banner Shown") : $('#CookieButton').click(); 
