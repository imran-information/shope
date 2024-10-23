import PropTypes from 'prop-types';
const Product = ({ product, handleAddToCats, }) => {

    const { img, product_name, description, price } = product

    return (
        <div className=" border p-5 text-center">
            <img className="w-full h-48" src={img} alt="" />
            <h2 className="text-2xl my-5">{product_name}</h2>
            <p>{description}</p>
            <p className="my-5">${price}</p>
            <button onClick={() => handleAddToCats(product)} className="">Add to cart</button>
        </div>
    );
};
Product.propTypes = {
    handleAddToCats: PropTypes.func,
    product: PropTypes.object

}

export default Product;