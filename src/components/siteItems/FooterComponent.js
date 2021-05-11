const FooterComponent = (props) => {

    const shopHandler = () => {
        props.shopHandler(true);
    }

    const createHandler = () => {
        props.formHandler(true);
    }

    const checkoutHandler = () => {
        props.checkoutHandler(true);
    }

    return (

        <footer className="page-footer">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5>Coffee Shop</h5>
                        <p>You can order a coffee and update the cart price, add your own coffee to the list</p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5>Actions</h5>
                        <ul className="actionList">
                            <button onClick={shopHandler} className="btn actionBtn">Shop</button>
                            <button onClick={createHandler} className="btn actionBtn">Create a coffee</button>
                            <button onClick={checkoutHandler} className="btn actionBtn">Checkout</button>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2021 Copyright Text
                    <a className="right" target="_blank" href="https://github.com/Mdbaker19">Github</a>
                </div>
            </div>
        </footer>
    )

}

export default FooterComponent;