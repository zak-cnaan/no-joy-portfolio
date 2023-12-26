import { Outlet } from "react-router-dom";
import css from './layout.module.css';
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <div className={css.layout}>
      <header className={css.header}>header</header>
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
