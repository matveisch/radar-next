import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesBtn.module.scss';
import Image from 'next/image';
import useServicesList from '../../data/servicesList';
import { cardIdContextType, idContext } from '../../components/Layout';
import { useRouter } from 'next/router';

interface Props {
  itemId: number;
  setOpen: Function;
  isOpen: boolean;
}

const wrapperAnim = {
  open: {
    height: 'calc(40vh - 100px)',
  },
  closed: {
    height: '60px',
  },
};

// const imgAnim = {
//   open: {
//     x: '0',
//   },
//   closed: {
//     x: '-60px',
//   },
// };

const titleAnim = {
  open: {
    fontSize: '3vw',
  },
  closed: {
    fontSize: '1.2vw',
  },
};
const ServicesBtn: React.FC<Props> = ({ itemId, setOpen, isOpen }: Props) => {
  const [hovered, setHovered] = useState(false);
  const servicesArr = useServicesList();
  const { cardId, setCardId } = useContext(idContext) as cardIdContextType;
  const { locale } = useRouter();

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        scale: 1.05,
        boxShadow: '0px 3px 16px 0px rgba(105, 254, 139, 0.2)',
      }}
      variants={wrapperAnim}
      id={styles.mainWrapper}
      animate={{
        backgroundColor: cardId == itemId && !isOpen ? '#69fe8b' : '#3a3f47',
      }}
      onClick={() => {
        setOpen(false);
        setCardId(itemId);
      }}>
      <motion.h4
        className="H3"
        id={styles.title}
        variants={titleAnim}
        animate={{ color: itemId == cardId && !isOpen ? '#232932' : '#eeeeee' }}
        transition={{ duration: 0 }}>
        {servicesArr[itemId != undefined ? itemId : 0].name}
      </motion.h4>
      <motion.div
        id={styles.imgWrapper}
        // variants={imgAnim}
        variants={{
          open: {
            x: '0',
          },
          closed: {
            x: locale == 'he' ? '100px' : '-60px',
          },
        }}
        style={locale === 'he' ? { right: 'unset', marginRight: 0, left: 0, marginLeft: -80 } : undefined}
        animate={{
          rotate: hovered && isOpen ? -25 : isOpen ? -15 : 0,
        }}>
        <Image
          height="100"
          width="100"
          id={styles.menuItemImg}
          src={require(`../../public/images/${servicesArr[itemId != undefined ? itemId : 0].img}.svg`)}
          alt={servicesArr[itemId != undefined ? itemId : 0].name}
        />
      </motion.div>
    </motion.div>
  );
};
export default ServicesBtn;
