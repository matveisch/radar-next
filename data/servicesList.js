import { useTranslation } from 'next-i18next';

export default function useServicesList() {
  const { t } = useTranslation('services');

  return [
    {
      id: 0,
      name: t('social'),
      img: 'telegram-circle',
      content: '- Телеграмм - Инстаграмм - Фейсбук - Твиттер - ВКонтакте - Ютуб Ютуб Ютуб Ютуб Ютуб Ютуб Ютуб',
      describtionArr: [t('targetAds'), t('postsCreation'), t('integration'), t('targetAds'), t('postsCreation')],
    },
    {
      id: 1,
      name: t('web'),
      img: 'Web',
      content: '',
      describtionArr: [t('contextAds'), t('offerAds'), t('seo'), t('pragmaticBaing'), t('mediaAds')],
    },
    {
      id: 2,
      name: t('tv'),
      img: 'Television',
      content: '',
      describtionArr: [
        t('detailPlacement'),
        t('adsPlacement'),
        t('adsInSport'),
        t('programsSponsorship'),
        t('videoProduction'),
      ],
    },
    {
      id: 3,
      name: t('radio'),
      img: 'Radio',
      content:
        '-  Cетевое размещение - Точечное размещение - Прямая радиореклама - Интеграция в эфир - Интернет радио - Аудио продакшн',
      describtionArr: [
        t('radio'),
        t('webPlacement'),
        t('targetRadioAds'),
        t('etherIntegration'),
        t('internetRadio'),
        t('audioProduction'),
      ],
    },
    {
      id: 4,
      name: t('creatives'),
      img: 'Creative',
      content: '',
      describtionArr: [t('AdsConcepts'), t('copywriting'), t('ctmDevelopment'), t('videoPhotoProduction')],
    },
    {
      id: 5,
      name: t('3d'),
      img: '3d-box',
      content: '',
      describtionArr: [t('videoConceptsCreation'), t('quality3dCreation'), t('adsDecor')],
    },
    {
      id: 6,
      name: t('dooh'),
      img: 'Advertise',
      content: '',
      describtionArr: [t('videoCreation'), t('webPlacement'), t('detailPlacement')],
    },
  ];
}
