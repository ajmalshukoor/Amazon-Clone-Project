import React, { useEffect, useState } from 'react';
import { db } from './firebase';
import {useStateValue} from './StateProvider';
import Order from './Order.js';
import "./Orders.css"


function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [Orders, setOrders] = useState([]);

useEffect(()=>{
    if(user){
    db
    .collection('users')
    .doc(user?.uid)
    .collection('orders')
    .orderBy('created', 'desc')
    .onSnapshot(snapshot => {
        setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data:doc.data()
        })))
    })
}else{
    setOrders([]);
}
}, [user])

    return (
        <div className="orders">
            <h1>{!user ? 'You are not signed in. You should sign in first to display the orders!!!' : 'Your Orders'}</h1>
            <div className='orders__order'>
                {Orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders