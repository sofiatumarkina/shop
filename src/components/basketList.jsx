import BasketItem from "./basketItem";
export default function BasketList(props){
    const {order =[], handlebasketShow = Function.prototype} = props;
    return(
        <ul className="collection">
            <li className="collection-item active">Корзина</li>
            {order.length ?(order.map((item)=><BasketItem key={item.id}{...item}/>)
            ): (
                <li className="collection-item basket-none">Корзина пуста</li>
            )}
             <li className="collection-item active">Общая стоимость заказа:</li>
             <i className="material-icons basket-clear" onClick={handlebasketShow}>clear</i>
        </ul>
    )
}