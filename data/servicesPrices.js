import { useTranslation } from 'next-i18next';

export default function useServicesPricesList() {
  const { t } = useTranslation('tariffs');

  return [
    {
      id: 0,
      description: t('social-des'),
      prices: [
        {
          tariff: t('base'),
          price: 4500,
          tariffDescription: [t('social-base-1'), t('social-base-2'), t('social-base-3'), t('social-base-4')],
        },
        {
          tariff: t('advanced'),
          price: 7000,
          tariffDescription: [
            t('social-advanced-1'),
            t('social-advanced-2'),
            t('social-advanced-3'),
            t('social-advanced-4'),
          ],
        },
        {
          tariff: t('all-in'),
          price: 15000,
          tariffDescription: [t('social-all-in-1'), t('social-all-in-2'), t('social-all-in-3'), t('social-all-in-4')],
        },
      ],
    },
    {
      id: 1,
      prices: [],
    },
    {
      id: 2,
      description: t('tv-des'),
      prices: [
        {
          tariff: t('base'),
          price: 24000,
          tariffDescription: [t('tv-base-1'), t('tv-base-2'), t('tv-base-3'), t('social-base-4')],
        },
        {
          tariff: t('advanced'),
          price: 38000,
          tariffDescription: [t('tv-advanced-1'), t('tv-advanced-2'), t('tv-advanced-3')],
        },
        {
          tariff: t('all-in'),
          price: 56000,
          tariffDescription: [t('tv-all-in-1'), t('tv-all-in-2'), t('tv-all-in-3'), t('tv-all-in-4')],
        },
      ],
    },
    {
      id: 3,
      prices: [],
    },
    {
      id: 4,
      prices: [],
    },
    {
      id: 5,
      prices: [],
    },
    {
      id: 6,
      prices: [],
    },
  ];
}
