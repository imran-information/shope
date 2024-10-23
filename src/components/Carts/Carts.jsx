import Cart from "../Cart/Cart";
import About from "../About/About"
const Carts = ({ handleComponent, toggleComponent }) => {
    console.log(toggleComponent);


    return (
        <div className="md:w-1/4">
            <h1>Carts</h1>
            <div className="flex gap-10 my-10">
                <button className={`${toggleComponent.active ? "text-green-600" : ''}`} onClick={() => handleComponent('cart')} >Carts</button>
                <button className={`${toggleComponent.active ? "" : 'text-green-600'}`} onClick={() => handleComponent('about')}>About</button>
            </div>
            {
                toggleComponent.active ? <Cart></Cart> : <About></About>
            }
        </div>
    );
};

export default Carts;