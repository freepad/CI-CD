/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type AuthPage = typeof import('./pages/AuthPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, AuthPage: AuthPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
