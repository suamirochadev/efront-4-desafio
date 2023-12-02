import { Outlet } from "react-router-dom";
import { Navigation } from './components/core/Navigation.jsx';
import { Footer } from './components/core/Footer.jsx'

export default function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}