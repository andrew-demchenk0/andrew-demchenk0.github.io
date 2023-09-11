import {Icons} from 'assets/helper/iconsHelper.js'
import i18next from 'i18next';
import 'translations/i18n.js';

export const diplomas = [
  {
    id: '3',
    title: i18next.t('education.diploma.adm.title'),
    subtitle: i18next.t('education.diploma.adm.subtitle'),
    description: i18next.t('education.description'),
    icon: Icons.snau,
    link: 'https://snau.edu.ua/en/',
    animationClass: 'animate__slideInLeft',
  },
  {
    id: '2',
    title: i18next.t('education.diploma.marketing.title'),
    subtitle: i18next.t('education.diploma.marketing.subtitle'),
    description: '2022',
    icon: Icons.snau,
    link: 'https://drive.google.com/file/d/14yVrifAvqIMLCYyYvznFajnY75rQxHsM/view?usp=sharing',
    animationClass: 'animate__slideInRight',
  },
  {
    id: '1',
    title: i18next.t('education.diploma.elit.title'),
    subtitle: i18next.t('education.diploma.elit.subtitle'),
    description: '2021',
    icon: Icons.sumdu,
    link: 'https://drive.google.com/file/d/1_82G3l5GDi74Y7pJVLi1o76DCMuOAIBd/view?usp=sharing',
    animationClass: 'animate__slideInRight',
  },
];
