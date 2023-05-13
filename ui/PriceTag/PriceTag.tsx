import styles from './PriceTag.module.scss';
import { useTranslation } from 'next-i18next';

interface PriceTagProps {
  price: number;
}

function PriceTag({ price }: PriceTagProps) {
  const { t } = useTranslation('lab');

  return (
    <div className={styles.priceTag}>
      <a>{`${t('from')} ${price}₪ / ${t('month')}`}</a>
    </div>
  );
}

export default PriceTag;
