import styles from "./StatsInfo.module.scss";

function StatsInfo() {
  return (
    <div id={styles.statsParent}>
      <div id="stats-bg"></div>
      <div id={styles.statsContainer}>
        <div id="firstChild" className={styles.flexBox}>
          <p className={`light-paragraph ${styles.statText}`}>
            Количество просмотров рекламы за сутки
          </p>
          <p className="H4">981</p>
        </div>
        <div id="secondChild" className={styles.flexBox}>
          <p className={`light-paragraph ${styles.statText}`}>
            Проходимость каналов за неделю
          </p>
          <p className="H4">16k</p>
        </div>
        <div id="thirdChild" className={styles.flexBox}>
          <p className={`light-paragraph ${styles.statText}`}>
            Привлечено трафика нашим клиентам
          </p>
          <p className="H4">586</p>
        </div>
        <div id="fourthChild" className={styles.flexBox}>
          <p className={`light-paragraph ${styles.statText}`}>
            Создано рекламных публикаций нашей командой
          </p>
          <p className="H4">88k</p>
        </div>
      </div>
    </div>
  );
}

export default StatsInfo;
