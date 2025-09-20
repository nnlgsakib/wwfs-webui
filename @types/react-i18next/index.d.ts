// Minimal augmentation to allow passing a namespace to useTranslation
// Some TS setups infer a 0-arg signature; this widens it safely.
declare module 'react-i18next' {
  // Broad stubs to keep TS 4.x happy with v15 type syntax.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function useTranslation(ns?: any, options?: any): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const Trans: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function withTranslation(...args: any[]): any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const I18nextProvider: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const initReactI18next: any;
}
