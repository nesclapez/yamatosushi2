//import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { addToBasket } from "../basket/actions";

import SushiCard from "./component";

// Version 1, pédagiue
// const mapDispatchToProps = (dispatch) => ({
//   addToBasket: (sushiId, count) => dispatch(addToBasket(sushiId, count)),
// });

// Version 2, redux
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ addToBasket }, dispatch);

// Version 3, react-redux
const mapDispatchToProps = { addToBasket };

export default connect(null, mapDispatchToProps)(SushiCard);
