import BasketItem from "./basketItem";
export default function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);
  return (
    <div className="basket-list">
      <ul className="collection">
        <li className="collection-item active">Корзина</li>
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.id}
              removeFromBasket={removeFromBasket}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
              {...item}
            />
          ))
        ) : (
          <li className="collection-item basket-none">Корзина пуста</li>
        )}
        <li className="collection-item active">
          Общая стоимость заказа: {totalPrice}{" "} руб.
        </li>
        <i className="material-icons basket-clear" onClick={handleBasketShow}>
          clear
        </i>
      </ul>
    </div>
  );
}
