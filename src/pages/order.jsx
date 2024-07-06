import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import './order.css';
import { Header } from '../components/Header/header.jsx';
import { Footer } from '../components/Footer/footer.jsx';
import { Order } from '../components/Order/order.jsx';

const response = await fetch("http://localhost:4000/api/drinks?filter=ordered:eq:true&select=id,name,image", {
        method: "GET",
      })
      const json = await response.json()
      const orderItems = json.data

document.querySelector('#root').innerHTML = render(
  <div className="page">
    <div className="page">
    <Header showMenu={false} />
    <main>
      <Order items={orderItems} />
    </main>
    <Footer />
    </div>
  </div>
);