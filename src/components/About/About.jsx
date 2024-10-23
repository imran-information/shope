const About = ({ removeProduct }) => {
    return (

        <div className="ml-16 border my-5 p-5">
            <img src={removeProduct.img} alt="" />
            <h2 className="my-4">{removeProduct.product_name}</h2>
        </div>
    );
};

export default About;