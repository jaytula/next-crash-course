import styles from "../styles/Layout.module.css";
import Header from "./Header";
import Nav from "./Nav";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
