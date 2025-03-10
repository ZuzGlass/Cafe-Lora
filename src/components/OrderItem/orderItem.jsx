import './orderItem.css';

export const OrderItem = ({ name, image }) => {
  return (
    <div className="order-item">
      <img src={`http://localhost:4000${image}`} className="order-item__image" alt={name} />
      <div className="order-item__name">{name}</div>
    </div>
  )
};