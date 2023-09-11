import { Icons } from 'assets/helper/iconsHelper.js';
import i18next from 'i18next';
import 'translations/i18n.js';

export const certificates = [
  {
    id: '3',
    title: i18next.t('education.certificate.javascriptAdvanced.title'),
    subtitle: i18next.t('education.certificate.javascriptAdvanced.subtitle'),
    description: i18next.t('education.description'),
    icon: Icons.udemy,
    link: 'https://www.udemy.com/share/102DVQ3@Nnizk5ZhSZSr2R5WNQVx898IkpaRBH1cKUnjKNqqHdhU-40p0VKaj9degJ6J_TCCEw==/',
    animationClass: 'animate__slideInLeft',
  },
  {
    id: '2',
    title: i18next.t('education.certificate.react.title'),
    subtitle: i18next.t('education.certificate.react.subtitle'),
    description: '2023',
    icon: Icons.udemy,
    link: 'https://drive.google.com/file/d/1ZFp_8WTXHNTvn4lOmWY34HF2utvwsCKH/view?usp=sharing',
    animationClass: 'animate__slideInLeft',
  },
  {
    id: '1',
    title: i18next.t('education.certificate.web.title'),
    subtitle: i18next.t('education.certificate.web.subtitle'),
    description: '2022',
    icon: Icons.udemy,
    link: 'https://drive.google.com/file/d/1S6YLJiTiupw2IK5xdfxaa1Rf7kokxoO-/view?usp=sharing',
    animationClass: 'animate__slideInRight',
  },
];
