import styles from './PriceTag.module.scss';

interface PriceTagProps {
  price: number;
}

function PriceTag({ price }: PriceTagProps) {
  return (
    <div className={styles.priceTag}>
      <a>{`от ${price}₪ / месяц`}</a>
    </div>
  );
}

export default PriceTag;
