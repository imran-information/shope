const Product = ({ product, handleAddToCats, }) => {

    const { id, img, product_name, description, price } = product

    return (
        <div className=" border p-5 text-center">
            <img className="w-full h-48" src={img} alt="" />
            <h2 className="text-2xl my-5">{product_name}</h2>
            <p>{description}</p>
            <p className="my-5">${price}</p>
            <button onClick={() => handleAddToCats(product, product.id)} className="">Add to cart</button>
        </div>
    );
};

export default Product;