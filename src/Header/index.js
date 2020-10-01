import { connect } from "react-redux";

import Header from "./component";
import { basketCount } from "../basket/selectors";

const mapStateToProps = (state) => {
  const count = basketCount(state.basket);
  console.log(`basketCount:${count}`);
  return { basketCount: count };
};

export default connect(mapStateToProps)(Header);
