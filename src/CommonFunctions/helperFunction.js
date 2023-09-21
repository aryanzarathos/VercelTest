import moment from "moment";
import React from 'react'
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
export const convertToIndianFormat = (val) => {
    let resp = '';
    let prev = 0;
    let curr = 3;
    let out = [];
    if (val || val == 0) {
        resp = val.toString().split('').reverse();
        if (resp.length >= 3) {
            while (curr <= resp.length + 1) {
                const str = resp.slice(prev, curr);
                out = [...out, ...str, ','];
                prev = curr;
                curr = curr + 2;
            }
            out = out.reverse()
            out = out.join("").substring(1);
            return out;
        }
    }
    return val;
}
export const addDaysWork = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return moment(result).format("lll")
}
export const addDaysWorkGMT = (date, days) => {
    let d = new Date(date)
    d.setDate(d.getDate() + days)
    return d
}
export const addDays = (date, days) => {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    let date2 = new Date()
    let pikachu = result.getTime() - date2.getTime()
    var Difference_In_Days = pikachu / (1000 * 3600 * 24)
    return Difference_In_Days;
}

export const renderCheckTrialOnlyDate = (data) => {

    if (data.trialAccount) {
        return addDays(new Date(), data.trialPeriodDays)
    } else {
        return 0
    }
}
export const renderLeftOnlyDate = (data) => {

    if (data.trialAccount) {
        if (Math.round(addDays(data.trialDateStart, data.trialPeriodDays)) <= 0) {
            return 0
        } else {
            return Math.round(addDays(data.trialDateStart, data.trialPeriodDays))

        }
    } else {
        return 0
    }
}
export function getDanamicCalenderDate(date) {
    let day;
    let year;
    let month;
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dd;
    let dates = [];
    if (date.newDate) {
        day = new Date(date.newDate).getDay();
        year = moment(date.newDate).format("yyyy");
        month = moment(date.newDate).format("M");
        dd = new Date(year, month, 0).getDate();
    }
    else {
        day = new Date(date).getDay()
        year = moment(date.newDate).format("yyyy");
        month = moment(date.newDate).format("M");
        dd = new Date(year, month, 0).getDate();
    }
    for (let i = 1; i <= dd; i++) {
        let d = new Date(`${year}-${month}-${i}`);
        d.setHours(d.getHours() + 5);
        d.setMinutes(d.getMinutes() + 30);
        dates.push({ day: days[day], date: i, fullDate: d });
        if (day === 6 || day === "6") {
            day = 0;
        } else {
            day = day + 1;
        }
    }
    return { newDate: date.newDate, Dates: dates };
}

export const getTimeRemaining = (endtime) => {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return {
        days,
        hours,
        minutes,
        seconds
    };
}


export const Timer = (deadline) => {

    const [call, setCall] = useState("");
    const [timer, setTimer] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const getTimeRemaining = (endtime) => {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
        return {
            days,
            hours,
            minutes,
            seconds
        };
    }

    useEffect(() => {
        setTimeout(() => {

            if (call === 60) {
                setCall(0)
                let data = getTimeRemaining(deadline);
                setTimer(data)
            } else if (call === "" || call === 0) {
                setCall(59)
                let data = getTimeRemaining(deadline);
                setTimer(data);
                setCall(data.seconds)
            } else {
                setCall(call - 1)
            }
        }, 1000)
    }, [call, deadline]);

    return (
        <>
            <div>Days: {timer.days}</div>
            <div>hours: {timer.hours}</div>
            <div>min: {timer.minutes}</div>
            <div>sec: {call}</div>
        </>
    )
}


const timezones = {
    "Europe/Andorra": "Andorra",
    "Asia/Dubai": "United Arab Emirates",
    "Asia/Kabul": "Afghanistan",
    "Europe/Tirane": "Albania",
    "Asia/Yerevan": "Armenia",
    "Antarctica/Casey": "Antarctica",
    "Antarctica/Davis": "Antarctica",
    "Antarctica/Mawson": "Antarctica",
    "Antarctica/Palmer": "Antarctica",
    "Antarctica/Rothera": "Antarctica",
    "Antarctica/Troll": "Antarctica",
    "Antarctica/Vostok": "Antarctica",
    "America/Argentina/Buenos_Aires": "Argentina",
    "America/Argentina/Cordoba": "Argentina",
    "America/Argentina/Salta": "Argentina",
    "America/Argentina/Jujuy": "Argentina",
    "America/Argentina/Tucuman": "Argentina",
    "America/Argentina/Catamarca": "Argentina",
    "America/Argentina/La_Rioja": "Argentina",
    "America/Argentina/San_Juan": "Argentina",
    "America/Argentina/Mendoza": "Argentina",
    "America/Argentina/San_Luis": "Argentina",
    "America/Argentina/Rio_Gallegos": "Argentina",
    "America/Argentina/Ushuaia": "Argentina",
    "Pacific/Pago_Pago": "Samoa (American)",
    "Europe/Vienna": "Austria",
    "Australia/Lord_Howe": "Australia",
    "Antarctica/Macquarie": "Australia",
    "Australia/Hobart": "Australia",
    "Australia/Melbourne": "Australia",
    "Australia/Sydney": "Australia",
    "Australia/Broken_Hill": "Australia",
    "Australia/Brisbane": "Australia",
    "Australia/Lindeman": "Australia",
    "Australia/Adelaide": "Australia",
    "Australia/Darwin": "Australia",
    "Australia/Perth": "Australia",
    "Australia/Eucla": "Australia",
    "Asia/Baku": "Azerbaijan",
    "America/Barbados": "Barbados",
    "Asia/Dhaka": "Bangladesh",
    "Europe/Brussels": "Belgium",
    "Europe/Sofia": "Bulgaria",
    "Atlantic/Bermuda": "Bermuda",
    "Asia/Brunei": "Brunei",
    "America/La_Paz": "Bolivia",
    "America/Noronha": "Brazil",
    "America/Belem": "Brazil",
    "America/Fortaleza": "Brazil",
    "America/Recife": "Brazil",
    "America/Araguaina": "Brazil",
    "America/Maceio": "Brazil",
    "America/Bahia": "Brazil",
    "America/Sao_Paulo": "Brazil",
    "America/Campo_Grande": "Brazil",
    "America/Cuiaba": "Brazil",
    "America/Santarem": "Brazil",
    "America/Porto_Velho": "Brazil",
    "America/Boa_Vista": "Brazil",
    "America/Manaus": "Brazil",
    "America/Eirunepe": "Brazil",
    "America/Rio_Branco": "Brazil",
    "Asia/Thimphu": "Bhutan",
    "Europe/Minsk": "Belarus",
    "America/Belize": "Belize",
    "America/St_Johns": "Canada",
    "America/Halifax": "Canada",
    "America/Glace_Bay": "Canada",
    "America/Moncton": "Canada",
    "America/Goose_Bay": "Canada",
    "America/Toronto": "Canada",
    "America/Nipigon": "Canada",
    "America/Thunder_Bay": "Canada",
    "America/Iqaluit": "Canada",
    "America/Pangnirtung": "Canada",
    "America/Winnipeg": "Canada",
    "America/Rainy_River": "Canada",
    "America/Resolute": "Canada",
    "America/Rankin_Inlet": "Canada",
    "America/Regina": "Canada",
    "America/Swift_Current": "Canada",
    "America/Edmonton": "Canada",
    "America/Cambridge_Bay": "Canada",
    "America/Yellowknife": "Canada",
    "America/Inuvik": "Canada",
    "America/Dawson_Creek": "Canada",
    "America/Fort_Nelson": "Canada",
    "America/Whitehorse": "Canada",
    "America/Dawson": "Canada",
    "America/Vancouver": "Canada",
    "Indian/Cocos": "Cocos (Keeling) Islands",
    "Europe/Zurich": "Switzerland",
    "Africa/Abidjan": "Côte d'Ivoire",
    "Pacific/Rarotonga": "Cook Islands",
    "America/Santiago": "Chile",
    "America/Punta_Arenas": "Chile",
    "Pacific/Easter": "Chile",
    "Asia/Shanghai": "China",
    "Asia/Urumqi": "China",
    "America/Bogota": "Colombia",
    "America/Costa_Rica": "Costa Rica",
    "America/Havana": "Cuba",
    "Atlantic/Cape_Verde": "Cape Verde",
    "Indian/Christmas": "Christmas Island",
    "Asia/Nicosia": "Cyprus",
    "Asia/Famagusta": "Cyprus",
    "Europe/Prague": "Czech Republic",
    "Europe/Berlin": "Germany",
    "Europe/Copenhagen": "Denmark",
    "America/Santo_Domingo": "Dominican Republic",
    "Africa/Algiers": "Algeria",
    "America/Guayaquil": "Ecuador",
    "Pacific/Galapagos": "Ecuador",
    "Europe/Tallinn": "Estonia",
    "Africa/Cairo": "Egypt",
    "Africa/El_Aaiun": "Western Sahara",
    "Europe/Madrid": "Spain",
    "Africa/Ceuta": "Spain",
    "Atlantic/Canary": "Spain",
    "Europe/Helsinki": "Finland",
    "Pacific/Fiji": "Fiji",
    "Atlantic/Stanley": "Falkland Islands",
    "Pacific/Chuuk": "Micronesia",
    "Pacific/Pohnpei": "Micronesia",
    "Pacific/Kosrae": "Micronesia",
    "Atlantic/Faroe": "Faroe Islands",
    "Europe/Paris": "France",
    "Europe/London": "Britain (UK)",
    "Asia/Tbilisi": "Georgia",
    "America/Cayenne": "French Guiana",
    "Europe/Gibraltar": "Gibraltar",
    "America/Nuuk": "Greenland",
    "America/Danmarkshavn": "Greenland",
    "America/Scoresbysund": "Greenland",
    "America/Thule": "Greenland",
    "Europe/Athens": "Greece",
    "Atlantic/South_Georgia": "South Georgia & the South Sandwich Islands",
    "America/Guatemala": "Guatemala",
    "Pacific/Guam": "Guam",
    "Africa/Bissau": "Guinea-Bissau",
    "America/Guyana": "Guyana",
    "Asia/Hong_Kong": "Hong Kong",
    "America/Tegucigalpa": "Honduras",
    "America/Port-au-Prince": "Haiti",
    "Europe/Budapest": "Hungary",
    "Asia/Jakarta": "Indonesia",
    "Asia/Pontianak": "Indonesia",
    "Asia/Makassar": "Indonesia",
    "Asia/Jayapura": "Indonesia",
    "Europe/Dublin": "Ireland",
    "Asia/Jerusalem": "Israel",
    "Asia/Kolkata": "India",
    "Asia/Calcutta": "India",
    "Indian/Chagos": "British Indian Ocean Territory",
    "Asia/Baghdad": "Iraq",
    "Asia/Tehran": "Iran",
    "Atlantic/Reykjavik": "Iceland",
    "Europe/Rome": "Italy",
    "America/Jamaica": "Jamaica",
    "Asia/Amman": "Jordan",
    "Asia/Tokyo": "Japan",
    "Africa/Nairobi": "Kenya",
    "Asia/Bishkek": "Kyrgyzstan",
    "Pacific/Tarawa": "Kiribati",
    "Pacific/Kanton": "Kiribati",
    "Pacific/Kiritimati": "Kiribati",
    "Asia/Pyongyang": "Korea (North)",
    "Asia/Seoul": "Korea (South)",
    "Asia/Almaty": "Kazakhstan",
    "Asia/Qyzylorda": "Kazakhstan",
    "Asia/Qostanay": "Kazakhstan",
    "Asia/Aqtobe": "Kazakhstan",
    "Asia/Aqtau": "Kazakhstan",
    "Asia/Atyrau": "Kazakhstan",
    "Asia/Oral": "Kazakhstan",
    "Asia/Beirut": "Lebanon",
    "Asia/Colombo": "Sri Lanka",
    "Africa/Monrovia": "Liberia",
    "Europe/Vilnius": "Lithuania",
    "Europe/Luxembourg": "Luxembourg",
    "Europe/Riga": "Latvia",
    "Africa/Tripoli": "Libya",
    "Africa/Casablanca": "Morocco",
    "Europe/Monaco": "Monaco",
    "Europe/Chisinau": "Moldova",
    "Pacific/Majuro": "Marshall Islands",
    "Pacific/Kwajalein": "Marshall Islands",
    "Asia/Yangon": "Myanmar (Burma)",
    "Asia/Ulaanbaatar": "Mongolia",
    "Asia/Hovd": "Mongolia",
    "Asia/Choibalsan": "Mongolia",
    "Asia/Macau": "Macau",
    "America/Martinique": "Martinique",
    "Europe/Malta": "Malta",
    "Indian/Mauritius": "Mauritius",
    "Indian/Maldives": "Maldives",
    "America/Mexico_City": "Mexico",
    "America/Cancun": "Mexico",
    "America/Merida": "Mexico",
    "America/Monterrey": "Mexico",
    "America/Matamoros": "Mexico",
    "America/Mazatlan": "Mexico",
    "America/Chihuahua": "Mexico",
    "America/Ojinaga": "Mexico",
    "America/Hermosillo": "Mexico",
    "America/Tijuana": "Mexico",
    "America/Bahia_Banderas": "Mexico",
    "Asia/Kuala_Lumpur": "Malaysia",
    "Asia/Kuching": "Malaysia",
    "Africa/Maputo": "Mozambique",
    "Africa/Windhoek": "Namibia",
    "Pacific/Noumea": "New Caledonia",
    "Pacific/Norfolk": "Norfolk Island",
    "Africa/Lagos": "Nigeria",
    "America/Managua": "Nicaragua",
    "Europe/Amsterdam": "Netherlands",
    "Europe/Oslo": "Norway",
    "Asia/Kathmandu": "Nepal",
    "Pacific/Nauru": "Nauru",
    "Pacific/Niue": "Niue",
    "Pacific/Auckland": "New Zealand",
    "Pacific/Chatham": "New Zealand",
    "America/Panama": "Panama",
    "America/Lima": "Peru",
    "Pacific/Tahiti": "French Polynesia",
    "Pacific/Marquesas": "French Polynesia",
    "Pacific/Gambier": "French Polynesia",
    "Pacific/Port_Moresby": "Papua New Guinea",
    "Pacific/Bougainville": "Papua New Guinea",
    "Asia/Manila": "Philippines",
    "Asia/Karachi": "Pakistan",
    "Europe/Warsaw": "Poland",
    "America/Miquelon": "St Pierre & Miquelon",
    "Pacific/Pitcairn": "Pitcairn",
    "America/Puerto_Rico": "Puerto Rico",
    "Asia/Gaza": "Palestine",
    "Asia/Hebron": "Palestine",
    "Europe/Lisbon": "Portugal",
    "Atlantic/Madeira": "Portugal",
    "Atlantic/Azores": "Portugal",
    "Pacific/Palau": "Palau",
    "America/Asuncion": "Paraguay",
    "Asia/Qatar": "Qatar",
    "Indian/Reunion": "Réunion",
    "Europe/Bucharest": "Romania",
    "Europe/Belgrade": "Serbia",
    "Europe/Kaliningrad": "Russia",
    "Europe/Moscow": "Russia",
    "Europe/Simferopol": "Russia",
    "Europe/Kirov": "Russia",
    "Europe/Volgograd": "Russia",
    "Europe/Astrakhan": "Russia",
    "Europe/Saratov": "Russia",
    "Europe/Ulyanovsk": "Russia",
    "Europe/Samara": "Russia",
    "Asia/Yekaterinburg": "Russia",
    "Asia/Omsk": "Russia",
    "Asia/Novosibirsk": "Russia",
    "Asia/Barnaul": "Russia",
    "Asia/Tomsk": "Russia",
    "Asia/Novokuznetsk": "Russia",
    "Asia/Krasnoyarsk": "Russia",
    "Asia/Irkutsk": "Russia",
    "Asia/Chita": "Russia",
    "Asia/Yakutsk": "Russia",
    "Asia/Khandyga": "Russia",
    "Asia/Vladivostok": "Russia",
    "Asia/Ust-Nera": "Russia",
    "Asia/Magadan": "Russia",
    "Asia/Sakhalin": "Russia",
    "Asia/Srednekolymsk": "Russia",
    "Asia/Kamchatka": "Russia",
    "Asia/Anadyr": "Russia",
    "Asia/Riyadh": "Saudi Arabia",
    "Pacific/Guadalcanal": "Solomon Islands",
    "Indian/Mahe": "Seychelles",
    "Africa/Khartoum": "Sudan",
    "Europe/Stockholm": "Sweden",
    "Asia/Singapore": "Singapore",
    "America/Paramaribo": "Suriname",
    "Africa/Juba": "South Sudan",
    "Africa/Sao_Tome": "Sao Tome & Principe",
    "America/El_Salvador": "El Salvador",
    "Asia/Damascus": "Syria",
    "America/Grand_Turk": "Turks & Caicos Is",
    "Africa/Ndjamena": "Chad",
    "Indian/Kerguelen": "French Southern & Antarctic Lands",
    "Asia/Bangkok": "Thailand",
    "Asia/Dushanbe": "Tajikistan",
    "Pacific/Fakaofo": "Tokelau",
    "Asia/Dili": "East Timor",
    "Asia/Ashgabat": "Turkmenistan",
    "Africa/Tunis": "Tunisia",
    "Pacific/Tongatapu": "Tonga",
    "Europe/Istanbul": "Turkey",
    "Pacific/Funafuti": "Tuvalu",
    "Asia/Taipei": "Taiwan",
    "Europe/Kiev": "Ukraine",
    "Europe/Uzhgorod": "Ukraine",
    "Europe/Zaporozhye": "Ukraine",
    "Pacific/Wake": "US minor outlying islands",
    "America/New_York": "United States",
    "America/Detroit": "United States",
    "America/Kentucky/Louisville": "United States",
    "America/Kentucky/Monticello": "United States",
    "America/Indiana/Indianapolis": "United States",
    "America/Indiana/Vincennes": "United States",
    "America/Indiana/Winamac": "United States",
    "America/Indiana/Marengo": "United States",
    "America/Indiana/Petersburg": "United States",
    "America/Indiana/Vevay": "United States",
    "America/Chicago": "United States",
    "America/Indiana/Tell_City": "United States",
    "America/Indiana/Knox": "United States",
    "America/Menominee": "United States",
    "America/North_Dakota/Center": "United States",
    "America/North_Dakota/New_Salem": "United States",
    "America/North_Dakota/Beulah": "United States",
    "America/Denver": "United States",
    "America/Boise": "United States",
    "America/Phoenix": "United States",
    "America/Los_Angeles": "United States",
    "America/Anchorage": "United States",
    "America/Juneau": "United States",
    "America/Sitka": "United States",
    "America/Metlakatla": "United States",
    "America/Yakutat": "United States",
    "America/Nome": "United States",
    "America/Adak": "United States",
    "Pacific/Honolulu": "United States",
    "America/Montevideo": "Uruguay",
    "Asia/Samarkand": "Uzbekistan",
    "Asia/Tashkent": "Uzbekistan",
    "America/Caracas": "Venezuela",
    "Asia/Ho_Chi_Minh": "Vietnam",
    "Pacific/Efate": "Vanuatu",
    "Pacific/Wallis": "Wallis & Futuna",
    "Pacific/Apia": "Samoa (western)",
    "Africa/Johannesburg": "South Africa",
    "America/Antigua": "Antigua & Barbuda",
    "America/Anguilla": "Anguilla",
    "Africa/Luanda": "Angola",
    "Antarctica/McMurdo": "Antarctica",
    "Antarctica/DumontDUrville": "Antarctica",
    "Antarctica/Syowa": "Antarctica",
    "America/Aruba": "Aruba",
    "Europe/Mariehamn": "Åland Islands",
    "Europe/Sarajevo": "Bosnia & Herzegovina",
    "Africa/Ouagadougou": "Burkina Faso",
    "Asia/Bahrain": "Bahrain",
    "Africa/Bujumbura": "Burundi",
    "Africa/Porto-Novo": "Benin",
    "America/St_Barthelemy": "St Barthelemy",
    "America/Kralendijk": "Caribbean NL",
    "America/Nassau": "Bahamas",
    "Africa/Gaborone": "Botswana",
    "America/Blanc-Sablon": "Canada",
    "America/Atikokan": "Canada",
    "America/Creston": "Canada",
    "Africa/Kinshasa": "Congo (Dem. Rep.)",
    "Africa/Lubumbashi": "Congo (Dem. Rep.)",
    "Africa/Bangui": "Central African Rep.",
    "Africa/Brazzaville": "Congo (Rep.)",
    "Africa/Douala": "Cameroon",
    "America/Curacao": "Curaçao",
    "Europe/Busingen": "Germany",
    "Africa/Djibouti": "Djibouti",
    "America/Dominica": "Dominica",
    "Africa/Asmara": "Eritrea",
    "Africa/Addis_Ababa": "Ethiopia",
    "Africa/Libreville": "Gabon",
    "America/Grenada": "Grenada",
    "Europe/Guernsey": "Guernsey",
    "Africa/Accra": "Ghana",
    "Africa/Banjul": "Gambia",
    "Africa/Conakry": "Guinea",
    "America/Guadeloupe": "Guadeloupe",
    "Africa/Malabo": "Equatorial Guinea",
    "Europe/Zagreb": "Croatia",
    "Europe/Isle_of_Man": "Isle of Man",
    "Europe/Jersey": "Jersey",
    "Asia/Phnom_Penh": "Cambodia",
    "Indian/Comoro": "Comoros",
    "America/St_Kitts": "St Kitts & Nevis",
    "Asia/Kuwait": "Kuwait",
    "America/Cayman": "Cayman Islands",
    "Asia/Vientiane": "Laos",
    "America/St_Lucia": "St Lucia",
    "Europe/Vaduz": "Liechtenstein",
    "Africa/Maseru": "Lesotho",
    "Europe/Podgorica": "Montenegro",
    "America/Marigot": "St Martin (French)",
    "Indian/Antananarivo": "Madagascar",
    "Europe/Skopje": "North Macedonia",
    "Africa/Bamako": "Mali",
    "Pacific/Saipan": "Northern Mariana Islands",
    "Africa/Nouakchott": "Mauritania",
    "America/Montserrat": "Montserrat",
    "Africa/Blantyre": "Malawi",
    "Africa/Niamey": "Niger",
    "Asia/Muscat": "Oman",
    "Africa/Kigali": "Rwanda",
    "Atlantic/St_Helena": "St Helena",
    "Europe/Ljubljana": "Slovenia",
    "Arctic/Longyearbyen": "Svalbard & Jan Mayen",
    "Europe/Bratislava": "Slovakia",
    "Africa/Freetown": "Sierra Leone",
    "Europe/San_Marino": "San Marino",
    "Africa/Dakar": "Senegal",
    "Africa/Mogadishu": "Somalia",
    "America/Lower_Princes": "St Maarten (Dutch)",
    "Africa/Mbabane": "Eswatini (Swaziland)",
    "Africa/Lome": "Togo",
    "America/Port_of_Spain": "Trinidad & Tobago",
    "Africa/Dar_es_Salaam": "Tanzania",
    "Africa/Kampala": "Uganda",
    "Pacific/Midway": "US minor outlying islands",
    "Europe/Vatican": "Vatican City",
    "America/St_Vincent": "St Vincent",
    "America/Tortola": "Virgin Islands (UK)",
    "America/St_Thomas": "Virgin Islands (US)",
    "Asia/Aden": "Yemen",
    "Indian/Mayotte": "Mayotte",
    "Africa/Lusaka": "Zambia",
    "Africa/Harare": "Zimbabwe"
}

const countryData = {
    "Afghanistan": {
        "dial_code": "+93",
        "code": "AF"
    },
    "Aland Islands": {
        "dial_code": "+358",
        "code": "AX"
    },
    "Albania": {
        "dial_code": "+355",
        "code": "AL"
    },
    "Algeria": {
        "dial_code": "+213",
        "code": "DZ"
    },
    "AmericanSamoa": {
        "dial_code": "+1684",
        "code": "AS"
    },
    "Andorra": {
        "dial_code": "+376",
        "code": "AD"
    },
    "Angola": {
        "dial_code": "+244",
        "code": "AO"
    },
    "Anguilla": {
        "dial_code": "+1264",
        "code": "AI"
    },
    "Antarctica": {
        "dial_code": "+672",
        "code": "AQ"
    },
    "Antigua and Barbuda": {
        "dial_code": "+1268",
        "code": "AG"
    },
    "Argentina": {
        "dial_code": "+54",
        "code": "AR"
    },
    "Armenia": {
        "dial_code": "+374",
        "code": "AM"
    },
    "Aruba": {
        "dial_code": "+297",
        "code": "AW"
    },
    "Australia": {
        "dial_code": "+61",
        "code": "AU"
    },
    "Austria": {
        "dial_code": "+43",
        "code": "AT"
    },
    "Azerbaijan": {
        "dial_code": "+994",
        "code": "AZ"
    },
    "Bahamas": {
        "dial_code": "+1242",
        "code": "BS"
    },
    "Bahrain": {
        "dial_code": "+973",
        "code": "BH"
    },
    "Bangladesh": {
        "dial_code": "+880",
        "code": "BD"
    },
    "Barbados": {
        "dial_code": "+1246",
        "code": "BB"
    },
    "Belarus": {
        "dial_code": "+375",
        "code": "BY"
    },
    "Belgium": {
        "dial_code": "+32",
        "code": "BE"
    },
    "Belize": {
        "dial_code": "+501",
        "code": "BZ"
    },
    "Benin": {
        "dial_code": "+229",
        "code": "BJ"
    },
    "Bermuda": {
        "dial_code": "+1441",
        "code": "BM"
    },
    "Bhutan": {
        "dial_code": "+975",
        "code": "BT"
    },
    "Bolivia, Plurinational State of": {
        "dial_code": "+591",
        "code": "BO"
    },
    "Bosnia and Herzegovina": {
        "dial_code": "+387",
        "code": "BA"
    },
    "Botswana": {
        "dial_code": "+267",
        "code": "BW"
    },
    "Brazil": {
        "dial_code": "+55",
        "code": "BR"
    },
    "British Indian Ocean Territory": {
        "dial_code": "+246",
        "code": "IO"
    },
    "Brunei Darussalam": {
        "dial_code": "+673",
        "code": "BN"
    },
    "Bulgaria": {
        "dial_code": "+359",
        "code": "BG"
    },
    "Burkina Faso": {
        "dial_code": "+226",
        "code": "BF"
    },
    "Burundi": {
        "dial_code": "+257",
        "code": "BI"
    },
    "Cambodia": {
        "dial_code": "+855",
        "code": "KH"
    },
    "Cameroon": {
        "dial_code": "+237",
        "code": "CM"
    },
    "Canada": {
        "dial_code": "+1",
        "code": "CA"
    },
    "Cape Verde": {
        "dial_code": "+238",
        "code": "CV"
    },
    "Cayman Islands": {
        "dial_code": "+ 345",
        "code": "KY"
    },
    "Central African Republic": {
        "dial_code": "+236",
        "code": "CF"
    },
    "Chad": {
        "dial_code": "+235",
        "code": "TD"
    },
    "Chile": {
        "dial_code": "+56",
        "code": "CL"
    },
    "China": {
        "dial_code": "+86",
        "code": "CN"
    },
    "Christmas Island": {
        "dial_code": "+61",
        "code": "CX"
    },
    "Cocos (Keeling) Islands": {
        "dial_code": "+61",
        "code": "CC"
    },
    "Colombia": {
        "dial_code": "+57",
        "code": "CO"
    },
    "Comoros": {
        "dial_code": "+269",
        "code": "KM"
    },
    "Congo": {
        "dial_code": "+242",
        "code": "CG"
    },
    "Congo, The Democratic Republic of the Congo": {
        "dial_code": "+243",
        "code": "CD"
    },
    "Cook Islands": {
        "dial_code": "+682",
        "code": "CK"
    },
    "Costa Rica": {
        "dial_code": "+506",
        "code": "CR"
    },
    "Cote d'Ivoire": {
        "dial_code": "+225",
        "code": "CI"
    },
    "Croatia": {
        "dial_code": "+385",
        "code": "HR"
    },
    "Cuba": {
        "dial_code": "+53",
        "code": "CU"
    },
    "Cyprus": {
        "dial_code": "+357",
        "code": "CY"
    },
    "Czech Republic": {
        "dial_code": "+420",
        "code": "CZ"
    },
    "Denmark": {
        "dial_code": "+45",
        "code": "DK"
    },
    "Djibouti": {
        "dial_code": "+253",
        "code": "DJ"
    },
    "Dominica": {
        "dial_code": "+1767",
        "code": "DM"
    },
    "Dominican Republic": {
        "dial_code": "+1849",
        "code": "DO"
    },
    "Ecuador": {
        "dial_code": "+593",
        "code": "EC"
    },
    "Egypt": {
        "dial_code": "+20",
        "code": "EG"
    },
    "El Salvador": {
        "dial_code": "+503",
        "code": "SV"
    },
    "Equatorial Guinea": {
        "dial_code": "+240",
        "code": "GQ"
    },
    "Eritrea": {
        "dial_code": "+291",
        "code": "ER"
    },
    "Estonia": {
        "dial_code": "+372",
        "code": "EE"
    },
    "Ethiopia": {
        "dial_code": "+251",
        "code": "ET"
    },
    "Falkland Islands (Malvinas)": {
        "dial_code": "+500",
        "code": "FK"
    },
    "Faroe Islands": {
        "dial_code": "+298",
        "code": "FO"
    },
    "Fiji": {
        "dial_code": "+679",
        "code": "FJ"
    },
    "Finland": {
        "dial_code": "+358",
        "code": "FI"
    },
    "France": {
        "dial_code": "+33",
        "code": "FR"
    },
    "French Guiana": {
        "dial_code": "+594",
        "code": "GF"
    },
    "French Polynesia": {
        "dial_code": "+689",
        "code": "PF"
    },
    "Gabon": {
        "dial_code": "+241",
        "code": "GA"
    },
    "Gambia": {
        "dial_code": "+220",
        "code": "GM"
    },
    "Georgia": {
        "dial_code": "+995",
        "code": "GE"
    },
    "Germany": {
        "dial_code": "+49",
        "code": "DE"
    },
    "Ghana": {
        "dial_code": "+233",
        "code": "GH"
    },
    "Gibraltar": {
        "dial_code": "+350",
        "code": "GI"
    },
    "Greece": {
        "dial_code": "+30",
        "code": "GR"
    },
    "Greenland": {
        "dial_code": "+299",
        "code": "GL"
    },
    "Grenada": {
        "dial_code": "+1473",
        "code": "GD"
    },
    "Guadeloupe": {
        "dial_code": "+590",
        "code": "GP"
    },
    "Guam": {
        "dial_code": "+1671",
        "code": "GU"
    },
    "Guatemala": {
        "dial_code": "+502",
        "code": "GT"
    },
    "Guernsey": {
        "dial_code": "+44",
        "code": "GG"
    },
    "Guinea": {
        "dial_code": "+224",
        "code": "GN"
    },
    "Guinea-Bissau": {
        "dial_code": "+245",
        "code": "GW"
    },
    "Guyana": {
        "dial_code": "+595",
        "code": "GY"
    },
    "Haiti": {
        "dial_code": "+509",
        "code": "HT"
    },
    "Holy See (Vatican City State)": {
        "dial_code": "+379",
        "code": "VA"
    },
    "Honduras": {
        "dial_code": "+504",
        "code": "HN"
    },
    "Hong Kong": {
        "dial_code": "+852",
        "code": "HK"
    },
    "Hungary": {
        "dial_code": "+36",
        "code": "HU"
    },
    "Iceland": {
        "dial_code": "+354",
        "code": "IS"
    },
    "India": {
        "dial_code": "+91",
        "code": "IN"
    },
    "Indonesia": {
        "dial_code": "+62",
        "code": "ID"
    },
    "Iran, Islamic Republic of Persian Gulf": {
        "dial_code": "+98",
        "code": "IR"
    },
    "Iraq": {
        "dial_code": "+964",
        "code": "IQ"
    },
    "Ireland": {
        "dial_code": "+353",
        "code": "IE"
    },
    "Isle of Man": {
        "dial_code": "+44",
        "code": "IM"
    },
    "Israel": {
        "dial_code": "+972",
        "code": "IL"
    },
    "Italy": {
        "dial_code": "+39",
        "code": "IT"
    },
    "Jamaica": {
        "dial_code": "+1876",
        "code": "JM"
    },
    "Japan": {
        "dial_code": "+81",
        "code": "JP"
    },
    "Jersey": {
        "dial_code": "+44",
        "code": "JE"
    },
    "Jordan": {
        "dial_code": "+962",
        "code": "JO"
    },
    "Kazakhstan": {
        "dial_code": "+77",
        "code": "KZ"
    },
    "Kenya": {
        "dial_code": "+254",
        "code": "KE"
    },
    "Kiribati": {
        "dial_code": "+686",
        "code": "KI"
    },
    "Korea, Democratic People's Republic of Korea": {
        "dial_code": "+850",
        "code": "KP"
    },
    "Korea, Republic of South Korea": {
        "dial_code": "+82",
        "code": "KR"
    },
    "Kuwait": {
        "dial_code": "+965",
        "code": "KW"
    },
    "Kyrgyzstan": {
        "dial_code": "+996",
        "code": "KG"
    },
    "Laos": {
        "dial_code": "+856",
        "code": "LA"
    },
    "Latvia": {
        "dial_code": "+371",
        "code": "LV"
    },
    "Lebanon": {
        "dial_code": "+961",
        "code": "LB"
    },
    "Lesotho": {
        "dial_code": "+266",
        "code": "LS"
    },
    "Liberia": {
        "dial_code": "+231",
        "code": "LR"
    },
    "Libyan Arab Jamahiriya": {
        "dial_code": "+218",
        "code": "LY"
    },
    "Liechtenstein": {
        "dial_code": "+423",
        "code": "LI"
    },
    "Lithuania": {
        "dial_code": "+370",
        "code": "LT"
    },
    "Luxembourg": {
        "dial_code": "+352",
        "code": "LU"
    },
    "Macao": {
        "dial_code": "+853",
        "code": "MO"
    },
    "Macedonia": {
        "dial_code": "+389",
        "code": "MK"
    },
    "Madagascar": {
        "dial_code": "+261",
        "code": "MG"
    },
    "Malawi": {
        "dial_code": "+265",
        "code": "MW"
    },
    "Malaysia": {
        "dial_code": "+60",
        "code": "MY"
    },
    "Maldives": {
        "dial_code": "+960",
        "code": "MV"
    },
    "Mali": {
        "dial_code": "+223",
        "code": "ML"
    },
    "Malta": {
        "dial_code": "+356",
        "code": "MT"
    },
    "Marshall Islands": {
        "dial_code": "+692",
        "code": "MH"
    },
    "Martinique": {
        "dial_code": "+596",
        "code": "MQ"
    },
    "Mauritania": {
        "dial_code": "+222",
        "code": "MR"
    },
    "Mauritius": {
        "dial_code": "+230",
        "code": "MU"
    },
    "Mayotte": {
        "dial_code": "+262",
        "code": "YT"
    },
    "Mexico": {
        "dial_code": "+52",
        "code": "MX"
    },
    "Micronesia, Federated States of Micronesia": {
        "dial_code": "+691",
        "code": "FM"
    },
    "Moldova": {
        "dial_code": "+373",
        "code": "MD"
    },
    "Monaco": {
        "dial_code": "+377",
        "code": "MC"
    },
    "Mongolia": {
        "dial_code": "+976",
        "code": "MN"
    },
    "Montenegro": {
        "dial_code": "+382",
        "code": "ME"
    },
    "Montserrat": {
        "dial_code": "+1664",
        "code": "MS"
    },
    "Morocco": {
        "dial_code": "+212",
        "code": "MA"
    },
    "Mozambique": {
        "dial_code": "+258",
        "code": "MZ"
    },
    "Myanmar": {
        "dial_code": "+95",
        "code": "MM"
    },
    "Namibia": {
        "dial_code": "+264",
        "code": "NA"
    },
    "Nauru": {
        "dial_code": "+674",
        "code": "NR"
    },
    "Nepal": {
        "dial_code": "+977",
        "code": "NP"
    },
    "Netherlands": {
        "dial_code": "+31",
        "code": "NL"
    },
    "Netherlands Antilles": {
        "dial_code": "+599",
        "code": "AN"
    },
    "New Caledonia": {
        "dial_code": "+687",
        "code": "NC"
    },
    "New Zealand": {
        "dial_code": "+64",
        "code": "NZ"
    },
    "Nicaragua": {
        "dial_code": "+505",
        "code": "NI"
    },
    "Niger": {
        "dial_code": "+227",
        "code": "NE"
    },
    "Nigeria": {
        "dial_code": "+234",
        "code": "NG"
    },
    "Niue": {
        "dial_code": "+683",
        "code": "NU"
    },
    "Norfolk Island": {
        "dial_code": "+672",
        "code": "NF"
    },
    "Northern Mariana Islands": {
        "dial_code": "+1670",
        "code": "MP"
    },
    "Norway": {
        "dial_code": "+47",
        "code": "NO"
    },
    "Oman": {
        "dial_code": "+968",
        "code": "OM"
    },
    "Pakistan": {
        "dial_code": "+92",
        "code": "PK"
    },
    "Palau": {
        "dial_code": "+680",
        "code": "PW"
    },
    "Palestinian Territory, Occupied": {
        "dial_code": "+970",
        "code": "PS"
    },
    "Panama": {
        "dial_code": "+507",
        "code": "PA"
    },
    "Papua New Guinea": {
        "dial_code": "+675",
        "code": "PG"
    },
    "Paraguay": {
        "dial_code": "+595",
        "code": "PY"
    },
    "Peru": {
        "dial_code": "+51",
        "code": "PE"
    },
    "Philippines": {
        "dial_code": "+63",
        "code": "PH"
    },
    "Pitcairn": {
        "dial_code": "+872",
        "code": "PN"
    },
    "Poland": {
        "dial_code": "+48",
        "code": "PL"
    },
    "Portugal": {
        "dial_code": "+351",
        "code": "PT"
    },
    "Puerto Rico": {
        "dial_code": "+1939",
        "code": "PR"
    },
    "Qatar": {
        "dial_code": "+974",
        "code": "QA"
    },
    "Romania": {
        "dial_code": "+40",
        "code": "RO"
    },
    "Russia": {
        "dial_code": "+7",
        "code": "RU"
    },
    "Rwanda": {
        "dial_code": "+250",
        "code": "RW"
    },
    "Reunion": {
        "dial_code": "+262",
        "code": "RE"
    },
    "Saint Barthelemy": {
        "dial_code": "+590",
        "code": "BL"
    },
    "Saint Helena, Ascension and Tristan Da Cunha": {
        "dial_code": "+290",
        "code": "SH"
    },
    "Saint Kitts and Nevis": {
        "dial_code": "+1869",
        "code": "KN"
    },
    "Saint Lucia": {
        "dial_code": "+1758",
        "code": "LC"
    },
    "Saint Martin": {
        "dial_code": "+590",
        "code": "MF"
    },
    "Saint Pierre and Miquelon": {
        "dial_code": "+508",
        "code": "PM"
    },
    "Saint Vincent and the Grenadines": {
        "dial_code": "+1784",
        "code": "VC"
    },
    "Samoa": {
        "dial_code": "+685",
        "code": "WS"
    },
    "San Marino": {
        "dial_code": "+378",
        "code": "SM"
    },
    "Sao Tome and Principe": {
        "dial_code": "+239",
        "code": "ST"
    },
    "Saudi Arabia": {
        "dial_code": "+966",
        "code": "SA"
    },
    "Senegal": {
        "dial_code": "+221",
        "code": "SN"
    },
    "Serbia": {
        "dial_code": "+381",
        "code": "RS"
    },
    "Seychelles": {
        "dial_code": "+248",
        "code": "SC"
    },
    "Sierra Leone": {
        "dial_code": "+232",
        "code": "SL"
    },
    "Singapore": {
        "dial_code": "+65",
        "code": "SG"
    },
    "Slovakia": {
        "dial_code": "+421",
        "code": "SK"
    },
    "Slovenia": {
        "dial_code": "+386",
        "code": "SI"
    },
    "Solomon Islands": {
        "dial_code": "+677",
        "code": "SB"
    },
    "Somalia": {
        "dial_code": "+252",
        "code": "SO"
    },
    "South Africa": {
        "dial_code": "+27",
        "code": "ZA"
    },
    "South Sudan": {
        "dial_code": "+211",
        "code": "SS"
    },
    "South Georgia and the South Sandwich Islands": {
        "dial_code": "+500",
        "code": "GS"
    },
    "Spain": {
        "dial_code": "+34",
        "code": "ES"
    },
    "Sri Lanka": {
        "dial_code": "+94",
        "code": "LK"
    },
    "Sudan": {
        "dial_code": "+249",
        "code": "SD"
    },
    "Suriname": {
        "dial_code": "+597",
        "code": "SR"
    },
    "Svalbard and Jan Mayen": {
        "dial_code": "+47",
        "code": "SJ"
    },
    "Swaziland": {
        "dial_code": "+268",
        "code": "SZ"
    },
    "Sweden": {
        "dial_code": "+46",
        "code": "SE"
    },
    "Switzerland": {
        "dial_code": "+41",
        "code": "CH"
    },
    "Syrian Arab Republic": {
        "dial_code": "+963",
        "code": "SY"
    },
    "Taiwan": {
        "dial_code": "+886",
        "code": "TW"
    },
    "Tajikistan": {
        "dial_code": "+992",
        "code": "TJ"
    },
    "Tanzania, United Republic of Tanzania": {
        "dial_code": "+255",
        "code": "TZ"
    },
    "Thailand": {
        "dial_code": "+66",
        "code": "TH"
    },
    "Timor-Leste": {
        "dial_code": "+670",
        "code": "TL"
    },
    "Togo": {
        "dial_code": "+228",
        "code": "TG"
    },
    "Tokelau": {
        "dial_code": "+690",
        "code": "TK"
    },
    "Tonga": {
        "dial_code": "+676",
        "code": "TO"
    },
    "Trinidad and Tobago": {
        "dial_code": "+1868",
        "code": "TT"
    },
    "Tunisia": {
        "dial_code": "+216",
        "code": "TN"
    },
    "Turkey": {
        "dial_code": "+90",
        "code": "TR"
    },
    "Turkmenistan": {
        "dial_code": "+993",
        "code": "TM"
    },
    "Turks and Caicos Islands": {
        "dial_code": "+1649",
        "code": "TC"
    },
    "Tuvalu": {
        "dial_code": "+688",
        "code": "TV"
    },
    "Uganda": {
        "dial_code": "+256",
        "code": "UG"
    },
    "Ukraine": {
        "dial_code": "+380",
        "code": "UA"
    },
    "United Arab Emirates": {
        "dial_code": "+971",
        "code": "AE"
    },
    "United Kingdom": {
        "dial_code": "+44",
        "code": "GB"
    },
    "United States": {
        "dial_code": "+1",
        "code": "US"
    },
    "Uruguay": {
        "dial_code": "+598",
        "code": "UY"
    },
    "Uzbekistan": {
        "dial_code": "+998",
        "code": "UZ"
    },
    "Vanuatu": {
        "dial_code": "+678",
        "code": "VU"
    },
    "Venezuela, Bolivarian Republic of Venezuela": {
        "dial_code": "+58",
        "code": "VE"
    },
    "Vietnam": {
        "dial_code": "+84",
        "code": "VN"
    },
    "Virgin Islands, British": {
        "dial_code": "+1284",
        "code": "VG"
    },
    "Virgin Islands, U.S.": {
        "dial_code": "+1340",
        "code": "VI"
    },
    "Wallis and Futuna": {
        "dial_code": "+681",
        "code": "WF"
    },
    "Yemen": {
        "dial_code": "+967",
        "code": "YE"
    },
    "Zambia": {
        "dial_code": "+260",
        "code": "ZM"
    },
    "Zimbabwe": {
        "dial_code": "+263",
        "code": "ZW"
    }
}

export const timezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

export const getCountryData = (countryName, zone = timezone()) => ({
    ...countryData[timezones[zone]], country: timezones[zone]
});


export const getCountryCode = (country) => {
    country = country ? country : "United States"
    return { dial_code: countryData[country].dial_code, country_code: countryData[country].code.toLowerCase() }
}
