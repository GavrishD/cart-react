import "./style.scss";
import formatPrice from "../../utils/formatPrice";

const CartFooter = ({ total }) => {
    const { count, price } = total;

    return (
        <footer className="cart-footer">
        <div className="cart-footer__count">{count} pcs</div>
        <div className="cart-footer__price">{formatPrice.format(price)} $</div>
        </footer>
    );
};

export default CartFooter;
