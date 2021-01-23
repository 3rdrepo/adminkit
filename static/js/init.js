let pages = [
    {
        // src: "dashboard.src",
        dst: "dashboard.html",
        url: "page/dashboard.html",
        // lazy: false,
        init: function () {
            $pm.loadJS("page/dashboard.js", function () {
                initDashboard();
            })
        },
    },

    {
        // src: "pages-profile.src",
        dst: "pages-profile.html",
        url: "page/pages-profile.html",
        lazy: true,
    },

    {
        // src: "pages-settings.src",
        dst: "pages-settings.html",
        url: "page/pages-settings.html",
        lazy: true,
    },

    {
        // src: "pages-invoice.src",
        dst: "pages-invoice.html",
        url: "page/pages-invoice.html",
        lazy: true,
    },

    {
        // src: "pages-blank.src",
        dst: "pages-blank.html",
        url: "page/pages-blank.html",
        lazy: true,
    },

    {
        // src: "pages-sign-in.src",
        dst: "pages-sign-in.html",
        url: "page/pages-sign-in.html",
        lazy: true,
        onshow: function () {
            $pm.element("sidebar").style.display = "none";
            $pm.element("nav").style.display = "none";
            $pm.element("footer").style.display = "none";
        },
        onhide: function () {
            $pm.element("sidebar").style.display = "block";
            $pm.element("nav").style.display = "block";
            $pm.element("footer").style.display = "block";
        },
    },
    {
        // src: "pages-sign-up.src",
        dst: "pages-sign-up.html",
        url: "page/pages-sign-up.html",
        lazy: true,
        onshow: function () {
            $pm.element("sidebar").style.display = "none";
            $pm.element("nav").style.display = "none";
            $pm.element("footer").style.display = "none";
        },
        onhide: function () {
            $pm.element("sidebar").style.display = "block";
            $pm.element("nav").style.display = "block";
            $pm.element("footer").style.display = "block";
        },
    },

    {
        // src: "ui-alerts.src",
        dst: "ui-alerts.html",
        url: "page/ui-alerts.html",
        lazy: true,
    },
    {
        // src: "ui-buttons.src",
        dst: "ui-buttons.html",
        url: "page/ui-buttons.html",
        lazy: true,
    },
    {
        // src: "ui-cards.src",
        dst: "ui-cards.html",
        url: "page/ui-cards.html",
        lazy: true,
    },
    {
        // src: "ui-general.src",
        dst: "ui-general.html",
        url: "page/ui-general.html",
        lazy: true,
    },
    {
        // src: "ui-grid.src",
        dst: "ui-grid.html",
        url: "page/ui-grid.html",
        lazy: true,
    },
    {
        // src: "ui-modals.src",
        dst: "ui-modals.html",
        url: "page/ui-modals.html",
        lazy: true,
    },
    {
        // src: "ui-typography.src",
        dst: "ui-typography.html",
        url: "page/ui-typography.html",
        lazy: true,
    },

    {
        // src: "icons-feather.src",
        dst: "icons-feather.html",
        url: "page/icons-feather.html",
        lazy: true,
    },

    {
        // src: "forms-basic-inputs.src",
        dst: "forms-basic-inputs.html",
        url: "page/forms-basic-inputs.html",
        lazy: true,
    },
    {
        // src: "forms-layouts.src",
        dst: "forms-layouts.html",
        url: "page/forms-layouts.html",
        lazy: true,
    },

    {
        // src: "tables-bootstrap.src",
        dst: "tables-bootstrap.html",
        url: "page/tables-bootstrap.html",
        lazy: true,
    },

    {
        // src: "charts-chartjs.src",
        dst: "charts-chartjs.html",
        url: "page/charts-chartjs.html",
        lazy: true,
        init: function () {
            $pm.loadJS("page/charts-chartjs.js", function () {
                initCharts();
            });
        },
    },

    {
        // src: "maps-google.src",
        dst: "maps-google.html",
        url: "page/maps-google.html",
        lazy: true,
        init: function () {
            $pm.loadJS("page/maps-google.js", function () {
                $pm.loadJS("https://maps.googleapis.com/maps/api/js?key=AIzaSyA-aWrwgr64q4b3TEZwQ0lkHI4lZK-moM4&callback=initMaps");
            })
        },
    },
];

function onchange(pre, curr) {
    if (pre) {
        let preElem = $pm.element(pre.dst.replace("html", "src"));
        if (preElem) {
            preElem.className = "sidebar-item";
        }
    }
    let currElem = $pm.element(curr.dst.replace("html", "src"));
    if (currElem) {
        currElem.className = "sidebar-item active";
    }
}

$pm.bindPages(pages, onchange);
$pm.select("dashboard.html");
$pm.listenRouter(function () {
    if (!!url.router) {
        window.scrollTo(0, 0)
    } else {
        $pm.select("dashboard.html");
    }
});
