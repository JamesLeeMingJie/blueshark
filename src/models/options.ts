import { Menu } from 'models/menu';
// import { PlanOptionsSubPerUnit } from './enum';

export const menu: Menu[] = [
  {
    path: '/',
    keyTranslate: 'home',
  },
  {
    path: '/r-series/overview',
    keyTranslate: 'r Series',
  },
  {
    path: '/battery',
    keyTranslate: 'battery',
  },
];

export const menuSecond: Menu[] = [
  {
    path: '/r-series/overview',
    keyTranslate: 'overview',
  },
  {
    path: '/r-series/specification',
    keyTranslate: 'Specs',
  },
  {
    path: '/r-series/pricing',
    keyTranslate: 'Pricing',
  },
];

export const languages = [
  { name: 'English', value: 'en' },
  { name: 'Bahasa Melayu', value: 'ms' },
  { name: '中文', value: 'zh' },
];
