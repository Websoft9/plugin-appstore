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
    "App Store": [
        null,
        "应用商店"
    ],
    "My Apps": [
        null,
        "我的应用"
    ],
    "All": [
        null,
        "全部"
    ],
    "developers": [
        null,
        "维护手册"
    ],
    "Version": [
        null,
        "版本"
    ],
    "Requires at least": [
        null,
        "最低配置要求"
    ],
    "Name": [
        null,
        "名称"
    ],
    "Close": [
        null,
        "关闭"
    ],
    "Install": [
        null,
        "安装"
    ],
    "Other Apps": [
        null,
        "其他应用"
    ],
    "Websoft9's Apps": [
        null,
        "微聚云应用"
    ],
    "Refresh": [
        null,
        "刷新"
    ],
    "All States": [
        null,
        "所有状态"
    ],
    "Domain": [
        null,
        "域名"
    ],
    "Account": [
        null,
        "账号"
    ],
    "Backups": [
        null,
        "备份"
    ],
    "Uninstall": [
        null,
        "卸载"
    ],
    "Updates": [
        null,
        "更新"
    ],
    "Please enter a custom application name": [
        null,
        "请输入一个自定义应用名称"
    ]
}));
