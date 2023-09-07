import {Images} from 'assets/helper/imgHelper.js'
import i18next from 'i18next';
import 'translations/i18n.js';

export const projects = [
  {
    id: 'marvel',
    title: i18next.t('project.marvel.title'),
    subtitle: i18next.t('project.marvel.subtitle'),
    description: i18next.t('project.marvel.description'),
    preview: Images.marvelPreview,
    background: Images.marvelBg,
    images: [
      Images.marvelImg1,
      Images.marvelImg2,
      Images.marvelImg3,
    ],
    view: 'https://project-7-marvel-info-portal.vercel.app/',
    github: 'https://github.com/andrew-demchenk0/project-7-marvel-info-portal',
    skills: [
        `react`, `sass`, 'js', 'api',
    ],
  },
  {
    id: 'travel',
    title: i18next.t('project.travel.title'),
    subtitle: i18next.t('project.travel.subtitle'),
    description: i18next.t('project.travel.description'),
    preview: Images.travelPreview,
    background: Images.travelBg,
    images: [
      Images.travelImg1,
      Images.travelImg2,
      Images.travelImg3,
    ],
    view: 'https://project-6-travel-booking.vercel.app/',
    github: 'https://github.com/andrew-demchenk0/project-6-travel-booking',
    skills: [
      `react`,'redux', `sass`, 'js', 'api',
    ],
  },
  {
    id: 'movie',
    title: i18next.t('project.movie.title'),
    subtitle: i18next.t('project.movie.subtitle'),
    description: i18next.t('project.movie.description'),
    preview: Images.moviePreview,
    background: Images.movieBg,
    images: [
      Images.movieImg1,
      Images.movieImg2,
      Images.movieImg3,
    ],
    view: 'https://project-5-movies.vercel.app/',
    github: 'https://github.com/andrew-demchenk0/project-5-movies',
    skills: [
      'ts', 'html', 'css', 'api',
    ],
  },
  {
    id: 'streaming',
    title: i18next.t('project.streaming.title'),
    subtitle: i18next.t('project.streaming.subtitle'),
    description: i18next.t('project.streaming.description'),
    preview: Images.streamingPreview,
    background: Images.streamingBg,
    images: [
      Images.streamingImg1,
    ],
    view: 'https://andrew-demchenk0.github.io/project-4-streaming-service/',
    github: 'https://github.com/andrew-demchenk0/project-4-streaming-service',
    skills: [
      `sass`, 'html',
    ],
  },
  {
    id: 'runSmart',
    title: i18next.t('project.runSmart.title'),
    subtitle: i18next.t('project.runSmart.subtitle'),
    description: i18next.t('project.runSmart.description'),
    preview: Images.runSmartPreview,
    background: Images.runSmartBg,
    images: [
      Images.runSmartImg1,
    ],
    view: 'https://andrew-demchenk0.github.io/project-3-run-smart/',
    github: 'https://github.com/andrew-demchenk0/project-3-run-smart',
    skills: [
      'html', `sass`, 'js', 'php',
    ],
  },
  {
    id: 'uber',
    title: i18next.t('project.uber.title'),
    subtitle: i18next.t('project.uber.subtitle'),
    description: i18next.t('project.uber.description'),
    preview: Images.uberPreview,
    background: Images.uberBg,
    images: [
      Images.uberImg1,
    ],
    view: 'https://andrew-demchenk0.github.io/project-2-uber/',
    github: 'https://github.com/andrew-demchenk0/project-2-uber',
    skills: [
      'html',`sass`, 'js',
    ],
  },
  {
    id: 'wordpress',
    title: i18next.t('project.wordpress.title'),
    subtitle: i18next.t('project.wordpress.subtitle'),
    description: i18next.t('project.wordpress.description'),
    preview: Images.wordpressPreview,
    background: Images.wordpressBg,
    images: [
      Images.wordpressImg1,
    ],
    view: 'https://andrew-demchenk0.github.io/project-1-wordpress/',
    github: 'https://github.com/andrew-demchenk0/project-1-wordpress',
    skills: [
      'html', 'css',
    ],
  }
];

