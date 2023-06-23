import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
        <h2>Anubis Pet Shop</h2>
        <div>
            <button>Alimentos y Snacks</button>
            <button>Higiene</button>
            <button>Juguetes</button>
            <button>Accesorios</button>
        </div>
        <CartWidget />
        </nav>
    )
}

export default NavBar