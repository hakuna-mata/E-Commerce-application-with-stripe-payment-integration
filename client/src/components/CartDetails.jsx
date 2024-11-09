import React, { useEffect, useState } from 'react'
import "./cartStyle.css"
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,clearCart,removeFromCart, trash } from '../redux/features/cartSlice'
import toast from 'react-hot-toast'
import {loadStripe} from '@stripe/stripe-js'

const CartDetails = () => {
  const[price,setPrice]=useState(0)
  const[qty,setQty]=useState(0)

  const{cart}=useSelector((state)=>state.allCart)
  // console.log(cart);
  
  let arr = cart

  const dispatch = useDispatch()

  const handleIncrement = (e)=>{
    toast.success("Item added")
    dispatch(addToCart(e))
  } 

  const handleDecrement = (id)=>{
    toast.error("Item removed from the cart")
    dispatch(removeFromCart(id))
  }

  const handleDelete = (id)=>{
    toast.error("Item removed from the cart")
    dispatch(trash(id))
  }

  const emptyCart = ()=>{
    toast.error("Cart is empty")
    dispatch(clearCart())
  }

  const totalPrice = ()=>{
    let total = arr.reduce((acc,ele)=>acc+ele.qnty*ele.price,0)
    setPrice(total)
  }

  const totalQty = ()=>{
    let total = arr.reduce((acc,ele)=>acc+ele.qnty,0)
    setQty(total)
  }
  
  useEffect(()=>{
    totalPrice()
  },[handleIncrement,handleDecrement,handleDelete,emptyCart])

  useEffect(()=>{
    totalQty()
  },[handleIncrement,handleDecrement,handleDelete,emptyCart])

  const makePayment = async()=>{
    try {
      const stripe = await loadStripe("pk_test_51QHQjLDBKnUO9RkZ83Ew1JX5Dzcrgd7uyYx512Rglfct0Isq0OIqiXQVv9Vtt9G8JnXuxBF0RWGVzvtOuXZzPAq000b65IzISJ")

    const body = {
      products:cart
    }
    const headers = {
      "Content-Type":"application/json"
    }
    const response = await fetch("http://localhost:8080/api/payment",{
      method:"POST",
      body:JSON.stringify(body),
      headers:headers
    })

    const session = await response.json()

    const result = await stripe.redirectToCheckout({
      sessionId:session.id
    })

    if(result.error){
      console.log(result.error);
    }

    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <>
    <div className="row justify-content-center m-0">
      <div className="col-md-9 mt-5 mb-5 cardsdetails">
        <div className="card">
          <div className="card-header bg-dark p-3">
            <div className="card-header-flex">
            <h5 className='text-white m-0'>Cart Calculation({arr.length})</h5>
            {
              arr.length>0?<button className='btn btn-danger mt-0 btn-sm' onClick={()=>emptyCart()}>Empty cart<i className='fa fa-trash-alt mr-2'></i></button>:""
            }
            </div>
          </div>
          <div className="card-body p-0">
            {
              arr.length===0?
              <table className='table cart-table mb-0'>
                <tbody>
                  <tr>
                    <td colSpan={6} >
                      <div className='cart-empty' >
                        <i className='fa fa-shopping-cart'></i>
                        <p>Your cart is empty</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>:
              <table className='table cart-table mb-0 table-responsive-sm'>
                <thead>
                  <tr>
                    <td>Action</td>
                    <td>Product</td>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Qty</td>
                    <td className='text-right'><span id='amount' className='amount'>Total amount</span></td>
                  </tr>
                </thead>
                <tbody>
                  {
                    arr.map((element,index)=>{
                      return(
                        <>
                        <tr key={element.id}>
                          <td>
                            <button className='prdct-delete' onClick={()=>handleDelete(element.id)}  ><i className='fa fa-trash-alt mr-2'></i></button>
                          </td>
                          <td>
                            <div className='product-img'>
                              <img src={element.imgdata} alt="" />
                            </div>
                          </td>
                          <td>
                            <div className="product-name"><p>{element.dish}</p></div>
                          </td>
                          <td>{element.price}</td>
                          <td>
                            <div className="prdct-qty-container">
                              <button className='prdct-qty-btn' type='button' onClick={()=>handleDecrement(element.id)}><i className='fa fa-minus'></i></button>
                              <input type="text" className='qty-input-box' name='' value={element.qnty} disabled />
                              <button className='prdct-qty-btn' type='button' onClick={()=>handleIncrement(element)}><i className='fa fa-plus'></i></button>
                            </div>
                          </td>
                          <td className='text-right' >{element.qnty*element.price}</td>
                        </tr>
                        </>
                      )
                    })
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <th>&nbsp;</th>
                    <th colSpan={2}>&nbsp;</th>
                     <th>Items in cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{qty}</span></th>
                     <th className='text-right'>Total price <span className='ml-2 mr-2'>:</span><span className='text-danger'>{price}</span></th>
                     <th className='text-right'><button onClick={()=>makePayment()} className='btn btn-success'>Checkout</button></th>
                  </tr>
                </tfoot>
              </table>
            }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartDetails
