function Home(props){
    return(
        <div>
            <h1>Home</h1>
            <button onClick={()=> props.addToCartHandler({price:1000, model:"iPhone 7"})}>Click to add</button>
            <button onClick={()=> props.removeFromCartHandler({index:0})}>Click To Remove</button>

        </div>
    )
}

export default Home;