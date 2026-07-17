angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app.html',
    "<!DOCTYPE html>\n" +
    "<html>\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\" />\n" +
    "    <title>XenobladeX.org - Infos & Guides</title>\n" +
    "    <link rel=\"icon\" type=\"image/png\" href=\"/favicon-32x32.png?v=XBBeY5Rbzx\" sizes=\"32x32\">\n" +
    "    <link rel=\"icon\" type=\"image/png\" href=\"/favicon-194x194.png?v=XBBeY5Rbzx\" sizes=\"194x194\">\n" +
    "    <link rel=\"icon\" type=\"image/png\" href=\"/favicon-96x96.png?v=XBBeY5Rbzx\" sizes=\"96x96\">\n" +
    "    <link rel=\"icon\" type=\"image/png\" href=\"/android-chrome-192x192.png?v=XBBeY5Rbzx\" sizes=\"192x192\">\n" +
    "    <link rel=\"icon\" type=\"image/png\" href=\"/favicon-16x16.png?v=XBBeY5Rbzx\" sizes=\"16x16\">\n" +
    "    <link rel=\"apple-touch-icon\" sizes=\"57x57\" href=\"/apple-touch-icon-57x57.png?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"apple-touch-icon\" sizes=\"60x60\" href=\"/apple-touch-icon-60x60.png?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"apple-touch-icon\" sizes=\"72x72\" href=\"/apple-touch-icon-72x72.png?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"apple-touch-icon\" sizes=\"76x76\" href=\"/apple-touch-icon-76x76.png?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"apple-touch-icon\" sizes=\"114x114\" href=\"/apple-touch-icon-114x114.png?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"apple-touch-icon\" sizes=\"120x120\" href=\"/apple-touch-icon-120x120.png?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"apple-touch-icon\" sizes=\"144x144\" href=\"/apple-touch-icon-144x144.png?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"/apple-touch-icon-152x152.png?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"/apple-touch-icon-180x180.png?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"manifest\" href=\"/manifest.json?v=XBBeY5Rbzx\">\n" +
    "    <link rel=\"mask-icon\" href=\"/safari-pinned-tab.svg?v=XBBeY5Rbzx\" color=\"#5bbad5\">\n" +
    "    <link rel=\"shortcut icon\" href=\"/favicon.ico?v=XBBeY5Rbzx\">\n" +
    "    <meta name=\"msapplication-TileColor\" content=\"#49d7d5\">\n" +
    "    <meta name=\"msapplication-TileImage\" content=\"/mstile-144x144.png?v=XBBeY5Rbzx\">\n" +
    "    <meta name=\"theme-color\" content=\"#373a3c\">\n" +
    "    <link href='https://fonts.googleapis.com/css?family=Bangers' rel='stylesheet' type='text/css'>\n" +
    "    <link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,latin-ext' rel='stylesheet' type='text/css'>\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/leaflet/leaflet.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/leaflet-draw/leaflet.draw.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/font-awesome/css/font-awesome.min.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/bootstrap/css/bootstrap.min.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/bootstrap/css/bootstrap-theme.min.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/tether/css/tether.min.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/tether/css/tether-theme-basic.min.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/tether/css/tether-theme-arrows.min.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/tether/css/tether-theme-arrows-dark.min.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/xeditable/xeditable.css\">\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/libraries/jquery-ui/jquery-ui.min.css\">\n" +
    "    <link type=\"text/css\" rel='stylesheet' href='/libraries/textangular/textAngular.css'>\n" +
    "    <link type=\"text/css\" rel='stylesheet' href='/libraries/angular-bootstrap-colorpicker/colorpicker.min.css'>\n" +
    "    <link type=\"text/css\" rel=\"stylesheet\" href=\"/css/main.css\">\n" +
    "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, user-scalable=no\">\n" +
    "    <meta name=\"fragment\" content=\"!\" />\n" +
    "    <meta property=\"og:url\" content=\"https://www.xenobladex.org\">\n" +
    "    <meta property=\"og:image\" content=\"https://www.xenobladex.org/images/og_image.jpg\">\n" +
    "    <meta property=\"og:title\" content=\"XenobladeX.org - Infos & Guides\">\n" +
    "    <base href=\"/\">\n" +
    "</head>\n" +
    "<body ng-app=\"app\">\n" +
    "<div ng-if=\"frontend\"  ng-include src=\"'views/_header.html'\"></div>\n" +
    "<main ng-class=\"{'main-content':frontend}\" role=\"main\">\n" +
    "    <div class=\"main-view\" ng-view></div>\n" +
    "    <img class=\"body-bg\" src=\"/images/bg_xenobladex.jpg\" />\n" +
    "    <img class=\"logo-game\" src=\"/images/logo_game.png\" />\n" +
    "</main>\n" +
    "<script>\n" +
    "    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
    "                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n" +
    "            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n" +
    "    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n" +
    "\n" +
    "    ga('create', 'UA-72222212-1', 'auto');\n" +
    "    ga('send', 'pageview');\n" +
    "\n" +
    "</script>\n" +
    "<script type=\"text/javascript\" src=\"/bundles/fosjsrouting/js/router.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/js/routing?callback=fos.Router.setData\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/jquery-1.11.2.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/jquery-ui/jquery-ui.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/leaflet/leaflet.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/leaflet-draw/leaflet.draw.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/angular.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src='/libraries/angular-bootstrap-colorpicker/bootstrap-colorpicker-module.min.js'></script>\n" +
    "<script type=\"text/javascript\" src='/libraries/textangular/textAngular-rangy.min.js'></script>\n" +
    "<script type=\"text/javascript\" src='/libraries/textangular/textAngular-sanitize.min.js'></script>\n" +
    "<script type=\"text/javascript\" src='/libraries/textangular/textAngular.min.js'></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/angular-route.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/angular-cookies.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/tether/js/tether.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/ui-bootstrap-0.13.3.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/bootstrap/js/bootstrap.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/xeditable/xeditable.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/naturalSortVersionCaching.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/libraries/alphanum.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/js/main.min.js\"></script>\n" +
    "<script type=\"text/javascript\" src=\"/js/templates.js\"></script>\n" +
    "</body>\n" +
    "</html>"
  );


  $templateCache.put('js/components/form/autocompleteSelect/autocompleteSelectView.html',
    "<div class=\"autocomplete-select-view\">\n" +
    "    <!-- EXAMPLE\n" +
    "<autocomplete-select autocomplete-list=\"attachments\" autocomplete-option-name=\"name\" autocomplete-option-value=\"id\" autocomplete-bind=\"newMap.attachment_id\" ng-if=\"attachmentDataLoaded\"></autocomplete-select>\n" +
    "-->\n" +
    "    <div class=\"input-group\">\n" +
    "        <input ng-model=\"autocompleteBind[autocompleteOptionName]\" ng-change=\"setBindings()\" class=\"autocomplete-select-input text form-control\" type=\"text\" placeholder=\"Namen eintippen oder alle Optionen via Button anzeigen lassen\" />\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <a href=\"#\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#{{selectModalId}}\"><span class=\"fa fa-folder-open\"></span></a>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"modal fade\" id=\"{{selectModalId}}\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n" +
    "        <div class=\"modal-dialog\" role=\"document\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
    "                        <span aria-hidden=\"true\">&times;</span>\n" +
    "                    </button>\n" +
    "                    <h4 class=\"modal-title\">Alle Einträge</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    <input type=\"text\" class=\"form-control text\" ng-model=\"modalFilterValue\" placeholder=\"Filtern...\" ng-model-options='{ debounce: 200 }'>\n" +
    "                    <div class=\"list-group\">\n" +
    "                        <a class=\"list-group-item\" ng-repeat=\"listItem in autocompleteList | listFilter:modalFilterValue:autocompleteOptionName track by listItem.id\" href=\"#\" ng-click=\"selectOption(listItem)\">{{ listItem[autocompleteOptionName] }} <span ng-if=\"autocompleteLabel\">({{listItem[autocompleteLabel]}})</span></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/components/form/collapsedTable/collapsedTableCellView.html',
    "<div class=\"collapsed-table-col col-lg-3 card card-block col-xs-12\" ng-transclude=\"\">\n" +
    "</div>"
  );


  $templateCache.put('js/components/form/collapsedTable/collapsedTableListView.html',
    "<div collapsed-content class=\"list-group collapsed-table-view\">\n" +
    "    <button ng-click=\"visible(idPrefix+'item-view'+$index)\" class=\"list-group-item\" ng-class=\"{'list-group-item-success':addForm}\" data-toggle=\"collapse\" data-target=\"#{{idPrefix}}item-view{{$index}}\" aria-expanded=\"false\" aria-controls=\"{{idPrefix}}item-view{{$index}}\"><span ng-if=\"addForm\" class=\"fa fa-plus-circle\"></span> {{tableListLabel || item.name}} <span ng-if=\"addForm\">Neu</span></button>\n" +
    "    <div class=\"collapse\" id=\"{{idPrefix}}item-view{{$index}}\">\n" +
    "        <div class=\"card collapsed-table-card card-block\" ng-if=\"addForm || isVisible(idPrefix+'item-view'+$index)\" ng-transclude=\"\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/components/form/formField/directives/bindAutocompleteAsIdView.html',
    "<autocomplete-select autocomplete-list=\"options\" autocomplete-option-name=\"name\" autocomplete-option-value=\"id\" autocomplete-bind=\"item\" autocomplete-callback=\"updateAutocompleteItem()\"></autocomplete-select>"
  );


  $templateCache.put('js/components/form/formField/fields/customAttachmentInput.html',
    "<attachment-input attachment-list=\"formSelectOptions\" attachment-type=\"{{attachmentType}}\" attachment-bind=\"$parent.formFieldBind\"></attachment-input>"
  );


  $templateCache.put('js/components/form/formField/fields/customAutoCompleteSelect.html',
    "<autocomplete-select autocomplete-label=\"{{formFieldLabel}}\" autocomplete-list=\"formSelectOptions\" autocomplete-option-name=\"name\" autocomplete-option-value=\"id\" autocomplete-bind=\"$parent.formFieldBind\" autocomplete-callback=\"formFieldCallback()\"></autocomplete-select>"
  );


  $templateCache.put('js/components/form/formField/fields/customfalsableStringSelectView.html',
    "<falsable-string-select falsable-checkbox-prefix=\"nicht\">\n" +
    "    <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\">\n" +
    "            <input type=\"checkbox\" ng-change=\"setModel()\" ng-model=\"checkboxValue\"/> nicht?\n" +
    "        </span>\n" +
    "        <select class=\"form-control\" ng-change=\"setModel()\" ng-model=\"selectValue\" ng-options=\"item as item for item in formSelectOptions\"></select>\n" +
    "    </div>\n" +
    "</falsable-string-select>"
  );


  $templateCache.put('js/components/form/formField/fields/customMapmarkerInput.html',
    "<mapmarker-input maps=\"formSelectOptions\" mapmarkers=\"$parent.formFieldBind\"></mapmarker-input>"
  );


  $templateCache.put('js/components/form/formField/fields/customMaterialInput.html',
    "<multi-field>\n" +
    "    <autocomplete-select autocomplete-list=\"formSelectOptions\" autocomplete-option-name=\"name\" autocomplete-option-value=\"id\" autocomplete-bind=\"newItem\" autocomplete-callback=\"formFieldCallback()\"></autocomplete-select>\n" +
    "    <button type=\"button\" ng-click=\"multiFieldAdd()\" class=\"btn btn-success m-y-1\">Hinzufügen <span class=\"fa fa-plus-circle\"></span></button>\n" +
    "    <div class=\"clear-both\" ng-repeat=\"material in formFieldBind\">\n" +
    "        <autocomplete-select autocomplete-list=\"formSelectOptions\" autocomplete-option-name=\"name\" autocomplete-option-value=\"id\" autocomplete-bind=\"material\" autocomplete-callback=\"formFieldCallback()\"></autocomplete-select>\n" +
    "        <button type=\"button\" ng-click=\"multiFieldDelete(material)\" class=\"btn btn-danger pull-right m-b-1\">Löschen <span class=\"fa fa-minus-circle\"></span></button>\n" +
    "    </div>\n" +
    "</multi-field>"
  );


  $templateCache.put('js/components/form/formField/fields/editableObjectSelectView.html',
    "<a href=\"#\" onaftersave=\"formFieldAction({item : formFieldActionParam})\" editable-select=\"$parent.formFieldBind.id\" e-ng-options=\"item.id as item.name for item in formSelectOptions\">{{ showSelectedOption(formFieldBind.id) || 'eintragen'}}</a>"
  );


  $templateCache.put('js/components/form/formField/fields/editableStringSelectView.html',
    "<a href=\"#\" onaftersave=\"formFieldAction({item : formFieldActionParam})\" editable-select=\"$parent.formFieldBind\" e-ng-options=\"item.name as item.name for item in formSelectOptions\">{{ formFieldBind || 'eintragen'}}</a>"
  );


  $templateCache.put('js/components/form/formField/fields/editableTextareaView.html',
    "<a href=\"#\" onaftersave=\"formFieldAction({item : formFieldActionParam})\" editable-textarea=\"$parent.formFieldBind\">{{formFieldBind || 'eintragen'}}</a>"
  );


  $templateCache.put('js/components/form/formField/fields/editableTextView.html',
    "<a href=\"#\" onaftersave=\"formFieldAction({item : formFieldActionParam})\" editable-text=\"$parent.formFieldBind\">{{formFieldBind || 'eintragen'}}</a>"
  );


  $templateCache.put('js/components/form/formField/fields/inputCheckboxView.html',
    "<div class=\"checkbox\">\n" +
    "    <label>\n" +
    "        <input type=\"checkbox\" ng-model=\"$parent.formFieldBind\" />\n" +
    "    </label>\n" +
    "</div>\n"
  );


  $templateCache.put('js/components/form/formField/fields/inputTextView.html',
    "<input type=\"text\" class=\"form-control\" ng-model=\"$parent.formFieldBind\" />"
  );


  $templateCache.put('js/components/form/formField/fields/objectSelectView.html',
    "<select class=\"form-control\" ng-model=\"$parent.formFieldBind\" ng-options=\"item as item.name for item in formSelectOptions track by item.id\"></select>"
  );


  $templateCache.put('js/components/form/formField/fields/stringSelectView.html',
    "<select class=\"form-control\" ng-model=\"$parent.formFieldBind\" ng-options=\"item as item for item in formSelectOptions\"></select>"
  );


  $templateCache.put('js/components/form/formField/fields/textareaView.html',
    "<textarea class=\"form-control\" ng-model=\"$parent.formFieldBind\" rows=\"3\">{{$parent.formFieldBind}}</textarea>"
  );


  $templateCache.put('js/components/form/formField/inputFileView.html',
    "<form class=\"ng-pristine ng-valid ng-scope\" role=\"form\" blur=\"cancel\">\n" +
    "    <span class=\"btn btn-default btn-file\" ng-class=\"{'has-error': $error}\">\n" +
    "        Durchsuchen <input type=\"file\" class=\"form-control file\" ng-class=\"{'has-error': $error}\" ng-model=\"file\">\n" +
    "    </span>\n" +
    "</form>"
  );


  $templateCache.put('js/components/leafletMap/directive/editMapView.html',
    "<div class=\"mapmarker-wrapper\">\n" +
    "    <modal icon=\"fa-map\" title=\"Karte\" fullsize=\"true\">\n" +
    "        <div class=\"leaflet-map\">\n" +
    "        </div>\n" +
    "    </modal>\n" +
    "</div>"
  );


  $templateCache.put('js/components/linkGenerator/admin_links.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Links</h1>\n" +
    "        <link-generator>\n" +
    "            <table class=\"table table-striped\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                    </th>\n" +
    "                    <th class=\"text-xs-center\">\n" +
    "                        Url\n" +
    "                    </th>\n" +
    "                    <th class=\"text-xs-center\">\n" +
    "                        HTML\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Mission\n" +
    "                    </th>\n" +
    "                    <td>\n" +
    "                        <form-field ng-if=\"vm.missions\" form-field-bind=\"vm.mission\" form-select-options=\"vm.missions\" form-template=\"customAutoCompleteSelect\"></form-field>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.mission\" readonly>{{vm.baseUrl}}{{vm.missionsUrl}}{{vm.mission.id}}</textarea>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.mission\" readonly><a href=\"{{vm.baseUrl}}{{vm.missionsUrl}}{{vm.mission.id}}\">{{vm.mission.name}}</a></textarea>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Kreatur\n" +
    "                    </th>\n" +
    "                    <td>\n" +
    "                        <form-field ng-if=\"vm.monsters\" form-field-bind=\"vm.monster\" form-select-options=\"vm.monsters\" form-template=\"customAutoCompleteSelect\"></form-field>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.monster\" readonly>{{vm.baseUrl}}{{vm.monstersUrl}}{{vm.monster.id}}</textarea>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.monster\" readonly><a href=\"{{vm.baseUrl}}{{vm.monstersUrl}}{{vm.monster.id}}\">{{vm.monster.name}}</a></textarea>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Sammelitem\n" +
    "                    </th>\n" +
    "                    <td>\n" +
    "                        <form-field ng-if=\"vm.collectibles\" form-field-bind=\"vm.collectible\" form-select-options=\"vm.collectibles\" form-template=\"customAutoCompleteSelect\"></form-field>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.collectible\" readonly>{{vm.baseUrl}}{{vm.collectiblesUrl}}{{vm.collectible.id}}</textarea>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.collectible\" readonly><a href=\"{{vm.baseUrl}}{{vm.collectiblesUrl}}{{vm.collectible.id}}\">{{vm.collectible.name}}</a></textarea>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Material\n" +
    "                    </th>\n" +
    "                    <td>\n" +
    "                        <form-field ng-if=\"vm.materials\" form-field-bind=\"vm.material\" form-select-options=\"vm.materials\" form-template=\"customAutoCompleteSelect\"></form-field>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.material\" readonly>{{vm.baseUrl}}{{vm.materialsUrl}}{{vm.material.id}}</textarea>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.material\" readonly><a href=\"{{vm.baseUrl}}{{vm.materialsUrl}}{{vm.material.id}}\">{{vm.material.name}}</a></textarea>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Erweiterung\n" +
    "                    </th>\n" +
    "                    <td>\n" +
    "                        <form-field ng-if=\"vm.equipUpgrades\" form-field-bind=\"vm.equipUpgrade\" form-select-options=\"vm.equipUpgrades\" form-template=\"customAutoCompleteSelect\"></form-field>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.equipUpgrade\" readonly>{{vm.baseUrl}}{{vm.equipUpgradesUrl}}{{vm.equipUpgrade.id}}</textarea>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.equipUpgrade\" readonly><a href=\"{{vm.baseUrl}}{{vm.equipUpgradesUrl}}{{vm.equipUpgrade.id}}\">{{vm.equipUpgrade.name}}</a></textarea>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Dateiverwaltung\n" +
    "                    </th>\n" +
    "                    <td>\n" +
    "                        <form-field ng-if=\"vm.attachments\" form-field-bind=\"vm.attachment\" form-select-options=\"vm.attachments\" form-template=\"customAttachmentInput\" form-field-action-param=\"image\"></form-field>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.attachment\" readonly>{{vm.baseUrl}}{{vm.attachmentsUrl}}{{vm.attachment.id}}</textarea>\n" +
    "                    </td>\n" +
    "                    <td class=\"text-xs-center\">\n" +
    "                        <textarea ng-if=\"vm.attachment\" readonly><img src=\"{{vm.baseUrl}}{{vm.attachmentsUrl}}{{vm.attachment.id}}\" alt=\"{{vm.attachment.name}}\" /></textarea>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </link-generator>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/components/loading/loadingView.html',
    "<div class=\"modal fade in\" id=\"loading-modal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\" role=\"document\">\n" +
    "        <span class=\"loading-spinner fa fa-spinner fa-spin fa-3x\"></span>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/components/modal/modalView.html',
    "<a href=\"#\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#{{modalId}}\"><span class=\"fa {{ icon }}\"></span></a>\n" +
    "<div class=\"modal fade\" ng-class=\"{'modal-fullsize': fullsize}\" id=\"{{modalId}}\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n" +
    "    <div class=\"modal-dialog\" role=\"document\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
    "                    <span aria-hidden=\"true\">&times;</span>\n" +
    "                </button>\n" +
    "                <h4 class=\"modal-title\">{{ title }}</h4>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body text-xs-center\" ng-transclude=\"\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/attachment/view/admin_attachments.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-warning\" role=\"alert\">\n" +
    "            <strong>Achtung!</strong> Gelöschte Dateien können hier leider (noch) nicht wieder hergestellt werden.\n" +
    "        </div>\n" +
    "        <h1>Dateien</h1>\n" +
    "        <p>\n" +
    "            Hier kann sämtliches Material hochgeladen werden. Dieses kann dann später verknüpft werden. Damit es in der Masse übersichtlich bleibt, kommt später noch eine Suchfunktion hinzu. Aktuell wird nach Name sortiert (also neuste zuerst da diese noch keinen Namen haben ;-))\n" +
    "        </p>\n" +
    "        <attachment-admin></attachment-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/attachment/view/attachmentAdminView.html',
    "<div class=\"attachment-admin-view\">\n" +
    "    <div class=\"row m-t-2\">\n" +
    "        <div class=\"col-lg-6\">\n" +
    "            <strong>Neue Datei auswählen</strong><br/>\n" +
    "            <i>(Name und Beschreibung können im Nachhinein editiert werden)</i>\n" +
    "            <div class=\"form-group m-t-1\">\n" +
    "                <input-file fileread=\"file\"></input-file>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"row m-t-3\">\n" +
    "        <div class=\"col-lg-3\" ng-repeat=\"attachment in attachments | orderBy:'name'\" ng-class=\"{'clear-both': $index%4==0}\">\n" +
    "            <div class=\"card\">\n" +
    "                <div class=\"image-wrapper text-xs-center\">\n" +
    "                    <a ng-if=\"attachment.mime_type.indexOf('image') !== -1\" href=\"#\" data-toggle=\"modal\" data-target=\"#image-zoom-{{$index}}\">\n" +
    "                        <img class=\"card-img-top img-responsive\" ng-src=\"/xenobladex/attachment/{{attachment.id}}\" />\n" +
    "                    </a>\n" +
    "                    <div class=\"mime-type\" ng-if=\"attachment.mime_type.indexOf('image') === -1\">\n" +
    "                        <span class=\"fa fa-file fa-5x m-t-2\"></span>\n" +
    "                        <p>{{attachment.mime_type}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"card-block\">\n" +
    "                    <h4 class=\"card-title\">\n" +
    "                        <a href=\"#\" editable-text=\"attachment.name\" onaftersave=\"updateAttachment(attachment)\">{{attachment.name || 'eintragen'}}</a>\n" +
    "                    </h4>\n" +
    "                    <p class=\"card-text\">\n" +
    "                        <a href=\"#\" editable-textarea=\"attachment.description\" onaftersave=\"updateAttachment(attachment)\">{{attachment.description || 'eintragen'}}</a>\n" +
    "                    </p>\n" +
    "                    <button type=\"button\" class=\"btn btn-danger\" ng-click=\"deleteAttachment(attachment)\">Löschen</button>\n" +
    "                </div>\n" +
    "                <div class=\"modal fade\" id=\"image-zoom-{{$index}}\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n" +
    "                    <div class=\"modal-dialog modal-lg\" role=\"document\">\n" +
    "                        <div class=\"modal-content\">\n" +
    "                            <div class=\"modal-header\">\n" +
    "                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
    "                                    <span aria-hidden=\"true\">&times;</span>\n" +
    "                                </button>\n" +
    "                            </div>\n" +
    "                            <div class=\"modal-body text-xs-center\">\n" +
    "                                <img class=\"img-responsive\" ng-src=\"/xenobladex/attachment/{{attachment.id}}\" />\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/attachment/view/attachmentInputView.html',
    "<div class=\"attachment-input-view\">\n" +
    "    <div class=\"input-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" readonly ng-model=\"attachmentBind.name\" />\n" +
    "        <span class=\"input-group-btn\">\n" +
    "            <a href=\"#\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#{{selectModalId}}\"><span class=\"fa fa-folder-open\"></span></a>\n" +
    "        </span>\n" +
    "    </div>\n" +
    "    <div class=\"modal fade\" id=\"{{selectModalId}}\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n" +
    "        <div class=\"modal-dialog modal-lg\" role=\"document\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
    "                        <span aria-hidden=\"true\">&times;</span>\n" +
    "                    </button>\n" +
    "                    <h4 class=\"modal-title\" id=\"myModalLabel\">Alle Bilder</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    <input type=\"text\" class=\"form-control text\" ng-model=\"modalFilterValue\" placeholder=\"Filtern...\">\n" +
    "                    <div class=\"row m-t-2\">\n" +
    "                        <div class=\"col-lg-3 m-b-1\" ng-if=\"attachmentList\" ng-repeat=\"attachment in attachmentList | listFilter:modalFilterValue:'name'\" ng-class=\"{'clear-both': $index%4==0}\">\n" +
    "                            <div ng-click=\"selectOption(attachment)\" class=\"attachment-thumbnail text-xs-center\">\n" +
    "                                <img ng-if=\"attachment.mime_type.indexOf('image') !== -1\" class=\"card-img-top img-responsive img-thumbnail\" ng-src=\"/xenobladex/attachment/{{attachment.id}}\" />\n" +
    "                                <div class=\"mime-type\" ng-if=\"attachment.mime_type.indexOf('image') === -1\">\n" +
    "                                    <span class=\"fa fa-file fa-5x m-t-2\"></span>\n" +
    "                                    <p>{{attachment.mime_type}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"content\">\n" +
    "                                    <p class=\"text-muted\">\n" +
    "                                        {{attachment.name}}\n" +
    "                                    </p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/collection/view/admin_collectibles_missing.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Sammelitems</h1>\n" +
    "        <collectible-missing-data></collectible-missing-data>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('js/data/collection/view/admin_collectibles.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Sammelitems</h1>\n" +
    "        <collectible-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedCollectible\">\n" +
    "                <a ng-click=\"vm.addDeletedCollectible()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <a href=\"/admin/sammelitems/was-fehlt\" class=\"btn-primary btn\">Welche Daten fehlen?</a>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"nameFilter\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <collectible-form collectible=\"newCollectible\">\n" +
    "                </collectible-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.collectibles | listFilter:nameFilter:'name' track by item.id\" ng-if=\"vm.collectibles\">\n" +
    "                <collectible-form collectible=\"item\">\n" +
    "                </collectible-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </collectible-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/collection/view/admin_collections.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Da alle Kategorien und Kollektikons angelegt sind, können keine neuen erzeugt und die bestehenden nicht mehr gelöscht werden.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Sammelitems können hier nicht neu erzeugt werden! (Ein nicht existentes wird nicht gespeichert)\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Die Kategorien am Kollektikon müssen bei Bearbeitung einzeln gespeichert werden (Häkchen).\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <h1 class=\"m-b-1\">Kollektikon-Kategorien</h1>\n" +
    "        <collection-category-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedCollectionCategory\">\n" +
    "                <a ng-click=\"vm.addDeletedCollectionCategory()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <collapsed-table-list id-prefix=\"category\" ng-repeat=\"item in vm.collectionCategories | orderBy:'prio' track by item.id\" ng-if=\"vm.collectionCategories\">\n" +
    "                <collection-category-form collection-category=\"item\">\n" +
    "                </collection-category-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </collection-category-admin>\n" +
    "        <h1 class=\"m-t-2\">Kollektikon</h1>\n" +
    "        <collection-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedCollection\">\n" +
    "                <a ng-click=\"vm.addDeletedCollection()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"filter.name\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list id-prefix=\"collection\" ng-repeat=\"item in vm.collections | filter:filter track by item.id\" table-list-label=\"{{item.region}}\" ng-if=\"vm.collections\">\n" +
    "                <collection-form collection=\"item\">\n" +
    "                </collection-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </collection-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/collection/view/collectibleFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteCollectible()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updateCollectible()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.collectible.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Beschreibung:</strong>\n" +
    "        <form-field form-field-bind=\"form.collectible.description\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Seltenheit:</strong>\n" +
    "        <form-field form-field-bind=\"form.collectible.rarity\" form-template=\"stringSelect\" form-select-options=\"form.rarities\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Ortsbeschreibung:</strong>\n" +
    "        <form-field form-field-bind=\"form.collectible.location_note\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Glücksfeld?</strong>\n" +
    "        <form-field form-field-bind=\"form.collectible.is_lucky_field\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <input type=\"submit\" href=\"#\" class=\"btn btn-success pull-right\" value=\"Speichern\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/collection/view/collectibleMissingDataView.html',
    "<div class=\"missing-data-view\">\n" +
    "<a href=\"/admin/sammelitems\" class=\"btn-primary btn\">Sammelitems</a>\n" +
    "    <div class=\"table-responsive m-t-2\">\n" +
    "        <table class=\"table table-bordered\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Name\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Beschreibung\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Seltenheit\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Ortsbeschreibung\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Kosten<br/>\n" +
    "                        (aus Seltenheit)\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"collectible in collectibles | orderBy: ['name'] track by collectible.id\">\n" +
    "                    <td>\n" +
    "                        {{collectible.name}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{collectible.description}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{collectible.rarity}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{collectible.location_note}}\n" +
    "                    </td>\n" +
    "                    <td ng-switch=\"collectible.rarity\">\n" +
    "                        <span ng-switch-when=\"Gewöhnlich\">100</span>\n" +
    "                        <span ng-switch-when=\"Wertvoll\">200</span>\n" +
    "                        <span ng-switch-when=\"Sehr wertvoll\">300</span>\n" +
    "                        <span ng-switch-when=\"Extrem wertvoll\">400</span>\n" +
    "                        <span ng-switch-when=\"Unbezahlbar\">500</span>\n" +
    "                        <span ng-switch-default></span>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/collection/view/collectibles.html',
    "<header class=\"col-xs-12\">\n" +
    "    <h1>Sammelitems</h1>\n" +
    "</header>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <section class=\"content-box m-b-1\">\n" +
    "        <p class=\"content-body\">Hier findet ihr alle Sammelitems aufgelistet. Aktuell haben wir leider noch keine Kartenintegration, aber solange haben wir für euch schonmal schriftlich die Orte erfasst.\n" +
    "Die Wahrscheinlichkeit ein Sammelitem zu finden, ist mit höherer Wertigkeit umso niedriger.</p>\n" +
    "    </section>\n" +
    "</div>\n" +
    "<div class=\"page-collectible\" collectible-view=\"\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 m-b-1\">\n" +
    "            <div class=\"col-xs-12 col-lg-4 search-input m-b-1\">\n" +
    "                <input ng-model=\"filter.name\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Name filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-4 search-input m-b-1\">\n" +
    "                <input ng-model=\"regionFilter.name\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Region filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-4 search-input m-b-1\">\n" +
    "                <input ng-model=\"filter.category_name\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Kategorie filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"collectibles-list row\" ng-repeat=\"region in groupedCollectibles | filter:regionFilter\">\n" +
    "        <h1 class=\"col-xs-12\">{{region.name}}</h1>\n" +
    "        <div class=\"collectible-item col-xs-12 col-md-6 m-b-1\" ng-class=\"{'clear-both': $index%2==0}\" ng-repeat=\"collectible in region.collectibles | filter:filter track by collectible.id\">\n" +
    "            <a name=\"sammelitem-{{collectible.id}}\"></a>\n" +
    "            <div class=\"content-box p-b-1\">\n" +
    "                <header>\n" +
    "                    <h5>{{collectible.name}}</h5>\n" +
    "                    <span><a ng-href=\"/kollektikon#kollektikon-kategorie-{{collectible.collection_group}}\">{{collectible.category_name}} - {{collectible.slot}}</a></span>\n" +
    "                    <span class=\"rarity clear-both\" ng-class=\"getValidCssClass(collectible.rarity)\">{{collectible.rarity}}</span>\n" +
    "                </header>\n" +
    "                <hr class=\"m-x-1\" />\n" +
    "                <div class=\"row\">\n" +
    "                    <div ng-switch=\"collectible.rarity\" class=\"col-xs-12\">\n" +
    "                        <span ng-switch-when=\"Gewöhnlich\">100</span>\n" +
    "                        <span ng-switch-when=\"Wertvoll\">200</span>\n" +
    "                        <span ng-switch-when=\"Sehr wertvoll\">300</span>\n" +
    "                        <span ng-switch-when=\"Extrem wertvoll\">400</span>\n" +
    "                        <span ng-switch-default=\"\">???</span>\n" +
    "                        Credits\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-sm-6\">\n" +
    "                        <strong>Beschreibung:</strong><br/>\n" +
    "                        {{collectible.description || '???'}}\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-sm-6\">\n" +
    "                        <strong>Ort:</strong><br/>\n" +
    "                        {{collectible.location_note || '???'}}\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/collection/view/collectionCategoryFormView.html',
    "<form ng-submit=\"form.updateCollectionCategory()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.collectionCategory.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt. Sortierung ist aufsteigend (am besten Spielraum zwischen den Zahlen lassen)\"></span>\n" +
    "        <strong>Sortierung:</strong>\n" +
    "        <form-field form-field-bind=\"form.collectionCategory.prio\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <input type=\"submit\" href=\"#\" class=\"btn btn-success pull-right\" value=\"Speichern\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/collection/view/collectionFormView.html',
    "<div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "    <strong>Region:</strong>\n" +
    "    <form-field form-field-bind=\"form.collection.region\" form-template=\"stringSelect\" form-select-options=\"form.regions\"></form-field>\n" +
    "</div>\n" +
    "<div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "    <strong>TP-Belohnung - Gesamt:</strong>\n" +
    "    <form-field form-field-bind=\"form.collection.reward_sp\" form-template=\"inputText\"></form-field>\n" +
    "</div>\n" +
    "<div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "    <strong>Item-Belohnung - Gesamt:</strong>\n" +
    "    <form-field form-field-bind=\"form.collection.reward_item\" form-template=\"inputText\"></form-field>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12 p-r-0\">\n" +
    "        <button type=\"button\" ng-click=\"form.updateCollection()\" href=\"#\" class=\"btn btn-success pull-right\">Speichern</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-if=\"form.collection.id && form.collectionCategories\">\n" +
    "    <div class=\"clear-both\"></div>\n" +
    "    <h4 class=\"m-b-2\">Kategorien:</h4>\n" +
    "    <table class=\"table table-bordered table-not-fixed text-sm-center\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th>\n" +
    "\n" +
    "            </th>\n" +
    "            <th style=\"text-align: center\">\n" +
    "                Slot 1\n" +
    "            </th>\n" +
    "            <th style=\"text-align: center\">\n" +
    "                Slot 2\n" +
    "            </th>\n" +
    "            <th style=\"text-align: center\">\n" +
    "                Slot 3\n" +
    "            </th>\n" +
    "            <th style=\"text-align: center\">\n" +
    "                Slot 4\n" +
    "            </th>\n" +
    "            <th style=\"text-align: center\">\n" +
    "                Slot 5\n" +
    "            </th>\n" +
    "            <th style=\"text-align: center\">\n" +
    "                Slot 6\n" +
    "            </th>\n" +
    "            <th style=\"text-align: center\">\n" +
    "                Slot 7\n" +
    "            </th>\n" +
    "            <th style=\"text-align: center\">\n" +
    "                Slot 8\n" +
    "            </th>\n" +
    "            <th>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "            </th>\n" +
    "            <th>\n" +
    "            </th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"collectionGroup in form.collectionGroups | filter: {collection: form.collection.id} : true | orderBy:'collection_category_prio' track by collectionGroup.id\" collection-group-form collection-group=\"collectionGroup\">\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "    <div class=\"clear-both\"></div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/collection/view/collectionGroupFormView.html',
    "<tr>\n" +
    "    <td collection-category-by-id=\"{{form.collectionGroup.collection_category}}\">\n" +
    "        <strong>{{collectionCategoryById.name}}</strong>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.collectibles\" bind-item=\"form.collectionGroup.collectible1\" options=\"form.collectibles\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.collectibles\" bind-item=\"form.collectionGroup.collectible2\" options=\"form.collectibles\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.collectibles\" bind-item=\"form.collectionGroup.collectible3\" options=\"form.collectibles\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.collectibles\" bind-item=\"form.collectionGroup.collectible4\" options=\"form.collectibles\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.collectibles\" bind-item=\"form.collectionGroup.collectible5\" options=\"form.collectibles\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.collectibles\" bind-item=\"form.collectionGroup.collectible6\" options=\"form.collectibles\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.collectibles\" bind-item=\"form.collectionGroup.collectible7\" options=\"form.collectibles\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </td>\n" +
    "    <td>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.collectibles\" bind-item=\"form.collectionGroup.collectible8\" options=\"form.collectibles\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </td>\n" +
    "    <td style=\"width:20px;\">\n" +
    "        <strong>TP-Belohnung:</strong>\n" +
    "        <form-field form-field-bind=\"form.collectionGroup.reward_sp\" form-template=\"inputText\"></form-field>\n" +
    "    </td>\n" +
    "    <td style=\"width:20px;\">\n" +
    "        <strong>Item-Belohnung:</strong>\n" +
    "        <form-field form-field-bind=\"form.collectionGroup.reward_item\" form-template=\"inputText\"></form-field>\n" +
    "    </td>\n" +
    "    <td style=\"width:20px;\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <button type=\"button\" ng-click=\"form.updateCollectionGroup()\" href=\"#\" class=\"btn btn-success pull-right\"><span class=\"fa fa-check\"></span></button>\n" +
    "        </div>\n" +
    "    </td>\n" +
    "</tr>"
  );


  $templateCache.put('js/data/collection/view/collections.html',
    "<header class=\"col-xs-12\">\n" +
    "    <h1>Kollektikon</h1>\n" +
    "</header>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <section class=\"content-box m-b-1\">\n" +
    "        <p class=\"content-body\"><strong>Die Tabellen können (je nach Auflösung) horizontal gescrollt werden.</strong>\n" +
    "\n" +
    "Es gibt Belohnungen für:\n" +
    "- Den Abschluss einer Region\n" +
    "- Den Abschluss einer Kategorie innerhalb einer Region\n" +
    "- Das Sammeln aller Items einer Kategorie regionsübergreifend <strong>(immer 16 TP)</strong>\n" +
    "- Das Sammeln eines Glücksfelds, welche gelb hinterlegt sind <strong>(immer 2 TP)</strong></p>\n" +
    "    </section>\n" +
    "</div>\n" +
    "<div class=\"page-collection col-xs-12\" collection-view>\n" +
    "    <div class=\"collection m-b-2\" ng-repeat=\"collection in collections track by collection.id\">\n" +
    "        <h2>{{collection.region}}</h2>\n" +
    "        <strong>Gesamtbelohnung:</strong> {{collection.reward_sp}} TP, {{collection.reward_item}}\n" +
    "        <div class=\"table-responsive m-t-1\">\n" +
    "            <table class=\"table table-bordered table-not-fixed\">\n" +
    "                <thead>\n" +
    "                <tr>\n" +
    "                    <th></th>\n" +
    "                    <th style=\"text-align: center;\">Slot 1</th>\n" +
    "                    <th style=\"text-align: center;\">Slot 2</th>\n" +
    "                    <th style=\"text-align: center;\">Slot 3</th>\n" +
    "                    <th style=\"text-align: center;\">Slot 4</th>\n" +
    "                    <th style=\"text-align: center;\">Slot 5</th>\n" +
    "                    <th style=\"text-align: center;\">Slot 6</th>\n" +
    "                    <th style=\"text-align: center;\">Slot 7</th>\n" +
    "                    <th style=\"text-align: center;\">Slot 8</th>\n" +
    "                    <th style=\"text-align: center;\">Belohnung</th>\n" +
    "                </tr>\n" +
    "                </thead>\n" +
    "                <tbody>\n" +
    "                    <tr ng-if=\"collectionGroups\" ng-repeat=\"collectionGroup in collectionGroups | filter:{collection: collection.id} : true | orderBy: 'collection_category_prio' track by collectionGroup.id\">\n" +
    "                        <td collection-category-by-id=\"{{collectionGroup.collection_category}}\">\n" +
    "                            <a name=\"kollektikon-kategorie-{{collectionGroup.id}}\"></a>\n" +
    "                            <strong>{{collectionCategoryById.name}}</strong>\n" +
    "                        </td>\n" +
    "                        <td style=\"text-align: center;\" collectible-by-id=\"{{collectionGroup.collectible1}}\" ng-class=\"{'lucky-field': collectibleById.is_lucky_field}\">\n" +
    "                            <a ng-if=\"collectibleById\" ng-href=\"/sammelitems#sammelitem-{{collectibleById.id}}\">{{collectibleById.name}}</a>\n" +
    "                        </td>\n" +
    "                        <td style=\"text-align: center;\" collectible-by-id=\"{{collectionGroup.collectible2}}\" ng-class=\"{'lucky-field': collectibleById.is_lucky_field}\">\n" +
    "                            <a ng-if=\"collectibleById\" ng-href=\"/sammelitems#sammelitem-{{collectibleById.id}}\">{{collectibleById.name}}</a>\n" +
    "                        </td>\n" +
    "                        <td style=\"text-align: center;\" collectible-by-id=\"{{collectionGroup.collectible3}}\" ng-class=\"{'lucky-field': collectibleById.is_lucky_field}\">\n" +
    "                            <a ng-if=\"collectibleById\" ng-href=\"/sammelitems#sammelitem-{{collectibleById.id}}\">{{collectibleById.name}}</a>\n" +
    "                        </td>\n" +
    "                        <td style=\"text-align: center;\" collectible-by-id=\"{{collectionGroup.collectible4}}\" ng-class=\"{'lucky-field': collectibleById.is_lucky_field}\">\n" +
    "                            <a ng-if=\"collectibleById\" ng-href=\"/sammelitems#sammelitem-{{collectibleById.id}}\">{{collectibleById.name}}</a>\n" +
    "                        </td>\n" +
    "                        <td style=\"text-align: center;\" collectible-by-id=\"{{collectionGroup.collectible5}}\" ng-class=\"{'lucky-field': collectibleById.is_lucky_field}\">\n" +
    "                            <a ng-if=\"collectibleById\" ng-href=\"/sammelitems#sammelitem-{{collectibleById.id}}\">{{collectibleById.name}}</a>\n" +
    "                        </td>\n" +
    "                        <td style=\"text-align: center;\" collectible-by-id=\"{{collectionGroup.collectible6}}\" ng-class=\"{'lucky-field': collectibleById.is_lucky_field}\">\n" +
    "                            <a ng-if=\"collectibleById\" ng-href=\"/sammelitems#sammelitem-{{collectibleById.id}}\">{{collectibleById.name}}</a>\n" +
    "                        </td>\n" +
    "                        <td style=\"text-align: center;\" collectible-by-id=\"{{collectionGroup.collectible7}}\" ng-class=\"{'lucky-field': collectibleById.is_lucky_field}\">\n" +
    "                            <a ng-if=\"collectibleById\" ng-href=\"/sammelitems#sammelitem-{{collectibleById.id}}\">{{collectibleById.name}}</a>\n" +
    "                        </td>\n" +
    "                        <td style=\"text-align: center;\" collectible-by-id=\"{{collectionGroup.collectible8}}\" ng-class=\"{'lucky-field': collectibleById.is_lucky_field}\">\n" +
    "                            <a ng-if=\"collectibleById\" ng-href=\"/sammelitems#sammelitem-{{collectibleById.id}}\">{{collectibleById.name}}</a>\n" +
    "                        </td>\n" +
    "                        <td style=\"text-align: center;\">\n" +
    "                            {{collectionGroup.reward_sp}} TP, {{collectionGroup.reward_item}}\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                </tbody>\n" +
    "            </table>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/equip/view/admin_equipupgradecategories.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Erweiterungen - Kategorien</h1>\n" +
    "        <equip-upgrade-category-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedEquipUpgradeCategory\">\n" +
    "                <a ng-click=\"vm.addDeletedEquipUpgradeCategory()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"nameFilter\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <equip-upgrade-category-form equip-upgrade-category=\"newEquipUpgradeCategory\">\n" +
    "                </equip-upgrade-category-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.equipUpgradeCategories | listFilter:nameFilter:'name' track by item.id\" table-list-label=\"{{item.name}} ({{item.type}})\" ng-if=\"vm.equipUpgradeCategories\">\n" +
    "                <equip-upgrade-category-form equip-upgrade-category=\"item\">\n" +
    "                </equip-upgrade-category-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </equip-upgrade-category-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/equip/view/admin_equipupgrades_missing.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Erweiterungen</h1>\n" +
    "        <equip-upgrade-missing-data></equip-upgrade-missing-data>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('js/data/equip/view/admin_equipupgrades.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "            <strong>Stufen pflegen:</strong>\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Stufen können nur an bereits angelegten Erweiterungen hinzugefügt werden\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Öffnet ihr eine bestehende Erweiterung, welche noch keine Stufen hat, könnt ihr diese über einen Button erzeugen (Stufen anlegen)\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Ändert man die Kategorie an einer Erweiterung aktualisiert sich die Anzeige des Typs in der Liste erst nach einem Seiten-Reload!\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <h1>Erweiterungen</h1>\n" +
    "        <equip-upgrade-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedEquipUpgrade\">\n" +
    "                <a ng-click=\"vm.addDeletedEquipUpgrade()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <a href=\"/admin/erweiterungen/was-fehlt\" class=\"btn-primary btn\">Welche Daten fehlen?</a>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"filter.name\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <equip-upgrade-form equip-upgrade=\"newEquipUpgrade\">\n" +
    "                </equip-upgrade-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.equipUpgrades | filter:filter | orderBy: ['name'] track by item.id\" ng-if=\"vm.equipUpgrades\" table-list-label=\"{{item.name}} ({{item.category_type}})\">\n" +
    "                <equip-upgrade-form equip-upgrade=\"item\">\n" +
    "                </equip-upgrade-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </equip-upgrade-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/equip/view/admin_equipUpgradeTiers.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "            <strong>Stufen pflegen:</strong>\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Stufen nur löschen, wenn irgendwie zu viele angelegt wurden! (Ansonsten muss man alle wieder löschen, zum neu generieren)\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <div class=\"m-b-2\" param-from-url param-name=\"equipUpgradeId\">\n" +
    "            <div ng-if=\"paramFromUrl\" equip-upgrade-by-id=\"{{paramFromUrl}}\">\n" +
    "                <a href=\"/admin/erweiterungen\" class=\"btn btn-primary m-b-1\"><span class=\"fa fa-arrow-circle-left\"></span> Erweiterungen</a>\n" +
    "                <div ng-if=\"equipUpgradeById\">\n" +
    "                    <h2 class=\"m-b-1\">{{equipUpgradeById.name}} ({{equipUpgradeById.category_type}})</h2>\n" +
    "                    <p>{{equipUpgradeById.description}}</p>\n" +
    "                    <equip-upgrade-tier-admin>\n" +
    "                        <collapsed-table-list add-form=\"true\">\n" +
    "                            <equip-upgrade-tier-form equip-upgrade-tier=\"newEquipUpgradeTier\">\n" +
    "                            </equip-upgrade-tier-form>\n" +
    "                        </collapsed-table-list>\n" +
    "                        <collapsed-table-list ng-repeat=\"item in vm.equipUpgradeTiers | filter : {equip_upgrade: equipUpgradeById.id} : true | orderBy:'name' track by item.id\">\n" +
    "                            <equip-upgrade-tier-form equip-upgrade-tier=\"item\"></equip-upgrade-tier-form>\n" +
    "                        </collapsed-table-list>\n" +
    "                    </equip-upgrade-tier-admin>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</main>\n" +
    "</main>"
  );


  $templateCache.put('js/data/equip/view/equipUpgradeCategoryFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteEquipUpgradeCategory()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updateEquipUpgradeCategory()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeCategory.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Beschreibung:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeCategory.description\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Standardwert 'Waffen'\"></span>\n" +
    "        <strong>Typ:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeCategory.type\" form-template=\"stringSelect\" form-select-options=\"form.equipUpgradeTypes\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <input type=\"submit\" href=\"#\" class=\"btn btn-success pull-right\" value=\"Speichern\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/equip/view/equipUpgradeFormView.html',
    "<div class=\"row m-b-2\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button type=\"button\" href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteEquipUpgrade()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgrade.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Alternativer Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgrade.alternative_name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Beschreibung:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgrade.description\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Kann nicht hergestellt werden?</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgrade.is_not_manufacturable\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Hat keine Stufen?</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgrade.has_no_tiers\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Standardwert 'Waffen'\"></span>\n" +
    "        <strong>Kategorie:</strong>\n" +
    "        <form-field ng-if=\"form.equipUpgradeCategories\" form-field-label=\"type\" form-field-bind=\"form.equipUpgradeCategory\" form-select-options=\"form.equipUpgradeCategories\" form-template=\"customAutoCompleteSelect\"></form-field>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <strong>I, V</strong>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material 1 - I, V:</strong>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.materials\" bind-item=\"form.equipUpgrade.material_small1\" options=\"form.materials\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material 2 - I, V:</strong>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.materials\" bind-item=\"form.equipUpgrade.material_small2\" options=\"form.materials\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material 3 - I, V:</strong>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.materials\" bind-item=\"form.equipUpgrade.material_small3\" options=\"form.materials\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <strong>X, XV, XX</strong>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material 1 - X, XV, XX:</strong>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.materials\" bind-item=\"form.equipUpgrade.material_large1\" options=\"form.materials\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material 2 - X, XV, XX:</strong>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.materials\" bind-item=\"form.equipUpgrade.material_large2\" options=\"form.materials\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material 3 - X, XV, XX:</strong>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.materials\" bind-item=\"form.equipUpgrade.material_large3\" options=\"form.materials\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12 p-r-0\">\n" +
    "        <button type=\"button\" ng-click=\"form.updateEquipUpgrade()\" class=\"btn btn-success pull-right\">Speichern</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ng-if=\"form.equipUpgrade.id\">\n" +
    "    <div class=\"clear-both\"></div>\n" +
    "    <a class=\"btn btn-primary m-r-2\" href=\"/admin/erweiterungen/{{form.equipUpgrade.id}}/stufen\">Stufen <span class=\"fa fa-arrow-circle-right\"></span></a>\n" +
    "    <button ng-if=\"(form.equipUpgradeTiers | filter:{equip_upgrade:form.equipUpgrade.id}:true).length==0\" class=\"btn btn-success\" type=\"button\" ng-click=\"form.createEquipUpgradeTiers()\">Stufen anlegen</button>\n" +
    "    <!--<div class=\"clear-both m-y-3\"></div>-->\n" +
    "    <!--<button ng-if=\"(form.equipUpgradeTiers | filter: {equip_upgrade: form.equipUpgrade.id}).length>0\" class=\"btn btn-danger\" type=\"button\" ng-click=\"form.deleteEquipUpgradeTiers()\">Stufen löschen</button>-->\n" +
    "</div>"
  );


  $templateCache.put('js/data/equip/view/equipUpgradeMissingDataView.html',
    "<div class=\"missing-data-view\">\n" +
    "    <a href=\"/admin/erweiterungen\" class=\"btn-primary btn\">Erweiterungen</a>\n" +
    "    <div class=\"table-responsive m-t-2\">\n" +
    "        <table class=\"table table-bordered\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Name\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Beschreibung\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Nicht herstellbar?\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Kategorie\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        I\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        V\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        X\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        XV\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        XX\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"equipUpgrade in equipUpgrades | orderBy:['name'] track by equipUpgrade.id\">\n" +
    "                    <td>\n" +
    "                        {{equipUpgrade.name}} <span ng-if=\"equipUpgrade.alternative_name\">({{equipUpgrade.alternative_name}})</span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{equipUpgrade.description}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"equipUpgrade.is_not_manufacturable\">\n" +
    "                            Ja\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!equipUpgrade.is_not_manufacturable\">\n" +
    "                            Nein\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{equipUpgrade.category_name}} ({{equipUpgrade.category_type}})\n" +
    "                    </td>\n" +
    "                    <td style=\"text-align: left; vertical-align: top\" ng-repeat=\"equipUpgradeTier in equipUpgradeTiers | orderBy: 'name' | filter: {equip_upgrade: equipUpgrade.id} : true track by equipUpgradeTier.id\">\n" +
    "                        {{equipUpgradeTier.credit_cost}} Credits\n" +
    "                        <ul>\n" +
    "                            <li ng-repeat=\"i in [1,2,3] track by $index\" material-by-id=\"{{getEquipUpgradeTierMaterial(equipUpgrade, equipUpgradeTier, i)}}\" ng-if=\"getEquipUpgradeTierMaterial(equipUpgrade, equipUpgradeTier, i)\">\n" +
    "                                {{materialById.name}}\n" +
    "                                <span ng-if=\"!equipUpgradeTier.material_count_individual\">\n" +
    "                                    ({{equipUpgradeTier.material_count}})\n" +
    "                                </span>\n" +
    "                                <span ng-if=\"equipUpgradeTier.material_count_individual\">\n" +
    "                                    ({{equipUpgradeTier.material1_count}})\n" +
    "                                </span>\n" +
    "                            </li>\n" +
    "                            <li resource-by-id=\"{{equipUpgradeTier.resource}}\" ng-if=\"equipUpgradeTier.resource\">\n" +
    "                                {{resourceById.name}} ({{equipUpgradeTier.resource_count}})\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/equip/view/equipUpgrades.html',
    "<header param-from-url param-name=\"type\" class=\"col-xs-12\">\n" +
    "    <h1>Erweiterungen <span ng-if=\"paramFromUrl\">- {{paramFromUrl}}</span></h1>\n" +
    "</header>\n" +
    "<div param-from-url param-name=\"type\" class=\"col-xs-12\">\n" +
    "    <section class=\"content-box default-amrgin-b\">\n" +
    "    <p class=\"content-body\">Unter \"Alle\" findet ihr sämtliche Erweiterungen in die Kategorien unterteilt.\n" +
    "Da die Ressourcen (Erhalt über Sonden) noch nicht auf unserer Seite gelistet sind, sind diese nicht verlinkt.</p>\n" +
    "    </section>\n" +
    "    <equip-upgrade-view>\n" +
    "        <div class=\"row m-b-1\">\n" +
    "            <div class=\"col-xs-12 col-lg-3 search-input m-b-1\">\n" +
    "                <input ng-model=\"nameQuery\" ng-change=\"filter.alternative_name = filter.name\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Namen filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <collapsed-content>\n" +
    "            <section class=\"collapse-grouped\" ng-repeat=\"equipUpgradeGroup in groupedEquipUpgrades\">\n" +
    "            <h1 ng-if=\"(equipUpgradeGroup.rows | filter:{category_type: paramFromUrl}).length>0 && (equipUpgradeGroup.rows | filter:filterNames).length>0\">{{equipUpgradeGroup.name}}</h1>\n" +
    "            <div class=\"collapse-item\" ng-repeat=\"equipUpgrade in equipUpgradeGroup.rows | filter:filterNames | orderBy:'name' track by equipUpgrade.id\">\n" +
    "                <a name=\"equipUpgrade-{{equipUpgrade.id}}\"></a>\n" +
    "                <a href=\"#equipUpgrade-{{$parent.$index}}-{{$index}}\" ng-click=\"visible('equipUpgrade-'+$parent.$index+'-'+$index)\" class=\"collapsed content-box\" onclick=\"return false;\" data-toggle=\"collapse\" aria-expanded=\"false\">\n" +
    "                    <strong>\n" +
    "                        {{equipUpgrade.name}} <span ng-if=\"equipUpgrade.alternative_name\">/ {{equipUpgrade.alternative_name}}</span><span ng-if=\"equipUpgrade.is_not_manufacturable\" style=\"font-size: 14px; font-style: italic; font-weight: normal\">(Nicht herstellbar)</span>\n" +
    "                    </strong>\n" +
    "                    <span class=\"collapse-arrow fa\"></span>\n" +
    "                    <ul class=\"collapse-notes\">\n" +
    "                        <li ng-if=\"!paramFromUrl\">\n" +
    "                            {{equipUpgrade.category_type}}\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </a>\n" +
    "                <div id=\"equipUpgrade-{{$parent.$index}}-{{$index}}\" class=\"content-box collapse\">\n" +
    "                    <div ng-if=\"isVisible('equipUpgrade-'+$parent.$index+'-'+$index)\" class=\"content-body\">\n" +
    "                        <div ng-if=\"equipUpgrade.description\" class=\"row\">\n" +
    "                            <div class=\"col-xs-12 col-md-6\">\n" +
    "                                <p>{{equipUpgrade.description}}</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row m-t-1 auto-clear\">\n" +
    "                            <div ng-if=\"(equipUpgradeTiers | filter: {equip_upgrade: equipUpgrade.id}: true).length == 5\">\n" +
    "                                <div class=\"col-lg-4 col-sm-6 col-xs-12 m-b-1\" ng-repeat=\"equipUpgradeTier in equipUpgradeTiers | orderBy: 'name' | filter: {equip_upgrade: equipUpgrade.id} : true track by equipUpgradeTier.id\">\n" +
    "                                    <h6>{{equipUpgradeTier.name}}</h6>\n" +
    "                                    <div style=\" float: right; font-style: italic; font-weight: 500; font-size: 12px;\" ng-switch=\"equipUpgradeTier.name\">\n" +
    "                                        <span ng-switch-when=\"I\">Gewöhnlich</span>\n" +
    "                                        <span ng-switch-when=\"V\" class=\"rarity wertvoll\">Wertvoll</span>\n" +
    "                                        <span ng-switch-when=\"X\" class=\"rarity sehrwertvoll\">Sehr Wertvoll</span>\n" +
    "                                        <span ng-switch-when=\"XV\" class=\"rarity extremwertvoll\">Extrem Wertvoll</span>\n" +
    "                                        <span ng-switch-when=\"XX\" class=\"rarity unbezahlbar\">Unbezahlbar</span>\n" +
    "                                    </div>\n" +
    "                                    <hr/>\n" +
    "                                    <p ng-if=\"equipUpgradeTier.description\" class=\"m-b-1\">{{equipUpgradeTier.description}}</p>\n" +
    "                                    {{equipUpgradeTier.credit_cost}} Credits\n" +
    "                                    <ul>\n" +
    "                                        <li ng-repeat=\"i in [1,2,3] track by $index\" material-by-id=\"{{getEquipUpgradeTierMaterial(equipUpgrade, equipUpgradeTier, i)}}\" ng-if=\"getEquipUpgradeTierMaterial(equipUpgrade, equipUpgradeTier, i)\">\n" +
    "                                            <a ng-href=\"/material#material-{{materialById.id}}\">{{materialById.name}}</a>\n" +
    "                                            <span ng-if=\"!equipUpgradeTier.material_count_individual\">\n" +
    "                                                ({{equipUpgradeTier.material_count}})\n" +
    "                                            </span>\n" +
    "                                            <span ng-if=\"equipUpgradeTier.material_count_individual\">\n" +
    "                                                ({{equipUpgradeTier.material1_count}})\n" +
    "                                            </span>\n" +
    "                                        </li>\n" +
    "                                        <li resource-by-id=\"{{equipUpgradeTier.resource}}\" ng-if=\"equipUpgradeTier.resource\">\n" +
    "                                            {{resourceById.name}} ({{equipUpgradeTier.resource_count}})\n" +
    "                                        </li>\n" +
    "                                    </ul>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div ng-if=\"(equipUpgradeTiers | filter: {equip_upgrade: equipUpgrade.id} : true).length == 1\">\n" +
    "                                <div class=\"col-xs-12\">\n" +
    "                                    <span ng-if=\"!equipUpgrade.is_not_manufacturable\" class=\"rarity sehrwertvoll\">Sehr Wertvoll</span>\n" +
    "                                    <div ng-repeat=\"equipUpgradeTier in equipUpgradeTiers | orderBy: 'name' | filter: {equip_upgrade: equipUpgrade.id} : true track by equipUpgradeTier.id\">\n" +
    "                                        <p ng-if=\"equipUpgradeTier.description\" class=\"m-y-1\">{{equipUpgradeTier.description}}</p>\n" +
    "                                        {{equipUpgradeTier.credit_cost}} Credits\n" +
    "                                        <ul>\n" +
    "                                            <li ng-repeat=\"i in [1,2,3] track by $index\" material-by-id=\"{{getEquipUpgradeTierMaterial(equipUpgrade, equipUpgradeTier, i)}}\" ng-if=\"getEquipUpgradeTierMaterial(equipUpgrade, equipUpgradeTier, i)\">\n" +
    "                                                <a ng-href=\"/material#material-{{materialById.id}}\">{{materialById.name}}</a>\n" +
    "                                                <span ng-if=\"!equipUpgradeTier.material_count_individual\">\n" +
    "                                                    ({{equipUpgradeTier.material_count}})\n" +
    "                                                </span>\n" +
    "                                                <span ng-if=\"equipUpgradeTier.material_count_individual\">\n" +
    "                                                    ({{equipUpgradeTier.material1_count}})\n" +
    "                                                </span>\n" +
    "                                            </li>\n" +
    "                                            <li resource-by-id=\"{{equipUpgradeTier.resource}}\" ng-if=\"equipUpgradeTier.resource\">\n" +
    "                                                {{resourceById.name}} ({{equipUpgradeTier.resource_count}})\n" +
    "                                            </li>\n" +
    "                                        </ul>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        </collapsed-content>\n" +
    "    </equip-upgrade-view>\n" +
    "</div>\n"
  );


  $templateCache.put('js/data/equip/view/equipUpgradeTierFormView.html',
    "<div class=\"row m-b-2\">\n" +
    "    <div class=\"col-xs-12\">\n" +
    "        <button type=\"button\" ng-click=\"form.deleteEquipUpgradeTier()\" class=\"btn btn-danger pull-right\">Löschen</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div param-from-url param-name=\"equipUpgradeId\">\n" +
    "    <input ng-if=\"paramFromUrl\" type=\"hidden\" ng-model=\"form.equipUpgradeTier.equip_upgrade\" value=\"{{paramFromUrl}}\" ng-init=\"form.equipUpgradeTier.equip_upgrade=paramFromUrl\"/>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeTier.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Verkaufswert:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeTier.credit_cost\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Beschreibung:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeTier.description\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Individuelle Material-Anzahl?</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeTier.material_count_individual\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Individuelles Material?</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeTier.material_individual\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div ng-if=\"!form.equipUpgradeTier.material_count_individual\" class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material - Anzahl:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeTier.material_count\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div ng-if=\"form.equipUpgradeTier.material_count_individual || form.equipUpgradeTier.material_individual\" class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material 1</strong>\n" +
    "        <div ng-if=\"form.equipUpgradeTier.material_individual\" class=\"m-b-1\">\n" +
    "            <bind-autocomplete-as-id ng-if=\"form.materials\" bind-item=\"form.equipUpgradeTier.material1\" options=\"form.materials\">\n" +
    "            </bind-autocomplete-as-id>\n" +
    "        </div>\n" +
    "        <div ng-if=\"form.equipUpgradeTier.material_count_individual\" class=\"clear-both\">\n" +
    "            <strong>Anzahl:</strong>\n" +
    "            <form-field form-field-bind=\"form.equipUpgradeTier.material1_count\" form-template=\"inputText\"></form-field>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"form.equipUpgradeTier.material_count_individual || form.equipUpgradeTier.material_individual\" class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material 2</strong>\n" +
    "        <div ng-if=\"form.equipUpgradeTier.material_individual\" class=\"m-b-1\">\n" +
    "            <bind-autocomplete-as-id ng-if=\"form.materials\" bind-item=\"form.equipUpgradeTier.material2\" options=\"form.materials\">\n" +
    "            </bind-autocomplete-as-id>\n" +
    "        </div>\n" +
    "        <div ng-if=\"form.equipUpgradeTier.material_count_individual\" class=\"clear-both\">\n" +
    "            <strong>Anzahl:</strong>\n" +
    "            <form-field form-field-bind=\"form.equipUpgradeTier.material2_count\" form-template=\"inputText\"></form-field>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div ng-if=\"form.equipUpgradeTier.material_count_individual || form.equipUpgradeTier.material_individual\" class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material 3</strong>\n" +
    "        <div ng-if=\"form.equipUpgradeTier.material_individual\" class=\"m-b-1\">\n" +
    "            <bind-autocomplete-as-id ng-if=\"form.materials\" bind-item=\"form.equipUpgradeTier.material3\" options=\"form.materials\">\n" +
    "            </bind-autocomplete-as-id>\n" +
    "        </div>\n" +
    "        <div ng-if=\"form.equipUpgradeTier.material_count_individual\" class=\"clear-both\">\n" +
    "            <strong>Anzahl:</strong>\n" +
    "            <form-field form-field-bind=\"form.equipUpgradeTier.material3_count\" form-template=\"inputText\"></form-field>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Resource:</strong>\n" +
    "        <bind-autocomplete-as-id ng-if=\"form.resources\" bind-item=\"form.equipUpgradeTier.resource\" options=\"form.resources\">\n" +
    "        </bind-autocomplete-as-id>\n" +
    "        <div class=\"clear-both\"></div>\n" +
    "        <strong>Anzahl:</strong>\n" +
    "        <form-field form-field-bind=\"form.equipUpgradeTier.resource_count\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 m-y-1\">\n" +
    "            <button ng-if=\"paramFromUrl\" type=\"button\" ng-click=\"form.updateEquipUpgradeTier()\" class=\"btn btn-success pull-right\">Speichern</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/faq/view/admin_faqs.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>FAQ</h1>\n" +
    "        <faq-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedFaq\">\n" +
    "                <a ng-click=\"vm.addDeletedFaq()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"nameFilter\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <faq-form faq=\"newFaq\">\n" +
    "                </faq-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.faqs | listFilter:nameFilter:'name' track by item.id\" ng-if=\"vm.faqs\">\n" +
    "                <faq-form faq=\"item\">\n" +
    "                </faq-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </faq-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/faq/view/faq.html',
    "<header class=\"col-xs-12\">\n" +
    "    <h1>FAQ</h1>\n" +
    "</header>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <section class=\"content-box default-amrgin-b\">\n" +
    "        <p class=\"content-body\">Hier findet ihr Antworten auf häufig gestellte Fragen, die euch den Einstieg und das Vorankommen erleichtern sollen.</p>\n" +
    "    </section>\n" +
    "    <faq-view>\n" +
    "        <div class=\"search-input m-b-2\">\n" +
    "            <input ng-model=\"filterValue\" type=\"text\" placeholder=\"Fragen filtern...\" />\n" +
    "            <span class=\"fa fa-search\"></span>\n" +
    "        </div>\n" +
    "        <section class=\"collapse-grouped\" ng-repeat=\"faqGroup in groupedFaqs | orderBy:'name'\">\n" +
    "            <h1>{{faqGroup.name}}</h1>\n" +
    "            <div class=\"collapse-item\" ng-repeat=\"faq in faqGroup.rows | sortAlphaNumeric:'name'  | listFilter:filterValue:'name' track by faq.id\">\n" +
    "                <a href=\"#faq-{{$parent.$index}}-{{$index}}\" class=\"collapsed content-box\" onclick=\"return false;\" data-toggle=\"collapse\" aria-expanded=\"false\"><strong>{{faq.name}}</strong><span class=\"fa collapse-arrow\"></span></a>\n" +
    "                <div id=\"faq-{{$parent.$index}}-{{$index}}\" class=\"content-box collapse\">\n" +
    "                    <p class=\"content-body\">{{faq.answer}}</p>\n" +
    "                    <a ng-if=\"faq.answer_read_more\" href=\"#faq-read-more-{{$parent.$parent.$index}}-{{$index}}\" class=\"collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\" onclick=\"return false;\"><span class=\"fa collapse-arrow\"></span> Mehr Infos</a>\n" +
    "                    <div ng-if=\"faq.answer_read_more\" id=\"faq-read-more-{{$parent.$parent.$index}}-{{$index}}\" class=\"collapse\">\n" +
    "                        <p class=\"content-body\">{{faq.answer_read_more}}</p>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "    </faq-view>\n" +
    "</div>\n"
  );


  $templateCache.put('js/data/faq/view/faqFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteFaq()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updateFaq()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Frage:</strong>\n" +
    "        <form-field form-field-bind=\"form.faq.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Antwort:</strong>\n" +
    "        <form-field form-field-bind=\"form.faq.answer\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Antwort - Erweitert:</strong>\n" +
    "        <form-field form-field-bind=\"form.faq.answer_read_more\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Standardwert 'Sonstiges'\"></span>\n" +
    "        <strong>Kategorie:</strong>\n" +
    "        <form-field form-field-bind=\"form.faq.category\" form-template=\"stringSelect\" form-select-options=\"form.faqCategories\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <input type=\"submit\" href=\"#\" class=\"btn btn-success pull-right\" value=\"Speichern\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/guide/view/admin_guide.html',
    "<main role=\"main\" param-from-url=\"\" param-name=\"guideId\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "            Für eine aktuelle Vorschau, muss der Inhalt gespeichert werden.\n" +
    "        </div>\n" +
    "        <div ng-if=\"paramFromUrl\" guide-by-id=\"{{paramFromUrl}}\">\n" +
    "            <h1 class=\"m-b-1\">Guide - {{guideById.name}}</h1>\n" +
    "            <guide-form ng-if=\"guideById\" guide=\"guideById\">\n" +
    "            </guide-form>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!paramFromUrl\">\n" +
    "            <h1 class=\"m-b-1\">Guide - Erstellen</h1>\n" +
    "            <guide-form>\n" +
    "            </guide-form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/guide/view/admin_guides.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1 class=\"m-b-1\">Guides</h1>\n" +
    "        <guide-admin>\n" +
    "            <a href=\"/admin/guide\" class=\"btn btn-success m-b-2\">Guide anlegen</a>\n" +
    "            <div class=\"table-responsive\">\n" +
    "                <table class=\"table table-striped\">\n" +
    "                    <thead>\n" +
    "                    <tr>\n" +
    "                        <th>\n" +
    "                            Name\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            Autor\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            Zuletzt bearbeitet\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "                            Erstellt\n" +
    "                        </th>\n" +
    "                        <th>\n" +
    "\n" +
    "                        </th>\n" +
    "                    </tr>\n" +
    "                    </thead>\n" +
    "                    <tbody>\n" +
    "                    <tr ng-repeat=\"guide in vm.guides track by guide.id\">\n" +
    "                        <td>\n" +
    "                            {{guide.name}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{guide.author}}\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{guide.last_edited | date:'dd.MM.yyyy HH:mm'}} Uhr\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            {{guide.created | date:'dd.MM.yyyy HH:mm'}} Uhr\n" +
    "                        </td>\n" +
    "                        <td>\n" +
    "                            <a ng-href=\"/admin/guide/{{guide.id}}\" class=\"btn btn-primary pull-right\">Bearbeiten</a>\n" +
    "                        </td>\n" +
    "                    </tr>\n" +
    "                    </tbody>\n" +
    "                </table>\n" +
    "            </div>\n" +
    "        </guide-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/guide/view/guide.html',
    "<header param-from-url=\"\" param-name=\"guideId\" class=\"col-xs-12\">\n" +
    "    <h1 ng-if=\"paramFromUrl\" guide-by-id=\"{{paramFromUrl}}\">{{guideById.name}}</h1>\n" +
    "</header>\n" +
    "<div guide-view param-from-url=\"\" param-name=\"guideId\" class=\"col-xs-12\">\n" +
    "    <section ng-if=\"paramFromUrl\" guide-by-id=\"{{paramFromUrl}}\" class=\"content-box m-b-1 p-x-1 p-y-1\">\n" +
    "        <div ng-if=\"guideById\">\n" +
    "            <div>\n" +
    "                <div class=\"pull-left\">\n" +
    "                    <strong>Geschrieben von:</strong>\n" +
    "                    {{guideById.author}}\n" +
    "                </div>\n" +
    "                <div class=\"pull-right text-xs-right\">\n" +
    "                    <strong>Zuletzt bearbeitet:</strong>\n" +
    "                    {{guideById.created | date:'dd.MM.yyyy'}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"clear-both\"></div>\n" +
    "            <hr />\n" +
    "            <div class=\"ta-view\" bind-html-compile=\"guideById.copy\" images-with-overlay>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </section>\n" +
    "</div>\n"
  );


  $templateCache.put('js/data/guide/view/guideFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-xs-12 p-l-0 p-b-1\">\n" +
    "        <a href=\"/admin/guides\" class=\"btn btn-primary pull-left\"><i class=\"fa fa-arrow-left\"></i> Guides</a>\n" +
    "        <a target=\"_blank\" href=\"/guides/{{form.guide.id}}\" class=\" pull-left btn btn-primary m-l-1\">Vorschau</a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"content-box p-x-1 p-y-1\">\n" +
    "    <div class=\"row m-b-2\">\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.guide.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row m-b-2\">\n" +
    "        <strong>Autor:</strong>\n" +
    "        <form-field form-field-bind=\"form.guide.author\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row m-b-2\">\n" +
    "        <strong>Inhalt:</strong>\n" +
    "        <div text-angular=\"\" ta-toolbar=\"[['bold','italics','underline','strikeThrough','fontcolor','fontsize'], ['ul', 'ol', 'undo', 'redo'], ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', 'indent', 'outdent', 'twocolumn'], ['clear', 'insertImage', 'spoiler','anchor','insertLink', 'insertVideo', 'html', 'wordcount', 'charcount']]\" ng-model=\"form.guide.copy\"></div>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-x-0\">\n" +
    "            <input type=\"submit\" ng-click=\"form.updateGuide()\" href=\"#\" class=\"btn btn-success pull-right\" value=\"Speichern\" />\n" +
    "            <button ng-if=\"form.guide.id\" href=\"#\" class=\"btn btn-danger pull-left\" ng-click=\"form.deleteGuide()\">\n" +
    "                Löschen\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('js/data/map/view/admin_leafletMap.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Leaflet Beispielkarte</h1>\n" +
    "        <leaflet-map></leaflet-map>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/map/view/admin_mapmarkers.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Karten müssen zuerst unter \"Karten\" angelegt werden\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Die Position eines Markers kann aktuell nicht geändert werden, dafür muss er gelöscht werden\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Es werden weitere Tabs für Missionen, Orte etc. folgen\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Es kommt auch noch ein Feld jeweils hinzu um die Punkte direkt an den Daten pflegen zu können\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Auf der Seite später stellen wir die Marker nicht als Buttons dar ;-) Sind so nur leichter zu bearbeiten :-)\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <h1>Kartenpunkte</h1>\n" +
    "        <mapmarker-admin></mapmarker-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/map/view/admin_maps.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-warning\" role=\"alert\">\n" +
    "            Vorerst deaktiviert -> Hängt zusammen mit dem Umbau für Kartenpunkte.\n" +
    "        </div>\n" +
    "        <h1>Karten</h1>\n" +
    "        <!--<map-admin></map-admin>-->\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/map/view/admin_mapTiles.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Sitzt das Raster nicht richtig, ist zu klein etc. können Abstand, Versatz und Größe in der Kartenpflege angepasst werden.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Das Raster selbst sind noch keine Segmente, denn später sollen ja auch nur die tatsächlich im Spiel vorhandenen Segmente auf der Seite angezeigt werden.\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Klicke auf ein Hexagon im Raster um dort ein Segment zu erstellen.\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <h1>Segmente</h1>\n" +
    "        <map-tile-admin></map-tile-admin>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('js/data/map/view/mapAdminView.html',
    "<div class=\"map-admin-view\">\n" +
    "    <div class=\"alert alert-warning\" ng-show=\"deletedMap\">\n" +
    "        <a ng-click=\"addDeletedMap()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "    </div>\n" +
    "    <collapsed-table ng-if=\"formModel && maps\" view-data=\"maps\" form-model=\"formModel\" add-object=\"newMap\" add-item=\"addMap(item)\"  update-item=\"updateMap(item)\" delete-item=\"deleteMap(item)\"></collapsed-table>\n" +
    "</div>"
  );


  $templateCache.put('js/data/map/view/mapFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteMap()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updateMap()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.map.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Bild:</strong>\n" +
    "        <form-field ng-if=\"form.attachments\" form-field-bind=\"form.attachment\" form-select-options=\"form.attachments\" form-template=\"customAttachmentInput\" form-field-action-param=\"image\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Wert in Pixeln. Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Segment - Durchmesser:</strong>\n" +
    "        <form-field form-field-bind=\"form.map.grid_tile_diameter\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Muss nicht exakt sein, Wert in Pixeln. Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Raster - Breite:</strong>\n" +
    "        <form-field form-field-bind=\"form.map.grid_width\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Muss nicht exakt sein, Wert in Pixeln. Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Raster - Höhe:</strong>\n" +
    "        <form-field form-field-bind=\"form.map.grid_height\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Wert in Pixeln. Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Raster horizontal verschieben um...</strong>\n" +
    "        <form-field form-field-bind=\"form.map.grid_offset_x\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Wert in Pixeln. Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Raster vertikal verschieben um...</strong>\n" +
    "        <form-field form-field-bind=\"form.map.grid_offset_y\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/map/view/mapmarkerAdminView.html',
    "<div class=\"map-admin\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <label>Karte wählen:</label>\n" +
    "        <select ng-if=\"maps\" ng-model=\"selectedMapId\" ng-change=\"selectMap(selectedMapId)\" class=\"form-control\" ng-options=\"map.id as map.name for map in maps\"></select>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <label>Name:</label>\n" +
    "        <input ng-model=\"newMapmarker.name\" type=\"text\" class=\"form-control\">\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <label>Beschreibung:</label>\n" +
    "        <input ng-model=\"newMapmarker.description\" type=\"text\" class=\"form-control\">\n" +
    "    </div>\n" +
    "    <ul class=\"nav nav-tabs\">\n" +
    "        <li class=\"nav-item\">\n" +
    "            <a class=\"nav-link active\" href=\"#\">Personen</a>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "    <div class=\"row m-t-1 map-container\">\n" +
    "        <div class=\"col-xs-12\">\n" +
    "            <img ng-if=\"currentMap\" ng-click=\"addMapmarker($event)\" ng-src=\"/xenobladex/attachment/{{currentMap.attachment.id}}\" />\n" +
    "            <div class=\"mapmarker-wrapper\" ng-repeat=\"mapmarker in mapmarkers | filter:{person: { id: newMapmarker.person.id }}\" ng-click=\"setZIndex($event)\" style=\"position: absolute; top: {{mapmarker.y_coord}}px; left: {{mapmarker.x_coord}}px;\">\n" +
    "                <button class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#mapmarker-edit-{{$index}}\" aria-expanded=\"false\">\n" +
    "                    <span class=\"fa fa-map-marker\"></span> {{mapmarker.person.name}} - {{mapmarker.name}}\n" +
    "                </button>\n" +
    "                <div id=\"mapmarker-edit-{{$index}}\" class=\"collapse\">\n" +
    "                    <div class=\"card\">\n" +
    "                        <div class=\"card-block\">\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Name:</label>\n" +
    "                                <input ng-model=\"mapmarker.name\" value=\"mapmarker.name\" class=\"form-control\" type=\"text\">\n" +
    "                            </div>\n" +
    "                            <div class=\"form-group\">\n" +
    "                                <label>Beschreibung:</label>\n" +
    "                                <input ng-model=\"mapmarker.description\" value=\"mapmarker.description\" class=\"form-control\" type=\"text\">\n" +
    "                            </div>\n" +
    "                            <button class=\"btn btn-success\" ng-click=\"updateMapmarker(mapmarker)\">Ändern</button>\n" +
    "                            <button class=\"btn btn-danger\" ng-click=\"deleteMapmarker(mapmarker)\">Löschen</button>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"col-md-2 col-xs-12 detail-select-overlay m-t-1 m-l-1\">\n" +
    "            <button class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#detail-select-box\" aria-expanded=\"false\">{{newMapmarker.person.name || 'Person auswählen'}} <span class=\"fa fa-arrow-circle-down p-l-1\"></span></button>\n" +
    "            <div id=\"detail-select-box\" class=\"collapse\">\n" +
    "                <div class=\"card\">\n" +
    "                    <div class=\"card-block\">\n" +
    "                        <h4 class=\"card-title\">\n" +
    "                            Person:\n" +
    "                        </h4>\n" +
    "                        <autocomplete-select ng-if=\"persons\" autocomplete-list=\"persons\" autocomplete-option-name=\"name\" autocomplete-option-value=\"id\" autocomplete-text-input-bind=\"newMapmarker.person.name\" autocomplete-bind=\"newMapmarker.person.id\"></autocomplete-select>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/map/view/mapmarkerInputView.html',
    "<div class=\"map-admin map-marker-input\">\n" +
    "    <a href=\"#\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#{{contentId}}\"><span class=\"fa fa-map\"></span></a>\n" +
    "    <div class=\"modal modal-fullsize fade\" id=\"{{contentId}}\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n" +
    "        <div class=\"modal-dialog p-x-1 p-y-1\" role=\"document\">\n" +
    "            <div class=\"modal-content\">\n" +
    "                <div class=\"modal-header\">\n" +
    "                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n" +
    "                        <span aria-hidden=\"true\">&times;</span>\n" +
    "                    </button>\n" +
    "                    <h4 class=\"modal-title\" id=\"myModalLabel\">Kartenpunkte setzen</h4>\n" +
    "                </div>\n" +
    "                <div class=\"modal-body\">\n" +
    "                    <div class=\"form-group\">\n" +
    "                        <label>Karte wählen:</label>\n" +
    "                        <select ng-if=\"maps\" ng-model=\"selectedMapId\" ng-change=\"selectMap(selectedMapId)\" class=\"form-control\" ng-options=\"map.id as map.name for map in maps\"></select>\n" +
    "                    </div>\n" +
    "                    <div class=\"row m-t-1 map-container\">\n" +
    "                        <div class=\"col-xs-12\">\n" +
    "                            <img ng-if=\"currentMap\" ng-click=\"addMapmarker($event)\" ng-src=\"/xenobladex/attachment/{{currentMap.attachment.id}}\" />\n" +
    "                            <div class=\"mapmarker-wrapper\" ng-repeat=\"mapmarker in shownMapmarkers\" ng-click=\"setZIndex($event)\" style=\"position: absolute; top: {{mapmarker.y_coord}}px; left: {{mapmarker.x_coord}}px;\">\n" +
    "                                <button class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#mapmarker-edit-{{$index}}\" aria-expanded=\"false\">\n" +
    "                                    <span class=\"fa fa-map-marker\"></span> {{mapmarker.name}}\n" +
    "                                </button>\n" +
    "                                <div id=\"mapmarker-edit-{{$index}}\" class=\"collapse\">\n" +
    "                                    <div class=\"card\">\n" +
    "                                        <div class=\"card-block\">\n" +
    "                                            <div class=\"form-group\">\n" +
    "                                                <label>Name:</label>\n" +
    "                                                <input ng-model=\"mapmarker.name\" value=\"mapmarker.name\" class=\"form-control\" type=\"text\">\n" +
    "                                            </div>\n" +
    "                                            <div class=\"form-group\">\n" +
    "                                                <label>Beschreibung:</label>\n" +
    "                                                <input ng-model=\"mapmarker.description\" value=\"mapmarker.description\" class=\"form-control\" type=\"text\">\n" +
    "                                            </div>\n" +
    "                                            <button class=\"btn btn-danger\" ng-click=\"deleteMapmarker(mapmarker)\">Löschen</button>\n" +
    "                                        </div>\n" +
    "                                    </div>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/map/view/mapTileAdminView.html',
    "<div class=\"map-admin map-tile-admin-view\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <label>Karte wählen:</label>\n" +
    "        <select ng-if=\"maps\" ng-model=\"selectedMapId\" ng-change=\"selectMap(selectedMapId)\" class=\"form-control\" ng-options=\"map.id as map.name for map in maps\"></select>\n" +
    "    </div>\n" +
    "    <div ng-if=\"currentMap\" class=\"map-container\">\n" +
    "        <map-grid map=\"currentMap\"></map-grid>\n" +
    "        <img ng-src=\"/xenobladex/attachment/{{currentMap.attachment.id}}\" />\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/material/view/admin_material.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Material</h1>\n" +
    "        <material-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedMaterial\">\n" +
    "                <a ng-click=\"vm.addDeletedMaterial()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <a href=\"/admin/material/was-fehlt\" class=\"btn-primary btn\">Welche Daten fehlen?</a>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"nameFilter\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <material-form material=\"newMaterial\">\n" +
    "                </material-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.materials | listFilter:nameFilter:'name' track by item.id\" ng-if=\"vm.materials\">\n" +
    "                <material-form material=\"item\">\n" +
    "                </material-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </material-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/material/view/admin_materials_missing.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Material</h1>\n" +
    "        <material-missing-data></material-missing-data>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('js/data/material/view/materialFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteMaterial()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updateMaterial()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.material.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Seltenheit:</strong>\n" +
    "        <form-field form-field-bind=\"form.material.rarity\" form-template=\"stringSelect\" form-select-options=\"form.rarities\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Verkaufswert:</strong>\n" +
    "        <form-field form-field-bind=\"form.material.credit_cost\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Belohnungstickets:</strong>\n" +
    "        <form-field form-field-bind=\"form.material.ticket_cost\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Körperteil:</strong>\n" +
    "        <form-field form-field-bind=\"form.material.body_part\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Kann nicht mit Tickets gekauft werden?</strong>\n" +
    "        <form-field form-field-bind=\"form.material.is_not_buyable\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Arten anzeigen statt Gattungen?</strong>\n" +
    "        <form-field form-field-bind=\"form.material.show_monsters\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <input type=\"submit\" href=\"#\" class=\"btn btn-success pull-right\" value=\"Speichern\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/material/view/materialMissingDataView.html',
    "<div class=\"missing-data-view\">\n" +
    "<a href=\"/admin/material\" class=\"btn-primary btn\">Material</a>\n" +
    "    <div class=\"table-responsive m-t-2\">\n" +
    "        <table class=\"table table-bordered\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Name\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Verkaufswert\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Belohnungstickets\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Körperteil\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"elm in missingDataArray | orderBy: 'name'\">\n" +
    "                    <td>\n" +
    "                        {{elm.name}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.credit_cost\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.credit_cost\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.ticket_cost\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.ticket_cost\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.body_part\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.body_part\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/material/view/materials.html',
    "<header class=\"col-xs-12\">\n" +
    "    <h1>Material</h1>\n" +
    "</header>\n" +
    "<div class=\"col-xs-12\">\n" +
    "    <section class=\"content-box m-b-1\">\n" +
    "        <p class=\"content-body\">Hier findet ihr das Material und von welchen Gattungen/Kreaturen ihr es erhaltet.\n" +
    "Material gibt es entweder von mehreren Gattungen (und all deren Kreaturen) oder nur von spezifischen Kreaturen einer Gattung, entsprechend wird nur eins vom beiden angezeigt. Alles Material gibt es auch vom Körper, die Wahrscheinlichkeit ist aber bei ggf. anders genannten Körperteilen höher.</p>\n" +
    "    </section>\n" +
    "</div>\n" +
    "<div class=\"page-material\" material-view>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 m-b-1\">\n" +
    "            <div class=\"col-xs-12 col-lg-4 search-input m-b-1\">\n" +
    "                <input ng-model=\"materialfilterValue\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Name filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"materials-list row\">\n" +
    "        <div class=\"material-item col-xs-12 m-b-1\" ng-class=\"{'clear-both': $index%2==0}\" ng-repeat=\"material in materials | filter:{name: materialfilterValue} | orderBy:'name' track by material.id\">\n" +
    "            <a name=\"material-{{material.id}}\"></a>\n" +
    "            <div class=\"content-box p-b-1\">\n" +
    "                <header>\n" +
    "                    <h5>{{material.name}}</h5>\n" +
    "                    <span class=\"rarity\" ng-class=\"getValidCssClass(material.rarity)\">{{material.rarity}}</span>\n" +
    "                </header>\n" +
    "                <p class=\"content-body p-y-0\"><span>{{material.credit_cost || '???'}} Credits</span> | <span ng-if=\"!material.is_not_buyable\">{{material.ticket_cost || '???'}} Tickets</span><span ng-if=\"material.is_not_buyable\">Kauf nicht möglich</span></p>\n" +
    "                <hr class=\"m-x-1\" />\n" +
    "                <div class=\"row\">\n" +
    "                    <div class=\"col-xs-12 col-sm-6\">\n" +
    "                        <strong>Körperteil:</strong><br/>\n" +
    "                        {{material.body_part || '???'}}\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-sm-6\" ng-if=\"!material.show_monsters || (material.monsters.length==0 && material.monster_types.length>0)\">\n" +
    "                        <strong ng-if=\"material.monster_types.length>0\">Gattungen:</strong>\n" +
    "                        <ul>\n" +
    "                            <li ng-repeat=\"monsterType in material.monster_types\" monster-type-by-id=\"{{monsterType}}\">\n" +
    "                                {{monsterTypeById.name}}\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"col-xs-12 col-sm-6\" ng-if=\"material.show_monsters\">\n" +
    "                        <strong ng-if=\"material.monsters.length>0\">Kreaturen:</strong>\n" +
    "                        <ul>\n" +
    "                            <li ng-repeat=\"monster in material.monsters\" monster-by-id=\"{{monster}}\">\n" +
    "                                <a ng-href=\"/kreaturen#monster-{{monster}}\">{{monsterById.name}}</a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/mission/view/admin_missions_missing.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Missionen</h1>\n" +
    "        <mission-missing-data></mission-missing-data>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('js/data/mission/view/admin_missions.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "            <strong>Person kann nun gepflegt werden.</strong>\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Handelt es sich um eine nicht gepflegte Person (z.B. \"Filialleiter\"), den Text einfach eintragen\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Handelt es sich um eine \"richtige Person\", entsprechendes Häkchen setzen und Person raussuchen\n" +
    "                </li>\n" +
    "                <li>\n" +
    "                    Handelt es sich um eine \"richtige Person\" die noch nicht gepflegt wurde, kann ihr Name (mit gesetztem Häkchen) eingetragen werden und die Person wird automatisch angelegt.\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <h1>Missionen</h1>\n" +
    "        <mission-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedMission\">\n" +
    "                <a ng-click=\"vm.addDeletedMission()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <a href=\"/admin/missionen/was-fehlt\" class=\"btn-primary btn\">Welche Daten fehlen?</a>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"nameFilter\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <mission-form mission=\"newMission\">\n" +
    "                </mission-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.missions | listFilter:nameFilter:'name' track by item.id\" ng-if=\"vm.missions\">\n" +
    "                <mission-form mission=\"item\">\n" +
    "                </mission-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </mission-admin>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('js/data/mission/view/missionFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteMission()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updateMission()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Typ:</strong>\n" +
    "        <form-field ng-if=\"form.missionTypes\" form-field-bind=\"form.mission.mission_type\" form-template=\"objectSelect\" form-select-options=\"form.missionTypes\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Erhalt wo?</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.location_note\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Bedingung - BLADE-Level:</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.blade_level\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Bedingung - Kapitel:</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.chapter\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Richtige Person?</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.has_person\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell ng-if=\"form.mission.has_person\">\n" +
    "        <strong>Auftraggeber:</strong>\n" +
    "        <form-field ng-if=\"form.persons\" form-field-bind=\"form.person\" form-select-options=\"form.persons\" form-template=\"customAutoCompleteSelect\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell ng-if=\"!form.mission.has_person\">\n" +
    "        <strong>Auftraggeber:</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.person_unrelated\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Bedingungen:</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.conditions\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Nebenjob-Zielregion</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.target_area\" form-template=\"stringSelect\" form-select-options=\"form.regions\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Nebenjob-Typ</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.sidejob_type\" form-template=\"stringSelect\" form-select-options=\"form.sideJobTypes\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Beschreibung:</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.description\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Aufgaben:</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.tasks\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Lösung:</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.solution\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Belohnung:</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.rewards\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt (kleine Sterne addieren).\"></span>\n" +
    "        <strong>Nebenjob-Schwierigkeit</strong>\n" +
    "        <form-field form-field-bind=\"form.mission.difficulty\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <button ng-disabled=\"form.isUpdating\" type=\"submit\" class=\"btn btn-success pull-right\">Speichern</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/mission/view/missionMissingDataView.html',
    "<div class=\"missing-data-view\">\n" +
    "<a href=\"/admin/missionen\" class=\"btn-primary btn\">Missionen</a>\n" +
    "    <div class=\"table-responsive m-t-2\">\n" +
    "        <table class=\"table table-bordered\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Name\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Auftraggeber\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Erhalt wo\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Bedingungen / Kapitel / BLADE-Level\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Beschreibung\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Lösung\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Aufgaben\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Belohnung\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Typ\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Kartenpunkte\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"elm in missingDataArray | orderBy: 'name'\">\n" +
    "                    <td>\n" +
    "                        {{elm.name}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.has_person || elm.person_unrelated\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.has_person && !elm.person_unrelated\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.location_note\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.location_note\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.conditions || elm.blade_level || elm.chapter\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.conditions && !elm.blade_level && !elm.chapter\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.description\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.description\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.solution\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.solution\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.tasks\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.tasks\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.rewards\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.rewards\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.mission_type\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.mission_type\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.mapmarkers\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.mapmarkers\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/mission/view/missions.html',
    "<header param-from-url param-name=\"missionTypeName\" class=\"col-xs-12\">\n" +
    "    <h1>Missionen <span ng-if=\"paramFromUrl\">- {{paramFromUrl}}</span></h1>\n" +
    "</header>\n" +
    "<div param-from-url param-name=\"missionTypeName\" class=\"col-xs-12\">\n" +
    "    <section class=\"content-box default-amrgin-b\">\n" +
    "        <p class=\"content-body\">Die Kapitelangaben bedeuten immer, dass ihr das Kapitel abgeschlossen haben müsst, um Zugang zu der jeweiligen Mission zu erhalten.\n" +
    "Die Filter zeigen euch Einträge an, die den eingebenen Wert enthalten und können auch kombiniert werden.\n" +
    "Im Allgemeinen ist das BLADE-Level nur eine Voraussetzung für Nebenjobs und keine Voraussetzung für Standard- oder Harmoniemissionen</p>\n" +
    "    </section>\n" +
    "    <mission-view>\n" +
    "        <div class=\"row m-b-1\">\n" +
    "            <div class=\"col-xs-12 col-lg-3 search-input m-b-1\">\n" +
    "                <input ng-model=\"filter.name\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Namen filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3 search-input m-b-1\">\n" +
    "                <input ng-model=\"filter.blade_level\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Blade-Level filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3 search-input m-b-1\">\n" +
    "                <input ng-model=\"filter.chapter\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Kapitel filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3 search-input m-b-1\">\n" +
    "                <input ng-model=\"filter.person.name\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Person filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div ng-if=\"!paramFromUrl\" class=\"row m-b-1 p-y-1 content-box\">\n" +
    "            <div class=\"col-xs-12 col-lg-3\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input ng-model=\"groupedMissions[1].hide\" type=\"checkbox\"/> Handlungsmissionen ausblenden\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input ng-model=\"groupedMissions[0].hide\" type=\"checkbox\"/> Harmoniemissionen ausblenden\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input ng-model=\"groupedMissions[3].hide\" type=\"checkbox\"/> Nebenjobs ausblenden\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input ng-model=\"groupedMissions[2].hide\" type=\"checkbox\"/> Standardmissionen ausblenden\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <collapsed-content>\n" +
    "            <section class=\"collapse-grouped\" ng-repeat=\"missionGroup in groupedMissions | orderBy:'name'\" ng-if=\"missionGroup.hide !== true && groupedMissions\">\n" +
    "            <h1 ng-if=\"!paramFromUrl\">{{missionGroup.name || 'Nicht zugeordnet'}}</h1>\n" +
    "            <div class=\"collapse-item\" ng-repeat=\"mission in missionGroup.rows | filter:filter | orderBy:[natural('name'), 'blade_level', 'chapter']  track by mission.id\">\n" +
    "                <a name=\"mission-{{mission.id}}\"></a>\n" +
    "                <a href=\"#mission-{{$parent.$index}}-{{$index}}\" ng-click=\"visible('mission-'+$parent.$index+'-'+$index)\" class=\"collapsed content-box\" onclick=\"return false;\" data-toggle=\"collapse\" aria-expanded=\"false\">\n" +
    "                    <strong>{{mission.name}}</strong><span class=\"collapse-arrow fa\"></span>\n" +
    "                    <ul class=\"collapse-notes\">\n" +
    "                        <li ng-if=\"mission.blade_level\">\n" +
    "                            <span>BLADE-Level {{mission.blade_level}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"mission.chapter && mission.mission_type.name!='Handlungsmission'\">\n" +
    "                            <span>Kapitel {{mission.chapter}}</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"!paramFromUrl\">\n" +
    "                            {{missionGroup.name}}\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </a>\n" +
    "                <div id=\"mission-{{$parent.$index}}-{{$index}}\" class=\"content-box collapse\">\n" +
    "                    <div ng-if=\"isVisible('mission-'+$parent.$index+'-'+$index)\" class=\"content-body\">\n" +
    "                        <div class=\"complete-row\" ng-if=\"mission.person.name || mission.person_unrelated || mission.location_note\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div ng-if=\"mission.person.name || mission.person_unrelated\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <h3>Person:</h3>\n" +
    "                                </div>\n" +
    "\n" +
    "                                <div ng-if=\"mission.location_note\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <h3>Erhalt:</h3>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div ng-if=\"mission.person.name || mission.person_unrelated\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    {{mission.person.name || mission.person_unrelated}}\n" +
    "                                </div>\n" +
    "                                <div ng-if=\"mission.location_note\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <p>{{mission.location_note}}</p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <hr/>\n" +
    "                        </div>\n" +
    "                        <div class=\"complete-row\" ng-if=\"mission.conditions || mission.blade_level || mission.chapter || mission.rewards\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div ng-if=\"mission.conditions || mission.blade_level || mission.chapter\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <h3>Voraussetzungen:</h3>\n" +
    "                                </div>\n" +
    "                                <div ng-if=\"mission.rewards\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <h3>Belohnung:</h3>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div ng-if=\"mission.conditions || mission.blade_level || mission.chapter\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <span ng-if=\"mission.blade_level\">BLADE-Level: {{mission.blade_level}}<br/></span>\n" +
    "                                    <span ng-if=\"mission.chapter\">Abschluss Kapitel: {{mission.chapter}}</span>\n" +
    "                                    <br ng-if=\"mission.chapter || mission.blade_level\" />\n" +
    "                                    <p ng-if=\"mission.conditions\" ng-bind-html=\"mission.conditions\"></p>\n" +
    "                                </div>\n" +
    "                                <div ng-if=\"mission.rewards\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <p ng-bind-html=\"mission.rewards\"></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <hr/>\n" +
    "                        </div>\n" +
    "                        <div class=\"complete-row\" ng-if=\"mission.mission_type.name=='Nebenjob' && (mission.target_area || mission.sidejob_type || mission.difficulty)\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-xs-12 col-md-6\">\n" +
    "                                    <h3>Zielregion:</h3>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12 col-md-6\">\n" +
    "                                    <h3>Typ & Schwierigkeit:</h3>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div class=\"col-xs-12 col-md-6\">\n" +
    "                                    <p>{{mission.target_area}}</p>\n" +
    "                                </div>\n" +
    "                                <div class=\"col-xs-12 col-md-6\">\n" +
    "                                    <span>Typ: {{mission.sidejob_type}}<br/></span>\n" +
    "                                    <span>Schwierigkeit: {{mission.difficulty}}</span>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <hr />\n" +
    "                        </div>\n" +
    "                        <div class=\"complete-row\" ng-if=\"mission.description\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div ng-if=\"mission.description\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <h3>Beschreibung:</h3>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div ng-if=\"mission.description\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <p ng-bind-html=\"mission.description\"></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                    <a ng-if=\"mission.solution || mission.tasks\" href=\"#mission-solution-{{$parent.$parent.$index}}-{{$index}}\" class=\"collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\" onclick=\"return false;\"><span class=\"fa collapse-arrow\"></span><strong>Aufgaben & Lösung</strong></a>\n" +
    "                    <div ng-if=\"mission.solution || mission.tasks\" id=\"mission-solution-{{$parent.$parent.$index}}-{{$index}}\" class=\"collapse\">\n" +
    "                        <div class=\"content-body\">\n" +
    "                            <div class=\"row\">\n" +
    "                                <div ng-if=\"mission.tasks\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <h3>Aufgaben:</h3>\n" +
    "                                </div>\n" +
    "                                <div ng-if=\"mission.solution\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <h3>Lösungshinweise:</h3>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                            <div class=\"row\">\n" +
    "                                <div ng-if=\"mission.tasks\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <p ng-bind-html=\"mission.tasks\"></p>\n" +
    "                                </div>\n" +
    "                                <div ng-if=\"mission.solution\" class=\"col-xs-12 col-md-6\">\n" +
    "                                    <p ng-bind-html=\"mission.solution\"></p>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        </collapsed-content>\n" +
    "    </mission-view>\n" +
    "</div>"
  );


  $templateCache.put('js/data/monster/view/admin_monsters_missing.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Monster</h1>\n" +
    "        <monster-missing-data></monster-missing-data>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('js/data/monster/view/admin_monsters.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Monster</h1>\n" +
    "        <monster-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedMonster\">\n" +
    "                <a ng-click=\"vm.addDeletedMonster()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <a href=\"/admin/kreaturen/was-fehlt\" class=\"btn-primary btn\">Welche Daten fehlen?</a>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"nameFilter\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <monster-form monster=\"newMonster\">\n" +
    "                </monster-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.monsters | listFilter:nameFilter:'name' | orderBy: ['monster_type_prio', 'name'] track by item.id\" ng-if=\"vm.monsters\">\n" +
    "                <monster-form monster=\"item\">\n" +
    "                </monster-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </monster-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/monster/view/admin_monsterTypes.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Monster-Gattungen</h1>\n" +
    "        <monster-type-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedMonsterType\">\n" +
    "                <a ng-click=\"vm.addDeletedMonsterType()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"nameFilter\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <monster-type-form monster-type=\"newMonsterType\">\n" +
    "                </monster-type-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.monsterTypes | listFilter:nameFilter:'name' | orderBy: 'prio' track by item.id\" ng-if=\"vm.monsterTypes\">\n" +
    "                <monster-type-form monster-type=\"item\">\n" +
    "                </monster-type-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </monster-type-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/monster/view/monsterFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteMonster()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updateMonster()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Region:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.region\" form-template=\"stringSelect\" form-select-options=\"form.regions\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Level Min.:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.level_min\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt. Leerlassen falls nur ein exaktes Level vorhanden.\"></span>\n" +
    "        <strong>Level Max.:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.level_max\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title='Standardwert: \"Immer\"'></span>\n" +
    "        <strong>Zeit:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.time\" form-template=\"falsableStringSelect\" form-select-options=\"form.dayTimes\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title='Standardwert: \"Immer\"'></span>\n" +
    "        <strong>Wetter:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.weather\" form-template=\"falsableStringSelect\" form-select-options=\"form.weathers\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Tyrann?</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.is_unique\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Story?</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.is_story\" form-template=\"inputCheckbox\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Text - Zahlenraum mit Minus angeben\"></span>\n" +
    "        <strong>HP:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.hp\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Text - Zahlenraum mit Minus angeben\"></span>\n" +
    "        <strong>EP:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.ep\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt, Standardwert 0\"></span>\n" +
    "        <strong>Resistenz - Physisch:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.res_physic\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt, Standardwert 0\"></span>\n" +
    "        <strong>Resistenz - Laser:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.res_laser\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt, Standardwert 0\"></span>\n" +
    "        <strong>Resistenz - Äther:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.res_ether\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt, Standardwert 0\"></span>\n" +
    "        <strong>Resistenz - Thermo:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.res_thermo\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt, Standardwert 0\"></span>\n" +
    "        <strong>Resistenz - Elektro:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.res_electric\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt, Standardwert 0\"></span>\n" +
    "        <strong>Resistenz - Gravit:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.res_gravit\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Besonderheiten:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.description\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Ortsbeschreibung:</strong>\n" +
    "        <form-field form-field-bind=\"form.monster.location_note\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Gattung:</strong>\n" +
    "        <form-field ng-if=\"form.monsterTypes\" form-field-callback=\"form.setMaterialByMonsterType()\" form-field-bind=\"form.monsterType\" form-select-options=\"form.monsterTypes\" form-template=\"customAutoCompleteSelect\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material:</strong>\n" +
    "        <form-field ng-if=\"form.materialsData\" form-field-bind=\"form.materials\" form-select-options=\"form.materialsData\" form-template=\"customMaterialInput\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Karte:</strong>\n" +
    "        <edit-map bind-to=\"form.monster.map_geo_json\"></edit-map>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <button ng-disabled=\"form.isUpdating\" type=\"submit\" class=\"btn btn-success pull-right\">Speichern</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/monster/view/monsterMissingDataView.html',
    "<div class=\"missing-data-view\">\n" +
    "    <a href=\"/admin/kreaturen\" class=\"btn-primary btn\">Monster</a>\n" +
    "    <div class=\"table-responsive m-t-2\">\n" +
    "        <table class=\"table table-bordered\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Name\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Level Min. / Max.\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        HP\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        EP\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Physisch | Laser | Äther | Thermo | Elektro | Gravit\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Kartenpunkte\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Gattung\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Ortsbeschreibung\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr monster-type-by-id=\"{{monster.monster_type}}\" ng-repeat=\"monster in monsters | orderBy:['monster_type_prio','name'] track by monster.id\">\n" +
    "                    <td>\n" +
    "                        {{monster.name}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"monster.level_min\">\n" +
    "                            {{monster.level_min}}\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"monster.level_max\">\n" +
    "                            - {{monster.level_max}}\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{monster.hp}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{monster.ep}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{monster.res_physic}} | {{monster.res_laser}} | {{monster.res_ether}} | {{monster.res_thermo}} | {{monster.res_electric}} | {{monster.res_gravit}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"monster.mapmarkers[0]\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!monster.mapmarkers[0]\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{monsterTypeById.name}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        {{ monster.location_note }}\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/monster/view/monsters.html',
    "<header param-from-url param-name=\"region\" class=\"col-xs-12\">\n" +
    "    <h1>Kreaturen <span ng-if=\"paramFromUrl\">- {{paramFromUrl}}</span></h1>\n" +
    "</header>\n" +
    "<div param-from-url param-name=\"region\" class=\"col-xs-12\">\n" +
    "    <section class=\"content-box default-amrgin-b\">\n" +
    "        <p class=\"content-body\">Unter \"Alle\" findet ihr sämtliche Kreaturen nach Gattung (selbe Reihenfolge wie im Spiel) und unterhalb der Gattung alphabetisch sortiert (im Spiel einstellbar).\n" +
    "Unter den jeweiligen Gebieten findet ihr die Kreaturen nach Typ seperiert und Level sortiert</p>\n" +
    "    </section>\n" +
    "    <monster-view>\n" +
    "        <div class=\"row m-b-1\">\n" +
    "            <div class=\"col-xs-12 col-lg-3 search-input m-b-1\">\n" +
    "                <input ng-model=\"filter.name\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Namen filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3 search-input m-b-1\">\n" +
    "                <input ng-model=\"filter.region\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Region filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3 search-input m-b-1\">\n" +
    "                <input ng-model=\"filter.monster_type.name\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Gattung filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3 search-input m-b-1\">\n" +
    "                <input ng-model=\"levelfilterValue\" ng-model-options='{ debounce: 750 }' type=\"text\" placeholder=\"Nach Level filtern...\" />\n" +
    "                <span class=\"fa fa-search\"></span>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"row m-b-1 p-y-1 content-box\">\n" +
    "            <div class=\"col-xs-12 col-lg-3\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input ng-model=\"uniqueMonsters\" type=\"checkbox\"/> Tyrannen ausblenden\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input ng-model=\"storyMonsters\" type=\"checkbox\"/> Handlungsgegner ausblenden\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"col-xs-12 col-lg-3\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input ng-model=\"usualMonsters\" type=\"checkbox\"/> Normale Kreaturen ausblenden\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div ng-show=\"!paramFromUrl\" class=\"col-xs-12 col-lg-3\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input ng-model=\"groupedByType\" ng-change=\"groupByType()\" type=\"checkbox\"/> Nach Typ gruppiert anzeigen\n" +
    "                    </label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <collapsed-content>\n" +
    "            <section class=\"collapse-grouped\" ng-repeat=\"monsterGroup in groupedMonsters\">\n" +
    "            <h1 ng-if=\"groupedByType || paramFromUrl\">{{monsterGroup.name}}</h1>\n" +
    "            <div class=\"collapse-item\" ng-repeat=\"monster in monsterGroup.data | filter:filter | filter:{region: paramFromUrl}  | range:levelfilterValue:'level_min':'level_max' track by monster.id\"\n" +
    "                 ng-if=\"(!uniqueMonsters && monster.is_unique) || (!storyMonsters && monster.is_story) || (!usualMonsters && !monster.is_story && !monster.is_unique)\">\n" +
    "                <a name=\"monster-{{monster.id}}\"></a>\n" +
    "                <a href=\"#monster-{{$parent.$parent.$index}}-{{$index}}\" ng-click=\"visible('monster-'+$parent.$parent.$index+'-'+$index)\" class=\"collapsed content-box\" onclick=\"return false;\" data-toggle=\"collapse\" aria-expanded=\"false\">\n" +
    "                    <strong>\n" +
    "                        {{monster.name}}\n" +
    "                        <span ng-if=\"monster.level_min || monster.level_max\">\n" +
    "                            (L {{monster.level_min}}<span ng-if=\"monster.level_max\">-{{monster.level_max}}</span>)\n" +
    "                        </span>\n" +
    "                    </strong>\n" +
    "                    <span class=\"collapse-arrow fa\"></span>\n" +
    "                    <ul class=\"collapse-notes\">\n" +
    "                        <li ng-if=\"!paramFromUrl && (monster.is_unique || monster.is_story)\">\n" +
    "                            <span ng-if=\"monster.is_unique\">Tyrann</span>\n" +
    "                            <span ng-if=\"monster.is_story\">Handlung</span>\n" +
    "                        </li>\n" +
    "                        <li ng-if=\"!paramFromUrl\">\n" +
    "                            {{monster.region}}\n" +
    "                        </li>\n" +
    "                        <li>\n" +
    "                            {{monster.monster_type.name}}\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </a>\n" +
    "                <div id=\"monster-{{$parent.$parent.$index}}-{{$index}}\" class=\"content-box collapse\">\n" +
    "                    <div ng-if=\"isVisible('monster-'+$parent.$parent.$index+'-'+$index)\" class=\"content-body\">\n" +
    "                        <div class=\"row\">\n" +
    "                            <div class=\"col-xs-12 col-md-6\">\n" +
    "                                <strong>Werte:</strong> <br/>\n" +
    "                                {{monster.hp||'???'}} HP | {{monster.ep||'???'}} EP<br/>\n" +
    "                                <br/>\n" +
    "                                <strong>Wetter:</strong> {{monster.weather||'???'}}<br/>\n" +
    "                                <strong>Zeit:</strong> {{monster.time||'???'}}<br/>\n" +
    "                                <br/>\n" +
    "                            </div>\n" +
    "                            <div class=\"col-xs-12 col-md-6\">\n" +
    "                                <strong>Ortsbeschreibung:</strong>\n" +
    "                                <p>{{monster.location_note||'???'}}</p>\n" +
    "                                <br/>\n" +
    "                                <strong ng-if=\"monster.description\">Besonderheiten:</strong>\n" +
    "                                <p>{{monster.description}}</p>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row m-t-1\">\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <strong>Resistenzen:</strong><br/>\n" +
    "                                <div class=\"table-responsive\">\n" +
    "                                    <table class=\"table text-sm-center table-bordered\">\n" +
    "                                        <thead>\n" +
    "                                        <tr>\n" +
    "                                            <th style=\"text-align: center\">Physisch</th>\n" +
    "                                            <th style=\"text-align: center\">Laser</th>\n" +
    "                                            <th style=\"text-align: center\">Äther</th>\n" +
    "                                            <th style=\"text-align: center\">Thermo</th>\n" +
    "                                            <th style=\"text-align: center\">Elektro</th>\n" +
    "                                            <th style=\"text-align: center\">Gravit</th>\n" +
    "                                        </tr>\n" +
    "                                        </thead>\n" +
    "                                        <tbody>\n" +
    "                                        <tr>\n" +
    "                                            <td>\n" +
    "                                                {{monster.res_physic}}\n" +
    "                                            </td>\n" +
    "                                            <td>\n" +
    "                                                {{monster.res_laser}}\n" +
    "                                            </td>\n" +
    "                                            <td>\n" +
    "                                                {{monster.res_ether}}\n" +
    "                                            </td>\n" +
    "                                            <td>\n" +
    "                                                {{monster.res_thermo}}\n" +
    "                                            </td>\n" +
    "                                            <td>\n" +
    "                                                {{monster.res_electric}}\n" +
    "                                            </td>\n" +
    "                                            <td>\n" +
    "                                                {{monster.res_gravit}}\n" +
    "                                            </td>\n" +
    "                                        </tr>\n" +
    "                                        </tbody>\n" +
    "                                    </table>\n" +
    "                                </div>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                        <div class=\"row m-t-1\">\n" +
    "                            <div class=\"col-xs-12\">\n" +
    "                                <strong ng-if=\"monster.materials.length>0\">Material:</strong>\n" +
    "                                <ul>\n" +
    "                                    <li ng-repeat=\"material in monster.materials\" material-by-id=\"{{material}}\">\n" +
    "                                        <a ng-href=\"/material#material-{{material}}\">{{materialById.name}}</a>\n" +
    "                                    </li>\n" +
    "                                </ul>\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "        </collapsed-content>\n" +
    "    </monster-view>\n" +
    "</div>\n"
  );


  $templateCache.put('js/data/monster/view/monsterTypeFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteMonsterType()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updateMonsterType()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.monsterType.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Beschreibung:</strong>\n" +
    "        <form-field form-field-bind=\"form.monsterType.description\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt. Sortierung ist aufsteigend (am besten Spielraum zwischen den Zahlen lassen)\"></span>\n" +
    "        <strong>Sortierung:</strong>\n" +
    "        <form-field form-field-bind=\"form.monsterType.prio\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Material:</strong>\n" +
    "        <form-field ng-if=\"form.materialsData\" form-field-bind=\"form.materials\" form-select-options=\"form.materialsData\" form-template=\"customMaterialInput\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <button ng-disabled=\"form.isUpdating\" type=\"submit\" class=\"btn btn-success pull-right\">Speichern</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/person/view/admin_persons_missing.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Personen</h1>\n" +
    "        <person-missing-data></person-missing-data>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('js/data/person/view/admin_persons.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <div class=\"alert alert-info\" role=\"alert\">\n" +
    "            <strong>Personen können jetzt als Auftraggeber an Missionen gepflegt werden</strong>\n" +
    "            <ul>\n" +
    "                <li>\n" +
    "                    Ist eine Person mit einer Mission verknüpft kann diese Person nicht gelöscht werden (es passiert einfach nichts)\n" +
    "                </li>\n" +
    "            </ul>\n" +
    "        </div>\n" +
    "        <h1>Personen</h1>\n" +
    "        <person-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedPerson\">\n" +
    "                <a ng-click=\"vm.addDeletedPerson()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <a href=\"/admin/personen/was-fehlt\" class=\"btn-primary btn\">Welche Daten fehlen?</a>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"nameFilter\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <person-form person=\"newPerson\">\n" +
    "                </person-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.persons | listFilter:nameFilter:'name' track by item.id\" ng-if=\"vm.persons\">\n" +
    "                <person-form person=\"item\">\n" +
    "                </person-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </person-admin>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('js/data/person/view/personFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deletePerson()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updatePerson()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.person.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Alter:</strong>\n" +
    "        <form-field form-field-bind=\"form.person.age\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Spezies:</strong>\n" +
    "        <form-field form-field-bind=\"form.person.species\" form-template=\"stringSelect\" form-select-options=\"form.species\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Region:</strong>\n" +
    "        <form-field form-field-bind=\"form.person.region\" form-template=\"stringSelect\" form-select-options=\"form.regions\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <input type=\"submit\" href=\"#\" class=\"btn btn-success pull-right\" value=\"Speichern\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/person/view/personMissingDataView.html',
    "<div class=\"missing-data-view\">\n" +
    "<a href=\"/admin/personen\" class=\"btn-primary btn\">Personen</a>\n" +
    "    <div class=\"table-responsive m-t-2\">\n" +
    "        <table class=\"table table-bordered\">\n" +
    "            <thead>\n" +
    "                <tr>\n" +
    "                    <th>\n" +
    "                        Name\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Alter\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Spezies\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Beruf\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Beschreibung\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Region\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Zeit\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Ortsbeschreibung\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Bedingungen\n" +
    "                    </th>\n" +
    "                    <th>\n" +
    "                        Kartenpunkt\n" +
    "                    </th>\n" +
    "                </tr>\n" +
    "            </thead>\n" +
    "            <tbody>\n" +
    "                <tr ng-repeat=\"elm in missingDataArray\">\n" +
    "                    <td>\n" +
    "                        {{elm.name}}\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.age\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.age\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.species\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.species\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.job\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.job\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.description\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.description\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.region\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.region\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.activity_time\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.activity_time\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.location_note\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.location_note\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.conditions\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.conditions\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    "                        <span ng-if=\"elm.mapmarkers\" class=\"text-success\">\n" +
    "                            gepflegt\n" +
    "                        </span>\n" +
    "                        <span ng-if=\"!elm.mapmarkers\" class=\"text-danger\">\n" +
    "                            leer\n" +
    "                        </span>\n" +
    "                    </td>\n" +
    "                </tr>\n" +
    "            </tbody>\n" +
    "        </table>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/resource/view/admin_resources.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Ressourcen</h1>\n" +
    "        <resource-admin>\n" +
    "            <div class=\"alert alert-warning m-y-2\" ng-show=\"vm.deletedResource\">\n" +
    "                <a ng-click=\"vm.addDeletedResource()\" href=\"#\">Gelöschte Zeile wiederherstellen</a>\n" +
    "            </div>\n" +
    "            <input type=\"text\" class=\"form-control text m-y-1\" ng-model=\"filter.name\" ng-model-options='{ debounce: 200 }' placeholder=\"Filtern...\" />\n" +
    "            <collapsed-table-list add-form=\"true\">\n" +
    "                <resource-form resource=\"newResource\">\n" +
    "                </resource-form>\n" +
    "            </collapsed-table-list>\n" +
    "            <collapsed-table-list ng-repeat=\"item in vm.resources | filter:filter track by item.id\" ng-if=\"vm.resources\">\n" +
    "                <resource-form resource=\"item\">\n" +
    "                </resource-form>\n" +
    "            </collapsed-table-list>\n" +
    "        </resource-admin>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('js/data/resource/view/resourceFormView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-offset-9 col-md-3 col-xs-offset-6 col-xs-6 p-r-0 p-b-1\">\n" +
    "        <button href=\"#\" class=\"btn btn-danger pull-right\" ng-click=\"form.deleteResource()\">\n" +
    "            Löschen\n" +
    "        </button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<form ng-submit=\"form.updateResource()\">\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Name:</strong>\n" +
    "        <form-field form-field-bind=\"form.resource.name\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Region:</strong>\n" +
    "        <form-field form-field-bind=\"form.resource.region\" form-template=\"stringSelect\" form-select-options=\"form.regions\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Seltenheit:</strong>\n" +
    "        <form-field form-field-bind=\"form.resource.rarity\" form-template=\"stringSelect\" form-select-options=\"form.rarities\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <span class=\"info-icon text-primary\" bs-tooltip bs-tooltip-title=\"Nur Zahlen erlaubt.\"></span>\n" +
    "        <strong>Verkaufswert:</strong>\n" +
    "        <form-field form-field-bind=\"form.resource.credit_cost\" form-template=\"inputText\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Beschreibung:</strong>\n" +
    "        <form-field form-field-bind=\"form.resource.description\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"collapsed-table-cell-wrapper\" collapsed-table-cell>\n" +
    "        <strong>Knotenpunkte:</strong>\n" +
    "        <form-field form-field-bind=\"form.resource.location_note\" form-template=\"textarea\"></form-field>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-xs-12 p-r-0\">\n" +
    "            <input type=\"submit\" href=\"#\" class=\"btn btn-success pull-right\" value=\"Speichern\" />\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>"
  );


  $templateCache.put('js/data/user/loginView.html',
    "<div class=\"container-fluid\">\n" +
    "  <div class=\"col-md-6 col-md-offset-3 p-y-1\">\n" +
    "    <h1>Login</h1>\n" +
    "    <div ng-show=\"flash.message\" class=\"alert alert-danger\">{{flash.message}}</div>\n" +
    "    <form name=\"form\" ng-submit=\"login()\" role=\"form\">\n" +
    "      <div class=\"form-group\" ng-class=\"{ 'has-error': form.username.$dirty && form.username.$error.required }\">\n" +
    "        <label for=\"username\">Username</label>\n" +
    "        <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"username\" required />\n" +
    "        <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">Username is required</span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{ 'has-error': form.password.$dirty && form.password.$error.required }\">\n" +
    "        <label for=\"password\">Password</label>\n" +
    "        <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"password\" required />\n" +
    "        <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Password is required</span>\n" +
    "      </div>\n" +
    "      <div class=\"form-actions\">\n" +
    "        <button type=\"submit\" ng-disabled=\"form.$invalid || dataLoading\" class=\"btn btn-primary\">Login</button>\n" +
    "        <img ng-if=\"dataLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n" +
    "      </div>\n" +
    "    </form>\n" +
    "    <hr/>\n" +
    "    <a href=\"/register\">Registrieren</a>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('js/data/user/registrationView.html',
    "<div class=\"container-fluid\">\n" +
    "  <div class=\"col-md-6 col-md-offset-3 p-y-1\">\n" +
    "    <h2>Registrieren</h2>\n" +
    "    <p>\n" +
    "      Die Registrierung ist nur für Pfleger gedacht und die Freischaltung der Nutzer erfolgt manuell.<br/>\n" +
    "      Bitte nutze das Kommentar-Feld um dich als Pfleger zu identifizieren :-)\n" +
    "    </p>\n" +
    "    <div ng-show=\"flash.message\" ng-class=\"{'alert alert-danger':!success, 'alert alert-success':success}\">{{flash.message}}</div>\n" +
    "    <form name=\"form\" ng-submit=\"register()\" role=\"form\">\n" +
    "      <div class=\"form-group\" ng-class=\"{ 'has-error': form.username.$dirty && form.username.$error.required }\">\n" +
    "        <label for=\"username\">Nutzername:</label>\n" +
    "        <input type=\"text\" name=\"username\" id=\"username\" class=\"form-control\" ng-model=\"username\" required />\n" +
    "        <span ng-show=\"form.username.$dirty && form.username.$error.required\" class=\"help-block\">Nutzername erforderlich</span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{ 'has-error': form.email.$dirty && form.email.$error.required }\">\n" +
    "        <label for=\"username\">E-Mail:</label>\n" +
    "        <input type=\"text\" name=\"email\" id=\"email\" class=\"form-control\" ng-model=\"email\" required />\n" +
    "        <span ng-show=\"form.email.$dirty && form.email.$error.required\" class=\"help-block\">Email erforderlich</span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{ 'has-error': form.password.$dirty && form.password.$error.required }\">\n" +
    "        <label for=\"password\">Passwort:</label>\n" +
    "        <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control\" ng-model=\"password\" required />\n" +
    "        <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Passwort erforderlich</span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\" ng-class=\"{ 'has-error': form.password_repeat.$dirty && form.password_repeat.$error.required }\">\n" +
    "        <label for=\"password_repeat\">Passwort wiederholen:</label>\n" +
    "        <input type=\"password\" name=\"password_repeat\" id=\"password_repeat\" class=\"form-control\" ng-model=\"password_repeat\" required />\n" +
    "        <span ng-show=\"form.password.$dirty && form.password.$error.required\" class=\"help-block\">Passwort Wiederholung erforderlich</span>\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"form_message\">Kommentar:</label>\n" +
    "        <textarea id=\"form_message\" name=\"form_message\" class=\"form-control\" ng-model=\"form_message\" required></textarea>\n" +
    "        <span ng-show=\"form.form_message.$dirty && form.form_message.$error.required\" class=\"help-block\">Kommentar erforderlich</span>\n" +
    "      </div>\n" +
    "      <div class=\"form-actions\">\n" +
    "        <button type=\"submit\" ng-disabled=\"form.$invalid || dataLoading\" class=\"btn btn-primary\">Registrieren</button>\n" +
    "        <img ng-if=\"dataLoading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n" +
    "      </div>\n" +
    "    </form>\n" +
    "  </div>\n" +
    "</div>"
  );


  $templateCache.put('views/_adminHeader.html',
    "<div class=\"admin-header\">\n" +
    "    <loading-directive></loading-directive>\n" +
    "    <div class=\"col-xs-12 m-t-1\">\n" +
    "        <ul class=\"nav nav-pills\">\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/admin\">Admin</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/erweiterungen\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/erweiterungen\">Erweiterungen</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/erweiterungs-kategorien\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/admin/erweiterungs-kategorien\">Erw.-Kategorien</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/faq\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/faq\">FAQ</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/guides\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/guides\">Guides</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/kollektikon\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/kollektikon\">Kollektikon</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/material\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/material\">Material</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/missionen\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/missionen\">Missionen</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/kreaturen\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/admin/kreaturen\">Monster</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/monster_gattungen\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/monster_gattungen\">Gattungen</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/personen\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/personen\">Personen</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/ressourcen\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/ressourcen\">Ressourcen</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/sammelitems\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/sammelitems\">Sammelitems</a>\n" +
    "            </li>\n" +
    "            <li class=\"nav-item\">\n" +
    "                <a class=\"nav-link\" href=\"/admin/links\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/admin/links\">Links</a>\n" +
    "            </li>\n" +
    "        </ul>\n" +
    "        <div ng-show=\"flash.message\" class=\"m-t-1\" ng-class=\"{'alert alert-danger':!flash.success, 'alert alert-success':flash.success}\">{{flash.message}}</div>\n" +
    "    </div>\n" +
    "</div>"
  );


  $templateCache.put('views/_header.html',
    "<header class=\"main-header\">\n" +
    "  <loading-directive></loading-directive>\n" +
    "  <a class=\"back-to-top\" href=\"#\" scroll-to=\"0\"><span class=\"fa fa-arrow-up\"></span> nach oben</a>\n" +
    "  <nav class=\"navbar navbar-dark bg-inverse\">\n" +
    "    <a slide-menu menu-id=\"js_main-nav\" class=\"mobile-nav-button\" href=\"#\"><span class=\"fa fa-align-justify\"></span></a>\n" +
    "    <a class=\"logo\" href=\"/\"><img src=\"images/logo_xenobladex.jpg\"></a>\n" +
    "    <ul class=\"meta-nav\">\n" +
    "      <li>\n" +
    "        <a href=\"http://www.xenoblade.org/phpBB3\" target=\"_blank\">Forum</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"http://www.xenoblade.org\" target=\"_blank\">Xenoblade.org</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"http://www.xenoblade2.org\" target=\"_blank\">Xenoblade2.org</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"/impressum\">Impressum</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </nav>\n" +
    "</header>\n" +
    "<aside id=\"js_main-nav\" class=\"main-aside\">\n" +
    "  <nav class=\"main-nav\">\n" +
    "    <ul>\n" +
    "      <li>\n" +
    "        <a href=\"/\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/\">Aktuelles</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#equipupgrades-submenu\" class=\"collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\" onclick=\"return false;\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/erweiterungen\">Erweiterungen <span class=\"fa fa-arrow-circle-down\"></span></a>\n" +
    "        <ul class=\"collapse\" id=\"equipupgrades-submenu\" highlighted-nav-item nav-item-class=\"in\" nav-item-route=\"/erweiterungen\">\n" +
    "          <li>\n" +
    "            <a href=\"/erweiterungen\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/erweiterungen\">Alle</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/erweiterungen/waffen\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/erweiterungen/waffen\">Waffen</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/erweiterungen/rüstungen\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/erweiterungen/rüstungen\">Rüstungen</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/erweiterungen/skell-waffen\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/erweiterungen/skell-waffen\">Skell-Waffen</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/erweiterungen/skell-panzerungen\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/erweiterungen/skell-panzerungen\">Skell-Panzerungen</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/erweiterungen/skell-zusätze\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/erweiterungen/skell-zusätze\">Skell-Zusätze</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#guides-submenu\" class=\"collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\" onclick=\"return false;\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/guides\">Guides <span class=\"fa fa-arrow-circle-down\"></span></a>\n" +
    "        <ul class=\"collapse\" id=\"guides-submenu\" highlighted-nav-item nav-item-class=\"in\" nav-item-route=\"/guides\">\n" +
    "          <li>\n" +
    "            <a href=\"/guides/7\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/guides/7\">Aufstieg des Bluthummers</a>\n" +
    "            <a href=\"/guides/3\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/guides/3\">Der Weg zum Ares 90</a>\n" +
    "            <a href=\"/guides/11\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/guides/11\">Handelsabkommen</a>\n" +
    "            <a href=\"/guides/9\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/guides/9\">Wetter & Effekte</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"/kollektikon\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/kollektikon\">Kollektikon</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#monsters-submenu\" class=\"collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\" onclick=\"return false;\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/kreaturen\">Kreaturen <span class=\"fa fa-arrow-circle-down\"></span></a>\n" +
    "        <ul class=\"collapse\" id=\"monsters-submenu\" highlighted-nav-item nav-item-class=\"in\" nav-item-route=\"/kreaturen\">\n" +
    "          <li>\n" +
    "            <a href=\"/kreaturen\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/kreaturen\">Alle</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/kreaturen/primordia\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/kreaturen/primordia\">Primordia</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/kreaturen/noctilum\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/kreaturen/noctilum\">Noctilum</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/kreaturen/oblivia\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/kreaturen/oblivia\">Oblivia</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/kreaturen/sylvalum\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/kreaturen/sylvalum\">Sylvalum</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/kreaturen/cauldros\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/kreaturen/cauldros\">Cauldros</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"/material\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/material\">Material</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"#missions-submenu\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/missionen\" class=\"collapsed\" data-toggle=\"collapse\" aria-expanded=\"false\" onclick=\"return false;\">Missionen <span class=\"fa fa-arrow-circle-down\"></span></a>\n" +
    "        <ul id=\"missions-submenu\" class=\"collapse\" highlighted-nav-item nav-item-class=\"in\" nav-item-route=\"/missionen\">\n" +
    "          <li>\n" +
    "            <a href=\"/missionen\" highlighted-nav-item nav-item-route-equals=\"true\" nav-item-class=\"active\" nav-item-route=\"/missionen\">Alle</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/missionen/handlung\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/missionen/handlung\">Handlung</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/missionen/harmonie\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/missionen/harmonie\">Harmonie</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/missionen/standard\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/missionen/standard\">Standard</a>\n" +
    "          </li>\n" +
    "          <li>\n" +
    "            <a href=\"/missionen/nebenjob\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/missionen/nebenjob\">Nebenjob</a>\n" +
    "          </li>\n" +
    "        </ul>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"/sammelitems\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/sammelitems\">Sammelitems</a>\n" +
    "      </li>\n" +
    "      <li>\n" +
    "        <a href=\"/faq\" highlighted-nav-item nav-item-class=\"active\" nav-item-route=\"/faq\">FAQ</a>\n" +
    "      </li>\n" +
    "    </ul>\n" +
    "  </nav>\n" +
    "</aside>"
  );


  $templateCache.put('views/404.html',
    "<header>\n" +
    "    <h1>Uuuups....</h1>\n" +
    "</header>\n" +
    "<section class=\"content-box default-amrgin-b\">\n" +
    "    <p class=\"content-body\">Entschuldigung! Der Inhalt wurde wohl von Xenoformen verschleppt :-(</p>\n" +
    "</section>"
  );


  $templateCache.put('views/admin_test.html',
    "<main role=\"main\">\n" +
    "    <div ng-include src=\"'views/_adminHeader.html'\"></div>\n" +
    "    <div class=\"admin-view col-md-12 p-y-1\">\n" +
    "        <h1>Test!</h1>\n" +
    "        <admin-test></admin-test>\n" +
    "    </div>\n" +
    "</main>"
  );


  $templateCache.put('views/admin.html',
    "<main role=\"main\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "        <div class=\"col-xs-12 p-y-1\">\n" +
    "            <h1>XenobladeX.org - Pflege</h1>\n" +
    "            <div class=\"alert alert-info m-y-2\" role=\"alert\">\n" +
    "                <h4>Generell zur Bedienung:</h4>\n" +
    "                <ul>\n" +
    "                    <li>\n" +
    "                        Ausgenommen der <strong>Dateiverwaltung</strong> kann immer die zuletzt gelöschte Zeile wieder gergestellt werden\n" +
    "                    </li>\n" +
    "                    <li>\n" +
    "                        nach Löschen taucht oberhalb der Pflege eine Meldung auf, um die Zeile wiederherzustellen\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </div>\n" +
    "            <h2>Bereiche</h2>\n" +
    "            <div class=\"list-group m-t-1\">\n" +
    "                <a class=\"list-group-item\" href=\"/admin/dateien\">Dateien verwalten</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/faq\">FAQ</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/guides\">Guides</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/erweiterungen\">Erweiterungen</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/erweiterungs-kategorien\">Erw.-Kategorien</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/karten\">Karten</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/kollektikon\">Kollektikon</a>\n" +
    "                <!--<a class=\"list-group-item\" href=\"/admin/kartenpunkte\">Kartenpunkte</a>-->\n" +
    "                <a class=\"list-group-item\" href=\"/admin/links\">Links</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/material\">Material</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/missionen\">Missionen</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/kreaturen\">Monster</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/monster_gattungen\">Monster-Gattungen</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/personen\">Personen</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/ressourcen\">Ressourcen</a>\n" +
    "                <a class=\"list-group-item\" href=\"/admin/sammelitems\">Sammelitems</a>\n" +
    "                <!--<a class=\"list-group-item\" href=\"/admin/segmente\">Segmente</a>-->\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</main>\n"
  );


  $templateCache.put('views/imprint.html',
    "<header class=\"col-xs-12\">\n" +
    "  <h1>Impressum</h1>\n" +
    "</header>\n" +
    "<div class=\"col-xs-12\">\n" +
    "  <section class=\"content-box\">\n" +
    "    <p class=\"content-body\"><strong>Kontakt:</strong>\n" +
    "kontakt@samisalami.de\n" +
    "\n" +
    "<strong>Haftungsausschluss:</strong>\n" +
    "\n" +
    "<u>Haftung für Inhalte</u>\n" +
    "\n" +
    "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.\n" +
    "\n" +
    "<u>Haftung für Links</u>\n" +
    "\n" +
    "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.\n" +
    "\n" +
    "<u>Urheberrecht</u>\n" +
    "\n" +
    "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.\n" +
    "\n" +
    "<u>Datenschutz</u>\n" +
    "\n" +
    "Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.\n" +
    "\n" +
    "Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.\n" +
    "\n" +
    "Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.</p>\n" +
    "  </section>\n" +
    "</div>"
  );


  $templateCache.put('views/start.html',
    "<header class=\"col-xs-12\">\n" +
    "  <h1>Aktuelles</h1>\n" +
    "</header>\n" +
    "<div class=\"col-xs-12\">\n" +
    "  <section class=\"content-box\">\n" +
    "    <header>\n" +
    "      <h1>Zwei neue Guides - Wetter und Handelsabkommen</h1>\n" +
    "      <span class=\"date\">13.06.2016</span>\n" +
    "    </header>\n" +
    "    <p class=\"content-body\">Hallo ihr Lieben!\n" +
    "\n" +
    "Leider war meine Wenigkeit (Sami) die letzte Zeit mit anderen Dingen sehr beschäftigt, weswegen es mit den neuen Inhalten jetzt erst wieder weiter geht.\n" +
    "Zu erst einmal gibt es zwei neue Guides. Einen Guide zum Wetter mit all seinen Auswirkungen, sowie zu der Mission Handelsabkommen, bei der man mit einigen Personen in NLA tauschen muss, um zur gewünschten Karte zu kommen.\n" +
    "Besonderer Dank bei diesen beiden Guides gilt evgeniat und auch C6-22 der den Wetter-Guide mit vorbereitet hat :-)\n" +
    "\n" +
    "An dieser Stelle erwähne ich auch nochmal gerne, dass wir immer noch in allen Bereichen gerne Unterstützung entgegen nehmen! Viele Daten haben wir bereits und warten nur darauf gepflegt zu werden, genauso können noch Guides aus dem Forum übertragen werden.\n" +
    "Wahrscheinlich auch noch gut zu erwähnen: Hier wird keiner verhaftet! Jeder macht das worauf er Lust hat, denn im Vordergrund steht der Spaß!\n" +
    "\n" +
    "Solltest du also Lust und Laune haben bei der Erweiterung der Seite zu helfen, melde dich - egal wo und wie! :-)\n" +
    "\n" +
    "Liebe Grüße,\n" +
    "das Xenoblade.org - Team</p>\n" +
    "  </section>\n" +
    "  <section class=\"content-box m-t-3\">\n" +
    "    <header>\n" +
    "      <h1>Die ersten zwei Guides online!</h1>\n" +
    "      <span class=\"date\">15.05.2016</span>\n" +
    "    </header>\n" +
    "    <p class=\"content-body\">Hallo ihr Lieben!\n" +
    "\n" +
    "Ausnahmsweise mal in kurzer Taktung neuer Inhalt!\n" +
    "Die letzte Zeit waren wir damit beschäftigt eine Pflege für zukünftige, aber auch einige der bereits im Forum vorhandenen Guides umzusetzen.\n" +
    "\n" +
    "Die ersten zwei Guides präsentieren wir heute:\n" +
    "Einmal der Guide von Styxx, welcher einem hilft den Ares90 zu erarbeiten, sowie der komplett neue und nicht im Forum veröffentlichte Guide mit sämtlichen Fundorten der Bluthummer (<a href=\"https://www.xenobladex.org/missionen/#mission-391\">Aufstieg des Bluthummers</a>), den evgeniat erarbeitet und geschrieben hat.\n" +
    "An beide ganz vielen lieben Dank für die Bereitstellung des Inhalts!\n" +
    "\n" +
    "Wir arbeiten daran auch die anderen Guides im Forum (insofern die Autoren einverstanden sind) auf die Seite zu bringen und werden sicher zeitnah weitere Guides veröffentlichen.\n" +
    "\n" +
    "Liebe Grüße,\n" +
    "das Xenoblade.org - Team</p>\n" +
    "  </section>\n" +
    "  <section class=\"content-box m-t-3\">\n" +
    "    <header>\n" +
    "      <h1>Erweiterungen online!</h1>\n" +
    "      <span class=\"date\">14.05.2016</span>\n" +
    "    </header>\n" +
    "    <p class=\"content-body\">Hallo ihr Lieben!\n" +
    "\n" +
    "Heute gibt es einen ganzen Batzen neuer Daten in Form der Erweiterungen.\n" +
    "Diese könnt ihr euch nach Typ unterteilt oder auch nur nach Kategorien anschauen. Ihr findet dort Beschreibungen zur Funktion sowie die benötigten Materialien zur Herstellung :-)\n" +
    "Wie immer: Falls ihr Fragen, Anregungen, Feedback habt oder uns sogar gerne direkt unterstützen möchtet, meldet euch gerne im Forum oder auch per Mail (<a href=\"mailto:kontakt@xenoblade.org\">kontakt@xenoblade.org</a> ) bei uns :-)\n" +
    "\n" +
    "Liebe Grüße,\n" +
    "das Xenoblade.org - Team</p>\n" +
    "  </section>\n" +
    "  <section class=\"content-box m-t-3\">\n" +
    "    <header>\n" +
    "      <h1>Sammelitems online!</h1>\n" +
    "      <span class=\"date\">17.04.2016</span>\n" +
    "    </header>\n" +
    "    <p class=\"content-body\">Hallo ihr Lieben!\n" +
    "\n" +
    "So eben ist die Sammelitems-Seite live gegangen! Dort findet ihr Beschreibungen und auch Hinweise zu den Fundorten dieser!\n" +
    "Im Kollektikon sind diese auch direkt verlinkt, um schnell zu den näheren Infos navigieren zu können :-)\n" +
    "\n" +
    "Liebe Grüße,\n" +
    "das Xenoblade.org - Team</p>\n" +
    "  </section>\n" +
    "  <section class=\"content-box m-t-3\">\n" +
    "    <header>\n" +
    "      <h1>Kollektikon online!</h1>\n" +
    "      <span class=\"date\">03.04.2016</span>\n" +
    "    </header>\n" +
    "    <p class=\"content-body\">Hallo ihr Lieben!\n" +
    "\n" +
    "Heute präsentieren wir das Kollektikon. Die Details zu den Fundorten für die Sammelitems folgen später, bis dahin könnt ihr schonmal hier die Namen fehlender Items entnehmen und auch gerne im Forum nach den genauen Fundorten fragen!\n" +
    "Generell sind Sammelitems nicht überall verteilt sondern sind in gewissen Regionen zu finden (Höhlen, Wasser, Wald...), wir hoffen euch schon bald diese Regionen dann auch auf Karten präsentieren zu können :-)\n" +
    "\n" +
    "Liebe Grüße,\n" +
    "das Xenoblade.org - Team</p>\n" +
    "  </section>\n" +
    "  <section class=\"content-box m-t-3\">\n" +
    "    <header>\n" +
    "      <h1>Kreaturen online!</h1>\n" +
    "      <span class=\"date\">11.03.2016</span>\n" +
    "    </header>\n" +
    "    <p class=\"content-body\">Hallo ihr Lieben!\n" +
    "\n" +
    "Da wir im Hintergrund einige Umbauten vornehmen mussten, waren wir leider länger gebremst was neue Inhalte betrifft.\n" +
    "Aber da die Seite auch noch lange ein Spaß für uns alle bleiben soll, war es notwendig bereits frühzeitig alles in die richtigen Bahnen zu lenken ;-)\n" +
    "Heute präsentieren wir die Kreaturen! Diese Sind nun auch mit dem Material direkt verlinkt!\n" +
    "Nebenbei haben wir der Seite noch ein kleines Ladeicon spendiert, da es bei der Masse an Daten doch mal einen Moment dauern kann, bis man etwas sieht.\n" +
    "Zudem haben die Umbauten auch dafür gesorgt, dass die Daten (auf den einzelnen Seiten) nur einmal inital geladen werden müssen, solange ihr über Links auf der Seite navigiert -> Klickt ihr auf Missionen -> Monster und dann wieder Missionen habt ihr beim zweiten Mal keine Ladezeit mehr (dies gilt nur solange ihr über Links auf dieser Seite navigiert, ladet ihr neu oder tippt eigenständig eine neue URL ein, werden die Daten wieder inital neu vom Server geholt).\n" +
    "\n" +
    "Liebe Grüße,\n" +
    "das Xenoblade.org - Team</p>\n" +
    "  </section>\n" +
    "  <section class=\"content-box m-t-3\">\n" +
    "    <header>\n" +
    "      <h1>Material online!</h1>\n" +
    "      <span class=\"date\">10.02.2016</span>\n" +
    "    </header>\n" +
    "    <p class=\"content-body\">Hallo ihr Lieben!\n" +
    "\n" +
    "In der Vorarbeit zu den Monstern haben wir bereits sämtliche Gattungen und auch nahezu alles Material erfasst.\n" +
    "Entsprechend heute die Materialseite auf der ihr bereits Kreaturen bzw. Gattungen angegeben findet, um das Material ausfindig machen zu können.\n" +
    "\n" +
    "Liebe Grüße,\n" +
    "das Xenoblade.org - Team</p>\n" +
    "  </section>\n" +
    "  <section class=\"content-box m-t-3\">\n" +
    "    <header>\n" +
    "      <h1>Missionen online!</h1>\n" +
    "      <span class=\"date\">19.01.2016</span>\n" +
    "    </header>\n" +
    "    <p class=\"content-body\">Hallo ihr Lieben!\n" +
    "\n" +
    "Heute präsentieren wir euch die Missionen! Es ist bereits ein großer Teil der Standard- und Harmoniemissionen enthalten, die Nebenjobs kommen noch, sind aber insgesamt bei uns niedriger priorisiert.\n" +
    "\n" +
    "Um euch die Übersicht zu erleichtern haben wir auch bei den Missionen Filter eingebaut für Name, Kapitel und BLADE-Level. Für die Zukunft sind noch Suchen auch für die Freitextfelder und eine Unterteilung der Missionen auf eigene Seiten geplant. Solltet ihr noch mehr Vorschläge, Fragen etc. (oder auch Korrekturen/Anmerkungen) haben freuen wir uns von euch zu hören!\n" +
    "Unsere Kommunikation läuft hauptsächlich weiterhin über Xenoblade.org und das Forum - wir freuen uns wenn ihr uns dort einen Besuch abstattet!\n" +
    "\n" +
    "Liebe Grüße,\n" +
    "das Xenoblade.org - Team</p>\n" +
    "  </section>\n" +
    "  <section class=\"content-box m-t-3\">\n" +
    "    <header>\n" +
    "      <h1>Willkommen auf XenobladeX.org!</h1>\n" +
    "      <span class=\"date\">09.01.2016</span>\n" +
    "    </header>\n" +
    "    <p class=\"content-body\">Hallo ihr Lieben!\n" +
    "\n" +
    "Wir sind froh euch heute endlich die neue Seite präsentieren zu können!\n" +
    "Als lockeren Start haben wir für euch die <a href=\"/faq\">FAQ</a> zusammengestellt mit vielen Fragen, die euch hoffentlich eine Hilfe sind - die FAQ sind natürlich noch nicht komplett und werden mit der Zeit weiter ausgebaut.\n" +
    "Selbstverständlich haben wir schon jede Menge weiterer Daten in der Rückhand und wir werden unser bestes Geben euch nach und nach all diese Daten aufbereitet hier zur Verfügung zu stellen.\n" +
    "Solltet ihr Anmerkungen haben, Fehler finden oder noch Fragen haben, freuen wir uns über jegliches Feedback!\n" +
    "Besucht uns dazu gerne im Forum!\n" +
    "\n" +
    "Wir hoffen ihr seid gut im neuen Jahr angekommen,\n" +
    "das Xenoblade.org - Team</p>\n" +
    "  </section>\n" +
    "</div>"
  );

}]);
