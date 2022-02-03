import { dvdPropShape } from "./PropShapes";
import {Button, Stack} from "react-bootstrap";

export default function CartItem({ dvdData: { title, price }, clickHandler }) {
  return (
    <div className="cartItem">
      <Stack direction="horizontal" gap={3}>
          <div className={'me-auto'}>{title}</div>
          <div>${price}</div>
          <div>(<a href={'#'} onClick={clickHandler}>x</a>)</div>
      </Stack>
    </div>
  );
}

CartItem.propTypes = {
  dvdData: dvdPropShape.isRequired,
};
