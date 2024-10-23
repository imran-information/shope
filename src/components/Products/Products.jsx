import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = ({ handleAddToCats }) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const productsDataLoad = async () => {
            const res = await fetch("./public/data.json")
            const data = await res.json()
            setProducts(data);

        }
        productsDataLoad()

    }, [])
    return (
        <div className="md:w-3/4">
            <h1>Products: {products.length}</h1>
            <div className='grid grid-cols-3 gap-5  mt-10'>
                {
                    products.map(product => <Product handleAddToCats={handleAddToCats} key={product.id} product={product} ></Product>)
                }
            </div>
        </div>
    );
};
Products.propTypes = {
    handleAddToCats: PropTypes.func

}

export default Products;