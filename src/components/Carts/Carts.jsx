import PropTypes from 'prop-types';
import Cart from "../Cart/Cart";
import About from "../About/About"
const Carts = ({ handleComponent, toggleComponent, product, handleRemoveToCats, removeProduct }) => {



    return (
        <div className="md:w-1/4 text-center">
            <h1>Carts {product.length}</h1>
            <div className="flex gap-10 my-10 justify-center">
                <button className={`${toggleComponent.active ? "text-green-600" : ''}`} onClick={() => handleComponent('cart')} >Carts</button>
                <button className={`${toggleComponent.active ? "" : 'text-green-600'}`} onClick={() => handleComponent('about')}>Remove</button>
            </div>
            {

                toggleComponent.active ? product.map(p => <Cart key={p.id} product={p} handleRemoveToCats={handleRemoveToCats}></Cart>) : <About removeProduct={removeProduct}></About>

            }
        </div>
    );
};
Carts.propTypes = {
    handleComponent: PropTypes.func,
    product: PropTypes.array,
    toggleComponent: PropTypes.object,
    handleRemoveToCats: PropTypes.func,
    removeProduct: PropTypes.array


}


export default Carts;