"use strict";
var router_1 = require('@angular/router');
var cardprinter_component_1 = require('./cardprinter/cardprinter.component');
var sprintreport_component_1 = require('./sprintreport/sprintreport.component');
var appRoutes = [
    {
        path: 'cardprinter',
        component: cardprinter_component_1.cardprinterComponent
    },
    {
        path: 'sprintreport',
        component: sprintreport_component_1.sprintreportComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map