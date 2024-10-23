

const Cart = ({ product, handleRemoveToCats }) => {


    return (
        <div className="ml-16 border my-5 p-5">
            <img className="w-full h-[150px]" src={product.img} alt="" />
            <h2 className="my-5">{product.product_name}</h2>
            <button onClick={() => handleRemoveToCats(product)}>Remove</button>
        </div>
    );
};

export default Cart;