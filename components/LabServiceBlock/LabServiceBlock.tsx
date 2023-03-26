import styles from './LabServiceBlock.module.scss';
import PriceTag from '../../ui/PriceTag/PriceTag';
import rightArrow from '../../images/right-arrow.svg';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

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
    <div className={styles.labServiceBlock} id={id}>
      <Image src={image} alt="service-image" className={styles.titleImage} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.footer}>
        <PriceTag price={price} />
        <button>
          <p className="light-link">{t('more')}</p>
          <Image src={rightArrow} alt="arrow" style={locale === 'he' ? { transform: 'rotate(180deg)' } : undefined} />
        </button>
      </div>
    </div>
  );
}

export default LabServiceBlock;
