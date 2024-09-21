import React from 'react'
import NavBar from '../features/navbar/Navbar'
import UserOrders from '../features/user/components/UserOrders';
function UserOrderPage(){
    return (
        <>
        <NavBar>
            <h1 className='mx-auto text-2xl' >My Orders</h1>
            <UserOrders></UserOrders>
        </NavBar>
        </>
    )
}

export default UserOrderPage;