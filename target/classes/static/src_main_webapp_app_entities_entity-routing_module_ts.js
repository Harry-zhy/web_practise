"use strict";
(self["webpackChunkteamproject"] = self["webpackChunkteamproject"] || []).push([["src_main_webapp_app_entities_entity-routing_module_ts"],{

/***/ 71094:
/*!***************************************************************!*\
  !*** ./src/main/webapp/app/entities/entity-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityRoutingModule": () => (/* binding */ EntityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);



class EntityRoutingModule {
}
EntityRoutingModule.ɵfac = function EntityRoutingModule_Factory(t) { return new (t || EntityRoutingModule)(); };
EntityRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EntityRoutingModule });
EntityRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild([
            {
                path: 'itinerary-date-time',
                data: { pageTitle: 'ItineraryDateTimes' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_itinerary-date-time_itinerary-date-time_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./itinerary-date-time/itinerary-date-time.module */ 43925)).then(m => m.ItineraryDateTimeModule),
            },
            {
                path: 'itinerary-guest',
                data: { pageTitle: 'ItineraryGuests' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_itinerary-guest_itinerary-guest_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./itinerary-guest/itinerary-guest.module */ 92783)).then(m => m.ItineraryGuestModule),
            },
            {
                path: 'itinerary-caterer',
                data: { pageTitle: 'ItineraryCaterers' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_itinerary-caterer_itinerary-caterer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./itinerary-caterer/itinerary-caterer.module */ 8913)).then(m => m.ItineraryCatererModule),
            },
            {
                path: 'itinerary-activity',
                data: { pageTitle: 'ItineraryActivities' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_itinerary-activity_itinerary-activity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./itinerary-activity/itinerary-activity.module */ 65410)).then(m => m.ItineraryActivityModule),
            },
            {
                path: 'itinerary-venue',
                data: { pageTitle: 'ItineraryVenues' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_itinerary-venue_itinerary-venue_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./itinerary-venue/itinerary-venue.module */ 53629)).then(m => m.ItineraryVenueModule),
            },
            {
                path: 'event-itinerary',
                data: { pageTitle: 'EventItineraries' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_event-itinerary_event-itinerary_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event-itinerary/event-itinerary.module */ 18473)).then(m => m.EventItineraryModule),
            },
            {
                path: 'caterers',
                data: { pageTitle: 'Caterers' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_caterers_caterers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./caterers/caterers.module */ 82305)).then(m => m.CaterersModule),
            },
            {
                path: 'dietary-requirements',
                data: { pageTitle: 'DietaryRequirements' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_dietary-requirements_dietary-requirements_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dietary-requirements/dietary-requirements.module */ 73775)).then(m => m.DietaryRequirementsModule),
            },
            {
                path: 'cuisine',
                data: { pageTitle: 'Cuisines' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_cuisine_cuisine_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cuisine/cuisine.module */ 8377)).then(m => m.CuisineModule),
            },
            {
                path: 'itinerary',
                data: { pageTitle: 'Itineraries' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_itinerary_itinerary_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./itinerary/itinerary.module */ 25662)).then(m => m.ItineraryModule),
            },
            {
                path: 'booked-caterer',
                data: { pageTitle: 'BookedCaterers' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_booked-caterer_booked-caterer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booked-caterer/booked-caterer.module */ 58958)).then(m => m.BookedCatererModule),
            },
            {
                path: 'activity-company',
                data: { pageTitle: 'ActivityCompanies' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_activity-company_activity-company_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./activity-company/activity-company.module */ 40776)).then(m => m.ActivityCompanyModule),
            },
            {
                path: 'booked-activity',
                data: { pageTitle: 'BookedActivities' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_booked-activity_booked-activity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booked-activity/booked-activity.module */ 76348)).then(m => m.BookedActivityModule),
            },
            {
                path: 'activity-self',
                data: { pageTitle: 'ActivitySelves' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_activity-self_activity-self_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./activity-self/activity-self.module */ 95271)).then(m => m.ActivitySelfModule),
            },
            {
                path: 'activity-idea',
                data: { pageTitle: 'ActivityIdeas' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_activity-idea_activity-idea_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./activity-idea/activity-idea.module */ 29890)).then(m => m.ActivityIdeaModule),
            },
            {
                path: 'activity-saved',
                data: { pageTitle: 'ActivitySaveds' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_activity-saved_activity-saved_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./activity-saved/activity-saved.module */ 65544)).then(m => m.ActivitySavedModule),
            },
            {
                path: 'activity-image',
                data: { pageTitle: 'ActivityImages' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_activity-image_activity-image_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./activity-image/activity-image.module */ 40589)).then(m => m.ActivityImageModule),
            },
            {
                path: 'activity-contact-details',
                data: { pageTitle: 'ActivityContactDetails' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_activity-contact-details_activity-contact-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./activity-contact-details/activity-contact-details.module */ 4448)).then(m => m.ActivityContactDetailsModule),
            },
            {
                path: 'deco-company',
                data: { pageTitle: 'DecoCompanies' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_deco-company_deco-company_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./deco-company/deco-company.module */ 51649)).then(m => m.DecoCompanyModule),
            },
            {
                path: 'deco-images',
                data: { pageTitle: 'DecoImages' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_deco-images_deco-images_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./deco-images/deco-images.module */ 22896)).then(m => m.DecoImagesModule),
            },
            {
                path: 'deco-saved-company',
                data: { pageTitle: 'DecoSavedCompanies' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_deco-saved-company_deco-saved-company_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./deco-saved-company/deco-saved-company.module */ 39270)).then(m => m.DecoSavedCompanyModule),
            },
            {
                path: 'deco-budget',
                data: { pageTitle: 'DecoBudgets' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_deco-budget_deco-budget_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./deco-budget/deco-budget.module */ 58497)).then(m => m.DecoBudgetModule),
            },
            {
                path: 'deco-themes',
                data: { pageTitle: 'DecoThemes' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_deco-themes_deco-themes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./deco-themes/deco-themes.module */ 4117)).then(m => m.DecoThemesModule),
            },
            {
                path: 'deco-saved-theme',
                data: { pageTitle: 'DecoSavedThemes' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_deco-saved-theme_deco-saved-theme_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./deco-saved-theme/deco-saved-theme.module */ 97704)).then(m => m.DecoSavedThemeModule),
            },
            {
                path: 'deco-contact-details',
                data: { pageTitle: 'DecoContactDetails' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_deco-contact-details_deco-contact-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./deco-contact-details/deco-contact-details.module */ 35121)).then(m => m.DecoContactDetailsModule),
            },
            {
                path: 'one-feedback',
                data: { pageTitle: 'OneFeedbacks' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_one-feedback_one-feedback_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./one-feedback/one-feedback.module */ 74017)).then(m => m.OneFeedbackModule),
            },
            {
                path: 'rating',
                data: { pageTitle: 'Ratings' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_rating_rating_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./rating/rating.module */ 48755)).then(m => m.RatingModule),
            },
            {
                path: 'feedbacks',
                data: { pageTitle: 'Feedbacks' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_feedbacks_feedbacks_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./feedbacks/feedbacks.module */ 16900)).then(m => m.FeedbacksModule),
            },
            {
                path: 'intro',
                data: { pageTitle: 'Intros' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_intro_intro_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./intro/intro.module */ 46337)).then(m => m.IntroModule),
            },
            {
                path: 'questionnaire',
                data: { pageTitle: 'Questionnaires' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_questionnaire_questionnaire_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./questionnaire/questionnaire.module */ 84899)).then(m => m.QuestionnaireModule),
            },
            {
                path: 'question',
                data: { pageTitle: 'Questions' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_question_question_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./question/question.module */ 71028)).then(m => m.QuestionModule),
            },
            {
                path: 'mcq-option',
                data: { pageTitle: 'MCQOptions' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_mcq-option_mcq-option_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mcq-option/mcq-option.module */ 50839)).then(m => m.MCQOptionModule),
            },
            {
                path: 'message',
                data: { pageTitle: 'Messages' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_message_message_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./message/message.module */ 20549)).then(m => m.MessageModule),
            },
            {
                path: 'notification',
                data: { pageTitle: 'Notifications' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_notification_notification_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./notification/notification.module */ 3119)).then(m => m.NotificationModule),
            },
            {
                path: 'supplier',
                data: { pageTitle: 'Suppliers' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_supplier_supplier_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./supplier/supplier.module */ 81911)).then(m => m.SupplierModule),
            },
            {
                path: 'venue-information',
                data: { pageTitle: 'VenueInformations' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_venue-information_venue-information_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./venue-information/venue-information.module */ 99435)).then(m => m.VenueInformationModule),
            },
            {
                path: 'ads-management',
                data: { pageTitle: 'AdsManagements' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_ads-management_ads-management_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./ads-management/ads-management.module */ 32073)).then(m => m.AdsManagementModule),
            },
            {
                path: 'business-information',
                data: { pageTitle: 'BusinessInformations' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_business-information_business-information_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./business-information/business-information.module */ 92552)).then(m => m.BusinessInformationModule),
            },
            {
                path: 'mock-caterer-entity',
                data: { pageTitle: 'MockCatererEntities' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_mock-caterer-entity_mock-caterer-entity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mock-caterer-entity/mock-caterer-entity.module */ 31620)).then(m => m.MockCatererEntityModule),
            },
            {
                path: 'mock-venue-entity',
                data: { pageTitle: 'MockVenueEntities' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_mock-venue-entity_mock-venue-entity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mock-venue-entity/mock-venue-entity.module */ 50092)).then(m => m.MockVenueEntityModule),
            },
            {
                path: 'mock-activity-entity',
                data: { pageTitle: 'MockActivityEntities' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_mock-activity-entity_mock-activity-entity_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./mock-activity-entity/mock-activity-entity.module */ 27332)).then(m => m.MockActivityEntityModule),
            },
            {
                path: 'favourites-list-item',
                data: { pageTitle: 'FavouritesListItems' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_favourites-list-item_favourites-list-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./favourites-list-item/favourites-list-item.module */ 79161)).then(m => m.FavouritesListItemModule),
            },
            {
                path: 'favourites-list',
                data: { pageTitle: 'FavouritesLists' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_favourites-list_favourites-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./favourites-list/favourites-list.module */ 66322)).then(m => m.FavouritesListModule),
            },
            {
                path: 'event',
                data: { pageTitle: 'Events' },
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_main_webapp_app_entities_event_event_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./event/event.module */ 36061)).then(m => m.EventModule),
            },
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EntityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_main_webapp_app_entities_entity-routing_module_ts.js.map