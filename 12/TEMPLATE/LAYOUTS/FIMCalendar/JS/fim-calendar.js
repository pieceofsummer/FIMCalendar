function SetupDatePickers() 
{
	$("input[type='text'][id$='_internalDateTimeEditor']").datepicker({
		changeMonth: true,
		changeYear: true,
		showOtherMonths: true, 
		selectOtherMonths: true
	});
}

function GetUserLanguage()
{
	var localeMap = { 1: 'ar', 2: 'bg', 3: 'ca', 4: 'zh-CHS', 5: 'cs', 6: 'da', 7: 'de', 8: 'el', 9: 'en', 
	10: 'es', 11: 'fi', 12: 'fr', 13: 'he', 14: 'hu', 15: 'is', 16: 'it', 17: 'ja', 18: 'ko', 19: 'nl', 
	20: 'no', 21: 'pl', 22: 'pt', 24: 'ro', 25: 'ru', 26: 'hr', 27: 'sk', 28: 'sq', 29: 'sv', 30: 'th', 
	31: 'tr', 32: 'ur', 33: 'id', 34: 'uk', 35: 'be', 36: 'sl', 37: 'et', 38: 'lv', 39: 'lt', 41: 'fa', 
	42: 'vi', 43: 'hy', 44: 'az', 45: 'eu', 47: 'mk', 54: 'af', 55: 'ka', 56: 'fo', 57: 'hi', 62: 'ms', 
	63: 'kk', 64: 'ky', 65: 'sw', 67: 'uz', 68: 'tt', 70: 'pa', 71: 'gu', 73: 'ta', 74: 'te', 75: 'kn', 
	78: 'mr', 79: 'sa', 80: 'mn', 86: 'gl', 87: 'kok', 90: 'syr', 101: 'dv', 1025: 'ar-SA', 1026: 'bg-BG', 
	1027: 'ca-ES', 1028: 'zh-TW', 1029: 'cs-CZ', 1030: 'da-DK', 1031: 'de-DE', 1032: 'el-GR', 1033: 'en-US', 
	1035: 'fi-FI', 1036: 'fr-FR', 1037: 'he-IL', 1038: 'hu-HU', 1039: 'is-IS', 1040: 'it-IT', 1041: 'ja-JP', 
	1042: 'ko-KR', 1043: 'nl-NL', 1044: 'nb-NO', 1045: 'pl-PL', 1046: 'pt-BR', 1047: 'rm-CH', 1048: 'ro-RO', 
	1049: 'ru-RU', 1050: 'hr-HR', 1051: 'sk-SK', 1052: 'sq-AL', 1053: 'sv-SE', 1054: 'th-TH', 1055: 'tr-TR', 
	1056: 'ur-PK', 1057: 'id-ID', 1058: 'uk-UA', 1059: 'be-BY', 1060: 'sl-SI', 1061: 'et-EE', 1062: 'lv-LV', 
	1063: 'lt-LT', 1065: 'fa-IR', 1066: 'vi-VN', 1067: 'hy-AM', 1068: 'az-AZ', 1069: 'eu-ES', 1070: 'hsb-DE', 
	1071: 'mk-MK', 1074: 'tn-ZA', 1076: 'xh-ZA', 1077: 'zu-ZA', 1078: 'af-ZA', 1079: 'ka-GE', 1080: 'fo-FO', 
	1081: 'hi-IN', 1082: 'mt-MT', 1083: 'se-NO', 1086: 'ms-MY', 1087: 'kk-KZ', 1088: 'ky-KG', 1089: 'sw-KE', 
	1090: 'tk-TM', 1091: 'uz-UZ', 1092: 'tt-RU', 1093: 'bn-IN', 1094: 'pa-IN', 1095: 'gu-IN', 1096: 'or-IN', 
	1097: 'ta-IN', 1098: 'te-IN', 1099: 'kn-IN', 1100: 'ml-IN', 1101: 'as-IN', 1102: 'mr-IN', 1103: 'sa-IN', 
	1104: 'mn-MN', 1105: 'bo-CN', 1106: 'cy-GB', 1107: 'km-KH', 1108: 'lo-LA', 1110: 'gl-ES', 1111: 'kok-IN', 
	1114: 'syr-SY', 1115: 'si-LK', 1117: 'iu-CA', 1118: 'am-ET', 1121: 'ne-NP', 1122: 'fy-NL', 1123: 'ps-AF', 
	1124: 'fil-PH', 1125: 'dv-MV', 1128: 'ha-NG', 1130: 'yo-NG', 1131: 'quz-BO', 1132: 'nso-ZA', 1133: 'ba-RU', 
	1134: 'lb-LU', 1135: 'kl-GL', 1136: 'ig-NG', 1144: 'ii-CN', 1146: 'arn-CL', 1148: 'moh-CA', 1150: 'br-FR', 
	1152: 'ug-CN', 1153: 'mi-NZ', 1154: 'oc-FR', 1155: 'co-FR', 1156: 'gsw-FR', 1157: 'sah-RU', 1158: 'qut-GT', 
	1159: 'rw-RW', 1160: 'wo-SN', 1164: 'prs-AF', 1169: 'gd-GB', 2049: 'ar-IQ', 2052: 'zh-CN', 2055: 'de-CH', 
	2057: 'en-GB', 2058: 'es-MX', 2060: 'fr-BE', 2064: 'it-CH', 2067: 'nl-BE', 2068: 'nn-NO', 2070: 'pt-PT', 
	2074: 'sr-CS', 2077: 'sv-FI', 2092: 'az-AZ', 2094: 'dsb-DE', 2107: 'se-SE', 2108: 'ga-IE', 2110: 'ms-BN', 
	2115: 'uz-UZ', 2117: 'bn-BD', 2128: 'mn-CN', 2141: 'iu-CA', 2143: 'tzm-DZ', 2155: 'quz-EC', 3073: 'ar-EG', 
	3076: 'zh-HK', 3079: 'de-AT', 3081: 'en-AU', 3082: 'es-ES', 3084: 'fr-CA', 3098: 'sr-CS', 3131: 'se-FI', 
	3179: 'quz-PE', 4097: 'ar-LY', 4100: 'zh-SG', 4103: 'de-LU', 4105: 'en-CA', 4106: 'es-GT', 4108: 'fr-CH', 
	4122: 'hr-BA', 4155: 'smj-NO', 5121: 'ar-DZ', 5124: 'zh-MO', 5127: 'de-LI', 5129: 'en-NZ', 5130: 'es-CR', 
	5132: 'fr-LU', 5146: 'bs-BA', 5179: 'smj-SE', 6145: 'ar-MA', 6153: 'en-IE', 6154: 'es-PA', 6156: 'fr-MC', 
	6170: 'sr-BA', 6203: 'sma-NO', 7169: 'ar-TN', 7177: 'en-ZA', 7178: 'es-DO', 7194: 'sr-BA', 7227: 'sma-SE', 
	8193: 'ar-OM', 8201: 'en-JM', 8202: 'es-VE', 8218: 'bs-BA', 8251: 'sms-FI', 9217: 'ar-YE', 9225: 'en-029', 
	9226: 'es-CO', 9242: 'sr-RS', 9275: 'smn-FI', 10241: 'ar-SY', 10249: 'en-BZ', 10250: 'es-PE', 10266: 'sr-RS', 
	11265: 'ar-JO', 11273: 'en-TT', 11274: 'es-AR', 11290: 'sr-ME', 12289: 'ar-LB', 12297: 'en-ZW', 12298: 'es-EC', 
	12314: 'sr-ME', 13313: 'ar-KW', 13321: 'en-PH', 13322: 'es-CL', 14337: 'ar-AE', 14346: 'es-UY', 15361: 'ar-BH', 
	15370: 'es-PY', 16385: 'ar-QA', 16393: 'en-IN', 16394: 'es-BO', 17417: 'en-MY', 17418: 'es-SV', 18441: 'en-SG', 
	18442: 'es-HN', 19466: 'es-NI', 20490: 'es-PR', 21514: 'es-US', 31748: 'zh-CHT', 31770: 'sr' };

	var lcid = window.LCID;

	var locale = ((lcid in localeMap) ? localeMap[lcid] : navigator.userLanguage).toLowerCase();

	if (locale == 'en-us')
 return '';


	var l = locale.split('-');
	if (l.length == 1)

	{
		if (jQuery.datepicker.regional[l[0]] != undefined) return l[0];
	}

	else if (l.length > 1)
	{

		if ($.datepicker.regional[l[0] + '-' + l[1].toUpperCase()] != undefined) 
			return l[0] + '-' + l[1].toUpperCase();
		if ($.datepicker.regional[l[0]] != undefined)
			return l[0];
	}


	return '';
}
 

$(document).ready(function() 
{
	var host = window.dialogArguments ? window.dialogArguments.window : null;
	if (host) {
		// we're in a dialog window, read LCID from parent
		window.LCID = host.LCID;
	} else if (typeof(L_Menu_LCID) != "undefined") {
		// we're in a main page
		window.LCID = parseInt(L_Menu_LCID);
	} else {
		// fairytale gone bad
		window.LCID = undefined;
	}
		
	$.datepicker.setDefaults($.datepicker.regional[GetUserLanguage()]);

	var uoc = $("a[name='mainContent'] ~ span > span:last");
	if (uoc.length == 1)
	{
		uoc[0].attachEvent("onpropertychange", function(e) 
		{
			if (e.propertyName == "asyncStatus" && e.srcElement.asyncStatus == "done") 
				SetupDatePickers();
		});
		SetupDatePickers();
	}
});                                                                                                                                                                