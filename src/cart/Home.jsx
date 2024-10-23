import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../cartlist/cartSlice';
import { Link } from 'react-router-dom';

const Home = () => {
    // show state
    const reduxcart = useSelector((state) => state.cartlist)
    // data pass to redux
    const dispatch = useDispatch()

    console.log(reduxcart)
    const [data, setData] = useState([''])
    // api calling
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/smartphones')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setData(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }, [])


    return (
        <div>
            <div className='container'>
                <div className='d-flex my-3 justify-content-between'>
                    <div>
                        <h3>Product list</h3>
                    </div>
                    <div>
                        <Link to="/order"><button className='btn btn-primary'>Order  {reduxcart.cartData.length != 0 && reduxcart.cartData.length} </button></Link>
                    </div>
                </div>

                <div className='row'>
                    {
                        data?.products?.map((item, index) => {
                            return (
                                <div className='col-4 p-4' key={index}>
                                    <div className='card'>
                                        <div>
                                            <img src={item.thumbnail} className='img-fluid' alt="" />
                                            <div className='card-body p-2'>
                                                <h5>Title :- {item.title}</h5>
                                                <h5>price :- $ {item.price} </h5>
                                                <button className='btn btn-primary'  onClick={() => dispatch(addToCart(item))}>Add to cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home