function Header(props) {
    console.warn("header :", props.data.cartItems)
    return (
        <div>
            <h1>{props.data.cartItems.length} items are added to cart</h1>
        </div>
    )
}

export default Header;