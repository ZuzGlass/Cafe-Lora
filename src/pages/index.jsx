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
    <Header showMenu={true} />
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

document.querySelectorAll(".drink__controls").forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const drinkId = event.target.dataset.id
    console.log(`${drinkId}`)

    const ordered = event.target.querySelector(".order-btn--ordered") ? true : false
    
    const toggleOrder = !ordered

    const response = await fetch(`http://localhost:4000/api/drinks/${drinkId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify([{ op: 'replace', path: '/ordered', value: toggleOrder }]),
    })

    const json = await response.json();
    console.log(json)

    window.location.reload()
  })
});