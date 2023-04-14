import styles from './WhyBlock.module.scss';
import Image from 'next/image';

interface WhyBlockProps {
  image: string;
  text: string;
}

function WhyBlock({ image, text }: WhyBlockProps) {
  return (
    <div className={styles.whyBlock}>
      <Image src={image} alt="icon" />
      <h4 className="paragraph">{text}</h4>
    </div>
  );
}

export default WhyBlock;
