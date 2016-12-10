// Conditionally Load jQuery (javascript)
// Source: https://gist.github.com/gists/902090/

//var initDatePicker, initLocalization, initDatePickerAddons, maybeLoadJq;
var initDatePicker, maybeLoadJq;

initDatePicker = function () {
    jQuery(document).ready(function () {

        var scripts = [
            "/_layouts/FIMCalendar/JS/jquery-ui-datepicker.js",
            "/_layouts/FIMCalendar/JS/jquery-ui-datepicker-localization.js",
            "/_layouts/FIMCalendar/JS/jquery-ui-timepicker-addon.js",
            "/_layouts/FIMCalendar/JS/fim-calendar.js"];

        LoadScriptsSync(scripts);

        //registerScript("/_layouts/FIMCalendar/JS/jquery-ui-datepicker.js", initLocalization);
    });
};

//initLocalization = function () {
//    jQuery(document).ready(function () {
//        registerScript("/_layouts/FIMCalendar/JS/jquery-ui-datepicker-localization.js", initDatePickerAddons);
//    });
//};

//initDatePickerAddons = function () {
//    jQuery(document).ready(function () {

//        var scripts = [
//            "/_layouts/FIMCalendar/JS/jquery-ui-timepicker-addon.js",
//            "/_layouts/FIMCalendar/JS/fim-calendar.js"
//        ];

//        for (var i = 0; i < scripts.length; i++) {
//            registerScript(scripts[i]);
//        }
//    });
//};

maybeLoadJq = function () {
    if (!(typeof jQuery !== "undefined" && jQuery !== null)) {
        loadScript("/_layouts/FIMCalendar/JS/jquery.js", initDatePicker);
    } else {
        return initDatePicker();
    }
};

function LoadScriptsSync(scripts) {

    var x = 0;

    var loopArray = function (scripts) {
        // call itself
        loadScript(scripts[x], function () {
            // set x to next item
            x++;
            // any more items in array?
            if (x < scripts.length) {
                loopArray(scripts);
            }
        });
    }

    loopArray(scripts);
}

// load script function with callback to handle synchronicity 
function loadScript(src, callback) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.onload = script.onreadystatechange = callback;
    script.src = src;
    document.body.appendChild(script);
}

//registerScript = function (script) {
//    var jQ = document.createElement('script');
//    jQ.type = 'text/javascript';
//    jQ.src = script;
//    document.body.appendChild(jQ);
//}

//registerScript = function (script, onload) {
//    var jQ = document.createElement('script');
//    jQ.type = 'text/javascript';
//    jQ.onload = jQ.onreadystatechange = onload;
//    jQ.src = script;
//    document.body.appendChild(jQ);
//}

if (window.addEventListener) {
    window.addEventListener('load', maybeLoadJq, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', maybeLoadJq);
}