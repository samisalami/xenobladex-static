/*
 * static-shim.js — makes the original AngularJS app run without its Symfony/REST backend.
 *
 * The app fetches data via $http from `/xenobladex/<resource>` (FOSJsRouting).
 * Here we register an $http interceptor that rewrites those GET requests to the
 * pre-generated static JSON snapshots under `/data/<resource>.json`.
 *
 * Binary attachment images (`/xenobladex/attachment/<id>`) are loaded via <img src>,
 * not $http, and resolve to real files on disk — so we leave those requests alone.
 *
 * Write operations (POST/PUT/DELETE) and the admin/login area are non-functional by
 * design: this is a read-only archive of the site's data.
 */
(function () {
    if (typeof angular === 'undefined') { return; }

    angular.module('app').config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push([function () {
            return {
                request: function (config) {
                    try {
                        var url = config.url || '';
                        var m = url.match(/(?:^|\/)xenobladex\/(.+)$/);
                        if (m) {
                            var rest = m[1].replace(/\?.*$/, '').replace(/\/+$/, '');
                            // Leave real binary attachment files untouched.
                            if (/^attachment\/\d+$/.test(rest)) { return config; }
                            var method = (config.method || 'GET').toUpperCase();
                            if (method === 'GET') {
                                config.url = 'data/' + rest.replace(/\//g, '_') + '.json';
                            }
                        }
                    } catch (e) { /* ignore */ }
                    return config;
                }
            };
        }]);
    }]);
})();
