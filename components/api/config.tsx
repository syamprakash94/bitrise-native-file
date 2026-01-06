// @flow
// import { get } from 'lodash';
// import Config from 'react-native-config';
// const domains = {
//   test: Config.API_HOST_TEST,
//   live: Config.API_HOST_LIVE
// };

// export const baseURL = 'https://4753-103-179-197-239.ngrok-free.app';
// export const baseURL = domains.test;
export const baseURL = '{{DATA_URL}}' || 'https://a9dede73ce29.ngrok-free.app/api/apps/695794975c07cff29a2c1047';

const routes = {
  auth: '/api/auth/',
  mood: '/api/mood/',
  mindful: '/api/mindful/',
  archived: '/api/archived/',
  favorite: '/api/favorite/',
  gratitude: '/api/gratitude',
  notification: '/api/notification',
  subscription: '/api/subscription/',
  hometour: '/api/auth/mark-firstLogin',

};
export const apiEndpoints = {
  //Auth
  login: baseURL + routes.auth + 'login',
  signUp: baseURL + routes.auth + 'signup',
  verifyOtp: baseURL + routes.auth + 'verify-code',
  forgotPassword: baseURL + routes.auth + 'forgot-password',
  verifyResetOtp: baseURL + routes.auth + 'verify-reset-code',
  resetPasword: baseURL + routes.auth + 'reset-password',
  deleteAccount: baseURL + routes.auth + 'delete-account',
  changePassword: baseURL + routes.auth + 'change-password',
  signUpResendOtp: baseURL + routes.auth + 'resend-otp',
  forgotResendOtp: baseURL + routes.auth + 'resend-reset-otp',
  phoneLogin: baseURL + routes.auth + 'phone-login',
  verifyPhoneOtp: baseURL + routes.auth + 'verify-phone',
  resendVerifyPhoneOtp: baseURL + routes.auth + 'resend-phone-otp',
  refreshToken: baseURL + routes.auth + 'refresh-tokens',

  
  //Profile
  getMyProfile: baseURL + routes.auth + 'my-profile',
  updateProfile: baseURL + routes.auth + 'profile-edit',
  //Mood
  addCurrentMood: baseURL + routes.mood + 'add-current-mood',
  skipMood: baseURL + routes.mood + 'skip-mood',
  moodReports: baseURL + routes.mood + 'mood-report?',
  // Mindful Meditation
  weeklyContent: baseURL + routes.mindful + 'weekly-mindful-content',
  archived: baseURL + routes.archived + 'list-archived-contents?',
  markCompleted: baseURL + routes.mindful + 'mark-completed/',
  Favorites: baseURL + routes.favorite,
  getFavorites: baseURL + routes.favorite + 'my-favorites',
  mindfulDetails: baseURL + routes.mindful,

  // Gratitude
  addGratitude: baseURL + routes.gratitude,
  gratitudeLog: baseURL + routes.gratitude + '/gratitude-log',
  checkGratitude: baseURL + routes.gratitude + '/check-gratitude-log',
  getweeks: baseURL + routes.gratitude + '/get-weeks',
  getLogWeeklyOverview: baseURL + routes.gratitude + '/weekly-overview',

//   Notifications
  getNotifications: baseURL + routes.notification,
  readNotification: baseURL + routes.notification + '/read-notification/',

  // Subscription
  sendSubscriptionInfo: baseURL + routes.subscription + 'subscription-success-android',
  sendSubscriptionInfoIos: baseURL + routes.subscription + 'subscription-success-ios',

  // Home Tour
  markFirstLogin: baseURL + routes.hometour
};

export type EndPointType = 'schedule' | 'activity';

export type APIDataType = {
  params: any;
  method?: string;
  endPoint: EndPointType;
};

export type ParamsType = 'formData' | 'default';
