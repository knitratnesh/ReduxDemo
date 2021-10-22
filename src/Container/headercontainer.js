import { connect } from 'react-redux';
import Header from '../Components/Header/header';

const mapStateToProps = state => ({
    data:state
})

const mapDispatchToProps = dispatch =>({
//  addToCartHandler: data => dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Header)
// export default Home;
