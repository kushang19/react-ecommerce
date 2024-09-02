import React from 'react'
import NavBar from '../features/navbar/Navbar'
import ProductDetail from '../features/product-list/components/ProductDetail'

export default function Home(){
  return (
    <NavBar>
        <ProductDetail></ProductDetail>
    </NavBar>
  )
}
