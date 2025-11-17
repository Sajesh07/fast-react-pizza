import { Link } from "react-router-dom";
import SerachOrder from "../features/order/SerachOrder";

export default function Header() {
  return (
    <div>
      <Link to="/">Fast React Pizza Co.</Link>
      <SerachOrder />
      <p>Sajesh</p>
    </div>
  );
}
