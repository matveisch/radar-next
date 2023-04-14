import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesMenuMobile.module.scss';
import Image from 'next/image';
import { cardIdContextType, idContext } from '../Layout';
import ServicesDropdownMenu from '../../ui/services-dropdown-menu/ServicesDropdownMenu';
import ServicesDescription from '../services-description/ServicesDescription';
import useServicesList from '../../data/servicesList';
import { useRouter } from 'next/router';

export default function ServicesMenuMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const servicesArr = useServicesList();
  const { cardId, setCardId } = useContext(idContext) as cardIdContextType;
  const { locale } = useRouter();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    if (cardId != undefined) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [cardId]);
  return (
    <motion.div initial={false} id={styles.servicesMenuWrapper} animate={isOpen ? 'open' : 'closed'}>
      <motion.div id={styles.listWrapper}>
        <motion.div
          whileTap={{ scale: 0.9 }}
          id={styles.chosenService}
          onClick={() => {
            toggleOpen();
            cardId == null ? setCardId(0) : {};
          }}>
          <Image
            id={styles.chosenServiceImg}
            src={
              cardId != null
                ? require(`../../public/images/${servicesArr[cardId].img}.svg`)
                : require(`../../public/images/select.svg`)
            }
            style={
              locale == 'he' ? { marginLeft: '10px', marginRight: '0px' } : { marginLeft: '0px', marginRight: '10px' }
            }
            alt={servicesArr[cardId != null ? cardId : 0].name}
          />
          <p className="H4" id={styles.chosenServiceText}>
            {cardId != null ? servicesArr[cardId].name : 'Select a service'}
          </p>
          <motion.div
            id={styles.dropDownImg}
            style={locale == 'he' ? { marginLeft: '0', marginRight: 'auto' } : { marginLeft: 'auto', marginRight: '0' }}
            animate={{ rotate: isOpen ? -180 : 0 }}>
            <Image src={require(`../../public/images/drop-down.svg`)} alt="drop down icon" />
          </motion.div>
        </motion.div>
        <ServicesDropdownMenu toggle={() => toggleOpen()} />
        <ServicesDescription serviceId={cardId != null ? cardId : 0} />
      </motion.div>
    </motion.div>
  );
}
