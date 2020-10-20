(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wayne\Documents\GitHub Page Repo\SinoCalc\src\main.ts */"zUnb");


/***/ }),

/***/ "5HpS":
/*!*************************************************************************!*\
  !*** ./src/app/shared/modify-grid-modal/modify-grid-modal.component.ts ***!
  \*************************************************************************/
/*! exports provided: ModifyGridModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyGridModalComponent", function() { return ModifyGridModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModifyGridModalComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModifyGridModalComponent.ɵfac = function ModifyGridModalComponent_Factory(t) { return new (t || ModifyGridModalComponent)(); };
ModifyGridModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModifyGridModalComponent, selectors: [["app-modify-grid-modal"]], decls: 2, vars: 0, template: function ModifyGridModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "modify-grid-modal works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RpZnktZ3JpZC1tb2RhbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifyGridModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modify-grid-modal',
                templateUrl: './modify-grid-modal.component.html',
                styleUrls: ['./modify-grid-modal.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5nBM":
/*!*************************************************!*\
  !*** ./src/app/services/weapon-list.service.ts ***!
  \*************************************************/
/*! exports provided: WeaponListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponListService", function() { return WeaponListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WeaponListService {
    constructor(http) {
        this.http = http;
        this.weaponUrl = 'https://sinocalcapi.herokuapp.com/weapon';
    }
    getWeapons() {
        return this.http.get(this.weaponUrl);
    }
}
WeaponListService.ɵfac = function WeaponListService_Factory(t) { return new (t || WeaponListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WeaponListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeaponListService, factory: WeaponListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeaponListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8KZE":
/*!*******************************************************************!*\
  !*** ./src/app/vanguard/vanguard-home/vanguard-home.component.ts ***!
  \*******************************************************************/
/*! exports provided: VanguardHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanguardHomeComponent", function() { return VanguardHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_weapon_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/weapon.model */ "se81");
/* harmony import */ var _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../state/weapon-list.actions */ "UnxO");
/* harmony import */ var _state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../state/weapon-grid.state */ "Rt2e");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_add_grid_modal_add_grid_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/add-grid-modal/add-grid-modal.component */ "fiNH");
/* harmony import */ var _shared_grid_display_grid_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/grid-display/grid-display.component */ "jiDt");











function VanguardHomeComponent_div_4_app_grid_display_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-grid-display", 8);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const grid_r1 = ctx_r4.$implicit;
    const index_r2 = ctx_r4.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("grid", grid_r1)("classType", ctx_r3.classes.vanguard)("gridNum", index_r2);
} }
function VanguardHomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, VanguardHomeComponent_div_4_app_grid_display_1_Template, 1, 3, "app-grid-display", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const grid_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", grid_r1.ready);
} }
class VanguardHomeComponent {
    constructor(store) {
        this.store = store;
        this.classes = new src_app_models_weapon_model__WEBPACK_IMPORTED_MODULE_2__["Classes"]();
    }
    ngOnInit() {
        this.store.dispatch(new _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_3__["WeaponListActions"].LoadWeaponList());
    }
}
VanguardHomeComponent.ɵfac = function VanguardHomeComponent_Factory(t) { return new (t || VanguardHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
VanguardHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VanguardHomeComponent, selectors: [["app-vanguard-home"]], decls: 8, vars: 4, consts: [["id", "calcContainer"], ["id", "calcHeading"], ["id", "calcBody"], ["class", "gridDisplays", 4, "ngFor", "ngForOf"], ["id", "addGridComponent"], [3, "classWeapons"], [1, "gridDisplays"], [3, "grid", "classType", "gridNum", 4, "ngIf"], [3, "grid", "classType", "gridNum"]], template: function VanguardHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Vanguard Calculator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, VanguardHomeComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-add-grid-modal", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 2, ctx.grids$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("classWeapons", ctx.classes.vanguard.weapons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _shared_add_grid_modal_add_grid_modal_component__WEBPACK_IMPORTED_MODULE_7__["AddGridModalComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_grid_display_grid_display_component__WEBPACK_IMPORTED_MODULE_8__["GridDisplayComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["#calcContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#calcHeading[_ngcontent-%COMP%] {\r\n  margin: 30px 25px 0px;\r\n  font-size: 200%;\r\n  font-weight: bold;\r\n}\r\n\r\n#calcBody[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbmd1YXJkLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJ2YW5ndWFyZC1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2FsY0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4jY2FsY0hlYWRpbmcge1xyXG4gIG1hcmdpbjogMzBweCAyNXB4IDBweDtcclxuICBmb250LXNpemU6IDIwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbiNjYWxjQm9keSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Select"])(_state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_4__["WeaponGridState"].getWeaponGrids)
], VanguardHomeComponent.prototype, "grids$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VanguardHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-vanguard-home',
                templateUrl: './vanguard-home.component.html',
                styleUrls: ['./vanguard-home.component.css']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { grids$: [] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bb/V":
/*!**********************************************************!*\
  !*** ./src/app/sinocalc-home/sinocalc-home.component.ts ***!
  \**********************************************************/
/*! exports provided: SinocalcHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinocalcHomeComponent", function() { return SinocalcHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SinocalcHomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
SinocalcHomeComponent.ɵfac = function SinocalcHomeComponent_Factory(t) { return new (t || SinocalcHomeComponent)(); };
SinocalcHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SinocalcHomeComponent, selectors: [["app-sinocalc-home"]], decls: 0, vars: 0, template: function SinocalcHomeComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW5vY2FsYy1ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SinocalcHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sinocalc-home',
                templateUrl: './sinocalc-home.component.html',
                styleUrls: ['./sinocalc-home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Eq/W":
/*!*****************************************************************************!*\
  !*** ./src/app/vanguard/vanguard-calculate/vanguard-calculate.component.ts ***!
  \*****************************************************************************/
/*! exports provided: VanguardCalculateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VanguardCalculateComponent", function() { return VanguardCalculateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../state/weapon-grid.state */ "Rt2e");
/* harmony import */ var _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../state/weapon-grid.actions */ "UTpe");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









class VanguardCalculateComponent {
    constructor(store) {
        this.store = store;
        this.pdefMax = 1;
        this.mdefMax = 1;
        this.oppPDef = 0;
        this.oppMDef = 0;
        this.combo = 0;
    }
    ngOnInit() {
        this.grids$.subscribe(grids => {
            this.grids = grids;
            this.pdefMax = 1;
            this.mdefMax = 1;
            for (const grid of this.grids) {
                if (grid.stats.patk > ((2 / 3) * this.pdefMax)) {
                    this.pdefMax = Math.round((3 / 2) * grid.stats.patk);
                }
                if (grid.stats.matk > ((2 / 3) * this.mdefMax)) {
                    this.mdefMax = Math.round((3 / 2) * grid.stats.matk);
                }
            }
            if (this.oppPDef > this.pdefMax) {
                this.oppPDef = 0;
            }
            if (this.oppMDef > this.mdefMax) {
                this.oppMDef = 0;
            }
        });
    }
    calculate() {
        let i = 0;
        let supMod;
        for (const grid of this.grids) {
            this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateGridBase(i, 0));
            this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateGridSup(i, 0));
            this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateGridAoe(i, 0));
            this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateGridTotal(i, 0));
            supMod = this.calculateSupport(grid);
            for (const weapon of grid.weapons) {
                this.calculateWeapon(weapon, grid, i, supMod);
            }
            this.calculatePercent(grid, i);
            i++;
        }
    }
    calculateWeapon(weapon, grid, gridNum, supMod) {
        let weaponMod;
        let weaponSkillLevel = weapon.weaponSkillLevel;
        let weaponSkillMod;
        let targets = weapon.skill.targets;
        let weaponType = weapon.weaponInfo.weaponType;
        let job = grid.job;
        let patk = grid.stats.patk;
        let matk = grid.stats.matk;
        let combo = this.combo;
        let comboMod = 1;
        let pdef = this.oppPDef;
        let mdef = this.oppMDef;
        let jobMod;
        let shinmaMod;
        let atk;
        let def;
        let base;
        let sup;
        let aoe;
        let total;
        if (weaponType === 'Sword' || weaponType === 'Hammer') {
            atk = patk;
            def = pdef;
            weaponMod = weapon.skill.patkMod;
        }
        else {
            atk = matk;
            def = mdef;
            weaponMod = weapon.skill.matkMod;
        }
        if (combo > 1 && combo < 201) {
            comboMod = 1 + (combo * 0.0007);
        }
        else if (combo > 1 && combo < 501) {
            comboMod = 1 + ((200 * 0.0007) + ((combo - 200) * 0.0005));
        }
        else if (combo > 1 && combo < 1001) {
            comboMod = 1 + ((200 * 0.0007) + (300 * 0.0005) + ((combo - 500) * 0.00035));
        }
        jobMod = this.getJobMod(job, weaponType);
        shinmaMod = this.getShinmaMod(weaponType, weapon.skill.skillTier, grid.shinma);
        weaponSkillMod = 1 + ((weaponSkillLevel - 1) * 0.025);
        if (weaponSkillLevel > 14) {
            weaponSkillMod += 0.025;
        }
        if (weaponSkillLevel === 20) {
            weaponSkillMod += 0.025;
        }
        base = Number((((atk * comboMod) - (def * (2 / 3))) * (weaponMod * weaponSkillMod * jobMod * shinmaMod * 0.05 * 0.95)).toFixed(0));
        sup = Number((base * supMod).toFixed(0));
        aoe = Number((base * targets).toFixed(0));
        total = Number((base * supMod * targets).toFixed(0));
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateWeaponBase(gridNum, base, weapon.weaponInfo.weaponName));
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateWeaponSup(gridNum, sup, weapon.weaponInfo.weaponName));
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateWeaponAoe(gridNum, aoe, weapon.weaponInfo.weaponName));
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateWeaponTotal(gridNum, total, weapon.weaponInfo.weaponName));
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateGridBase(gridNum, (base + grid.results.base)));
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateGridSup(gridNum, (sup + grid.results.sup)));
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateGridAoe(gridNum, (aoe + grid.results.aoe)));
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateGridTotal(gridNum, (total + grid.results.total)));
    }
    calculateSupport(grid) {
        let gridSupProc = grid.supProc;
        let supMod = 1;
        for (const weapon of grid.weapons) {
            let supSkill = weapon.weaponInfo.supportSkill;
            let supSkillLevel = weapon.supportSkillLevel;
            let supSkillLevelMod;
            let procRate;
            if (supSkill > 0) {
                if (supSkillLevel === 20) {
                    supSkillLevelMod = 1 + (20 * 0.025);
                }
                else {
                    supSkillLevelMod = 1 + ((supSkillLevel - 1) * 0.025);
                }
                procRate = 0.04 + ((supSkillLevel - 1) * 0.005);
                if (supSkillLevel > 14) {
                    procRate += 0.005;
                }
                if (supSkillLevel === 20) {
                    procRate += 0.005;
                }
                if (gridSupProc == 0) {
                    supMod += (((supSkill * 5) + 5) / 100) * supSkillLevelMod * procRate;
                }
                else if (weapon.supProc == 1) {
                    supMod += (((supSkill * 5) + 5) / 100) * supSkillLevelMod;
                }
            }
        }
        return supMod;
    }
    getJobMod(job, weaponType) {
        switch (job) {
            case 'Breaker': {
                if (weaponType === 'Sword') {
                    return 1.1;
                }
                else if (weaponType === 'Hammer') {
                    return 1;
                }
                else if (weaponType === 'Bow') {
                    return 1;
                }
                else if (weaponType === 'Spear') {
                    return 1;
                }
                break;
            }
            case 'Crusher': {
                if (weaponType === 'Sword') {
                    return 1;
                }
                else if (weaponType === 'Hammer') {
                    return 1.1;
                }
                else if (weaponType === 'Bow') {
                    return 1;
                }
                else if (weaponType === 'Spear') {
                    return 1;
                }
                break;
            }
            case 'Gunner': {
                if (weaponType === 'Sword') {
                    return 1;
                }
                else if (weaponType === 'Hammer') {
                    return 1;
                }
                else if (weaponType === 'Bow') {
                    return 1.1;
                }
                else if (weaponType === 'Spear') {
                    return 1;
                }
                break;
            }
            case 'Paladin': {
                if (weaponType === 'Sword') {
                    return 1;
                }
                else if (weaponType === 'Hammer') {
                    return 1;
                }
                else if (weaponType === 'Bow') {
                    return 1;
                }
                else if (weaponType === 'Spear') {
                    return 1.1;
                }
                break;
            }
            case 'HNM Breaker': {
                if (weaponType === 'Sword') {
                    return 1.35;
                }
                else if (weaponType === 'Hammer') {
                    return 0.25;
                }
                else if (weaponType === 'Bow') {
                    return 0.25;
                }
                else if (weaponType === 'Spear') {
                    return 1;
                }
                break;
            }
            case 'HNM Crusher': {
                if (weaponType === 'Sword') {
                    return 0.25;
                }
                else if (weaponType === 'Hammer') {
                    return 1.35;
                }
                else if (weaponType === 'Bow') {
                    return 1;
                }
                else if (weaponType === 'Spear') {
                    return 0.25;
                }
                break;
            }
            case 'HNM Gunner': {
                if (weaponType === 'Sword') {
                    return 0.25;
                }
                else if (weaponType === 'Hammer') {
                    return 1;
                }
                else if (weaponType === 'Bow') {
                    return 1.35;
                }
                else if (weaponType === 'Spear') {
                    return 0.25;
                }
                break;
            }
            case 'HNM Paladin': {
                if (weaponType === 'Sword') {
                    return 1;
                }
                else if (weaponType === 'Hammer') {
                    return 0.25;
                }
                else if (weaponType === 'Bow') {
                    return 0.25;
                }
                else if (weaponType === 'Spear') {
                    return 1.35;
                }
                break;
            }
            default: {
                return 1;
                break;
            }
        }
    }
    getShinmaMod(weaponType, tier, shinma) {
        switch (shinma) {
            case 'None': {
                return 1;
                break;
            }
            case 'Sword/Spear': {
                if (weaponType === 'Sword' || weaponType === 'Spear') {
                    switch (tier) {
                        case 1: {
                            return 1.3;
                            break;
                        }
                        case 2: {
                            return 1.6;
                            break;
                        }
                        case 3: {
                            return 2.9;
                            break;
                        }
                        case 4: {
                            return 2.9;
                            break;
                        }
                        default: {
                            return 1;
                            break;
                        }
                    }
                }
                else {
                    return 1;
                }
                break;
            }
            case 'Hammer/Bow': {
                if (weaponType === 'Hammer' || weaponType === 'Bow') {
                    switch (tier) {
                        case 1: {
                            return 1.3;
                            break;
                        }
                        case 2: {
                            return 1.6;
                            break;
                        }
                        case 3: {
                            return 2.9;
                            break;
                        }
                        case 4: {
                            return 2.9;
                            break;
                        }
                        default: {
                            return 1;
                            break;
                        }
                    }
                }
                else {
                    return 1;
                }
                break;
            }
            default: {
                return 1;
                break;
            }
        }
    }
    calculatePercent(grid, gridNum) {
        let total = grid.results.total;
        for (const weapon of grid.weapons) {
            let percent;
            percent = Number(((weapon.results.total / total) * 100).toFixed(2));
            this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].UpdateWeaponPercent(gridNum, percent, weapon.weaponInfo.weaponName));
        }
    }
}
VanguardCalculateComponent.ɵfac = function VanguardCalculateComponent_Factory(t) { return new (t || VanguardCalculateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
VanguardCalculateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VanguardCalculateComponent, selectors: [["app-vanguard-calculate"]], decls: 29, vars: 10, consts: [["id", "calculateContainer"], ["id", "slidersContainer"], [1, "slider"], [1, "sliderLabel"], ["min", "0", 1, "defSlider", 3, "max", "ngModel", "ngModelChange"], ["type", "number", "min", "0", 1, "sliderInput", 3, "max", "ngModel", "ngModelChange"], ["min", "0", "max", "1000", 1, "comboSlider", 3, "ngModel", "ngModelChange"], ["type", "number", "min", "0", "max", "1000", 1, "sliderInput", 3, "ngModel", "ngModelChange"], ["id", "buttonContainer"], ["id", "calculateButton", 3, "click"]], template: function VanguardCalculateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " P.Def ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VanguardCalculateComponent_Template_mat_slider_ngModelChange_7_listener($event) { return ctx.oppPDef = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VanguardCalculateComponent_Template_input_ngModelChange_9_listener($event) { return ctx.oppPDef = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " M.Def ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-slider", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VanguardCalculateComponent_Template_mat_slider_ngModelChange_15_listener($event) { return ctx.oppMDef = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VanguardCalculateComponent_Template_input_ngModelChange_17_listener($event) { return ctx.oppMDef = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Combo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-slider", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VanguardCalculateComponent_Template_mat_slider_ngModelChange_23_listener($event) { return ctx.combo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function VanguardCalculateComponent_Template_input_ngModelChange_25_listener($event) { return ctx.combo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VanguardCalculateComponent_Template_div_click_27_listener() { return ctx.calculate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Calculate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", ctx.pdefMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.oppPDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", ctx.pdefMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.oppPDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", ctx.mdefMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.oppMDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("max", ctx.mdefMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.oppMDef);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.combo);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.combo);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]], styles: ["#slidersContainer[_ngcontent-%COMP%] {\r\n  margin: 0px auto;\r\n}\r\n\r\n.sliderLabel[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  margin-right: 5px;\r\n}\r\n\r\n.comboSlider[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n}\r\n\r\n.defSlider[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n.sliderInput[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n}\r\n\r\n#calculateButton[_ngcontent-%COMP%] {\r\n  box-shadow: inset 0px 1px 3px 0px #c0c0c0;\r\n  background: linear-gradient(to bottom, #bebebe 5%, #a9a9a9 100%);\r\n  background-color: #bebebe;\r\n  border-radius: 5px;\r\n  border: 1px solid #bebebe;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  color: #F8F8F8;\r\n  font-family: Arial;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  padding: 11px 23px;\r\n  text-decoration: none;\r\n  text-shadow: 0px -1px 0px #a9a9a9;\r\n  margin: 30px auto;\r\n  display: block;\r\n  width: 67px;\r\n}\r\n\r\n#calculateButton[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(to bottom, #a9a9a9 5%, #bebebe 100%);\r\n  background-color: #a9a9a9;\r\n}\r\n\r\n#calculateButton[_ngcontent-%COMP%]:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbmd1YXJkLWNhbGN1bGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxnRUFBZ0U7RUFDaEUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnRUFBZ0U7RUFDaEUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDViIsImZpbGUiOiJ2YW5ndWFyZC1jYWxjdWxhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzbGlkZXJzQ29udGFpbmVyIHtcclxuICBtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4uc2xpZGVyTGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4uY29tYm9TbGlkZXIge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmRlZlNsaWRlciB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uc2xpZGVySW5wdXQge1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4jY2FsY3VsYXRlQnV0dG9uIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggI2MwYzBjMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYmViZWJlIDUlLCAjYTlhOWE5IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZWJlYmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI0Y4RjhGODtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDExcHggMjNweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAtMXB4IDBweCAjYTlhOWE5O1xyXG4gIG1hcmdpbjogMzBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA2N3B4O1xyXG59XHJcblxyXG4jY2FsY3VsYXRlQnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYTlhOWE5IDUlLCAjYmViZWJlIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhOWE5YTk7XHJcbn1cclxuXHJcbiNjYWxjdWxhdGVCdXR0b246YWN0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAxcHg7XHJcbn1cclxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Select"])(_state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_3__["WeaponGridState"].getWeaponGrids)
], VanguardCalculateComponent.prototype, "grids$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](VanguardCalculateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-vanguard-calculate',
                templateUrl: './vanguard-calculate.component.html',
                styleUrls: ['./vanguard-calculate.component.css']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { grids$: [] }); })();


/***/ }),

/***/ "Rt2e":
/*!********************************************!*\
  !*** ./src/app/state/weapon-grid.state.ts ***!
  \********************************************/
/*! exports provided: WeaponGridListStateModel, WeaponGridState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponGridListStateModel", function() { return WeaponGridListStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponGridState", function() { return WeaponGridState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _models_weapon_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../models/weapon.model */ "se81");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./weapon-grid.actions */ "UTpe");
/* harmony import */ var _services_weapon_skills_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../services/weapon-skills.service */ "uHIS");








class WeaponGridListStateModel {
}
let WeaponGridState = class WeaponGridState {
    constructor(service) {
        this.service = service;
    }
    static getWeaponGrids({ grids }) {
        return grids;
    }
    static getNumGrids({ numGrid }) {
        return numGrid;
    }
    addGrid({ dispatch, getState, patchState }) {
        const state = getState();
        patchState({
            numGrid: ++state.numGrid,
            grids: [...state.grids, new _models_weapon_model__WEBPACK_IMPORTED_MODULE_3__["WeaponGrid"]()]
        });
    }
    deleteGrid({ dispatch, getState, patchState }, { gridNum }) {
        const state = getState();
        patchState({
            numGrid: --state.numGrid,
            grids: state.grids.filter(a => a !== state.grids[gridNum])
        });
    }
    addToGrid({ dispatch, getState, patchState }, { gridNum, selectedRarity, weapon }) {
        const state = getState();
        const grid = state.grids[gridNum];
        const weaponDetailed = new _models_weapon_model__WEBPACK_IMPORTED_MODULE_3__["WeaponDetailed"]();
        weaponDetailed.weaponInfo = weapon;
        weaponDetailed.selectedRarity = selectedRarity;
        grid.weapons.push(weaponDetailed);
        patchState({
            grids: [...state.grids]
        });
    }
    deleteFromGrid({ dispatch, getState, patchState }, { gridNum, weaponName }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.weapons = grid.weapons.filter(weapon => weapon.weaponInfo.weaponName !== weaponName);
        patchState({
            grids: [...state.grids]
        });
    }
    getWeaponSkills({ dispatch, getState, patchState }, { gridNum, weaponSkillQuery }) {
        const state = getState();
        const weapons = state.grids[gridNum].weapons;
        return this.service.getWeaponSkills(weaponSkillQuery).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((result) => {
            for (let i = 0; i < weapons.length; i++) {
                weapons[i].skill = result[i];
            }
            patchState({
                grids: [...state.grids]
            });
        }));
    }
    gridChangeState({ dispatch, getState, patchState }, { flag, gridNum }) {
        const state = getState();
        state.grids[gridNum].ready = flag;
        patchState({
            grids: [...state.grids]
        });
    }
    updatePAtk({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.stats.patk = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateMAtk({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.stats.matk = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updatePDef({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.stats.pdef = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateMDef({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.stats.mdef = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateWeaponSkillLevel({ dispatch, getState, patchState }, { gridNum, value, weaponName }) {
        const state = getState();
        const grid = state.grids[gridNum];
        const weapon = grid.weapons.filter(weapon => weapon.weaponInfo.weaponName === weaponName);
        weapon[0].weaponSkillLevel = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateSupportSkillLevel({ dispatch, getState, patchState }, { gridNum, value, weaponName }) {
        const state = getState();
        const grid = state.grids[gridNum];
        const weapon = grid.weapons.filter(weapon => weapon.weaponInfo.weaponName === weaponName);
        weapon[0].supportSkillLevel = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateWeaponSupProc({ dispatch, getState, patchState }, { gridNum, value, weaponName }) {
        const state = getState();
        const grid = state.grids[gridNum];
        const weapon = grid.weapons.filter(weapon => weapon.weaponInfo.weaponName === weaponName);
        weapon[0].supProc = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateGridShinma({ dispatch, getState, patchState }, { gridNum, shinma }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.shinma = shinma;
        patchState({
            grids: [...state.grids]
        });
    }
    updateGridSupProc({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.supProc = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateJob({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.job = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateWeaponBase({ dispatch, getState, patchState }, { gridNum, value, weaponName }) {
        const state = getState();
        const grid = state.grids[gridNum];
        const weapon = grid.weapons.filter(weapon => weapon.weaponInfo.weaponName === weaponName);
        weapon[0].results.base = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateWeaponAoe({ dispatch, getState, patchState }, { gridNum, value, weaponName }) {
        const state = getState();
        const grid = state.grids[gridNum];
        const weapon = grid.weapons.filter(weapon => weapon.weaponInfo.weaponName === weaponName);
        weapon[0].results.aoe = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateWeaponSup({ dispatch, getState, patchState }, { gridNum, value, weaponName }) {
        const state = getState();
        const grid = state.grids[gridNum];
        const weapon = grid.weapons.filter(weapon => weapon.weaponInfo.weaponName === weaponName);
        weapon[0].results.sup = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateWeaponTotal({ dispatch, getState, patchState }, { gridNum, value, weaponName }) {
        const state = getState();
        const grid = state.grids[gridNum];
        const weapon = grid.weapons.filter(weapon => weapon.weaponInfo.weaponName === weaponName);
        weapon[0].results.total = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateWeaponPercent({ dispatch, getState, patchState }, { gridNum, value, weaponName }) {
        const state = getState();
        const grid = state.grids[gridNum];
        const weapon = grid.weapons.filter(weapon => weapon.weaponInfo.weaponName === weaponName);
        weapon[0].results.percent = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateGridBase({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.results.base = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateGridAoe({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.results.aoe = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateGridSup({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.results.sup = value;
        patchState({
            grids: [...state.grids]
        });
    }
    updateGridTotal({ dispatch, getState, patchState }, { gridNum, value }) {
        const state = getState();
        const grid = state.grids[gridNum];
        grid.results.total = value;
        patchState({
            grids: [...state.grids]
        });
    }
    update({ dispatch, getState, patchState }) {
        const state = getState();
        patchState({
            grids: [...state.grids]
        });
    }
};
WeaponGridState.ɵfac = function WeaponGridState_Factory(t) { return new (t || WeaponGridState)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_weapon_skills_service__WEBPACK_IMPORTED_MODULE_6__["WeaponSkillsService"])); };
WeaponGridState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WeaponGridState, factory: WeaponGridState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].AddGrid)
], WeaponGridState.prototype, "addGrid", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].DeleteGrid)
], WeaponGridState.prototype, "deleteGrid", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].AddToGrid)
], WeaponGridState.prototype, "addToGrid", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].DeleteFromGrid)
], WeaponGridState.prototype, "deleteFromGrid", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].GetWeaponSkills)
], WeaponGridState.prototype, "getWeaponSkills", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].GridStateChange)
], WeaponGridState.prototype, "gridChangeState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdatePAtk)
], WeaponGridState.prototype, "updatePAtk", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateMAtk)
], WeaponGridState.prototype, "updateMAtk", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdatePDef)
], WeaponGridState.prototype, "updatePDef", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateMDef)
], WeaponGridState.prototype, "updateMDef", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateWeaponSkillLevel)
], WeaponGridState.prototype, "updateWeaponSkillLevel", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateSupportSkillLevel)
], WeaponGridState.prototype, "updateSupportSkillLevel", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateWeaponSupProc)
], WeaponGridState.prototype, "updateWeaponSupProc", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateGridShinma)
], WeaponGridState.prototype, "updateGridShinma", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateGridSupProc)
], WeaponGridState.prototype, "updateGridSupProc", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateJob)
], WeaponGridState.prototype, "updateJob", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateWeaponBase)
], WeaponGridState.prototype, "updateWeaponBase", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateWeaponAoe)
], WeaponGridState.prototype, "updateWeaponAoe", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateWeaponSup)
], WeaponGridState.prototype, "updateWeaponSup", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateWeaponTotal)
], WeaponGridState.prototype, "updateWeaponTotal", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateWeaponPercent)
], WeaponGridState.prototype, "updateWeaponPercent", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateGridBase)
], WeaponGridState.prototype, "updateGridBase", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateGridAoe)
], WeaponGridState.prototype, "updateGridAoe", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateGridSup)
], WeaponGridState.prototype, "updateGridSup", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].UpdateGridTotal)
], WeaponGridState.prototype, "updateGridTotal", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Action"])(_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponGridActions"].Update)
], WeaponGridState.prototype, "update", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], WeaponGridState, "getWeaponGrids", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Selector"])()
], WeaponGridState, "getNumGrids", null);
WeaponGridState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["State"])({
        name: 'weaponGrids',
        defaults: {
            numGrid: 0,
            grids: []
        }
    })
], WeaponGridState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WeaponGridState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _services_weapon_skills_service__WEBPACK_IMPORTED_MODULE_6__["WeaponSkillsService"] }]; }, { addGrid: [], deleteGrid: [], addToGrid: [], deleteFromGrid: [], getWeaponSkills: [], gridChangeState: [], updatePAtk: [], updateMAtk: [], updatePDef: [], updateMDef: [], updateWeaponSkillLevel: [], updateSupportSkillLevel: [], updateWeaponSupProc: [], updateGridShinma: [], updateGridSupProc: [], updateJob: [], updateWeaponBase: [], updateWeaponAoe: [], updateWeaponSup: [], updateWeaponTotal: [], updateWeaponPercent: [], updateGridBase: [], updateGridAoe: [], updateGridSup: [], updateGridTotal: [], update: [] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _vanguard_vanguard_home_vanguard_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vanguard/vanguard-home/vanguard-home.component */ "8KZE");



class AppComponent {
    constructor() {
        this.title = 'SinoCalc';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vanguard-home");
    } }, directives: [_vanguard_vanguard_home_vanguard_home_component__WEBPACK_IMPORTED_MODULE_1__["VanguardHomeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UTpe":
/*!**********************************************!*\
  !*** ./src/app/state/weapon-grid.actions.ts ***!
  \**********************************************/
/*! exports provided: WeaponGridActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponGridActions", function() { return WeaponGridActions; });
var WeaponGridActions;
(function (WeaponGridActions) {
    class AddToGrid {
        constructor(weapon, selectedRarity, gridNum) {
            this.weapon = weapon;
            this.selectedRarity = selectedRarity;
            this.gridNum = gridNum;
        }
    }
    AddToGrid.type = 'Weapon Add to Grid';
    WeaponGridActions.AddToGrid = AddToGrid;
    class DeleteFromGrid {
        constructor(weaponName, gridNum) {
            this.weaponName = weaponName;
            this.gridNum = gridNum;
        }
    }
    DeleteFromGrid.type = 'Weapon Delete from Grid';
    WeaponGridActions.DeleteFromGrid = DeleteFromGrid;
    class AddGrid {
        constructor() { }
        ;
    }
    AddGrid.type = 'Add Grid';
    WeaponGridActions.AddGrid = AddGrid;
    class DeleteGrid {
        constructor(gridNum) {
            this.gridNum = gridNum;
        }
        ;
    }
    DeleteGrid.type = 'Delete Grid';
    WeaponGridActions.DeleteGrid = DeleteGrid;
    class GetWeaponSkills {
        constructor(weaponSkillQuery, gridNum) {
            this.weaponSkillQuery = weaponSkillQuery;
            this.gridNum = gridNum;
        }
        ;
    }
    GetWeaponSkills.type = 'Get Weapon Skills';
    WeaponGridActions.GetWeaponSkills = GetWeaponSkills;
    class GridStateChange {
        constructor(flag, gridNum) {
            this.flag = flag;
            this.gridNum = gridNum;
        }
        ;
    }
    GridStateChange.type = 'Change Grid State';
    WeaponGridActions.GridStateChange = GridStateChange;
    class UpdatePAtk {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdatePAtk.type = 'Update Grid P.Atk';
    WeaponGridActions.UpdatePAtk = UpdatePAtk;
    class UpdateMAtk {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdateMAtk.type = 'Update Grid M.Atk';
    WeaponGridActions.UpdateMAtk = UpdateMAtk;
    class UpdatePDef {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdatePDef.type = 'Update Grid P.Def';
    WeaponGridActions.UpdatePDef = UpdatePDef;
    class UpdateMDef {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdateMDef.type = 'Update Grid M.Def';
    WeaponGridActions.UpdateMDef = UpdateMDef;
    class UpdateWeaponSkillLevel {
        constructor(gridNum, value, weaponName) {
            this.gridNum = gridNum;
            this.value = value;
            this.weaponName = weaponName;
        }
        ;
    }
    UpdateWeaponSkillLevel.type = 'Update Weapon Skill Level';
    WeaponGridActions.UpdateWeaponSkillLevel = UpdateWeaponSkillLevel;
    class UpdateSupportSkillLevel {
        constructor(gridNum, value, weaponName) {
            this.gridNum = gridNum;
            this.value = value;
            this.weaponName = weaponName;
        }
        ;
    }
    UpdateSupportSkillLevel.type = 'Update Support Skill Level';
    WeaponGridActions.UpdateSupportSkillLevel = UpdateSupportSkillLevel;
    class UpdateWeaponSupProc {
        constructor(gridNum, value, weaponName) {
            this.gridNum = gridNum;
            this.value = value;
            this.weaponName = weaponName;
        }
        ;
    }
    UpdateWeaponSupProc.type = 'Update Weapon Support Proc';
    WeaponGridActions.UpdateWeaponSupProc = UpdateWeaponSupProc;
    class UpdateGridShinma {
        constructor(gridNum, shinma) {
            this.gridNum = gridNum;
            this.shinma = shinma;
        }
        ;
    }
    UpdateGridShinma.type = 'Update Grid Shinma';
    WeaponGridActions.UpdateGridShinma = UpdateGridShinma;
    class UpdateGridSupProc {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdateGridSupProc.type = 'Update Grid Support Proc';
    WeaponGridActions.UpdateGridSupProc = UpdateGridSupProc;
    class UpdateJob {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdateJob.type = 'Update Grid Job';
    WeaponGridActions.UpdateJob = UpdateJob;
    class UpdateWeaponBase {
        constructor(gridNum, value, weaponName) {
            this.gridNum = gridNum;
            this.value = value;
            this.weaponName = weaponName;
        }
        ;
    }
    UpdateWeaponBase.type = 'Update Weapon Base';
    WeaponGridActions.UpdateWeaponBase = UpdateWeaponBase;
    class UpdateWeaponAoe {
        constructor(gridNum, value, weaponName) {
            this.gridNum = gridNum;
            this.value = value;
            this.weaponName = weaponName;
        }
        ;
    }
    UpdateWeaponAoe.type = 'Update Weapon Aoe';
    WeaponGridActions.UpdateWeaponAoe = UpdateWeaponAoe;
    class UpdateWeaponSup {
        constructor(gridNum, value, weaponName) {
            this.gridNum = gridNum;
            this.value = value;
            this.weaponName = weaponName;
        }
        ;
    }
    UpdateWeaponSup.type = 'Update Weapon Sup';
    WeaponGridActions.UpdateWeaponSup = UpdateWeaponSup;
    class UpdateWeaponTotal {
        constructor(gridNum, value, weaponName) {
            this.gridNum = gridNum;
            this.value = value;
            this.weaponName = weaponName;
        }
        ;
    }
    UpdateWeaponTotal.type = 'Update Weapon Total';
    WeaponGridActions.UpdateWeaponTotal = UpdateWeaponTotal;
    class UpdateWeaponPercent {
        constructor(gridNum, value, weaponName) {
            this.gridNum = gridNum;
            this.value = value;
            this.weaponName = weaponName;
        }
        ;
    }
    UpdateWeaponPercent.type = 'Update Weapon Percent';
    WeaponGridActions.UpdateWeaponPercent = UpdateWeaponPercent;
    class UpdateGridBase {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdateGridBase.type = 'Update Grid Base';
    WeaponGridActions.UpdateGridBase = UpdateGridBase;
    class UpdateGridAoe {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdateGridAoe.type = 'Update Grid Aoe';
    WeaponGridActions.UpdateGridAoe = UpdateGridAoe;
    class UpdateGridSup {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdateGridSup.type = 'Update Grid Sup';
    WeaponGridActions.UpdateGridSup = UpdateGridSup;
    class UpdateGridTotal {
        constructor(gridNum, value) {
            this.gridNum = gridNum;
            this.value = value;
        }
        ;
    }
    UpdateGridTotal.type = 'Update Grid Total';
    WeaponGridActions.UpdateGridTotal = UpdateGridTotal;
    class Update {
        constructor() { }
        ;
    }
    Update.type = 'Fire Update Event';
    WeaponGridActions.Update = Update;
})(WeaponGridActions || (WeaponGridActions = {}));


/***/ }),

/***/ "UnxO":
/*!**********************************************!*\
  !*** ./src/app/state/weapon-list.actions.ts ***!
  \**********************************************/
/*! exports provided: WeaponListActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponListActions", function() { return WeaponListActions; });
var WeaponListActions;
(function (WeaponListActions) {
    class LoadWeaponList {
        constructor() { }
    }
    LoadWeaponList.type = 'Load Weapon List';
    WeaponListActions.LoadWeaponList = LoadWeaponList;
    class SelectWeapons {
        constructor(grid) {
            this.grid = grid;
        }
    }
    SelectWeapons.type = 'Select Weapons';
    WeaponListActions.SelectWeapons = SelectWeapons;
    class ClearWeaponSelect {
        constructor() { }
    }
    ClearWeaponSelect.type = 'Clear Selected Weapons';
    WeaponListActions.ClearWeaponSelect = ClearWeaponSelect;
})(WeaponListActions || (WeaponListActions = {}));


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_weapon_weapon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/weapon/weapon.component */ "q3Z6");
/* harmony import */ var _shared_weapon_select_weapon_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/weapon-select/weapon-select.component */ "udT+");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _state_weapon_list_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state/weapon-list.state */ "bm+R");
/* harmony import */ var _state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state/weapon-grid.state */ "Rt2e");
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngxs/devtools-plugin */ "xuHu");
/* harmony import */ var _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngxs/form-plugin */ "fLJh");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _sinocalc_home_sinocalc_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sinocalc-home/sinocalc-home.component */ "Bb/V");
/* harmony import */ var _shared_add_grid_modal_add_grid_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/add-grid-modal/add-grid-modal.component */ "fiNH");
/* harmony import */ var _shared_modify_grid_modal_modify_grid_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/modify-grid-modal/modify-grid-modal.component */ "5HpS");
/* harmony import */ var _shared_grid_weapon_display_grid_weapon_display_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/grid-weapon-display/grid-weapon-display.component */ "ZsAA");
/* harmony import */ var _shared_grid_display_grid_display_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/grid-display/grid-display.component */ "jiDt");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _vanguard_vanguard_home_vanguard_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./vanguard/vanguard-home/vanguard-home.component */ "8KZE");
/* harmony import */ var _vanguard_vanguard_calculate_vanguard_calculate_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./vanguard/vanguard-calculate/vanguard-calculate.component */ "Eq/W");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");





























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forRoot([
                _state_weapon_list_state__WEBPACK_IMPORTED_MODULE_8__["WeaponListState"],
                _state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_9__["WeaponGridState"]
            ]),
            _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsReduxDevtoolsPluginModule"].forRoot(),
            _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsFormPluginModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_weapon_weapon_component__WEBPACK_IMPORTED_MODULE_4__["WeaponComponent"],
        _shared_weapon_select_weapon_select_component__WEBPACK_IMPORTED_MODULE_5__["WeaponSelectComponent"],
        _sinocalc_home_sinocalc_home_component__WEBPACK_IMPORTED_MODULE_15__["SinocalcHomeComponent"],
        _shared_add_grid_modal_add_grid_modal_component__WEBPACK_IMPORTED_MODULE_16__["AddGridModalComponent"],
        _shared_modify_grid_modal_modify_grid_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModifyGridModalComponent"],
        _shared_grid_weapon_display_grid_weapon_display_component__WEBPACK_IMPORTED_MODULE_18__["GridWeaponDisplayComponent"],
        _shared_grid_display_grid_display_component__WEBPACK_IMPORTED_MODULE_19__["GridDisplayComponent"],
        _vanguard_vanguard_home_vanguard_home_component__WEBPACK_IMPORTED_MODULE_21__["VanguardHomeComponent"],
        _vanguard_vanguard_calculate_vanguard_calculate_component__WEBPACK_IMPORTED_MODULE_22__["VanguardCalculateComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["ɵj"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsReduxDevtoolsPluginModule"], _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsFormPluginModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_weapon_weapon_component__WEBPACK_IMPORTED_MODULE_4__["WeaponComponent"],
                    _shared_weapon_select_weapon_select_component__WEBPACK_IMPORTED_MODULE_5__["WeaponSelectComponent"],
                    _sinocalc_home_sinocalc_home_component__WEBPACK_IMPORTED_MODULE_15__["SinocalcHomeComponent"],
                    _shared_add_grid_modal_add_grid_modal_component__WEBPACK_IMPORTED_MODULE_16__["AddGridModalComponent"],
                    _shared_modify_grid_modal_modify_grid_modal_component__WEBPACK_IMPORTED_MODULE_17__["ModifyGridModalComponent"],
                    _shared_grid_weapon_display_grid_weapon_display_component__WEBPACK_IMPORTED_MODULE_18__["GridWeaponDisplayComponent"],
                    _shared_grid_display_grid_display_component__WEBPACK_IMPORTED_MODULE_19__["GridDisplayComponent"],
                    _vanguard_vanguard_home_vanguard_home_component__WEBPACK_IMPORTED_MODULE_21__["VanguardHomeComponent"],
                    _vanguard_vanguard_calculate_vanguard_calculate_component__WEBPACK_IMPORTED_MODULE_22__["VanguardCalculateComponent"]
                ],
                entryComponents: [
                    _shared_weapon_select_weapon_select_component__WEBPACK_IMPORTED_MODULE_5__["WeaponSelectComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _ngxs_store__WEBPACK_IMPORTED_MODULE_7__["NgxsModule"].forRoot([
                        _state_weapon_list_state__WEBPACK_IMPORTED_MODULE_8__["WeaponListState"],
                        _state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_9__["WeaponGridState"]
                    ]),
                    _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_10__["NgxsReduxDevtoolsPluginModule"].forRoot(),
                    _ngxs_form_plugin__WEBPACK_IMPORTED_MODULE_11__["NgxsFormPluginModule"].forRoot(),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_24__["MatSliderModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZsAA":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/grid-weapon-display/grid-weapon-display.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GridWeaponDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridWeaponDisplayComponent", function() { return GridWeaponDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../state/weapon-grid.actions */ "UTpe");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _weapon_weapon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../weapon/weapon.component */ "q3Z6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function GridWeaponDisplayComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", num_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", num_r12, " ");
} }
function GridWeaponDisplayComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dmg: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridWeaponDisplayComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Heal: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridWeaponDisplayComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Buff: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridWeaponDisplayComponent_label_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Sup ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridWeaponDisplayComponent_select_28_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const num_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", num_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", num_r15, " ");
} }
function GridWeaponDisplayComponent_select_28_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 5, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GridWeaponDisplayComponent_select_28_Template_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.updateSupportSkillLevel(_r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridWeaponDisplayComponent_select_28_option_2_Template, 2, 2, "option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.skillLevel);
} }
function GridWeaponDisplayComponent_ng_container_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DC: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridWeaponDisplayComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RS: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridWeaponDisplayComponent_ng_container_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SB: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridWeaponDisplayComponent_label_43_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " DC ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridWeaponDisplayComponent_label_43_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " RS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridWeaponDisplayComponent_label_43_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridWeaponDisplayComponent_label_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GridWeaponDisplayComponent_label_43_ng_container_1_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridWeaponDisplayComponent_label_43_ng_container_2_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GridWeaponDisplayComponent_label_43_ng_container_3_Template, 2, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.className == "vanguard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.className == "cleric");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.className == "minsorc");
} }
function GridWeaponDisplayComponent_input_45_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GridWeaponDisplayComponent_input_45_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.isChecked = $event; })("change", function GridWeaponDisplayComponent_input_45_Template_input_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.updateSupProc(ctx_r23.isChecked ? 1 : 0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r11.isChecked)("disabled", ctx_r11.supProc == 0);
} }
class GridWeaponDisplayComponent {
    constructor(store) {
        this.store = store;
        this.clickWeaponEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeWeaponSkillLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeSupportSkillLevel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeSupProc = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.skillLevel = [...Array(20).keys()].map((i) => i + 1);
        this.isChecked = false;
    }
    ngOnInit() {
    }
    clickWeapon() {
        this.clickWeaponEmit.emit();
    }
    updateWeaponSkillLevel(value) {
        this.changeWeaponSkillLevel.emit({
            value: value,
            weaponName: this.weapon.weaponInfo.weaponName
        });
    }
    updateSupportSkillLevel(value) {
        this.changeSupportSkillLevel.emit({
            value: value,
            weaponName: this.weapon.weaponInfo.weaponName
        });
    }
    updateSupProc(value) {
        this.changeSupProc.emit({
            value: value,
            weaponName: this.weapon.weaponInfo.weaponName
        });
    }
    update() {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_1__["WeaponGridActions"].Update());
    }
}
GridWeaponDisplayComponent.ɵfac = function GridWeaponDisplayComponent_Factory(t) { return new (t || GridWeaponDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
GridWeaponDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridWeaponDisplayComponent, selectors: [["app-grid-weapon-display"]], inputs: { weapon: "weapon", supProc: "supProc", className: "className" }, outputs: { clickWeaponEmit: "clickWeaponEmit", changeWeaponSkillLevel: "changeWeaponSkillLevel", changeSupportSkillLevel: "changeSupportSkillLevel", changeSupProc: "changeSupProc" }, decls: 51, vars: 19, consts: [["id", "weaponInfoContainer"], ["id", "weaponContainer"], [3, "weapon", "rarity", "isOnGrid", "clickWeaponEmit"], ["id", "weaponInfoTable"], [1, "weaponInput"], [3, "change"], ["weaponSkillSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "resultStat"], [4, "ngIf"], [1, "resultText"], [3, "change", 4, "ngIf"], ["class", "supCheckbox", "type", "checkbox", 3, "ngModel", "disabled", "ngModelChange", "change", 4, "ngIf"], [3, "value"], ["supportSkillSelect", ""], ["type", "checkbox", 1, "supCheckbox", 3, "ngModel", "disabled", "ngModelChange", "change"]], template: function GridWeaponDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-weapon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickWeaponEmit", function GridWeaponDisplayComponent_Template_app_weapon_clickWeaponEmit_2_listener() { return ctx.clickWeapon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Colo ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "select", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GridWeaponDisplayComponent_Template_select_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.updateWeaponSkillLevel(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GridWeaponDisplayComponent_option_11_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GridWeaponDisplayComponent_ng_container_14_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, GridWeaponDisplayComponent_ng_container_15_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, GridWeaponDisplayComponent_ng_container_16_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, GridWeaponDisplayComponent_label_26_Template, 2, 0, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GridWeaponDisplayComponent_select_28_Template, 3, 1, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, GridWeaponDisplayComponent_ng_container_31_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GridWeaponDisplayComponent_ng_container_32_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GridWeaponDisplayComponent_ng_container_33_Template, 2, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Percent: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, GridWeaponDisplayComponent_label_43_Template, 4, 3, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, GridWeaponDisplayComponent_input_45_Template, 1, 2, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " AoE: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weapon", ctx.weapon.weaponInfo)("rarity", ctx.weapon.selectedRarity)("isOnGrid", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillLevel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className == "vanguard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className == "cleric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className == "minsorc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weapon.results.base.toLocaleString(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weapon.results.total.toLocaleString(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weapon.weaponInfo.supportSkill > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weapon.weaponInfo.supportSkill > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className == "vanguard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className == "cleric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className == "minsorc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weapon.results.sup.toLocaleString(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weapon.results.percent, "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weapon.weaponInfo.supportSkill > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.weapon.weaponInfo.supportSkill > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.weapon.results.aoe.toLocaleString(), " ");
    } }, directives: [_weapon_weapon_component__WEBPACK_IMPORTED_MODULE_3__["WeaponComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], styles: ["#weaponInfoContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n}\r\n\r\n#weaponContainer[_ngcontent-%COMP%] {\r\n  display: block;\r\n  vertical-align: bottom;\r\n}\r\n\r\n#weaponInfoTable[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-weight: bold;\r\n  border-spacing: 0px;\r\n}\r\n\r\n.weaponInput[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.resultStat[_ngcontent-%COMP%] {\r\n  width: 90px;\r\n  margin-left: 1px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.resultText[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin-left: 2px;\r\n  margin-right: 5px;\r\n  font-weight: normal;\r\n}\r\n\r\n.supCheckbox[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtd2VhcG9uLWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJncmlkLXdlYXBvbi1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VhcG9uSW5mb0NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuI3dlYXBvbkNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxuI3dlYXBvbkluZm9UYWJsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci1zcGFjaW5nOiAwcHg7XHJcbn1cclxuXHJcbi53ZWFwb25JbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVzdWx0U3RhdCB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDFweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnJlc3VsdFRleHQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zdXBDaGVja2JveCB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridWeaponDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-weapon-display',
                templateUrl: './grid-weapon-display.component.html',
                styleUrls: ['./grid-weapon-display.component.css']
            }]
    }], function () { return [{ type: _ngxs_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }]; }, { weapon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], supProc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], className: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickWeaponEmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeWeaponSkillLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeSupportSkillLevel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], changeSupProc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "bm+R":
/*!********************************************!*\
  !*** ./src/app/state/weapon-list.state.ts ***!
  \********************************************/
/*! exports provided: WeaponListStateModel, WeaponListState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponListStateModel", function() { return WeaponListStateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponListState", function() { return WeaponListState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _weapon_list_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weapon-list.actions */ "UnxO");
/* harmony import */ var _services_weapon_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/weapon-list.service */ "5nBM");







class WeaponListStateModel {
}
let WeaponListState = class WeaponListState {
    constructor(service) {
        this.service = service;
    }
    static getWeaponList({ weapons }) {
        return weapons;
    }
    loadWeaponList({ dispatch, getState, patchState }) {
        return this.service.getWeapons().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => {
            patchState({
                weapons: result
            });
        }));
    }
    clearWeaponSelect({ dispatch, getState, patchState }) {
        const state = getState();
        for (const weapon of state.weapons) {
            weapon.selected = false;
        }
        patchState({
            weapons: [...state.weapons]
        });
    }
    selectWeapons({ dispatch, getState, patchState }, { grid }) {
        const state = getState();
        for (const weapon of state.weapons) {
            for (const gridWeapon of grid.weapons) {
                if (weapon.weaponName == gridWeapon.weaponInfo.weaponName) {
                    weapon.selected = true;
                }
            }
        }
        patchState({
            weapons: [...state.weapons]
        });
    }
};
WeaponListState.ɵfac = function WeaponListState_Factory(t) { return new (t || WeaponListState)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_services_weapon_list_service__WEBPACK_IMPORTED_MODULE_5__["WeaponListService"])); };
WeaponListState.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: WeaponListState, factory: WeaponListState.ɵfac });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_weapon_list_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponListActions"].LoadWeaponList)
], WeaponListState.prototype, "loadWeaponList", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_weapon_list_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponListActions"].ClearWeaponSelect)
], WeaponListState.prototype, "clearWeaponSelect", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Action"])(_weapon_list_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponListActions"].SelectWeapons)
], WeaponListState.prototype, "selectWeapons", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["Selector"])()
], WeaponListState, "getWeaponList", null);
WeaponListState = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_1__["State"])({
        name: 'weaponList',
        defaults: {
            weapons: []
        }
    })
], WeaponListState);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](WeaponListState, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _services_weapon_list_service__WEBPACK_IMPORTED_MODULE_5__["WeaponListService"] }]; }, { loadWeaponList: [], clearWeaponSelect: [], selectWeapons: [] }); })();


/***/ }),

/***/ "fiNH":
/*!*******************************************************************!*\
  !*** ./src/app/shared/add-grid-modal/add-grid-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddGridModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGridModalComponent", function() { return AddGridModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _weapon_select_weapon_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weapon-select/weapon-select.component */ "udT+");
/* harmony import */ var _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../state/weapon-grid.actions */ "UTpe");
/* harmony import */ var _state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../state/weapon-grid.state */ "Rt2e");
/* harmony import */ var _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../state/weapon-list.actions */ "UnxO");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vanguard_vanguard_calculate_vanguard_calculate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../vanguard/vanguard-calculate/vanguard-calculate.component */ "Eq/W");












function AddGridModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-vanguard-calculate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class AddGridModalComponent {
    constructor(dialog, store) {
        this.dialog = dialog;
        this.store = store;
        this.showCalculate = false;
    }
    ;
    ngOnInit() {
        this.numGrid$.subscribe(numGrids => {
            if (numGrids < 1) {
                this.showCalculate = false;
            }
            this.gridNum = numGrids - 1;
        });
    }
    addGrid() {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_3__["WeaponGridActions"].AddGrid());
        const dialogRef = this.dialog.open(_weapon_select_weapon_select_component__WEBPACK_IMPORTED_MODULE_2__["WeaponSelectComponent"], {
            data: {
                classWeapons: this.classWeapons,
                gridNum: this.gridNum
            },
            panelClass: 'weaponSelectContainer',
        });
        dialogRef.afterClosed().subscribe(result => {
            this.showCalculate = true;
            if (!result) {
                this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_3__["WeaponGridActions"].DeleteGrid(this.gridNum));
                this.store.dispatch(new _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_5__["WeaponListActions"].ClearWeaponSelect());
            }
        });
    }
}
AddGridModalComponent.ɵfac = function AddGridModalComponent_Factory(t) { return new (t || AddGridModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
AddGridModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AddGridModalComponent, selectors: [["app-add-grid-modal"]], inputs: { classWeapons: "classWeapons" }, decls: 4, vars: 1, consts: [["id", "addGridContainer"], ["id", "button", 3, "click"], ["id", "calculateContainer", 4, "ngIf"], ["id", "calculateContainer"]], template: function AddGridModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AddGridModalComponent_Template_div_click_1_listener() { return ctx.addGrid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AddGridModalComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gridNum == 0 && ctx.showCalculate || ctx.gridNum > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _vanguard_vanguard_calculate_vanguard_calculate_component__WEBPACK_IMPORTED_MODULE_9__["VanguardCalculateComponent"]], styles: ["#addGridContainer[_ngcontent-%COMP%] {\r\n  background-color: rgb(240, 240, 240);\r\n  width: 718px;\r\n  height: 453px;\r\n  padding-top: 384px;\r\n  margin: 25px 0px 0px 50px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#button[_ngcontent-%COMP%] {\r\n  width: 70px;\r\n  height: 70px;\r\n  background-color: #bebebe;\r\n  border-radius: 50%;\r\n  box-shadow: 0 6px 10px 0 #666;\r\n  transition: all 0.1s ease-in-out;\r\n  font-size: 50px;\r\n  color: white;\r\n  text-align: center;\r\n  line-height: 70px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n#button[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 6px 14px 0 #666;\r\n  transform: scale(1.05);\r\n  cursor: pointer;\r\n}\r\n\r\n#calculateContainer[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 100px auto 0px auto;\r\n  width: 360px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ncmlkLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2QiLCJmaWxlIjoiYWRkLWdyaWQtbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhZGRHcmlkQ29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgd2lkdGg6IDcxOHB4O1xyXG4gIGhlaWdodDogNDUzcHg7XHJcbiAgcGFkZGluZy10b3A6IDM4NHB4O1xyXG4gIG1hcmdpbjogMjVweCAwcHggMHB4IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2J1dHRvbiB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggMCAjNjY2O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuI2J1dHRvbjpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA2cHggMTRweCAwICM2NjY7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbiNjYWxjdWxhdGVDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMTAwcHggYXV0byAwcHggYXV0bztcclxuICB3aWR0aDogMzYwcHg7XHJcbn1cclxuIl19 */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_4__["WeaponGridState"].getNumGrids)
], AddGridModalComponent.prototype, "numGrid$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AddGridModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-add-grid-modal',
                templateUrl: './add-grid-modal.component.html',
                styleUrls: ['./add-grid-modal.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, { numGrid$: [], classWeapons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "jiDt":
/*!***************************************************************!*\
  !*** ./src/app/shared/grid-display/grid-display.component.ts ***!
  \***************************************************************/
/*! exports provided: GridDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridDisplayComponent", function() { return GridDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _weapon_select_weapon_select_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weapon-select/weapon-select.component */ "udT+");
/* harmony import */ var _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../state/weapon-grid.actions */ "UTpe");
/* harmony import */ var _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../state/weapon-list.actions */ "UnxO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _grid_weapon_display_grid_weapon_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../grid-weapon-display/grid-weapon-display.component */ "ZsAA");










function GridDisplayComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " P.Atk ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function GridDisplayComponent_div_2_Template_input_focusout_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.updatePAtk(_r13.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridDisplayComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " M.Atk ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function GridDisplayComponent_div_3_Template_input_focusout_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.updateMAtk(_r16.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridDisplayComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " P.Def ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function GridDisplayComponent_div_4_Template_input_focusout_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.updatePDef(_r19.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridDisplayComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " M.Def ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 25, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focusout", function GridDisplayComponent_div_5_Template_input_focusout_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.updateMDef(_r22.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GridDisplayComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-grid-weapon-display", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickWeaponEmit", function GridDisplayComponent_div_7_Template_app_grid_weapon_display_clickWeaponEmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.changeGrid(); })("changeWeaponSkillLevel", function GridDisplayComponent_div_7_Template_app_grid_weapon_display_changeWeaponSkillLevel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.updateWeaponSkillLevel($event); })("changeSupportSkillLevel", function GridDisplayComponent_div_7_Template_app_grid_weapon_display_changeSupportSkillLevel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.updateSupportSkillLevel($event); })("changeSupProc", function GridDisplayComponent_div_7_Template_app_grid_weapon_display_changeSupProc_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.updateSupProc($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r25 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("weapon", weapon_r25)("supProc", ctx_r4.grid.supProc)("className", ctx_r4.className);
} }
function GridDisplayComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", type_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r31, " ");
} }
function GridDisplayComponent_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", job_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r32, " ");
} }
function GridDisplayComponent_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Damage: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridDisplayComponent_ng_container_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Healing: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function GridDisplayComponent_ng_container_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Buffs: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class GridDisplayComponent {
    constructor(dialog, store) {
        this.dialog = dialog;
        this.store = store;
    }
    ngOnInit() {
        this.shinma = this.classType.shinma;
        this.className = this.classType.name;
        this.jobs = this.classType.jobs;
    }
    changeGrid() {
        this.store.dispatch(new _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_3__["WeaponListActions"].SelectWeapons(this.grid));
        const dialogRef = this.dialog.open(_weapon_select_weapon_select_component__WEBPACK_IMPORTED_MODULE_1__["WeaponSelectComponent"], {
            data: {
                classWeapons: this.classType.weapons,
                gridNum: this.gridNum
            },
            panelClass: 'weaponSelectContainer',
        });
        dialogRef.afterClosed().subscribe(result => {
            if (!result) {
                this.store.dispatch(new _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_3__["WeaponListActions"].ClearWeaponSelect());
            }
        });
    }
    updatePAtk(value) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdatePAtk(this.gridNum, value));
    }
    updateMAtk(value) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdateMAtk(this.gridNum, value));
    }
    updatePDef(value) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdatePDef(this.gridNum, value));
    }
    updateMDef(value) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdateMDef(this.gridNum, value));
    }
    updateWeaponSkillLevel(payload) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdateWeaponSkillLevel(this.gridNum, payload.value, payload.weaponName));
    }
    updateSupportSkillLevel(payload) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdateSupportSkillLevel(this.gridNum, payload.value, payload.weaponName));
    }
    updateSupProc(payload) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdateWeaponSupProc(this.gridNum, payload.value, payload.weaponName));
    }
    updateShinma(value) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdateGridShinma(this.gridNum, value));
    }
    updateJob(value) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdateJob(this.gridNum, value));
    }
    updateGridSupProc(value) {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].UpdateGridSupProc(this.gridNum, value));
    }
    deleteGrid() {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].DeleteGrid(this.gridNum));
    }
    update() {
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponGridActions"].Update());
    }
    exportToJsonFile() {
        const jsonData = this.createExportObject();
        const dataStr = JSON.stringify(jsonData);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
        const exportFileDefaultName = 'weapongrid.json';
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
    createExportObject() {
        const grid = this.grid;
        const content = {
            weapons: []
        };
        for (const weapon of grid.weapons) {
            let payload = {
                weaponInfo: {
                    weaponName: weapon.weaponInfo.weaponName
                },
                weaponSkillLevel: weapon.weaponSkillLevel,
                supportSkillLevel: weapon.supportSkillLevel,
                selectedRarity: weapon.selectedRarity
            };
            content.weapons.push(payload);
        }
        return content;
    }
}
GridDisplayComponent.ɵfac = function GridDisplayComponent_Factory(t) { return new (t || GridDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
GridDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GridDisplayComponent, selectors: [["app-grid-display"]], inputs: { grid: "grid", gridNum: "gridNum", classType: "classType" }, decls: 39, vars: 11, consts: [["id", "gridDisplayContainer"], ["id", "gridStatsInputContainer"], ["id", "patkInputContainer", 4, "ngIf"], ["id", "matkInputContainer", 4, "ngIf"], ["id", "pdefInputContainer", 4, "ngIf"], ["id", "mdefInputContainer", 4, "ngIf"], ["id", "gridWeaponsContainer"], ["class", "gridWeaponContainer", 4, "ngFor", "ngForOf"], ["id", "gridOptionsContainer"], ["id", "gridOptionButton"], [3, "click"], ["id", "gridOptionSelect"], [1, "selectLabel"], [3, "change"], ["shinmaSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], ["supProcSelect", ""], ["value", "0"], ["value", "1"], ["jobSelect", ""], ["id", "gridFooterContainer"], ["id", "gridResults"], [4, "ngIf"], ["id", "patkInputContainer"], [1, "statsInputLabel"], ["type", "number", "min", "0", 1, "statsInput", 3, "focusout"], ["patkInput", ""], ["id", "matkInputContainer"], ["matkInput", ""], ["id", "pdefInputContainer"], ["pdefInput", ""], ["id", "mdefInputContainer"], ["mdefInput", ""], [1, "gridWeaponContainer"], [3, "weapon", "supProc", "className", "clickWeaponEmit", "changeWeaponSkillLevel", "changeSupportSkillLevel", "changeSupProc"], [3, "value"], [1, "resultsLabel"]], template: function GridDisplayComponent_Template(rf, ctx) { if (rf & 1) {
        const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GridDisplayComponent_div_2_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GridDisplayComponent_div_3_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GridDisplayComponent_div_4_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, GridDisplayComponent_div_5_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, GridDisplayComponent_div_7_Template, 2, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridDisplayComponent_Template_button_click_10_listener() { return ctx.deleteGrid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GridDisplayComponent_Template_button_click_12_listener() { return ctx.exportToJsonFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Export");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Shinma ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GridDisplayComponent_Template_select_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); return ctx.updateShinma(_r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, GridDisplayComponent_option_19_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Support Skill ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 13, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GridDisplayComponent_Template_select_change_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23); return ctx.updateGridSupProc(_r7.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Average");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Job ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 13, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function GridDisplayComponent_Template_select_change_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31); return ctx.updateJob(_r8.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, GridDisplayComponent_option_32_Template, 2, 2, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, GridDisplayComponent_ng_container_35_Template, 3, 0, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, GridDisplayComponent_ng_container_36_Template, 3, 0, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, GridDisplayComponent_ng_container_37_Template, 3, 0, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className != "cleric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className != "cleric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className != "vanguard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className != "vanguard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.grid.weapons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.shinma);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobs);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className == "vanguard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className == "cleric");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.className == "minsorc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.grid.results.total.toLocaleString(), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _grid_weapon_display_grid_weapon_display_component__WEBPACK_IMPORTED_MODULE_8__["GridWeaponDisplayComponent"]], styles: ["#gridDisplayContainer[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  background-color: rgb(240, 240, 240);\r\n  border-radius: 10px;\r\n  padding: 30px;\r\n  margin: 25px 0px 0px 50px;\r\n}\r\n\r\n#gridStatsInputContainer[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.statsInputLabel[_ngcontent-%COMP%] {\r\n  margin-right: 5px;\r\n  margin-left: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.statsInput[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n}\r\n\r\n.gridWeaponContainer[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin: 0px 2px;\r\n}\r\n\r\n#gridWeaponsContainer[_ngcontent-%COMP%] {\r\n  width: 658px;\r\n  height: 670px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-content: flex-start;\r\n}\r\n\r\n#gridOptionsContainer[_ngcontent-%COMP%] {\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n.selectLabel[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  margin-right: 5px;\r\n  font-weight: bold;\r\n}\r\n\r\n#gridResults[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  font-size: 150%;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.resultsLabel[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyaWQtZGlzcGxheS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoiZ3JpZC1kaXNwbGF5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZ3JpZERpc3BsYXlDb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBwYWRkaW5nOiAzMHB4O1xyXG4gIG1hcmdpbjogMjVweCAwcHggMHB4IDUwcHg7XHJcbn1cclxuXHJcbiNncmlkU3RhdHNJbnB1dENvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uc3RhdHNJbnB1dExhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnN0YXRzSW5wdXQge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLmdyaWRXZWFwb25Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMHB4IDJweDtcclxufVxyXG5cclxuI2dyaWRXZWFwb25zQ29udGFpbmVyIHtcclxuICB3aWR0aDogNjU4cHg7XHJcbiAgaGVpZ2h0OiA2NzBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4jZ3JpZE9wdGlvbnNDb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNlbGVjdExhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI2dyaWRSZXN1bHRzIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5yZXN1bHRzTGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GridDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid-display',
                templateUrl: './grid-display.component.html',
                styleUrls: ['./grid-display.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, { grid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gridNum: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "q3Z6":
/*!***************************************************!*\
  !*** ./src/app/shared/weapon/weapon.component.ts ***!
  \***************************************************/
/*! exports provided: WeaponComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponComponent", function() { return WeaponComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




const _c0 = function (a0) { return { "selected": a0 }; };
function WeaponComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeaponComponent_img_0_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.clickWeapon(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.weapon.icon[ctx_r0.iconIndex], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !ctx_r0.isOnGrid && ctx_r0.weapon.selected));
} }
class WeaponComponent {
    constructor() {
        this.clickWeaponEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.iconIndex = 0;
    }
    ngOnInit() {
        if (this.weapon.rarity === 'A') {
            if (this.rarity === 'A' || this.rarity === '') {
                this.iconIndex = 0;
            }
            else if (this.rarity === 'S') {
                this.iconIndex = 1;
            }
            else if (this.rarity === 'SR') {
                if (this.weapon.icon.length > 2) {
                    this.iconIndex = 2;
                }
                else {
                    this.iconIndex = -1;
                }
            }
            else if (this.rarity === 'L') {
                this.iconIndex = -1;
            }
        }
        else if (this.weapon.rarity === 'S') {
            if (this.rarity === 'A') {
                this.iconIndex = -1;
            }
            else if (this.rarity === 'S' || this.rarity === '') {
                this.iconIndex = 0;
            }
            else if (this.rarity === 'SR') {
                this.iconIndex = 1;
            }
            else if (this.rarity === 'L') {
                this.iconIndex = -1;
            }
        }
        else if (this.weapon.rarity === 'SR') {
            if (this.rarity === 'A') {
                this.iconIndex = -1;
            }
            else if (this.rarity === 'S') {
                this.iconIndex = -1;
            }
            else if (this.rarity === 'SR' || this.rarity === '') {
                this.iconIndex = 0;
            }
            else if (this.rarity === 'L') {
                this.iconIndex = 1;
            }
        }
    }
    clickWeapon() {
        this.clickWeaponEmit.emit(this.weapon);
    }
    ngOnChanges() {
        this.ngOnInit();
    }
}
WeaponComponent.ɵfac = function WeaponComponent_Factory(t) { return new (t || WeaponComponent)(); };
WeaponComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeaponComponent, selectors: [["app-weapon"]], inputs: { weapon: "weapon", rarity: "rarity", isOnGrid: "isOnGrid" }, outputs: { clickWeaponEmit: "clickWeaponEmit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[3, "ngClass", "src", "click", 4, "ngIf"], [3, "ngClass", "src", "click"]], template: function WeaponComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeaponComponent_img_0_Template, 1, 4, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconIndex > -1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"]], styles: ["img[_ngcontent-%COMP%] {\r\n  border: transparent solid 2px;\r\n  margin: -1px;\r\n  display: block;\r\n  width: 65px;\r\n  height: 65px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.7;\r\n  cursor: pointer;\r\n}\r\n\r\n.selected[_ngcontent-%COMP%] {\r\n  border: red solid 2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXBvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6IndlYXBvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50IHNvbGlkIDJweDtcclxuICBtYXJnaW46IC0xcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgaGVpZ2h0OiA2NXB4O1xyXG59XHJcblxyXG5pbWc6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZCB7XHJcbiAgYm9yZGVyOiByZWQgc29saWQgMnB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeaponComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weapon',
                templateUrl: './weapon.component.html',
                styleUrls: ['./weapon.component.css']
            }]
    }], function () { return []; }, { weapon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rarity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isOnGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clickWeaponEmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "se81":
/*!****************************************!*\
  !*** ./src/app/models/weapon.model.ts ***!
  \****************************************/
/*! exports provided: Weapon, WeaponSkill, WeaponResults, WeaponDetailed, WeaponSkillQuery, WeaponGrid, GridStats, GridResults, Classes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponSkill", function() { return WeaponSkill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponResults", function() { return WeaponResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponDetailed", function() { return WeaponDetailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponSkillQuery", function() { return WeaponSkillQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponGrid", function() { return WeaponGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridStats", function() { return GridStats; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridResults", function() { return GridResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Classes", function() { return Classes; });
class Weapon {
}
class WeaponSkill {
}
class WeaponResults {
    constructor() {
        this.base = 0;
        this.sup = 0;
        this.aoe = 0;
        this.total = 0;
        this.percent = 0;
        this.supContr = 0;
        this.supPercent = 0;
    }
}
class WeaponDetailed {
    constructor() {
        this.supProc = 0;
        this.weaponSkillLevel = 1;
        this.supportSkillLevel = 1;
        this.results = new WeaponResults();
    }
}
class WeaponSkillQuery {
}
class WeaponGrid {
    constructor() {
        this.weapons = [];
        this.supProc = 0;
        this.shinma = 'None';
        this.ready = false;
        this.results = new GridResults();
        this.stats = new GridStats();
    }
}
class GridStats {
}
class GridResults {
    constructor() {
        this.base = 0;
        this.aoe = 0;
        this.sup = 0;
        this.total = 0;
    }
}
class Classes {
    constructor() {
        this.vanguard = {
            name: 'vanguard',
            jobs: ['Breaker', 'Crusher', 'Gunner', 'Paladin', 'HNM Breaker', 'HNM Crusher', 'HNM Gunner', 'HNM Paladin'],
            weapons: ['Sword', 'Hammer', 'Bow', 'Spear'],
            shinma: ['None', 'Sword/Spear', 'Hammer/Bow']
        };
        this.cleric = {
            name: 'cleric',
            jobs: ['Cleric', 'HNM Cleric', 'Other'],
            weapons: ['Staff'],
            shinma: ['None', 'Staff']
        };
        this.minsorc = {
            name: 'minsorc',
            jobs: ['Minstrel', 'Sorcerer', 'HNM Minstrel', 'HNM Sorcerer', 'Other'],
            weapons: ['Tome', 'Instr.'],
            shinma: ['None', 'Tome', 'Instr.']
        };
    }
}


/***/ }),

/***/ "uHIS":
/*!***************************************************!*\
  !*** ./src/app/services/weapon-skills.service.ts ***!
  \***************************************************/
/*! exports provided: WeaponSkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponSkillsService", function() { return WeaponSkillsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class WeaponSkillsService {
    constructor(http) {
        this.http = http;
        this.weaponSkillsUrl = 'https://sinocalcapi.herokuapp.com/skill';
    }
    getWeaponSkills(weaponSkillsQuery) {
        return this.http.post(this.weaponSkillsUrl, weaponSkillsQuery);
    }
}
WeaponSkillsService.ɵfac = function WeaponSkillsService_Factory(t) { return new (t || WeaponSkillsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
WeaponSkillsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WeaponSkillsService, factory: WeaponSkillsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeaponSkillsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "udT+":
/*!*****************************************************************!*\
  !*** ./src/app/shared/weapon-select/weapon-select.component.ts ***!
  \*****************************************************************/
/*! exports provided: WeaponSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaponSelectComponent", function() { return WeaponSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../state/weapon-list.actions */ "UnxO");
/* harmony import */ var _state_weapon_list_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../state/weapon-list.state */ "bm+R");
/* harmony import */ var _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../state/weapon-grid.actions */ "UTpe");
/* harmony import */ var _state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../state/weapon-grid.state */ "Rt2e");
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngxs/store */ "AcyG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _weapon_weapon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../weapon/weapon.component */ "q3Z6");















function WeaponSelectComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", weapon_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", weapon_r4, " ");
} }
function WeaponSelectComponent_div_24_app_weapon_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-weapon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickWeaponEmit", function WeaponSelectComponent_div_24_app_weapon_1_Template_app_weapon_clickWeaponEmit_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r7.clickWeapon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("weapon", weapon_r5)("rarity", ctx_r6.rarity)("isOnGrid", false);
} }
function WeaponSelectComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, WeaponSelectComponent_div_24_app_weapon_1_Template, 1, 3, "app-weapon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (weapon_r5.weaponType === ctx_r1.weaponType || ctx_r1.weaponType === "") && ctx_r1.data.classWeapons.indexOf(weapon_r5.weaponType) !== -1);
} }
function WeaponSelectComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-weapon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clickWeaponEmit", function WeaponSelectComponent_div_33_Template_app_weapon_clickWeaponEmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.clickWeapon($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weapon_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("weapon", weapon_r10.weaponInfo)("rarity", weapon_r10.selectedRarity)("isOnGrid", true);
} }
class WeaponSelectComponent {
    constructor(data, store) {
        this.data = data;
        this.store = store;
        this.rarity = '';
        this.weaponType = '';
        this.numSelected = 0;
    }
    ngOnInit() {
        this.gridNum = this.data.gridNum;
        this.grids$.subscribe(grids => {
            this.grid = grids[this.gridNum];
            if (this.grid) {
                this.numSelected = this.grid.weapons.length;
            }
        });
        this.weapons$.subscribe(weapons => {
            this.weapons = weapons;
        });
    }
    clickWeapon(weapon) {
        if (!weapon.selected && this.numSelected < 20) {
            weapon.selected = true;
            this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].AddToGrid(weapon, this.rarity, this.gridNum));
        }
        else if (weapon.selected) {
            weapon.selected = false;
            this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].DeleteFromGrid(weapon.weaponName, this.gridNum));
        }
    }
    saveGrid() {
        const payload = [];
        for (const weapon of this.grid.weapons) {
            const weaponSkillQuery = {
                weaponName: weapon.weaponInfo.weaponName,
                weaponSkill: weapon.weaponInfo.weaponSkill,
                weaponType: weapon.weaponInfo.weaponType,
            };
            payload.push(weaponSkillQuery);
        }
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].GetWeaponSkills(payload, this.gridNum));
        this.store.dispatch(new _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponListActions"].ClearWeaponSelect());
        this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].GridStateChange(true, this.gridNum));
    }
    importJSON(event) {
        const files = event.target.files[0];
        if (files.length <= 0) {
            return false;
        }
        const fileReader = new FileReader();
        fileReader.readAsText(files, 'UTF-8');
        fileReader.onload = (event) => {
            const grid = JSON.parse(event.target.result.toString());
            const weapons = grid.weapons;
            this.store.dispatch(new _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponListActions"].ClearWeaponSelect());
            this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].DeleteGrid(this.gridNum));
            this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].AddGrid());
            this.store.dispatch(new _state_weapon_list_actions__WEBPACK_IMPORTED_MODULE_2__["WeaponListActions"].SelectWeapons(grid));
            this.numSelected = 0;
            for (const listWeapon of this.weapons) {
                if (listWeapon.selected) {
                    this.store.dispatch(new _state_weapon_grid_actions__WEBPACK_IMPORTED_MODULE_4__["WeaponGridActions"].AddToGrid(listWeapon, weapons[this.numSelected].selectedRarity, this.gridNum));
                    this.grid.weapons[this.numSelected - 1].weaponSkillLevel = weapons[this.numSelected - 1].weaponSkillLevel;
                    this.grid.weapons[this.numSelected - 1].supportSkillLevel = weapons[this.numSelected - 1].supportSkillLevel;
                }
            }
        };
        fileReader.onerror = (error) => {
            console.log(error);
        };
    }
}
WeaponSelectComponent.ɵfac = function WeaponSelectComponent_Factory(t) { return new (t || WeaponSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"])); };
WeaponSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: WeaponSelectComponent, selectors: [["app-weapon-select"]], decls: 37, vars: 8, consts: [["id", "weaponSelectHeading"], ["id", "weaponSelectContainer"], ["id", "selectInputContainer", "fxLayout", "row", "fxLayoutAlign", "end center"], ["id", "weaponTypeSelect", 3, "ngModel", "ngModelChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["id", "weaponRaritySelect", 3, "ngModel", "ngModelChange"], ["value", "A"], ["value", "S"], ["value", "SR"], ["value", "L"], ["id", "weaponSelectListContainer"], ["class", "weaponContainer", 4, "ngFor", "ngForOf"], ["id", "weaponGridContainer"], ["id", "importButtonContainer"], ["type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], [3, "click"], ["id", "weaponGridListContainer"], ["id", "buttonDiv"], ["id", "saveGridButton", 3, "mat-dialog-close", "click"], [3, "value"], [1, "weaponContainer"], [3, "weapon", "rarity", "isOnGrid", "clickWeaponEmit", 4, "ngIf"], [3, "weapon", "rarity", "isOnGrid", "clickWeaponEmit"]], template: function WeaponSelectComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Select Weapons\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Weapon Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WeaponSelectComponent_Template_select_ngModelChange_6_listener($event) { return ctx.weaponType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, WeaponSelectComponent_option_9_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Rarity ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function WeaponSelectComponent_Template_select_ngModelChange_12_listener($event) { return ctx.rarity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "S");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "SR");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, WeaponSelectComponent_div_24_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function WeaponSelectComponent_Template_input_change_28_listener($event) { return ctx.importJSON($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeaponSelectComponent_Template_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](29); return _r2.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Import ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, WeaponSelectComponent_div_33_Template, 2, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WeaponSelectComponent_Template_div_click_35_listener() { return ctx.saveGrid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Save Grid ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.weaponType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.classWeapons);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.rarity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 6, ctx.weapons$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.grid.weapons);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _weapon_weapon_component__WEBPACK_IMPORTED_MODULE_11__["WeaponComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["#weaponSelectHeading[_ngcontent-%COMP%] {\r\n  margin: 40px 25px 20px 25px;\r\n  font-size: 150%;\r\n  font-weight: bold;\r\n}\r\n\r\n#weaponSelectContainer[_ngcontent-%COMP%] {\r\n  padding: 0px 3px 20px 20px;\r\n  border-radius: 10px;\r\n  margin: 0px 25px;\r\n  display: inline-block;\r\n  background-color: rgb(240, 240, 240);\r\n}\r\n\r\n#importButtonContainer[_ngcontent-%COMP%] {\r\n  height: 39px;\r\n  width: 335px;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n#weaponGridContainer[_ngcontent-%COMP%] {\r\n  padding: 20px 20px 20px 20px;\r\n  border-radius: 10px;\r\n  margin: 0px 25px;\r\n  display: inline-block;\r\n  background-color: rgb(240, 240, 240);\r\n}\r\n\r\n#weaponSelectListContainer[_ngcontent-%COMP%] {\r\n  width: 352px;\r\n  height: 426px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n#weaponGridListContainer[_ngcontent-%COMP%] {\r\n  width: 335px;\r\n  height: 357px;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  margin-top: 69px;\r\n}\r\n\r\n#selectInputContainer[_ngcontent-%COMP%] {\r\n  width: 335px;\r\n  margin: 20px 0px;\r\n}\r\n\r\nselect[_ngcontent-%COMP%] {\r\n  margin-left: 5px;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  font-weight: bold;\r\n}\r\n\r\n.weaponContainer[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: bottom;\r\n}\r\n\r\n#buttonDiv[_ngcontent-%COMP%] {\r\n  margin: 20px 0px 0px 367px;\r\n}\r\n\r\n#saveGridButton[_ngcontent-%COMP%] {\r\n  box-shadow: inset 0px 1px 3px 0px #c0c0c0;\r\n  background: linear-gradient(to bottom, #bebebe 5%, #a9a9a9 100%);\r\n  background-color: #bebebe;\r\n  border-radius: 5px;\r\n  border: 1px solid #bebebe;\r\n  display: inline-block;\r\n  cursor: pointer;\r\n  color: #F8F8F8;\r\n  font-family: Arial;\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  padding: 11px 23px;\r\n  text-decoration: none;\r\n  text-shadow: 0px -1px 0px #a9a9a9;\r\n}\r\n\r\n#saveGridButton[_ngcontent-%COMP%]:hover {\r\n  background: linear-gradient(to bottom, #a9a9a9 5%, #bebebe 100%);\r\n  background-color: #a9a9a9;\r\n}\r\n\r\n#saveGridButton[_ngcontent-%COMP%]:active {\r\n  position: relative;\r\n  top: 1px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYXBvbi1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtFQUMzQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHlDQUF5QztFQUN6QyxnRUFBZ0U7RUFDaEUseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxnRUFBZ0U7RUFDaEUseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7QUFDViIsImZpbGUiOiJ3ZWFwb24tc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VhcG9uU2VsZWN0SGVhZGluZyB7XHJcbiAgbWFyZ2luOiA0MHB4IDI1cHggMjBweCAyNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTUwJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuI3dlYXBvblNlbGVjdENvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMHB4IDNweCAyMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXJnaW46IDBweCAyNXB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbn1cclxuXHJcbiNpbXBvcnRCdXR0b25Db250YWluZXIge1xyXG4gIGhlaWdodDogMzlweDtcclxuICB3aWR0aDogMzM1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiN3ZWFwb25HcmlkQ29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHggMjBweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luOiAwcHggMjVweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG59XHJcblxyXG4jd2VhcG9uU2VsZWN0TGlzdENvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDM1MnB4O1xyXG4gIGhlaWdodDogNDI2cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbiN3ZWFwb25HcmlkTGlzdENvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDMzNXB4O1xyXG4gIGhlaWdodDogMzU3cHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgbWFyZ2luLXRvcDogNjlweDtcclxufVxyXG5cclxuI3NlbGVjdElucHV0Q29udGFpbmVyIHtcclxuICB3aWR0aDogMzM1cHg7XHJcbiAgbWFyZ2luOiAyMHB4IDBweDtcclxufVxyXG5cclxuc2VsZWN0IHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi53ZWFwb25Db250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG4jYnV0dG9uRGl2IHtcclxuICBtYXJnaW46IDIwcHggMHB4IDBweCAzNjdweDtcclxufVxyXG5cclxuI3NhdmVHcmlkQnV0dG9uIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDNweCAwcHggI2MwYzBjMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjYmViZWJlIDUlLCAjYTlhOWE5IDEwMCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiZWJlYmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiZWJlYmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI0Y4RjhGODtcclxuICBmb250LWZhbWlseTogQXJpYWw7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDExcHggMjNweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAtMXB4IDBweCAjYTlhOWE5O1xyXG59XHJcblxyXG4jc2F2ZUdyaWRCdXR0b246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNhOWE5YTkgNSUsICNiZWJlYmUgMTAwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E5YTlhOTtcclxufVxyXG5cclxuI3NhdmVHcmlkQnV0dG9uOmFjdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMXB4O1xyXG59XHJcbiJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_weapon_list_state__WEBPACK_IMPORTED_MODULE_3__["WeaponListState"].getWeaponList)
], WeaponSelectComponent.prototype, "weapons$", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Select"])(_state_weapon_grid_state__WEBPACK_IMPORTED_MODULE_5__["WeaponGridState"].getWeaponGrids)
], WeaponSelectComponent.prototype, "grids$", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](WeaponSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-weapon-select',
                templateUrl: './weapon-select.component.html',
                styleUrls: ['./weapon-select.component.css']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MAT_DIALOG_DATA"]]
            }] }, { type: _ngxs_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }]; }, { weapons$: [], grids$: [] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map