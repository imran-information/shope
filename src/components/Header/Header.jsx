
import logo from '../../assets/react.svg'
const Header = () => {

    
    return (
        <nav className='bg-[#242424] py-4 border-b border-slate-600 static'>
            <div className='flex justify-between items-center w-10/12 mx-auto'>
                <a className='flex text-2xl gap-2' href=''><img src={logo} alt="" />Header</a>
                <div className='flex gap-10'>
                    <h2>Home </h2>
                    <h2>Product</h2>
                    <h2>Cart:</h2>
                    <h2>$ 500</h2>
                </div>
            </div>
        </nav>
    );
};

export default Header;