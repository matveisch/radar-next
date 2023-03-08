import styles from './LabServices.module.scss';
import LabServiceBlock from '../../components/LabServiceBlock/LabServiceBlock';
import tvLab from '../../images/tv-lab.svg';

function LabServices() {
  return (
    <div className={styles.labServices}>
      <h2 className="H2">Our Services</h2>
      <div className={styles.servicesContainer}>
        <LabServiceBlock
          id={styles.service1}
          title={'Синтетическое сарафанное радио'}
          description={
            'Небольшая группа заранее подготовленных сотрудников передвигается по городу и начинает разговоры в барах, кафе и прочих социальных местах, как бы невзначай рассказывая интересную историю про вашу компанию.'
          }
          price={3000}
          image={tvLab}
        />
        <LabServiceBlock
          id={styles.service2}
          title={'Очень интересный рекламный билборд'}
          description={
            'Вокруг твоей рекламы стоит нанятая группа, постоянно снимая билборд на видео и громко его обсуждая в разговорной манере, а также снимает небольшие короткие видео в социальные сети по его поводу.'
          }
          price={5000}
          image={tvLab}
        />
        <LabServiceBlock
          id={styles.service3}
          title={'Ряд заказных мероприятий'}
          description={
            'Мы организовываем несколько фестивалей за спонсорством твоей компании. На мероприятии будет раздаваться разнообразная забрендированная атрибутика твоей организации. Реклама самого мероприятия будет находится во всех социальных сетях.'
          }
          price={10000}
          image={tvLab}
        />
      </div>
    </div>
  );
}

export default LabServices;
