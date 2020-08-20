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
}

    
document.getElementById("consentBtn").onclick = function () {
    window.localStorage.setItem("CB", "true"), checkSettings()
}, 
    
document.getElementById("consentBtnCheck").onclick = function () {
    window.localStorage.setItem("CB", "true"), checkSettings()
}, 
    
document.getElementById("DeleteCookies").onclick = function () {
    deletecookies()
}, 
    
document.getElementById("NoCookies").onclick = function () {
    nocookies()
}, 
    
document.getElementById("NoCookiesSettings").onclick = function () {
    nocookies()
};


var GA_cookie = getCookie("GA_DS"),
    FB_cookie = getCookie("FB_DS"),
    HJ_cookie = getCookie("HJ_DS"),
    GR_cookie = getCookie("GR_DS"),
    alreadyLoaded = "true" === window.localStorage.getItem("CB");


function checkSettings() {
    document.getElementById("GA_Check").checked ? setCookie("GA_DS", "true", 999) : setCookie("GA_DS", "false", 999), 
    document.getElementById("FB_Check").checked ? setCookie("FB_DS", "true", 999) : setCookie("FB_DS", "false", 999), 
    document.getElementById("HJ_Check").checked ? setCookie("HJ_DS", "true", 999) : setCookie("HJ_DS", "false", 999), 
    document.getElementById("GR_Check").checked ? setCookie("GR_DS", "true", 999) : setCookie("GR_DS", "false", 999), 
    location.reload()
}


function deletecookies() {
    for (var e = document.cookie.split(";"), t = 0; t < e.length; t++) {
        var o = e[t].split("=");
        document.cookie = o[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;"
    }
    
    localStorage.clear(), 
    location.reload()
}


function nocookies() {
    deletecookies(), 
    setCookie("FB_DS", "false", 999), 
    setCookie("HJ_DS", "false", 999), 
    setCookie("GA_DS", "false", 999), 
    setCookie("GR_DS", "false", 999), 
    setCookie("NOCO", "true", 999), 
    window.localStorage.setItem("CB", "true"), 
    location.reload()
}



"true" == GA_cookie && (document.getElementById("GA_Check").checked = !0), 
"true" == FB_cookie && (document.getElementById("FB_Check").checked = !0), 
"true" == HJ_cookie && (document.getElementById("HJ_Check").checked = !0), 
"true" == GR_cookie && (document.getElementById("GR_Check").checked = !0), 
    
    
"false" == GA_cookie && (document.getElementById("GA_Check").checked = !1), 
"false" == FB_cookie && (document.getElementById("FB_Check").checked = !1), 
"false" == HJ_cookie && (document.getElementById("HJ_Check").checked = !1), 
"false" == GR_cookie && (document.getElementById("GR_Check").checked = !1), 

                                                                               
    GA_cookie || (document.getElementById("GA_Check").checked = !0), 
    FB_cookie || (document.getElementById("FB_Check").checked = !0), 
    HJ_cookie || (document.getElementById("HJ_Check").checked = !0), 
    GR_cookie || (document.getElementById("GR_Check").checked = !0), 
    

alreadyLoaded ? document.getElementById("consentPopup").style.display = "none" : (document.getElementById("consentPopup").style.display = "block") 


Webflow.push(function () {
    var e, t = !1,
        o = function () {
            e = setTimeout(function () {
                if ($(window).scrollTop() > 450) setTimeout(o, 10500);
                else {
                    var e = $(".tabs_menu").children(".w--current:first").next();
                    e.length ? e.click() : $(".tab_link:first").click()
                }
            }, 10500)
        };
    
    
    $(".tab_link").click(function (t) {
        clearTimeout(e), t.originalEvent || o(), t.originalEvent && setTimeout(function () {
            var e, t = document.querySelector(".tab_link.w-inline-block.w-tab-link.w--current"),
                o = document.querySelectorAll(".tab_link.w-inline-block.w-tab-link"),
                c = window.innerWidth || document.documentElement.clientWidth;
            for (e = 0; e < o.length; e++) o[e].style.borderColor = c > 767 ? "#BFC5C7" : "#415059";
            t.style.borderColor = c > 767 ? "#001721" : "#FFF"
        }, 1)
    }), t || (t = !0, o())}) 

$(".termin").on("click", function (e) {
    $("#CTA").triggerHandler("click"), e.preventDefault()}), 

$(".more_background.click.w-inline-block").on("click", function (e) {
    $("#CTA").triggerHandler("click"), e.preventDefault()}), 
    
$("#Termin").on("click", function (e) {
    $("#CTA").triggerHandler("click"), e.preventDefault()}), 
    
$("#Kontakt_Button").on("click", function (e) {
    $("#CTA_Kontakt").triggerHandler("click"), e.preventDefault()
}), 


document.querySelectorAll(".navigation_link.w-inline-block.w--current .activedot").forEach(e => {e.style.opacity = .5}), 
document.getElementById("Kontakt_Button").addEventListener("click", callback, !0);

function callback() {
    return document.getElementById("Navigation").click(), !1
}

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TQCM7D4');
