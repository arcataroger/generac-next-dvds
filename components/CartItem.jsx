import { dvdPropShape } from "./PropShapes";
import {Button} from "react-bootstrap";

export default function CartItem({ dvdData: { title, price }, clickHandler }) {
  return (
    <div className="cartItem">
      {title}: ${price} (<a href={'#'} onClick={clickHandler}>x</a>)
    </div>
  );
}

CartItem.propTypes = {
  dvdData: dvdPropShape.isRequired,
};
