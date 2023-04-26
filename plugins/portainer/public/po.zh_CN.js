(function (root, data) {
    var loaded, module;

    /* Load into AMD if desired */
    if (typeof define === 'function' && define.amd) {
        define(data);
        loaded = true;
    }

    /* Load into Cockpit locale */
    if (typeof cockpit === 'object') {
        cockpit.locale(data)
        loaded = true;
    }

    if (!loaded)
        root.po = data;

    /* The syntax of this line is important  by po2json */
}(this, {
    "": {
        'plural-forms': function (n) {
            var nplurals, plural;
            nplurals = 1; plural = 0;
            return plural;
        },
        "language": "zh_CN",
        "x-generator": "Weblate 3.10.3"
    },
    "$0 day": [
        "$0 days",
        "$0 天"
    ],
    "$0 hour": [
        "$0 hours",
        "$0 小时"
    ],
    "$0 minute": [
        "$0 minutes",
        "$0 分钟"
    ],
    "$0 month": [
        "$0 months",
        "$0 月"
    ],
    "$0 week": [
        "$0 weeks",
        "$0 周"
    ],
    "$0 year": [
        "$0 years",
        "$0 年"
    ],
    "1 day": [
        null,
        "1 天"
    ],
    "1 hour": [
        null,
        "1 小时"
    ],
    "1 week": [
        null,
        "1 周"
    ],
    "5 minutes": [
        null,
        "5 分钟"
    ],
    "Portainer": [
        null,
        "容器"
    ]
}));
