import {Icons} from 'assets/helper/iconsHelper.js'
import i18next from 'i18next';
import 'translations/i18n.js';

export const certificates = [
  {
    id: '3',
    title: i18next.t('education.sertificate.javascriptAdvenced.title'),
    subtitle: i18next.t('education.sertificate.javascriptAdvenced.subtitle'),
    description: i18next.t('education.description'),
    icon: Icons.udemy,
    link: '#',
    animationClass: 'animate__slideInLeft',
    gridClass: 'education-3',
  },
  {
    id: '2',
    title: i18next.t('education.sertificate.react.title'),
    subtitle: i18next.t('education.sertificate.react.subtitle'),
    description: i18next.t('education.description'),
    icon: Icons.udemy,
    link: '#',
    animationClass: 'animate__slideInLeft',
    gridClass: 'education-2',
  },
  {
    id: '1',
    title: i18next.t('education.sertificate.web.title'),
    subtitle: i18next.t('education.sertificate.web.subtitle'),
    description: i18next.t('education.description'),
    icon: Icons.udemy,
    link: '#',
    animationClass: 'animate__slideInLeft',
    gridClass: 'education-1',
  },
]
