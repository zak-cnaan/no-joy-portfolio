import { Outlet } from "react-router-dom";
import css from './layout.module.css';
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

function Layout() {
  return (
    <div className={css.layout}>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
