function switchDarkMode(){"light"===("dark"===document.documentElement.getAttribute("data-theme")?"dark":"light")?(activateDarkMode(),saveToLocal.set("theme","dark",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),saveToLocal.set("theme","light",2),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),"function"==typeof utterancesTheme&&utterancesTheme(),"object"==typeof FB&&window.loadFBComment(),window.DISQUS&&document.getElementById("disqus_thread").children.length&&setTimeout((()=>window.disqusReset()),200)}var bywind={hideTodayCard:function(){document.getElementById("todayCard")&&document.getElementById("todayCard").classList.add("hide")}};function whenDOMReady(){initEssay()}function initEssay(){if(document.querySelector("#essay-mini")){new Swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,pauseOnMouseEnter:!0}})}}$(".topGroup").hover((function(){}),(function(){document.getElementById("todayCard").classList.remove("hide"),document.getElementById("todayCard").style.zIndex=1})),whenDOMReady(),document.addEventListener("pjax:complete",whenDOMReady);