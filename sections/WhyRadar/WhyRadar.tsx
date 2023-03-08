import styles from './WhyRadar.module.scss';
import radarWhy from '../../images/radar-why.svg';
import gearWhy from '../../images/gear-why.svg';
import bulbWhy from '../../images/bulb-why.svg';
import moneyWhy from '../../images/money-why.svg';
import WhyBlock from '../../components/WhyBlock/WhyBlock';

function WhyRadar() {
  const blocks = [
    {
      image: radarWhy,
      text: 'Следим за всеми новшествами рекламы в мире и выбираем лучшее',
    },
    {
      image: gearWhy,
      text: 'Занимаемся производством и организацией',
    },
    {
      image: bulbWhy,
      text: 'Создаем каждую идею отдельно под личные запросы',
    },
    {
      image: moneyWhy,
      text: 'Сокращаем затраты',
    },
  ];

  return (
    <div className={styles.whyRadar}>
      <h2>Почему Radar Digitally</h2>
      <div className={styles.blocks}>
        {blocks.map((block, index) => (
          <WhyBlock key={index} image={block.image} text={block.text} />
        ))}
      </div>
    </div>
  );
}

export default WhyRadar;
