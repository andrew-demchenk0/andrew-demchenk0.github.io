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
    link: '#',
    animationClass: 'animate__slideInLeft',
    gridClass: 'education-3',
  },
  {
    id: '2',
    title: i18next.t('education.diploma.markering.title'),
    subtitle: i18next.t('education.diploma.markering.subtitle'),
    description: i18next.t('education.description'),
    icon: Icons.snau,
    link: '#',
    animationClass: 'animate__slideInLeft',
    gridClass: 'education-2',
  },
  {
    id: '1',
    title: i18next.t('education.diploma.elit.title'),
    subtitle: i18next.t('education.diploma.elit.subtitle'),
    description: i18next.t('education.description'),
    icon: Icons.sumdu,
    link: '#',
    animationClass: 'animate__slideInLeft',
    gridClass: 'education-1',
  },
]
