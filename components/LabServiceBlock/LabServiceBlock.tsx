import styles from './LabServiceBlock.module.scss';
import PriceTag from '../../ui/PriceTag/PriceTag';
import rightArrow from '../../images/right-arrow.svg';
import Image from 'next/image';

export interface LabServiceBlockProps {
  title: string;
  description: string;
  price: number;
  image: string;
  marginTop: string;
  id: string;
}
function LabServiceBlock({ title, description, price, image, marginTop, id }: LabServiceBlockProps) {
  return (
    <div className={styles.labServiceBlock} style={{ marginTop }} id={id}>
      <Image src={image} alt="service-image" className={styles.titleImage} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.footer}>
        <PriceTag price={price} />
        <button>
          <p className="light-link">Подробнее</p>
          <Image src={rightArrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
}

export default LabServiceBlock;
