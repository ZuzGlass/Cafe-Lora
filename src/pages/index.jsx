import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Banner } from '../components/Banner/banner.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Header } from '../components/Header/header.jsx';
import { Footer } from '../components/Footer/footer.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Menu } from '../components/Menu/menu.jsx';

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu />
      <Gallery />
      <Contact />
  </main>
  <Footer />
  </div>
);
