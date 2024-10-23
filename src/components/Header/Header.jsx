import PropTypes from 'prop-types';
import logo from '../../assets/react.svg'
const Header = ({ product, addPrice }) => {



    return (
        <nav className='bg-[#242424] py-4 border-b border-slate-600 static'>
            <div className='flex justify-between items-center w-10/12 mx-auto'>
                <a className='flex text-2xl gap-2' href=''><img src={logo} alt="" />Header</a>
                <div className='flex gap-10'>
                    <h2>Home </h2>
                    <h2>Product</h2>
                    <h2>Cart: {product.length}</h2>
                    <h2>$ {addPrice}</h2>
                </div>
            </div>
        </nav>
    );
};
Header.propTypes = {
    product: PropTypes.array,
    addPrice: PropTypes.number
}

export default Header;