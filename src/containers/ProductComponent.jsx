import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProductComponent = () => {

    const products = useSelector((state) => state.allProducts.products);

    const renderList = products.map((product) => {
        const {id, title, image, price, category} = product;

        return (
            <div className="four wide column" key={id}>
                <Link to={`/product/${id}`}>
                    <div className="ui cards link">
                        <div className="card" >
                            <div className="image">
                                <img className="ui image" src={image} alt={title} style={{width: '100%', height: '300px', padding: '1rem'}}/>
                            </div>
                            <div className="content">
                                <div className="header">{title}</div>
                                <div className="meta price">$ {price}</div>
                                <div className="meta">{category}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })

  return (
    <>
        {renderList}
    </>
  );
};

export default ProductComponent;