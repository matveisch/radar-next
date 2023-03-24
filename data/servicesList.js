import { useTranslation } from 'next-i18next';

export default function useServicesList() {
  const { t } = useTranslation('common');

  return [
    {
      id: 0,
      name: t('servicesList.social'),
      img: 'telegram-circle',
      content: '- Телеграмм - Инстаграмм - Фейсбук - Твиттер - ВКонтакте - Ютуб Ютуб Ютуб Ютуб Ютуб Ютуб Ютуб',
      describtionArr: [
        t('servicesList.targetAds'),
        t('servicesList.postsCreation'),
        t('servicesList.integration'),
        t('servicesList.targetAds'),
        t('servicesList.postsCreation'),
      ],
    },
    {
      id: 1,
      name: t('servicesList.web'),
      img: 'Web',
      content: '',
      describtionArr: [
        t('servicesList.contextAds'),
        t('servicesList.offerAds'),
        t('servicesList.seo'),
        t('servicesList.pragmaticBaing'),
        t('servicesList.mediaAds'),
      ],
    },
    {
      id: 2,
      name: t('servicesList.tv'),
      img: 'Television',
      content: '',
      describtionArr: [
        t('servicesList.detailPlacement'),
        t('servicesList.adsPlacement'),
        t('servicesList.adsInSport'),
        t('servicesList.programsSponsorship'),
        t('servicesList.videoProduction'),
      ],
    },
    {
      id: 3,
      name: t('servicesList.radio'),
      img: 'Radio',
      content:
        '-  Cетевое размещение - Точечное размещение - Прямая радиореклама - Интеграция в эфир - Интернет радио - Аудио продакшн',
      describtionArr: [
        t('servicesList.radio'),
        t('servicesList.webPlacement'),
        t('servicesList.targetRadioAds'),
        t('servicesList.etherIntegration'),
        t('servicesList.internetRadio'),
        t('servicesList.audioProduction'),
      ],
    },
    {
      id: 4,
      name: t('servicesList.creatives'),
      img: 'Creative',
      content: '',
      describtionArr: [
        t('servicesList.AdsConcepts'),
        t('servicesList.copywriting'),
        t('servicesList.ctmDevelopment'),
        t('servicesList.videoPhotoProduction'),
      ],
    },
    {
      id: 5,
      name: t('servicesList.3d'),
      img: '3d-box',
      content: '',
      describtionArr: [
        t('servicesList.videoConceptsCreation'),
        t('servicesList.quality3dCreation'),
        t('servicesList.adsDecor'),
      ],
    },
    {
      id: 6,
      name: t('servicesList.dooh'),
      img: 'Advertise',
      content: '',
      describtionArr: [
        t('servicesList.videoCreation'),
        t('servicesList.webPlacement'),
        t('servicesList.detailPlacement'),
      ],
    },
  ];
}
