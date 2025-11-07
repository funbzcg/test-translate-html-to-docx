/*
 * @Description:
 * @Date: 2024-11-22 14:42:40
 */
/// <reference types="vite/client" />
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module 'mathml2omml' {
  export function mml2omml(
    mml: string,
    options?: { disableDecode?: boolean }
  ): string;
}
