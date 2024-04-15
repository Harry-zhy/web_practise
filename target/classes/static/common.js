"use strict";
(self["webpackChunkteamproject"] = self["webpackChunkteamproject"] || []).push([["common"],{

/***/ 61726:
/*!*******************************************************!*\
  !*** ./src/main/webapp/app/config/input.constants.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATE_FORMAT": () => (/* binding */ DATE_FORMAT),
/* harmony export */   "DATE_TIME_FORMAT": () => (/* binding */ DATE_TIME_FORMAT)
/* harmony export */ });
const DATE_FORMAT = 'YYYY-MM-DD';
const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';


/***/ }),

/***/ 39586:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/config/navigation.constants.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ASC": () => (/* binding */ ASC),
/* harmony export */   "DEFAULT_SORT_DATA": () => (/* binding */ DEFAULT_SORT_DATA),
/* harmony export */   "DESC": () => (/* binding */ DESC),
/* harmony export */   "ITEM_DELETED_EVENT": () => (/* binding */ ITEM_DELETED_EVENT),
/* harmony export */   "SORT": () => (/* binding */ SORT)
/* harmony export */ });
const ASC = 'asc';
const DESC = 'desc';
const SORT = 'sort';
const ITEM_DELETED_EVENT = 'deleted';
const DEFAULT_SORT_DATA = 'defaultSort';


/***/ }),

/***/ 15926:
/*!************************************************************!*\
  !*** ./src/main/webapp/app/core/util/data-util.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataUtils": () => (/* binding */ DataUtils)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);


/**
 * An utility service for data.
 */
class DataUtils {
    /**
     * Method to find the byte size of the string provides
     */
    byteSize(base64String) {
        return this.formatAsBytes(this.size(base64String));
    }
    /**
     * Method to open file
     */
    openFile(data, contentType) {
        contentType = contentType ?? '';
        const byteCharacters = atob(data);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], {
            type: contentType,
        });
        const fileURL = window.URL.createObjectURL(blob);
        const win = window.open(fileURL);
        win.onload = function () {
            URL.revokeObjectURL(fileURL);
        };
    }
    /**
     * Sets the base 64 data & file type of the 1st file on the event (event.target.files[0]) in the passed entity object
     * and returns an observable.
     *
     * @param event the object containing the file (at event.target.files[0])
     * @param editForm the form group where the input field is located
     * @param field the field name to set the file's 'base 64 data' on
     * @param isImage boolean representing if the file represented by the event is an image
     * @returns an observable that loads file to form field and completes if sussessful
     *      or returns error as FileLoadError on failure
     */
    loadFileToForm(event, editForm, field, isImage) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((observer) => {
            const eventTarget = event.target;
            if (eventTarget?.files?.[0]) {
                const file = eventTarget.files[0];
                if (isImage && !file.type.startsWith('image/')) {
                    const error = {
                        message: `File was expected to be an image but was found to be '${file.type}'`,
                        key: 'not.image',
                        params: { fileType: file.type },
                    };
                    observer.error(error);
                }
                else {
                    const fieldContentType = field + 'ContentType';
                    this.toBase64(file, (base64Data) => {
                        editForm.patchValue({
                            [field]: base64Data,
                            [fieldContentType]: file.type,
                        });
                        observer.next();
                        observer.complete();
                    });
                }
            }
            else {
                const error = {
                    message: 'Could not extract file',
                    key: 'could.not.extract',
                    params: { event },
                };
                observer.error(error);
            }
        });
    }
    /**
     * Method to convert the file to base64
     */
    toBase64(file, callback) {
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            if (typeof e.target?.result === 'string') {
                const base64Data = e.target.result.substring(e.target.result.indexOf('base64,') + 'base64,'.length);
                callback(base64Data);
            }
        };
        fileReader.readAsDataURL(file);
    }
    endsWith(suffix, str) {
        return str.includes(suffix, str.length - suffix.length);
    }
    paddingSize(value) {
        if (this.endsWith('==', value)) {
            return 2;
        }
        if (this.endsWith('=', value)) {
            return 1;
        }
        return 0;
    }
    size(value) {
        return (value.length / 4) * 3 - this.paddingSize(value);
    }
    formatAsBytes(size) {
        return size.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' bytes'; // NOSONAR
    }
}
DataUtils.ɵfac = function DataUtils_Factory(t) { return new (t || DataUtils)(); };
DataUtils.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataUtils, factory: DataUtils.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 14824:
/*!*******************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity-company/service/activity-company.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivityCompanyService": () => (/* binding */ ActivityCompanyService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class ActivityCompanyService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/activity-companies');
    }
    create(activityCompany) {
        return this.http.post(this.resourceUrl, activityCompany, { observe: 'response' });
    }
    update(activityCompany) {
        return this.http.put(`${this.resourceUrl}/${this.getActivityCompanyIdentifier(activityCompany)}`, activityCompany, {
            observe: 'response',
        });
    }
    partialUpdate(activityCompany) {
        return this.http.patch(`${this.resourceUrl}/${this.getActivityCompanyIdentifier(activityCompany)}`, activityCompany, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getActivityCompanyIdentifier(activityCompany) {
        return activityCompany.id;
    }
    compareActivityCompany(o1, o2) {
        return o1 && o2 ? this.getActivityCompanyIdentifier(o1) === this.getActivityCompanyIdentifier(o2) : o1 === o2;
    }
    addActivityCompanyToCollectionIfMissing(activityCompanyCollection, ...activityCompaniesToCheck) {
        const activityCompanies = activityCompaniesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (activityCompanies.length > 0) {
            const activityCompanyCollectionIdentifiers = activityCompanyCollection.map(activityCompanyItem => this.getActivityCompanyIdentifier(activityCompanyItem));
            const activityCompaniesToAdd = activityCompanies.filter(activityCompanyItem => {
                const activityCompanyIdentifier = this.getActivityCompanyIdentifier(activityCompanyItem);
                if (activityCompanyCollectionIdentifiers.includes(activityCompanyIdentifier)) {
                    return false;
                }
                activityCompanyCollectionIdentifiers.push(activityCompanyIdentifier);
                return true;
            });
            return [...activityCompaniesToAdd, ...activityCompanyCollection];
        }
        return activityCompanyCollection;
    }
}
ActivityCompanyService.ɵfac = function ActivityCompanyService_Factory(t) { return new (t || ActivityCompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
ActivityCompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ActivityCompanyService, factory: ActivityCompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 28196:
/*!***************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity-saved/service/activity-saved.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitySavedService": () => (/* binding */ ActivitySavedService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 21157);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);







class ActivitySavedService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/activity-saveds');
    }
    create(activitySaved) {
        const copy = this.convertDateFromClient(activitySaved);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    update(activitySaved) {
        const copy = this.convertDateFromClient(activitySaved);
        return this.http
            .put(`${this.resourceUrl}/${this.getActivitySavedIdentifier(activitySaved)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    partialUpdate(activitySaved) {
        const copy = this.convertDateFromClient(activitySaved);
        return this.http
            .patch(`${this.resourceUrl}/${this.getActivitySavedIdentifier(activitySaved)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__.createRequestOption)(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getActivitySavedIdentifier(activitySaved) {
        return activitySaved.id;
    }
    compareActivitySaved(o1, o2) {
        return o1 && o2 ? this.getActivitySavedIdentifier(o1) === this.getActivitySavedIdentifier(o2) : o1 === o2;
    }
    addActivitySavedToCollectionIfMissing(activitySavedCollection, ...activitySavedsToCheck) {
        const activitySaveds = activitySavedsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__.isPresent);
        if (activitySaveds.length > 0) {
            const activitySavedCollectionIdentifiers = activitySavedCollection.map(activitySavedItem => this.getActivitySavedIdentifier(activitySavedItem));
            const activitySavedsToAdd = activitySaveds.filter(activitySavedItem => {
                const activitySavedIdentifier = this.getActivitySavedIdentifier(activitySavedItem);
                if (activitySavedCollectionIdentifiers.includes(activitySavedIdentifier)) {
                    return false;
                }
                activitySavedCollectionIdentifiers.push(activitySavedIdentifier);
                return true;
            });
            return [...activitySavedsToAdd, ...activitySavedCollection];
        }
        return activitySavedCollection;
    }
    convertDateFromClient(activitySaved) {
        return {
            ...activitySaved,
            date: activitySaved.date?.toJSON() ?? null,
        };
    }
    convertDateFromServer(restActivitySaved) {
        return {
            ...restActivitySaved,
            date: restActivitySaved.date ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restActivitySaved.date) : undefined,
        };
    }
    convertResponseFromServer(res) {
        return res.clone({
            body: res.body ? this.convertDateFromServer(res.body) : null,
        });
    }
    convertResponseArrayFromServer(res) {
        return res.clone({
            body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
        });
    }
}
ActivitySavedService.ɵfac = function ActivitySavedService_Factory(t) { return new (t || ActivitySavedService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
ActivitySavedService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ActivitySavedService, factory: ActivitySavedService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60792:
/*!*************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/activity-self/service/activity-self.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActivitySelfService": () => (/* binding */ ActivitySelfService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class ActivitySelfService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/activity-selves');
    }
    create(activitySelf) {
        return this.http.post(this.resourceUrl, activitySelf, { observe: 'response' });
    }
    update(activitySelf) {
        return this.http.put(`${this.resourceUrl}/${this.getActivitySelfIdentifier(activitySelf)}`, activitySelf, {
            observe: 'response',
        });
    }
    partialUpdate(activitySelf) {
        return this.http.patch(`${this.resourceUrl}/${this.getActivitySelfIdentifier(activitySelf)}`, activitySelf, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getActivitySelfIdentifier(activitySelf) {
        return activitySelf.id;
    }
    compareActivitySelf(o1, o2) {
        return o1 && o2 ? this.getActivitySelfIdentifier(o1) === this.getActivitySelfIdentifier(o2) : o1 === o2;
    }
    addActivitySelfToCollectionIfMissing(activitySelfCollection, ...activitySelvesToCheck) {
        const activitySelves = activitySelvesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (activitySelves.length > 0) {
            const activitySelfCollectionIdentifiers = activitySelfCollection.map(activitySelfItem => this.getActivitySelfIdentifier(activitySelfItem));
            const activitySelvesToAdd = activitySelves.filter(activitySelfItem => {
                const activitySelfIdentifier = this.getActivitySelfIdentifier(activitySelfItem);
                if (activitySelfCollectionIdentifiers.includes(activitySelfIdentifier)) {
                    return false;
                }
                activitySelfCollectionIdentifiers.push(activitySelfIdentifier);
                return true;
            });
            return [...activitySelvesToAdd, ...activitySelfCollection];
        }
        return activitySelfCollection;
    }
}
ActivitySelfService.ɵfac = function ActivitySelfService_Factory(t) { return new (t || ActivitySelfService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
ActivitySelfService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ActivitySelfService, factory: ActivitySelfService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47241:
/*!*****************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/booked-activity/service/booked-activity.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedActivityService": () => (/* binding */ BookedActivityService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class BookedActivityService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/booked-activities');
    }
    create(bookedActivity) {
        return this.http.post(this.resourceUrl, bookedActivity, { observe: 'response' });
    }
    update(bookedActivity) {
        return this.http.put(`${this.resourceUrl}/${this.getBookedActivityIdentifier(bookedActivity)}`, bookedActivity, {
            observe: 'response',
        });
    }
    partialUpdate(bookedActivity) {
        return this.http.patch(`${this.resourceUrl}/${this.getBookedActivityIdentifier(bookedActivity)}`, bookedActivity, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getBookedActivityIdentifier(bookedActivity) {
        return bookedActivity.id;
    }
    compareBookedActivity(o1, o2) {
        return o1 && o2 ? this.getBookedActivityIdentifier(o1) === this.getBookedActivityIdentifier(o2) : o1 === o2;
    }
    addBookedActivityToCollectionIfMissing(bookedActivityCollection, ...bookedActivitiesToCheck) {
        const bookedActivities = bookedActivitiesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (bookedActivities.length > 0) {
            const bookedActivityCollectionIdentifiers = bookedActivityCollection.map(bookedActivityItem => this.getBookedActivityIdentifier(bookedActivityItem));
            const bookedActivitiesToAdd = bookedActivities.filter(bookedActivityItem => {
                const bookedActivityIdentifier = this.getBookedActivityIdentifier(bookedActivityItem);
                if (bookedActivityCollectionIdentifiers.includes(bookedActivityIdentifier)) {
                    return false;
                }
                bookedActivityCollectionIdentifiers.push(bookedActivityIdentifier);
                return true;
            });
            return [...bookedActivitiesToAdd, ...bookedActivityCollection];
        }
        return bookedActivityCollection;
    }
}
BookedActivityService.ɵfac = function BookedActivityService_Factory(t) { return new (t || BookedActivityService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
BookedActivityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BookedActivityService, factory: BookedActivityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58058:
/*!***************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/booked-caterer/service/booked-caterer.service.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookedCatererService": () => (/* binding */ BookedCatererService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class BookedCatererService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/booked-caterers');
    }
    create(bookedCaterer) {
        return this.http.post(this.resourceUrl, bookedCaterer, { observe: 'response' });
    }
    update(bookedCaterer) {
        return this.http.put(`${this.resourceUrl}/${this.getBookedCatererIdentifier(bookedCaterer)}`, bookedCaterer, {
            observe: 'response',
        });
    }
    partialUpdate(bookedCaterer) {
        return this.http.patch(`${this.resourceUrl}/${this.getBookedCatererIdentifier(bookedCaterer)}`, bookedCaterer, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getBookedCatererIdentifier(bookedCaterer) {
        return bookedCaterer.id;
    }
    compareBookedCaterer(o1, o2) {
        return o1 && o2 ? this.getBookedCatererIdentifier(o1) === this.getBookedCatererIdentifier(o2) : o1 === o2;
    }
    addBookedCatererToCollectionIfMissing(bookedCatererCollection, ...bookedCaterersToCheck) {
        const bookedCaterers = bookedCaterersToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (bookedCaterers.length > 0) {
            const bookedCatererCollectionIdentifiers = bookedCatererCollection.map(bookedCatererItem => this.getBookedCatererIdentifier(bookedCatererItem));
            const bookedCaterersToAdd = bookedCaterers.filter(bookedCatererItem => {
                const bookedCatererIdentifier = this.getBookedCatererIdentifier(bookedCatererItem);
                if (bookedCatererCollectionIdentifiers.includes(bookedCatererIdentifier)) {
                    return false;
                }
                bookedCatererCollectionIdentifiers.push(bookedCatererIdentifier);
                return true;
            });
            return [...bookedCaterersToAdd, ...bookedCatererCollection];
        }
        return bookedCatererCollection;
    }
}
BookedCatererService.ɵfac = function BookedCatererService_Factory(t) { return new (t || BookedCatererService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
BookedCatererService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BookedCatererService, factory: BookedCatererService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 87003:
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/entities/caterers/service/caterers.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaterersService": () => (/* binding */ CaterersService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class CaterersService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/caterers');
    }
    create(caterers) {
        return this.http.post(this.resourceUrl, caterers, { observe: 'response' });
    }
    update(caterers) {
        return this.http.put(`${this.resourceUrl}/${this.getCaterersIdentifier(caterers)}`, caterers, { observe: 'response' });
    }
    partialUpdate(caterers) {
        return this.http.patch(`${this.resourceUrl}/${this.getCaterersIdentifier(caterers)}`, caterers, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getCaterersIdentifier(caterers) {
        return caterers.id;
    }
    compareCaterers(o1, o2) {
        return o1 && o2 ? this.getCaterersIdentifier(o1) === this.getCaterersIdentifier(o2) : o1 === o2;
    }
    addCaterersToCollectionIfMissing(caterersCollection, ...caterersToCheck) {
        const caterers = caterersToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (caterers.length > 0) {
            const caterersCollectionIdentifiers = caterersCollection.map(caterersItem => this.getCaterersIdentifier(caterersItem));
            const caterersToAdd = caterers.filter(caterersItem => {
                const caterersIdentifier = this.getCaterersIdentifier(caterersItem);
                if (caterersCollectionIdentifiers.includes(caterersIdentifier)) {
                    return false;
                }
                caterersCollectionIdentifiers.push(caterersIdentifier);
                return true;
            });
            return [...caterersToAdd, ...caterersCollection];
        }
        return caterersCollection;
    }
}
CaterersService.ɵfac = function CaterersService_Factory(t) { return new (t || CaterersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
CaterersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CaterersService, factory: CaterersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 93735:
/*!*************************************************************************!*\
  !*** ./src/main/webapp/app/entities/cuisine/service/cuisine.service.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CuisineService": () => (/* binding */ CuisineService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class CuisineService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/cuisines');
    }
    create(cuisine) {
        return this.http.post(this.resourceUrl, cuisine, { observe: 'response' });
    }
    update(cuisine) {
        return this.http.put(`${this.resourceUrl}/${this.getCuisineIdentifier(cuisine)}`, cuisine, { observe: 'response' });
    }
    partialUpdate(cuisine) {
        return this.http.patch(`${this.resourceUrl}/${this.getCuisineIdentifier(cuisine)}`, cuisine, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getCuisineIdentifier(cuisine) {
        return cuisine.id;
    }
    compareCuisine(o1, o2) {
        return o1 && o2 ? this.getCuisineIdentifier(o1) === this.getCuisineIdentifier(o2) : o1 === o2;
    }
    addCuisineToCollectionIfMissing(cuisineCollection, ...cuisinesToCheck) {
        const cuisines = cuisinesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (cuisines.length > 0) {
            const cuisineCollectionIdentifiers = cuisineCollection.map(cuisineItem => this.getCuisineIdentifier(cuisineItem));
            const cuisinesToAdd = cuisines.filter(cuisineItem => {
                const cuisineIdentifier = this.getCuisineIdentifier(cuisineItem);
                if (cuisineCollectionIdentifiers.includes(cuisineIdentifier)) {
                    return false;
                }
                cuisineCollectionIdentifiers.push(cuisineIdentifier);
                return true;
            });
            return [...cuisinesToAdd, ...cuisineCollection];
        }
        return cuisineCollection;
    }
}
CuisineService.ɵfac = function CuisineService_Factory(t) { return new (t || CuisineService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
CuisineService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CuisineService, factory: CuisineService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91220:
/*!***********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/deco-company/service/deco-company.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecoCompanyService": () => (/* binding */ DecoCompanyService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class DecoCompanyService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/deco-companies');
    }
    create(decoCompany) {
        return this.http.post(this.resourceUrl, decoCompany, { observe: 'response' });
    }
    update(decoCompany) {
        return this.http.put(`${this.resourceUrl}/${this.getDecoCompanyIdentifier(decoCompany)}`, decoCompany, {
            observe: 'response',
        });
    }
    partialUpdate(decoCompany) {
        return this.http.patch(`${this.resourceUrl}/${this.getDecoCompanyIdentifier(decoCompany)}`, decoCompany, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getDecoCompanyIdentifier(decoCompany) {
        return decoCompany.id;
    }
    compareDecoCompany(o1, o2) {
        return o1 && o2 ? this.getDecoCompanyIdentifier(o1) === this.getDecoCompanyIdentifier(o2) : o1 === o2;
    }
    addDecoCompanyToCollectionIfMissing(decoCompanyCollection, ...decoCompaniesToCheck) {
        const decoCompanies = decoCompaniesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (decoCompanies.length > 0) {
            const decoCompanyCollectionIdentifiers = decoCompanyCollection.map(decoCompanyItem => this.getDecoCompanyIdentifier(decoCompanyItem));
            const decoCompaniesToAdd = decoCompanies.filter(decoCompanyItem => {
                const decoCompanyIdentifier = this.getDecoCompanyIdentifier(decoCompanyItem);
                if (decoCompanyCollectionIdentifiers.includes(decoCompanyIdentifier)) {
                    return false;
                }
                decoCompanyCollectionIdentifiers.push(decoCompanyIdentifier);
                return true;
            });
            return [...decoCompaniesToAdd, ...decoCompanyCollection];
        }
        return decoCompanyCollection;
    }
}
DecoCompanyService.ɵfac = function DecoCompanyService_Factory(t) { return new (t || DecoCompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
DecoCompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DecoCompanyService, factory: DecoCompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6312:
/*!***************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/deco-contact-details/service/deco-contact-details.service.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecoContactDetailsService": () => (/* binding */ DecoContactDetailsService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class DecoContactDetailsService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/deco-contact-details');
    }
    create(decoContactDetails) {
        return this.http.post(this.resourceUrl, decoContactDetails, { observe: 'response' });
    }
    update(decoContactDetails) {
        return this.http.put(`${this.resourceUrl}/${this.getDecoContactDetailsIdentifier(decoContactDetails)}`, decoContactDetails, { observe: 'response' });
    }
    partialUpdate(decoContactDetails) {
        return this.http.patch(`${this.resourceUrl}/${this.getDecoContactDetailsIdentifier(decoContactDetails)}`, decoContactDetails, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getDecoContactDetailsIdentifier(decoContactDetails) {
        return decoContactDetails.id;
    }
    compareDecoContactDetails(o1, o2) {
        return o1 && o2 ? this.getDecoContactDetailsIdentifier(o1) === this.getDecoContactDetailsIdentifier(o2) : o1 === o2;
    }
    addDecoContactDetailsToCollectionIfMissing(decoContactDetailsCollection, ...decoContactDetailsToCheck) {
        const decoContactDetails = decoContactDetailsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (decoContactDetails.length > 0) {
            const decoContactDetailsCollectionIdentifiers = decoContactDetailsCollection.map(decoContactDetailsItem => this.getDecoContactDetailsIdentifier(decoContactDetailsItem));
            const decoContactDetailsToAdd = decoContactDetails.filter(decoContactDetailsItem => {
                const decoContactDetailsIdentifier = this.getDecoContactDetailsIdentifier(decoContactDetailsItem);
                if (decoContactDetailsCollectionIdentifiers.includes(decoContactDetailsIdentifier)) {
                    return false;
                }
                decoContactDetailsCollectionIdentifiers.push(decoContactDetailsIdentifier);
                return true;
            });
            return [...decoContactDetailsToAdd, ...decoContactDetailsCollection];
        }
        return decoContactDetailsCollection;
    }
}
DecoContactDetailsService.ɵfac = function DecoContactDetailsService_Factory(t) { return new (t || DecoContactDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
DecoContactDetailsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DecoContactDetailsService, factory: DecoContactDetailsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 17465:
/*!***********************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/deco-saved-company/service/deco-saved-company.service.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecoSavedCompanyService": () => (/* binding */ DecoSavedCompanyService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class DecoSavedCompanyService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/deco-saved-companies');
    }
    create(decoSavedCompany) {
        return this.http.post(this.resourceUrl, decoSavedCompany, { observe: 'response' });
    }
    update(decoSavedCompany) {
        return this.http.put(`${this.resourceUrl}/${this.getDecoSavedCompanyIdentifier(decoSavedCompany)}`, decoSavedCompany, { observe: 'response' });
    }
    partialUpdate(decoSavedCompany) {
        return this.http.patch(`${this.resourceUrl}/${this.getDecoSavedCompanyIdentifier(decoSavedCompany)}`, decoSavedCompany, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getDecoSavedCompanyIdentifier(decoSavedCompany) {
        return decoSavedCompany.id;
    }
    compareDecoSavedCompany(o1, o2) {
        return o1 && o2 ? this.getDecoSavedCompanyIdentifier(o1) === this.getDecoSavedCompanyIdentifier(o2) : o1 === o2;
    }
    addDecoSavedCompanyToCollectionIfMissing(decoSavedCompanyCollection, ...decoSavedCompaniesToCheck) {
        const decoSavedCompanies = decoSavedCompaniesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (decoSavedCompanies.length > 0) {
            const decoSavedCompanyCollectionIdentifiers = decoSavedCompanyCollection.map(decoSavedCompanyItem => this.getDecoSavedCompanyIdentifier(decoSavedCompanyItem));
            const decoSavedCompaniesToAdd = decoSavedCompanies.filter(decoSavedCompanyItem => {
                const decoSavedCompanyIdentifier = this.getDecoSavedCompanyIdentifier(decoSavedCompanyItem);
                if (decoSavedCompanyCollectionIdentifiers.includes(decoSavedCompanyIdentifier)) {
                    return false;
                }
                decoSavedCompanyCollectionIdentifiers.push(decoSavedCompanyIdentifier);
                return true;
            });
            return [...decoSavedCompaniesToAdd, ...decoSavedCompanyCollection];
        }
        return decoSavedCompanyCollection;
    }
}
DecoSavedCompanyService.ɵfac = function DecoSavedCompanyService_Factory(t) { return new (t || DecoSavedCompanyService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
DecoSavedCompanyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DecoSavedCompanyService, factory: DecoSavedCompanyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8358:
/*!*******************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/deco-saved-theme/service/deco-saved-theme.service.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecoSavedThemeService": () => (/* binding */ DecoSavedThemeService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class DecoSavedThemeService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/deco-saved-themes');
    }
    create(decoSavedTheme) {
        return this.http.post(this.resourceUrl, decoSavedTheme, { observe: 'response' });
    }
    update(decoSavedTheme) {
        return this.http.put(`${this.resourceUrl}/${this.getDecoSavedThemeIdentifier(decoSavedTheme)}`, decoSavedTheme, {
            observe: 'response',
        });
    }
    partialUpdate(decoSavedTheme) {
        return this.http.patch(`${this.resourceUrl}/${this.getDecoSavedThemeIdentifier(decoSavedTheme)}`, decoSavedTheme, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getDecoSavedThemeIdentifier(decoSavedTheme) {
        return decoSavedTheme.id;
    }
    compareDecoSavedTheme(o1, o2) {
        return o1 && o2 ? this.getDecoSavedThemeIdentifier(o1) === this.getDecoSavedThemeIdentifier(o2) : o1 === o2;
    }
    addDecoSavedThemeToCollectionIfMissing(decoSavedThemeCollection, ...decoSavedThemesToCheck) {
        const decoSavedThemes = decoSavedThemesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (decoSavedThemes.length > 0) {
            const decoSavedThemeCollectionIdentifiers = decoSavedThemeCollection.map(decoSavedThemeItem => this.getDecoSavedThemeIdentifier(decoSavedThemeItem));
            const decoSavedThemesToAdd = decoSavedThemes.filter(decoSavedThemeItem => {
                const decoSavedThemeIdentifier = this.getDecoSavedThemeIdentifier(decoSavedThemeItem);
                if (decoSavedThemeCollectionIdentifiers.includes(decoSavedThemeIdentifier)) {
                    return false;
                }
                decoSavedThemeCollectionIdentifiers.push(decoSavedThemeIdentifier);
                return true;
            });
            return [...decoSavedThemesToAdd, ...decoSavedThemeCollection];
        }
        return decoSavedThemeCollection;
    }
}
DecoSavedThemeService.ɵfac = function DecoSavedThemeService_Factory(t) { return new (t || DecoSavedThemeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
DecoSavedThemeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DecoSavedThemeService, factory: DecoSavedThemeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 34862:
/*!*********************************************************************************!*\
  !*** ./src/main/webapp/app/entities/deco-themes/service/deco-themes.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DecoThemesService": () => (/* binding */ DecoThemesService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class DecoThemesService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/deco-themes');
    }
    create(decoThemes) {
        return this.http.post(this.resourceUrl, decoThemes, { observe: 'response' });
    }
    update(decoThemes) {
        return this.http.put(`${this.resourceUrl}/${this.getDecoThemesIdentifier(decoThemes)}`, decoThemes, {
            observe: 'response',
        });
    }
    partialUpdate(decoThemes) {
        return this.http.patch(`${this.resourceUrl}/${this.getDecoThemesIdentifier(decoThemes)}`, decoThemes, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getDecoThemesIdentifier(decoThemes) {
        return decoThemes.id;
    }
    compareDecoThemes(o1, o2) {
        return o1 && o2 ? this.getDecoThemesIdentifier(o1) === this.getDecoThemesIdentifier(o2) : o1 === o2;
    }
    addDecoThemesToCollectionIfMissing(decoThemesCollection, ...decoThemesToCheck) {
        const decoThemes = decoThemesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (decoThemes.length > 0) {
            const decoThemesCollectionIdentifiers = decoThemesCollection.map(decoThemesItem => this.getDecoThemesIdentifier(decoThemesItem));
            const decoThemesToAdd = decoThemes.filter(decoThemesItem => {
                const decoThemesIdentifier = this.getDecoThemesIdentifier(decoThemesItem);
                if (decoThemesCollectionIdentifiers.includes(decoThemesIdentifier)) {
                    return false;
                }
                decoThemesCollectionIdentifiers.push(decoThemesIdentifier);
                return true;
            });
            return [...decoThemesToAdd, ...decoThemesCollection];
        }
        return decoThemesCollection;
    }
}
DecoThemesService.ɵfac = function DecoThemesService_Factory(t) { return new (t || DecoThemesService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
DecoThemesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DecoThemesService, factory: DecoThemesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 90020:
/*!***************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/dietary-requirements/service/dietary-requirements.service.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DietaryRequirementsService": () => (/* binding */ DietaryRequirementsService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class DietaryRequirementsService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/dietary-requirements');
    }
    create(dietaryRequirements) {
        return this.http.post(this.resourceUrl, dietaryRequirements, { observe: 'response' });
    }
    update(dietaryRequirements) {
        return this.http.put(`${this.resourceUrl}/${this.getDietaryRequirementsIdentifier(dietaryRequirements)}`, dietaryRequirements, { observe: 'response' });
    }
    partialUpdate(dietaryRequirements) {
        return this.http.patch(`${this.resourceUrl}/${this.getDietaryRequirementsIdentifier(dietaryRequirements)}`, dietaryRequirements, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getDietaryRequirementsIdentifier(dietaryRequirements) {
        return dietaryRequirements.id;
    }
    compareDietaryRequirements(o1, o2) {
        return o1 && o2 ? this.getDietaryRequirementsIdentifier(o1) === this.getDietaryRequirementsIdentifier(o2) : o1 === o2;
    }
    addDietaryRequirementsToCollectionIfMissing(dietaryRequirementsCollection, ...dietaryRequirementsToCheck) {
        const dietaryRequirements = dietaryRequirementsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (dietaryRequirements.length > 0) {
            const dietaryRequirementsCollectionIdentifiers = dietaryRequirementsCollection.map(dietaryRequirementsItem => this.getDietaryRequirementsIdentifier(dietaryRequirementsItem));
            const dietaryRequirementsToAdd = dietaryRequirements.filter(dietaryRequirementsItem => {
                const dietaryRequirementsIdentifier = this.getDietaryRequirementsIdentifier(dietaryRequirementsItem);
                if (dietaryRequirementsCollectionIdentifiers.includes(dietaryRequirementsIdentifier)) {
                    return false;
                }
                dietaryRequirementsCollectionIdentifiers.push(dietaryRequirementsIdentifier);
                return true;
            });
            return [...dietaryRequirementsToAdd, ...dietaryRequirementsCollection];
        }
        return dietaryRequirementsCollection;
    }
}
DietaryRequirementsService.ɵfac = function DietaryRequirementsService_Factory(t) { return new (t || DietaryRequirementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
DietaryRequirementsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: DietaryRequirementsService, factory: DietaryRequirementsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2939:
/*!*****************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/event-itinerary/service/event-itinerary.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventItineraryService": () => (/* binding */ EventItineraryService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class EventItineraryService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/event-itineraries');
    }
    create(eventItinerary) {
        return this.http.post(this.resourceUrl, eventItinerary, { observe: 'response' });
    }
    update(eventItinerary) {
        return this.http.put(`${this.resourceUrl}/${this.getEventItineraryIdentifier(eventItinerary)}`, eventItinerary, {
            observe: 'response',
        });
    }
    partialUpdate(eventItinerary) {
        return this.http.patch(`${this.resourceUrl}/${this.getEventItineraryIdentifier(eventItinerary)}`, eventItinerary, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getEventItineraryIdentifier(eventItinerary) {
        return eventItinerary.id;
    }
    compareEventItinerary(o1, o2) {
        return o1 && o2 ? this.getEventItineraryIdentifier(o1) === this.getEventItineraryIdentifier(o2) : o1 === o2;
    }
    addEventItineraryToCollectionIfMissing(eventItineraryCollection, ...eventItinerariesToCheck) {
        const eventItineraries = eventItinerariesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (eventItineraries.length > 0) {
            const eventItineraryCollectionIdentifiers = eventItineraryCollection.map(eventItineraryItem => this.getEventItineraryIdentifier(eventItineraryItem));
            const eventItinerariesToAdd = eventItineraries.filter(eventItineraryItem => {
                const eventItineraryIdentifier = this.getEventItineraryIdentifier(eventItineraryItem);
                if (eventItineraryCollectionIdentifiers.includes(eventItineraryIdentifier)) {
                    return false;
                }
                eventItineraryCollectionIdentifiers.push(eventItineraryIdentifier);
                return true;
            });
            return [...eventItinerariesToAdd, ...eventItineraryCollection];
        }
        return eventItineraryCollection;
    }
}
EventItineraryService.ɵfac = function EventItineraryService_Factory(t) { return new (t || EventItineraryService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
EventItineraryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EventItineraryService, factory: EventItineraryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 91470:
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/entities/event/service/event.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 21157);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);







class EventService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/events');
    }
    create(event) {
        const copy = this.convertDateFromClient(event);
        return this.http.post(this.resourceUrl, copy, { observe: 'response' }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    update(event) {
        const copy = this.convertDateFromClient(event);
        return this.http
            .put(`${this.resourceUrl}/${this.getEventIdentifier(event)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    partialUpdate(event) {
        const copy = this.convertDateFromClient(event);
        return this.http
            .patch(`${this.resourceUrl}/${this.getEventIdentifier(event)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__.createRequestOption)(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getEventIdentifier(event) {
        return event.id;
    }
    compareEvent(o1, o2) {
        return o1 && o2 ? this.getEventIdentifier(o1) === this.getEventIdentifier(o2) : o1 === o2;
    }
    addEventToCollectionIfMissing(eventCollection, ...eventsToCheck) {
        const events = eventsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__.isPresent);
        if (events.length > 0) {
            const eventCollectionIdentifiers = eventCollection.map(eventItem => this.getEventIdentifier(eventItem));
            const eventsToAdd = events.filter(eventItem => {
                const eventIdentifier = this.getEventIdentifier(eventItem);
                if (eventCollectionIdentifiers.includes(eventIdentifier)) {
                    return false;
                }
                eventCollectionIdentifiers.push(eventIdentifier);
                return true;
            });
            return [...eventsToAdd, ...eventCollection];
        }
        return eventCollection;
    }
    convertDateFromClient(event) {
        return {
            ...event,
            date: event.date?.toJSON() ?? null,
        };
    }
    convertDateFromServer(restEvent) {
        return {
            ...restEvent,
            date: restEvent.date ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restEvent.date) : undefined,
        };
    }
    convertResponseFromServer(res) {
        return res.clone({
            body: res.body ? this.convertDateFromServer(res.body) : null,
        });
    }
    convertResponseArrayFromServer(res) {
        return res.clone({
            body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
        });
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
EventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 86503:
/*!*****************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/favourites-list/service/favourites-list.service.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavouritesListService": () => (/* binding */ FavouritesListService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class FavouritesListService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/favourites-lists');
    }
    create(favouritesList) {
        return this.http.post(this.resourceUrl, favouritesList, { observe: 'response' });
    }
    update(favouritesList) {
        return this.http.put(`${this.resourceUrl}/${this.getFavouritesListIdentifier(favouritesList)}`, favouritesList, {
            observe: 'response',
        });
    }
    partialUpdate(favouritesList) {
        return this.http.patch(`${this.resourceUrl}/${this.getFavouritesListIdentifier(favouritesList)}`, favouritesList, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getFavouritesListIdentifier(favouritesList) {
        return favouritesList.id;
    }
    compareFavouritesList(o1, o2) {
        return o1 && o2 ? this.getFavouritesListIdentifier(o1) === this.getFavouritesListIdentifier(o2) : o1 === o2;
    }
    addFavouritesListToCollectionIfMissing(favouritesListCollection, ...favouritesListsToCheck) {
        const favouritesLists = favouritesListsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (favouritesLists.length > 0) {
            const favouritesListCollectionIdentifiers = favouritesListCollection.map(favouritesListItem => this.getFavouritesListIdentifier(favouritesListItem));
            const favouritesListsToAdd = favouritesLists.filter(favouritesListItem => {
                const favouritesListIdentifier = this.getFavouritesListIdentifier(favouritesListItem);
                if (favouritesListCollectionIdentifiers.includes(favouritesListIdentifier)) {
                    return false;
                }
                favouritesListCollectionIdentifiers.push(favouritesListIdentifier);
                return true;
            });
            return [...favouritesListsToAdd, ...favouritesListCollection];
        }
        return favouritesListCollection;
    }
}
FavouritesListService.ɵfac = function FavouritesListService_Factory(t) { return new (t || FavouritesListService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
FavouritesListService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: FavouritesListService, factory: FavouritesListService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 41589:
/*!*****************************************************************************!*\
  !*** ./src/main/webapp/app/entities/feedbacks/service/feedbacks.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbacksService": () => (/* binding */ FeedbacksService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 21157);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);







class FeedbacksService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/feedbacks');
    }
    create(feedbacks) {
        const copy = this.convertDateFromClient(feedbacks);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    update(feedbacks) {
        const copy = this.convertDateFromClient(feedbacks);
        return this.http
            .put(`${this.resourceUrl}/${this.getFeedbacksIdentifier(feedbacks)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    partialUpdate(feedbacks) {
        const copy = this.convertDateFromClient(feedbacks);
        return this.http
            .patch(`${this.resourceUrl}/${this.getFeedbacksIdentifier(feedbacks)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__.createRequestOption)(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getFeedbacksIdentifier(feedbacks) {
        return feedbacks.id;
    }
    compareFeedbacks(o1, o2) {
        return o1 && o2 ? this.getFeedbacksIdentifier(o1) === this.getFeedbacksIdentifier(o2) : o1 === o2;
    }
    addFeedbacksToCollectionIfMissing(feedbacksCollection, ...feedbacksToCheck) {
        const feedbacks = feedbacksToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__.isPresent);
        if (feedbacks.length > 0) {
            const feedbacksCollectionIdentifiers = feedbacksCollection.map(feedbacksItem => this.getFeedbacksIdentifier(feedbacksItem));
            const feedbacksToAdd = feedbacks.filter(feedbacksItem => {
                const feedbacksIdentifier = this.getFeedbacksIdentifier(feedbacksItem);
                if (feedbacksCollectionIdentifiers.includes(feedbacksIdentifier)) {
                    return false;
                }
                feedbacksCollectionIdentifiers.push(feedbacksIdentifier);
                return true;
            });
            return [...feedbacksToAdd, ...feedbacksCollection];
        }
        return feedbacksCollection;
    }
    convertDateFromClient(feedbacks) {
        return {
            ...feedbacks,
            date: feedbacks.date?.toJSON() ?? null,
        };
    }
    convertDateFromServer(restFeedbacks) {
        return {
            ...restFeedbacks,
            date: restFeedbacks.date ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restFeedbacks.date) : undefined,
        };
    }
    convertResponseFromServer(res) {
        return res.clone({
            body: res.body ? this.convertDateFromServer(res.body) : null,
        });
    }
    convertResponseArrayFromServer(res) {
        return res.clone({
            body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
        });
    }
}
FeedbacksService.ɵfac = function FeedbacksService_Factory(t) { return new (t || FeedbacksService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
FeedbacksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: FeedbacksService, factory: FeedbacksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 60944:
/*!*********************************************************************!*\
  !*** ./src/main/webapp/app/entities/intro/service/intro.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IntroService": () => (/* binding */ IntroService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class IntroService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/intros');
    }
    create(intro) {
        return this.http.post(this.resourceUrl, intro, { observe: 'response' });
    }
    update(intro) {
        return this.http.put(`${this.resourceUrl}/${this.getIntroIdentifier(intro)}`, intro, { observe: 'response' });
    }
    partialUpdate(intro) {
        return this.http.patch(`${this.resourceUrl}/${this.getIntroIdentifier(intro)}`, intro, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getIntroIdentifier(intro) {
        return intro.id;
    }
    compareIntro(o1, o2) {
        return o1 && o2 ? this.getIntroIdentifier(o1) === this.getIntroIdentifier(o2) : o1 === o2;
    }
    addIntroToCollectionIfMissing(introCollection, ...introsToCheck) {
        const intros = introsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (intros.length > 0) {
            const introCollectionIdentifiers = introCollection.map(introItem => this.getIntroIdentifier(introItem));
            const introsToAdd = intros.filter(introItem => {
                const introIdentifier = this.getIntroIdentifier(introItem);
                if (introCollectionIdentifiers.includes(introIdentifier)) {
                    return false;
                }
                introCollectionIdentifiers.push(introIdentifier);
                return true;
            });
            return [...introsToAdd, ...introCollection];
        }
        return introCollection;
    }
}
IntroService.ɵfac = function IntroService_Factory(t) { return new (t || IntroService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
IntroService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: IntroService, factory: IntroService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 34381:
/*!*************************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/itinerary-date-time/service/itinerary-date-time.service.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItineraryDateTimeService": () => (/* binding */ ItineraryDateTimeService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 21157);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);







class ItineraryDateTimeService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/itinerary-date-times');
    }
    create(itineraryDateTime) {
        const copy = this.convertDateFromClient(itineraryDateTime);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    update(itineraryDateTime) {
        const copy = this.convertDateFromClient(itineraryDateTime);
        return this.http
            .put(`${this.resourceUrl}/${this.getItineraryDateTimeIdentifier(itineraryDateTime)}`, copy, {
            observe: 'response',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    partialUpdate(itineraryDateTime) {
        const copy = this.convertDateFromClient(itineraryDateTime);
        return this.http
            .patch(`${this.resourceUrl}/${this.getItineraryDateTimeIdentifier(itineraryDateTime)}`, copy, {
            observe: 'response',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__.createRequestOption)(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getItineraryDateTimeIdentifier(itineraryDateTime) {
        return itineraryDateTime.id;
    }
    compareItineraryDateTime(o1, o2) {
        return o1 && o2 ? this.getItineraryDateTimeIdentifier(o1) === this.getItineraryDateTimeIdentifier(o2) : o1 === o2;
    }
    addItineraryDateTimeToCollectionIfMissing(itineraryDateTimeCollection, ...itineraryDateTimesToCheck) {
        const itineraryDateTimes = itineraryDateTimesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__.isPresent);
        if (itineraryDateTimes.length > 0) {
            const itineraryDateTimeCollectionIdentifiers = itineraryDateTimeCollection.map(itineraryDateTimeItem => this.getItineraryDateTimeIdentifier(itineraryDateTimeItem));
            const itineraryDateTimesToAdd = itineraryDateTimes.filter(itineraryDateTimeItem => {
                const itineraryDateTimeIdentifier = this.getItineraryDateTimeIdentifier(itineraryDateTimeItem);
                if (itineraryDateTimeCollectionIdentifiers.includes(itineraryDateTimeIdentifier)) {
                    return false;
                }
                itineraryDateTimeCollectionIdentifiers.push(itineraryDateTimeIdentifier);
                return true;
            });
            return [...itineraryDateTimesToAdd, ...itineraryDateTimeCollection];
        }
        return itineraryDateTimeCollection;
    }
    convertDateFromClient(itineraryDateTime) {
        return {
            ...itineraryDateTime,
            date: itineraryDateTime.date?.toJSON() ?? null,
            startTime: itineraryDateTime.startTime?.toJSON() ?? null,
            endTime: itineraryDateTime.endTime?.toJSON() ?? null,
        };
    }
    convertDateFromServer(restItineraryDateTime) {
        return {
            ...restItineraryDateTime,
            date: restItineraryDateTime.date ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restItineraryDateTime.date) : undefined,
            startTime: restItineraryDateTime.startTime ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restItineraryDateTime.startTime) : undefined,
            endTime: restItineraryDateTime.endTime ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restItineraryDateTime.endTime) : undefined,
        };
    }
    convertResponseFromServer(res) {
        return res.clone({
            body: res.body ? this.convertDateFromServer(res.body) : null,
        });
    }
    convertResponseArrayFromServer(res) {
        return res.clone({
            body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
        });
    }
}
ItineraryDateTimeService.ɵfac = function ItineraryDateTimeService_Factory(t) { return new (t || ItineraryDateTimeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
ItineraryDateTimeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ItineraryDateTimeService, factory: ItineraryDateTimeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 86366:
/*!*****************************************************************************!*\
  !*** ./src/main/webapp/app/entities/itinerary/service/itinerary.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItineraryService": () => (/* binding */ ItineraryService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 21157);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);







class ItineraryService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/itineraries');
    }
    create(itinerary) {
        const copy = this.convertDateFromClient(itinerary);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    update(itinerary) {
        const copy = this.convertDateFromClient(itinerary);
        return this.http
            .put(`${this.resourceUrl}/${this.getItineraryIdentifier(itinerary)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    partialUpdate(itinerary) {
        const copy = this.convertDateFromClient(itinerary);
        return this.http
            .patch(`${this.resourceUrl}/${this.getItineraryIdentifier(itinerary)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__.createRequestOption)(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getItineraryIdentifier(itinerary) {
        return itinerary.id;
    }
    compareItinerary(o1, o2) {
        return o1 && o2 ? this.getItineraryIdentifier(o1) === this.getItineraryIdentifier(o2) : o1 === o2;
    }
    addItineraryToCollectionIfMissing(itineraryCollection, ...itinerariesToCheck) {
        const itineraries = itinerariesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__.isPresent);
        if (itineraries.length > 0) {
            const itineraryCollectionIdentifiers = itineraryCollection.map(itineraryItem => this.getItineraryIdentifier(itineraryItem));
            const itinerariesToAdd = itineraries.filter(itineraryItem => {
                const itineraryIdentifier = this.getItineraryIdentifier(itineraryItem);
                if (itineraryCollectionIdentifiers.includes(itineraryIdentifier)) {
                    return false;
                }
                itineraryCollectionIdentifiers.push(itineraryIdentifier);
                return true;
            });
            return [...itinerariesToAdd, ...itineraryCollection];
        }
        return itineraryCollection;
    }
    convertDateFromClient(itinerary) {
        return {
            ...itinerary,
            startTime: itinerary.startTime?.toJSON() ?? null,
            endTime: itinerary.endTime?.toJSON() ?? null,
        };
    }
    convertDateFromServer(restItinerary) {
        return {
            ...restItinerary,
            startTime: restItinerary.startTime ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restItinerary.startTime) : undefined,
            endTime: restItinerary.endTime ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restItinerary.endTime) : undefined,
        };
    }
    convertResponseFromServer(res) {
        return res.clone({
            body: res.body ? this.convertDateFromServer(res.body) : null,
        });
    }
    convertResponseArrayFromServer(res) {
        return res.clone({
            body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
        });
    }
}
ItineraryService.ɵfac = function ItineraryService_Factory(t) { return new (t || ItineraryService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
ItineraryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: ItineraryService, factory: ItineraryService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 36793:
/*!*********************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/mock-venue-entity/service/mock-venue-entity.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MockVenueEntityService": () => (/* binding */ MockVenueEntityService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class MockVenueEntityService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/mock-venue-entities');
    }
    create(mockVenueEntity) {
        return this.http.post(this.resourceUrl, mockVenueEntity, { observe: 'response' });
    }
    update(mockVenueEntity) {
        return this.http.put(`${this.resourceUrl}/${this.getMockVenueEntityIdentifier(mockVenueEntity)}`, mockVenueEntity, {
            observe: 'response',
        });
    }
    partialUpdate(mockVenueEntity) {
        return this.http.patch(`${this.resourceUrl}/${this.getMockVenueEntityIdentifier(mockVenueEntity)}`, mockVenueEntity, {
            observe: 'response',
        });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getMockVenueEntityIdentifier(mockVenueEntity) {
        return mockVenueEntity.id;
    }
    compareMockVenueEntity(o1, o2) {
        return o1 && o2 ? this.getMockVenueEntityIdentifier(o1) === this.getMockVenueEntityIdentifier(o2) : o1 === o2;
    }
    addMockVenueEntityToCollectionIfMissing(mockVenueEntityCollection, ...mockVenueEntitiesToCheck) {
        const mockVenueEntities = mockVenueEntitiesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (mockVenueEntities.length > 0) {
            const mockVenueEntityCollectionIdentifiers = mockVenueEntityCollection.map(mockVenueEntityItem => this.getMockVenueEntityIdentifier(mockVenueEntityItem));
            const mockVenueEntitiesToAdd = mockVenueEntities.filter(mockVenueEntityItem => {
                const mockVenueEntityIdentifier = this.getMockVenueEntityIdentifier(mockVenueEntityItem);
                if (mockVenueEntityCollectionIdentifiers.includes(mockVenueEntityIdentifier)) {
                    return false;
                }
                mockVenueEntityCollectionIdentifiers.push(mockVenueEntityIdentifier);
                return true;
            });
            return [...mockVenueEntitiesToAdd, ...mockVenueEntityCollection];
        }
        return mockVenueEntityCollection;
    }
}
MockVenueEntityService.ɵfac = function MockVenueEntityService_Factory(t) { return new (t || MockVenueEntityService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
MockVenueEntityService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: MockVenueEntityService, factory: MockVenueEntityService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83408:
/*!*************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/questionnaire/service/questionnaire.service.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuestionnaireService": () => (/* binding */ QuestionnaireService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 21157);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);







class QuestionnaireService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/questionnaires');
    }
    create(questionnaire) {
        const copy = this.convertDateFromClient(questionnaire);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    update(questionnaire) {
        const copy = this.convertDateFromClient(questionnaire);
        return this.http
            .put(`${this.resourceUrl}/${this.getQuestionnaireIdentifier(questionnaire)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    partialUpdate(questionnaire) {
        const copy = this.convertDateFromClient(questionnaire);
        return this.http
            .patch(`${this.resourceUrl}/${this.getQuestionnaireIdentifier(questionnaire)}`, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__.createRequestOption)(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getQuestionnaireIdentifier(questionnaire) {
        return questionnaire.id;
    }
    compareQuestionnaire(o1, o2) {
        return o1 && o2 ? this.getQuestionnaireIdentifier(o1) === this.getQuestionnaireIdentifier(o2) : o1 === o2;
    }
    addQuestionnaireToCollectionIfMissing(questionnaireCollection, ...questionnairesToCheck) {
        const questionnaires = questionnairesToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__.isPresent);
        if (questionnaires.length > 0) {
            const questionnaireCollectionIdentifiers = questionnaireCollection.map(questionnaireItem => this.getQuestionnaireIdentifier(questionnaireItem));
            const questionnairesToAdd = questionnaires.filter(questionnaireItem => {
                const questionnaireIdentifier = this.getQuestionnaireIdentifier(questionnaireItem);
                if (questionnaireCollectionIdentifiers.includes(questionnaireIdentifier)) {
                    return false;
                }
                questionnaireCollectionIdentifiers.push(questionnaireIdentifier);
                return true;
            });
            return [...questionnairesToAdd, ...questionnaireCollection];
        }
        return questionnaireCollection;
    }
    convertDateFromClient(questionnaire) {
        return {
            ...questionnaire,
            date: questionnaire.date?.toJSON() ?? null,
        };
    }
    convertDateFromServer(restQuestionnaire) {
        return {
            ...restQuestionnaire,
            date: restQuestionnaire.date ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restQuestionnaire.date) : undefined,
        };
    }
    convertResponseFromServer(res) {
        return res.clone({
            body: res.body ? this.convertDateFromServer(res.body) : null,
        });
    }
    convertResponseArrayFromServer(res) {
        return res.clone({
            body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
        });
    }
}
QuestionnaireService.ɵfac = function QuestionnaireService_Factory(t) { return new (t || QuestionnaireService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
QuestionnaireService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: QuestionnaireService, factory: QuestionnaireService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97284:
/*!***********************************************************************!*\
  !*** ./src/main/webapp/app/entities/rating/service/rating.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RatingService": () => (/* binding */ RatingService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class RatingService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/ratings');
    }
    create(rating) {
        return this.http.post(this.resourceUrl, rating, { observe: 'response' });
    }
    update(rating) {
        return this.http.put(`${this.resourceUrl}/${this.getRatingIdentifier(rating)}`, rating, { observe: 'response' });
    }
    partialUpdate(rating) {
        return this.http.patch(`${this.resourceUrl}/${this.getRatingIdentifier(rating)}`, rating, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getRatingIdentifier(rating) {
        return rating.id;
    }
    compareRating(o1, o2) {
        return o1 && o2 ? this.getRatingIdentifier(o1) === this.getRatingIdentifier(o2) : o1 === o2;
    }
    addRatingToCollectionIfMissing(ratingCollection, ...ratingsToCheck) {
        const ratings = ratingsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (ratings.length > 0) {
            const ratingCollectionIdentifiers = ratingCollection.map(ratingItem => this.getRatingIdentifier(ratingItem));
            const ratingsToAdd = ratings.filter(ratingItem => {
                const ratingIdentifier = this.getRatingIdentifier(ratingItem);
                if (ratingCollectionIdentifiers.includes(ratingIdentifier)) {
                    return false;
                }
                ratingCollectionIdentifiers.push(ratingIdentifier);
                return true;
            });
            return [...ratingsToAdd, ...ratingCollection];
        }
        return ratingCollection;
    }
}
RatingService.ɵfac = function RatingService_Factory(t) { return new (t || RatingService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
RatingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RatingService, factory: RatingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58127:
/*!***************************************************************************!*\
  !*** ./src/main/webapp/app/entities/supplier/service/supplier.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierService": () => (/* binding */ SupplierService)
/* harmony export */ });
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);





class SupplierService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/suppliers');
    }
    create(supplier) {
        return this.http.post(this.resourceUrl, supplier, { observe: 'response' });
    }
    update(supplier) {
        return this.http.put(`${this.resourceUrl}/${this.getSupplierIdentifier(supplier)}`, supplier, { observe: 'response' });
    }
    partialUpdate(supplier) {
        return this.http.patch(`${this.resourceUrl}/${this.getSupplierIdentifier(supplier)}`, supplier, { observe: 'response' });
    }
    find(id) {
        return this.http.get(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_1__.createRequestOption)(req);
        return this.http.get(this.resourceUrl, { params: options, observe: 'response' });
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getSupplierIdentifier(supplier) {
        return supplier.id;
    }
    compareSupplier(o1, o2) {
        return o1 && o2 ? this.getSupplierIdentifier(o1) === this.getSupplierIdentifier(o2) : o1 === o2;
    }
    addSupplierToCollectionIfMissing(supplierCollection, ...suppliersToCheck) {
        const suppliers = suppliersToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_0__.isPresent);
        if (suppliers.length > 0) {
            const supplierCollectionIdentifiers = supplierCollection.map(supplierItem => this.getSupplierIdentifier(supplierItem));
            const suppliersToAdd = suppliers.filter(supplierItem => {
                const supplierIdentifier = this.getSupplierIdentifier(supplierItem);
                if (supplierCollectionIdentifiers.includes(supplierIdentifier)) {
                    return false;
                }
                supplierCollectionIdentifiers.push(supplierIdentifier);
                return true;
            });
            return [...suppliersToAdd, ...supplierCollection];
        }
        return supplierCollection;
    }
}
SupplierService.ɵfac = function SupplierService_Factory(t) { return new (t || SupplierService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_2__.ApplicationConfigService)); };
SupplierService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SupplierService, factory: SupplierService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 19557:
/*!*********************************************************************************************!*\
  !*** ./src/main/webapp/app/entities/venue-information/service/venue-information.service.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VenueInformationService": () => (/* binding */ VenueInformationService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var dayjs_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs/esm */ 21157);
/* harmony import */ var app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/core/util/operators */ 96037);
/* harmony import */ var app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/core/request/request-util */ 95929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/core/config/application-config.service */ 81082);







class VenueInformationService {
    constructor(http, applicationConfigService) {
        this.http = http;
        this.applicationConfigService = applicationConfigService;
        this.resourceUrl = this.applicationConfigService.getEndpointFor('api/venue-informations');
    }
    create(venueInformation) {
        const copy = this.convertDateFromClient(venueInformation);
        return this.http
            .post(this.resourceUrl, copy, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    update(venueInformation) {
        const copy = this.convertDateFromClient(venueInformation);
        return this.http
            .put(`${this.resourceUrl}/${this.getVenueInformationIdentifier(venueInformation)}`, copy, {
            observe: 'response',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    partialUpdate(venueInformation) {
        const copy = this.convertDateFromClient(venueInformation);
        return this.http
            .patch(`${this.resourceUrl}/${this.getVenueInformationIdentifier(venueInformation)}`, copy, {
            observe: 'response',
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    find(id) {
        return this.http
            .get(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseFromServer(res)));
    }
    query(req) {
        const options = (0,app_core_request_request_util__WEBPACK_IMPORTED_MODULE_2__.createRequestOption)(req);
        return this.http
            .get(this.resourceUrl, { params: options, observe: 'response' })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(res => this.convertResponseArrayFromServer(res)));
    }
    delete(id) {
        return this.http.delete(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
    getVenueInformationIdentifier(venueInformation) {
        return venueInformation.id;
    }
    compareVenueInformation(o1, o2) {
        return o1 && o2 ? this.getVenueInformationIdentifier(o1) === this.getVenueInformationIdentifier(o2) : o1 === o2;
    }
    addVenueInformationToCollectionIfMissing(venueInformationCollection, ...venueInformationsToCheck) {
        const venueInformations = venueInformationsToCheck.filter(app_core_util_operators__WEBPACK_IMPORTED_MODULE_1__.isPresent);
        if (venueInformations.length > 0) {
            const venueInformationCollectionIdentifiers = venueInformationCollection.map(venueInformationItem => this.getVenueInformationIdentifier(venueInformationItem));
            const venueInformationsToAdd = venueInformations.filter(venueInformationItem => {
                const venueInformationIdentifier = this.getVenueInformationIdentifier(venueInformationItem);
                if (venueInformationCollectionIdentifiers.includes(venueInformationIdentifier)) {
                    return false;
                }
                venueInformationCollectionIdentifiers.push(venueInformationIdentifier);
                return true;
            });
            return [...venueInformationsToAdd, ...venueInformationCollection];
        }
        return venueInformationCollection;
    }
    convertDateFromClient(venueInformation) {
        return {
            ...venueInformation,
            openingTimeFrom: venueInformation.openingTimeFrom?.toJSON() ?? null,
            openingTimeUntil: venueInformation.openingTimeUntil?.toJSON() ?? null,
        };
    }
    convertDateFromServer(restVenueInformation) {
        return {
            ...restVenueInformation,
            openingTimeFrom: restVenueInformation.openingTimeFrom ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restVenueInformation.openingTimeFrom) : undefined,
            openingTimeUntil: restVenueInformation.openingTimeUntil ? (0,dayjs_esm__WEBPACK_IMPORTED_MODULE_0__["default"])(restVenueInformation.openingTimeUntil) : undefined,
        };
    }
    convertResponseFromServer(res) {
        return res.clone({
            body: res.body ? this.convertDateFromServer(res.body) : null,
        });
    }
    convertResponseArrayFromServer(res) {
        return res.clone({
            body: res.body ? res.body.map(item => this.convertDateFromServer(item)) : null,
        });
    }
}
VenueInformationService.ɵfac = function VenueInformationService_Factory(t) { return new (t || VenueInformationService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](app_core_config_application_config_service__WEBPACK_IMPORTED_MODULE_3__.ApplicationConfigService)); };
VenueInformationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: VenueInformationService, factory: VenueInformationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 71805:
/*!*********************************************************!*\
  !*** ./src/main/webapp/app/shared/sort/sort.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortService": () => (/* binding */ SortService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

class SortService {
    constructor() {
        this.collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: 'base',
        });
    }
    startSort(property, order) {
        return (a, b) => this.collator.compare(a[property], b[property]) * order;
    }
}
SortService.ɵfac = function SortService_Factory(t) { return new (t || SortService)(); };
SortService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SortService, factory: SortService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map