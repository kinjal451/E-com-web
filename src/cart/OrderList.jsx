import React from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';

const OrderList = () => {
    const reduxcart = useSelector((state) => state.cartlist)
    return (
        <div>
            <div className='container'>
                <h4 className='my-4'>Order List</h4>
                <div className='card-menu'>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Thumbnail</th>
                                <th>Title</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* loop list */}
                            {
                                reduxcart.cartData.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>1</td>
                                            <td><img src={item.thumbnail} height='150' width='150' className='img-fluid' alt="" /></td>
                                            <td>{item.title}</td>
                                            <td>1</td>
                                            <td>$ {item.price}</td>
                                            <td><button className='btn btn-danger'>Remove</button></td>
                                        </tr>

                                    )
                                })

                            }

                        </tbody>
                    </Table>
                </div>
                <h4>Grand Total : - {reduxcart.cartTotal}</h4>
            </div>
        </div>
    )
}

export default OrderList