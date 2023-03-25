import { useRouter } from 'next/router';
import styles from './AppSwitcher.module.scss';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

function AppSwitcher() {
  const router = useRouter();
  const { pathname } = router;
  const { t } = useTranslation('common');

  return (
    <div className={styles.appSwitcher}>
      <Link href="/" style={pathname === '/lab' ? undefined : { color: '#69FE8B' }}>
        {t('original')}
      </Link>
      <div className={styles.separator} />
      <Link href="/lab" style={pathname === '/lab' ? { color: '#B338FF' } : undefined}>
        {t('lab')}
      </Link>
    </div>
  );
}

export default AppSwitcher;
