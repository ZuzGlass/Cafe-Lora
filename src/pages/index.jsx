import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { Banner } from '../components/Banner/banner.jsx';
import { Contact } from '../components/Contact/contact.jsx';
import { Header } from '../components/Header/header.jsx';
import { Footer } from '../components/Footer/footer.jsx';
import { Gallery } from '../components/Gallery/gallery.jsx';
import { Menu } from '../components/Menu/menu.jsx';

const response = await fetch("http://localhost:4000/api/drinks")
const json = await response.json()
const drinks = json.data

console.log(drinks)

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <Header />
    <main>
      <Banner />
      <Menu drinks={drinks} />
      <Gallery />
      <Contact />
  </main>
  <Footer />
  </div>
);


const rolloutNav = document.querySelector(".rollout-nav")

document.querySelector(".nav-btn").addEventListener("click", () => {
  rolloutNav.classList.toggle("nav-closed")
});

rolloutNav.addEventListener("click", () => {
  rolloutNav.classList.add("nav-closed")
});
