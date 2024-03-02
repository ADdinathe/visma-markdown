declare module '*.module.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';

declare module 'eruda';
declare module 'eruda-dom';
declare module 'eruda-code';
