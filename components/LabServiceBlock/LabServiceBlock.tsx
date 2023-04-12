import styles from './LabServiceBlock.module.scss';
import PriceTag from '../../ui/PriceTag/PriceTag';
import rightArrow from '../../images/right-arrow.svg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';

export interface LabServiceBlockProps {
  title: string;
  description: string;
  price: number;
  image: string;
  id: string;
}
function LabServiceBlock({ title, description, price, image, id }: LabServiceBlockProps) {
  const { t } = useTranslation('lab');
  const { locale } = useRouter();

  return (
    <div className={styles.labServiceBlock}>
      <Image src={image} alt="service-image" className={styles.titleImage} />
      <h3 className="H3">{title}</h3>
      <p className="paragraph">{description}</p>
      <div className={styles.footer}>
        <PriceTag price={price} />

        <Link
          href={{
            pathname: '/contact',
            query: {
              messageText: t('labMessageText') + ' ' + title + '.',
            },
          }}
          id={styles.learnMore}
          className="light-link">
          <p>{t('more')}</p>
          <Image src={rightArrow} alt="arrow" style={locale === 'he' ? { transform: 'rotate(180deg)' } : undefined} />
        </Link>
      </div>
    </div>
  );
}

export default LabServiceBlock;
