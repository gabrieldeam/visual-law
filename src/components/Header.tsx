// src/components/Header.tsx
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1>Visual Law</h1>
      <nav className={styles.nav}>
        <Link href="/">Início</Link> | 
        <Link href="/editor">Editor</Link>
      </nav>
    </header>
  );
};

export default Header;
