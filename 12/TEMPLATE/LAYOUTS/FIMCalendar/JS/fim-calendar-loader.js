// Conditionally Load jQuery (javascript)
// Source: https://gist.github.com/gists/902090/

var initDatePicker, maybeLoadJq;

initDatePicker = function () {
    jQuery(document).ready(function () {

        // The following scripts must be loaded in the order shown
        var scripts = [
            "/_layouts/FIMCalendar/JS/jquery-ui-datepicker.js",
            "/_layouts/FIMCalendar/JS/jquery-ui-datepicker-localization.js",
            "/_layouts/FIMCalendar/JS/jquery-ui-timepicker-addon.js",
            "/_layouts/FIMCalendar/JS/fim-calendar.js"];

        LoadScriptsSync(scripts);
    });
};


// Loads jQuery if its not already loaded, followed by the datapicker scripts. Otherwise if jQuery is already loaded, immediately load the datepicker controls
maybeLoadJq = function () {
    if (!(typeof jQuery !== "undefined" && jQuery !== null)) {
        loadScript("/_layouts/FIMCalendar/JS/jquery.js", initDatePicker);
    } else {
        return initDatePicker();
    }
};

// Loads the specified scripts in order
function LoadScriptsSync(scripts) {
    var x = 0;

    var loopArray = function (scripts) {
        // call itself
        loadScript(scripts[x], function () {
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

// Attach events to call the conditional jQuery loader
if (window.addEventListener) {
    window.addEventListener('load', maybeLoadJq, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', maybeLoadJq);
}