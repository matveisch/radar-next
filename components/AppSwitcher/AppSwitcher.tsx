import { useRouter } from 'next/router';
import styles from './AppSwitcher.module.scss';
import Link from 'next/link';

function AppSwitcher() {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);

  return (
    <div className={styles.appSwitcher}>
      <Link href="/" style={pathname === '/lab' ? undefined : { color: '#69FE8B' }}>
        ORIGINAL
      </Link>
      <div className={styles.separator} />
      <Link href="/lab" style={pathname === '/lab' ? { color: '#B338FF' } : undefined}>
        LAB
      </Link>
    </div>
  );
}

export default AppSwitcher;
