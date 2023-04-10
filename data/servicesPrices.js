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
          price: '4500₪',
          tariffDescription: [t('social-base-1'), t('social-base-2'), t('social-base-3'), t('social-base-4')],
        },
        {
          tariff: t('advanced'),
          price: '7000₪',
          tariffDescription: [
            t('social-advanced-1'),
            t('social-advanced-2'),
            t('social-advanced-3'),
            t('social-advanced-4'),
          ],
        },
        {
          tariff: t('all-in'),
          price: '15000₪',
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
          price: '24000₪',
          tariffDescription: [t('tv-base-1'), t('tv-base-2'), t('tv-base-3')],
        },
        {
          tariff: t('advanced'),
          price: '38000₪',
          tariffDescription: [t('tv-advanced-1'), t('tv-advanced-2'), t('tv-advanced-3')],
        },
        {
          tariff: t('all-in'),
          price: '56000₪',
          tariffDescription: [t('tv-all-in-1'), t('tv-all-in-2'), t('tv-all-in-3'), t('tv-all-in-4')],
        },
      ],
    },
    {
      id: 3,
      description: t('radio-des'),
      prices: [
        {
          tariff: t('base'),
          price: '17000₪',
          tariffDescription: [t('radio-base-1'), t('radio-base-2'), t('radio-base-3'), t('radio-base-4')],
        },
        {
          tariff: t('advanced'),
          price: '21000₪',
          tariffDescription: [
            t('radio-advanced-1'),
            t('radio-advanced-2'),
            t('radio-advanced-3'),
            t('radio-advanced-4'),
            t('radio-advanced-5'),
          ],
        },
        {
          tariff: t('all-in'),
          price: '28000₪',
          tariffDescription: [
            t('radio-all-in-1'),
            t('radio-all-in-2'),
            t('radio-all-in-3'),
            t('radio-all-in-4'),
            t('radio-all-in-5'),
            t('radio-all-in-6'),
          ],
        },
      ],
    },
    {
      id: 4,
      description: t('creatives-des'),
      prices: [
        {
          tariff: t('base-audio-clip'),
          price: '400₪',
          tariffDescription: [t('base-audio-clip-1')],
        },
        {
          tariff: t('advanced-audio-clip'),
          price: '700₪',
          tariffDescription: [t('advanced-audio-clip-1'), t('advanced-audio-clip-2')],
        },
        {
          tariff: t('all-in-audio-clip'),
          price: '1300₪',
          tariffDescription: [t('all-in-audio-clip-1'), t('all-in-audio-clip-2')],
        },
        {
          tariff: t('base-tv-clip'),
          price: '1200₪' + t('per-min'),
          tariffDescription: [t('base-tv-clip-1'), t('base-tv-clip-2'), t('base-tv-clip-3'), t('base-tv-clip-4')],
        },
        {
          tariff: t('advanced-tv-clip'),
          price: '2100₪' + t('per-min'),
          tariffDescription: [
            t('advanced-tv-clip-1'),
            t('advanced-tv-clip-2'),
            t('advanced-tv-clip-3'),
            t('advanced-tv-clip-4'),
            t('advanced-tv-clip-5'),
            t('advanced-tv-clip-6'),
            t('advanced-tv-clip-7'),
            t('advanced-tv-clip-8'),
          ],
        },
        {
          tariff: t('all-in-tv-clip'),
          price: '3200₪' + t('per-min'),
          tariffDescription: [
            t('all-in-tv-clip-1'),
            t('all-in-tv-clip-2'),
            t('all-in-tv-clip-3'),
            t('all-in-tv-clip-4'),
            t('all-in-tv-clip-5'),
            t('all-in-tv-clip-6'),
            t('all-in-tv-clip-7'),
            t('all-in-tv-clip-8'),
            t('all-in-tv-clip-9'),
            t('all-in-tv-clip-10'),
          ],
        },
        {
          tariff: t('logo'),
          price: '1500₪',
          tariffDescription: [],
        },
        {
          tariff: t('business-card'),
          price: '400₪',
          tariffDescription: [],
        },
        {
          tariff: t('form-style'),
          price: '3000₪',
          tariffDescription: [
            t('form-style-1'),
            t('form-style-2'),
            t('form-style-3'),
            t('form-style-4'),
            t('form-style-5'),
            t('form-style-6'),
          ],
        },
        {
          tariff: t('pdf-presentation'),
          price: '1500₪',
          tariffDescription: [t('pdf-presentation-1')],
        },
        {
          tariff: t('booklet'),
          price: '500₪',
          tariffDescription: [t('booklet-1')],
        },
        {
          tariff: t('book-layout'),
          price: '1000₪',
          tariffDescription: [],
        },
        {
          tariff: t('poster'),
          price: '500₪',
          tariffDescription: [],
        },
        {
          tariff: t('banner-no-animation'),
          price: '300₪',
          tariffDescription: [],
        },
        {
          tariff: t('banner-with-animation'),
          price: '500₪',
          tariffDescription: [],
        },
      ],
    },
    {
      id: 5,
      description: t('3d-des'),
      prices: [
        {
          tariff: t('base'),
          price: '5600₪',
          tariffDescription: [t('3d-base-1')],
        },
        {
          tariff: t('advanced'),
          price: '7600₪',
          tariffDescription: [t('3d-advanced-1')],
        },
        {
          tariff: t('all-in'),
          price: '17000₪',
          tariffDescription: [t('3d-all-in-1')],
        },
      ],
    },
    {
      id: 6,
      description: t('dooh-des'),
      prices: [
        {
          tariff: t('base'),
          price: '28000₪',
          tariffDescription: [t('dooh-base-1'), t('dooh-base-2'), t('dooh-base-3'), t('dooh-base-4')],
        },
        {
          tariff: t('advanced'),
          price: '42000₪',
          tariffDescription: [t('dooh-advanced-1'), t('dooh-advanced-2'), t('dooh-advanced-3'), t('dooh-advanced-4')],
        },
        {
          tariff: t('all-in'),
          price: '63000₪',
          tariffDescription: [t('dooh-all-in-1'), t('dooh-all-in-2'), t('dooh-all-in-3'), t('dooh-all-in-4')],
        },
      ],
    },
  ];
}
