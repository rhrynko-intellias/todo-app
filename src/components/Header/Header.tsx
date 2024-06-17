import styles from './Header.module.css';

interface HeaderProps {
  todoCount: number;
}

export const Header = ({ todoCount }: HeaderProps) => (
  <div className={styles.header_container}>
    <h1 className={styles.header_title}>
      Todo list <b>{todoCount}</b> task(s)
    </h1>
  </div>
);
