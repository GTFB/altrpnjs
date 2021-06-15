import {createGlobalStyle} from 'styled-components'
import {connect} from "react-redux";

const GlobalStyles = createGlobalStyle`${({elementsSettings})=>{
  let styles = '';
  _.each(elementsSettings,(item, id)=>{
    console.log(item);
    console.log(id);
  });
  return styles
}}`;

function mapStateToProps(state) {
  return {elementsSettings: state.elementsSettings}
}

export default connect(mapStateToProps)(GlobalStyles)