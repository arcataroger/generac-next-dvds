import React from "react";
import PropTypes from "prop-types";

export default function CartTotal({ dvdsInCart }) {

    const total = dvdsInCart.reduce((acc, cur) => acc + cur.price, 0)

    return (
        <>
            <h3>Cart total</h3>
            ${total.toFixed(2)}
        </>
    );
}

CartTotal.propTypes = {
    dvdsInCart: PropTypes.array
};
