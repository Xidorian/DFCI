(function() {
  angular.module('trPcApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'ngAria', 'ngCookies', 'ngSanitize', 'ui.bootstrap', 'cgBusy', 'pascalprecht.translate', 'textAngular', 'formly', 'formlyBootstrap', 'trPcControllers']);

  angular.module('trPcControllers', []);

  angular.element(document).ready(function() {
    if (!angular.element(document).injector()) {
      return angular.bootstrap(document, ['trPcApp']);
    }
  });

  angular.module('trPcApp').value('cgBusyDefaults', {
    message: 'Loading ...',
    minDuration: 500,
    templateUrl: './html/directive/loadingMessage.html'
  });

  angular.module('trPcApp').config([
    'formlyConfigProvider',
    function(formlyConfigProvider) {
      formlyConfigProvider.setType({
        name: 'username',
        extends: 'input',
        templateUrl: './html/directive/formlyUsername.html',
        wrapper: ['bootstrapLabel',
    'bootstrapHasError'],
        defaultOptions: {
          templateOptions: {
            changePasswordLabel: 'Change Password'
          }
        }
      });
      formlyConfigProvider.setType({
        name: 'selectFromArray',
        templateUrl: './html/directive/formlySelectArray.html',
        wrapper: ['bootstrapLabel',
    'bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'datepicker',
        templateUrl: './html/directive/formlyDatepicker.html',
        wrapper: ['bootstrapLabel',
    'bootstrapHasError'],
        defaultOptions: {
          ngModelAttrs: {
            dateDisabled: {
              attribute: 'date-disabled'
            },
            customClass: {
              attribute: 'custom-class'
            },
            showWeeks: {
              attribute: 'show-weeks'
            },
            startingDay: {
              attribute: 'starting-day'
            },
            initDate: {
              attribute: 'init-date'
            },
            minMode: {
              attribute: 'min-mode'
            },
            maxMode: {
              attribute: 'max-mode'
            },
            formatDay: {
              attribute: 'format-day'
            },
            formatMonth: {
              attribute: 'format-month'
            },
            formatYear: {
              attribute: 'format-year'
            },
            formatDayHeader: {
              attribute: 'format-day-header'
            },
            formatDayTitle: {
              attribute: 'format-day-title'
            },
            formatMonthTitle: {
              attribute: 'format-month-title'
            },
            yearRange: {
              attribute: 'year-range'
            },
            shortcutPropagation: {
              attribute: 'shortcut-propagation'
            },
            datepickerPopup: {
              attribute: 'datepicker-popup'
            },
            showButtonBar: {
              attribute: 'show-button-bar'
            },
            currentText: {
              attribute: 'current-text'
            },
            clearText: {
              attribute: 'clear-text'
            },
            closeText: {
              attribute: 'close-text'
            },
            closeOnDateSelection: {
              attribute: 'close-on-date-selection'
            },
            datepickerAppendToBody: {
              attribute: 'datepicker-append-to-body'
            },
            datepickerMode: {
              bound: 'datepicker-mode'
            },
            minDate: {
              bound: 'min-date'
            },
            maxDate: {
              bound: 'max-date'
            }
          },
          templateOptions: {
            dateOptions: {
              format: 'MM/dd/yyyy',
              initDate: new Date()
            }
          }
        },
        controller: [
          '$scope',
          function($scope) {
            $scope.datepicker = {};
            $scope.datepicker.opened = false;
            return $scope.datepicker.open = function($event) {
              return $scope.datepicker.opened = !$scope.datepicker.opened;
            };
          }
        ]
      });
      formlyConfigProvider.setType({
        name: 'typeahead',
        template: '<input type="text" ng-model="model[options.key]" uib-typeahead="item for item in to.options | filter:$viewValue" class="form-control">',
        wrapper: ['bootstrapLabel',
    'bootstrapHasError'],
        defaultOptions: {
          ngModelAttrs: {
            ngModelOptions: {
              bound: 'ng-model-options'
            },
            typeaheadAppendTo: {
              bound: 'typeahead-append-to'
            },
            typeaheadAppendToBody: {
              bound: 'typeahead-append-to-body'
            },
            typeaheadEditable: {
              bound: 'typeahead-editable'
            },
            typeaheadFocusFirst: {
              bound: 'typeahead-focus-first'
            },
            typeaheadFocusOnSelect: {
              attribute: 'typeahead-focus-on-select'
            },
            typeaheadInputFormatter: {
              bound: 'typeahead-input-formatter'
            },
            typeaheadIsOpen: {
              bound: 'typeahead-is-open'
            },
            typeaheadLoading: {
              bound: 'typeahead-loading'
            },
            typeaheadMinLength: {
              bound: 'typeahead-min-length',
              value: 0
            },
            typeaheadNoResults: {
              bound: 'typeahead-no-results'
            },
            typeaheadShouldSelect: {
              bound: 'typeahead-should-select'
            },
            typeaheadOnSelect: {
              bound: 'typeahead-on-select'
            },
            typeaheadPopupTemplateUrl: {
              attribute: 'typeahead-popup-template-url'
            },
            typeaheadSelectOnBlur: {
              bound: 'typeahead-select-on-blur'
            },
            typeaheadSelectOnExact: {
              bound: 'typeahead-select-on-exact'
            },
            typeaheadShowHint: {
              bound: 'typeahead-show-hint'
            },
            typeaheadTemplateUrl: {
              attribute: 'typeahead-template-url'
            },
            typeaheadWaitMs: {
              bound: 'typeahead-wait-ms'
            }
          }
        }
      });
      formlyConfigProvider.setType({
        name: 'caption',
        template: '<div class="formly-form-caption" ng-bind-html="to.label"></div>',
        wrapper: ['bootstrapHasError']
      });
      formlyConfigProvider.setType({
        name: 'hidden',
        template: '<div class="formly-form-hidden"><input type="hidden" ng-model="model[options.key]"></div>'
      });
      formlyConfigProvider.setType({
        name: 'captcha',
        template: '<div class="formly-form-captcha"></div>'
      });
      // todo?
      return formlyConfigProvider;
    }
  ]);

  angular.module('trPcApp').config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider,
    $locationProvider) {
      $locationProvider.hashPrefix('');
      return $routeProvider.when('/home',
    {
        templateUrl: './html/view/home.html',
        controller: 'HomeViewCtrl'
      }).when('/dashboard',
    {
        redirectTo: '/home'
      }).when('/email',
    {
        redirectTo: '/email/compose'
      }).when('/email/compose/:messageType?/:messageId?',
    {
        templateUrl: './html/view/emailCompose.html',
        controller: 'EmailComposeViewCtrl'
      }).when('/email/message/:messageType',
    {
        redirectTo: '/email/message/:messageType/list'
      }).when('/email/message/:messageType/list',
    {
        templateUrl: './html/view/emailMessageList.html',
        controller: 'EmailMessageListViewCtrl'
      }).when('/email/contacts',
    {
        redirectTo: '/email/contacts/email_rpt_show_all/list'
      }).when('/email/contacts/:filter',
    {
        redirectTo: '/email/contacts/:filter/list'
      }).when('/email/contacts/:filter/list',
    {
        templateUrl: './html/view/emailContactsList.html',
        controller: 'EmailContactsListViewCtrl'
      }).when('/profile',
    {
        templateUrl: './html/view/consProfile.html',
        controller: 'ConsProfileViewCtrl'
      }).when('/profile/questions',
    {
        templateUrl: './html/view/surveyQuestions.html',
        controller: 'SurveyQuestionsViewCtrl'
      }).when('/profile/options',
    {
        templateUrl: './html/view/eventOptions.html',
        controller: 'EventOptionsViewCtrl'
      }).when('/custom',
    {
        templateUrl: './html/view/custom.html',
        controller: 'CustomViewCtrl'
      }).otherwise({
        redirectTo: (function() {
          var pcPage,
    urlSearch;
          // redirect PC1-style URLs
          urlSearch = window.location.search;
          pcPage = urlSearch.match(/pc2_page=\w*&/);
          if (pcPage && pcPage.length > 0 && pcPage[0].slice(9,
    -1) === 'mtype') {
            return '/email/compose';
          } else {
            return '/home';
          }
        })()
      });
    }
  ]);

  angular.module('trPcApp').config([
    '$translateProvider',
    function($translateProvider) {
      var loginMessages,
    trpcMessages;
      $translateProvider.fallbackLanguage('en_US');
      $translateProvider.useSanitizeValueStrategy('escape');
      loginMessages = {
        type: 'msgCat',
        bundle: 'login_user',
        keys: ['error_invalid_username_or_password',
    'login_button_label',
    'new_password',
    'new_password_repeat',
    'password_hint',
    'reset_password_title',
    'submit_button_label']
      };
      trpcMessages = {
        type: 'msgCat',
        bundle: 'trpc',
        keys: ['accept_email_label',
    'accept_postal_mail_label',
    'activity_followup_message_sent',
    'add_contact_email_label',
    'add_contact_first_name_label',
    'add_contact_last_name_label',
    'add_contact_submit_button',
    'add_contacts_cancel_link',
    'addressbookimport_header',
    'addressbookimport_importcandidatecontacts_list_select_all_label_top',
    'addressbookimport_importcandidatecontacts_list_select_label_top',
    'addressbookimport_importcandidatecontacts_list_select_none_label_top',
    'addressbookimport_select_csv_label',
    'addressbookimport_selectcontacts_info',
    'addressbookimport_selectsource_none_selected_failure',
    'addressbookimport_selectsource_info_1',
    'addressbookimport_thirdpartystatus_info',
    'addressbookimport_thirdpartystatus_service_failure',
    'addressbookimport_tooltip_select_source_generic',
    'addressbookimport_tooltip_select_source_gmail',
    'addressbookimport_tooltip_select_source_yahoo',
    'admin_newsfeed_header_h1',
    'captains_message_captain_header',
    'captains_message_edit_link',
    'captains_message_empty',
    'captains_message_header',
    'captains_message_save_button',
    'captains_save_failure',
    'captains_save_success',
    'change_password_label',
    'chart_emails_sent_label',
    'chart_gift_amount_label',
    'class_cancel_link',
    'class_next_button',
    'class_or_label',
    'company_coordinator_center',
    'company_page_content_label',
    'company_page_edit_content',
    'company_page_edit_description',
    'company_page_edit_photo',
    'company_page_message_body',
    'company_page_save',
    'company_page_save_failure',
    'company_page_save_success',
    'company_page_permalink',
    'company_page_photo',
    'company_page_shortcut_cancel',
    'company_page_shortcut_edit',
    'company_page_shortcut_edit2',
    'company_page_shortcut_save',
    'company_page_shortcut_save_failure',
    'company_page_shortcut_save_success',
    'company_page_title',
    'company_photo_upload_button_label',
    'company_photo_upload_caption_label',
    'company_photo_upload_generic_error',
    'company_photo_upload_image_types',
    'company_photo_upload_or_label',
    'company_photo_upload_remove_label',
    'company_photo_upload_select_file',
    'company_photo_upload_success',
    'company_progress_bar_title',
    'company_report_teams_label',
    'company_select_none',
    'company_selection_update_personal_success',
    'company_selection_update_team_success',
    'company_selection_update_unexpected_error',
    'compose_current_layout_label',
    'compose_delete_button_label',
    'compose_message_label',
    'compose_preview_button_label',
    'compose_preview_send_label',
    'compose_preview_sending_label',
    'compose_salutation_help_body1',
    'compose_salutation_help_body2',
    'compose_salutation_help_body3',
    'compose_salutation_help_close',
    'compose_salutation_help_title',
    'compose_salutation_hint',
    'compose_save_template_button_label',
    'compose_saved_draft',
    'compose_saving_text',
    'compose_send_button_label',
    'compose_stationery_label',
    'compose_subject_label',
    'compose_to_label',
    'compose_to_placeholder',
    'compose_update_template_button_label',
    'contact_add_failure_email',
    'contact_add_failure_unknown',
    'contact_add_success',
    'contact_add_to_group_unknown_error',
    'contact_add_to_group_warning',
    'contact_delete_group_unknown_error',
    'contact_delete_selected_button',
    'contact_details_contact_info_hdr',
    'contact_details_edit_info',
    'contact_edit_address1_label',
    'contact_edit_address2_label',
    'contact_edit_cancel_link',
    'contact_edit_city_label',
    'contact_edit_country_label',
    'contact_edit_email_label',
    'contact_edit_first_name_label',
    'contact_edit_last_name_label',
    'contact_edit_save_button',
    'contact_edit_state_label',
    'contact_edit_success',
    'contact_edit_zip_label',
    'contact_email_selected_button',
    'contact_import_consent_needed',
    'contact_import_success',
    'contact_no_contacts_found',
    'contact_no_contacts_warning',
    'contact_no_name_label',
    'contact_remove_from_group_button',
    'contact_selected_delete',
    'contact_selected_remove_from_group',
    'contacts_acknowledge_contact_gift_no_email_body',
    'contacts_acknowledge_gift_title_label',
    'contacts_add_group_failure',
    'contacts_add_to_group',
    'contacts_add_to_group_button',
    'contacts_confirm_delete_body',
    'contacts_confirm_delete_groups_body',
    'contacts_confirm_delete_groups_header',
    'contacts_confirm_delete_header',
    'contacts_confirm_remove_from_group_body',
    'contacts_contact_remove_group_title',
    'contacts_create_a_new_group',
    'contacts_delete_button',
    'contacts_delete_success',
    'contacts_donations_label',
    'contacts_email_all_button',
    'contacts_email_group_button',
    'contacts_email_opened_label',
    'contacts_groups_all',
    'contacts_import_contacts',
    'contacts_label',
    'contacts_page_visits_label',
    'contacts_previous_amount_label',
    'contacts_remove_from_group_failure_body',
    'contacts_remove_from_group_failure_unknown',
    'contacts_remove_group_contact_success',
    'contacts_remove_group_contacts_success',
    'contacts_select_label',
    'contacts_selected_delete',
    'contacts_selected_remove_from_group',
    'contacts_sidebar_add_contact_header',
    'contacts_upload_generic_error',
    'contacts_warn_delete_failure_body',
    'csv_upload_contacts',
    'dashboard_company_cancel_label',
    'dashboard_company_edit_label',
    'dashboard_company_name_title',
    'dashboard_company_null_label',
    'dashboard_company_submit_label',
    'dashboard_edit_company_list_label',
    'dashboard_edit_company_name_label',
    'dashboard_enter_gift_button',
    'dashboard_opted_out_warn',
    'dashboard_opted_out_action',
    'data_table_contacts_per_page',
    'dialog_acknowledge_label',
    'dialog_delete_label',
    'dialog_save_label',
    'donations_heading',
    'donations_no_donations_found',
    'drafts_confirm_delete_body',
    'drafts_confirm_delete_header',
    'drafts_drafts_label',
    'drafts_no_drafts_found',
    'email_compose_use_template_label',
    'email_template_radio_custom_label',
    'email_template_radio_other_label',
    'email_template_radio_recruit_label',
    'email_template_radio_solicit_label',
    'email_template_radio_thanks_label',
    'facebook_error',
    'facebook_fundraiser_connect_button',
    'facebook_fundraiser_connect_error',
    'facebook_fundraiser_connect_loading',
    'facebook_fundraiser_connect_headline_1',
    'facebook_fundraiser_connect_headline_2',
    'facebook_fundraiser_connect_perm_error',
    'facebook_fundraiser_connect_text_1',
    'facebook_fundraiser_connect_text_2',
    'facebook_fundraiser_connect_text_3',
    'facebook_info_body',
    'facebook_info_copy',
    'facebook_info_header',
    'facebook_info_link',
    'filter_email_rpt_show_donors',
    'filter_email_rpt_show_ly_donors',
    'filter_email_rpt_show_lybunt_donors',
    'filter_email_rpt_show_ly_teammates',
    'filter_email_rpt_show_ly_unreg_teammates',
    'filter_email_rpt_show_never_emailed',
    'filter_email_rpt_show_nondonors',
    'filter_email_rpt_show_nondonors_followup',
    'filter_email_rpt_show_nonteammates',
    'filter_email_rpt_show_teammates',
    'filter_email_rpt_show_unthanked_donors',
    'gift_action_acknowledge_title',
    'gift_action_delete_title',
    'gift_action_no_action_title',
    'gift_action_thank_donor_title',
    'gift_add_another_button_label',
    'gift_add_button_label',
    'gift_addl_options_label',
    'gift_amount_label',
    'gift_billing_city_label',
    'gift_billing_first_name_label',
    'gift_billing_last_name_label',
    'gift_billing_state_label',
    'gift_billing_street1_label',
    'gift_billing_street2_label',
    'gift_billing_zip_label',
    'gift_check_number_label',
    'gift_city_label',
    'gift_confirm_delete_body',
    'gift_confirm_delete_header',
    'gift_credit_card_number_label',
    'gift_credit_expiration_date_label',
    'gift_credit_verification_code_label',
    'gift_display_personal_page_label',
    'gift_email_label',
    'gift_first_name_label',
    'gift_gift_category_label',
    'gift_last_name_label',
    'gift_payment_type_cash',
    'gift_payment_type_check',
    'gift_payment_type_credit',
    'gift_payment_type_label',
    'gift_payment_type_later',
    'gift_recongition_name_label',
    'gift_record_team_gift',
    'gift_state_label',
    'gift_street1_label',
    'gift_street2_label',
    'gift_submission_error',
    'gift_submit_success',
    'gift_zip_label',
    'goal_edit_goal',
    'goal_goal',
    'groups_add_group_button',
    'groups_dialog_add_group_header',
    'hdr_logout_link',
    'hdr_profile_link',
    'login_required',
    'manage_join_team_password_desc',
    'manage_membership_captain_first_name',
    'manage_membership_captain_last_name',
    'manage_membership_continue_button',
    'manage_membership_find_team',
    'manage_membership_keep_current_radio_text',
    'manage_membership_leave_team_success',
    'manage_membership_leave_team_unexpected_error',
    'manage_membership_join_team',
    'manage_membership_join_team_password_label',
    'manage_membership_join_team_radio_text',
    'manage_membership_join_team_success',
    'manage_membership_join_team_unexpected_error',
    'manage_membership_label',
    'manage_membership_leave_team_explanation_text',
    'manage_membership_leave_team_radio_text',
    'manage_membership_search_button',
    'manage_membership_search_captain_name_min_chars',
    'manage_membership_search_failure',
    'manage_membership_search_result_captain_label',
    'manage_membership_search_result_company_label',
    'manage_membership_search_results',
    'manage_membership_team_company',
    'manage_membership_team_name',
    'manage_membership_team_search_results_count',
    'manage_membership_team_search_results_found',
    'manage_membership_team_search_results_hint',
    'manage_team_captains_header',
    'me_tab',
    'message_send_success',
    'message_template_delete_success',
    'message_template_save_success',
    'my_company_tab',
    'my_team_tab',
    'nav_event_options',
    'nav_help_link',
    'nav_manage_privacy_settings_link',
    'nav_messaging',
    'nav_overview',
    'nav_public_page',
    'nav_survey_questions',
    'nav_team_page',
    'old_password',
    'participant_badge_description',
    'participant_badges',
    'password',
    'password_update_success',
    'personal_goal_unexpected_error',
    'personal_goal_update_success',
    'personal_page_content_save',
    'personal_page_edit_content',
    'personal_page_edit_description',
    'personal_page_edit_media',
    'personal_page_message_body',
    'personal_page_permalink',
    'personal_page_photo_video_select_label',
    'personal_page_photos_label',
    'personal_page_save_failure',
    'personal_page_save_success',
    'personal_page_title',
    'personal_page_privacy_prefix_desc',
    'personal_page_privacy_private_desc',
    'personal_page_privacy_private_label',
    'personal_page_privacy_public_desc',
    'personal_page_privacy_public_label',
    'personal_page_privacy_save_success',
    'personal_page_save',
    'personal_page_save_success',
    'personal_page_shortcut_edit',
    'personal_page_shortcut_save',
    'personal_preview_close_label',
    'personal_video_url_example_label',
    'personal_video_url_generic_error',
    'personal_video_url_label',
    'personal_video_url_save_button_label',
    'personal_video_url_saved',
    'photo_rotate_left',
    'photo_rotate_right',
    'photo_upload_button_label',
    'photo_upload_caption_label',
    'photo_upload_generic_error',
    'photo_upload_image_types',
    'photo_upload_or_label',
    'photo_upload_remove_label',
    'photo_upload_select_file',
    'photo_upload_success',
    'photo_upload2_caption_label',
    'photo_upload2_or_label',
    'photo_upload2_remove_label',
    'photo_upload2_select_file',
    'photo_upload2_success',
    'privacy_options_hdr',
    'privacy_settings_anonymous_option',
    'privacy_settings_radio_label',
    'privacy_settings_screenname_option',
    'privacy_settings_standard_option',
    'privacy_settings_success',
    'profile_reset_button',
    'profile_update_button',
    'profile_update_required_error',
    'profile_update_success',
    'profile_update_unexpected_error',
    'progress_bar_title',
    'progress_team_progress',
    'recent_activity_header',
    'report_personal_donations_download',
    'sent_message_body_label',
    'sent_message_date_label',
    'sent_message_forward_label',
    'sent_message_subject_label',
    'sent_message_to_label',
    'sent_no_sent_messages_found',
    'sent_sent_message_label',
    'sent_sent_messages_label',
    'session_timeout_continue_working',
    'session_timeout_expiring_content1',
    'session_timeout_expiring_content2',
    'session_timeout_header',
    'session_timeout_log_back_in',
    'session_timeout_log_out',
    'session_timeout_minute',
    'session_timeout_minute_less_than_one',
    'session_timeout_minutes',
    'shortcut_save_failure',
    'shortcut_save_success',
    'social_share_link_text',
    'subnav_edit_survey_responses',
    'subnav_manage_captains',
    'survey_no_questions',
    'survey_save_failure',
    'survey_save_responses_button',
    'survey_save_success',
    'team_badge_description',
    'team_badges',
    'team_captains_current_info',
    'team_captains_failure_maximum',
    'team_captains_failure_minimum',
    'team_captains_maximum_info',
    'team_donations_heading',
    'team_edit_team_name_label',
    'team_goal_edit_goal',
    'team_goal_goal',
    'team_goal_unexpected_error',
    'team_goal_update_success',
    'team_name_update_success',
    'team_name_update_unexpected_error',
    'team_page_edit_content',
    'team_page_edit_description',
    'team_page_edit_photo',
    'team_page_message_body',
    'team_page_permalink',
    'team_page_photo',
    'team_page_save',
    'team_page_save_failure',
    'team_page_save_success',
    'team_page_shortcut_cancel',
    'team_page_shortcut_edit',
    'team_page_shortcut_edit2',
    'team_page_shortcut_save',
    'team_password_edit_label',
    'team_password_label',
    'team_password_update_success',
    'team_password_update_unexpected_error',
    'team_photo_upload_button_label',
    'team_photo_upload_caption_label',
    'team_photo_upload_generic_error',
    'team_photo_upload_image_types',
    'team_photo_upload_or_label',
    'team_photo_upload_remove_label',
    'team_photo_upload_select_file',
    'team_photo_upload_success',
    'team_report_team_donations_download',
    'team_report_team_members_download',
    'team_roster_heading',
    'teampage_shortcut_save_failure',
    'teampage_shortcut_save_success',
    'use_media_type_photos_label',
    'use_media_type_video_label',
    'user_name',
    'what_next_add_contacts_header',
    'what_next_followup_header',
    'what_next_question',
    'what_next_reach_out_header',
    'what_next_send_email_header',
    'what_next_send_thanks_header',
    'what_next_set_goal_header',
    'what_next_setup_your_personal_page_header']
      };
      return $translateProvider.useLoader('useMessageCatalog',
    {
        messages: [loginMessages,
    trpcMessages]
      });
    }
  ]);

  angular.module('trPcApp').config([
    '$uibModalProvider',
    function($uibModalProvider) {
      return angular.extend($uibModalProvider.options,
    {
        appendTo: angular.element('#ng_pc_container'),
        windowClass: 'ng-pc-modal'
      });
    }
  ]);

  angular.module('trPcApp').factory('AuthService', [
    '$rootScope',
    'LuminateRESTService',
    'LuminateUtilsService',
    function($rootScope,
    LuminateRESTService,
    LuminateUtilsService) {
      return {
        getLoginState: function() {
          return LuminateRESTService.consRequest('loginTest').then(function(response) {
            var ref,
    ref1;
            if (response.data.errorResponse && ((ref = response.data.errorResponse.code) === '200' || ref === '201' || ref === '202' || ref === '204')) {
              $rootScope.consId = -1;
              $rootScope.showLoginModal();
            } else {
              $rootScope.consId = ((ref1 = response.data.loginResponse) != null ? ref1.cons_id : void 0) || -1;
            }
            return response;
          });
        },
        getAuthToken: function() {
          return LuminateRESTService.consRequest('getLoginUrl').then(function(response) {
            var ref,
    ref1,
    ref2;
            $rootScope.routingId = LuminateUtilsService.setRoutingId((ref = response.data.getLoginUrlResponse) != null ? ref.routing_id : void 0);
            $rootScope.jsessionId = LuminateUtilsService.setSessionId((ref1 = response.data.getLoginUrlResponse) != null ? ref1.JSESSIONID : void 0);
            $rootScope.authToken = LuminateUtilsService.setAuth((ref2 = response.data.getLoginUrlResponse) != null ? ref2.token : void 0);
            return response;
          });
        },
        login: function(requestData) {
          return LuminateRESTService.consRequest('login',
    requestData).then(function(response) {
            var ref;
            $rootScope.consId = ((ref = response.data.loginResponse) != null ? ref.cons_id : void 0) || -1;
            delete $rootScope.authToken;
            return response;
          });
        },
        logout: function() {
          var logoutUrl,
    nextUrl;
          nextUrl = 'TR?pg=entry&fr_id=' + LuminateUtilsService.getFrId();
          logoutUrl = LuminateUtilsService.getBaseUrl() + 'UserLogin?logout=true&NEXTURL=' + encodeURIComponent(nextUrl);
          return LuminateRESTService.consRequest('logout').then(function(response) {
            delete $rootScope.consId;
            delete $rootScope.authToken;
            if (LuminateUtilsService.isIFrameDetected()) {
              window.parent.location.href = logoutUrl;
            } else {
              window.location.href = logoutUrl;
            }
            return response;
          });
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('ConstituentService', [
    'LuminateRESTService',
    function(LuminateRESTService) {
      return {
        getUser: function() {
          return LuminateRESTService.consRequest('getUser',
    null,
    true).then(function(response) {
            return response;
          });
        },
        listInteractions: function(requestData) {
          return LuminateRESTService.consRequest('listUserFields',
    requestData).then(function(response) {
            return response;
          });
        },
        listUserFields: function(requestData) {
          var dataString;
          dataString = 'include_choices=true';
          if (requestData && requestData !== '') {
            dataString += '&' + requestData;
          }
          return LuminateRESTService.consRequest('listUserFields',
    dataString).then(function(response) {
            return response;
          });
        },
        listUserFieldChoices: function(requestData) {
          var dataString;
          dataString = 'field=';
          if (requestData && requestData !== '') {
            dataString += requestData;
          }
          return LuminateRESTService.consRequest('listUserFieldChoices',
    dataString).then(function(response) {
            return response;
          });
        },
        logInteraction: function(requestData) {
          return LuminateRESTService.consRequest('logSocialShare',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        logSocialShare: function(requestData) {
          return LuminateRESTService.consRequest('logSocialShare',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        update: function(requestData) {
          return LuminateRESTService.consRequest('update',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        changePassword: function(requestData) {
          return LuminateRESTService.consRequest('changePassword',
    requestData,
    true).then(function(response) {
            return response;
          });
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('ContactService', [
    '$rootScope',
    'LuminateRESTService',
    function($rootScope,
    LuminateRESTService) {
      return {
        addAddressBookContact: function(requestData) {
          return LuminateRESTService.addressBookRequest('addAddressBookContact',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        addAddressBookGroup: function(requestData) {
          return LuminateRESTService.addressBookRequest('addAddressBookGroup',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        addContactsToGroup: function(requestData) {
          return LuminateRESTService.addressBookRequest('addContactsToGroup',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        addressBookImportOAuthCallback: function(requestData) {
          return LuminateRESTService.addressBookRequest('addressBookImportOAuthCallback',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        deleteAddressBookGroups: function(requestData) {
          return LuminateRESTService.addressBookRequest('deleteAddressBookGroups',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        getAddressBookGroups: function(requestData) {
          return LuminateRESTService.addressBookRequest('getAddressBookGroups',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        getAddressBookImportJobStatus: function(requestData) {
          return LuminateRESTService.addressBookRequest('getAddressBookImportJobStatus',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        getAddressBookImportContacts: function(requestData) {
          return LuminateRESTService.addressBookRequest('getAddressBookImportContacts',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        importAddressBookContacts: function(requestData) {
          return LuminateRESTService.addressBookRequest('importAddressBookContacts',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        parseCsvContacts: function(requestFormData) {
          var formData;
          if (requestFormData) {
            formData = requestFormData;
          } else {
            formData = new FormData;
          }
          return LuminateRESTService.addressBookFormRequest('parseCsvContacts',
    formData,
    true).then(function(response) {
            return response;
          });
        },
        removeContactFromGroup: function(requestData) {
          return LuminateRESTService.addressBookRequest('removeContactFromGroup',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        startOnlineAddressBookImport: function(requestData) {
          return LuminateRESTService.addressBookRequest('startOnlineAddressBookImport',
    requestData,
    true).then(function(response) {
            return response;
          });
        },
        deleteTeamraiserAddressBookContacts: function(requestData) {
          return LuminateRESTService.teamraiserRequest('deleteTeamraiserAddressBookContacts',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getTeamraiserAddressBookContact: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getTeamraiserAddressBookContact',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getTeamraiserAddressBookContacts: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getTeamraiserAddressBookContacts',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getTeamraiserAddressBookFilters: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getTeamraiserAddressBookFilters',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getTeamraiserAddressBookGroupContacts: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getTeamraiserAddressBookGroupContacts',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateTeamraiserAddressBookContact: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updateTeamraiserAddressBookContact',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getContactString: function(contact) {
          var contactData;
          contactData = '';
          if (contact.firstName) {
            contactData += contact.firstName;
          }
          if (contact.lastName) {
            if (contactData !== '') {
              contactData += ' ';
            }
            contactData += contact.lastName;
          }
          if (contact.email) {
            if (contactData !== '') {
              contactData += ' ';
            }
            contactData += '<' + contact.email + '>';
          }
          return contactData;
        },
        resetSelectedContacts: function() {
          return $rootScope.selectedContacts = {
            contacts: []
          };
        },
        getNumSelectedContacts: function() {
          var ref;
          if (!((ref = $rootScope.selectedContacts) != null ? ref.contacts : void 0)) {
            this.resetSelectedContacts();
          }
          return $rootScope.selectedContacts.contacts.length;
        },
        isInSelectedContacts: function(testContact) {
          var found;
          found = false;
          if ((testContact != null) && (testContact.id != null)) {
            angular.forEach($rootScope.selectedContacts.contacts,
    function(contact) {
              if ((contact != null) && contact.id === testContact.id) {
                return found = true;
              }
            });
          }
          return found;
        },
        addToSelectedContacts: function(addContact) {
          if (!this.isInSelectedContacts(addContact)) {
            $rootScope.selectedContacts.contacts.push(addContact);
          }
          return addContact;
        },
        removeFromSelectedContacts: function(removeContact) {
          var ind;
          ind = -1;
          if ((removeContact != null) && (removeContact.id != null)) {
            angular.forEach($rootScope.selectedContacts.contacts,
    function(contact,
    key) {
              if ((contact != null) && contact.id === removeContact.id) {
                return ind = key;
              }
            });
            if (ind >= 0) {
              $rootScope.selectedContacts.contacts.splice(ind,
    1);
            }
          }
          return removeContact;
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('ContentService', [
    'LuminateRESTService',
    function(LuminateRESTService) {
      return {
        getMessageBundle: function(requestData) {
          return LuminateRESTService.contentRequest('getMessageBundle',
    requestData,
    false).then(function(response) {
            return response;
          });
        },
        listSupportedLocales: function() {
          return LuminateRESTService.contentRequest('listSupportedLocales',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        renderSTag: function(stag) {
          var dataString;
          if (stag && stag !== '') {
            dataString = 'content=' + encodeURIComponent(stag);
            return LuminateRESTService.contentRequest('getTagInfo',
    dataString,
    true).then(function(response) {
              return response;
            });
          }
        },
        richTextToPlainText: function(richText) {
          var $tempElem;
          $tempElem = jQuery('<div>' + richText + '</div>');
          $tempElem.find('*').each(function(wildcardElemIndex,
    wildcardElem) {
            return jQuery(wildcardElem).html(jQuery(wildcardElem).html().replace(/(?:\r\n|\r|\n)/g,
    ' '));
          });
          $tempElem.find('br').each(function(lineBreakIndex,
    lineBreak) {
            return jQuery(lineBreak).replaceWith('\n');
          });
          $tempElem.find('ul, ol').each(function(orderedListIndex,
    orderedList) {
            return jQuery(orderedList).find('li').each(function(listItemIndex,
    listItem) {
              var listItemAppend,
    listItemPrepend;
              listItemPrepend = '* ';
              listItemAppend = '';
              if (jQuery(listItem).is('ol li')) {
                listItemPrepend = (listItemIndex + 1) + '. ';
              }
              if (jQuery(listItem).next('li').length > 0) {
                listItemAppend = '\n';
              }
              return jQuery(listItem).html(listItemPrepend + jQuery(listItem).html() + listItemAppend);
            });
          });
          $tempElem.find('p, ul, ol').each(function(blockLevelElemIndex,
    blockLevelElem) {
            var blockLevelElemAppend;
            blockLevelElemAppend = '';
            if (jQuery(blockLevelElem).next('*').length > 0) {
              blockLevelElemAppend = '\n\n';
            }
            return jQuery(blockLevelElem).html(jQuery(blockLevelElem).html() + blockLevelElemAppend);
          });
          return jQuery.trim($tempElem.text());
        },
        htmlToRichText: function(htmlContent) {
          var $tempElem,
    temp_content;
          $tempElem = jQuery('<div />',
    {
            html: htmlContent
          });
          temp_content = $tempElem.html().replace(/<\/?[A-Z]+.*?>/g,
    function(m) {
            return m.toLowerCase();
          }).replace(/<font>/g,
    '<span>').replace(/<font /g,
    '<span ').replace(/<\/font>/g,
    '</span>').replace(/<b>/g,
    '<strong>').replace(/<b /g,
    '<strong ').replace(/<\/b>/g,
    '</strong>').replace(/<i>/g,
    '<em>').replace(/<i /g,
    '<em ').replace(/<\/i>/g,
    '</em>').replace(/<u>/g,
    '<span style="text-decoration: underline;">').replace(/<u /g,
    '<span style="text-decoration: underline;" ').replace(/<\/u>/g,
    '</span>').replace(/[\u00A0-\u9999\&]/gm,
    function(i) {
            return '&#' + i.charCodeAt(0) + ';';
          }).replace(/&#38;/g,
    '&').replace(/<!--[\s\S]*?-->/g,
    '');
          return temp_content;
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('useMessageCatalog', [
    '$q',
    '$rootScope',
    'ContentService',
    'LuminateUtilsService',
    function($q,
    $rootScope,
    ContentService,
    LuminateUtilsService) {
      return function(options) {
        var deferred,
    j,
    len,
    loadMsgCat,
    message,
    promises,
    ref;
        deferred = $q.defer();
        loadMsgCat = function(data) {
          var dataStr,
    ref;
          if (!(data != null ? data.keys : void 0) || !angular.isArray(data.keys)) {
            throw new Error("Couldn't load message catalog bundle, no keys specified");
          }
          dataStr = 'bundle=';
          if (data != null ? data.bundle : void 0) {
            dataStr += data.bundle;
          } else {
            dataStr += 'trpc';
          }
          if ((data != null ? data.keys : void 0) && angular.isArray(data.keys)) {
            dataStr += '&keys=' + (data != null ? (ref = data.keys) != null ? ref.toString() : void 0 : void 0);
          }
          return ContentService.getMessageBundle(dataStr).then(function(response) {
            var j,
    len,
    messageBundle,
    messageValues,
    msg,
    ref1,
    ref2,
    stripHtml;
            messageBundle = {};
            stripHtml = function(text) {
              if (!!text) {
                return String(text).replace(/<[^>]+>/gm,
    '').replace(/&nbsp;/gm,
    ' ');
              }
            };
            if (response != null ? (ref1 = response.data) != null ? (ref2 = ref1.getMessageBundleResponse) != null ? ref2.values : void 0 : void 0 : void 0) {
              messageValues = LuminateUtilsService.ensureArray(response.data.getMessageBundleResponse.values);
              for (j = 0, len = messageValues.length; j < len; j++) {
                msg = messageValues[j];
                messageBundle[msg.key] = stripHtml(msg.value);
              }
            }
            return messageBundle;
          });
        };
        if ((options != null ? options.messages : void 0) && angular.isArray(options.messages)) {
          promises = [];
          ref = options.messages;
          for (j = 0, len = ref.length; j < len; j++) {
            message = ref[j];
            promises.push(loadMsgCat(message));
          }
          $q.all(promises).then(function(data) {
            var k,
    len1,
    mergeData,
    resp;
            mergeData = {};
            for (k = 0, len1 = data.length; k < len1; k++) {
              resp = data[k];
              angular.extend(mergeData,
    resp);
            }
            $rootScope.translationsLoaded = true;
            return deferred.resolve(mergeData);
          });
        } else {
          throw new Error("Couldn't load messages using message catalog, no messages provided.");
          deferred.reject(options.key);
        }
        return deferred.promise;
      };
    }
  ]);

  angular.module('trPcApp').factory('LocaleService', [
    '$rootScope',
    '$cookies',
    '$translate',
    function($rootScope,
    $cookies,
    $translate) {
      return {
        getLocale: function() {
          var locale;
          locale = $cookies.get('locale');
          if (locale && locale !== '') {
            return locale;
          } else {
            return 'en_US';
          }
        },
        setLocale: function(newLocaleValue) {
          if (newLocaleValue && newLocaleValue !== null) {
            $cookies.put('locale',
    newLocaleValue,
    {
              path: '/'
            });
          }
          $rootScope.locale = this.getLocale();
          return $translate.use($rootScope.locale);
        },
        isLocaleChanged: function() {
          var localeChanged;
          localeChanged = $cookies.get('localeChanged');
          return localeChanged === 'true';
        },
        setLocaleChanged: function(changed) {
          return $cookies.put('localeChanged',
    changed);
        },
        getCurrencyLocale: function() {
          var currencyLocale;
          currencyLocale = $cookies.get('currency_locale');
          if (currencyLocale && currencyLocale !== '' && currencyLocale !== 'null' && currencyLocale !== 'USER') {
            return currencyLocale;
          } else {
            return this.getLocale();
          }
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('LuminateRESTService', [
    '$rootScope',
    '$q',
    '$http',
    '$document',
    '$timeout',
    '$uibModal',
    'LuminateUtilsService',
    function($rootScope,
    $q,
    $http,
    $document,
    $timeout,
    $uibModal,
    LuminateUtilsService) {
      return {
        request: function(apiServlet,
    method,
    requestData,
    includeAuth,
    includeFrId,
    contentType) {
          var requestDetails,
    requestFormData,
    requestProperties,
    requestUrl;
          if (!apiServlet) {
            return this.errorResponse('PC3: API request with no servlet provided');
          } else if (!method) {
            return this.errorResponse('PC3: API request for ' + apiServlet + ' with no method provided');
          } else if (!$rootScope.version) {
            return $timeout(function(scope) {
              return scope.request(apiServlet,
    method,
    requestData,
    includeAuth,
    includeFrId,
    contentType);
            },
    100,
    true,
    this);
          } else {
            requestDetails = {
              apiServlet: apiServlet,
              method: method
            };
            if (!$rootScope.apiKey) {
              $rootScope.apiKey = LuminateUtilsService.getApiKey();
              if (!$rootScope.apiKey) {
                this.errorResponse('PC3: No Luminate Online API Key is defined.');
                return LuminateUtilsService.reloadServlet();
              } else {
                return this.request(apiServlet,
    method,
    requestData,
    includeAuth,
    includeFrId,
    contentType);
              }
            } else {
              if (requestData && requestData !== '') {
                requestDetails.requestData = requestData;
                if (contentType === 'multipart/form-data') {
                  requestFormData = requestData;
                  requestFormData.append('method',
    method);
                  requestData = '';
                } else {
                  contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
                  requestData = 'method=' + method + '&' + requestData + '&';
                }
              } else {
                requestData = 'method=' + method + '&';
                contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
              }
              requestDetails.contentType = contentType;
              requestData += 'v=1.0&api_key=' + $rootScope.apiKey + '&response_format=json&suppress_response_codes=true';
              if (includeAuth && !$rootScope.authToken) {
                $rootScope.authToken = LuminateUtilsService.getAuth();
                if (!$rootScope.authToken) {
                  this.errorResponse('PC3: No Luminate Online auth token is defined.');
                  return LuminateUtilsService.reloadServlet();
                }
              } else {
                requestUrl = LuminateUtilsService.getBaseUrl() + apiServlet;
                if ($rootScope.routingId) {
                  requestUrl += ';jsessionid=' + $rootScope.routingId;
                }
                if ($rootScope.jsessionId) {
                  requestData += '&JSESSIONID=' + $rootScope.jsessionId;
                }
                if (includeAuth) {
                  requestData += '&auth=' + $rootScope.authToken;
                }
                if (includeFrId) {
                  requestData += '&fr_id=' + $rootScope.frId + '&s_trID=' + $rootScope.frId;
                  requestDetails.frId = $rootScope.frId;
                }
                if ($rootScope.locale) {
                  requestData += '&s_locale=' + $rootScope.locale;
                }
                if ($rootScope.version) {
                  requestData += '&pc3_version=' + $rootScope.version;
                }
                if (requestFormData) {
                  angular.forEach(requestData.split('&'),
    function(requestDataKeyVal) {
                    var requestDataKey,
    requestDataKeyValParts,
    requestDataVal;
                    requestDataKeyValParts = requestDataKeyVal.split('=');
                    requestDataKey = requestDataKeyValParts[0];
                    requestDataVal = requestDataKeyValParts[1] || '';
                    return requestFormData.append(requestDataKey,
    requestDataVal);
                  });
                }
                requestProperties = {
                  method: 'POST',
                  url: requestUrl,
                  data: requestFormData ? requestFormData : requestData,
                  headers: {
                    'Content-Type': contentType === 'multipart/form-data' ? void 0 : contentType
                  },
                  withCredentials: true
                };
                if (contentType === 'multipart/form-data') {
                  requestProperties.transformRequest = angular.identity;
                }
                return $http(requestProperties).then(function(response) {
                  // TODO: check for error code 204 except for when method is login, 2603 except for when method is getRegistration
                  if (response.data.errorResponse && ['3',
    '5',
    '14',
    '2604'].indexOf(response.data.errorResponse.code) !== -1) {
                    $rootScope.showLoginModal();
                    return $q.reject();
                  } else {
                    if ($rootScope.keepAliveTimer) {
                      $timeout.cancel($rootScope.keepAliveTimer);
                    }
                    $rootScope.keepAliveTimer = $timeout(function() {
                      $rootScope.keepAliveModal = $uibModal.open({
                        scope: $rootScope,
                        backdrop: 'static',
                        templateUrl: './html/modal/keepAlive.html'
                      });
                      return $rootScope.keepAliveModal.rendered.then(function() {
                        LuminateUtilsService.adjustModalFramePosition();
                        if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
                          return ngLoadModal($rootScope,
    $rootScope,
    'keepAlive');
                        }
                      });
                    },
    LuminateUtilsService.getTimeoutWarning());
                    if (window.ngCustomCallback && angular.isFunction(ngCustomCallback)) {
                      response.data = ngCustomCallback($rootScope,
    requestDetails,
    response.data);
                    }
                    return response;
                  }
                });
              }
            }
          }
        },
        errorResponse: function(errorMessage) {
          var deferred;
          deferred = $q.defer();
          throw new Error(errorMessage);
          $timeout(function() {
            return deferred.reject(errorMessage);
          },
    100);
          return deferred.promise;
        },
        getPageContent: function(pbPageName,
    useCache,
    additionalArguments) {
          var dataString,
    deferred;
          if (!$rootScope.pageBuilderCache) {
            $rootScope.pageBuilderCache = {};
          }
          if (useCache && $rootScope.pageBuilderCache[pbPageName]) {
            deferred = $q.defer();
            deferred.resolve($rootScope.pageBuilderCache[pbPageName]);
            return deferred.promise;
          } else {
            dataString = 'pagename=getPageBuilderPageContent&pgwrap=n';
            if (pbPageName) {
              dataString += '&pb_page_name=' + pbPageName;
            }
            if (additionalArguments) {
              dataString += '&' + additionalArguments;
            }
            return $http({
              method: 'GET',
              url: '../site/SPageServer?' + dataString,
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
              }
            }).then(function(response) {
              if (pbPageName) {
                $rootScope.pageBuilderCache[pbPageName] = response;
                return response;
              }
            });
          }
        },
        loadScript: function(url) {
          var deferred,
    document,
    scriptTag;
          deferred = $q.defer();
          document = $document[0];
          scriptTag = document.createElement('script');
          scriptTag.src = url;
          scriptTag.type = 'text/javascript';
          scriptTag.onload = function(e) {
            return $timeout(function() {
              return deferred.resolve(e);
            });
          };
          scriptTag.onreadystatechange = function(e) {
            if (this.readyState) {
              if (this.readyState === 'complete' || this.readyState === 'loaded') {
                return $timeout(function() {
                  return deferred.resolve(e);
                });
              }
            }
          };
          scriptTag.onerror = function(e) {
            return $timeout(function() {
              return deferred.reject(e);
            });
          };
          document.body.appendChild(scriptTag);
          return deferred.promise;
        },
        addressBookRequest: function(method,
    requestData,
    includeAuth) {
          return this.request('CRAddressBookAPI',
    method,
    requestData,
    includeAuth,
    false,
    null);
        },
        addressBookFormRequest: function(method,
    requestFormData,
    includeAuth) {
          return this.request('CRAddressBookAPI',
    method,
    requestFormData,
    includeAuth,
    false,
    'multipart/form-data');
        },
        consRequest: function(method,
    requestData,
    includeAuth) {
          return this.request('CRConsAPI',
    method,
    requestData,
    includeAuth,
    false,
    null);
        },
        contentRequest: function(method,
    requestData,
    includeAuth) {
          return this.request('CRContentAPI',
    method,
    requestData,
    includeAuth,
    false,
    null);
        },
        teamraiserRequest: function(method,
    requestData,
    includeAuth,
    includeFrId) {
          return this.request('CRTeamraiserAPI',
    method,
    requestData,
    includeAuth,
    includeFrId,
    null);
        },
        teamraiserFormRequest: function(method,
    requestFormData,
    includeAuth,
    includeFrId) {
          return this.request('CRTeamraiserAPI',
    method,
    requestFormData,
    includeAuth,
    includeFrId,
    'multipart/form-data');
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('LuminateUtilsService', [
    '$rootScope',
    '$cookies',
    function($rootScope,
    $cookies) {
      return {
        ensureArray: function(data) {
          if (angular.isArray(data)) {
            return data;
          } else if (data) {
            return [data];
          } else {
            return [];
          }
        },
        ensureString: function(data) {
          if (angular.isString(data)) {
            return data;
          } else {
            return '';
          }
        },
        getAuth: function() {
          var auth;
          auth = $cookies.get('auth');
          if (auth && auth !== '') {
            return auth;
          } else {
            return null;
          }
        },
        setAuth: function(authToken) {
          if (authToken && authToken !== '') {
            $cookies.remove('auth');
            $cookies.put('auth',
    authToken,
    {
              path: '/'
            });
          }
          return authToken;
        },
        getApiKey: function() {
          var apiKey;
          apiKey = $cookies.get('apiKey');
          if (apiKey && apiKey !== '') {
            return apiKey;
          } else {
            return null;
          }
        },
        getBaseUrl: function() {
          var baseUrl;
          baseUrl = $cookies.get('baseUrl');
          if (baseUrl && baseUrl !== '') {
            return baseUrl;
          } else {
            return null;
          }
        },
        getFrId: function() {
          var frId;
          frId = $cookies.get('frId');
          if (frId && frId !== '') {
            return frId;
          } else {
            return null;
          }
        },
        isJanrainEnabled: function() {
          var janrainEnabled;
          janrainEnabled = $cookies.get('janrainEnabled');
          if (janrainEnabled && janrainEnabled !== '') {
            return janrainEnabled === "true";
          } else {
            return false;
          }
        },
        getJanrainEngageAppName: function() {
          var janrainEngageAppName;
          janrainEngageAppName = $cookies.get('janrainEngageAppName');
          if (janrainEngageAppName && janrainEngageAppName !== '') {
            return janrainEngageAppName;
          } else {
            return '';
          }
        },
        getJanrainShareProviders: function() {
          var error,
    janrainShareProviders;
          try {
            janrainShareProviders = JSON.parse(atob($cookies.get('janrainShareProviders')));
          } catch (error1) {
            error = error1;
            //#          console.log 'janrainShareProviders cookie error: %s', error
            janrainShareProviders = ['native-facebook',
    'native-googleplus',
    'native-pinterest',
    'native-reddit',
    'native-tumblr',
    'native-twitter'];
          }
          return janrainShareProviders;
        },
        getSecurePath: function() {
          var securePath;
          securePath = $cookies.get('securePath');
          if (securePath && securePath !== '') {
            return securePath;
          } else {
            return null;
          }
        },
        isIFrameDetected: function() {
          return window.parent !== window.self;
        },
        resizeFrameForCurrentView: function() {
          var iFrameDocumentBody,
    iFrameElement,
    viewableHeightForIFrameContent;
          if (window.parent !== window.self) {
            iFrameDocumentBody = document.body;
            viewableHeightForIFrameContent = iFrameDocumentBody.offsetHeight + 20;
            iFrameElement = window.parent.document.getElementById('embeddedParticipantCenter');
            iFrameElement.width = "100%";
            if (iFrameElement && iFrameElement.height !== viewableHeightForIFrameContent) {
              iFrameElement.height = viewableHeightForIFrameContent;
            }
          }
          return window.parent !== window.self;
        },
        adjustModalFramePosition: function() {
          var modalDialog;
          if (window.parent !== window.self) {
            modalDialog = angular.element('body').find('.ng-pc-modal .modal-dialog');
            if (modalDialog) {
              modalDialog.css('top',
    window.top.scrollY);
            }
          }
          return window.parent !== window.self;
        },
        reloadServlet: function() {
          var dest;
          dest = location.origin;
          dest += location.pathname.substring(0,
    location.pathname.lastIndexOf('/') + 1);
          dest += '../site/TRC';
          dest += location.search.replace('pc2_page=center',
    'pg=center');
          if (location.hostname === '0.0.0.0') {
            throw new Error('Reload servlet ignored for testing, destination: ' + dest);
          } else if (window.parent !== window.self) {
            return window.open(dest,
    '_parent');
          } else {
            return window.open(dest,
    '_self');
          }
        },
        returnToGreeting: function() {
          var dest;
          dest = location.origin;
          dest += location.pathname.substring(0,
    location.pathname.lastIndexOf('/') + 1);
          dest += '../site/TR';
          dest += location.search.replace('pc2_page=center',
    'pg=entry');
          if (location.hostname === '0.0.0.0') {
            throw new Error('Return to Greeting ignored for testing, destination: ' + dest);
          } else if (window.parent !== window.self) {
            return window.open(dest,
    '_parent');
          } else {
            return window.open(dest,
    '_self');
          }
        },
        //# Used by KeepAliveService
        isPcCookieLoginEnabled: function() {
          var pcCookieLoginEnabled;
          pcCookieLoginEnabled = $cookies.get('pcCookieLoginEnabled');
          if (pcCookieLoginEnabled && pcCookieLoginEnabled !== '') {
            return pcCookieLoginEnabled === "true";
          } else {
            return null;
          }
        },
        getLoginCookie: function() {
          var loginCookie;
          loginCookie = $cookies.get('CV_LOGIN_');
          if (loginCookie && loginCookie !== '') {
            return loginCookie;
          } else {
            return null;
          }
        },
        getTimeoutWarning: function() {
          var timeoutWarning;
          timeoutWarning = $cookies.get('timeoutWarning');
          if (timeoutWarning && timeoutWarning !== '') {
            return parseInt(timeoutWarning);
          } else {
            return 900 * 1000; //# default to 15 minutes
          }
        },
        getTimeoutExpiration: function() {
          var timeoutExpiration;
          timeoutExpiration = $cookies.get('timeoutExpiration');
          if (timeoutExpiration && timeoutExpiration !== '') {
            return parseInt(timeoutExpiration);
          } else {
            return 1200 * 1000; //# default to 20 minutes
          }
        },
        
        //# Unused below
        isLoggingEnabled: function() {
          var debugEnabled;
          debugEnabled = $cookies.get('debug');
          return debugEnabled === 'true';
        },
        getSessionKey: function() {
          var sessionKey;
          sessionKey = $cookies.get('sessionKey');
          if (sessionKey && sessionKey !== '') {
            return sessionKey.toUpperCase();
          } else {
            return null;
          }
        },
        getSessionId: function() {
          var key,
    sessionId;
          key = this.getSessionKey();
          if (key) {
            sessionId = $cookies.get(key);
          } else {
            sessionId = '';
          }
          return sessionId;
        },
        setSessionId: function(sessionId) {
          var key;
          key = this.getSessionKey();
          if (key && sessionId && sessionId !== '') {
            $cookies.remove(key);
            $cookies.put(key,
    sessionId,
    {
              path: '/'
            });
          }
          return sessionId;
        },
        getRoutingId: function() {
          var routingId;
          routingId = $cookies.get('ROUTINGID');
          if (routingId && routingId !== '') {
            return routingId;
          } else {
            return null;
          }
        },
        setRoutingId: function(routingId) {
          if (routingId && routingId !== '') {
            $cookies.remove('ROUTINGID');
            $cookies.put('ROUTINGID',
    routingId,
    {
              path: '/'
            });
          }
          return routingId;
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('SocialShareService', [
    '$rootScope',
    '$cookies',
    '$window',
    'ConstituentService',
    'LuminateRESTService',
    function($rootScope,
    $cookies,
    $window,
    ConstituentService,
    LuminateRESTService) {
      return {
        logShare: function(userId,
    provider) {
          var params;
          params = '';
          params += 'social_uid=' + encodeURIComponent(userId);
          params += '&social_site=' + provider;
          params += '&share_url=' + encodeURIComponent($window.location.href);
          params += '&share_id=' + encodeURIComponent($rootScope.socialSettings.shareId);
          return ConstituentService.logSocialShare(params).then(function(response) {
            return response;
          });
        },
        activateJanrain: function(elem,
    sharePage) {
          var shareInstance;
          if ($rootScope.socialSettings.janrainEnabled && ($window.janrain != null) && (elem != null ? elem.length : void 0)) {
            shareInstance = {
              message: $rootScope.socialSettings.shareMessage,
              url: sharePage || ''
            };
            $window.janrain.social.addWidgetTo(elem[0],
    shareInstance);
            return $window.janrain;
          }
        },
        initJanrain: function() {
          var ref,
    ref1;
          $rootScope.socialSettings.appUrl = "https://" + $rootScope.socialSettings.appName + ".rpxnow.com";
          if (((ref = $window.janrain) != null ? ref.settings : void 0) == null) {
            $window.janrain = {
              settings: {}
            };
          }
          $window.janrain.settings.appUrl = $rootScope.socialSettings.appUrl;
          $window.janrain.settings.social = {
            shareCountMode: 'none',
            orientation: 'horizontal',
            providers: $rootScope.socialSettings.providers
          };
          $window.janrain.logShare = function(userId,
    provider) {
            var params;
            params = '';
            params += 'social_uid=' + encodeURIComponent(userId);
            params += '&social_site=' + provider;
            params += '&share_url=' + encodeURIComponent($window.location.href);
            params += '&share_id=' + encodeURIComponent($rootScope.socialSettings.shareId);
            return ConstituentService.logSocialShare(params).then(function(response) {
              return response;
            });
          };
          if (((ref1 = $window.janrain) != null ? ref1.social : void 0) == null) {
            return LuminateRESTService.loadScript('//cdn-social.janrain.com/social/janrain-social.min.js').then(function(response) {
              $window.janrain.social.on("share_done",
    function(data) {
                window.janrain.logShare(data.auth_token,
    data.provider);
                return data;
              });
              $rootScope.socialSettings.janrainInitialized = true;
              return response;
            });
          } else {
            $window.janrain.social.on("share_done",
    function(data) {
              window.janrain.logShare(data.auth_token,
    data.provider);
              return data;
            });
            return $rootScope.socialSettings.janrainInitialized = true;
          }
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('TeamraiserCompanyService', [
    '$rootScope',
    'LuminateRESTService',
    function($rootScope,
    LuminateRESTService) {
      return {
        getCompanyList: function() {
          return LuminateRESTService.teamraiserRequest('getCompanyList',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getCompanies: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getCompaniesByInfo',
    requestData,
    false,
    true).then(function(response) {
            return response;
          });
        },
        getCompany: function() {
          var ref,
    ref1;
          return this.getCompanies('company_id=' + ((ref = $rootScope.participantRegistration) != null ? (ref1 = ref.companyInformation) != null ? ref1.companyId : void 0 : void 0)).then(function(response) {
            return response;
          });
        },
        getCompanyPageInfo: function() {
          return LuminateRESTService.teamraiserRequest('getCompanyPageInfo',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getCompanyPhoto: function() {
          var dataString,
    ref,
    ref1;
          dataString = 'company_id=' + ((ref = $rootScope.participantRegistration) != null ? (ref1 = ref.companyInformation) != null ? ref1.companyId : void 0 : void 0);
          return LuminateRESTService.teamraiserRequest('getCompanyPhoto',
    dataString,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getCompanyShortcut: function() {
          var dataString,
    ref,
    ref1;
          dataString = 'company_id=' + ((ref = $rootScope.participantRegistration) != null ? (ref1 = ref.companyInformation) != null ? ref1.companyId : void 0 : void 0);
          return LuminateRESTService.teamraiserRequest('getCompanyShortcut',
    dataString,
    true,
    true).then(function(response) {
            return response;
          });
        },
        removeCompanyPhoto: function(requestFormData) {
          var formData,
    ref,
    ref1;
          if (requestFormData) {
            formData = requestFormData;
          } else {
            formData = new FormData;
          }
          formData.append('company_id',
    (ref = $rootScope.participantRegistration) != null ? (ref1 = ref.companyInformation) != null ? ref1.companyId : void 0 : void 0);
          return LuminateRESTService.teamraiserFormRequest('removeCompanyPhoto',
    formData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateCompanyPageInfo: function(requestData) {
          var dataString,
    ref,
    ref1;
          dataString = 'company_id=' + ((ref = $rootScope.participantRegistration) != null ? (ref1 = ref.companyInformation) != null ? ref1.companyId : void 0 : void 0);
          if (requestData && requestData !== '') {
            dataString += '&' + requestData;
          }
          return LuminateRESTService.teamraiserRequest('updateCompanyPageInfo',
    dataString,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateCompanyShortcut: function(requestData) {
          var dataString,
    ref,
    ref1;
          dataString = 'company_id=' + ((ref = $rootScope.participantRegistration) != null ? (ref1 = ref.companyInformation) != null ? ref1.companyId : void 0 : void 0);
          if (requestData && requestData !== '') {
            dataString += '&' + requestData;
          }
          return LuminateRESTService.teamraiserRequest('updateCompanyShortcut',
    dataString,
    true,
    true).then(function(response) {
            return response;
          });
        },
        uploadCompanyPhoto: function(requestFormData) {
          var formData;
          if (requestFormData) {
            formData = requestFormData;
          } else {
            formData = new FormData;
          }
          formData.append('company_id',
    $rootScope.participantRegistration.companyInformation.companyId);
          return LuminateRESTService.teamraiserFormRequest('uploadCompanyPhoto',
    formData,
    true,
    true).then(function(response) {
            return response;
          });
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('TeamraiserEmailService', [
    'LuminateRESTService',
    function(LuminateRESTService) {
      return {
        addDraft: function(requestData) {
          return LuminateRESTService.teamraiserRequest('addDraft',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateDraft: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updateDraft',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        deleteDraft: function(requestData) {
          return LuminateRESTService.teamraiserRequest('deleteDraft',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getDrafts: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getDrafts',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getDraft: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getDraft',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        deleteSentMessage: function(requestData) {
          return LuminateRESTService.teamraiserRequest('deleteSentMessage',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getSentMessages: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getSentMessages',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getSentMessage: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getSentMessage',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getMessageLayouts: function() {
          return LuminateRESTService.teamraiserRequest('getMessageLayouts',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getSuggestedMessages: function() {
          return LuminateRESTService.teamraiserRequest('getSuggestedMessages',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getSuggestedMessage: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getSuggestedMessage',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        previewMessage: function(requestData) {
          return LuminateRESTService.teamraiserRequest('previewMessage',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        sendMessage: function(requestData) {
          return LuminateRESTService.teamraiserRequest('sendTafMessage',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('TeamraiserEventService', [
    '$rootScope',
    'LuminateUtilsService',
    'LuminateRESTService',
    function($rootScope,
    LuminateUtilsService,
    LuminateRESTService) {
      return {
        getConfig: function() {
          return LuminateRESTService.teamraiserRequest('getTeamraiserConfig',
    '',
    false,
    true).then(function(response) {
            var teamraiserConfig;
            teamraiserConfig = response.data.getTeamraiserConfigResponse.teamraiserConfig;
            if (!teamraiserConfig) {
              $rootScope.teamraiserConfig = -1;
            } else {
              $rootScope.teamraiserConfig = teamraiserConfig;
            }
            return response;
          });
        },
        getTeamraisers: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getTeamraisersByInfo',
    requestData,
    false,
    false).then(function(response) {
            return response;
          });
        },
        getTeamraiser: function() {
          return this.getTeamraisers('list_filter_column=frc.fr_id&list_filter_text=' + $rootScope.frId + '&name=' + encodeURIComponent('%')).then(function(response) {
            var donate_event_url,
    ref,
    teamraiser;
            teamraiser = (ref = response.data.getTeamraisersResponse) != null ? ref.teamraiser : void 0;
            if (!teamraiser) {
              $rootScope.eventInfo = -1;
            } else {
              donate_event_url = teamraiser.donate_event_url;
              if (donate_event_url && donate_event_url.indexOf('df_id=') !== -1) {
                teamraiser.donationFormId = donate_event_url.split('df_id=')[1].split('&')[0];
              }
              $rootScope.eventInfo = teamraiser;
            }
            return response;
          });
        },
        getEventDataParameter: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getEventDataParameter',
    requestData,
    false,
    true).then(function(response) {
            return response;
          });
        },
        getNewsFeeds: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getNewsFeeds',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getOrganizationMessage: function() {
          return LuminateRESTService.teamraiserRequest('getOrganizationMessage',
    '',
    false,
    true).then(function(response) {
            return response;
          });
        },
        getParticipationType: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getParticipationType',
    requestData,
    false,
    true).then(function(response) {
            return response;
          });
        },
        getParticipantCenterWrapper: function() {
          return LuminateRESTService.teamraiserRequest('getParticipantCenterWrapper',
    '',
    false,
    true).then(function(response) {
            var ref,
    ref1,
    wrapper;
            wrapper = (ref = response.data.getParticipantCenterWrapperResponse) != null ? ref.wrapper : void 0;
            if (!wrapper) {
              $rootScope.wrapper = -1;
            } else {
              wrapper.eventUrl = (ref1 = wrapper.personalPageUrl) != null ? ref1.replace(/px=\d*&pg=personal/,
    'pg=entry') : void 0;
              wrapper.logoutUrl = wrapper.logoutUrl + '&NEXTURL=' + encodeURIComponent(wrapper.eventUrl);
              wrapper.content = LuminateUtilsService.ensureString(wrapper.content);
              $rootScope.wrapper = wrapper;
            }
            return response;
          });
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('TeamraiserGiftService', [
    'LuminateRESTService',
    function(LuminateRESTService) {
      return {
        getGiftCategories: function() {
          return LuminateRESTService.teamraiserRequest('getGiftCategories',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        addGift: function(requestData) {
          return LuminateRESTService.teamraiserRequest('addGift',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        deleteGift: function(requestData) {
          return LuminateRESTService.teamraiserRequest('deleteGift',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        acknowledgeGift: function(requestData) {
          return LuminateRESTService.teamraiserRequest('acknowledgeGifts',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getGift: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getGift',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getGifts: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getGifts',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getTeamGifts: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getTeamGifts',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('TeamraiserParticipantService', [
    '$rootScope',
    'LuminateRESTService',
    function($rootScope,
    LuminateRESTService) {
      return {
        createFundraiser: function(requestData) {
          var dataString;
          dataString = 'cons_id=' + $rootScope.consId;
          if (requestData && requestData !== '') {
            dataString += '&' + requestData;
          }
          return LuminateRESTService.teamraiserRequest('createAndLinkFacebookFundraiser',
    dataString,
    false,
    true).then(function(response) {
            return response;
          });
        },
        confirmFundraiser: function() {
          return LuminateRESTService.teamraiserRequest('confirmOrUnlinkFacebookFundraiser',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getParticipants: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getParticipants',
    requestData,
    false,
    true).then(function(response) {
            return response;
          });
        },
        getParticipant: function() {
          return this.getParticipants('first_name=' + encodeURIComponent('%%%') + '&list_filter_column=reg.cons_id&list_filter_text=' + $rootScope.consId);
        },
        getProgress: function() {
          return LuminateRESTService.teamraiserRequest('getParticipantProgress',
    '',
    false,
    true).then(function(response) {
            return response;
          });
        },
        getPersonalPageInfo: function() {
          return LuminateRESTService.teamraiserRequest('getPersonalPageInfo',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getPersonalMediaLayout: function() {
          return LuminateRESTService.teamraiserRequest('getPersonalMediaLayout',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getPersonalPhotos: function() {
          return LuminateRESTService.teamraiserRequest('getPersonalPhotos',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getPersonalVideoUrl: function() {
          return LuminateRESTService.teamraiserRequest('getPersonalVideoUrl',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getShortcut: function() {
          return LuminateRESTService.teamraiserRequest('getShortcut',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getSurveyResponses: function(requestData) {
          var dataString;
          dataString = 'use_filters=true';
          if (requestData && requestData !== '') {
            dataString += '&' + requestData;
          }
          return LuminateRESTService.teamraiserRequest('getSurveyResponses',
    dataString,
    true,
    true).then(function(response) {
            return response;
          });
        },
        removePersonalPhoto: function(requestFormData) {
          var formData;
          if (requestFormData) {
            formData = requestFormData;
          } else {
            formData = new FormData;
          }
          return LuminateRESTService.teamraiserFormRequest('removePersonalPhoto',
    formData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updatePersonalMediaLayout: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updatePersonalMediaLayout',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updatePersonalPageInfo: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updatePersonalPageInfo',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updatePersonalVideoUrl: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updatePersonalVideoUrl',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateShortcut: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updateShortcut',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateSurveyResponses: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updateSurveyResponses',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        uploadPersonalPhoto: function(requestFormData) {
          var formData;
          if (requestFormData) {
            formData = requestFormData;
          } else {
            formData = new FormData;
          }
          return LuminateRESTService.teamraiserFormRequest('uploadPersonalPhoto',
    formData,
    true,
    true).then(function(response) {
            return response;
          });
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('TeamraiserRegistrationService', [
    '$rootScope',
    'LuminateRESTService',
    function($rootScope,
    LuminateRESTService) {
      return {
        getRegistration: function() {
          return LuminateRESTService.teamraiserRequest('getRegistration',
    '',
    true,
    true).then(function(response) {
            var participantRegistration,
    ref;
            participantRegistration = (ref = response.data.getRegistrationResponse) != null ? ref.registration : void 0;
            if (!participantRegistration) {
              $rootScope.participantRegistration = -1;
            } else {
              $rootScope.participantRegistration = participantRegistration;
            }
            return response;
          });
        },
        getRecentActivity: function() {
          return LuminateRESTService.teamraiserRequest('getRecentActivity',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getWhatNext: function() {
          var dataString;
          dataString = 'show_all_suggestions=true';
          return LuminateRESTService.teamraiserRequest('getTeamraiserSuggestion',
    dataString,
    false,
    true).then(function(response) {
            return response;
          });
        },
        updateRegistration: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updateRegistration',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updatePersonalPagePrivacy: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updatePersonalPagePrivacy',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        }
      };
    }
  ]);

  angular.module('trPcApp').factory('TeamraiserTeamService', [
    '$rootScope',
    'LuminateRESTService',
    function($rootScope,
    LuminateRESTService) {
      return {
        getTeams: function(requestData) {
          return LuminateRESTService.teamraiserRequest('getTeamsByInfo',
    requestData,
    false,
    true).then(function(response) {
            return response;
          });
        },
        getTeam: function() {
          var ref;
          return this.getTeams('team_id=' + ((ref = $rootScope.participantRegistration) != null ? ref.teamId : void 0));
        },
        getTeamRoster: function(requestData) {
          var dataString,
    ref;
          dataString = 'team_id=' + ((ref = $rootScope.participantRegistration) != null ? ref.teamId : void 0);
          if (requestData && requestData !== '') {
            dataString += '&' + requestData;
          }
          return LuminateRESTService.teamraiserRequest('getTeamRoster',
    dataString,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getTeamPageInfo: function() {
          var dataString,
    ref;
          dataString = 'team_id=' + ((ref = $rootScope.participantRegistration) != null ? ref.teamId : void 0);
          return LuminateRESTService.teamraiserRequest('getTeamPageInfo',
    dataString,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getTeamPhoto: function() {
          var dataString,
    ref;
          dataString = 'team_id=' + ((ref = $rootScope.participantRegistration) != null ? ref.teamId : void 0);
          return LuminateRESTService.teamraiserRequest('getTeamPhoto',
    dataString,
    true,
    true).then(function(response) {
            return response;
          });
        },
        getTeamShortcut: function() {
          return LuminateRESTService.teamraiserRequest('getTeamShortcut',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getCaptainsMessage: function() {
          return LuminateRESTService.teamraiserRequest('getCaptainsMessage',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        getTeamCaptains: function() {
          return LuminateRESTService.teamraiserRequest('getTeamCaptains',
    '',
    false,
    true).then(function(response) {
            return response;
          });
        },
        joinTeam: function(requestData) {
          return LuminateRESTService.teamraiserRequest('joinTeam',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        leaveTeam: function() {
          return LuminateRESTService.teamraiserRequest('leaveTeam',
    '',
    true,
    true).then(function(response) {
            return response;
          });
        },
        removeTeamPhoto: function(requestFormData) {
          var formData;
          if (requestFormData) {
            formData = requestFormData;
          } else {
            formData = new FormData;
          }
          return LuminateRESTService.teamraiserFormRequest('removeTeamPhoto',
    formData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        setTeamCaptains: function(requestData) {
          var dataString,
    ref;
          dataString = 'team_id=' + ((ref = $rootScope.participantRegistration) != null ? ref.teamId : void 0);
          if (requestData && requestData !== '') {
            dataString += '&' + requestData;
          }
          return LuminateRESTService.teamraiserRequest('setTeamCaptains',
    dataString,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateCaptainsMessage: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updateCaptainsMessage',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateTeamPageInfo: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updateTeamPageInfo',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateTeamInformation: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updateTeamInformation',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        updateTeamShortcut: function(requestData) {
          return LuminateRESTService.teamraiserRequest('updateTeamShortcut',
    requestData,
    true,
    true).then(function(response) {
            return response;
          });
        },
        uploadTeamPhoto: function(requestFormData) {
          var formData;
          if (requestFormData) {
            formData = requestFormData;
          } else {
            formData = new FormData;
          }
          return LuminateRESTService.teamraiserFormRequest('uploadTeamPhoto',
    formData,
    true,
    true).then(function(response) {
            return response;
          });
        }
      };
    }
  ]);

  angular.module('trPcControllers').controller('ConsProfileViewCtrl', [
    '$scope',
    '$rootScope',
    '$httpParamSerializer',
    '$translate',
    '$timeout',
    '$uibModal',
    'ConstituentService',
    'LuminateUtilsService',
    function($scope,
    $rootScope,
    $httpParamSerializer,
    $translate,
    $timeout,
    $uibModal,
    ConstituentService,
    LuminateUtilsService) {
      var getFieldLabelTranslations;
      $scope.possibleFields = ['user_name',
    'name.title',
    'name.first',
    'name.middle',
    'name.last',
    'name.suffix',
    'name.prof_suffix',
    'email.primary_address',
    'email.accepts_email',
    'primary_address.street1',
    'primary_address.street2',
    'primary_address.street3',
    'primary_address.city',
    'primary_address.state',
    'primary_address.zip',
    'primary_address.country',
    'accepts_postal_mail',
    'home_phone',
    'birth_date',
    'gender',
    'employment.employer',
    'employment.occupation'];
      $scope.cpvm = {
        profileFields: [],
        passwordFields: [
          {
            type: 'input',
            key: 'old_password',
            templateOptions: {
              type: 'password',
              label: 'Old Password',
              required: true
            }
          },
          {
            type: 'input',
            key: 'user_password',
            templateOptions: {
              type: 'password',
              label: 'New Password',
              required: true
            }
          },
          {
            type: 'input',
            key: 'retype_password',
            templateOptions: {
              type: 'password',
              label: 'Retype Password',
              required: true
            }
          },
          {
            type: 'input',
            key: 'reminder_hint',
            templateOptions: {
              type: 'text',
              label: 'Reminder Hint',
              required: true
            }
          }
        ],
        profileModel: {},
        passwordModel: {
          old_password: '',
          user_password: '',
          retype_password: '',
          reminder_hint: ''
        },
        openChangePassword: $scope.openChangePassword,
        cancelChangePassword: $scope.cancelChangePassword,
        submitChangePassword: $scope.submitChangePassword,
        updateUserProfile: $scope.updateUserProfile
      };
      getFieldLabelTranslations = function() {
        if ($scope.getFieldLabelTranslationsTimeout) {
          $timeout.cancel($scope.getFieldLabelTranslationsTimeout);
        }
        return $translate(['old_password',
    'new_password',
    'new_password_repeat',
    'password_hint']).then(function(translations) {
          return angular.forEach($scope.cpvm.passwordFields,
    function(passwordField) {
            switch (passwordField.key) {
              case 'old_password':
                return passwordField.templateOptions.label = translations.old_password;
              case 'user_password':
                return passwordField.templateOptions.label = translations.new_password;
              case 'retype_password':
                return passwordField.templateOptions.label = translations.new_password_repeat;
              case 'reminder_hint':
                return passwordField.templateOptions.label = translations.password_hint;
            }
          });
        },
    function(translationIds) {
          return $scope.getFieldLabelTranslationsTimeout = $timeout(getFieldLabelTranslations,
    500);
        });
      };
      getFieldLabelTranslations();
      $scope.openChangePassword = function() {
        $scope.changePasswordModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/changePassword.html'
        });
        return $scope.changePasswordModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'changePassword');
          }
        });
      };
      $scope.cancelChangePassword = function($event) {
        $event.preventDefault();
        return $scope.changePasswordModal.close();
      };
      $scope.getUser = function() {
        var getUserPromise;
        getUserPromise = ConstituentService.getUser().then(function(response) {
          $scope.constituent = response.data.getConsResponse;
          angular.forEach($scope.cpvm.profileFields,
    function(profileField) {
            var customFieldType,
    fieldName,
    fieldValue,
    i,
    j,
    ref,
    tempPath,
    validValue;
            fieldName = profileField.name;
            fieldValue = null;
            // first check for "custom" fields
            if (fieldName.indexOf("custom_") > -1) {
              customFieldType = fieldName.slice(7).replace(/\d+/g,
    "").replace("monetary_value",
    "monetary_amount");
              if ($scope.constituent.custom && $scope.constituent.custom[customFieldType]) {
                angular.forEach($scope.constituent.custom[customFieldType],
    function(customField) {
                  if (fieldName === customField.id) {
                    return fieldValue = customField.content;
                  }
                });
              }
            } else if (fieldName.indexOf(".") > -1) {
              // next check for "nested" fields
              fieldName = fieldName.split(".");
              tempPath = $scope.constituent;
              for (i = j = 0, ref = fieldName.length - 1; (0 <= ref ? j <= ref : j >= ref); i = 0 <= ref ? ++j : --j) {
                if (tempPath[fieldName[i]]) {
                  tempPath = tempPath[fieldName[i]];
                }
              }
              if (tempPath && !angular.isObject(tempPath)) {
                fieldValue = tempPath;
              }
            } else if ($scope.constituent[fieldName] && !angular.isObject($scope.constituent[fieldName])) {
              // next check to see if the field exists in getUser response
              fieldValue = $scope.constituent[fieldName];
            }
            if (fieldValue) {
              // now convert field value from text to appropriate data type
              switch (profileField.data.dataType) {
                case 'DATE':
                  // expected date format is a badly-formed date string: "yyyy-MM-dd-hh:mm"
                  fieldValue = fieldValue.split("-");
                  fieldValue = new Date(parseInt(fieldValue[0]),
    parseInt(fieldValue[1]) - 1,
    parseInt(fieldValue[2]),
    parseInt(fieldValue[3].split(":")[0]),
    parseInt(fieldValue[3].split(":")[1]));
                  break;
                case 'BOOLEAN':
                  fieldValue = fieldValue === 'true';
                  break;
                case 'NUMBER':
                  fieldValue = parseInt(fieldValue);
                  break;
                case 'MONEY':
                  fieldValue = parseFloat(fieldValue);
                  break;
                default:
                  fieldValue = fieldValue;
              }
            } else {
              fieldValue = null;
            }
            // check to see if the profile field is enumerated
            if (fieldValue && profileField.templateOptions.options) {
              validValue = false;
              angular.forEach(profileField.templateOptions.options,
    function(option) {
                if (option && angular.isString(option.value) && option.value === fieldValue) {
                  return validValue = true;
                }
              });
              if (!validValue) {
                // profile field is enumerated but the user's value is not in the field options
                // add the user's value as the first element in the options
                profileField.templateOptions.options.unshift({
                  name: fieldValue,
                  value: fieldValue
                });
              }
            }
            // finally assign value to model
            return $scope.cpvm.profileModel[profileField.key] = fieldValue;
          });
          if ($scope.constituent.reminder_hint) {
            $scope.cpvm.passwordModel["reminder_hint"] = $scope.constituent.reminder_hint;
          }
          $scope.cpvm.profileOptions.updateInitialValue();
          return response;
        });
        return $rootScope.loadingPromises.push(getUserPromise);
      };
      $scope.listUserFields = function() {
        var listUserFieldsPromise;
        listUserFieldsPromise = ConstituentService.listUserFields('access=view').then(function(response) {
          var ref;
          $scope.userFields = LuminateUtilsService.ensureArray((ref = response.data.listConsFieldsResponse) != null ? ref.field : void 0);
          $scope.cpvm.profileFields = [];
          angular.forEach($scope.userFields,
    function(userField) {
            var choice,
    j,
    k,
    len,
    len1,
    maxYear,
    minYear,
    ref1,
    ref2,
    ref3,
    ref4,
    thisField;
            if ($scope.possibleFields.indexOf(userField.name) > -1) {
              thisField = {
                type: null,
                key: userField.name.replace('.',
    '-'),
                name: userField.name,
                data: {
                  dataType: userField.valueType,
                  orderInd: $scope.possibleFields.indexOf(userField.name)
                },
                templateOptions: {
                  label: userField.label,
                  required: userField.required === 'true',
                  disabled: userField.isUserModifiable === 'false',
                  maxChars: userField.maxChars
                }
              };
              switch (userField.valueType) {
                case 'BOOLEAN':
                  thisField.type = 'checkbox';
                  break;
                case 'DATE':
                  thisField.type = 'datepicker';
                  thisField.templateOptions.placeholder = 'MM/dd/yyyy';
                  thisField.templateOptions.closeText = 'Close';
                  thisField.templateOptions.dateOptions = {
                    dateFormat: 'MM/dd/yyyy'
                  };
                  if ((ref1 = userField.choices) != null ? ref1.choice : void 0) {
                    minYear = maxYear = userField.choices.choice[0];
                    ref2 = userField.choices.choice;
                    for (j = 0, len = ref2.length; j < len; j++) {
                      choice = ref2[j];
                      minYear = (minYear < choice ? minYear : choice);
                    }
                    ref3 = userField.choices.choice;
                    for (k = 0, len1 = ref3.length; k < len1; k++) {
                      choice = ref3[k];
                      maxYear = (maxYear > choice ? maxYear : choice);
                    }
                    thisField.templateOptions.dateOptions.minDate = new Date(minYear,
    0,
    1);
                    thisField.templateOptions.dateOptions.maxDate = new Date(maxYear,
    11,
    31);
                  }
                  thisField.templateOptions.dateAltFormats = ['dd-MMMM-yyyy',
    'yyyy/MM/dd',
    'dd.MM.yyyy',
    'shortDate'];
                  break;
                case 'ENUMERATION':
                  thisField.type = 'select';
                  thisField.templateOptions.options = [];
                  angular.forEach(userField.choices.choice,
    function(choice) {
                    return thisField.templateOptions.options.push({
                      name: choice === 'UNDEFINED' ? '' : choice,
                      value: choice
                    });
                  });
                  break;
                case 'TEXT':
                  if ((ref4 = userField.choices) != null ? ref4.choice : void 0) {
                    thisField.type = 'select';
                    thisField.templateOptions.options = [];
                    if (!thisField.templateOptions.required) {
                      thisField.templateOptions.options.push({
                        name: '',
                        value: ''
                      });
                    }
                    angular.forEach(userField.choices.choice,
    function(choice) {
                      return thisField.templateOptions.options.push({
                        name: choice,
                        value: choice
                      });
                    });
                  } else {
                    thisField.type = 'input';
                  }
                  break;
                case 'NUMBER':
                  thisField.type = 'input';
                  thisField.templateOptions.type = 'number';
                  thisField.templateOptions.step = '1';
                  break;
                case 'MONEY':
                  thisField.type = 'input';
                  thisField.templateOptions.type = 'number';
                  thisField.templateOptions.step = '0.01';
                  thisField.templateOptions.addonLeft = {
                    text: $rootScope.localeSettings.currencySymbol
                  };
                  break;
                default:
                  thisField.type = 'input';
              }
              if (userField.name === 'user_name') {
                thisField.type = 'username';
                thisField.templateOptions.changePasswordLabel = 'Change Password';
                thisField.templateOptions.changePasswordAction = $scope.openChangePassword;
              }
              return $scope.cpvm.profileFields.push(thisField);
            }
          });
          $scope.cpvm.profileFields.sort(function(a,
    b) {
            return a.data.orderInd - b.data.orderInd;
          });
          $translate(['accept_email_label',
    'accept_postal_mail_label',
    'change_password_label']).then(function(translations) {
            angular.forEach($scope.cpvm.profileFields,
    function(profileField) {
              switch (profileField.name) {
                case 'accepts_postal_mail':
                  return profileField.templateOptions.label = translations.accept_postal_mail_label;
                case 'email.accepts_email':
                  return profileField.templateOptions.label = translations.accept_email_label;
                case 'user_name':
                  return profileField.templateOptions.changePasswordLabel = translations.change_password_label;
              }
            });
            return $scope.cpvm.originalFields = angular.copy($scope.cpvm.profileFields);
          },
    function(translationIds) {
            angular.forEach($scope.cpvm.profileFields,
    function(profileField) {
              switch (profileField.name) {
                case 'accepts_postal_mail':
                  return profileField.templateOptions.label = translationIds.accept_postal_mail_label;
                case 'email.accepts_email':
                  return profileField.templateOptions.label = translationIds.accept_email_label;
                case 'user_name':
                  return profileField.templateOptions.changePasswordLabel = translationIds.change_password_label;
              }
            });
            return $scope.cpvm.originalFields = angular.copy($scope.cpvm.profileFields);
          });
          $scope.getUser();
          return response;
        });
        return $rootScope.loadingPromises.push(listUserFieldsPromise);
      };
      $scope.listUserFields();
      $scope.updateUserProfile = function() {
        var updateUserPromise,
    userProfileUpdateFields;
        if ($scope.cpvm.profileForm.$valid) {
          userProfileUpdateFields = {};
          angular.forEach($scope.cpvm.profileModel,
    function(value,
    key) {
            var fixedKey;
            fixedKey = key.replace('-',
    '.');
            return userProfileUpdateFields[fixedKey] = value;
          });
          $scope.updateProcessing = true;
          updateUserPromise = ConstituentService.update($httpParamSerializer(userProfileUpdateFields)).then(function(response) {
            if (response.data.errorResponse) {
              $scope.updateProfileSuccess = false;
              $scope.updateProfileFailure = true;
              if (response.data.errorResponse.message) {
                $scope.updateProfileFailureMessage = response.data.errorResponse.message;
              } else {
                $translate('profile_update_unexpected_error').then(function(translation) {
                  return $scope.updateProfileFailureMessage = translation;
                },
    function(translationId) {
                  return $scope.updateProfileFailureMessage = translationId;
                });
              }
            } else {
              $scope.updateProfileSuccess = true;
              $scope.updateProfileFailure = false;
              $scope.cpvm.profileOptions.updateInitialValue();
            }
            $rootScope.scrollToTop();
            return response;
          });
          return $rootScope.loadingPromises.push(updateUserPromise);
        } else {
          $translate('profile_update_required_error').then(function(translation) {
            return $scope.updateProfileFailureMessage = translation;
          },
    function(translationId) {
            return $scope.updateProfileFailureMessage = translationId;
          });
          $scope.updateProfileSuccess = false;
          return $scope.updateProfileFailure = true;
        }
      };
      $scope.submitChangePassword = function() {
        var changePasswordPromise;
        $scope.updateProcessing = true;
        changePasswordPromise = ConstituentService.changePassword($httpParamSerializer($scope.cpvm.passwordModel)).then(function(response) {
          var reminderValue;
          if (response.data.errorResponse) {
            $scope.updatePasswordSuccess = false;
            $scope.updatePasswordFailure = true;
            if (response.data.errorResponse.message) {
              $scope.updatePasswordFailureMessage = response.data.errorResponse.message;
            } else {
              $translate('profile_update_unexpected_error').then(function(translation) {
                return $scope.updatePasswordFailureMessage = translation;
              },
    function(translationId) {
                return $scope.updatePasswordFailureMessage = translationId;
              });
            }
            $scope.cpvm.passwordOptions.resetModel();
          } else {
            $scope.updatePasswordSuccess = true;
            $scope.updatePasswordFailure = false;
            $scope.updateProcessing = false;
            $scope.changePasswordModal.close();
            reminderValue = $scope.cpvm.passwordModel["reminder_hint"];
            $scope.cpvm.passwordOptions.resetModel();
            $scope.cpvm.passwordModel["reminder_hint"] = reminderValue;
            $scope.cpvm.passwordOptions.updateInitialValue();
          }
          return response;
        });
        return $rootScope.loadingPromises.push(changePasswordPromise);
      };
      $scope.resetProfileAlerts = function() {
        $scope.updateProcessing = false;
        $scope.updateProfileSuccess = false;
        $scope.updateProfileFailure = false;
        $scope.updateProfileFailureMessage = '';
        $scope.updatePasswordSuccess = false;
        $scope.updatePasswordFailure = false;
        $scope.updatePasswordFailureMessage = '';
        return true;
      };
      $scope.resetProfileAlerts();
      if (window.ngLoadController && angular.isFunction(ngLoadController)) {
        return ngLoadController($rootScope,
    $scope,
    'consProfileView');
      }
    }
  ]);

  angular.module('trPcControllers').controller('CustomViewCtrl', [
    '$scope',
    '$rootScope',
    '$sce',
    'LuminateUtilsService',
    function($scope,
    $rootScope,
    $sce,
    LuminateUtilsService) {
      $scope.updateContent = function(html) {
        $scope.content = $sce.trustAsHtml(LuminateUtilsService.ensureString(html));
        return $scope.content;
      };
      $scope.updateContent();
      if (window.ngLoadController && angular.isFunction(ngLoadController)) {
        return ngLoadController($rootScope,
    $scope,
    'customView');
      }
    }
  ]);

  angular.module('trPcControllers').controller('EmailComposeViewCtrl', [
    '$rootScope',
    '$scope',
    '$routeParams',
    '$timeout',
    '$httpParamSerializer',
    '$uibModal',
    '$translate',
    '$sce',
    '$window',
    'ContactService',
    'ContentService',
    'TeamraiserEventService',
    'TeamraiserEmailService',
    'LuminateUtilsService',
    function($rootScope,
    $scope,
    $routeParams,
    $timeout,
    $httpParamSerializer,
    $uibModal,
    $translate,
    $sce,
    $window,
    ContactService,
    ContentService,
    TeamraiserEventService,
    TeamraiserEmailService,
    LuminateUtilsService) {
      var cancelDraftPollTimeout,
    closeEmailPreviewModal,
    contactFilters,
    getMessageLayoutsPromise,
    getSelectedContactsString,
    getSuggestedMessageTypeTranslations,
    getSuggestedMessages,
    personalizedGreetingEnabledPromise,
    ref,
    refreshContactsNavBar,
    sanitizeEmailComposer,
    saveDraft,
    setEmailComposerDefaults,
    startDraftPollTimeout;
      $scope.messageType = $routeParams.messageType;
      $scope.messageId = $routeParams.messageId;
      $scope.refreshContactsNav = 0;
      refreshContactsNavBar = function() {
        return $scope.refreshContactsNav = $scope.refreshContactsNav + 1;
      };
      $scope.resetEmailComposeAlerts = function() {
        $rootScope.scrollToTop();
        $scope.emailProcessing = false;
        $scope.sendEmailError = false;
        $scope.sendEmailSuccess = false;
        $scope.saveDraftError = false;
        $scope.saveDraftSuccess = false;
        $scope.deleteDraftError = false;
        $scope.deleteDraftSuccess = false;
        return $rootScope.resizeFrameForCurrentView();
      };
      if (!((ref = $rootScope.selectedContacts) != null ? ref.contacts : void 0)) {
        ContactService.resetSelectedContacts();
      }
      getSelectedContactsString = function() {
        var recipients,
    ref1;
        recipients = '';
        if ((((ref1 = $rootScope.selectedContacts) != null ? ref1.contacts : void 0) != null) && $rootScope.selectedContacts.contacts.length > 0) {
          angular.forEach($rootScope.selectedContacts.contacts,
    function(contact) {
            if ((contact != null ? contact.id : void 0) && (contact != null ? contact.email : void 0)) {
              if (recipients.length > 0) {
                recipients += ', ';
              }
              return recipients += ContactService.getContactString(contact);
            }
          });
        }
        return recipients;
      };
      contactFilters = ['email_rpt_show_all',
    'email_rpt_show_never_emailed',
    'email_rpt_show_nondonors_followup',
    'email_rpt_show_unthanked_donors',
    'email_rpt_show_donors',
    'email_rpt_show_nondonors'];
      if ($rootScope.participantRegistration.previousEventParticipant === "true") {
        contactFilters.push('email_rpt_show_ly_donors');
        contactFilters.push('email_rpt_show_lybunt_donors');
      }
      if ($rootScope.participantRegistration.teamId !== "-1") {
        contactFilters.push('email_rpt_show_teammates');
        contactFilters.push('email_rpt_show_nonteammates');
        if ($rootScope.participantRegistration.previousEventParticipant === "true") {
          contactFilters.push('email_rpt_show_ly_teammates');
          contactFilters.push('email_rpt_show_ly_unreg_teammates');
        }
      }
      setEmailComposerDefaults = function() {
        var defaultStationeryId;
        defaultStationeryId = $rootScope.teamraiserConfig.defaultStationeryId;
        $scope.sendingEmail = false;
        $scope.isEmailComposerReset = true;
        return $scope.emailComposer = {
          message_id: '',
          message_name: '',
          layout_id: defaultStationeryId !== '-1' ? defaultStationeryId : '1',
          recipients: getSelectedContactsString(),
          suggested_message_id: null,
          subject: '',
          prepend_salutation: true,
          message_body: '',
          save_template_id: '',
          save_template: false
        };
      };
      setEmailComposerDefaults();
      $scope.resetComposer = function() {
        ContactService.resetSelectedContacts();
        $scope.resetEmailComposeAlerts();
        return setEmailComposerDefaults();
      };
      $scope.setEmailMessageBody = function(messageBody) {
        messageBody = LuminateUtilsService.ensureString(messageBody);
        $scope.emailComposer.message_body = messageBody;
        return $rootScope.resizeFrameForCurrentView();
      };
      getSuggestedMessageTypeTranslations = function() {
        return $translate(['email_template_radio_recruit_label',
    'email_template_radio_solicit_label',
    'email_template_radio_thanks_label',
    'email_template_radio_other_label',
    'email_template_radio_custom_label']).then(function(translations) {
          $scope.suggestedMessageGroupLabels = {
            recruit: translations.email_template_radio_recruit_label,
            solicit: translations.email_template_radio_solicit_label,
            thanks: translations.email_template_radio_thanks_label,
            other: translations.email_template_radio_other_label,
            custom: translations.email_template_radio_custom_label
          };
          return getSuggestedMessages();
        },
    function(translationIds) {
          return $timeout(getSuggestedMessageTypeTranslations,
    500);
        });
      };
      getSuggestedMessageTypeTranslations();
      getSuggestedMessages = function() {
        var suggestedMessagesPromise;
        suggestedMessagesPromise = TeamraiserEmailService.getSuggestedMessages().then(function(response) {
          var ref1,
    suggestedMessages;
          suggestedMessages = LuminateUtilsService.ensureArray((ref1 = response.data.getSuggestedMessagesResponse) != null ? ref1.suggestedMessage : void 0);
          $scope.suggestedMessages = [];
          $scope.suggestedMessageTemplates = [];
          angular.forEach(suggestedMessages,
    function(message) {
            if (message.active === 'true' || message.personal === 'true') {
              if (message.personal === 'true') {
                message.messageGroup = $scope.suggestedMessageGroupLabels.custom;
              } else {
                switch (message.messageType) {
                  case 'RECRUIT':
                    message.messageGroup = $scope.suggestedMessageGroupLabels.recruit;
                    break;
                  case 'SOLICIT':
                    message.messageGroup = $scope.suggestedMessageGroupLabels.solicit;
                    break;
                  case 'THANKS':
                    message.messageGroup = $scope.suggestedMessageGroupLabels.thanks;
                    break;
                  default:
                    message.messageGroup = $scope.suggestedMessageGroupLabels.other;
                }
              }
              $scope.suggestedMessages.push(message);
              if (message.personal === 'true') {
                return $scope.suggestedMessageTemplates.push(message.messageId);
              }
            }
          });
          if ($scope.emailComposer.save_template_id) {
            $scope.emailComposer.suggested_message_id = $scope.emailComposer.save_template_id;
          }
          return response;
        });
        return $rootScope.loadingPromises.push(suggestedMessagesPromise);
      };
      if ($scope.messageType === 'draft' && $scope.messageId) {
        TeamraiserEmailService.getDraft('message_id=' + $scope.messageId).then(function(response) {
          var messageInfo,
    ref1,
    ref2,
    ref3;
          if (response.data.errorResponse) {

          } else {
            // TODO
            messageInfo = (ref1 = response.data.getDraftResponse) != null ? ref1.messageInfo : void 0;
            if (messageInfo) {
              $scope.isEmailComposerReset = true;
              $scope.emailComposer.message_id = $scope.messageId;
              if (messageInfo.layoutId) {
                $scope.emailComposer.layout_id = messageInfo.layoutId;
              }
              if ((ref2 = messageInfo.messageName) != null ? ref2.match('&amp;') : void 0) {
                messageInfo.messageName = messageInfo.messageName.replace('&amp;',
    '&');
              }
              if ((ref3 = messageInfo.subject) != null ? ref3.match('&amp;') : void 0) {
                messageInfo.subject = messageInfo.subject.replace('&amp;',
    '&');
              }
              if (angular.isString(messageInfo.messageName)) {
                $scope.emailComposer.message_name = LuminateUtilsService.ensureString(messageInfo.messageName);
              } else {
                $scope.emailComposer.message_name = messageInfo.subject;
              }
              $scope.emailComposer.subject = LuminateUtilsService.ensureString(messageInfo.subject);
              $scope.emailComposer.prepend_salutation = messageInfo.prependsalutation === 'true';
              return $scope.setEmailMessageBody(messageInfo.messageBody);
            }
          }
        });
      } else if ($scope.messageType === 'copy' && $scope.messageId) {
        TeamraiserEmailService.getSentMessage('message_id=' + $scope.messageId).then(function(response) {
          var messageInfo,
    ref1,
    ref2,
    ref3;
          if (response.data.errorResponse) {

          } else {
            // TODO
            messageInfo = (ref1 = response.data.getSentMessageResponse) != null ? ref1.messageInfo : void 0;
            if (messageInfo) {
              $scope.isEmailComposerReset = true;
              if (messageInfo.layoutId) {
                $scope.emailComposer.layout_id = messageInfo.layoutId;
              }
              if ((ref2 = messageInfo.messageName) != null ? ref2.match('&amp;') : void 0) {
                messageInfo.messageName = messageInfo.messageName.replace('&amp;',
    '&');
              }
              if ((ref3 = messageInfo.subject) != null ? ref3.match('&amp;') : void 0) {
                messageInfo.subject = messageInfo.subject.replace('&amp;',
    '&');
              }
              $scope.messageId = '';
              $scope.emailComposer.message_id = '';
              $scope.emailComposer.message_name = LuminateUtilsService.ensureString(messageInfo.messageName);
              $scope.emailComposer.subject = LuminateUtilsService.ensureString(messageInfo.subject);
              $scope.emailComposer.prepend_salutation = messageInfo.prependsalutation === 'true';
              return $scope.setEmailMessageBody(messageInfo.messageBody);
            }
          }
        });
      } else if ($scope.messageType === 'group' && $scope.messageId) {
        if (contactFilters.indexOf($scope.messageId !== -1)) {
          ContactService.resetSelectedContacts();
          $scope.getGroupRecipientsPage = 0;
          $scope.getGroupRecipients = function() {
            var contactsPromise;
            contactsPromise = ContactService.getTeamraiserAddressBookContacts('tr_ab_filter=' + $scope.messageId + '&skip_groups=true&list_page_size=200&list_page_offset=' + $scope.getGroupRecipientsPage).then(function(response) {
              var addressBookContacts,
    ref1,
    ref2,
    totalNumber;
              totalNumber = ((ref1 = response.data.getTeamraiserAddressBookContactsResponse) != null ? ref1.totalNumberResults : void 0) || 0;
              addressBookContacts = LuminateUtilsService.ensureArray((ref2 = response.data.getTeamraiserAddressBookContactsResponse) != null ? ref2.addressBookContact : void 0);
              angular.forEach(addressBookContacts,
    function(contact) {
                if (contact != null) {
                  return ContactService.addToSelectedContacts(contact);
                }
              });
              if (totalNumber > ContactService.getNumSelectedContacts()) {
                $scope.getGroupRecipientsPage = $scope.getGroupRecipientsPage + 1;
                $scope.getGroupRecipients();
              } else {
                $scope.messageId = '';
                setEmailComposerDefaults();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(contactsPromise);
          };
          $scope.getGroupRecipients();
        }
      }
      personalizedGreetingEnabledPromise = TeamraiserEventService.getEventDataParameter('edp_type=boolean&edp_name=F2F_CENTER_TAF_PERSONALIZED_SALUTATION_ENABLED').then(function(response) {
        var ref1;
        $scope.personalizedSalutationEnabled = ((ref1 = response.data.getEventDataParameterResponse) != null ? ref1.booleanValue : void 0) === 'true';
        $translate('compose_salutation_hint').then(function(translation) {
          var content;
          if (translation != null ? translation.match(/\([^]*\)/) : void 0) {
            content = translation.split('(');
            $scope.composeSalutationHintLabel = content[0];
            return $scope.composeSalutationWhatsThis = content[1].split(')')[0];
          } else {
            $scope.composeSalutationHintLabel = translation;
            return $scope.composeSalutationWhatsThis = null;
          }
        },
    function(translationIds) {
          $scope.composeSalutationHintLabel = 'Include personalized greeting';
          return $scope.composeSalutationWhatsThis = "What's this?";
        });
        return response;
      });
      $rootScope.loadingPromises.push(personalizedGreetingEnabledPromise);
      $scope.showPrependSalutationHelpModal = function() {
        $scope.prependSalutationHelpModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/prependSalutationHelp.html'
        });
        return $scope.prependSalutationHelpModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'prependSalutationHelpModal');
          }
        });
      };
      $scope.loadSuggestedMessage = function() {
        var currentRecipients,
    suggested_message_id;
        $scope.resetEmailComposeAlerts();
        suggested_message_id = $scope.emailComposer.suggested_message_id;
        currentRecipients = $scope.emailComposer.recipients;
        if (suggested_message_id === '' || suggested_message_id === null) {
          setEmailComposerDefaults();
          return $scope.emailComposer.recipients = currentRecipients;
        } else {
          return TeamraiserEmailService.getSuggestedMessage('message_id=' + suggested_message_id).then(function(response) {
            var messageInfo,
    ref1;
            setEmailComposerDefaults();
            $scope.emailComposer.recipients = currentRecipients;
            messageInfo = (ref1 = response.data.getSuggestedMessageResponse) != null ? ref1.messageInfo : void 0;
            if (messageInfo.layoutId) {
              $scope.emailComposer.layout_id = messageInfo.layoutId;
            }
            $scope.emailComposer.suggested_message_id = messageInfo.messageId;
            if (messageInfo.prependsalutation) {
              $scope.emailComposer.prepend_salutation = messageInfo.prependsalutation === "true";
            }
            $scope.emailComposer.subject = LuminateUtilsService.ensureString(messageInfo.subject);
            if ($scope.suggestedMessageTemplates.indexOf(messageInfo.messageId) > -1) {
              $scope.emailComposer.save_template_id = messageInfo.messageId;
            } else {
              $scope.emailComposer.save_template_id = '';
            }
            return $scope.setEmailMessageBody(messageInfo.messageBody);
          });
        }
      };
      $scope.textEditorToolbar = [['h1',
    'h2',
    'h3',
    'p',
    'bold',
    'italics',
    'underline'],
    ['ul',
    'ol',
    'justifyLeft',
    'justifyCenter',
    'justifyRight',
    'justifyFull',
    'indent',
    'outdent'],
    ['insertImage',
    'insertLink',
    'undo',
    'redo']];
      sanitizeEmailComposer = function() {
        var emailComposer;
        emailComposer = angular.copy($scope.emailComposer);
        emailComposer.message_body = ContentService.htmlToRichText($scope.emailComposer.message_body);
        emailComposer.message_name = emailComposer.subject;
        delete emailComposer.suggested_message_id;
        delete emailComposer.save_template_id;
        return $httpParamSerializer(emailComposer);
      };
      cancelDraftPollTimeout = function() {
        if ($scope.draftPollTimeout) {
          $timeout.cancel($scope.draftPollTimeout);
          return delete $scope.draftPollTimeout;
        }
      };
      startDraftPollTimeout = function() {
        cancelDraftPollTimeout();
        if ($scope.isEmailComposerReset) {
          return $scope.isEmailComposerReset = false;
        } else {
          return $scope.draftPollTimeout = $timeout(saveDraft,
    3000);
        }
      };
      $scope.autoSaveDraft = function() {
        var messageBody,
    subject;
        subject = $scope.emailComposer.subject;
        messageBody = ContentService.htmlToRichText($scope.emailComposer.message_body);
        if (subject === '' && messageBody === '') {
          cancelDraftPollTimeout();
          return $rootScope.resizeFrameForCurrentView();
        } else {
          delete $scope.emailComposer.save_template;
          return startDraftPollTimeout();
        }
      };
      saveDraft = function() {
        var requestData;
        requestData = sanitizeEmailComposer();
        if ($scope.savingDraft) {
          return startDraftPollTimeout();
        } else {
          cancelDraftPollTimeout();
          $scope.savingDraft = true;
          if ($scope.emailComposer.message_id === '') {
            return TeamraiserEmailService.addDraft(requestData).then(function(response) {
              var draftMessage,
    messageId,
    ref1,
    ref2;
              $scope.savingDraft = false;
              if (((ref1 = response.data.errorResponse) != null ? ref1.message : void 0) && $scope.emailComposer.save_template) {
                $scope.saveDraftError = response.data.errorResponse.message;
              }
              draftMessage = (ref2 = response.data.addDraftResponse) != null ? ref2.message : void 0;
              if (draftMessage) {
                refreshContactsNavBar();
                messageId = draftMessage.messageId;
                $scope.messageId = messageId;
                $scope.emailComposer.message_name = LuminateUtilsService.ensureString(draftMessage.messageName);
                $scope.emailComposer.message_id = messageId;
                if ($scope.emailComposer.save_template) {
                  $scope.saveDraftSuccess = true;
                  $scope.emailComposer.save_template_id = messageId;
                  $scope.emailComposer.message_id = '';
                  getSuggestedMessages();
                }
              }
              delete $scope.emailComposer.save_template;
              $rootScope.resizeFrameForCurrentView();
              return response;
            });
          } else {
            return TeamraiserEmailService.updateDraft(requestData).then(function(response) {
              var draftMessage,
    messageId,
    ref1,
    ref2,
    ref3;
              $scope.savingDraft = false;
              if (((ref1 = response.data.errorResponse) != null ? ref1.code : void 0) === '2647') {
                TeamraiserEmailService.deleteDraft('message_id=' + $scope.emailComposer.message_id).then(function(response) {
                  return saveDraft();
                });
              }
              if (((ref2 = response.data.errorResponse) != null ? ref2.message : void 0) && $scope.emailComposer.save_template) {
                $scope.saveDraftError = response.data.errorResponse.message;
              }
              draftMessage = (ref3 = response.data.updateDraftResponse) != null ? ref3.message : void 0;
              if (draftMessage) {
                messageId = draftMessage.messageId;
                if ($scope.emailComposer.save_template) {
                  $scope.saveDraftSuccess = true;
                  $scope.emailComposer.suggested_message_id = messageId;
                  $scope.emailComposer.save_template_id = messageId;
                  $scope.emailComposer.message_id = '';
                  getSuggestedMessages();
                }
              }
              delete $scope.emailComposer.save_template;
              $rootScope.resizeFrameForCurrentView();
              return response;
            });
          }
        }
      };
      $scope.$watchGroup(['emailComposer.subject',
    'emailComposer.message_body'],
    function(newVal,
    oldVal,
    $scope) {
        return $scope.autoSaveDraft();
      });
      $scope.saveAsTemplate = function() {
        $scope.resetEmailComposeAlerts();
        $scope.emailProcessing = true;
        $scope.emailComposer.save_template = true;
        $scope.emailComposer.save_template_id = $scope.emailComposer.message_id;
        $scope.emailComposer.message_id = '';
        $scope.emailComposer.message_name = $scope.emailComposer.subject;
        return saveDraft();
      };
      $scope.updateTemplate = function() {
        $scope.resetEmailComposeAlerts();
        $scope.emailProcessing = true;
        $scope.emailComposer.save_template = true;
        $scope.emailComposer.message_id = $scope.emailComposer.save_template_id;
        $scope.emailComposer.message_name = $scope.emailComposer.subject;
        return saveDraft();
      };
      $scope.deleteTemplate = function() {
        var currentMessageId,
    deleteDraftPromise;
        if ($scope.emailComposer.save_template_id) {
          $scope.resetEmailComposeAlerts();
          $scope.emailProcessing = true;
          currentMessageId = $scope.emailComposer.save_template_id;
          deleteDraftPromise = TeamraiserEmailService.deleteDraft('message_id=' + currentMessageId).then(function(response) {
            var ref1,
    ref2,
    ref3;
            if ((ref1 = response.data) != null ? (ref2 = ref1.deleteDraftResponse) != null ? ref2.messageId : void 0 : void 0) {
              $scope.deleteDraftSuccess = true;
            } else if ((ref3 = response.data.errorResponse) != null ? ref3.message : void 0) {
              $scope.deleteDraftError = response.data.errorResponse.message;
            } else {
              $translate('message_template_delete_error_unknown').then(function(translation) {
                return $scope.deleteDraftError = translation;
              },
    function(translationId) {
                return $scope.deleteDraftError = translationId;
              });
            }
            refreshContactsNavBar();
            setEmailComposerDefaults();
            $rootScope.resizeFrameForCurrentView();
            return getSuggestedMessages();
          });
          return $rootScope.loadingPromises.push(deleteDraftPromise);
        }
      };
      $scope.emailPreview = {
        body: ''
      };
      $scope.selectStationeryEnabled = false;
      $scope.stationeryChoices = [];
      getMessageLayoutsPromise = TeamraiserEmailService.getMessageLayouts().then(function(response) {
        var layouts,
    ref1;
        if (response.data.errorResponse) {

        } else {
          // TODO
          layouts = LuminateUtilsService.ensureArray((ref1 = response.data.getMessageLayoutsResponse) != null ? ref1.layout : void 0);
          if (layouts.length > 0) {
            $scope.stationeryChoices = layouts;
            $scope.selectStationeryEnabled = true;
          }
          return $rootScope.resizeFrameForCurrentView();
        }
      });
      $rootScope.loadingPromises.push(getMessageLayoutsPromise);
      $scope.selectStationery = function() {
        var requestData,
    selectStationeryPromise;
        requestData = sanitizeEmailComposer();
        selectStationeryPromise = TeamraiserEmailService.previewMessage(requestData).then(function(response) {
          var ref1;
          if (response.data.errorResponse) {

          // TODO
          } else if (response.data.teamraiserErrorResponse) {

          } else {
            // TODO
            return $scope.emailPreview.body = $sce.trustAsHtml(LuminateUtilsService.ensureString((ref1 = response.data.getMessagePreviewResponse) != null ? ref1.message : void 0));
          }
        });
        return $rootScope.loadingPromises.push(selectStationeryPromise);
      };
      $scope.previewEmail = function() {
        var previewMessagePromise,
    requestData;
        $scope.resetEmailComposeAlerts();
        requestData = sanitizeEmailComposer();
        previewMessagePromise = TeamraiserEmailService.previewMessage(requestData).then(function(response) {
          var ref1;
          if (response.data.errorResponse) {
            $scope.sendEmailError = response.data.errorResponse.message;
            return $rootScope.resizeFrameForCurrentView();
          } else if (response.data.teamraiserErrorResponse) {

          } else {
            // TODO
            $scope.emailPreview.body = $sce.trustAsHtml(LuminateUtilsService.ensureString((ref1 = response.data.getMessagePreviewResponse) != null ? ref1.message : void 0));
            $scope.emailPreviewModal = $uibModal.open({
              scope: $scope,
              templateUrl: './html/modal/emailPreview.html',
              size: 'lg'
            });
            return $scope.emailPreviewModal.rendered.then(function() {
              LuminateUtilsService.adjustModalFramePosition();
              if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
                return ngLoadModal($rootScope,
    $scope,
    'emailPreview');
              }
            });
          }
        });
        return $rootScope.loadingPromises.push(previewMessagePromise);
      };
      closeEmailPreviewModal = function() {
        return $scope.emailPreviewModal.close();
      };
      $scope.cancelEmailPreview = function() {
        return closeEmailPreviewModal();
      };
      $scope.sendEmail = function() {
        var requestData,
    sendEmailPromise;
        if (!$scope.sendingEmail) {
          $scope.sendingEmail = true;
          $scope.resetEmailComposeAlerts();
          requestData = sanitizeEmailComposer();
          sendEmailPromise = TeamraiserEmailService.sendMessage(requestData).then(function(response) {
            var deleteDraftPromise;
            closeEmailPreviewModal();
            $scope.sendingEmail = false;
            $rootScope.scrollToTop();
            if (response.data.errorResponse) {
              $scope.sendEmailError = response.data.errorResponse.message;
              return $rootScope.resizeFrameForCurrentView();
            } else if (response.data.teamraiserErrorResponse) {

            } else {
              // TODO: remove messageType and messageId from URL
              // TODO
              if ($scope.messageId) {
                deleteDraftPromise = TeamraiserEmailService.deleteDraft('message_id=' + $scope.messageId).then(function(response) {
                  return refreshContactsNavBar();
                });
                $rootScope.loadingPromises.push(deleteDraftPromise);
              }
              refreshContactsNavBar();
              $scope.sendEmailSuccess = true;
              ContactService.resetSelectedContacts();
              setEmailComposerDefaults();
              return $rootScope.resizeFrameForCurrentView();
            }
          });
          return $rootScope.loadingPromises.push(sendEmailPromise);
        } else {
          return $scope.sendingEmail = false;
        }
      };
      if (window.ngLoadController && angular.isFunction(ngLoadController)) {
        return ngLoadController($rootScope,
    $scope,
    'emailComposeView');
      }
    }
  ]);

  angular.module('trPcControllers').controller('EmailContactsListViewCtrl', [
    '$rootScope',
    '$scope',
    '$window',
    '$timeout',
    '$routeParams',
    '$location',
    '$httpParamSerializer',
    '$translate',
    '$filter',
    '$uibModal',
    'TeamraiserEmailService',
    'ContactService',
    'LuminateUtilsService',
    function($rootScope,
    $scope,
    $window,
    $timeout,
    $routeParams,
    $location,
    $httpParamSerializer,
    $translate,
    $filter,
    $uibModal,
    TeamraiserEmailService,
    ContactService,
    LuminateUtilsService) {
      var closeAddContactModal,
    closeDeleteContactModal,
    closeEditContactModal,
    closeImportContactsModal,
    closeRemoveContactsFromGroupModal,
    emailAllButtonKey,
    finishRemoveContactsFromGroup,
    getContactById,
    getContactsTotal,
    getImportContactString,
    openDeleteContactModal,
    ref,
    refreshContactsNavBar,
    showDeleteContactError,
    updateContactFilterNames;
      $scope.filter = $routeParams.filter;
      if (!$scope.filter || $scope.filter === ':filter') {
        $scope.filter = 'email_rpt_show_all';
      }
      $scope.refreshContactsNav = 0;
      getContactById = function(contactId) {
        var contact;
        contact = null;
        if ($scope.addressBookContacts.contacts.length > 0) {
          angular.forEach($scope.addressBookContacts.contacts,
    function(currContact) {
            if (currContact.id === contactId) {
              return contact = currContact;
            }
          });
        }
        return contact;
      };
      if (!((ref = $rootScope.selectedContacts) != null ? ref.contacts : void 0)) {
        ContactService.resetSelectedContacts();
      }
      $scope.addressBookNumPerPageOptions = [10,
    25,
    50,
    100,
    500];
      $scope.addressBookContacts = {
        page: 1,
        numPerPage: 10,
        maxContacts: 0,
        totalNumber: 0,
        searching: false,
        contacts: [],
        contactSearchInput: ''
      };
      $scope.addressBookGroups = [];
      $scope.contactSearchInput = '';
      $scope.allContactsSelected = false;
      $scope.contactsSelected = {
        all: function(newVal) {
          if (arguments.length) {
            return $scope.allContactsSelected = newVal;
          } else {
            return $scope.allContactsSelected;
          }
        }
      };
      $scope.contactsUpdated = false;
      getContactsTotal = function() {
        var getContactsTotalPromise;
        getContactsTotalPromise = ContactService.getTeamraiserAddressBookContacts('tr_ab_filter=email_rpt_show_all&skip_groups=true&list_page_size=10&list_page_offset=0').then(function(response) {
          var ref1;
          $scope.addressBookContacts.maxContacts = ((ref1 = response.data.getTeamraiserAddressBookContactsResponse) != null ? ref1.totalNumberResults : void 0) || 0;
          return response;
        });
        return $rootScope.loadingPromises.push(getContactsTotalPromise);
      };
      getContactsTotal();
      refreshContactsNavBar = function() {
        getContactsTotal();
        return $scope.refreshContactsNav = $scope.refreshContactsNav + 1;
      };
      $scope.refreshSelectedContacts = function() {
        if ($scope.addressBookContacts.contacts && $scope.addressBookContacts.contacts.length > 0) {
          $scope.numContactsSelected = $filter('filter')($scope.addressBookContacts.contacts,
    {
            selected: true
          }).length;
          $scope.contactsSelected.all($scope.numContactsSelected === $scope.addressBookContacts.contacts.length);
        } else {
          $scope.numContactsSelected = 0;
          $scope.contactsSelected.all(false);
        }
        $scope.totalContactsSelected = ContactService.getNumSelectedContacts();
        return $scope.contactsSelected.all();
      };
      $scope.refreshSelectedContacts();
      $scope.$watchGroup(['addressBookContacts.contacts',
    'contactsUpdated'],
    function() {
        return $scope.refreshSelectedContacts();
      });
      $scope.getContacts = function() {
        var contactsPromise,
    numPerPage,
    pageNumber,
    requestData;
        pageNumber = $scope.addressBookContacts.page - 1;
        numPerPage = $scope.addressBookContacts.numPerPage;
        requestData = 'tr_ab_filter=' + $scope.filter + '&skip_groups=true&list_page_size=' + numPerPage + '&list_page_offset=' + pageNumber;
        if ($scope.contactSearchInput !== '') {
          requestData += '&list_filter_text=' + $scope.contactSearchInput;
        }
        contactsPromise = ContactService.getTeamraiserAddressBookContacts(requestData).then(function(response) {
          var addressBookContacts,
    ref1,
    ref2;
          addressBookContacts = LuminateUtilsService.ensureArray((ref1 = response.data.getTeamraiserAddressBookContactsResponse) != null ? ref1.addressBookContact : void 0);
          $scope.addressBookContacts.contacts = [];
          angular.forEach(addressBookContacts,
    function(contact) {
            if (contact) {
              contact.selected = ContactService.isInSelectedContacts(contact);
              return $scope.addressBookContacts.contacts.push(contact);
            }
          });
          $scope.addressBookContacts.totalNumber = ((ref2 = response.data.getTeamraiserAddressBookContactsResponse) != null ? ref2.totalNumberResults : void 0) || 0;
          return response;
        });
        return $rootScope.loadingPromises.push(contactsPromise);
      };
      $scope.getContacts();
      $scope.isCustomGroup = false;
      $scope.getGroups = function() {
        var getGroupsPromise;
        getGroupsPromise = ContactService.getAddressBookGroups().then(function(response) {
          var abgroups,
    ref1;
          abgroups = LuminateUtilsService.ensureArray((ref1 = response.data.getAddressBookGroupsResponse) != null ? ref1.group : void 0);
          $scope.isCustomGroup = false;
          angular.forEach(abgroups,
    function(group) {
            var filter;
            if (group) {
              filter = 'email_rpt_group_' + group.id;
              if ($scope.filter === filter) {
                $scope.filterName = group.name;
                return $scope.isCustomGroup = true;
              }
            }
          });
          $scope.addressBookGroups = abgroups;
          return response;
        });
        return $rootScope.loadingPromises.push(getGroupsPromise);
      };
      updateContactFilterNames = function() {
        if ($scope.updateContactFilterNamesTimeout) {
          $timeout.cancel($scope.updateContactFilterNamesTimeout);
        }
        if ($scope.filter === 'email_rpt_show_all') {
          return $translate('contacts_groups_all').then(function(translation) {
            return $scope.filterName = translation;
          },
    function(translationId) {
            return $scope.updateContactFilterNamesTimeout = $timeout(updateContactFilterNames,
    500);
          });
        } else if ($scope.filter.match('email_rpt_group_')) {
          return $scope.getGroups();
        } else {
          return $translate('filter_' + $scope.filter).then(function(translation) {
            return $scope.filterName = translation;
          },
    function(translationId) {
            return $scope.updateContactFilterNamesTimeout = $timeout(updateContactFilterNames,
    500);
          });
        }
      };
      updateContactFilterNames();
      $scope.searchContacts = function() {
        $scope.addressBookContacts.page = 1;
        $scope.getContacts();
        return false;
      };
      $scope.clearAllContactAlerts = function() {
        $scope.contactProcessing = false;
        $scope.clearAddContactAlerts();
        $scope.clearImportContactsAlerts();
        $scope.clearEditContactAlerts();
        return $scope.clearDeleteContactAlerts();
      };
      $scope.clearAddContactAlerts = function() {
        if ($scope.addContactError) {
          delete $scope.addContactError;
        }
        if ($scope.addContactSuccess) {
          return delete $scope.addContactSuccess;
        }
      };
      $scope.resetNewContact = function() {
        return $scope.newContact = {
          first_name: '',
          last_name: '',
          email: ''
        };
      };
      $scope.addContact = function() {
        $scope.clearAllContactAlerts();
        $scope.resetNewContact();
        $scope.addContactModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/addContact.html'
        });
        return $scope.addContactModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'addContact');
          }
        });
      };
      closeAddContactModal = function() {
        return $scope.addContactModal.close();
      };
      $scope.cancelAddContact = function() {
        $scope.clearAddContactAlerts();
        return closeAddContactModal();
      };
      $scope.addNewContact = function() {
        var addContactPromise;
        $scope.clearAddContactAlerts();
        if (!$scope.newContact.email || $scope.newContact.email === '') {
          return $translate('contact_add_failure_email').then(function(translation) {
            return $scope.addContactError = translation;
          },
    function(translationId) {
            return $scope.addContactError = translationId;
          });
        } else {
          $scope.contactProcessing = true;
          addContactPromise = ContactService.addAddressBookContact($httpParamSerializer($scope.newContact)).then(function(response) {
            if (response.data.errorResponse) {
              if (response.data.errorResponse.message) {
                $scope.addContactError = response.data.errorResponse.message;
              } else {
                $translate('contact_add_failure_unknown').then(function(translation) {
                  return $scope.addContactError = translation;
                },
    function(translationId) {
                  return $scope.addContactError = translationId;
                });
              }
            } else {
              $translate('contact_add_success').then(function(translation) {
                return $scope.addContactSuccess = translation;
              },
    function(translationId) {
                return $scope.addContactSuccess = translationId;
              });
              closeAddContactModal();
              refreshContactsNavBar();
              $scope.getContacts();
            }
            return response;
          });
          return $rootScope.loadingPromises.push(addContactPromise);
        }
      };
      $scope.resetAddContactsToGroup = function() {
        $scope.addContactGroupForm = {
          groupId: '',
          groupName: '',
          errorMsg: null
        };
        if ($scope.addressBookGroups.length === 0) {
          return $scope.getGroups();
        }
      };
      $scope.addContactsToGroup = function() {
        var selectedContacts;
        $scope.resetAddContactsToGroup();
        selectedContacts = [];
        angular.forEach($scope.addressBookContacts.contacts,
    function(contact) {
          if (contact != null ? contact.selected : void 0) {
            return selectedContacts.push(contact.id);
          }
        });
        $scope.addContactGroupForm.contactIds = selectedContacts.join(',');
        $scope.addContactsToGroupModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/addContactsToGroup.html'
        });
        return $scope.addContactsToGroupModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'addContactsToGroup');
          }
        });
      };
      $scope.cancelAddContactsToGroup = function() {
        $scope.contactProcessing = false;
        return $scope.addContactsToGroupModal.close();
      };
      $scope.confirmAddContactsToGroup = function() {
        var addContactGroupPromise,
    dataStr;
        delete $scope.addContactGroupForm.errorMsg;
        if ($scope.addContactGroupForm.groupId === '' && $scope.addContactGroupForm.groupName === '') {
          return $translate('contact_add_to_group_warning').then(function(translation) {
            return $scope.addContactGroupForm.errorMsg = translation;
          },
    function(translationId) {
            return $scope.addContactGroupForm.errorMsg = translationId;
          });
        } else {
          $scope.contactProcessing = true;
          if ($scope.addContactGroupForm.groupName !== '') {
            dataStr = 'group_name=' + encodeURIComponent($scope.addContactGroupForm.groupName) + '&contact_ids=' + $scope.addContactGroupForm.contactIds;
            addContactGroupPromise = ContactService.addAddressBookGroup(dataStr).then(function(response) {
              if (response.data.errorResponse) {
                if (response.data.errorResponse.message) {
                  $scope.addContactGroupForm.errorMsg = response.data.errorResponse.message;
                } else {
                  $translate('contact_add_to_group_unknown_error').then(function(translation) {
                    return $scope.addContactGroupForm.errorMsg = translation;
                  },
    function(translationId) {
                    return $scope.addContactGroupForm.errorMsg = translationId;
                  });
                }
              } else {
                refreshContactsNavBar();
                $scope.cancelAddContactsToGroup();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(addContactGroupPromise);
          } else {
            dataStr = 'group_id=' + $scope.addContactGroupForm.groupId + '&contact_ids=' + $scope.addContactGroupForm.contactIds;
            addContactGroupPromise = ContactService.addContactsToGroup(dataStr).then(function(response) {
              if (response.data.errorResponse) {
                if (response.data.errorResponse.message) {
                  $scope.addContactGroupForm.errorMsg = response.data.errorResponse.message;
                } else {
                  $translate('contact_add_to_group_unknown_error').then(function(translation) {
                    return $scope.addContactGroupForm.errorMsg = translation;
                  },
    function(translationId) {
                    return $scope.addContactGroupForm.errorMsg = translationId;
                  });
                }
              } else {
                refreshContactsNavBar();
                $scope.cancelAddContactsToGroup();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(addContactGroupPromise);
          }
        }
      };
      $scope.resetAddContactGroup = function() {
        return $scope.addContactGroupForm = {
          groupName: '',
          errorMsg: null
        };
      };
      $scope.addContactGroup = function() {
        $scope.resetAddContactGroup();
        $scope.addContactGroupModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/addContactGroup.html'
        });
        return $scope.addContactGroupModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'addContactGroup');
          }
        });
      };
      $scope.cancelAddContactGroup = function() {
        $scope.contactProcessing = false;
        return $scope.addContactGroupModal.close();
      };
      $scope.confirmAddContactGroup = function() {
        var addContactGroupPromise,
    dataStr;
        delete $scope.addContactGroupForm.errorMsg;
        if ($scope.addContactGroupForm.groupName === '') {
          return $translate('contacts_add_group_failure').then(function(translation) {
            return $scope.addContactGroupForm.errorMsg = translation;
          },
    function(translationId) {
            return $scope.addContactGroupForm.errorMsg = translationId;
          });
        } else {
          $scope.contactProcessing = true;
          dataStr = 'group_name=' + encodeURIComponent($scope.addContactGroupForm.groupName);
          addContactGroupPromise = ContactService.addAddressBookGroup(dataStr).then(function(response) {
            if (response.data.errorResponse) {
              if (response.data.errorResponse.message) {
                $scope.addContactGroupForm.errorMsg = response.data.errorResponse.message;
              } else {
                $translate('contacts_add_group_failure').then(function(translation) {
                  return $scope.addContactGroupForm.errorMsg = translation;
                },
    function(translationId) {
                  return $scope.addContactGroupForm.errorMsg = translationId;
                });
              }
            } else {
              refreshContactsNavBar();
              $scope.cancelAddContactGroup();
            }
            return response;
          });
          return $rootScope.loadingPromises.push(addContactGroupPromise);
        }
      };
      $scope.deleteContactGroup = function() {
        delete $scope.deleteContactGroupError;
        $scope.deleteContactGroupId = $scope.filter.replace('email_rpt_group_',
    '');
        $scope.deleteContactGroupModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/deleteContactGroup.html'
        });
        return $scope.deleteContactGroupModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'deleteContactGroup');
          }
        });
      };
      $scope.cancelDeleteContactGroup = function() {
        delete $scope.deleteContactGroupError;
        delete $scope.deleteContactGroupId;
        $scope.contactProcessing = false;
        return $scope.deleteContactGroupModal.close();
      };
      $scope.confirmDeleteContactGroup = function() {
        var deleteContactGroupPromise;
        $scope.contactProcessing = true;
        deleteContactGroupPromise = ContactService.deleteAddressBookGroups('group_ids=' + $scope.deleteContactGroupId).then(function(response) {
          if (response.data.errorResponse) {
            if (response.data.errorResponse.message) {
              return $scope.deleteContactGroupError = response.data.errorResponse.message;
            } else {
              return $translate('contact_delete_group_unknown_error').then(function(translation) {
                return $scope.deleteContactGroupError = translation;
              },
    function(translationId) {
                return $scope.deleteContactGroupError = translationId;
              });
            }
          } else {
            $scope.cancelDeleteContactGroup();
            return $location.path('/email/contacts');
          }
        });
        return $rootScope.loadingPromises.push(deleteContactGroupPromise);
      };
      $scope.clearImportContactsAlerts = function() {
        $scope.contactProcessing = false;
        if ($scope.importContactsError) {
          delete $scope.importContactsError;
        }
        if ($scope.importContactsSuccess) {
          return delete $scope.importContactsSuccess;
        }
      };
      $translate('contact_import_consent_needed').then(function(translation) {
        return $scope.contactImportConsentNeeded = translation;
      },
    function(translationId) {
        return $scope.contactImportConsentNeeded = translationId;
      });
      $scope.resetImportContacts = function() {
        $scope.contactImport = {
          step: 'choose-type',
          import_type: '',
          csv_file: null,
          jobId: null,
          jobEvents: [],
          contactsToAdd: []
        };
        return $scope.contactImport.jobEvents.push({
          message: $scope.contactImportConsentNeeded
        });
      };
      $scope.importContacts = function() {
        $scope.clearAllContactAlerts();
        $scope.resetImportContacts();
        $scope.importContactsModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/importContacts.html'
        });
        return $scope.importContactsModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'importContacts');
          }
        });
      };
      closeImportContactsModal = function() {
        return $scope.importContactsModal.close();
      };
      $scope.cancelImportContacts = function() {
        $scope.clearImportContactsAlerts();
        return closeImportContactsModal();
      };
      $scope.chooseImportContactType = function() {
        var importType,
    requestData,
    startOnlineAddressBookImportPromise;
        $scope.clearImportContactsAlerts();
        importType = $scope.contactImport.import_type;
        if (!importType || importType === '') {
          return $translate('addressbookimport_selectsource_none_selected_failure').then(function(translation) {
            return $scope.importContactsError = translation;
          },
    function(translationId) {
            return $scope.importContactsError = translationId;
          });
        } else {
          if (importType === 'csv') {
            return $scope.contactImport.step = 'csv-upload';
          } else {
            $scope.contactImport.step = 'online-consent';
            $scope.contactProcessing = true;
            requestData = 'import_source=' + $scope.contactImport.import_type;
            requestData += '&callback_url=' + $location.absUrl().split('?')[0].replace('dashboard.html',
    'html/popup/address-book-import-callback.html');
            startOnlineAddressBookImportPromise = ContactService.startOnlineAddressBookImport(requestData).then(function(response) {
              var jobId,
    oauthUrl,
    ref1,
    ref2;
              if (response.data.errorResponse) {
                if (response.data.errorResponse.message) {
                  $scope.importContactsError = response.data.errorResponse.message;
                } else {
                  $translate('addressbookimport_thirdpartystatus_service_failure').then(function(translation) {
                    return $scope.importContactsError = translation;
                  },
    function(translationId) {
                    return $scope.importContactsError = translationId;
                  });
                }
                $scope.resetImportContacts();
              } else {
                $scope.contactProcessing = false;
                jobId = (ref1 = response.data.startOnlineAddressBookImportResponse) != null ? ref1.jobId : void 0;
                oauthUrl = (ref2 = response.data.startOnlineAddressBookImportResponse) != null ? ref2.oauthUrl : void 0;
                if (jobId && oauthUrl) {
                  $scope.contactImport.jobId = jobId;
                  $timeout(function() {
                    return $window.open(oauthUrl,
    '_blank',
    'location=no,menubar=no,toolbar=no,width=400,height=400');
                  },
    500);
                }
              }
              return response;
            });
            return $rootScope.loadingPromises.push(startOnlineAddressBookImportPromise);
          }
        }
      };
      $scope.getAddressBookImportJobStatus = function(importJobId) {
        var getImportJobStatusPromise;
        $scope.contactProcessing = true;
        getImportJobStatusPromise = ContactService.getAddressBookImportJobStatus('import_job_id=' + importJobId).then(function(response) {
          var events,
    getAddressBookImportContactsPromise,
    jobEvents,
    jobStatus,
    ref1,
    ref2,
    ref3;
          $scope.contactProcessing = false;
          if (response.data.errorResponse) {
            if (response.data.errorResponse.message) {
              $scope.importContactsError = response.data.errorResponse.message;
            } else {
              $translate('addressbookimport_thirdpartystatus_service_failure').then(function(translation) {
                return $scope.importContactsError = translation;
              },
    function(translationId) {
                return $scope.importContactsError = translationId;
              });
            }
            $scope.resetImportContacts();
          } else {
            jobStatus = (ref1 = response.data.getAddressBookImportJobStatusResponse) != null ? ref1.jobStatus : void 0;
            if (!jobStatus) {
              if (response.data.errorResponse.message) {
                $scope.importContactsError = response.data.errorResponse.message;
              } else {
                $translate('addressbookimport_thirdpartystatus_service_failure').then(function(translation) {
                  return $scope.importContactsError = translation;
                },
    function(translationId) {
                  return $scope.importContactsError = translationId;
                });
              }
              $scope.resetImportContacts();
            } else {
              if (jobStatus === 'PENDING') {
                events = LuminateUtilsService.ensureArray((ref2 = response.data.getAddressBookImportJobStatusResponse) != null ? (ref3 = ref2.events) != null ? ref3.event : void 0 : void 0);
                if (events.length === 0) {
                  $scope.updateImportJobEvents();
                } else {
                  jobEvents = [];
                  angular.forEach(events,
    function(event) {
                    return jobEvents.push({
                      message: event
                    });
                  });
                  $scope.updateImportJobEvents(jobEvents);
                }
                $scope.getAddressBookImportJobStatus(importJobId);
              } else if (jobStatus === 'SUCCESS') {
                $scope.contactProcessing = true;
                getAddressBookImportContactsPromise = ContactService.getAddressBookImportContacts('import_job_id=' + importJobId).then(function(response) {
                  var contacts,
    contactsAvailableForImport,
    ref4;
                  $scope.contactProcessing = false;
                  if (response.data.errorResponse) {
                    if (response.data.errorResponse.message) {
                      $scope.importContactsError = response.data.errorResponse.message;
                    } else {
                      $translate('addressbookimport_thirdpartystatus_service_failure').then(function(translation) {
                        return $scope.importContactsError = translation;
                      },
    function(translationId) {
                        return $scope.importContactsError = translationId;
                      });
                    }
                    $scope.resetImportContacts();
                  } else {
                    contacts = LuminateUtilsService.ensureArray((ref4 = response.data.getAddressBookImportContactsResponse) != null ? ref4.contact : void 0);
                    if (contacts.length === 0) {
                      $scope.setContactsAvailableForImport();
                    } else {
                      contactsAvailableForImport = [];
                      angular.forEach(contacts,
    function(contact) {
                        var email,
    firstName,
    lastName;
                        firstName = contact.firstName;
                        lastName = contact.lastName;
                        email = contact.email;
                        if (LuminateUtilsService.ensureString(firstName) === '') {
                          delete contact.firstName;
                        }
                        if (LuminateUtilsService.ensureString(lastName) === '') {
                          delete contact.lastName;
                        }
                        if (LuminateUtilsService.ensureString(email) === '') {
                          delete contact.email;
                        }
                        if (contact) {
                          return contactsAvailableForImport.push(contact);
                        }
                      });
                      $scope.setContactsAvailableForImport(contactsAvailableForImport);
                    }
                  }
                  return response;
                });
                $rootScope.loadingPromises.push(getAddressBookImportContactsPromise);
              }
            }
          }
          return response;
        });
        return $rootScope.loadingPromises.push(getImportJobStatusPromise);
      };
      window.trPcContactImport = {
        importOauthCallback: function(importJobId,
    oauthToken,
    oauthVerifier,
    codeParam) {
          var importOauthCallbackPromise,
    requestData;
          requestData = '';
          if (!importJobId && $scope.contactImport.jobId) {
            importJobId = $scope.contactImport.jobId;
          }
          if (importJobId) {
            requestData += '&import_job_id=' + importJobId;
          }
          if (oauthToken) {
            requestData += '&oauth_token=' + oauthToken;
          }
          if (oauthVerifier) {
            requestData += '&oauth_verifier=' + oauthVerifier;
          }
          if (codeParam) {
            requestData += '&code=' + codeParam;
          }
          requestData = requestData.slice(1);
          importOauthCallbackPromise = ContactService.addressBookImportOAuthCallback(requestData).then(function(response) {
            if (response.data.errorResponse) {
              if (response.data.errorResponse.message) {
                $scope.importContactsError = response.data.errorResponse.message;
              } else {
                $translate('addressbookimport_thirdpartystatus_service_failure').then(function(translation) {
                  return $scope.importContactsError = translation;
                },
    function(translationId) {
                  return $scope.importContactsError = translationId;
                });
              }
              $scope.resetImportContacts();
            } else {
              $scope.getAddressBookImportJobStatus(importJobId);
            }
            if (!$scope.$$phase) {
              $scope.$apply();
            }
            return response;
          });
          return $rootScope.loadingPromises.push(importOauthCallbackPromise);
        }
      };
      getImportContactString = function(contact) {
        var contactData;
        contactData = '';
        if (contact.firstName) {
          contactData += '"' + contact.firstName + '"';
        }
        contactData += ', ';
        if (contact.lastName) {
          contactData += '"' + contact.lastName + '"';
        }
        contactData += ', ';
        if (contact.email) {
          contactData += '"' + contact.email + '"';
        }
        return contactData;
      };
      $scope.updateImportJobEvents = function(jobEvents) {
        if (jobEvents && jobEvents.length !== 0) {
          return $scope.contactImport.jobEvents = jobEvents;
        }
      };
      $scope.setContactsAvailableForImport = function(contactsAvailableForImport) {
        $scope.clearImportContactsAlerts();
        $scope.contactsAvailableForImport = contactsAvailableForImport || [];
        if ($scope.contactsAvailableForImport.length === 0) {
          $translate('contact_no_contacts_warning').then(function(translation) {
            return $scope.importContactsError = translation;
          },
    function(translationId) {
            return $scope.importContactsError = translationId;
          });
          return $scope.resetImportContacts();
        } else {
          return $scope.contactImport.step = 'contacts-available-for-import';
        }
      };
      $scope.selectAllContactsToAdd = function() {
        var contactsAvailableForImport;
        contactsAvailableForImport = [];
        $scope.contactImport.contactsToAdd = [];
        angular.forEach($scope.contactsAvailableForImport,
    function(contactAvailableForImport) {
          contactAvailableForImport.selected = true;
          contactsAvailableForImport.push(contactAvailableForImport);
          return $scope.contactImport.contactsToAdd.push(getImportContactString(contactAvailableForImport));
        });
        return $scope.contactsAvailableForImport = contactsAvailableForImport;
      };
      $scope.deselectAllContactsToAdd = function() {
        var contactsAvailableForImport;
        contactsAvailableForImport = [];
        angular.forEach($scope.contactsAvailableForImport,
    function(contactAvailableForImport) {
          contactAvailableForImport.selected = false;
          return contactsAvailableForImport.push(contactAvailableForImport);
        });
        $scope.contactsAvailableForImport = contactsAvailableForImport;
        return $scope.contactImport.contactsToAdd = [];
      };
      $scope.toggleContactToAdd = function(contact) {
        var contactData,
    contactToAddIndex;
        contactData = getImportContactString(contact);
        contactToAddIndex = $scope.contactImport.contactsToAdd.indexOf(contactData);
        if (contactToAddIndex === -1) {
          return $scope.contactImport.contactsToAdd.push(contactData);
        } else {
          return $scope.contactImport.contactsToAdd.splice(contactToAddIndex,
    1);
        }
      };
      $scope.chooseContactsToImport = function() {
        var importAddressBookContactsPromise;
        $scope.clearImportContactsAlerts();
        if ($scope.contactImport.contactsToAdd.length === 0) {
          return $translate('addressbookimport_selectcontacts_none_selected_failure').then(function(translation) {
            return $scope.importContactsError = translation;
          },
    function(translationId) {
            return $scope.importContactsError = translationId;
          });
        } else {
          $scope.contactProcessing = true;
          importAddressBookContactsPromise = ContactService.importAddressBookContacts('contacts_to_add=' + encodeURIComponent($scope.contactImport.contactsToAdd.join('\n'))).then(function(response) {
            var duplicateContacts,
    errorContacts,
    potentialDuplicateContacts,
    ref1,
    ref2,
    ref3,
    ref4,
    savedContacts;
            if (response.data.errorResponse) {
              return $scope.importContactsError = response.data.errorResponse.message;
            } else {
              errorContacts = LuminateUtilsService.ensureArray((ref1 = response.data.importAddressBookContactsResponse) != null ? ref1.errorContact : void 0);
              potentialDuplicateContacts = LuminateUtilsService.ensureArray((ref2 = response.data.importAddressBookContactsResponse) != null ? ref2.potentialDuplicateContact : void 0);
              duplicateContacts = LuminateUtilsService.ensureArray((ref3 = response.data.importAddressBookContactsResponse) != null ? ref3.duplicateContact : void 0);
              savedContacts = LuminateUtilsService.ensureArray((ref4 = response.data.importAddressBookContactsResponse) != null ? ref4.savedContact : void 0);
              // TODO: handle errorContacts, potentialDuplicateContacts, and duplicateContacts
              $scope.importContactsSuccess = true;
              $scope.contactProcessing = false;
              closeImportContactsModal();
              refreshContactsNavBar();
              return $scope.getContacts();
            }
          });
          return $rootScope.loadingPromises.push(importAddressBookContactsPromise);
        }
      };
      $scope.uploadContactsCSV = function() {
        var requestFormData,
    uploadContactsCsvPromise;
        $scope.clearImportContactsAlerts();
        requestFormData = new FormData;
        if (!$scope.contactImport.csv_file) {
          return $translate('contacts_upload_generic_error').then(function(translation) {
            return $scope.importContactsError = translation;
          },
    function(translationId) {
            return $scope.importContactsError = translationId;
          });
        } else {
          $scope.contactProcessing = true;
          requestFormData.append('contacts_upload_file',
    $scope.contactImport.csv_file);
          uploadContactsCsvPromise = ContactService.parseCsvContacts(requestFormData).then(function(response) {
            var confidenceLevel,
    contactsAvailableForImport,
    csvDataRows,
    csvJson,
    emailColumnIndex,
    firstNameColumnIndex,
    lastNameColumnIndex,
    proposedMapping,
    ref1;
            if (response.data.errorResponse) {
              if (response.data.errorResponse.message) {
                $scope.importContactsError = response.data.errorResponse.message;
              } else {
                $translate('contacts_upload_generic_error').then(function(translation) {
                  return $scope.importContactsError = translation;
                },
    function(translationId) {
                  return $scope.importContactsError = translationId;
                });
              }
            } else {
              $scope.contactProcessing = false;
              csvJson = response.data.parseCsvContactsResponse;
              confidenceLevel = csvJson.confidenceLevel;
              // TODO: do something with confidenceLevel
              proposedMapping = csvJson.proposedMapping;
              if (proposedMapping) {
                firstNameColumnIndex = Number(proposedMapping.firstNameColumnIndex);
                lastNameColumnIndex = Number(proposedMapping.lastNameColumnIndex);
                emailColumnIndex = Number(proposedMapping.emailColumnIndex);
                csvDataRows = LuminateUtilsService.ensureArray((ref1 = csvJson.csvDataRows) != null ? ref1.csvDataRow : void 0);
                if (csvDataRows.length === 0) {

                } else {
                  // TODO
                  contactsAvailableForImport = [];
                  angular.forEach(csvDataRows,
    function(csvDataRow) {
                    var contact,
    csvValue,
    email,
    firstName,
    lastName;
                    csvValue = csvDataRow.csvValue;
                    firstName = csvValue[firstNameColumnIndex];
                    lastName = csvValue[lastNameColumnIndex];
                    email = csvValue[emailColumnIndex];
                    contact = {
                      firstName: firstName,
                      lastName: lastName,
                      email: email
                    };
                    if (LuminateUtilsService.ensureString(firstName) === '') {
                      delete contact.firstName;
                    }
                    if (LuminateUtilsService.ensureString(lastName) === '') {
                      delete contact.lastName;
                    }
                    if (LuminateUtilsService.ensureString(email) === '') {
                      delete contact.email;
                    }
                    return contactsAvailableForImport.push(contact);
                  });
                  $scope.setContactsAvailableForImport(contactsAvailableForImport);
                }
              }
            }
            return response;
          });
          return $rootScope.loadingPromises.push(uploadContactsCsvPromise);
        }
      };
      $scope.toggleContact = function(contactId) {
        var contact,
    contactSelected;
        contact = getContactById(contactId);
        contactSelected = ContactService.isInSelectedContacts(contact);
        if (!contactSelected) {
          // add contact to selectedContacts
          contact.selected = true;
          ContactService.addToSelectedContacts(contact);
        } else {
          // remove contact from selectedContacts
          contact.selected = false;
          ContactService.removeFromSelectedContacts(contact);
        }
        return $scope.contactsUpdated = !$scope.contactsUpdated;
      };
      $scope.toggleAllContacts = function() {
        var selectToggle;
        selectToggle = $scope.contactsSelected.all();
        angular.forEach($scope.addressBookContacts.contacts,
    function(contact) {
          if (contact.selected !== selectToggle) {
            return $scope.toggleContact(contact.id);
          }
        });
        $scope.contactsSelected.all(selectToggle);
        return $scope.refreshSelectedContacts();
      };
      $scope.clearEditContactAlerts = function() {
        $scope.contactProcessing = false;
        if ($scope.editContactError) {
          delete $scope.editContactError;
        }
        if ($scope.editContactSuccess) {
          return delete $scope.editContactSuccess;
        }
      };
      $scope.selectContact = function(contactId) {
        var contact;
        $scope.clearAllContactAlerts();
        contact = getContactById(contactId);
        $scope.editContactMode = false;
        $scope.viewContact = angular.copy(contact);
        $scope.updatedContact = {
          contact_id: contact.id,
          first_name: contact.firstName,
          last_name: contact.lastName,
          email: contact.email,
          street1: contact.street1,
          street2: contact.street2,
          city: contact.city,
          state: contact.state,
          zip: contact.zip,
          country: contact.country
        };
        $scope.editContactModal = $uibModal.open({
          scope: $scope,
          backdrop: 'static',
          templateUrl: './html/modal/editContact.html'
        });
        return $scope.editContactModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'editContact');
          }
        });
      };
      closeEditContactModal = function() {
        return $scope.editContactModal.close();
      };
      $scope.cancelEditContact = function() {
        delete $scope.editContactMode;
        delete $scope.viewContact;
        delete $scope.updatedContact;
        $scope.clearEditContactAlerts();
        return closeEditContactModal();
      };
      $scope.toggleEditContact = function() {
        return $scope.editContactMode = !$scope.editContactMode;
      };
      $scope.saveUpdatedContact = function() {
        var updateContactPromise;
        $scope.clearEditContactAlerts();
        if (!$scope.updatedContact) {

        } else {
          // TODO
          $scope.contactProcessing = true;
          updateContactPromise = ContactService.updateTeamraiserAddressBookContact($httpParamSerializer($scope.updatedContact)).then(function(response) {
            if (response.data.errorResponse) {
              if (response.data.errorResponse.message) {
                $scope.editContactError = response.data.errorResponse.message;
              } else {
                $translate('contact_add_failure_unknown').then(function(translation) {
                  return $scope.editContactError = translation;
                },
    function(translationId) {
                  return $scope.editContactError = translationId;
                });
              }
            } else {
              $translate('contact_edit_success').then(function(translation) {
                return $scope.editContactSuccess = translation;
              },
    function(translationId) {
                return $scope.editContactSuccess = translation;
              });
              $scope.cancelEditContact();
              $rootScope.scrollToTop();
              refreshContactsNavBar();
              $scope.getContacts();
            }
            return response;
          });
          return $rootScope.loadingPromises.push(updateContactPromise);
        }
      };
      $scope.clearDeleteContactAlerts = function() {
        $scope.contactProcessing = false;
        if ($scope.deleteContactError) {
          delete $scope.deleteContactError;
        }
        if ($scope.deleteContactSuccess) {
          return delete $scope.deleteContactSuccess;
        }
      };
      closeDeleteContactModal = function() {
        delete $scope.contactsToDelete;
        $scope.contactProcessing = false;
        if ($scope.deleteContactModal) {
          $scope.deleteContactModal.close();
        }
        return $rootScope.scrollToTop();
      };
      showDeleteContactError = function() {
        $translate('contacts_warn_delete_failure_body').then(function(translation) {
          return $scope.deleteContactError = translation;
        },
    function(translationId) {
          return $scope.deleteContactError = translationId;
        });
        return closeDeleteContactModal();
      };
      openDeleteContactModal = function() {
        $scope.clearDeleteContactAlerts();
        if ($scope.contactsToDelete) {
          $scope.deleteContactModal = $uibModal.open({
            scope: $scope,
            templateUrl: './html/modal/deleteContact.html'
          });
          return $scope.deleteContactModal.rendered.then(function() {
            LuminateUtilsService.adjustModalFramePosition();
            if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
              return ngLoadModal($rootScope,
    $scope,
    'deleteContact');
            }
          });
        } else {
          return showDeleteContactError();
        }
      };
      $scope.deleteContact = function(contactId) {
        $scope.contactsToDelete = [];
        $scope.contactsToDelete.push(getContactById(contactId));
        return openDeleteContactModal();
      };
      $scope.deleteSelectedContacts = function() {
        $scope.contactsToDelete = angular.copy($rootScope.selectedContacts.contacts);
        return openDeleteContactModal();
      };
      $scope.cancelDeleteContact = function() {
        return closeDeleteContactModal();
      };
      $scope.confirmDeleteContact = function() {
        var contactIds,
    deleteContactPromise;
        if (!$scope.contactsToDelete) {
          return showDeleteContactError();
        } else {
          contactIds = [];
          angular.forEach($scope.contactsToDelete,
    function(contact) {
            if (contact.id) {
              return contactIds.push(contact.id);
            }
          });
          $scope.contactProcessing = true;
          deleteContactPromise = ContactService.deleteTeamraiserAddressBookContacts('contact_ids=' + contactIds.toString()).then(function(response) {
            if (response.data.errorResponse) {
              if (response.data.errorResponse.message) {
                $scope.deleteContactError = response.data.errorResponse.message;
              } else {
                $translate('contacts_warn_delete_failure_body').then(function(translation) {
                  return $scope.deleteContactError = translation;
                },
    function(translationId) {
                  return $scope.deleteContactError = translationId;
                });
              }
            } else {
              $translate('contacts_delete_success').then(function(translation) {
                return $scope.deleteContactSuccess = translation;
              },
    function(translationId) {
                return $scope.deleteContactSuccess = translationId;
              });
            }
            ContactService.resetSelectedContacts();
            closeDeleteContactModal();
            $rootScope.scrollToTop();
            refreshContactsNavBar();
            $scope.getContacts();
            return response;
          });
          return $rootScope.loadingPromises.push(deleteContactPromise);
        }
      };
      $scope.clearRemoveContactsFromGroupAlerts = function() {
        $scope.removeContactsFromGroupCount = 0;
        $scope.contactProcessing = false;
        if ($scope.removeContactsFromGroupErrors) {
          delete $scope.removeContactsFromGroupErrors;
        }
        if ($scope.removeContactsFromGroupErrorMessage) {
          delete $scope.removeContactsFromGroupErrorMessage;
        }
        if ($scope.removeContactsFromGroupSuccess) {
          return delete $scope.removeContactsFromGroupSuccess;
        }
      };
      closeRemoveContactsFromGroupModal = function() {
        delete $scope.contactsToRemoveFromGroup;
        $scope.contactProcessing = false;
        if ($scope.removeContactsFromGroupModal) {
          $scope.removeContactsFromGroupModal.close();
        }
        return $rootScope.scrollToTop();
      };
      $scope.removeContactsFromGroup = function() {
        $scope.contactsToRemoveFromGroup = angular.copy($rootScope.selectedContacts.contacts);
        $scope.clearRemoveContactsFromGroupAlerts();
        $scope.removeContactsFromGroupModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/removeContactsFromGroup.html'
        });
        return $scope.removeContactsFromGroupModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'removeContactsFromGroup');
          }
        });
      };
      $scope.cancelRemoveContactsFromGroup = function() {
        return closeRemoveContactsFromGroupModal();
      };
      finishRemoveContactsFromGroup = function() {
        if (!$scope.removeContactsFromGroupErrors) {
          $scope.removeContactsFromGroupSuccess = true;
        } else {
          $translate('contacts_remove_from_group_failure_body').then(function(translation) {
            $scope.removeContactsFromGroupErrorMessage = translation;
            return angular.forEach($scope.removeContactsFromGroupErrors,
    function(contactError) {
              if (contactError) {
                return $scope.removeContactsFromGroupErrorMessage += '<br/>' + contactError;
              }
            });
          },
    function(translationId) {
            $scope.removeContactsFromGroupErrorMessage = translationId;
            return angular.forEach($scope.removeContactsFromGroupErrors,
    function(contactError) {
              if (contactError) {
                return $scope.removeContactsFromGroupErrorMessage += '<br/>' + contactError;
              }
            });
          });
        }
        ContactService.resetSelectedContacts();
        closeRemoveContactsFromGroupModal();
        refreshContactsNavBar();
        return $scope.getContacts();
      };
      $scope.confirmRemoveContactsFromGroup = function() {
        $scope.removeContactsGroupId = $scope.filter.replace('email_rpt_group_',
    '');
        $scope.contactProcessing = true;
        return angular.forEach($scope.contactsToRemoveFromGroup,
    function(contact) {
          var dataStr,
    removContactFromGroupPromise;
          if (contact.id) {
            dataStr = 'group_id=' + $scope.removeContactsGroupId + '&contact_id=' + contact.id;
            removContactFromGroupPromise = ContactService.removeContactFromGroup(dataStr).then(function(response) {
              if (response.data.errorResponse) {
                if (!$scope.removeContactsFromGroupErrors) {
                  $scope.removeContactsFromGroupErrors = [];
                }
                if (response.data.errorResponse.message) {
                  $scope.removeContactsFromGroupErrors.push(response.data.errorResponse.message);
                } else {
                  $translate('contacts_remove_from_group_failure_unknown').then(function(translation) {
                    return $scope.removeContactsFromGroupErrors.push(translation + ContactService.getContactString(contact));
                  },
    function(translationId) {
                    return $scope.removeContactsFromGroupErrors.push(translationId + ContactService.getContactString(contact));
                  });
                }
              }
              $scope.removeContactsFromGroupCount++;
              if ($scope.removeContactsFromGroupCount >= $scope.contactsToRemoveFromGroup.length) {
                finishRemoveContactsFromGroup();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(removContactFromGroupPromise);
          }
        });
      };
      $scope.emailSelectedContacts = function() {
        return $location.path('/email/compose');
      };
      if ($scope.filter === 'email_rpt_show_all') {
        emailAllButtonKey = 'contacts_email_all_button';
      } else {
        emailAllButtonKey = 'contacts_email_group_button';
      }
      $translate(emailAllButtonKey).then(function(translation) {
        return $scope.emailAllButtonLabel = translation;
      },
    function(translationId) {
        return $scope.emailAllButtonLabel = translationId;
      });
      $scope.emailAllContacts = function() {
        return $location.path('/email/compose/group/' + $scope.filter);
      };
      if (window.ngLoadController && angular.isFunction(ngLoadController)) {
        return ngLoadController($rootScope,
    $scope,
    'emailContactsListView');
      }
    }
  ]);

  angular.module('trPcControllers').controller('EmailMessageListViewCtrl', [
    '$scope',
    '$rootScope',
    '$routeParams',
    '$location',
    '$translate',
    '$timeout',
    '$uibModal',
    'TeamraiserEmailService',
    'LuminateUtilsService',
    function($scope,
    $rootScope,
    $routeParams,
    $location,
    $translate,
    $timeout,
    $uibModal,
    TeamraiserEmailService,
    LuminateUtilsService) {
      var closeDeleteMessageModal,
    closeSentMessageModal,
    getMessageTypeTranslations;
      $scope.messageType = $routeParams.messageType;
      $scope.refreshContactsNav = 0;
      $scope.emailMessages = {
        page: 1
      };
      $scope.getEmailMessages = function() {
        var messageTypes;
        messageTypes = ['draft',
    'sentMessage'];
        return angular.forEach(messageTypes,
    function(messageType) {
          var apiMethod,
    messageListPromise,
    pageNumber,
    pageSize,
    sortColumn;
          if ($scope.messageType === messageType) {
            apiMethod = 'get' + messageType.charAt(0).toUpperCase() + messageType.slice(1) + 's';
            sortColumn = messageType === 'draft' ? 'modify_date' : 'log.date_sent';
            pageSize = '10';
            pageNumber = $scope.emailMessages.page - 1;
            messageListPromise = TeamraiserEmailService[apiMethod]('list_sort_column=' + sortColumn + '&list_ascending=false&list_page_size=' + pageSize + '&list_page_offset=' + pageNumber).then(function(response) {
              var messageItems,
    responseData;
              responseData = response.data[apiMethod + 'Response'];
              messageItems = LuminateUtilsService.ensureArray(responseData != null ? responseData.messageItem : void 0);
              $scope.emailMessages.messages = messageItems;
              $scope.emailMessages.totalNumber = (responseData != null ? responseData.totalNumberResults : void 0) || 0;
              return response;
            });
            return $rootScope.loadingPromises.push(messageListPromise);
          }
        });
      };
      $scope.getEmailMessages();
      getMessageTypeTranslations = function() {
        if ($scope.getMessageTypeTranslationsTimeout) {
          $timeout.cancel($scope.getMessageTypeTranslationsTimeout);
        }
        return $translate(['drafts_drafts_label',
    'sent_sent_message_label']).then(function(translations) {
          var messageTypeNames;
          messageTypeNames = {
            draft: translations.drafts_drafts_label,
            sentMessage: translations.sent_sent_message_label
          };
          return $scope.messageTypeName = messageTypeNames[$scope.messageType];
        },
    function(translationIds) {
          return $scope.getMessageTypeTranslationsTimeout = $timeout(getMessageTypeTranslations,
    500);
        });
      };
      getMessageTypeTranslations();
      $scope.selectMessage = function(messageId) {
        if ($scope.messageType === 'draft') {
          return $location.path('/email/compose/draft/' + messageId);
        } else {
          TeamraiserEmailService.getSentMessage('message_id=' + messageId).then(function(response) {
            var messageInfo,
    ref;
            if (response.data.errorResponse) {

            } else {
              // TODO
              messageInfo = (ref = response.data.getSentMessageResponse) != null ? ref.messageInfo : void 0;
              if (!messageInfo) {

              } else {
                // TODO
                messageInfo.recipient = LuminateUtilsService.ensureArray(messageInfo.recipient);
                return $scope.sentMessage = messageInfo;
              }
            }
          });
          $scope.viewSentMessageModal = $uibModal.open({
            scope: $scope,
            templateUrl: './html/modal/viewSentMessage.html',
            size: 'lg'
          });
          return $scope.viewSentMessageModal.rendered.then(function() {
            LuminateUtilsService.adjustModalFramePosition();
            if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
              return ngLoadModal($rootScope,
    $scope,
    'viewSentMessage');
            }
          });
        }
      };
      closeSentMessageModal = function() {
        return $scope.viewSentMessageModal.close();
      };
      $scope.cancelViewSentMessage = function() {
        return closeSentMessageModal();
      };
      $scope.copySentMessage = function(messageId) {
        closeSentMessageModal();
        return $location.path('/email/compose/copy/' + messageId);
      };
      $scope.deleteMessage = function(messageId) {
        $scope.deleteMessageId = messageId;
        $scope.deleteMessageProcessing = false;
        $scope.deleteMessageModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/deleteEmailMessage.html'
        });
        return $scope.deleteMessageModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'deleteEmailMessage');
          }
        });
      };
      closeDeleteMessageModal = function() {
        delete $scope.deleteMessageId;
        $scope.deleteMessageProcessing = false;
        return $scope.deleteMessageModal.close();
      };
      $scope.cancelDeleteMessage = function() {
        return closeDeleteMessageModal();
      };
      $scope.confirmDeleteMessage = function() {
        $scope.deleteMessageProcessing = true;
        if ($scope.messageType === 'draft') {
          return TeamraiserEmailService.deleteDraft('message_id=' + $scope.deleteMessageId).then(function(response) {
            closeDeleteMessageModal();
            return $scope.getEmailMessages();
          });
        } else {
          return TeamraiserEmailService.deleteSentMessage('message_id=' + $scope.deleteMessageId).then(function(response) {
            closeDeleteMessageModal();
            return $scope.getEmailMessages();
          });
        }
      };
      if (window.ngLoadController && angular.isFunction(ngLoadController)) {
        return ngLoadController($rootScope,
    $scope,
    'emailMessageListView');
      }
    }
  ]);

  angular.module('trPcControllers').controller('EnterGiftsModalCtrl', [
    '$scope',
    '$rootScope',
    '$location',
    '$translate',
    '$timeout',
    '$httpParamSerializer',
    'ConstituentService',
    'TeamraiserEventService',
    'TeamraiserGiftService',
    'LuminateUtilsService',
    function($scope,
    $rootScope,
    $location,
    $translate,
    $timeout,
    $httpParamSerializer,
    ConstituentService,
    TeamraiserEventService,
    TeamraiserGiftService,
    LuminateUtilsService) {
      var ccExpMonthDefault,
    ccExpMonthOptions,
    ccExpYearDefault,
    ccExpYearOptions,
    getFieldLabelTranslations,
    getPaymentTypeTranslations,
    giftCategoryPromise,
    listStateChoicesPromise,
    num,
    paymentTypeOptions,
    showAddGiftFailure,
    stateOptions,
    today;
      paymentTypeOptions = [];
      if ($scope.teamraiserConfig.offlineGiftTypes.cash === 'true') {
        paymentTypeOptions.push({
          value: 'cash',
          name: 'Cash'
        });
      }
      if ($scope.teamraiserConfig.offlineGiftTypes.check === 'true') {
        paymentTypeOptions.push({
          value: 'check',
          name: 'Check'
        });
      }
      if ($scope.teamraiserConfig.offlineGiftTypes.credit === 'true') {
        paymentTypeOptions.push({
          value: 'credit',
          name: 'Credit'
        });
      }
      if ($scope.teamraiserConfig.offlineGiftTypes.later === 'true') {
        paymentTypeOptions.push({
          value: 'later',
          name: 'Pay Later'
        });
      }
      getPaymentTypeTranslations = function() {
        if ($scope.getPaymentTypeTranslationsTimeout) {
          $timeout.cancel($scope.getPaymentTypeTranslationsTimeout);
        }
        return $translate(['gift_payment_type_cash',
    'gift_payment_type_check',
    'gift_payment_type_credit',
    'gift_payment_type_later']).then(function(translations) {
          return angular.forEach(paymentTypeOptions,
    function(ptOpt) {
            switch (ptOpt.value) {
              case 'cash':
                return ptOpt.name = translations.gift_payment_type_cash;
              case 'check':
                return ptOpt.name = translations.gift_payment_type_check;
              case 'credit':
                return ptOpt.name = translations.gift_payment_type_credit;
              case 'later':
                return ptOpt.name = translations.gift_payment_type_later;
            }
          });
        },
    function(translationIds) {
          return $scope.getPaymentTypeTranslationsTimeout = $timeout(getPaymentTypeTranslations,
    500);
        });
      };
      getPaymentTypeTranslations();
      stateOptions = [];
      stateOptions.push("");
      listStateChoicesPromise = ConstituentService.listUserFieldChoices('primary_address.state').then(function(response) {
        var choices,
    ref,
    ref1,
    ref2;
        if (response != null ? (ref = response.data) != null ? (ref1 = ref.listConsFieldChoicesResponse) != null ? ref1.choice : void 0 : void 0 : void 0) {
          choices = LuminateUtilsService.ensureArray((ref2 = response.data.listConsFieldChoicesResponse) != null ? ref2.choice : void 0);
          angular.forEach(choices,
    function(choice) {
            return stateOptions.push(choice);
          });
        }
        return stateOptions;
      });
      $rootScope.loadingPromises.push(listStateChoicesPromise);
      today = new Date();
      ccExpMonthOptions = (function() {
        var j,
    results1;
        results1 = [];
        for (num = j = 1; j <= 12; num = ++j) {
          results1.push({
            name: ('0' + num).slice(-2)
          });
        }
        return results1;
      })();
      ccExpMonthDefault = ('0' + (today.getMonth() + 1).toString()).slice(-2);
      ccExpYearOptions = (function() {
        var j,
    ref,
    ref1,
    results1;
        results1 = [];
        for (num = j = ref = today.getFullYear(), ref1 = today.getFullYear() + 10; (ref <= ref1 ? j <= ref1 : j >= ref1); num = ref <= ref1 ? ++j : --j) {
          results1.push({
            name: num.toString()
          });
        }
        return results1;
      })();
      ccExpYearDefault = today.getFullYear().toString();
      $scope.egvm = {
        giftModel: {
          first_name: '',
          last_name: '',
          email: '',
          showAdditionalFields: false,
          street1: '',
          street2: '',
          city: '',
          state: stateOptions[0],
          zip: '',
          gift_display_name: '',
          gift_display_personal_page: true,
          team_gift: false,
          gift_amount: null,
          payment_type: paymentTypeOptions[0].value,
          check_number: '',
          credit_card_number: '',
          credit_card_month: ccExpMonthDefault,
          credit_card_year: ccExpYearDefault,
          credit_card_verification_code: '',
          billing_first_name: '',
          billing_last_name: '',
          billing_street1: '',
          billing_street2: '',
          billing_city: '',
          billing_state: stateOptions[0],
          billing_zip: '',
          gift_category_id: ''
        },
        giftOptions: {
          formState: {
            disabled: false
          }
        },
        giftFields: [
          {
            type: 'input',
            key: 'first_name',
            templateOptions: {
              label: 'First Name:',
              required: true
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'last_name',
            templateOptions: {
              label: 'Last Name:',
              required: true
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'email',
            templateOptions: {
              label: 'Email:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'checkbox',
            key: 'showAdditionalFields',
            templateOptions: {
              label: 'Show donor address fields'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'street1',
            hideExpression: "!model.showAdditionalFields",
            templateOptions: {
              label: 'Address:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'street2',
            hideExpression: "!model.showAdditionalFields",
            templateOptions: {
              label: 'Address 2:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'city',
            hideExpression: "!model.showAdditionalFields",
            templateOptions: {
              label: 'City:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'selectFromArray',
            key: 'state',
            hideExpression: "!model.showAdditionalFields",
            templateOptions: {
              label: 'State:',
              options: stateOptions
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'zip',
            hideExpression: "!model.showAdditionalFields",
            templateOptions: {
              label: 'Zip:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'gift_display_name',
            templateOptions: {
              label: 'Recognition Name:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'checkbox',
            key: 'gift_display_personal_page',
            templateOptions: {
              label: 'Yes, display the amount of this gift.'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'checkbox',
            key: 'team_gift',
            hideExpression: "model.hideTeamGiftOption",
            templateOptions: {
              label: 'Record this gift on behalf of my entire team.'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'gift_amount',
            templateOptions: {
              label: 'Amount:',
              type: 'number',
              required: true,
              step: '0.01',
              addonLeft: {
                text: $rootScope.localeSettings.currencySymbol
              }
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'select',
            key: 'payment_type',
            templateOptions: {
              label: 'Payment Type:',
              options: paymentTypeOptions,
              required: true
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'check_number',
            hideExpression: "model.payment_type != 'check'",
            templateOptions: {
              label: 'Check Number:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'check'"
            }
          },
          {
            type: 'input',
            key: 'credit_card_number',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Credit Card Number:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'select',
            key: 'credit_card_month',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Credit Card Expiration Month:',
              valueProp: 'name',
              options: ccExpMonthOptions
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'select',
            key: 'credit_card_year',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Credit Card Expiration Year:',
              valueProp: 'name',
              options: ccExpYearOptions
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'input',
            key: 'credit_card_verification_code',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Verification Code:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'input',
            key: 'billing_first_name',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Billing First Name:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'input',
            key: 'billing_last_name',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Billing Last Name:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'input',
            key: 'billing_street1',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Billing Address:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'input',
            key: 'billing_street2',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Billing Address 2:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          },
          {
            type: 'input',
            key: 'billing_city',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Billing City:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'selectFromArray',
            key: 'billing_state',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Billing State:',
              options: stateOptions
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'input',
            key: 'billing_zip',
            hideExpression: "model.payment_type != 'credit'",
            templateOptions: {
              label: 'Billing Zip:'
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled",
              "templateOptions.required": "model.payment_type == 'credit'"
            }
          },
          {
            type: 'select',
            key: 'gift_category_id',
            hideExpression: "model.hideGiftCategoriesOption",
            templateOptions: {
              label: 'Gift Category:',
              options: []
            },
            expressionProperties: {
              "templateOptions.disabled": "formState.disabled"
            }
          }
        ]
      };
      getFieldLabelTranslations = function() {
        if ($scope.getFieldLabelTranslationsTimeout) {
          $timeout.cancel($scope.getFieldLabelTranslationsTimeout);
        }
        return $translate(['gift_first_name_label',
    'gift_last_name_label',
    'gift_email_label',
    'gift_addl_options_label',
    'gift_street1_label',
    'gift_street2_label',
    'gift_city_label',
    'gift_state_label',
    'gift_zip_label',
    'gift_recongition_name_label',
    'gift_display_personal_page_label',
    'gift_record_team_gift',
    'gift_amount_label',
    'gift_payment_type_label',
    'gift_check_number_label',
    'gift_credit_card_number_label',
    'gift_credit_expiration_date_label',
    'gift_credit_verification_code_label',
    'gift_billing_first_name_label',
    'gift_billing_last_name_label',
    'gift_billing_street1_label',
    'gift_billing_street2_label',
    'gift_billing_city_label',
    'gift_billing_state_label',
    'gift_billing_zip_label',
    'gift_gift_category_label']).then(function(translations) {
          return angular.forEach($scope.egvm.giftFields,
    function(giftField) {
            switch (giftField.key) {
              case 'first_name':
                giftField.templateOptions.label = translations.gift_first_name_label;
                break;
              case 'last_name':
                giftField.templateOptions.label = translations.gift_last_name_label;
                break;
              case 'email':
                giftField.templateOptions.label = translations.gift_email_label;
                break;
              case 'showAdditionalFields':
                giftField.templateOptions.label = translations.gift_addl_options_label;
                break;
              case 'street1':
                giftField.templateOptions.label = translations.gift_street1_label;
                break;
              case 'street2':
                giftField.templateOptions.label = translations.gift_street2_label;
                break;
              case 'city':
                giftField.templateOptions.label = translations.gift_city_label;
                break;
              case 'state':
                giftField.templateOptions.label = translations.gift_state_label;
                break;
              case 'zip':
                giftField.templateOptions.label = translations.gift_zip_label;
                break;
              case 'gift_display_name':
                giftField.templateOptions.label = translations.gift_recongition_name_label;
                break;
              case 'gift_display_personal_page':
                giftField.templateOptions.label = translations.gift_display_personal_page_label;
                break;
              case 'team_gift':
                giftField.templateOptions.label = translations.gift_record_team_gift;
                break;
              case 'gift_amount':
                giftField.templateOptions.label = translations.gift_amount_label;
                break;
              case 'payment_type':
                giftField.templateOptions.label = translations.gift_payment_type_label;
                break;
              case 'check_number':
                giftField.templateOptions.label = translations.gift_check_number_label;
                break;
              case 'credit_card_number':
                giftField.templateOptions.label = translations.gift_credit_card_number_label;
                break;
              case 'credit_card_month':
                giftField.templateOptions.label = translations.gift_credit_expiration_date_label;
                break;
              case 'credit_card_year':
                giftField.templateOptions.label = translations.gift_credit_expiration_date_label;
                break;
              case 'credit_card_verification_code':
                giftField.templateOptions.label = translations.gift_credit_verification_code_label;
                break;
              case 'billing_first_name':
                giftField.templateOptions.label = translations.gift_billing_first_name_label;
                break;
              case 'billing_last_name':
                giftField.templateOptions.label = translations.gift_billing_last_name_label;
                break;
              case 'billing_street1':
                giftField.templateOptions.label = translations.gift_billing_street1_label;
                break;
              case 'billing_street2':
                giftField.templateOptions.label = translations.gift_billing_street2_label;
                break;
              case 'billing_city':
                giftField.templateOptions.label = translations.gift_billing_city_label;
                break;
              case 'billing_state':
                giftField.templateOptions.label = translations.gift_billing_state_label;
                break;
              case 'billing_zip':
                giftField.templateOptions.label = translations.gift_billing_zip_label;
                break;
              case 'gift_category_id':
                giftField.templateOptions.label = translations.gift_gift_category_label;
            }
            return giftField.templateOptions.label = giftField.templateOptions.label.replace(/\*/gm,
    '');
          });
        },
    function(translationIds) {
          return $scope.getFieldLabelTranslationsTimeout = $timeout(getFieldLabelTranslations,
    500);
        });
      };
      getFieldLabelTranslations();
      if ($scope.teamraiserConfig.showGiftCategories === 'true') {
        $scope.egvm.giftModel.hideGiftCategoriesOption = true;
        giftCategoryPromise = TeamraiserGiftService.getGiftCategories().then(function(response) {
          var giftCategories,
    giftCategoryOptions,
    ref;
          giftCategories = LuminateUtilsService.ensureArray((ref = response.data.getGiftCategoriesResponse) != null ? ref.giftCategory : void 0);
          giftCategoryOptions = [];
          giftCategoryOptions.push({
            name: '',
            value: ''
          });
          angular.forEach(giftCategories,
    function(giftCategory) {
            if (angular.isString(giftCategory.name)) {
              return giftCategoryOptions.push({
                value: giftCategory.id,
                name: giftCategory.name
              });
            }
          });
          angular.forEach($scope.egvm.giftFields,
    function(giftField) {
            if (giftField.key === 'gift_category_id') {
              return giftField.templateOptions.options = angular.copy(giftCategoryOptions);
            }
          });
          $scope.egvm.giftModel.hideGiftCategoriesOption = false;
          return response;
        });
        $rootScope.loadingPromises.push(giftCategoryPromise);
      } else {
        $scope.egvm.giftModel.hideGiftCategoriesOption = true;
      }
      $scope.egvm.originalFields = angular.copy($scope.egvm.giftFields);
      $scope.egvm.giftModel.hideTeamGiftOption = !$scope.participantRegistration.teamId || $scope.participantRegistration.teamId === '-1' || !($scope.teamraiserConfig.offlineTeamGifts === 'MEMBERS' || ($scope.teamraiserConfig.offlineTeamGifts === 'CAPTAINS' && $scope.participantRegistration.aTeamCaptain === 'true'));
      $scope.clearGiftAlerts = function() {
        var autoclose,
    ref;
        autoclose = (ref = $scope.egvm.giftAlerts) != null ? ref.addGiftSuccess : void 0;
        $scope.egvm.giftAlerts = {
          addGiftAttempt: false,
          addGiftSuccess: false,
          addGiftAgainAttempt: false,
          addGiftAgainSuccess: false,
          addGiftFailure: false,
          addGiftFailureMessage: ''
        };
        if (autoclose) {
          return $scope.cancelGiftEntry();
        }
      };
      $scope.clearGiftAlerts();
      $scope.cancelGiftEntry = function() {
        return $scope.$close('success');
      };
      showAddGiftFailure = function(message) {
        $scope.clearGiftAlerts();
        $scope.egvm.giftAlerts.addGiftFailure = true;
        if (message && angular.isString(message) && message.length > 0) {
          return $scope.egvm.giftAlerts.addGiftFailureMessage = message;
        } else {
          return $translate('gift_submission_error').then(function(translation) {
            return $scope.egvm.giftAlerts.addGiftFailureMessage = translation;
          },
    function(translationId) {
            return $scope.egvm.giftAlerts.addGiftFailureMessage = translationId;
          });
        }
      };
      $scope.addGift = function() {
        var addGiftPromise;
        if (!$scope.egvm.giftEntryForm.$valid) {
          return showAddGiftFailure();
        } else if (!$scope.egvm.giftAlerts.addGiftAttempt) {
          $scope.egvm.giftAlerts.addGiftAttempt = true;
          addGiftPromise = TeamraiserGiftService.addGift($httpParamSerializer($scope.egvm.giftModel)).then(function(response) {
            $scope.egvm.giftAlerts.addGiftAttempt = false;
            if (response.data.errorResponse) {
              showAddGiftFailure(response.data.errorResponse.message);
            } else {
              if ($scope.egvm.giftAlerts.addGiftAgainAttempt) {
                $scope.clearGiftAlerts();
                $scope.egvm.giftAlerts.addGiftAgainSuccess = true;
                $scope.egvm.giftAlerts.addGiftAgainAttempt = false;
              } else {
                $scope.clearGiftAlerts();
                $scope.egvm.giftAlerts.addGiftSuccess = true;
                $scope.egvm.giftOptions.formState = {
                  disabled: true
                };
                angular.forEach($scope.egvm.giftFields,
    function(field) {
                  return field.runExpressions && field.runExpressions();
                });
              }
              $scope.egvm.giftOptions.resetModel();
            }
            $rootScope.scrollToTop();
            return response;
          });
          return $rootScope.loadingPromises.push(addGiftPromise);
        }
      };
      $scope.addGiftClearForm = function() {
        $scope.clearGiftAlerts();
        return $scope.egvm.giftAlerts.addGiftAgainAttempt = true;
      };
      if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
        return ngLoadModal($rootScope,
    $scope,
    'enterGifts');
      }
    }
  ]);

  angular.module('trPcControllers').controller('EventOptionsViewCtrl', [
    '$scope',
    '$rootScope',
    '$timeout',
    '$translate',
    '$uibModal',
    'TeamraiserRegistrationService',
    'TeamraiserEventService',
    'TeamraiserTeamService',
    'TeamraiserCompanyService',
    'LuminateUtilsService',
    function($scope,
    $rootScope,
    $timeout,
    $translate,
    $uibModal,
    TeamraiserRegistrationService,
    TeamraiserEventService,
    TeamraiserTeamService,
    TeamraiserCompanyService,
    LuminateUtilsService) {
      var manageTeamMembershipEnabledPromise,
    ref,
    setDisplayNameSetting,
    setPersonalPrivacySetting;
      $scope.refreshRegistration = function() {
        var refreshRegistrationPromise;
        refreshRegistrationPromise = TeamraiserRegistrationService.getRegistration().then(function(response) {
          setPersonalPrivacySetting();
          return setDisplayNameSetting();
        });
        return $rootScope.loadingPromises.push(refreshRegistrationPromise);
      };
      $scope.refreshRegistration();
      $scope.personalPrivacySettings = {
        isPrivate: $scope.participantRegistration.privatePage === 'true',
        privacySetting: '',
        updatePrivacyProcessing: false,
        updatePrivacySuccess: false,
        updatePrivacyFailure: false,
        updatePrivacyFailureMessage: ''
      };
      setPersonalPrivacySetting = function() {
        if ($scope.participantRegistration.privatePage === 'true') {
          return $scope.personalPrivacySettings.privacySetting = 'private';
        } else {
          return $scope.personalPrivacySettings.privacySetting = 'public';
        }
      };
      $scope.updatePrivacyOptions = function() {
        var dataStr,
    updatePrivacyPromise;
        $scope.resetPrivacyAlerts();
        dataStr = 'is_private=';
        if ($scope.personalPrivacySettings.privacySetting === 'private') {
          dataStr += 'true';
        } else {
          dataStr += 'false';
        }
        $scope.personalPrivacySettings.updatePrivacyProcessing = true;
        updatePrivacyPromise = TeamraiserRegistrationService.updatePersonalPagePrivacy(dataStr).then(function(response) {
          var ref,
    ref1,
    ref2;
          if ((ref = response.data.updatePersonalPagePrivacyResponse) != null ? ref.privatePage : void 0) {
            $scope.personalPrivacySettings.isPrivate = ((ref1 = response.data.updatePersonalPagePrivacyResponse) != null ? ref1.privatePage : void 0) === 'true';
            $scope.personalPrivacySettings.updatePrivacySuccess = true;
            $scope.refreshRegistration();
          } else {
            $scope.personalPrivacySettings.updatePrivacyFailure = true;
            $scope.personalPrivacySettings.updatePrivacyFailureMessage = (ref2 = response.data.errorResponse) != null ? ref2.message : void 0;
          }
          return response;
        });
        return $rootScope.loadingPromises.push(updatePrivacyPromise);
      };
      $scope.resetPrivacyAlerts = function() {
        $scope.personalPrivacySettings.updatePrivacyProcessing = false;
        $scope.personalPrivacySettings.updatePrivacySuccess = false;
        $scope.personalPrivacySettings.updatePrivacyFailure = false;
        return $scope.personalPrivacySettings.updatePrivacyFailureMessage = '';
      };
      $scope.displayNameSettings = {
        showDisplayNamePanel: false,
        standardRegAllowed: $scope.teamraiserConfig.standardRegistrationAllowed === 'true' || $scope.teamraiserConfig.standardRegistrationAllowed === true,
        anonymousRegAllowed: $scope.teamraiserConfig.anonymousRegistrationAllowed === 'true' || $scope.teamraiserConfig.anonymousRegistrationAllowed === true,
        screennameRegAllowed: $scope.teamraiserConfig.screennameRegistrationAllowed === 'true' || $scope.teamraiserConfig.screennameRegistrationAllowed === true,
        updateScreennameProcessing: false,
        updateScreennameSuccess: false,
        updateScreennameFailure: false,
        updateScreennameFailureMessage: '',
        currentSelection: null,
        currentScreenname: null
      };
      if (($scope.displayNameSettings.standardRegAllowed && ($scope.displayNameSettings.anonymousRegAllowed || $scope.displayNameSettings.screennameRegAllowed)) || ($scope.displayNameSettings.anonymousRegAllowed && $scope.displayNameSettings.screennameRegAllowed)) {
        $scope.displayNameSettings.showDisplayNamePanel = true;
      }
      setDisplayNameSetting = function() {
        if ($scope.participantRegistration.anonymous === 'true' || $scope.participantRegistration.anonymous === true) {
          $scope.displayNameSettings.currentSelection = 'anonymous';
          return $scope.displayNameSettings.currentScreenname = null;
        } else if ($scope.participantRegistration.screenname) {
          $scope.displayNameSettings.currentSelection = 'screenname';
          return $scope.displayNameSettings.currentScreenname = $scope.participantRegistration.screenname;
        } else {
          $scope.displayNameSettings.currentSelection = 'standard';
          return $scope.displayNameSettings.currentScreenname = null;
        }
      };
      $scope.updateDisplayNameSetting = function() {
        var dataStr,
    updateDisplayNamePromise;
        $scope.resetScreennameAlerts();
        dataStr = '';
        switch ($scope.displayNameSettings.currentSelection) {
          case 'anonymous':
            dataStr = 'anonymous_registration=true';
            break;
          case 'screenname':
            dataStr = 'screenname=' + encodeURIComponent($scope.displayNameSettings.currentScreenname);
            break;
          case 'standard':
            dataStr = 'standard_registration=true';
            break;
          default:
            dataStr = 'standard_registration=true';
        }
        $scope.displayNameSettings.updateScreennameProcessing = true;
        updateDisplayNamePromise = TeamraiserRegistrationService.updateRegistration(dataStr).then(function(response) {
          if (response.data.errorResponse) {
            $scope.displayNameSettings.updateScreennameFailure = true;
            $scope.displayNameSettings.updateScreennameFailureMessage = response.data.errorResponse.message;
          } else {
            $scope.displayNameSettings.updateScreennameSuccess = true;
            $scope.refreshRegistration();
          }
          return response;
        });
        return $rootScope.loadingPromises.push(updateDisplayNamePromise);
      };
      $scope.resetScreennameAlerts = function() {
        $scope.displayNameSettings.updateScreennameProcessing = false;
        $scope.displayNameSettings.updateScreennameSuccess = false;
        $scope.displayNameSettings.updateScreennameFailure = false;
        return $scope.displayNameSettings.updateScreennameFailureMessage = '';
      };
      $scope.manageCompanyMembership = {
        showManageCompanyPanel: false,
        newCompanyEntryAllowed: false,
        companyOptions: [],
        currentCompanyName: '',
        currentSelection: (ref = $scope.participantRegistration.companyInformation) != null ? ref.companyId : void 0,
        newCompanyEntry: '',
        updateCompanyProcessing: false,
        updateCompanySuccess: false,
        updateCompanyFailure: false,
        updateCompanyFailureMessage: ''
      };
      $scope.getCompanyList = function() {
        var getCompanyListPromise;
        getCompanyListPromise = TeamraiserCompanyService.getCompanyList().then(function(response) {
          var ref1,
    ref2,
    results;
          if (response.data.errorResponse) {
            $scope.manageCompanyMembership.showManageCompanyPanel = false;
          } else {
            results = LuminateUtilsService.ensureArray((ref1 = response.data.getCompanyListResponse) != null ? ref1.companyItem : void 0);
            $scope.manageCompanyMembership.companyOptions = results;
            if ((ref2 = $scope.participantRegistration.companyInformation) != null ? ref2.companyId : void 0) {
              angular.forEach(results,
    function(result) {
                if ($scope.participantRegistration.companyInformation.companyId === result.companyId) {
                  return $scope.manageCompanyMembership.currentCompanyName = result.companyName;
                }
              });
            } else {
              $translate('dashboard_company_null_label').then(function(translation) {
                return $scope.manageCompanyMembership.currentCompanyName = translation;
              },
    function(translationId) {
                return $scope.manageCompanyMembership.currentCompanyName = translationId;
              });
            }
          }
          return response;
        });
        return $rootScope.loadingPromises.push(getCompanyListPromise);
      };
      $scope.openCompanySelection = function() {
        $scope.manageCompanyMembership.newCompanyEntry = '';
        $scope.manageCompanyMembership.updateCompanyProcessing = false;
        $scope.companySelectionModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/editCompanyAssociation.html'
        });
        return $scope.companySelectionModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'editCompanyAssociation');
          }
        });
      };
      $scope.resetCompanyAlerts = function(closeModal) {
        $scope.manageCompanyMembership.updateCompanyProcessing = false;
        $scope.manageCompanyMembership.updateCompanySuccess = false;
        $scope.manageCompanyMembership.updateCompanyFailure = false;
        $scope.manageCompanyMembership.updateCompanyFailureMessage = '';
        if (closeModal) {
          return $scope.companySelectionModal.close();
        }
      };
      $scope.initCompanyInfo = function() {
        if ($scope.participantRegistration.teamId === '-1' && $scope.teamraiserConfig.participantCompanyAssociationAllowed === "true") {
          $scope.manageCompanyMembership.showManageCompanyPanel = true;
          if ($scope.teamraiserConfig.participantCompanyNewEntryAllowed === "true") {
            $scope.manageCompanyMembership.newCompanyEntryAllowed = true;
          }
        } else if ($scope.participantRegistration.teamId !== '-1' && $scope.participantRegistration.aTeamCaptain === "true" && $scope.teamraiserConfig.companyAssociationAllowed === "true") {
          $scope.manageCompanyMembership.showManageCompanyPanel = true;
          if ($scope.teamraiserConfig.companyNewEntryAllowed === "true") {
            $scope.manageCompanyMembership.newCompanyEntryAllowed = true;
          }
        } else {
          $scope.manageCompanyMembership.showManageCompanyPanel = false;
          $scope.manageCompanyMembership.newCompanyEntryAllowed = false;
        }
        if ($scope.manageCompanyMembership.showManageCompanyPanel) {
          $scope.getCompanyList();
        }
        return $scope.resetCompanyAlerts(false);
      };
      $scope.initCompanyInfo();
      $scope.updateCompanyAssociation = function() {
        var dataStr,
    updateParticipantCompanyPromise;
        $scope.manageCompanyMembership.updateCompanyProcessing = true;
        if ($scope.manageCompanyMembership.newCompanyEntry.length > 0) {
          dataStr = 'company_name=' + encodeURIComponent($scope.manageCompanyMembership.newCompanyEntry);
        } else {
          dataStr = 'company_id=' + $scope.manageCompanyMembership.currentSelection;
        }
        if ($scope.participantRegistration.teamId === '-1') {
          updateParticipantCompanyPromise = TeamraiserRegistrationService.updateRegistration(dataStr).then(function(response) {
            return $scope.updateCompanyAssociationResponse(response);
          });
        } else {
          updateParticipantCompanyPromise = TeamraiserTeamService.updateTeamInformation(dataStr).then(function(response) {
            return $scope.updateCompanyAssociationResponse(response);
          });
        }
        return $rootScope.loadingPromises.push(updateParticipantCompanyPromise);
      };
      $scope.updateCompanyAssociationResponse = function(response) {
        var ref1,
    ref2,
    ref3,
    ref4;
        if (response.data.errorResponse) {
          $scope.manageCompanyMembership.updateCompanyFailure = true;
          if (response.data.errorResponse.message) {
            $scope.manageCompanyMembership.updateCompanyFailureMessage = response.data.errorResponse.message;
          } else {
            $translate('company_selection_update_unexpected_error').then(function(translation) {
              return $scope.manageCompanyMembership.updateCompanyFailureMessage = translation;
            },
    function(translationId) {
              return $scope.manageCompanyMembership.updateCompanyFailureMessage = translationId;
            });
          }
        } else {
          $scope.manageCompanyMembership.updateCompanySuccess = true;
          if ($scope.participantRegistration.companyInformation) {
            $scope.participantRegistration.companyInformation.companyId = ((ref1 = response.data.updateTeamInformationResponse) != null ? ref1.companyId : void 0) || ((ref2 = response.data.updateRegistrationResponse) != null ? ref2.companyId : void 0);
          } else {
            $scope.participantRegistration.companyInformation = {
              companyId: ((ref3 = response.data.updateTeamInformationResponse) != null ? ref3.companyId : void 0) || ((ref4 = response.data.updateRegistrationResponse) != null ? ref4.companyId : void 0)
            };
          }
          $scope.getCompanyList();
        }
        return response;
      };
      $scope.manageTeamMembership = {
        showManageTeamMembership: false,
        currentTeamId: $scope.participantRegistration.teamId,
        manageTeamMembershipAlerts: [],
        currentSelection: 'stay',
        joinTeamAlerts: [],
        joinTeamSearch: {
          teamName: '',
          teamCompany: '',
          captainFirst: '',
          captainLast: '',
          searchPage: 1,
          searchString: '',
          searchSubmitted: false,
          searchResults: [],
          searchTotalNumber: 0,
          joinTeamId: '',
          joinTeamPassword: ''
        },
        processing: false
      };
      manageTeamMembershipEnabledPromise = TeamraiserEventService.getEventDataParameter('edp_type=boolean&edp_name=F2F_PC2_PARTICIPANT_CAN_SELF_MANAGE_TEAM').then(function(response) {
        var manageTeamPossible,
    ref1;
        manageTeamPossible = $scope.participantRegistration.teamId === '-1' || $scope.participantRegistration.aTeamCaptain !== 'true';
        $scope.manageTeamMembership.showManageTeamMembership = ((ref1 = response.data.getEventDataParameterResponse) != null ? ref1.booleanValue : void 0) === 'true' && $rootScope.teamraiserConfig.teamsAllowed === "true" && manageTeamPossible;
        return response;
      });
      $scope.$watch('manageTeamMembership.currentSelection',
    function(newVal,
    oldVal,
    $scope) {
        return $rootScope.resizeFrameForCurrentView();
      });
      $scope.searchTeams = function() {
        var captainNameLength,
    dataStr;
        $scope.clearAllTeamMembershipAlerts();
        if ($scope.manageTeamMembership.joinTeamSearch.searchSubmitted) {
          $scope.manageTeamMembership.joinTeamSearch.searchPage = 1;
          $scope.manageTeamMembership.joinTeamSearch.searchString = '';
          $scope.manageTeamMembership.joinTeamSearch.searchSubmitted = false;
          $scope.manageTeamMembership.joinTeamSearch.searchResults = [];
          $scope.manageTeamMembership.joinTeamSearch.searchTotalNumber = 0;
        }
        dataStr = '';
        if ($scope.manageTeamMembership.joinTeamSearch.teamName.length > 0) {
          dataStr += '&team_name=' + $scope.manageTeamMembership.joinTeamSearch.teamName;
        }
        if ($scope.manageTeamMembership.joinTeamSearch.teamCompany.length > 0) {
          dataStr += '&team_company=' + $scope.manageTeamMembership.joinTeamSearch.teamCompany;
        }
        if ($scope.manageTeamMembership.joinTeamSearch.captainFirst.length > 0 || $scope.manageTeamMembership.joinTeamSearch.captainLast.length > 0) {
          captainNameLength = $scope.manageTeamMembership.joinTeamSearch.captainFirst.length + $scope.manageTeamMembership.joinTeamSearch.captainLast.length;
          if (dataStr.length === 0 && captainNameLength < 3) {
            $translate('manage_membership_search_captain_name_min_chars').then(function(translation) {
              return $scope.manageTeamMembership.joinTeamAlerts.push({
                type: 'danger',
                msg: translation
              });
            },
    function(translationId) {
              return $scope.manageTeamMembership.joinTeamAlerts.push({
                type: 'danger',
                msg: translationId
              });
            });
          } else {
            if ($scope.manageTeamMembership.joinTeamSearch.captainFirst.length > 0) {
              dataStr += '&first_name=' + $scope.manageTeamMembership.joinTeamSearch.captainFirst;
            }
            if ($scope.manageTeamMembership.joinTeamSearch.captainLast.length > 0) {
              dataStr += '&last_name=' + $scope.manageTeamMembership.joinTeamSearch.captainLast;
            }
          }
        }
        if (dataStr.length === 0) {
          return $translate('manage_membership_search_failure').then(function(translation) {
            return $scope.manageTeamMembership.joinTeamAlerts.push({
              type: 'danger',
              msg: translation
            });
          },
    function(translationId) {
            return $scope.manageTeamMembership.joinTeamAlerts.push({
              type: 'danger',
              msg: translationId
            });
          });
        } else {
          $scope.manageTeamMembership.joinTeamSearch.searchString = dataStr;
          return $scope.searchTeamsPage();
        }
      };
      $scope.searchTeamsPage = function() {
        var dataStr,
    searchTeamsPromise;
        dataStr = 'include_cross_event=false&full_search=false';
        dataStr += '&list_sort_column=name&list_ascending=true';
        dataStr += '&list_page_size=5&list_page_offset=' + ($scope.manageTeamMembership.joinTeamSearch.searchPage - 1);
        dataStr += $scope.manageTeamMembership.joinTeamSearch.searchString;
        $scope.manageTeamMembership.joinTeamSearch.searchSubmitted = true;
        $scope.manageTeamMembership.processing = true;
        searchTeamsPromise = TeamraiserTeamService.getTeams(dataStr).then(function(response) {
          var ref1,
    ref2,
    results;
          $scope.manageTeamMembership.processing = false;
          if (response.data.errorResponse) {
            if (response.data.errorResponse.message) {
              $scope.manageTeamMembership.joinTeamAlerts.push({
                type: 'danger',
                msg: response.data.errorResponse.message
              });
            } else {
              $translate('manage_membership_search_failure').then(function(translation) {
                return $scope.manageTeamMembership.joinTeamAlerts.push({
                  type: 'danger',
                  msg: translation
                });
              },
    function(translationId) {
                return $scope.manageTeamMembership.joinTeamAlerts.push({
                  type: 'danger',
                  msg: translationId
                });
              });
            }
          } else {
            results = LuminateUtilsService.ensureArray((ref1 = response.data.getTeamSearchByInfoResponse) != null ? ref1.team : void 0);
            $scope.manageTeamMembership.joinTeamSearch.searchResults = results;
            $scope.manageTeamMembership.joinTeamSearch.searchTotalNumber = Number(((ref2 = response.data.getTeamSearchByInfoResponse) != null ? ref2.totalNumberResults : void 0) || 0);
          }
          $rootScope.resizeFrameForCurrentView();
          return response;
        });
        return $rootScope.loadingPromises.push(searchTeamsPromise);
      };
      $scope.joinTeam = function(teamId,
    requiresPassword,
    teamPassword) {
        var dataStr,
    joinTeamPromise;
        if (requiresPassword && requiresPassword === 'true' && (!teamPassword || teamPassword.length === 0)) {
          $scope.manageTeamMembership.joinTeamSearch.joinTeamId = teamId;
          $scope.manageTeamMembership.joinTeamSearch.joinTeamPassword = '';
          $scope.joinTeamPasswordModal = $uibModal.open({
            scope: $scope,
            templateUrl: './html/modal/joinTeamPassword.html'
          });
          return $scope.joinTeamPasswordModal.rendered.then(function() {
            LuminateUtilsService.adjustModalFramePosition();
            if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
              return ngLoadModal($rootScope,
    $scope,
    'joinTeamPassword');
            }
          });
        } else {
          dataStr = 'team_id=' + teamId;
          if (requiresPassword && requiresPassword === 'true' && teamPassword && teamPassword.length > 0) {
            dataStr += '&team_password=' + teamPassword;
          }
          $scope.manageTeamMembership.processing = true;
          joinTeamPromise = TeamraiserTeamService.joinTeam(dataStr).then(function(response) {
            var ref1,
    ref2,
    ref3,
    ref4,
    teamName;
            $scope.manageTeamMembership.processing = false;
            if (response.data.errorResponse) {
              if (response.data.errorResponse.message) {
                $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                  type: 'danger',
                  msg: response.data.errorResponse.message
                });
              } else {
                $translate('manage_membership_join_team_unexpected_error').then(function(translation) {
                  return $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                    type: 'danger',
                    msg: translation
                  });
                },
    function(translationId) {
                  return $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                    type: 'danger',
                    msg: translationId
                  });
                });
              }
            } else {
              teamName = (ref1 = response.data.joinTeamResponse) != null ? (ref2 = ref1.team) != null ? ref2.name : void 0 : void 0;
              $translate('manage_membership_join_team_success').then(function(translation) {
                return $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                  type: 'success',
                  msg: translation + ' ' + teamName + '.'
                });
              },
    function(translationId) {
                return $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                  type: 'success',
                  msg: translationId + ' ' + teamName + '.'
                });
              });
              $scope.manageTeamMembership.joinTeamSearch.joinTeamId = '';
              $scope.manageTeamMembership.joinTeamSearch.joinTeamPassword = '';
              $scope.manageTeamMembership.currentTeamId = (ref3 = response.data.joinTeamResponse) != null ? (ref4 = ref3.team) != null ? ref4.id : void 0 : void 0;
              $scope.manageTeamMembership.currentSelection = 'stay';
              $scope.refreshRegistration();
            }
            return response;
          });
          return $rootScope.loadingPromises.push(joinTeamPromise);
        }
      };
      $scope.leaveTeam = function() {
        var leaveTeamPromise;
        $scope.manageTeamMembership.processing = true;
        leaveTeamPromise = TeamraiserTeamService.leaveTeam().then(function(response) {
          $scope.manageTeamMembership.processing = false;
          if (response.data.errorResponse) {
            if (response.data.errorResponse.message) {
              $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                type: 'danger',
                msg: response.data.errorResponse.message
              });
            } else {
              $translate('manage_membership_leave_team_unexpected_error').then(function(translation) {
                return $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                  type: 'danger',
                  msg: translation
                });
              },
    function(translationId) {
                return $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                  type: 'danger',
                  msg: translationId
                });
              });
            }
          } else {
            $translate('manage_membership_leave_team_success').then(function(translation) {
              return $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                type: 'success',
                msg: translation
              });
            },
    function(translationId) {
              return $scope.manageTeamMembership.manageTeamMembershipAlerts.push({
                type: 'success',
                msg: translationId
              });
            });
            $scope.manageTeamMembership.currentTeamId = '-1';
            $scope.manageTeamMembership.currentSelection = 'stay';
            $scope.refreshRegistration();
          }
          return response;
        });
        return $rootScope.loadingPromises.push(joinTeamPromise);
      };
      $scope.cancelJoinTeamPassword = function() {
        $scope.manageTeamMembership.processing = false;
        $scope.manageTeamMembership.joinTeamSearch.joinTeamId = '';
        $scope.manageTeamMembership.joinTeamSearch.joinTeamPassword = '';
        return $scope.joinTeamPasswordModal.close();
      };
      $scope.clearTeamMembershipAlert = function(index) {
        $scope.manageTeamMembership.manageTeamMembershipAlerts.splice(index,
    1);
        return $rootScope.resizeFrameForCurrentView();
      };
      $scope.clearJoinTeamAlert = function(index) {
        return $scope.manageTeamMembership.joinTeamAlerts.splice(index,
    1);
      };
      $scope.clearAllTeamMembershipAlerts = function() {
        $scope.manageTeamMembership.processing = false;
        $scope.manageTeamMembership.manageTeamMembershipAlerts = [];
        $scope.manageTeamMembership.joinTeamAlerts = [];
        return $rootScope.resizeFrameForCurrentView();
      };
      if (window.ngLoadController && angular.isFunction(ngLoadController)) {
        return ngLoadController($rootScope,
    $scope,
    'eventOptionsView');
      }
    }
  ]);

  angular.module('trPcControllers').controller('HomeViewCtrl', [
    '$scope',
    '$rootScope',
    '$location',
    '$uibModal',
    '$timeout',
    '$translate',
    '$sce',
    '$window',
    'ConstituentService',
    'ContactService',
    'ContentService',
    'TeamraiserCompanyService',
    'TeamraiserEventService',
    'TeamraiserGiftService',
    'TeamraiserParticipantService',
    'TeamraiserRegistrationService',
    'TeamraiserTeamService',
    'LuminateUtilsService',
    function($scope,
    $rootScope,
    $location,
    $uibModal,
    $timeout,
    $translate,
    $sce,
    $window,
    ConstituentService,
    ContactService,
    ContentService,
    TeamraiserCompanyService,
    TeamraiserEventService,
    TeamraiserGiftService,
    TeamraiserParticipantService,
    TeamraiserRegistrationService,
    TeamraiserTeamService,
    LuminateUtilsService) {
      var captainsMessagePromise,
    clearPageMediaData,
    closeAcknowledgeGiftModal,
    closeDeleteGiftModal,
    constituentPromise,
    contactFilters,
    getCompanyShortcutPromise,
    getConfigPromise,
    getParticipantCenterWrapperPromise,
    getParticipantShortcutPromise,
    getRelativeUrl,
    getTeamShortcutPromise,
    participantBadgesPromise,
    ref,
    ref1,
    setPageMediaData,
    setPersonalDownloadUrl,
    setTeamCaptainsRosterPage,
    setVideoSource,
    teamBadgesPromise,
    translateGiftActionLabels,
    translateMediaTypeLabels,
    updatePageUrls,
    whatNextPromise;
      constituentPromise = ConstituentService.getUser().then(function(response) {
        $scope.constituent = response.data.getConsResponse;
        return response;
      });
      $rootScope.loadingPromises.push(constituentPromise);
      getRelativeUrl = function(absoluteUrl) {
        //# if the provided URL contains '/site/' return '../site/' plus the portion of the URL after '/site/'
        if (absoluteUrl && absoluteUrl.indexOf('/site/') !== -1) {
          return '../site/' + absoluteUrl.split('/site/')[1];
        } else {
          return absoluteUrl;
        }
      };
      updatePageUrls = function() {
        $rootScope.wrapper.personalPageAbsoluteUrl = $rootScope.wrapper.personalPageUrl;
        $rootScope.wrapper.personalPageUrl = getRelativeUrl($rootScope.wrapper.personalPageAbsoluteUrl);
        $rootScope.wrapper.personalDonationAbsolutelUrl = $rootScope.wrapper.personalDonationUrl;
        $rootScope.wrapper.personalDonationUrl = getRelativeUrl($rootScope.wrapper.personalDonationAbsolutelUrl);
        $rootScope.wrapper.teamPageAbsoluteUrl = $rootScope.wrapper.teamPageUrl;
        $rootScope.wrapper.teamPageUrl = getRelativeUrl($rootScope.wrapper.teamPageAbsoluteUrl);
        $rootScope.wrapper.companyPageAbsoluteUrl = $rootScope.wrapper.companyPageUrl;
        return $rootScope.wrapper.companyPageUrl = getRelativeUrl($rootScope.wrapper.companyPageAbsoluteUrl);
      };
      if ($rootScope.wrapper) {
        updatePageUrls();
      } else {
        getParticipantCenterWrapperPromise = TeamraiserEventService.getParticipantCenterWrapper().then(function(response) {
          updatePageUrls();
          return response;
        });
        $rootScope.loadingPromises.push(getParticipantCenterWrapperPromise);
      }
      $scope.addParticipantBadge = function(badge) {
        if (!$scope.participantBadges) {
          $scope.participantBadges = [];
        }
        if (badge && badge.url && badge.name && badge.description) {
          return $scope.participantBadges.push(badge);
        }
      };
      participantBadgesPromise = TeamraiserParticipantService.getParticipant().then(function(response) {
        var badges,
    participantInfo,
    participantMilestoneLargeBadgeUrl,
    personalDonationBadgeLargeUrl,
    ref;
        participantInfo = ((ref = response.data.getParticipantsResponse) != null ? ref.participant : void 0) || {};
        badges = participantInfo != null ? participantInfo.badges : void 0;
        if (!badges) {
          $scope.addParticipantBadge();
        } else {
          personalDonationBadgeLargeUrl = badges.personalDonationBadgeLargeUrl;
          if (personalDonationBadgeLargeUrl) {
            $scope.addParticipantBadge({
              url: '..' + personalDonationBadgeLargeUrl,
              name: badges.personalDonationBadgeName,
              description: badges.personalDonationBadgeDesc
            });
          }
          participantMilestoneLargeBadgeUrl = badges.participantMilestoneLargeBadgeUrl;
          if (participantMilestoneLargeBadgeUrl) {
            $scope.addParticipantBadge({
              url: '..' + participantMilestoneLargeBadgeUrl,
              name: badges.participantMilestoneBadgeName,
              description: badges.participantMilestoneBadgeDesc
            });
          }
        }
        return response;
      });
      $rootScope.loadingPromises.push(participantBadgesPromise);
      setPersonalDownloadUrl = function() {
        $scope.teamraiserConfig = $rootScope.teamraiserConfig;
        if (!$scope.teamraiserConfig.personalDonationsDownloadUrl) {
          $scope.teamraiserConfig.personalDonationsDownloadUrl = '../site/TRParticipantDownload/Personal_Donations.csv?download_type=personal_donations&fr_id=' + $rootScope.frId;
        }
        return $scope.teamraiserConfig;
      };
      if (!$rootScope.teamraiserConfig || $rootScope.teamraiserConfig === -1) {
        getConfigPromise = TeamraiserEventService.getConfig().then(function(response) {
          setPersonalDownloadUrl();
          return response;
        });
        $rootScope.loadingPromises.push(getConfigPromise);
      } else {
        setPersonalDownloadUrl();
      }
      $scope.showJanrainShare = $rootScope.socialSettings.janrainEnabled && ((ref = $rootScope.socialSettings.appName) != null ? ref.length : void 0) > 0 && ((ref1 = $rootScope.socialSettings.providers) != null ? ref1.length : void 0) > 0;
      if ($scope.teamraiserConfig.adminNewsFeedsEnabled === 'true') {
        $scope.newsFeed = {
          page: 1,
          numPerPage: 1
        };
        $scope.getNewsFeeds = function() {
          var newsFeedsPromise,
    pageNumber;
          pageNumber = $scope.newsFeed.page - 1;
          newsFeedsPromise = TeamraiserEventService.getNewsFeeds('last_pc2_login=' + $scope.participantRegistration.lastPC2Login + '&feed_count=100').then(function(response) {
            var newsFeedItems,
    ref2;
            newsFeedItems = LuminateUtilsService.ensureArray((ref2 = response.data.getNewsFeedsResponse) != null ? ref2.newsFeed : void 0);
            $scope.newsFeed.items = [];
            $scope.newsFeed.totalNumber = 0;
            angular.forEach(newsFeedItems,
    function(item,
    itemIndex) {
              if ($scope.participantRegistration.aTeamCaptain === 'true' || item.isCaptainsOnly === 'false') {
                $scope.newsFeed.totalNumber += 1;
                if (itemIndex > (pageNumber - 1) && $scope.newsFeed.items.length < $scope.newsFeed.numPerPage) {
                  return $scope.newsFeed.items.push(item);
                }
              }
            });
            return response;
          });
          return $rootScope.loadingPromises.push(newsFeedsPromise);
        };
        $scope.getNewsFeeds();
      }
      // undocumented update_last_pc2_login parameter required to make news feeds work, see bz #67720
      TeamraiserRegistrationService.updateRegistration('update_last_pc2_login=true');
      $scope.eventMessage = null;
      $scope.getEventMessage = function() {
        var getOrganizationMessagePromise;
        getOrganizationMessagePromise = TeamraiserEventService.getOrganizationMessage().then(function(response) {
          var orgMessage,
    ref2;
          orgMessage = (ref2 = response.data.getOrganizationMessageResponse) != null ? ref2.message : void 0;
          if (orgMessage && LuminateUtilsService.ensureString(orgMessage) !== '') {
            $scope.eventMessage = $sce.trustAsHtml(orgMessage);
          }
          return response;
        });
        return $rootScope.loadingPromises.push(getOrganizationMessagePromise);
      };
      $scope.getEventMessage();
      $scope.recentActivity = {
        page: 1
      };
      $scope.getRecentActivity = function() {
        var pageNumber,
    recentActivityPromise;
        pageNumber = $scope.recentActivity.page - 1;
        recentActivityPromise = TeamraiserRegistrationService.getRecentActivity().then(function(response) {
          var recentActivityRecords,
    ref2;
          recentActivityRecords = LuminateUtilsService.ensureArray((ref2 = response.data.getRecentActivityResponse) != null ? ref2.activityRecord : void 0);
          $scope.recentActivity.records = [];
          angular.forEach(recentActivityRecords,
    function(record,
    recordIndex) {
            if (recordIndex > (pageNumber * 5) - 1 && recordIndex < (pageNumber + 1) * 5) {
              return $scope.recentActivity.records.push(record);
            }
          });
          $scope.recentActivity.totalNumber = recentActivityRecords.length;
          return response;
        });
        return $rootScope.loadingPromises.push(recentActivityPromise);
      };
      $scope.getRecentActivity();
      $scope.whatNextAction = function(subview) {
        switch (subview) {
          case 'PERSONAL_PAGE':
            $scope.editPageContent('Participant');
            break;
          case 'GOAL':
            $scope.editGoal('Participant');
            break;
          case 'CONTACTS':
            $location.path('/email/contacts');
            break;
          case 'COMPOSE':
            $location.path('/email/compose');
            break;
          case 'COMPOSE_THANKS':
            $location.path('/email/compose/group/email_rpt_show_unthanked_donors');
            break;
          case 'COMPOSE_OTHER':
            $location.path('/email/compose/group/email_rpt_show_never_emailed');
            break;
          case 'COMPOSE_FOLLOWUP':
            $location.path('/email/compose/group/email_rpt_show_nondonors_followup');
        }
        return subview;
      };
      $scope.whatNext = {
        suggestions: []
      };
      whatNextPromise = TeamraiserRegistrationService.getWhatNext().then(function(response) {
        var allSuggestions,
    ref2;
        allSuggestions = LuminateUtilsService.ensureArray((ref2 = response.data.getTeamraiserSuggestionResponse) != null ? ref2.allSuggestions.suggestion : void 0);
        $scope.whatNext.suggestions = [];
        angular.forEach(allSuggestions,
    function(suggestion,
    suggestionIndex) {
          suggestion.displayNumber = suggestionIndex + 1;
          suggestion.header = '';
          suggestion.nextAction = function() {
            return $scope.whatNextAction(suggestion.type);
          };
          return $scope.whatNext.suggestions.push(suggestion);
        });
        return $translate(['what_next_setup_your_personal_page_header',
    'what_next_set_goal_header',
    'what_next_send_email_header',
    'what_next_reach_out_header',
    'what_next_send_thanks_header',
    'what_next_add_contacts_header',
    'what_next_followup_header']).then(function(translations) {
          return angular.forEach($scope.whatNext.suggestions,
    function(suggestion) {
            switch (suggestion.type) {
              case 'PERSONAL_PAGE':
                return suggestion.header = translations.what_next_setup_your_personal_page_header;
              case 'GOAL':
                return suggestion.header = translations.what_next_set_goal_header;
              case 'CONTACTS':
                return suggestion.header = translations.what_next_add_contacts_header;
              case 'COMPOSE':
                return suggestion.header = translations.what_next_send_email_header;
              case 'COMPOSE_THANKS':
                return suggestion.header = translations.what_next_send_thanks_header;
              case 'COMPOSE_OTHER':
                return suggestion.header = translations.what_next_reach_out_header;
              case 'COMPOSE_FOLLOWUP':
                return suggestion.header = translations.what_next_followup_header;
            }
          });
        },
    function(translationIds) {
          return angular.forEach($scope.whatNext.suggestions,
    function(suggestion) {
            switch (suggestion.type) {
              case 'PERSONAL_PAGE':
                return suggestion.header = translationIds.what_next_setup_your_personal_page_header;
              case 'GOAL':
                return suggestion.header = translationIds.what_next_set_goal_header;
              case 'CONTACTS':
                return suggestion.header = translationIds.what_next_add_contacts_header;
              case 'COMPOSE':
                return suggestion.header = translationIds.what_next_send_email_header;
              case 'COMPOSE_THANKS':
                return suggestion.header = translationIds.what_next_send_thanks_header;
              case 'COMPOSE_OTHER':
                return suggestion.header = translationIds.what_next_reach_out_header;
              case 'COMPOSE_FOLLOWUP':
                return suggestion.header = translationIds.what_next_followup_header;
            }
          });
        });
      });
      $rootScope.loadingPromises.push(whatNextPromise);
      $scope.contactCounts = {};
      contactFilters = ['email_rpt_show_all',
    'email_rpt_show_never_emailed',
    'email_rpt_show_nondonors_followup',
    'email_rpt_show_unthanked_donors',
    'email_rpt_show_donors',
    'email_rpt_show_nondonors'];
      angular.forEach(contactFilters,
    function(filter) {
        var contactCountPromise;
        contactCountPromise = ContactService.getTeamraiserAddressBookContacts('tr_ab_filter=' + filter + '&skip_groups=true&list_page_size=1').then(function(response) {
          var ref2;
          $scope.contactCounts[filter] = ((ref2 = response.data.getTeamraiserAddressBookContactsResponse) != null ? ref2.totalNumberResults : void 0) || 0;
          return response;
        });
        return $rootScope.loadingPromises.push(contactCountPromise);
      });
      $scope.participantProgress = {
        raised: 0,
        goal: 0,
        percent: 0
      };
      if ($scope.participantRegistration.teamId && $scope.participantRegistration.teamId !== '-1') {
        $scope.teamProgress = {
          raised: 0,
          goal: 0,
          percent: 0
        };
      }
      if ($scope.participantRegistration.companyInformation && $scope.participantRegistration.companyInformation.companyId) {
        $scope.companyProgress = {
          raised: 0,
          goal: 0,
          percent: 0
        };
      }
      $scope.refreshFundraisingProgress = function() {
        var fundraisingProgressPromise;
        fundraisingProgressPromise = TeamraiserParticipantService.getProgress().then(function(response) {
          var ref2,
    ref3,
    ref4;
          $scope.participantProgress = (ref2 = response.data.getParticipantProgressResponse) != null ? ref2.personalProgress : void 0;
          if ($scope.participantRegistration.teamId && $scope.participantRegistration.teamId !== '-1') {
            $scope.teamProgress = (ref3 = response.data.getParticipantProgressResponse) != null ? ref3.teamProgress : void 0;
          }
          if ($scope.participantRegistration.companyInformation && $scope.participantRegistration.companyInformation.companyId) {
            $scope.companyProgress = (ref4 = response.data.getParticipantProgressResponse) != null ? ref4.companyProgress : void 0;
          }
          return response;
        });
        return $rootScope.loadingPromises.push(fundraisingProgressPromise);
      };
      $scope.refreshFundraisingProgress();
      $scope.editGoalOptions = {
        updateGoalProcessing: false,
        updateGoalSuccess: false,
        updateGoalFailure: false,
        updateGoalFailureMessage: '',
        updateGoalInput: 0
      };
      $scope.closeGoalAlerts = function(closeModal) {
        $scope.editGoalOptions.updateGoalProcessing = false;
        $scope.editGoalOptions.updateGoalSuccess = false;
        $scope.editGoalOptions.updateGoalFailure = false;
        $scope.editGoalOptions.updateGoalFailureMessage = '';
        if (closeModal) {
          return $scope.cancelEditGoal();
        }
      };
      $scope.editGoal = function(goalType) {
        $scope.closeGoalAlerts(false);
        switch (goalType) {
          case 'Participant':
            $scope.editGoalOptions.updateGoalInput = parseInt($scope.participantProgress.goal) / 100;
            break;
          case 'Team':
            $scope.editGoalOptions.updateGoalInput = parseInt($scope.teamProgress.goal) / 100;
            break;
          default:
            $scope.editGoalOptions.updateGoalInput = 0;
        }
        $scope.editGoalModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/edit' + goalType + 'Goal.html'
        });
        return $scope.editGoalModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'edit' + goalType + 'Goal');
          }
        });
      };
      $scope.cancelEditGoal = function() {
        return $scope.editGoalModal.close();
      };
      $scope.updateGoal = function(goalType) {
        var dataStr,
    updateGoalPromise;
        $scope.closeGoalAlerts(false);
        $scope.editGoalOptions.updateGoalProcessing = true;
        switch (goalType) {
          case 'Participant':
            dataStr = 'goal=' + (100 * $scope.editGoalOptions.updateGoalInput).toString();
            updateGoalPromise = TeamraiserRegistrationService.updateRegistration(dataStr).then(function(response) {
              if (response.data.errorResponse) {
                $scope.editGoalOptions.updateGoalFailure = true;
                if (response.data.errorResponse.message) {
                  $scope.editGoalOptions.updateGoalFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('personal_goal_unexpected_error').then(function(translation) {
                    return $scope.editGoalOptions.updateGoalFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editGoalOptions.updateGoalFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editGoalOptions.updateGoalSuccess = true;
                $scope.refreshFundraisingProgress();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(updateGoalPromise);
          case 'Team':
            dataStr = 'team_goal=' + (100 * $scope.editGoalOptions.updateGoalInput).toString();
            updateGoalPromise = TeamraiserTeamService.updateTeamInformation(dataStr).then(function(response) {
              if (response.data.errorResponse) {
                $scope.editGoalOptions.updateGoalFailure = true;
                if (response.data.errorResponse.message) {
                  $scope.editGoalOptions.updateGoalFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('team_goal_unexpected_error').then(function(translation) {
                    return $scope.editGoalOptions.updateGoalFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editGoalOptions.updateGoalFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editGoalOptions.updateGoalSuccess = true;
                $scope.refreshFundraisingProgress();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(updateGoalPromise);
          case 'Company':
            return goalType;
        }
      };
      translateGiftActionLabels = function() {
        if ($scope.translateGiftActionLabelsTimeout) {
          $timeout.cancel($scope.translateGiftActionLabelsTimeout);
        }
        $scope.giftActionLabels = {
          acknowledgeGift: '',
          thankDonor: '',
          deleteGift: '',
          noAction: ''
        };
        return $translate(['gift_action_acknowledge_title',
    'gift_action_thank_donor_title',
    'gift_action_delete_title',
    'gift_action_no_action_title']).then(function(translations) {
          $scope.giftActionLabels.acknowledgeGift = translations.gift_action_acknowledge_title;
          $scope.giftActionLabels.thankDonor = translations.gift_action_thank_donor_title;
          $scope.giftActionLabels.deleteGift = translations.gift_action_delete_title;
          return $scope.giftActionLabels.noAction = translations.gift_action_no_action_title;
        },
    function(translationIds) {
          return $scope.translateGiftActionLabelsTimeout = $timeout(translateGiftActionLabels,
    500);
        });
      };
      translateGiftActionLabels();
      $scope.participantGifts = {
        page: 1
      };
      $scope.getGifts = function() {
        var pageNumber,
    personalGiftsPromise;
        pageNumber = $scope.participantGifts.page - 1;
        personalGiftsPromise = TeamraiserGiftService.getGifts('list_sort_column=date_recorded&list_ascending=false&list_page_size=5&list_page_offset=' + pageNumber).then(function(response) {
          var participantGifts,
    ref2,
    ref3;
          participantGifts = LuminateUtilsService.ensureArray((ref2 = response.data.getGiftsResponse) != null ? ref2.gift : void 0);
          $scope.participantGifts.gifts = [];
          angular.forEach(participantGifts,
    function(gift) {
            if (gift) {
              gift.contact = {
                firstName: gift.name.first,
                lastName: gift.name.last,
                email: gift.email,
                id: gift.contactId
              };
              return $scope.participantGifts.gifts.push(gift);
            }
          });
          $scope.participantGifts.giftActionLabels = $scope.giftActionLabels;
          $scope.participantGifts.totalNumber = Number(((ref3 = response.data.getGiftsResponse) != null ? ref3.totalNumberResults : void 0) || 0);
          return response;
        });
        return $rootScope.loadingPromises.push(personalGiftsPromise);
      };
      $scope.getGifts();
      $scope.enterGifts = function() {
        if (!$scope.enterGiftsModal) {
          $scope.enterGiftsModal = $uibModal.open({
            scope: $scope,
            backdrop: 'static',
            size: 'lg',
            templateUrl: './html/modal/enterGifts.html'
          });
          $scope.enterGiftsModal.result.then(function(result) {
            $scope.getGifts();
            $scope.getTeamGifts();
            return delete $scope.enterGiftsModal;
          },
    function() {
            return delete $scope.enterGiftsModal;
          });
          return $scope.enterGiftsModal.rendered.then(function() {
            return LuminateUtilsService.adjustModalFramePosition();
          });
        }
      };
      $scope.acknowledgeGift = function(contactId) {
        $scope.acknowledgeGiftContactId = contactId;
        $scope.acknowledgeGiftProcessing = false;
        $scope.acknowledgeGiftModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/acknowledgeGift.html'
        });
        return $scope.acknowledgeGiftModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'acknowledgeGift');
          }
        });
      };
      closeAcknowledgeGiftModal = function() {
        delete $scope.acknowledgeGiftContactId;
        delete $scope.acknowledgeGiftProcessing;
        return $scope.acknowledgeGiftModal.close();
      };
      $scope.cancelAcknowledgeGift = function() {
        return closeAcknowledgeGiftModal();
      };
      $scope.confirmAcknowledgeGift = function() {
        var acknowledgeGiftPromise;
        if ($scope.acknowledgeGiftContactId) {
          $scope.acknowledgeGiftProcessing = true;
          acknowledgeGiftPromise = TeamraiserGiftService.acknowledgeGift('contact_id=' + $scope.acknowledgeGiftContactId).then(function(response) {
            closeAcknowledgeGiftModal();
            $scope.getGifts();
            if ($scope.participantRegistration.teamId && $scope.participantRegistration.teamId !== '-1') {
              $scope.teamGifts.page = 1;
              $scope.getTeamGifts();
            }
            return response;
          });
          return $rootScope.loadingPromises.push(acknowledgeGiftPromise);
        }
      };
      $scope.deleteGift = function(giftId) {
        $scope.deleteGiftId = giftId;
        $scope.deleteGiftProcessing = false;
        $scope.deleteGiftModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/deleteGift.html'
        });
        return $scope.deleteGiftModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'deleteGift');
          }
        });
      };
      closeDeleteGiftModal = function() {
        delete $scope.deleteGiftId;
        delete $scope.deleteGiftProcessing;
        return $scope.deleteGiftModal.close();
      };
      $scope.cancelDeleteGift = function() {
        return closeDeleteGiftModal();
      };
      $scope.confirmDeleteGift = function() {
        var deleteGiftPromise;
        if ($scope.deleteGiftId) {
          $scope.deleteGiftProcessing = true;
          deleteGiftPromise = TeamraiserGiftService.deleteGift('gift_id=' + $scope.deleteGiftId).then(function(response) {
            closeDeleteGiftModal();
            $scope.getGifts();
            if ($scope.participantRegistration.teamId && $scope.participantRegistration.teamId !== '-1') {
              $scope.getTeamGifts();
            }
            return response;
          });
          return $rootScope.loadingPromises.push(deleteGiftPromise);
        }
      };
      $scope.thankDonor = function(contact) {
        if (contact != null) {
          if (!$rootScope.selectedContacts) {
            $rootScope.selectedContacts = {};
          }
          $rootScope.selectedContacts.contacts = [contact];
          return $location.path('/email/compose');
        }
      };
      if ($scope.teamraiserConfig.personalPageEditing === 'PARTICIPANTS' || $scope.participantRegistration.teamId <= 0) {
        $scope.showPersonalPage = true;
      } else if ($scope.teamraiserConfig.personalPageEditing === 'CAPTAINS' && $scope.participantRegistration.aTeamCaptain === 'true') {
        $scope.showPersonalPage = true;
      } else {
        $scope.showPersonalPage = false;
      }
      $scope.personalPage = {
        shortcut: null,
        content: null,
        mediaLayout: null,
        photoItems: null,
        photoSizes: {
          image1: {
            width: 300,
            height: 400
          },
          image2: {
            width: 300,
            height: 400
          }
        },
        videoUrl: null,
        videoUrlInput: null
      };
      setVideoSource = function(url) {
        var videoId;
        if (url && $scope.personalPage.mediaLayout === 'video') {
          $scope.personalPage.videoUrl = '';
          $scope.personalPage.videoUrlInput = '';
          url = url.replace('&amp;v=',
    '&v=');
          videoId = '';
          if (url.indexOf('?v=') !== -1) {
            videoId = url.split('?v=')[1].split('&')[0];
          } else if (url.indexOf('&v=') !== -1) {
            videoId = url.split('&v=')[1].split('&')[0];
          } else if (url.indexOf('/embed/') !== -1) {
            videoId = url.split('/embed/')[1].split('/')[0].split('?')[0];
          } else if (url.indexOf('youtu.be/') !== -1) {
            videoId = url.split('youtu.be/')[1].split('/')[0].split('?')[0];
          }
          if (videoId !== '') {
            $scope.personalPage.videoUrl = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + videoId + '?wmode=opaque&amp;rel=0&amp;showinfo=0');
            return $scope.personalPage.videoUrlInput = 'http://youtube.com/watch?v=' + videoId;
          }
        }
      };
      $scope.getPersonalPageMedia = function() {
        var getPersonalPageMediaPromise;
        getPersonalPageMediaPromise = TeamraiserParticipantService.getPersonalMediaLayout().then(function(response) {
          var ref2;
          $scope.personalPage.mediaLayout = (ref2 = response.data.getPersonalMediaLayoutResponse) != null ? ref2.personalMediaLayout : void 0;
          if ($scope.personalPage.mediaLayout === 'photos') {
            return TeamraiserParticipantService.getPersonalPhotos().then(function(response) {
              var photoItems,
    ref3;
              photoItems = LuminateUtilsService.ensureArray((ref3 = response.data.getPersonalPhotosResponse) != null ? ref3.photoItem : void 0);
              $scope.personalPage.photoItems = [];
              angular.forEach(photoItems,
    function(photoItem) {
                if (photoItem.customUrl || photoItem.defaultUrl) {
                  photoItem.caption = LuminateUtilsService.ensureString(photoItem.caption);
                  return $scope.personalPage.photoItems.push(photoItem);
                }
              });
              setPageMediaData('Participant');
              $rootScope.resizeFrameForCurrentView();
              return $scope.personalPage;
            });
          } else {
            return TeamraiserParticipantService.getPersonalVideoUrl().then(function(response) {
              var ref3,
    videoUrl;
              videoUrl = (ref3 = response.data.getPersonalVideoUrlResponse) != null ? ref3.videoUrl : void 0;
              setVideoSource(videoUrl);
              setPageMediaData('Participant');
              $rootScope.resizeFrameForCurrentView();
              return $scope.personalPage;
            });
          }
        });
        return $rootScope.loadingPromises.push(getPersonalPageMediaPromise);
      };
      $scope.getPersonalPageContent = function(withMedia) {
        var getPersonalPageContentPromise;
        getPersonalPageContentPromise = TeamraiserParticipantService.getPersonalPageInfo().then(function(response) {
          var ref2,
    ref3,
    ref4;
          $scope.personalPage.content = (ref2 = response.data.getPersonalPageResponse) != null ? ref2.personalPage : void 0;
          $scope.personalPage.content.pageTitle = LuminateUtilsService.ensureString((ref3 = $scope.personalPage.content) != null ? ref3.pageTitle : void 0);
          $scope.personalPage.content.richText = LuminateUtilsService.ensureString((ref4 = $scope.personalPage.content) != null ? ref4.richText : void 0);
          if (withMedia) {
            $scope.getPersonalPageMedia();
          } else {
            $rootScope.resizeFrameForCurrentView();
          }
          return $scope.personalPage;
        });
        return $rootScope.loadingPromises.push(getPersonalPageContentPromise);
      };
      $scope.getPersonalPageContent(true);
      //# Edit Page URL
      getParticipantShortcutPromise = TeamraiserParticipantService.getShortcut().then(function(response) {
        var ref2,
    ref3;
        $scope.personalPage.shortcut = ((ref2 = response.data.getShortcutResponse) != null ? ref2.shortcutItem : void 0) || {};
        $scope.personalPage.shortcut.relativeUrl = getRelativeUrl((ref3 = $scope.personalPage.shortcut) != null ? ref3.defaultUrl : void 0);
        return response;
      });
      $rootScope.loadingPromises.push(getParticipantShortcutPromise);
      $scope.editPageUrlOptions = {
        updateUrlProcessing: false,
        updateUrlSuccess: false,
        updateUrlFailure: false,
        updateUrlFailureMessage: '',
        hint: '',
        urlPrefix: '',
        updateUrlInput: ''
      };
      $scope.closeUrlAlerts = function(closeModal) {
        $scope.editPageUrlOptions.updateUrlProcessing = false;
        $scope.editPageUrlOptions.updateUrlSuccess = false;
        $scope.editPageUrlOptions.updateUrlFailure = false;
        $scope.editPageUrlOptions.updateUrlFailureMessage = '';
        if (closeModal) {
          return $scope.cancelEditPageUrl();
        }
      };
      $scope.editPageUrl = function(urlType) {
        var shortcutData;
        $scope.closeUrlAlerts(false);
        switch (urlType) {
          case 'Participant':
            shortcutData = $scope.personalPage.shortcut;
            break;
          case 'Team':
            shortcutData = $scope.teamPage.shortcut;
            break;
          case 'Company':
            shortcutData = $scope.companyPage.shortcut;
        }
        $scope.editPageUrlOptions.hint = LuminateUtilsService.ensureString(shortcutData != null ? shortcutData.hint : void 0);
        $scope.editPageUrlOptions.urlPrefix = LuminateUtilsService.ensureString(shortcutData != null ? shortcutData.prefix : void 0);
        $scope.editPageUrlOptions.updateUrlInput = LuminateUtilsService.ensureString(shortcutData != null ? shortcutData.text : void 0);
        $scope.editPageUrlModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/edit' + urlType + 'PageUrl.html'
        });
        return $scope.editPageUrlModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'edit' + urlType + 'PageUrl');
          }
        });
      };
      $scope.cancelEditPageUrl = function() {
        return $scope.editPageUrlModal.close();
      };
      $scope.updatePageUrl = function(urlType) {
        var dataStr,
    updateUrlPromise;
        $scope.closeUrlAlerts(false);
        $scope.editPageUrlOptions.updateUrlProcessing = true;
        dataStr = 'text=' + $scope.editPageUrlOptions.updateUrlInput;
        switch (urlType) {
          case 'Participant':
            updateUrlPromise = TeamraiserParticipantService.updateShortcut(dataStr).then(function(response) {
              var ref2,
    ref3,
    ref4;
              if (response.data.errorResponse) {
                $scope.editPageUrlOptions.updateUrlFailure = true;
                if ((ref2 = response.data.errorResponse) != null ? ref2.message : void 0) {
                  $scope.editPageUrlOptions.updateUrlFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('shortcut_save_failure').then(function(translation) {
                    return $scope.editPageUrlOptions.updateUrlFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageUrlOptions.updateUrlFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageUrlOptions.updateUrlSuccess = true;
                $scope.personalPage.shortcut = ((ref3 = response.data.updateShortcutResponse) != null ? ref3.shortcutItem : void 0) || {};
                $scope.personalPage.shortcut.url = LuminateUtilsService.ensureString($scope.personalPage.shortcut.url);
                $scope.personalPage.shortcut.relativeUrl = getRelativeUrl((ref4 = $scope.personalPage.shortcut) != null ? ref4.defaultUrl : void 0);
              }
              return response;
            });
            return $rootScope.loadingPromises.push(updateUrlPromise);
          case 'Team':
            updateUrlPromise = TeamraiserTeamService.updateTeamShortcut(dataStr).then(function(response) {
              var ref2,
    ref3,
    ref4;
              if (response.data.errorResponse) {
                $scope.editPageUrlOptions.updateUrlFailure = true;
                if ((ref2 = response.data.errorResponse) != null ? ref2.message : void 0) {
                  $scope.editPageUrlOptions.updateUrlFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('teampage_shortcut_save_failure').then(function(translation) {
                    return $scope.editPageUrlOptions.updateUrlFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageUrlOptions.updateUrlFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageUrlOptions.updateUrlSuccess = true;
                $scope.teamPage.shortcut = ((ref3 = response.data.updateTeamShortcutResponse) != null ? ref3.shortcutItem : void 0) || {};
                $scope.teamPage.shortcut.url = LuminateUtilsService.ensureString($scope.teamPage.shortcut.url);
                $scope.teamPage.shortcut.relativeUrl = getRelativeUrl((ref4 = $scope.teamPage.shortcut) != null ? ref4.defaultUrl : void 0);
              }
              return response;
            });
            return $rootScope.loadingPromises.push(updateUrlPromise);
          case 'Company':
            updateUrlPromise = TeamraiserCompanyService.updateCompanyShortcut(dataStr).then(function(response) {
              var ref2,
    ref3,
    ref4;
              if (response.data.errorResponse) {
                $scope.editPageUrlOptions.updateUrlFailure = true;
                if ((ref2 = response.data.errorResponse) != null ? ref2.message : void 0) {
                  $scope.editPageUrlOptions.updateUrlFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('company_page_shortcut_save_failure').then(function(translation) {
                    return $scope.editPageUrlOptions.updateUrlFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageUrlOptions.updateUrlFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageUrlOptions.updateUrlSuccess = true;
                $scope.companyPage.shortcut = ((ref3 = response.data.updateCompanyShortcutResponse) != null ? ref3.shortcutItem : void 0) || {};
                $scope.companyPage.shortcut.url = LuminateUtilsService.ensureString($scope.companyPage.shortcut.url);
                $scope.companyPage.shortcut.relativeUrl = getRelativeUrl((ref4 = $scope.companyPage.shortcut) != null ? ref4.defaultUrl : void 0);
              }
              return response;
            });
            return $rootScope.loadingPromises.push(updateUrlPromise);
        }
      };
      //# Edit Page Content
      $scope.editPageContentOptions = {
        updateContentProcessing: false,
        updateContentSuccess: false,
        updateContentFailure: false,
        updateContentFailureMessage: '',
        pageTitle: '',
        richText: '',
        textEditorToolbar: [['p',
    'bold',
    'italics',
    'underline'],
    ['ul',
    'ol',
    'justifyLeft',
    'justifyCenter',
    'justifyRight',
    'justifyFull',
    'indent',
    'outdent'],
    ['undo',
    'redo']]
      };
      $scope.closePageContentAlerts = function(closeModal) {
        $scope.editPageContentOptions.updateContentProcessing = false;
        $scope.editPageContentOptions.updateContentSuccess = false;
        $scope.editPageContentOptions.updateContentFailure = false;
        $scope.editPageContentOptions.updateContentFailureMessage = '';
        if (closeModal) {
          return $scope.cancelEditPageContent();
        }
      };
      $scope.editPageContent = function(pageType) {
        var ref2,
    ref3,
    ref4,
    ref5,
    ref6;
        $scope.closePageContentAlerts(false);
        $scope.editPageContentOptions.pageTitle = '';
        $scope.editPageContentOptions.richText = '';
        switch (pageType) {
          case 'Participant':
            $scope.editPageContentOptions.pageTitle = LuminateUtilsService.ensureString((ref2 = $scope.personalPage.content) != null ? ref2.pageTitle : void 0);
            $scope.editPageContentOptions.richText = LuminateUtilsService.ensureString((ref3 = $scope.personalPage.content) != null ? ref3.richText : void 0);
            break;
          case 'Team':
            $scope.editPageContentOptions.richText = LuminateUtilsService.ensureString((ref4 = $scope.teamPage.content) != null ? ref4.richText : void 0);
            break;
          case 'Company':
            $scope.editPageContentOptions.pageTitle = LuminateUtilsService.ensureString((ref5 = $scope.companyPage.content) != null ? ref5.pageTitle : void 0);
            $scope.editPageContentOptions.richText = LuminateUtilsService.ensureString((ref6 = $scope.companyPage.content) != null ? ref6.richText : void 0);
        }
        $scope.editPageContentModal = $uibModal.open({
          scope: $scope,
          backdrop: 'static',
          templateUrl: './html/modal/edit' + pageType + 'PageContent.html'
        });
        return $scope.editPageContentModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'edit' + pageType + 'PageContent');
          }
        });
      };
      $scope.cancelEditPageContent = function() {
        return $scope.editPageContentModal.close();
      };
      $scope.updatePageContent = function(pageType) {
        var dataStr,
    updateCompanyPageInfoPromise,
    updatePersonalPageInfoPromise,
    updateTeamPageInfoPromise;
        $scope.closePageContentAlerts(false);
        $scope.editPageContentOptions.updateContentProcessing = true;
        dataStr = 'rich_text=' + encodeURIComponent(ContentService.htmlToRichText($scope.editPageContentOptions.richText));
        switch (pageType) {
          case 'Participant':
            dataStr = 'page_title=' + encodeURIComponent($scope.editPageContentOptions.pageTitle) + '&' + dataStr;
            updatePersonalPageInfoPromise = TeamraiserParticipantService.updatePersonalPageInfo(dataStr).then(function(response) {
              var ref2,
    ref3;
              if (response.data.errorResponse || ((ref2 = response.data.updatePersonalPageResponse) != null ? ref2.success : void 0) !== 'true') {
                $scope.editPageContentOptions.updateContentFailure = true;
                if ((ref3 = response.data.errorResponse) != null ? ref3.message : void 0) {
                  $scope.editPageContentOptions.updateContentFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('personal_page_save_failure').then(function(translation) {
                    return $scope.editPageContentOptions.updateContentFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageContentOptions.updateContentFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageContentOptions.updateContentSuccess = true;
                $scope.getPersonalPageContent(false);
              }
              return response;
            });
            return $rootScope.loadingPromises.push(updatePersonalPageInfoPromise);
          case 'Team':
            updateTeamPageInfoPromise = TeamraiserTeamService.updateTeamPageInfo(dataStr).then(function(response) {
              var ref2,
    ref3;
              if (response.data.errorResponse || ((ref2 = response.data.updateTeamPageResponse) != null ? ref2.success : void 0) !== 'true') {
                $scope.editPageContentOptions.updateContentFailure = true;
                if ((ref3 = response.data.errorResponse) != null ? ref3.message : void 0) {
                  $scope.editPageContentOptions.updateContentFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('team_page_save_failure').then(function(translation) {
                    return $scope.editPageContentOptions.updateContentFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageContentOptions.updateContentFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageContentOptions.updateContentSuccess = true;
                $scope.getTeamPageContent(false);
              }
              return response;
            });
            return $rootScope.loadingPromises.push(updateTeamPageInfoPromise);
          case 'Company':
            dataStr = 'page_title=' + encodeURIComponent($scope.editPageContentOptions.pageTitle) + '&' + dataStr;
            updateCompanyPageInfoPromise = TeamraiserCompanyService.updateCompanyPageInfo(dataStr).then(function(response) {
              var ref2,
    ref3;
              if (response.data.errorResponse || ((ref2 = response.data.updateCompanyPageResponse) != null ? ref2.success : void 0) !== 'true') {
                $scope.editPageContentOptions.updateContentFailure = true;
                if ((ref3 = response.data.errorResponse) != null ? ref3.message : void 0) {
                  $scope.editPageContentOptions.updateContentFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('company_page_save_failure').then(function(translation) {
                    return $scope.editPageContentOptions.updateContentFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageContentOptions.updateContentFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageContentOptions.updateContentSuccess = true;
                $scope.getCompanyPageContent(false);
              }
              return response;
            });
            return $rootScope.loadingPromises.push(updateCompanyPageInfoPromise);
        }
      };
      //# Edit Page Media
      $scope.editPageMediaOptions = {
        updateMediaProcessing: false,
        updateMediaSuccess: false,
        updateMedia2Success: false,
        updateMediaFailure: false,
        updateMediaFailureMessage: '',
        mediaLayout: '',
        mediaLayoutOptions: {
          photos: '',
          video: ''
        },
        photoUrl: '',
        photoSrc: null,
        photoFile: null,
        photoCaption: '',
        photo2Url: '',
        photo2Src: null,
        photo2File: null,
        photo2Caption: '',
        videoUrl: ''
      };
      translateMediaTypeLabels = function() {
        if ($scope.translateMediaTypeLabelsTimeout) {
          $timeout.cancel($scope.translateMediaTypeLabelsTimeout);
        }
        return $translate(['use_media_type_photos_label',
    'use_media_type_video_label']).then(function(translations) {
          $scope.editPageMediaOptions.mediaLayoutOptions.photos = translations.use_media_type_photos_label;
          return $scope.editPageMediaOptions.mediaLayoutOptions.video = translations.use_media_type_video_label;
        },
    function(translationIds) {
          return $scope.translateMediaTypeLabelsTimeout = $timeout(translateMediaTypeLabels,
    500);
        });
      };
      translateMediaTypeLabels();
      clearPageMediaData = function() {
        $scope.editPageMediaOptions.photoUrl = '';
        $scope.editPageMediaOptions.photoSrc = null;
        $scope.editPageMediaOptions.photoFile = null;
        $scope.editPageMediaOptions.photoCaption = '';
        $scope.editPageMediaOptions.photo2Url = '';
        $scope.editPageMediaOptions.photo2Src = null;
        $scope.editPageMediaOptions.photo2File = null;
        $scope.editPageMediaOptions.photo2Caption = '';
        return $scope.editPageMediaOptions.videoUrl = '';
      };
      $scope.closePageMediaAlerts = function(closeModal) {
        $scope.editPageMediaOptions.updateMediaProcessing = false;
        $scope.editPageMediaOptions.updateMediaSuccess = false;
        $scope.editPageMediaOptions.updateMedia2Success = false;
        $scope.editPageMediaOptions.updateMediaFailure = false;
        $scope.editPageMediaOptions.updateMediaFailureMessage = '';
        if (closeModal) {
          return $scope.cancelEditPageMedia();
        }
      };
      setPageMediaData = function(pageType) {
        var ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
    ref8;
        switch (pageType) {
          case 'Participant':
            $scope.editPageMediaOptions.mediaLayout = (ref2 = $scope.personalPage) != null ? ref2.mediaLayout : void 0;
            if ($scope.editPageMediaOptions.mediaLayout === 'photos') {
              if (((ref3 = $scope.personalPage) != null ? (ref4 = ref3.photoItems) != null ? ref4.length : void 0 : void 0) > 0) {
                $scope.editPageMediaOptions.photoUrl = $scope.personalPage.photoItems[0].customUrl || $scope.personalPage.photoItems[0].defaultUrl;
                $scope.editPageMediaOptions.photoCaption = $scope.personalPage.photoItems[0].caption;
              }
              if (((ref5 = $scope.personalPage) != null ? (ref6 = ref5.photoItems) != null ? ref6.length : void 0 : void 0) > 1) {
                $scope.editPageMediaOptions.photo2Url = $scope.personalPage.photoItems[1].customUrl || $scope.personalPage.photoItems[1].defaultUrl;
                $scope.editPageMediaOptions.photo2Caption = $scope.personalPage.photoItems[1].caption;
              }
            } else {
              $scope.editPageMediaOptions.videoUrl = $scope.personalPage.videoUrlInput;
            }
            break;
          case 'Team':
            if ((ref7 = $scope.teamPage) != null ? ref7.photoItem : void 0) {
              $scope.editPageMediaOptions.photoUrl = $scope.teamPage.photoItem.customUrl || $scope.teamPage.photoItem.defaultUrl;
              $scope.editPageMediaOptions.photoCaption = $scope.teamPage.photoItem.caption;
            }
            break;
          case 'Company':
            if ((ref8 = $scope.companyPage) != null ? ref8.photoItem : void 0) {
              $scope.editPageMediaOptions.photoUrl = $scope.companyPage.photoItem.customUrl || $scope.companyPage.photoItem.defaultUrl;
              $scope.editPageMediaOptions.photoCaption = $scope.companyPage.photoItem.caption;
            }
        }
        return $scope.editPageMediaOptions;
      };
      $scope.editPageMedia = function(pageType) {
        $scope.closePageMediaAlerts(false);
        clearPageMediaData();
        setPageMediaData(pageType);
        $scope.editPageMediaModal = $uibModal.open({
          scope: $scope,
          templateUrl: './html/modal/edit' + pageType + 'PageMedia.html'
        });
        return $scope.editPageMediaModal.rendered.then(function() {
          LuminateUtilsService.adjustModalFramePosition();
          if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
            return ngLoadModal($rootScope,
    $scope,
    'edit' + pageType + 'PageMedia');
          }
        });
      };
      $scope.cancelEditPageMedia = function() {
        return $scope.editPageMediaModal.close();
      };
      $scope.updatePersonalMediaLayout = function() {
        var ref2,
    ref3,
    updatePersonalMediaLayoutPromise;
        if (((ref2 = $scope.editPageMediaOptions.mediaLayout) === 'photos' || ref2 === 'video') && $scope.editPageMediaOptions.mediaLayout !== ((ref3 = $scope.personalPage) != null ? ref3.mediaLayout : void 0)) {
          updatePersonalMediaLayoutPromise = TeamraiserParticipantService.updatePersonalMediaLayout('personal_media_layout=' + $scope.editPageMediaOptions.mediaLayout).then(function(response) {
            $scope.personalPage.mediaLayout = $scope.editPageMediaOptions.mediaLayout;
            return response;
          });
          return $rootScope.loadingPromises.push(updatePersonalMediaLayoutPromise);
        }
      };
      $scope.updatePersonalVideoUrl = function() {
        var dataStr,
    ref2,
    updatePersonalVideoUrlPromise;
        if (((ref2 = $scope.personalPage) != null ? ref2.mediaLayout : void 0) !== 'video') {
          $scope.updatePersonalMediaLayout();
        }
        $scope.editPageMediaOptions.updateMediaProcessing = true;
        dataStr = 'video_url=' + encodeURIComponent($scope.editPageMediaOptions.videoUrl);
        updatePersonalVideoUrlPromise = TeamraiserParticipantService.updatePersonalVideoUrl(dataStr).then(function(response) {
          var ref3,
    ref4,
    videoUrl;
          if (response.data.errorResponse) {
            $scope.editPageMediaOptions.updateMediaFailure = true;
            if ((ref3 = response.data.errorResponse) != null ? ref3.message : void 0) {
              $scope.editPageMediaOptions.updateMediaFailureMessage = response.data.errorResponse.message;
            } else {
              $translate('personal_video_url_generic_error').then(function(translation) {
                return $scope.editPageMediaOptions.updateMediaFailureMessage = translation;
              },
    function(translationId) {
                return $scope.editPageMediaOptions.updateMediaFailureMessage = translationId;
              });
            }
          } else {
            $scope.editPageMediaOptions.updateMediaSuccess = true;
            videoUrl = (ref4 = response.data.updatePersonalVideoUrlResponse) != null ? ref4.videoUrl : void 0;
            setVideoSource(videoUrl);
            $rootScope.resizeFrameForCurrentView();
          }
          return response;
        });
        return $rootScope.loadingPromises.push(updatePersonalVideoUrlPromise);
      };
      $scope.submitPhotoUpload = function(pageType) {
        var requestFormData,
    uploadCompanyPhotoPromise,
    uploadParticipantPhotoPromise,
    uploadTeamPhotoPromise;
        $scope.closePageMediaAlerts(false);
        $scope.editPageMediaOptions.updateMediaProcessing = true;
        requestFormData = new FormData;
        switch (pageType) {
          case 'Participant':
            if ($scope.personalPage.mediaLayout !== 'photos') {
              $scope.updatePersonalMediaLayout();
            }
            requestFormData.append('graphic_upload_upload',
    'true');
            requestFormData.append('graphic_caption',
    $scope.editPageMediaOptions.photoCaption);
            if ($scope.editPageMediaOptions.photoFile) {
              requestFormData.append('graphic_upload_file',
    $scope.editPageMediaOptions.photoFile);
            }
            if ($rootScope.teamraiserConfig.personalPageSecondPhoto === 'true') {
              requestFormData.append('graphic_upload2_upload',
    'true');
              requestFormData.append('graphic_caption2',
    $scope.editPageMediaOptions.photo2Caption);
              if ($scope.editPageMediaOptions.photo2File) {
                requestFormData.append('graphic_upload2_file',
    $scope.editPageMediaOptions.photo2File);
              }
            }
            uploadParticipantPhotoPromise = TeamraiserParticipantService.uploadPersonalPhoto(requestFormData).then(function(response) {
              var photoItems,
    ref10,
    ref11,
    ref2,
    ref3,
    ref4,
    ref5,
    ref6,
    ref7,
    ref8,
    ref9;
              if (response.data.errorResponse || ((ref2 = response.data.uploadPersonalPhotoResponse) != null ? ref2.code : void 0)) {
                $scope.editPageMediaOptions.updateMediaFailure = true;
                if (((ref3 = response.data.errorResponse) != null ? ref3.message : void 0) || ((ref4 = response.data.uploadPersonalPhotoResponse) != null ? ref4.message : void 0)) {
                  $scope.editPageMediaOptions.updateMediaFailureMessage = ((ref5 = response.data.errorResponse) != null ? ref5.message : void 0) || ((ref6 = response.data.uploadPersonalPhotoResponse) != null ? ref6.message : void 0);
                } else {
                  $translate('photo_upload_generic_error').then(function(translation) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translationId;
                  });
                }
              } else {
                if ($scope.editPageMediaOptions.photoFile || $scope.editPageMediaOptions.photoCaption !== ((ref7 = $scope.personalPage) != null ? (ref8 = ref7.photoItems[0]) != null ? ref8.caption : void 0 : void 0)) {
                  $scope.editPageMediaOptions.updateMediaSuccess = true;
                  $scope.editPageMediaOptions.photoUrl = null;
                }
                if ($scope.editPageMediaOptions.photo2File || $scope.editPageMediaOptions.photo2Caption !== ((ref9 = $scope.personalPage) != null ? (ref10 = ref9.photoItems[1]) != null ? ref10.caption : void 0 : void 0)) {
                  $scope.editPageMediaOptions.updateMedia2Success = true;
                  $scope.editPageMediaOptions.photo2Url = null;
                }
                photoItems = LuminateUtilsService.ensureArray((ref11 = response.data.uploadPersonalPhotoResponse) != null ? ref11.photoItem : void 0);
                if (photoItems.length === 0) {
                  $scope.editPageMediaOptions.updateMediaSuccess = true;
                }
                $scope.getPersonalPageMedia();
              }
              $scope.editPageMediaOptions.photoSrc = null;
              $scope.editPageMediaOptions.photoFile = null;
              $scope.editPageMediaOptions.photo2Src = null;
              $scope.editPageMediaOptions.photo2File = null;
              return response;
            });
            $rootScope.loadingPromises.push(uploadParticipantPhotoPromise);
            break;
          case 'Team':
            requestFormData.append('graphic_upload_upload',
    'true');
            requestFormData.append('graphic_caption',
    $scope.editPageMediaOptions.photoCaption);
            if ($scope.editPageMediaOptions.photoFile) {
              requestFormData.append('graphic_upload_file',
    $scope.editPageMediaOptions.photoFile);
            }
            uploadTeamPhotoPromise = TeamraiserTeamService.uploadTeamPhoto(requestFormData).then(function(response) {
              var ref2,
    ref3,
    ref4,
    ref5,
    ref6;
              if (response.data.errorResponse || ((ref2 = response.data.uploadTeamPhotoResponse) != null ? ref2.code : void 0)) {
                $scope.editPageMediaOptions.updateMediaFailure = true;
                if (((ref3 = response.data.errorResponse) != null ? ref3.message : void 0) || ((ref4 = response.data.uploadTeamPhotoResponse) != null ? ref4.message : void 0)) {
                  $scope.editPageMediaOptions.updateMediaFailureMessage = ((ref5 = response.data.errorResponse) != null ? ref5.message : void 0) || ((ref6 = response.data.uploadTeamPhotoResponse) != null ? ref6.message : void 0);
                } else {
                  $translate('team_photo_upload_generic_error').then(function(translation) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageMediaOptions.updateMediaSuccess = true;
                $scope.editPageMediaOptions.photoUrl = null;
                $scope.getTeamPagePhoto();
              }
              $scope.editPageMediaOptions.photoSrc = null;
              $scope.editPageMediaOptions.photoFile = null;
              return response;
            });
            $rootScope.loadingPromises.push(uploadTeamPhotoPromise);
            break;
          case 'Company':
            requestFormData.append('photo_1_upload',
    'true');
            requestFormData.append('photo1_text',
    $scope.editPageMediaOptions.photoCaption);
            if ($scope.editPageMediaOptions.photoFile) {
              requestFormData.append('photo_1_file',
    $scope.editPageMediaOptions.photoFile);
            }
            uploadCompanyPhotoPromise = TeamraiserCompanyService.uploadCompanyPhoto(requestFormData).then(function(response) {
              var ref2,
    ref3,
    ref4,
    ref5,
    ref6;
              if (response.data.errorResponse || ((ref2 = response.data.uploadCompanyPhotoResponse) != null ? ref2.code : void 0)) {
                $scope.editPageMediaOptions.updateMediaFailure = true;
                if (((ref3 = response.data.errorResponse) != null ? ref3.message : void 0) || ((ref4 = response.data.uploadCompanyPhotoResponse) != null ? ref4.message : void 0)) {
                  $scope.editPageMediaOptions.updateMediaFailureMessage = ((ref5 = response.data.errorResponse) != null ? ref5.message : void 0) || ((ref6 = response.data.uploadCompanyPhotoResponse) != null ? ref6.message : void 0);
                } else {
                  $translate('company_photo_upload_generic_error').then(function(translation) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageMediaOptions.updateMediaSuccess = true;
                $scope.editPageMediaOptions.photoUrl = null;
                $scope.getCompanyPagePhoto();
              }
              $scope.editPageMediaOptions.photoSrc = null;
              $scope.editPageMediaOptions.photoFile = null;
              return response;
            });
            $rootScope.loadingPromises.push(uploadCompanyPhotoPromise);
        }
        return pageType;
      };
      $scope.removePhoto = function(photoType) {
        var removeCompanyPhotoPromise,
    removePersonalPhotoPromise,
    removeTeamPhotoPromise,
    requestFormData;
        $scope.closePageMediaAlerts(false);
        $scope.editPageMediaOptions.updateMediaProcessing = true;
        requestFormData = new FormData;
        switch (photoType) {
          case 'Participant1':
            requestFormData.append('graphic_upload_delete',
    'true');
            removePersonalPhotoPromise = TeamraiserParticipantService.removePersonalPhoto(requestFormData).then(function(response) {
              var ref2;
              if (response.data.errorResponse) {
                $scope.editPageMediaOptions.updateMediaFailure = true;
                if ((ref2 = response.data.errorResponse) != null ? ref2.message : void 0) {
                  $scope.editPageMediaOptions.updateMediaFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('photo_upload_remove_failure').then(function(translation) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageMediaOptions.updateMediaSuccess = true;
                $scope.editPageMediaOptions.photoUrl = '';
                $scope.editPageMediaOptions.photoSrc = null;
                $scope.editPageMediaOptions.photoFile = null;
                $scope.editPageMediaOptions.photoCaption = '';
                $scope.getPersonalPageMedia();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(removePersonalPhotoPromise);
          case 'Participant2':
            requestFormData.append('graphic_upload2_delete',
    'true');
            removePersonalPhotoPromise = TeamraiserParticipantService.removePersonalPhoto(requestFormData).then(function(response) {
              var ref2;
              if (response.data.errorResponse) {
                $scope.editPageMediaOptions.updateMediaFailure = true;
                if ((ref2 = response.data.errorResponse) != null ? ref2.message : void 0) {
                  $scope.editPageMediaOptions.updateMediaFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('photo_upload_remove_failure').then(function(translation) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageMediaOptions.updateMediaSuccess = true;
                $scope.editPageMediaOptions.photo2Url = '';
                $scope.editPageMediaOptions.photo2Src = null;
                $scope.editPageMediaOptions.photo2File = null;
                $scope.editPageMediaOptions.photo2Caption = '';
                $scope.getPersonalPageMedia();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(removePersonalPhotoPromise);
          case 'Team':
            requestFormData.append('graphic_upload_delete',
    'true');
            removeTeamPhotoPromise = TeamraiserTeamService.removeTeamPhoto(requestFormData).then(function(response) {
              var ref2;
              if (response.data.errorResponse) {
                $scope.editPageMediaOptions.updateMediaFailure = true;
                if ((ref2 = response.data.errorResponse) != null ? ref2.message : void 0) {
                  $scope.editPageMediaOptions.updateMediaFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('photo_upload_remove_failure').then(function(translation) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageMediaOptions.updateMediaSuccess = true;
                $scope.editPageMediaOptions.photoUrl = '';
                $scope.editPageMediaOptions.photoSrc = null;
                $scope.editPageMediaOptions.photoFile = null;
                $scope.editPageMediaOptions.photoCaption = '';
                $scope.getTeamPagePhoto();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(removeTeamPhotoPromise);
          case 'Company':
            requestFormData.append('photo_1_delete',
    'TRUE');
            removeCompanyPhotoPromise = TeamraiserCompanyService.removeCompanyPhoto(requestFormData).then(function(response) {
              var ref2;
              if (response.data.errorResponse) {
                $scope.editPageMediaOptions.updateMediaFailure = true;
                if ((ref2 = response.data.errorResponse) != null ? ref2.message : void 0) {
                  $scope.editPageMediaOptions.updateMediaFailureMessage = response.data.errorResponse.message;
                } else {
                  $translate('photo_upload_remove_failure').then(function(translation) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editPageMediaOptions.updateMediaFailureMessage = translationId;
                  });
                }
              } else {
                $scope.editPageMediaOptions.updateMediaSuccess = true;
                $scope.editPageMediaOptions.photoUrl = '';
                $scope.editPageMediaOptions.photoSrc = null;
                $scope.editPageMediaOptions.photoFile = null;
                $scope.editPageMediaOptions.photoCaption = '';
                $scope.getCompanyPagePhoto();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(removeCompanyPhotoPromise);
        }
      };
      $scope.updatePersonalPageMedia = function() {
        if ($scope.editPageMediaOptions.mediaLayout === 'video') {
          return $scope.updatePersonalVideoUrl();
        } else {
          return $scope.submitPhotoUpload('Participant');
        }
      };
      //# Gather team information
      if ($scope.participantRegistration.teamId && $scope.participantRegistration.teamId !== '-1') {
        captainsMessagePromise = TeamraiserTeamService.getCaptainsMessage().then(function(response) {
          $scope.teamCaptainsMessage = response.data.getCaptainsMessageResponse;
          if (LuminateUtilsService.ensureString($scope.teamCaptainsMessage.message) === '') {
            delete $scope.teamCaptainsMessage.message;
          }
          $scope.teamCaptainsMessage.inEditMode = false;
          $scope.teamCaptainsMessage.processing = false;
          return response;
        });
        $rootScope.loadingPromises.push(captainsMessagePromise);
        $scope.editTeamCaptainsMessage = function() {
          $scope.teamCaptainsMessage.inEditMode = true;
          return $scope.teamCaptainsMessage.processing = false;
        };
        $scope.saveTeamCaptainsMessage = function() {
          var updateCaptainsMessagePromise;
          $scope.teamCaptainsMessage.processing = true;
          updateCaptainsMessagePromise = TeamraiserTeamService.updateCaptainsMessage('captains_message=' + encodeURIComponent($scope.teamCaptainsMessage.message)).then(function(response) {
            $scope.teamCaptainsMessage.inEditMode = false;
            $scope.teamCaptainsMessage.processing = false;
            return response;
          });
          return $rootScope.loadingPromises.push(updateCaptainsMessagePromise);
        };
        $scope.teamMembers = {
          page: 1
        };
        $scope.getTeamMembers = function() {
          var pageNumber,
    teamRosterPromise;
          pageNumber = $scope.teamMembers.page - 1;
          teamRosterPromise = TeamraiserTeamService.getTeamRoster('include_download_url=true&positive_amount_only=false&list_page_size=5&list_page_offset=' + pageNumber).then(function(response) {
            var ref2,
    ref3,
    teamMembers;
            if ((ref2 = response.data) != null ? ref2.getTeamRosterResponse : void 0) {
              $scope.teamRosterDownloadUrl = response.data.getTeamRosterResponse.teamRosterDownloadUrl || 'TRParticipantDownload/Team_Roster.csv?download_type=team_roster&fr_id=' + $rootScope.frId;
              $scope.teamDonationsDownloadUrl = response.data.getTeamRosterResponse.teamDonationsDownloadUrl || 'TRParticipantDownload/Team_Donations.csv?download_type=team_donations&fr_id=' + $rootScope.frId;
              teamMembers = LuminateUtilsService.ensureArray(response.data.getTeamRosterResponse.teamMember);
              angular.forEach(teamMembers,
    function(teamMember) {
                if (teamMember.screenname) {
                  teamMember.displayName = teamMember.screenname;
                } else if (teamMember.firstName || teamMember.lastName) {
                  teamMember.displayName = teamMember.firstName + ' ' + teamMember.lastName;
                }
                return teamMember.personalPageUrl = $rootScope.wrapper.personalPageUrl.replace(/px=\d*/,
    'px=' + teamMember.consId);
              });
              $scope.teamMembers.members = teamMembers;
              $scope.teamMembers.totalNumber = ((ref3 = response.data.getTeamRosterResponse) != null ? ref3.totalNumberResults : void 0) || 0;
            }
            return response;
          });
          return $rootScope.loadingPromises.push(teamRosterPromise);
        };
        $scope.getTeamMembers();
        $scope.addTeamBadge = function(badge) {
          if (!$scope.teamBadges) {
            $scope.teamBadges = [];
          }
          if (badge && badge.url && badge.name && badge.description) {
            return $scope.teamBadges.push(badge);
          }
        };
        teamBadgesPromise = TeamraiserTeamService.getTeam().then(function(response) {
          var badges,
    ref2,
    team,
    teamMilestoneBadgeLargeUrl;
          team = (ref2 = response.data.getTeamSearchByInfoResponse) != null ? ref2.team : void 0;
          badges = team != null ? team.badges : void 0;
          if (!badges) {
            $scope.addTeamBadge();
          } else {
            teamMilestoneBadgeLargeUrl = badges.teamMilestoneBadgeLargeUrl;
            if (teamMilestoneBadgeLargeUrl) {
              $scope.addTeamBadge({
                url: '..' + teamMilestoneBadgeLargeUrl,
                name: badges.teamMilestoneBadgeName,
                description: badges.teamMilestoneBadgeDesc
              });
            }
          }
          return response;
        });
        $rootScope.loadingPromises.push(teamBadgesPromise);
        $scope.teamGifts = {
          page: 1
        };
        $scope.getTeamGifts = function() {
          var pageNumber,
    teamGiftsPromise;
          pageNumber = $scope.teamGifts.page - 1;
          teamGiftsPromise = TeamraiserGiftService.getTeamGifts('list_sort_column=date_recorded&list_ascending=false&list_page_size=5&list_page_offset=' + pageNumber).then(function(response) {
            var ref2,
    ref3,
    teamGifts;
            teamGifts = LuminateUtilsService.ensureArray((ref2 = response.data.getGiftsResponse) != null ? ref2.gift : void 0);
            $scope.teamGifts.gifts = [];
            angular.forEach(teamGifts,
    function(gift) {
              if (gift) {
                gift.contact = {
                  firstName: gift.name.first,
                  lastName: gift.name.last,
                  email: gift.email,
                  id: gift.contactId
                };
                return $scope.teamGifts.gifts.push(gift);
              }
            });
            $scope.teamGifts.giftActionLabels = $scope.giftActionLabels;
            $scope.teamGifts.totalNumber = Number(((ref3 = response.data.getGiftsResponse) != null ? ref3.totalNumberResults : void 0) || 0);
            return response;
          });
          return $rootScope.loadingPromises.push(teamGiftsPromise);
        };
        $scope.getTeamGifts();
        $scope.editTeamName = {
          newTeamName: '',
          editTeamNameProcessing: false,
          editTeamNameSuccess: false,
          editTeamNameFailure: false,
          editTeamNameFailureMessage: ''
        };
        $scope.changeTeamName = function() {
          $scope.editTeamName.newTeamName = $rootScope.wrapper.teamName;
          $scope.editTeamName.editTeamNameProcessing = false;
          $scope.editTeamNameModal = $uibModal.open({
            scope: $scope,
            templateUrl: './html/modal/editTeamName.html'
          });
          return $scope.editTeamNameModal.rendered.then(function() {
            LuminateUtilsService.adjustModalFramePosition();
            if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
              return ngLoadModal($rootScope,
    $scope,
    'editTeamName');
            }
          });
        };
        $scope.updateTeamName = function() {
          var dataStr,
    updateTeamNamePromise;
          $scope.cancelEditTeamName(false);
          $scope.editTeamName.editTeamNameProcessing = true;
          dataStr = 'team_name=' + encodeURIComponent($scope.editTeamName.newTeamName);
          updateTeamNamePromise = TeamraiserTeamService.updateTeamInformation(dataStr).then(function(response) {
            var ref2,
    refreshTeamWrapperData;
            if (response.data.errorResponse) {
              $scope.editTeamName.editTeamNameFailure = true;
              if (response.data.errorResponse.message) {
                $scope.editTeamName.editTeamNameFailureMessage = (ref2 = response.data.errorResponse) != null ? ref2.message : void 0;
              } else {
                $translate('team_name_update_unexpected_error').then(function(translation) {
                  return $scope.editTeamName.editTeamNameFailureMessage = translation;
                },
    function(translationId) {
                  return $scope.editTeamName.editTeamNameFailureMessage = translationId;
                });
              }
            } else {
              $scope.editTeamName.editTeamNameSuccess = true;
              refreshTeamWrapperData = TeamraiserEventService.getParticipantCenterWrapper().then(function(response) {
                updatePageUrls();
                return response;
              });
              $rootScope.loadingPromises.push(refreshTeamWrapperData);
            }
            return response;
          });
          return $rootScope.loadingPromises.push(updateTeamNamePromise);
        };
        $scope.cancelEditTeamName = function(closeModal) {
          $scope.editTeamName.editTeamNameProcessing = false;
          $scope.editTeamName.editTeamNameSuccess = false;
          $scope.editTeamName.editTeamNameFailure = false;
          $scope.editTeamName.editTeamNameFailureMessage = '';
          if (closeModal) {
            $scope.editTeamName.newTeamName = '';
            return $scope.editTeamNameModal.close();
          }
        };
        $scope.changeTeamCaptains = function() {
          var teamCaptainsRosterPromise;
          $scope.editTeamCaptains = {
            processing: false,
            success: false,
            failure: false,
            failureMessage: '',
            maxCaptains: $scope.teamraiserConfig.teamCaptainsMaximum,
            currCaptains: 0,
            teamRoster: [],
            teamSize: 1,
            teamRosterPage: 1,
            teamPageSize: 5
          };
          teamCaptainsRosterPromise = TeamraiserTeamService.getTeamRoster('list_page_size=400&list_page_offset=0').then(function(response) {
            var ref2,
    ref3,
    teamRoster;
            teamRoster = LuminateUtilsService.ensureArray((ref2 = response.data.getTeamRosterResponse) != null ? ref2.teamMember : void 0);
            $scope.editTeamCaptains.teamSize = ((ref3 = response.data.getTeamRosterResponse) != null ? ref3.totalNumberResults : void 0) || 0;
            angular.forEach(teamRoster,
    function(member) {
              if (member != null ? member.consId : void 0) {
                member.consId = parseInt(member.consId);
                member.aTeamCaptain = member.aTeamCaptain === "true";
                if (member.aTeamCaptain) {
                  $scope.editTeamCaptains.teamSize = $scope.editTeamCaptains.teamSize - 1;
                }
                if (member.screenname) {
                  member.displayName = member.screenname;
                } else if (member.firstName || member.lastName) {
                  member.displayName = member.firstName + ' ' + member.lastName;
                }
                return member.personalPageUrl = $rootScope.wrapper.personalPageUrl.replace(/px=\d*/,
    'px=' + member.consId);
              }
            });
            $scope.editTeamCaptains.teamRoster = teamRoster.sort(function(a,
    b) {
              var aName,
    bName;
              if (a.consId === $rootScope.consId) {
                return -1;
              } else if (b.consId === $rootScope.consId) {
                return 1;
              } else {
                aName = a.screenname ? a.screenname.toLowerCase() : a.lastName.toLowerCase() + ', ' + a.firstName.toLowerCase();
                bName = b.screenname ? b.screenname.toLowerCase() : b.lastName.toLowerCase() + ', ' + b.firstName.toLowerCase();
                if (aName < bName) {
                  return -1;
                } else if (aName > bName) {
                  return 1;
                } else {
                  return 0;
                }
              }
            });
            setTeamCaptainsRosterPage();
            return response;
          });
          $rootScope.loadingPromises.push(teamCaptainsRosterPromise);
          $scope.editTeamCaptainsModal = $uibModal.open({
            scope: $scope,
            templateUrl: './html/modal/editTeamCaptains.html'
          });
          return $scope.editTeamCaptainsModal.rendered.then(function() {
            LuminateUtilsService.adjustModalFramePosition();
            if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
              return ngLoadModal($rootScope,
    $scope,
    'editTeamCaptains');
            }
          });
        };
        setTeamCaptainsRosterPage = function() {
          var currMembers,
    currentPage,
    maxPageSize;
          currentPage = 1;
          currMembers = 0;
          maxPageSize = $scope.editTeamCaptains.teamPageSize;
          angular.forEach($scope.editTeamCaptains.teamRoster,
    function(member) {
            if (member != null ? member.consId : void 0) {
              member.displayPage = member.consId === $rootScope.consId ? 0 : currentPage;
              if (!member.aTeamCaptain) {
                currMembers = currMembers + 1;
                if (currMembers >= maxPageSize) {
                  currentPage = currentPage + 1;
                  return currMembers = 0;
                }
              }
            }
          });
          return $scope.editTeamCaptains.teamRoster;
        };
        $scope.toggleTeamCaptain = function(consId) {
          var found;
          found = false;
          angular.forEach($scope.editTeamCaptains.teamRoster,
    function(member) {
            if (consId === member.consId) {
              found = true;
              member.aTeamCaptain = !member.aTeamCaptain;
              return $scope.editTeamCaptains.teamSize = $scope.editTeamCaptains.teamSize + (member.aTeamCaptain ? -1 : 1);
            }
          });
          if (found) {
            setTeamCaptainsRosterPage();
          }
          return found;
        };
        $scope.confirmChangeTeamCaptains = function() {
          var dataStr,
    newCaptainConsIds,
    setTeamCaptainsPromise;
          $scope.resetTeamCaptainAlerts(false);
          newCaptainConsIds = [];
          angular.forEach($scope.editTeamCaptains.teamRoster,
    function(member) {
            if ((member != null ? member.consId : void 0) && (member != null ? member.aTeamCaptain : void 0)) {
              return newCaptainConsIds.push(member.consId);
            }
          });
          if (newCaptainConsIds.length === 0) {
            $scope.editTeamCaptains.failure = true;
            return $translate('team_captains_failure_minimum').then(function(translation) {
              return $scope.editTeamCaptains.failureMessage = translation;
            },
    function(translationId) {
              return $scope.editTeamCaptains.failureMessage = translationId;
            });
          } else if (newCaptainConsIds.length > $scope.teamraiserConfig.teamCaptainsMaximum) {
            $scope.editTeamCaptains.failure = true;
            return $translate('team_captains_failure_maximum',
    {
              max: $scope.editTeamCaptains.maxCaptains
            }).then(function(translation) {
              return $scope.editTeamCaptains.failureMessage = translation;
            },
    function(translationId) {
              return $scope.editTeamCaptains.failureMessage = translationId;
            });
          } else {
            $scope.editTeamCaptains.processing = true;
            dataStr = 'captains=' + newCaptainConsIds.toString();
            setTeamCaptainsPromise = TeamraiserTeamService.setTeamCaptains(dataStr).then(function(response) {
              if (response.data.errorResponse) {
                $scope.editTeamCaptains.failure = true;
                if (response.data.errorResponse.message) {
                  $scope.editTeamCaptains.failureMessage = response.data.errorResponse.message;
                } else {
                  $translate('captains_save_failure').then(function(translation) {
                    return $scope.editTeamCaptains.failureMessage = translation;
                  },
    function(translationId) {
                    return $scope.editTeamCaptains.failureMessage = translationId;
                  });
                }
              } else {
                $scope.editTeamCaptains.success = true;
                $scope.getTeamMembers();
              }
              return response;
            });
            return $rootScope.loadingPromises.push(setTeamCaptainsPromise);
          }
        };
        $scope.resetTeamCaptainAlerts = function(closeModal) {
          $scope.editTeamCaptains.processing = false;
          $scope.editTeamCaptains.success = false;
          $scope.editTeamCaptains.failure = false;
          $scope.editTeamCaptains.failureMessage = '';
          if (closeModal) {
            return $scope.editTeamCaptainsModal.close();
          }
        };
        $scope.editTeamPassword = {
          newTeamPassword: '',
          editTeamPasswordProcessing: false,
          editTeamPasswordSuccess: false,
          editTeamPasswordFailure: false,
          editTeamPasswordFailureMessage: ''
        };
        $scope.setTeamPassword = function() {
          var ref2;
          $scope.editTeamPassword.newTeamPassword = LuminateUtilsService.ensureString((ref2 = $scope.participantRegistration.teamInformation) != null ? ref2.password : void 0);
          $scope.editTeamPassword.editTeamPasswordProcessing = false;
          $scope.editTeamPasswordModal = $uibModal.open({
            scope: $scope,
            templateUrl: './html/modal/editTeamPassword.html'
          });
          return $scope.editTeamPasswordModal.rendered.then(function() {
            LuminateUtilsService.adjustModalFramePosition();
            if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
              return ngLoadModal($rootScope,
    $scope,
    'editTeamPassword');
            }
          });
        };
        $scope.updateTeamPassword = function() {
          var dataStr,
    updateTeamPasswordPromise;
          $scope.cancelEditTeamPassword(false);
          $scope.editTeamPassword.editTeamPasswordProcessing = true;
          dataStr = 'password=' + $scope.editTeamPassword.newTeamPassword;
          updateTeamPasswordPromise = TeamraiserTeamService.updateTeamInformation(dataStr).then(function(response) {
            if (response.data.errorResponse) {
              $scope.editTeamPassword.editTeamPasswordFailure = true;
              if (response.data.errorResponse.message) {
                $scope.editTeamPassword.editTeamPasswordFailureMessage = response.data.errorResponse.message;
              } else {
                $translate('team_password_update_unexpected_error').then(function(translation) {
                  return $scope.editTeamPassword.editTeamPasswordFailureMessage = translation;
                },
    function(translationId) {
                  return $scope.editTeamPassword.editTeamPasswordFailureMessage = translationId;
                });
              }
            } else {
              $scope.editTeamPassword.editTeamPasswordSuccess = true;
            }
            return response;
          });
          return $rootScope.loadingPromises.push(updateTeamPasswordPromise);
        };
        $scope.cancelEditTeamPassword = function(closeModal) {
          $scope.editTeamPassword.editTeamPasswordProcessing = false;
          $scope.editTeamPassword.editTeamPasswordSuccess = false;
          $scope.editTeamPassword.editTeamPasswordFailure = false;
          $scope.editTeamPassword.editTeamPasswordFailureMessage = '';
          if (closeModal) {
            $scope.editTeamPassword.newTeamPassword = '';
            return $scope.editTeamPasswordModal.close();
          }
        };
        $scope.teamPage = {
          shortcut: null,
          content: null,
          photoItem: null,
          photoSize: {
            width: 300,
            height: 400
          }
        };
        getTeamShortcutPromise = TeamraiserTeamService.getTeamShortcut().then(function(response) {
          var ref2,
    ref3,
    ref4;
          $scope.teamPage.shortcut = ((ref2 = response.data.getTeamShortcutResponse) != null ? ref2.shortcutItem : void 0) || angular.copy($scope.personalPage.shortcut);
          if (((ref3 = response.data.errorResponse) != null ? ref3.code : void 0) === '2614') {
            //# Team Member does not have access to the getTeamShortcut method
            $scope.teamPage.shortcut.defaultUrl = $scope.personalPage.shortcut.defaultUrl.replace('pg=personal',
    'pg=team').replace(/px=\d*/,
    'team_id=' + $rootScope.participantRegistration.teamId);
          }
          $scope.teamPage.shortcut.relativeUrl = getRelativeUrl((ref4 = $scope.teamPage.shortcut) != null ? ref4.defaultUrl : void 0);
          return response;
        });
        $rootScope.loadingPromises.push(getTeamShortcutPromise);
        $scope.getTeamPagePhoto = function() {
          var getTeamPagePhotoPromise;
          getTeamPagePhotoPromise = TeamraiserTeamService.getTeamPhoto().then(function(response) {
            var photoItem,
    ref2;
            $scope.teamPage.photoItem = null;
            photoItem = (ref2 = response.data.getTeamPhotoResponse) != null ? ref2.photoItem : void 0;
            if ((photoItem != null ? photoItem.customUrl : void 0) || (photoItem != null ? photoItem.defaultUrl : void 0)) {
              photoItem.caption = LuminateUtilsService.ensureString(photoItem.caption);
              $scope.teamPage.photoItem = photoItem;
            }
            setPageMediaData('Team');
            $rootScope.resizeFrameForCurrentView();
            return $scope.teamPage;
          });
          return $rootScope.loadingPromises.push(getTeamPagePhotoPromise);
        };
        $scope.getTeamPageContent = function(withMedia) {
          var getTeamPageContentPromise;
          getTeamPageContentPromise = TeamraiserTeamService.getTeamPageInfo().then(function(response) {
            var ref2,
    ref3;
            $scope.teamPage.content = (ref2 = response.data.getTeamPageResponse) != null ? ref2.teamPage : void 0;
            $scope.teamPage.content.richText = LuminateUtilsService.ensureString((ref3 = $scope.teamPage.content) != null ? ref3.richText : void 0);
            if (withMedia) {
              $scope.getTeamPagePhoto();
            } else {
              $rootScope.resizeFrameForCurrentView();
            }
            return $scope.teamPage;
          });
          return $rootScope.loadingPromises.push(getTeamPageContentPromise);
        };
        $scope.getTeamPageContent(true);
      }
      //# Gather company information
      if ($scope.participantRegistration.companyInformation && $scope.participantRegistration.companyInformation.companyId) {
        $scope.companyTeams = {
          page: 1
        };
        $scope.getCompanyTeams = function() {
          var companyTeamsPromise,
    pageNumber;
          pageNumber = $scope.companyTeams.page - 1;
          companyTeamsPromise = TeamraiserTeamService.getTeams('team_company_id=' + $scope.participantRegistration.companyInformation.companyId + '&list_page_size=5&list_page_offset=' + pageNumber).then(function(response) {
            var companyTeams,
    ref2,
    ref3;
            companyTeams = LuminateUtilsService.ensureArray((ref2 = response.data.getTeamSearchByInfoResponse) != null ? ref2.team : void 0);
            $scope.companyTeams.teams = [];
            angular.forEach(companyTeams,
    function(team,
    itemIndex) {
              if (team && team.id) {
                team.teamPageAbsoluteUrl = team.teamPageUrl;
                team.teamPageUrl = getRelativeUrl(team.teamPageAbsoluteUrl);
                return $scope.companyTeams.teams.push(team);
              }
            });
            $scope.companyTeams.totalNumber = ((ref3 = response.data.getTeamSearchByInfoResponse) != null ? ref3.totalNumberResults : void 0) || 0;
            return response;
          });
          return $rootScope.loadingPromises.push(companyTeamsPromise);
        };
        $scope.getCompanyTeams();
        $scope.companyPage = {
          shortcut: null,
          content: null,
          photoItem: null,
          photoSize: {
            width: 300,
            height: 400
          }
        };
        getCompanyShortcutPromise = TeamraiserCompanyService.getCompanyShortcut().then(function(response) {
          var ref2,
    ref3;
          $scope.companyPage.shortcut = ((ref2 = response.data.getCompanyShortcutResponse) != null ? ref2.shortcutItem : void 0) || {};
          $scope.companyPage.shortcut.relativeUrl = getRelativeUrl((ref3 = $scope.companyPage.shortcut) != null ? ref3.defaultUrl : void 0);
          return response;
        });
        $rootScope.loadingPromises.push(getCompanyShortcutPromise);
        $scope.getCompanyPagePhoto = function() {
          var getCompanyPagePhotoPromise;
          getCompanyPagePhotoPromise = TeamraiserCompanyService.getCompanyPhoto().then(function(response) {
            var photoItem,
    ref2;
            $scope.companyPage.photoItem = null;
            photoItem = (ref2 = response.data.getCompanyPhotoResponse) != null ? ref2.photoItem : void 0;
            if ((photoItem != null ? photoItem.customUrl : void 0) || (photoItem != null ? photoItem.defaultUrl : void 0)) {
              photoItem.caption = LuminateUtilsService.ensureString(photoItem.caption);
              $scope.companyPage.photoItem = photoItem;
            }
            setPageMediaData('Company');
            $rootScope.resizeFrameForCurrentView();
            return $scope.companyPage;
          });
          return $rootScope.loadingPromises.push(getCompanyPagePhotoPromise);
        };
        $scope.getCompanyPageContent = function(withMedia) {
          var getCompanyPageContentPromise;
          getCompanyPageContentPromise = TeamraiserCompanyService.getCompanyPageInfo().then(function(response) {
            var ref2,
    ref3,
    ref4;
            $scope.companyPage.content = (ref2 = response.data.getCompanyPageResponse) != null ? ref2.companyPage : void 0;
            $scope.companyPage.content.pageTitle = LuminateUtilsService.ensureString((ref3 = $scope.companyPage.content) != null ? ref3.pageTitle : void 0);
            $scope.companyPage.content.richText = LuminateUtilsService.ensureString((ref4 = $scope.companyPage.content) != null ? ref4.richText : void 0);
            if (withMedia) {
              $scope.getCompanyPagePhoto();
            } else {
              $rootScope.resizeFrameForCurrentView();
            }
            return $scope.companyPage;
          });
          return $rootScope.loadingPromises.push(getCompanyPageContentPromise);
        };
        $scope.getCompanyPageContent(true);
      }
      if (window.ngLoadController && angular.isFunction(ngLoadController)) {
        return ngLoadController($rootScope,
    $scope,
    'homeView');
      }
    }
  ]);

  angular.module('trPcControllers').controller('KeepAliveModalCtrl', [
    '$rootScope',
    '$scope',
    '$timeout',
    'AuthService',
    'LuminateUtilsService',
    function($rootScope,
    $scope,
    $timeout,
    AuthService,
    LuminateUtilsService) {
      var closeKeepAlive,
    expireTime,
    keepAliveLoadTime,
    keepAliveTimeout,
    refreshRemainingDuration,
    skipKeepAliveModal;
      skipKeepAliveModal = LuminateUtilsService.isPcCookieLoginEnabled();
      closeKeepAlive = function() {
        if (keepAliveTimeout) {
          $timeout.cancel(keepAliveTimeout);
        }
        if ($rootScope.keepAliveModal) {
          $rootScope.keepAliveModal.close();
          return delete $rootScope.keepAliveModal;
        }
      };
      $scope.submitKeepAlive = function() {
        AuthService.getLoginState();
        return closeKeepAlive();
      };
      if (skipKeepAliveModal) {
        $scope.submitKeepAlive();
      }
      $scope.logout = function() {
        return AuthService.logout().then(function(response) {
          closeKeepAlive();
          return response;
        });
      };
      keepAliveLoadTime = new Date().getTime();
      expireTime = keepAliveLoadTime + LuminateUtilsService.getTimeoutExpiration();
      keepAliveTimeout = null;
      refreshRemainingDuration = function() {
        var remainingDuration;
        remainingDuration = expireTime - new Date().getTime();
        $scope.remainingMinutes = Math.floor(remainingDuration / (60 * 1000));
        if (remainingDuration <= 0) {
          return $scope.logout();
        } else {
          if (keepAliveTimeout) {
            $timeout.cancel(keepAliveTimeout);
          }
          return keepAliveTimeout = $timeout(refreshRemainingDuration,
    60000);
        }
      };
      return refreshRemainingDuration();
    }
  ]);

  angular.module('trPcControllers').controller('LoginModalCtrl', [
    '$rootScope',
    '$scope',
    '$route',
    '$httpParamSerializer',
    '$translate',
    '$window',
    'AuthService',
    function($rootScope,
    $scope,
    $route,
    $httpParamSerializer,
    $translate,
    $window,
    AuthService) {
      var setUserNameOrPasswordError;
      $scope.resetLoginAlerts = function() {
        $scope.loginProcessing = false;
        if ($scope.loginError) {
          return delete $scope.loginError;
        }
      };
      setUserNameOrPasswordError = function() {
        return $translate('error_invalid_username_or_password').then(function(translation) {
          return $scope.loginError = translation;
        },
    function(translationId) {
          return $scope.loginError = translationId;
        });
      };
      
      // TODO: cache user_name after user logs in so they don't have to enter it if they get timed out
      $scope.consLogin = {
        user_name: '',
        password: ''
      };
      return $scope.submitLogin = function() {
        if ($scope.consLogin.user_name === '' || $scope.consLogin.password === '') {
          return setUserNameOrPasswordError();
        } else {
          $scope.resetLoginAlerts();
          $scope.loginProcessing = true;
          return AuthService.login($httpParamSerializer($scope.consLogin)).then(function(response) {
            var consId,
    errorResponse,
    ref,
    ref1;
            $scope.loginProcessing = false;
            errorResponse = response.data.errorResponse;
            if (errorResponse) {
              if (['200',
    '201',
    '202',
    '204'].indexOf(errorResponse.code)) {
                return setUserNameOrPasswordError();
              } else {
                return $scope.loginError = errorResponse.message;
              }
            } else {
              consId = (ref = response.data.loginResponse) != null ? ref.cons_id : void 0;
              if (Number(consId) !== Number($rootScope.consId)) {
                return $window.location.reload();
              } else {
                if ($rootScope.loginModal) {
                  $rootScope.loginModal.close();
                  delete $rootScope.loginModal;
                }
                angular.element(document).find('.modal').click();
                $rootScope.consId = ((ref1 = response.data.loginResponse) != null ? ref1.cons_id : void 0) || -1;
                delete $rootScope.authToken;
                return $route.reload();
              }
            }
          });
        }
      };
    }
  ]);

  angular.module('trPcControllers').controller('NgPcMainCtrl', [
    '$rootScope',
    '$scope',
    '$location',
    '$route',
    '$timeout',
    '$uibModal',
    '$window',
    'AuthService',
    'ConstituentService',
    'ContactService',
    'ContentService',
    'LocaleService',
    'LuminateRESTService',
    'LuminateUtilsService',
    'SocialShareService',
    'TeamraiserCompanyService',
    'TeamraiserEmailService',
    'TeamraiserEventService',
    'TeamraiserGiftService',
    'TeamraiserParticipantService',
    'TeamraiserRegistrationService',
    'TeamraiserTeamService',
    function($rootScope,
    $scope,
    $location,
    $route,
    $timeout,
    $uibModal,
    $window,
    AuthService,
    ConstituentService,
    ContactService,
    ContentService,
    LocaleService,
    LuminateRESTService,
    LuminateUtilsService,
    SocialShareService,
    TeamraiserCompanyService,
    TeamraiserEmailService,
    TeamraiserEventService,
    TeamraiserGiftService,
    TeamraiserParticipantService,
    TeamraiserRegistrationService,
    TeamraiserTeamService) {
      var getLocales,
    getParticipantCenterWrapperPromise;
      $rootScope.$location = $location;
      $rootScope.Math = $window.Math;
      $rootScope.services = {
        ConstituentService: ConstituentService,
        ContactService: ContactService,
        ContentService: ContentService,
        LocaleService: LocaleService,
        LuminateRESTService: LuminateRESTService,
        LuminateUtilsService: LuminateUtilsService,
        SocialShareService: SocialShareService,
        TeamraiserCompanyService: TeamraiserCompanyService,
        TeamraiserEmailService: TeamraiserEmailService,
        TeamraiserEventService: TeamraiserEventService,
        TeamraiserGiftService: TeamraiserGiftService,
        TeamraiserParticipantService: TeamraiserParticipantService,
        TeamraiserRegistrationService: TeamraiserRegistrationService,
        TeamraiserTeamService: TeamraiserTeamService
      };
      $rootScope.closeSuccessDelay = 5000;
      if (!$rootScope.loadingPromises) {
        $rootScope.loadingPromises = [];
      }
      $scope.setVersion = function() {
        var versionElem;
        versionElem = angular.element('.ng-pc-container').find('.pc-version-number');
        if (versionElem) {
          return $rootScope.version = versionElem.text();
        }
      };
      // prompt logged out users to login
      $rootScope.showLoginModal = function() {
        if (!$rootScope.loginModal) {
          $rootScope.loginModal = $uibModal.open({
            scope: $rootScope,
            backdrop: 'static',
            templateUrl: './html/modal/login.html'
          });
          return $rootScope.loginModal.rendered.then(function() {
            LuminateUtilsService.adjustModalFramePosition();
            if (window.ngLoadModal && angular.isFunction(ngLoadModal)) {
              return ngLoadModal($rootScope,
    $rootScope,
    'login');
            }
          });
        }
      };
      // scroll to the top of the PC3 main element
      $rootScope.scrollToTop = function() {
        var $embedRoot;
        $embedRoot = angular.element('#ng_pc_container');
        if (angular.isElement($embedRoot)) {
          return $embedRoot[0].scrollIntoView();
        }
      };
      $rootScope.resizeFrameForCurrentView = function() {
        return $timeout(LuminateUtilsService.resizeFrameForCurrentView,
    500);
      };
      if (LuminateUtilsService.isIFrameDetected()) {
        angular.element(window.parent).resize(LuminateUtilsService.resizeFrameForCurrentView);
      }
      // get data from cookies
      $scope.getCookieData = function() {
        $rootScope.apiKey = LuminateUtilsService.getApiKey();
        if (!$rootScope.apiKey) {
          new Error('PC3 Main: No Luminate Online API Key is defined.');
        }
        $rootScope.securePath = LuminateUtilsService.getSecurePath();
        $rootScope.frId = LuminateUtilsService.getFrId();
        if (!$rootScope.frId) {
          new Error('PC3 Main: No TeamRaiser ID is defined.');
        }
        $rootScope.locale = LocaleService.getLocale();
        $rootScope.authToken = LuminateUtilsService.getAuth();
        return $rootScope.socialSettings = {
          appName: LuminateUtilsService.getJanrainEngageAppName(),
          appUrl: '',
          providers: LuminateUtilsService.getJanrainShareProviders(),
          janrainEnabled: LuminateUtilsService.isJanrainEnabled(),
          janrainInitialized: false,
          shareTitle: '',
          shareAction: '',
          shareMessage: '',
          shareId: 'TR-' + $rootScope.frId,
          shareUrl: ''
        };
      };
      $scope.getCookieData();
      getParticipantCenterWrapperPromise = TeamraiserEventService.getParticipantCenterWrapper().then(function(response) {
        var ref,
    ref1,
    ref2,
    wrapper;
        if ((response != null ? (ref = response.data) != null ? (ref1 = ref.getParticipantCenterWrapperResponse) != null ? ref1.wrapper : void 0 : void 0 : void 0) != null) {
          wrapper = (ref2 = response.data.getParticipantCenterWrapperResponse) != null ? ref2.wrapper : void 0;
          if (wrapper) {
            //# Social Settings
            if (!$rootScope.socialSettings) {
              $rootScope.socialSettings = {};
            }
            if (!(wrapper.isJanrainEnabled == null)) {
              $rootScope.socialSettings.janrainEnabled = wrapper.isJanrainEnabled;
            }
            $rootScope.socialSettings.shareTitle = LuminateUtilsService.ensureString(wrapper.shareTitle);
            $rootScope.socialSettings.shareAction = LuminateUtilsService.ensureString(wrapper.shareAction);
            $rootScope.socialSettings.shareMessage = LuminateUtilsService.ensureString(wrapper.shareMessage);
            if (!(wrapper.shareId == null)) {
              $rootScope.socialSettings.shareId = wrapper.shareId;
            }
          }
        }
        return response;
      });
      $rootScope.loadingPromises.push(getParticipantCenterWrapperPromise);
      $rootScope.localeSettings = {
        currency: LocaleService.getCurrencyLocale(),
        currentLocale: $rootScope.locale || 'en_US',
        supportedLocales: []
      };
      $rootScope.localeSettings.currencySymbol = $rootScope.localeSettings.currency === 'en_GB' ? '£' : '$';
      getLocales = function() {
        var getLocalesPromise;
        getLocalesPromise = ContentService.listSupportedLocales().then(function(response) {
          var locales,
    ref,
    ref1,
    ref2;
          if ((response != null ? (ref = response.data) != null ? (ref1 = ref.listSupportedLocalesResponse) != null ? ref1.supportedLocale : void 0 : void 0 : void 0) != null) {
            locales = LuminateUtilsService.ensureArray((ref2 = response.data.listSupportedLocalesResponse) != null ? ref2.supportedLocale : void 0);
            angular.forEach(locales,
    function(locale,
    index) {
              if (locale && locale.fullyQualifiedName && locale.displayName) {
                $rootScope.localeSettings.supportedLocales.push({
                  value: locale.fullyQualifiedName,
                  label: locale.displayName
                });
                if (locale.defaultLocale === 'true' && !$rootScope.locale) {
                  return $rootScope.localeSettings.currentLocale = locale.fullyQualifiedName;
                }
              }
            });
          }
          return response;
        });
        return $rootScope.loadingPromises.push(getLocalesPromise);
      };
      if (!LuminateUtilsService.isIFrameDetected()) {
        getLocales();
      }
      $rootScope.$watch('localeSettings.currentLocale',
    function(newLocale) {
        if (newLocale !== $rootScope.locale) {
          LocaleService.setLocale(newLocale);
          LocaleService.setLocaleChanged('true');
          return window.location.reload();
        }
      });
      $rootScope.$on('$routeChangeStart',
    function($event,
    next,
    current) {
        var redirectRoute,
    reloadRoute;
        // ensure window is scrolled
        $rootScope.scrollToTop();
        // redirect to a different route
        redirectRoute = function(newRoute) {
          return $rootScope.$evalAsync(function() {
            return $location.path(newRoute);
          });
        };
        // avoid race condition with reloading route
        reloadRoute = function() {
          var ref;
          if ((ref = $location.path()) !== '' && ref !== next.originalPath) {
            return redirectRoute(next.originalPath);
          } else {
            return $route.reload();
          }
        };
        if (window.ngChangeRoute && angular.isFunction(ngChangeRoute)) {
          ngChangeRoute($rootScope,
    redirectRoute,
    next,
    current);
        }
        // event config unknown
        if (!$rootScope.teamraiserConfig) {
          $event.preventDefault();
          return TeamraiserEventService.getConfig().then(function() {
            if ($rootScope.teamraiserConfig === -1) {
              return LuminateUtilsService.returnToGreeting();
            } else {
              return reloadRoute();
            }
          });
        // no event config
        } else if ($rootScope.teamraiserConfig === -1) {
          $event.preventDefault();
          return LuminateUtilsService.returnToGreeting();
        // event closed
        } else if ($rootScope.teamraiserConfig.acceptingDonations !== 'true' && $rootScope.teamraiserConfig.acceptingRegistrations !== 'true') {
          $event.preventDefault();
          return LuminateUtilsService.returnToGreeting();
        // login state unknown
        } else if (!$rootScope.consId) {
          $event.preventDefault();
          return AuthService.getLoginState().then(function() {
            if ($rootScope.consId === -1) {
              return $rootScope.showLoginModal();
            } else {
              return $route.reload();
            }
          });
        // logged out
        } else if ($rootScope.consId === -1) {
          $event.preventDefault();
          return $rootScope.showLoginModal();
        // no auth token
        } else if (!$rootScope.authToken) {
          $event.preventDefault();
          return AuthService.getAuthToken().then(function() {
            return reloadRoute();
          });
        // registration status unknown
        } else if (!$rootScope.participantRegistration) {
          $event.preventDefault();
          return TeamraiserRegistrationService.getRegistration().then(function() {
            if ($rootScope.participantRegistration === -1) {
              return LuminateUtilsService.returnToGreeting();
            } else {
              return reloadRoute();
            }
          });
        // not registered
        } else if ($rootScope.participantRegistration === -1) {
          $event.preventDefault();
          return LuminateUtilsService.returnToGreeting();
        // event info unknown
        } else if (!$rootScope.eventInfo) {
          $event.preventDefault();
          return TeamraiserEventService.getTeamraiser().then(function(response) {
            if ($rootScope.eventInfo === -1) {
              return LuminateUtilsService.returnToGreeting();
            } else {
              return reloadRoute();
            }
          });
        // no event info
        } else if ($rootScope.eventInfo === -1) {
          $event.preventDefault();
          return LuminateUtilsService.returnToGreeting();
        // social share not initialized
        } else if (!$rootScope.socialSettings.janrainInitialized) {
          $event.preventDefault();
          return SocialShareService.initJanrain().then(function() {
            return reloadRoute();
          });
        // not allowed to edit survey questions
        } else if (next.originalPath === '/profile/questions' && $rootScope.teamraiserConfig.personalSurveyEditAllowed !== 'true') {
          return redirectRoute('/profile');
        }
      });
      $rootScope.baseUrl = $location.absUrl().split('#')[0];
      $rootScope.topNavTabs = [];
      $rootScope.topNavTabs.push({
        order: 0,
        label: 'nav_overview',
        href: $rootScope.baseUrl + '#/home',
        active: false,
        activeTest: function() {
          return $location.path() === '/home';
        }
      });
      $rootScope.topNavTabs.push({
        order: 1,
        label: 'nav_messaging',
        href: $rootScope.baseUrl + '#/email/compose',
        active: false,
        activeTest: function() {
          return $location.path().indexOf('/email') === 0;
        }
      });
      $rootScope.topNavTabs.push({
        order: 2,
        label: 'hdr_profile_link',
        href: $rootScope.baseUrl + '#/profile',
        active: false,
        activeTest: function() {
          return $location.path().indexOf('/profile') === 0;
        }
      });
      $rootScope.setActiveTopNav = function() {
        return angular.forEach($rootScope.topNavTabs,
    function(tab) {
          if (tab.activeTest && angular.isFunction(tab.activeTest)) {
            return tab.active = tab.activeTest();
          }
        });
      };
      LocaleService.setLocale($rootScope.locale);
      $rootScope.changeLocale = function() {
        return LocaleService.setLocale();
      };
      $rootScope.$on('$viewContentLoaded',
    function() {
        $rootScope.setActiveTopNav();
        if ($rootScope.clipboard) {
          $rootScope.clipboard.destroy();
          delete $rootScope.clipboard;
        }
        $rootScope.clipboard = new ClipboardJS('[data-clipboard-target]');
        return $rootScope.clipboard.on('success',
    function() {
          return $timeout(function() {
            if (angular.element('[uib-tooltip-popup]').length > 0) {
              return angular.element('.js--blur-target').click();
            }
          },
    1000);
        });
      });
      $rootScope.$watch('teamraiserConfig.facebookFundraisingEnabled',
    function() {
        var fjs,
    js,
    ref;
        if (((ref = $rootScope.teamraiserConfig) != null ? ref.facebookFundraisingEnabled : void 0) === 'true') {
          window.fbAsyncInit = function() {
            FB.init({
              appId: $rootScope.teamraiserConfig.facebookAppId,
              cookie: true,
              xfbml: true,
              version: 'v3.2'
            });
            return FB.AppEvents.logPageView();
          };
          fjs = document.getElementsByTagName('script')[0];
          if (document.getElementById('facebook-jssdk')) {
            return;
          }
          js = document.createElement('script');
          js.id = 'facebook-jssdk';
          js.src = '//connect.facebook.net/en_US/sdk.js';
          return fjs.parentNode.insertBefore(js,
    fjs);
        }
      });
      $rootScope.$watch('participantRegistration.facebookFundraiserId',
    function() {
        var confirmFundraiserPromise,
    ref;
        if ((ref = $rootScope.participantRegistration) != null ? ref.facebookFundraiserId : void 0) {
          confirmFundraiserPromise = TeamraiserParticipantService.confirmFundraiser().then(function(response) {
            var activeFundraiser,
    ref1;
            if (response.data.errorResponse) {

            } else {
              //# TODO?
              activeFundraiser = (ref1 = response.data.confirmOrUnlinkFacebookFundraiserResponse) != null ? ref1.active : void 0;
              if (activeFundraiser === 'false') {
                $rootScope.participantRegistration.facebookFundraiserId = null;
              }
            }
            return response;
          });
          $rootScope.loadingPromises.push(confirmFundraiserPromise);
          return $rootScope.facebookFundraiserUrl = {
            url: 'https://www.facebook.com/donate/' + $rootScope.participantRegistration.facebookFundraiserId + '/'
          };
        }
      });
      $rootScope.loginToFacebook = function() {
        var setFacebookFundraiserCreateStatus,
    setFacebookFundraiserLoginStatus;
        setFacebookFundraiserLoginStatus = function(status) {
          $rootScope.facebookFundraiserLoginStatus = status;
          if (!$rootScope.$$phase) {
            return $rootScope.$apply();
          }
        };
        setFacebookFundraiserCreateStatus = function(status) {
          $rootScope.facebookFundraiserCreateStatus = status;
          if (!$rootScope.$$phase) {
            return $rootScope.$apply();
          }
        };
        setFacebookFundraiserLoginStatus('pending');
        return FB.login(function(response) {
          var accessToken,
    authResponse;
          authResponse = response.authResponse;
          if (!authResponse) {
            return setFacebookFundraiserLoginStatus('login_error');
          } else {
            accessToken = response.authResponse.accessToken;
            if (!accessToken) {
              return setFacebookFundraiserLoginStatus('login_error');
            } else {
              return FB.api('/me/permissions',
    function(response) {
                var getPersonalPagePromise,
    manageFundraisersPermisson;
                manageFundraisersPermisson = null;
                angular.forEach(response.data,
    function(permissionObject) {
                  if (permissionObject.permission === 'manage_fundraisers') {
                    return manageFundraisersPermisson = permissionObject;
                  }
                });
                if (!manageFundraisersPermisson) {
                  return setFacebookFundraiserLoginStatus('permission_error');
                } else if (manageFundraisersPermisson.status === 'declined') {
                  return setFacebookFundraiserLoginStatus('declined_manage_fundraisers');
                } else {
                  setFacebookFundraiserLoginStatus('complete');
                  setFacebookFundraiserCreateStatus('pending');
                  getPersonalPagePromise = TeamraiserParticipantService.getPersonalPageInfo().then(function(response) {
                    var createFundraiserPromise,
    fundraiserDescription,
    fundraiserTitle,
    getPersonalPageResponse;
                    getPersonalPageResponse = response.data.getPersonalPageResponse;
                    fundraiserTitle = LuminateUtilsService.ensureString($rootScope.teamraiserConfig.facebookDefaultTitle);
                    fundraiserDescription = LuminateUtilsService.ensureString($rootScope.teamraiserConfig.facebookDefaultDescription);
                    if (getPersonalPageResponse && $rootScope.teamraiserConfig.usePersonalPageContentForFacebookFundraisers === 'true') {
                      fundraiserTitle = LuminateUtilsService.ensureString(getPersonalPageResponse.personalPage.pageTitle) || fundraiserTitle;
                      fundraiserDescription = LuminateUtilsService.ensureString(getPersonalPageResponse.personalPage.richText) || fundraiserDescription;
                    }
                    fundraiserTitle = ContentService.richTextToPlainText(fundraiserTitle);
                    fundraiserDescription = ContentService.richTextToPlainText(fundraiserDescription);
                    createFundraiserPromise = TeamraiserParticipantService.createFundraiser('user_access_token=' + accessToken + '&name=' + encodeURIComponent(fundraiserTitle) + '&description=' + encodeURIComponent(fundraiserDescription)).then(function(response) {
                      var facebookFundraiserId,
    ref;
                      facebookFundraiserId = (ref = response.data.createAndLinkFacebookFundraiserResponse) != null ? ref.fundraiserId : void 0;
                      if (!facebookFundraiserId) {
                        setFacebookFundraiserCreateStatus('create_fundraiser_error');
                      } else {
                        setFacebookFundraiserCreateStatus('complete');
                        $rootScope.participantRegistration.facebookFundraiserId = facebookFundraiserId;
                        $rootScope.facebookFundraiserUrl = {
                          url: 'https://www.facebook.com/donate/' + $rootScope.participantRegistration.facebookFundraiserId + '/'
                        };
                        $timeout(function() {
                          if (jQuery('.facebook-fundraiser-row').length > 0) {
                            return jQuery('html, body').animate({
                              scrollTop: jQuery('.facebook-fundraiser-row').offset().top - 150
                            },
    250);
                          }
                        });
                      }
                      return response;
                    });
                    return $rootScope.loadingPromises.push(createFundraiserPromise);
                  });
                  return $rootScope.loadingPromises.push(getPersonalPagePromise);
                }
              });
            }
          }
        },
    {
          scope: 'manage_fundraisers'
        });
      };
      if (window.ngLoadInit && angular.isFunction(ngLoadInit)) {
        ngLoadInit($rootScope);
      }
      return $rootScope.initComplete = true;
    }
  ]);

  angular.module('trPcControllers').controller('SurveyQuestionsViewCtrl', [
    '$scope',
    '$rootScope',
    '$translate',
    '$httpParamSerializer',
    'TeamraiserParticipantService',
    'LuminateUtilsService',
    function($scope,
    $rootScope,
    $translate,
    $httpParamSerializer,
    TeamraiserParticipantService,
    LuminateUtilsService) {
      $scope.sqvm = {
        surveyFields: [],
        surveyModel: {},
        updateSurveyResponses: $scope.updateSurveyResponses
      };
      $scope.getSurveyResponses = function() {
        var getSurveyResponsesPromise;
        getSurveyResponsesPromise = TeamraiserParticipantService.getSurveyResponses().then(function(response) {
          var ref,
    surveyResponses;
          surveyResponses = LuminateUtilsService.ensureArray((ref = response.data.getSurveyResponsesResponse) != null ? ref.responses : void 0);
          angular.forEach(surveyResponses,
    function(surveyResponse) {
            var fieldValue,
    thisField;
            if (surveyResponse) {
              thisField = {
                type: null,
                key: 'question_' + surveyResponse.questionId,
                className: 'survey-question',
                data: {
                  dataType: surveyResponse.questionType
                },
                templateOptions: {
                  label: surveyResponse.questionText,
                  required: surveyResponse.questionRequired === 'true'
                }
              };
              switch (surveyResponse.questionType) {
                case 'Caption':
                  thisField.type = 'caption';
                  break;
                case 'DateQuestion':
                  thisField.type = 'datepicker';
                  break;
                case 'NumericValue':
                  thisField.type = 'input';
                  break;
                case 'ShortTextValue':
                  thisField.type = 'input';
                  thisField.templateOptions.maxChars = 40;
                  break;
                case 'TextValue':
                  thisField.type = 'input';
                  thisField.templateOptions.maxChars = 255;
                  break;
                case 'LargeTextValue':
                  thisField.type = 'textarea';
                  break;
                case 'TrueFalse':
                  thisField.type = 'select';
                  break;
                case 'YesNo':
                  thisField.type = 'select';
                  break;
                case 'MultiSingle':
                  thisField.type = 'select';
                  break;
                case 'ComboChoice':
                  thisField.type = 'typeahead';
                  break;
                case 'Categories':
                  thisField.type = 'checkbox';
                  break;
                case 'MultiMulti':
                  thisField.type = 'checkbox';
                  break;
                case 'MultiSingleRadio':
                  thisField.type = 'radio';
                  break;
                case 'RatingScale':
                  thisField.type = 'radio';
                  break;
                case 'Captcha':
                  thisField.type = 'captcha';
                  break;
                case 'HiddenInterests':
                  thisField.type = 'hidden';
                  break;
                case 'HiddenTextValue':
                  thisField.type = 'hidden';
                  break;
                case 'HiddenTrueFalse':
                  thisField.type = 'hidden';
                  break;
                default:
                  thisField.type = 'input';
              }
              if (surveyResponse.isHidden === 'true') {
                thisField.type = 'hidden';
              }
              if (surveyResponse.questionAnswer) {
                thisField.templateOptions.options = [];
                angular.forEach(surveyResponse.questionAnswer,
    function(choice) {
                  return thisField.templateOptions.options.push({
                    name: choice.label,
                    value: choice.value
                  });
                });
              }
              $scope.sqvm.surveyFields.push(thisField);
              if (angular.isObject(surveyResponse.responseValue) || surveyResponse.responseValue === 'User Provided No Response') {
                $scope.sqvm.surveyModel[thisField.key] = null;
              } else if (thisField.type === 'datepicker') {
                fieldValue = surveyResponse.responseValue.split("/"); //# 07/14/2020
                $scope.sqvm.surveyModel[thisField.key] = new Date(parseInt(fieldValue[2]),
    parseInt(fieldValue[0]) - 1,
    parseInt(fieldValue[1]));
              } else if (thisField.type === 'checkbox') {
                $scope.sqvm.surveyModel[thisField.key] = surveyResponse.responseValue === 'true';
              } else {
                $scope.sqvm.surveyModel[thisField.key] = surveyResponse.responseValue;
              }
              if (angular.isString(surveyResponse.key)) {
                thisField.className += ' survey-key-' + surveyResponse.key;
              }
              return thisField;
            }
          });
          $scope.sqvm.originalFields = angular.copy($scope.sqvm.surveyFields);
          return response;
        });
        return $rootScope.loadingPromises.push(getSurveyResponsesPromise);
      };
      $scope.getSurveyResponses();
      $scope.updateSurveyResponses = function() {
        var updateResponses,
    updateSurveyResponsesPromise;
        $scope.updateProcessing = true;
        updateResponses = {};
        angular.forEach($scope.sqvm.surveyFields,
    function(field) {
          var response;
          response = $scope.sqvm.surveyModel[field.key];
          if (field.type === 'datepicker' && angular.isDate(response)) {
            updateResponses[field.key] = (response.getMonth() + 1).toString() + "/" + response.getDate().toString() + "/" + response.getFullYear().toString();
          } else {
            updateResponses[field.key] = response;
          }
          return field;
        });
        updateSurveyResponsesPromise = TeamraiserParticipantService.updateSurveyResponses($httpParamSerializer(updateResponses)).then(function(response) {
          if (response.data.errorResponse) {
            $scope.updateSurveySuccess = false;
            $scope.updateSurveyFailure = true;
            if (response.data.errorResponse.message) {
              $scope.updateSurveyFailureMessage = response.data.errorResponse.message;
            } else {
              $translate('survey_save_failure').then(function(translation) {
                return $scope.updateSurveyFailureMessage = translation;
              },
    function(translationId) {
                return $scope.updateSurveyFailureMessage = translationId;
              });
            }
          } else {
            $scope.updateSurveySuccess = true;
            $scope.updateSurveyFailure = false;
            $scope.sqvm.surveyOptions.updateInitialValue();
          }
          return response;
        });
        return $rootScope.loadingPromises.push(updateSurveyResponsesPromise);
      };
      $scope.resetSurveyAlerts = function() {
        $scope.updateProcessing = false;
        $scope.updateSurveySuccess = false;
        $scope.updateSurveyFailure = false;
        return $scope.updateSurveyFailureMessage = '';
      };
      $scope.resetSurveyAlerts();
      if (window.ngLoadController && angular.isFunction(ngLoadController)) {
        return ngLoadController($rootScope,
    $scope,
    'surveyQuestionsView');
      }
    }
  ]);

  angular.module('trPcApp').directive('badgeList', function() {
    return {
      templateUrl: './html/directive/badgeList.html',
      restrict: 'E',
      replace: true,
      scope: {
        badges: '='
      }
    };
  });

  angular.module('trPcApp').directive('companyTeamList', function() {
    return {
      templateUrl: './html/directive/companyTeamList.html',
      restrict: 'E',
      replace: true,
      scope: {
        teams: '='
      }
    };
  });

  angular.module('trPcApp').directive('contactList', function() {
    return {
      templateUrl: './html/directive/contactList.html',
      restrict: 'E',
      replace: true,
      scope: {
        contacts: '=',
        toggleContact: '=',
        selectContact: '=',
        deleteContact: '='
      }
    };
  });

  angular.module('trPcApp').directive('croppie', function() {
    return {
      templateUrl: './html/directive/croppie.html',
      restrict: 'E',
      replace: true,
      scope: {
        src: '<',
        ngModel: '=',
        imageWidth: '<',
        imageHeight: '<'
      },
      link: function(scope, element, attrs) {
        var croppieElem, croppieInstance, croppieInstantiated, croppieOptions, imageHeight, imageWidth;
        croppieInstantiated = false;
        croppieElem = element.find('.croppie-instance');
        croppieInstance = null;
        imageWidth = scope.imageWidth || 300;
        imageHeight = scope.imageHeight || 400;
        croppieOptions = {
          enableOrientation: true,
          viewport: {
            width: imageWidth,
            height: imageHeight,
            type: 'square'
          },
          boundary: {
            width: imageWidth + 24,
            height: imageHeight + 24
          }
        };
        scope.$watch('src', function() {
          var reader, uploadFile;
          uploadFile = scope.src;
          if (uploadFile) {
            reader = new FileReader;
            reader.addEventListener('load', function() {
              if (!croppieInstantiated) {
                croppieInstance = new Croppie(croppieElem[0], croppieOptions);
                croppieInstantiated = true;
              }
              return croppieInstance.bind({
                url: reader.result
              });
            }, false);
            return reader.readAsDataURL(uploadFile);
          } else if (croppieInstance && croppieInstantiated) {
            croppieInstance.destroy();
            return croppieInstantiated = false;
          }
        });
        scope.rotateImage = function(direction) {
          if (direction === 'left') {
            return croppieInstance.rotate(90);
          } else if (direction === 'right') {
            return croppieInstance.rotate(-90);
          }
        };
        croppieElem.on('update.croppie', function(ev, cropData) {
          return croppieInstance.result({
            type: 'blob',
            format: 'jpeg'
          }).then(function(img) {
            return scope.$apply(function() {
              return scope.ngModel = img;
            });
          });
        });
        return element.on('$destroy', function() {
          if (croppieInstance && croppieInstantiated) {
            croppieInstance.destroy();
            return croppieInstantiated = false;
          }
        });
      }
    };
  });

  angular.module('trPcApp').directive('emailContactsNav', function() {
    return {
      templateUrl: './html/directive/emailContactsNav.html',
      restrict: 'E',
      scope: {
        refreshMessages: '=',
        refreshContacts: '='
      },
      controller: [
        '$scope',
        '$rootScope',
        '$routeParams',
        '$translate',
        '$timeout',
        'TeamraiserEmailService',
        'ContactService',
        'LuminateUtilsService',
        function($scope,
        $rootScope,
        $routeParams,
        $translate,
        $timeout,
        TeamraiserEmailService,
        ContactService,
        LuminateUtilsService) {
          var contactFilters,
        getContactCounts,
        getContactGroupTranslations,
        getContactGroups,
        getFilterTranslation,
        getMessageCounts,
        initContactGroups,
        messageTypes,
        updateContactGroupCount,
        updateContactGroupName;
          $scope.filter = $routeParams.filter || 'no_filter_defined';
          $scope.messageType = $routeParams.messageType || 'no_message_type';
          $scope.baseUrl = $rootScope.baseUrl;
          $scope.messageCounts = {};
          messageTypes = ['draft',
        'sentMessage'];
          getMessageCounts = function() {
            return angular.forEach(messageTypes,
        function(messageType) {
              var apiMethod,
        messageCountPromise;
              apiMethod = 'get' + messageType.charAt(0).toUpperCase() + messageType.slice(1) + 's';
              messageCountPromise = TeamraiserEmailService[apiMethod]('list_page_size=1').then(function(response) {
                var responseData;
                responseData = response.data[apiMethod + 'Response'];
                $scope.messageCounts[messageType + 's'] = (responseData != null ? responseData.totalNumberResults : void 0) || 0;
                return response;
              });
              return $rootScope.loadingPromises.push(messageCountPromise);
            });
          };
          getMessageCounts();
          getFilterTranslation = function() {
            var filterNameKey;
            if ($scope.getFilterTranslationTimeout) {
              $timeout.cancel($scope.getFilterTranslationTimeout);
            }
            if ($scope.filter === 'no_filter_defined') {
              switch ($scope.messageType) {
                case 'draft':
                  filterNameKey = 'drafts_drafts_label';
                  break;
                case 'sentMessage':
                  filterNameKey = 'sent_sent_messages_label';
                  break;
                default:
                  filterNameKey = 'compose_message_label';
              }
              return $translate(filterNameKey).then(function(translation) {
                return $scope.filterName = translation;
              },
        function(translationId) {
                return $scope.getFilterTranslationTimeout = $timeout(getFilterTranslation,
        500);
              });
            }
          };
          getFilterTranslation();
          $scope.contactGroups = [];
          contactFilters = ['email_rpt_show_all',
        'email_rpt_show_never_emailed',
        'email_rpt_show_nondonors_followup',
        'email_rpt_show_unthanked_donors',
        'email_rpt_show_donors',
        'email_rpt_show_nondonors'];
          if ($rootScope.participantRegistration.previousEventParticipant === "true") {
            contactFilters.push('email_rpt_show_ly_donors');
            contactFilters.push('email_rpt_show_lybunt_donors');
          }
          if ($rootScope.participantRegistration.teamId !== "-1") {
            contactFilters.push('email_rpt_show_teammates');
            contactFilters.push('email_rpt_show_nonteammates');
            if ($rootScope.participantRegistration.previousEventParticipant === "true") {
              contactFilters.push('email_rpt_show_ly_teammates');
              contactFilters.push('email_rpt_show_ly_unreg_teammates');
            }
          }
          updateContactGroupName = function(filter,
        name) {
            return angular.forEach($scope.contactGroups,
        function(group) {
              if (filter === group.id) {
                group.name = name;
              }
              if (filter === $scope.filter) {
                return $scope.filterName = name;
              }
            });
          };
          updateContactGroupCount = function(filter,
        count) {
            return angular.forEach($scope.contactGroups,
        function(group) {
              if (filter === group.id) {
                return group.num = count || '0';
              }
            });
          };
          getContactGroupTranslations = function() {
            var translationKeys;
            if ($scope.getContactGroupTranslationsTimeout) {
              $timeout.cancel($scope.getContactGroupTranslationsTimeout);
            }
            translationKeys = ['contacts_groups_all',
        'filter_email_rpt_show_never_emailed',
        'filter_email_rpt_show_nondonors_followup',
        'filter_email_rpt_show_unthanked_donors',
        'filter_email_rpt_show_donors',
        'filter_email_rpt_show_nondonors',
        'filter_email_rpt_show_ly_donors',
        'filter_email_rpt_show_lybunt_donors',
        'filter_email_rpt_show_teammates',
        'filter_email_rpt_show_nonteammates',
        'filter_email_rpt_show_ly_teammates',
        'filter_email_rpt_show_ly_unreg_teammates'];
            return $translate(translationKeys).then(function(translations) {
              updateContactGroupName('email_rpt_show_all',
        translations.contacts_groups_all);
              updateContactGroupName('email_rpt_show_never_emailed',
        translations.filter_email_rpt_show_never_emailed);
              updateContactGroupName('email_rpt_show_nondonors_followup',
        translations.filter_email_rpt_show_nondonors_followup);
              updateContactGroupName('email_rpt_show_unthanked_donors',
        translations.filter_email_rpt_show_unthanked_donors);
              updateContactGroupName('email_rpt_show_donors',
        translations.filter_email_rpt_show_donors);
              updateContactGroupName('email_rpt_show_nondonors',
        translations.filter_email_rpt_show_nondonors);
              updateContactGroupName('email_rpt_show_ly_donors',
        translations.filter_email_rpt_show_ly_donors);
              updateContactGroupName('email_rpt_show_lybunt_donors',
        translations.filter_email_rpt_show_lybunt_donors);
              updateContactGroupName('email_rpt_show_teammates',
        translations.filter_email_rpt_show_teammates);
              updateContactGroupName('email_rpt_show_nonteammates',
        translations.filter_email_rpt_show_nonteammates);
              updateContactGroupName('email_rpt_show_ly_teammates',
        translations.filter_email_rpt_show_ly_teammates);
              return updateContactGroupName('email_rpt_show_ly_unreg_teammates',
        translations.filter_email_rpt_show_ly_unreg_teammates);
            },
        function(translationIds) {
              return $scope.getContactGroupTranslationsTimeout = $timeout(getContactGroupTranslations,
        500);
            });
          };
          getContactCounts = function() {
            return angular.forEach(contactFilters,
        function(filter) {
              var contactCountPromise;
              contactCountPromise = ContactService.getTeamraiserAddressBookContacts('tr_ab_filter=' + filter + '&skip_groups=true').then(function(response) {
                var ref,
        totalNumberResults;
                totalNumberResults = ((ref = response.data.getTeamraiserAddressBookContactsResponse) != null ? ref.totalNumberResults : void 0) || 0;
                updateContactGroupCount(filter,
        totalNumberResults);
                return response;
              });
              return $rootScope.loadingPromises.push(contactCountPromise);
            });
          };
          getContactGroups = function() {
            var getGroupsPromise;
            getGroupsPromise = ContactService.getAddressBookGroups('count_contacts=true').then(function(response) {
              var abgroups,
        ref;
              abgroups = LuminateUtilsService.ensureArray((ref = response.data.getAddressBookGroupsResponse) != null ? ref.group : void 0);
              angular.forEach(abgroups,
        function(group) {
                var filter;
                if (group) {
                  filter = 'email_rpt_group_' + group.id;
                  $scope.contactGroups.push({
                    id: filter,
                    url: $rootScope.baseUrl + '#/email/contacts/' + filter + '/list',
                    num: group.contactsCount,
                    name: group.name
                  });
                  if (filter === $scope.filter) {
                    return $scope.filterName = group.name;
                  }
                }
              });
              return response;
            });
            return $rootScope.loadingPromises.push(getGroupsPromise);
          };
          initContactGroups = function() {
            $scope.contactGroups = [];
            angular.forEach(contactFilters,
        function(filter) {
              return $scope.contactGroups.push({
                id: filter,
                url: $rootScope.baseUrl + '#/email/contacts/' + filter + '/list',
                num: '0',
                name: ''
              });
            });
            getContactGroupTranslations();
            getContactCounts();
            return getContactGroups();
          };
          initContactGroups();
          $scope.$watch('refreshContacts',
        function(newValue,
        oldValue) {
            if (newValue && newValue !== oldValue) {
              return initContactGroups();
            }
          });
          return $scope.$watch('refreshMessages',
        function(newValue,
        oldValue) {
            if (newValue && newValue !== oldValue) {
              return getMessageCounts();
            }
          });
        }
      ]
    };
  });

  angular.module('trPcApp').directive('emailMessageList', function() {
    return {
      templateUrl: './html/directive/emailMessageList.html',
      restrict: 'E',
      replace: true,
      scope: {
        messages: '=',
        selectMessage: '=',
        deleteMessage: '='
      }
    };
  });

  angular.module('trPcApp').directive('fileModel', [
    '$parse',
    function($parse) {
      return {
        restrict: 'A',
        link: function(scope,
    element,
    attrs) {
          var model,
    modelSetter;
          model = $parse(attrs.fileModel);
          modelSetter = model.assign;
          return element.bind('change',
    function() {
            return scope.$apply(function() {
              return modelSetter(scope,
    element[0].files[0]);
            });
          });
        }
      };
    }
  ]);

  angular.module('trPcApp').directive('giftList', function() {
    return {
      templateUrl: './html/directive/giftList.html',
      restrict: 'E',
      replace: true,
      scope: {
        gifts: '=',
        showActions: '=',
        acknowledgeGift: '&',
        thankDonor: '&',
        deleteGift: '&',
        giftActionLabels: '=',
        currencySymbol: '='
      }
    };
  });

  angular.module('trPcApp').directive('iframeLoaded', function() {
    return {
      restrict: 'A',
      scope: {
        iframeLoaded: '='
      },
      link: function(scope, element, attrs) {
        return element.on('load', function() {
          return scope.iframeLoaded(element);
        });
      }
    };
  });

  angular.module('trPcApp').directive('importContactsList', function() {
    return {
      templateUrl: './html/directive/importContactsList.html',
      restrict: 'E',
      replace: true,
      scope: {
        contacts: '=',
        toggleContact: '='
      }
    };
  });

  angular.module('trPcApp').directive('newsFeedList', function() {
    return {
      templateUrl: './html/directive/newsFeedList.html',
      restrict: 'E',
      replace: true,
      scope: {
        items: '='
      }
    };
  });

  angular.module('trPcApp').directive('pcVersion', function() {
    return {
      template: '<div style="display:none;">Version <span class="pc-version-number" ng-include src="\'./version.txt\'" onload="setVersion()"></span></div>',
      restrict: 'E',
      replace: true,
      scope: {
        setVersion: '&'
      }
    };
  });

  angular.module('trPcApp').directive('recentActivityList', function() {
    return {
      templateUrl: './html/directive/recentActivityList.html',
      restrict: 'E',
      replace: true,
      scope: {
        records: '='
      }
    };
  });

  angular.module('trPcApp').directive('socialShare', [
    '$interval',
    'SocialShareService',
    function($interval,
    SocialShareService) {
      return {
        template: '<div class="janrainSocialPlaceholder"></div>',
        restrict: 'E',
        replace: true,
        scope: {
          sharePage: '<'
        },
        link: function(scope,
    element,
    attrs) {
          if (scope.sharePage) {
            return SocialShareService.activateJanrain(element,
    scope.sharePage);
          } else {
            return scope.shareWatch = $interval(function() {
              if (scope.sharePage && scope.sharePage.match('http')) {
                SocialShareService.activateJanrain(element,
    scope.sharePage);
                return $interval.cancel(scope.shareWatch);
              }
            },
    1000);
          }
        }
      };
    }
  ]);

  angular.module('trPcApp').directive('teamMemberList', function() {
    return {
      templateUrl: './html/directive/teamMemberList.html',
      restrict: 'E',
      replace: true,
      scope: {
        members: '='
      }
    };
  });

  angular.module('trPcApp').directive('teamsList', function() {
    return {
      templateUrl: './html/directive/teamsList.html',
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        teams: '=',
        joinTeam: '&'
      }
    };
  });

  angular.module('trPcApp').directive('topNav', function() {
    return {
      templateUrl: './html/directive/topNav.html',
      restrict: 'E',
      replace: true
    };
  });

  angular.module('trPcApp').directive('welcomeBar', function() {
    return {
      templateUrl: './html/directive/welcomeBar.html',
      restrict: 'E',
      replace: true
    };
  });

}).call(this);
