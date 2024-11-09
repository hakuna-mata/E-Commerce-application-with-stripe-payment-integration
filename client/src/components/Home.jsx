import React, { useEffect, useState } from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './cartData';
import { addToCart } from '../redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import {toast} from 'react-hot-toast'

const home = () => {
  const [cartData, setCartData] = useState(Cardsdata)
  const dispatch = useDispatch()

  const send = (e)=>{
    // console.log(e);
    dispatch(addToCart(e))
    toast.success("Item added to cart")
  }

  useEffect(()=>{
    toast.success("Welcome back")
  },[])
  
  return (
    <div>
      <section className='item_section mt-4 container' >
        <h2 className='px-4' style={{ fontWeight: 400 }} >Restaurants in Bengaluru open now</h2>
        <div className='row mt-2 d-flex justify-content-around align-items-center'>
          {
            cartData.map((element, index) => 
              <>
                <Card key={element.id} style={{ width: "22rem", border: "none" }} className='hove mb-4'>
                  <Card.Img variant='top' className='cd' src={element.imgdata} />
                  <div className="card_body">
                    <div className="upper_data d-flex justify-content-between align-items-center">
                      <h4 className="mt-2">{element.address}</h4>
                      <span>{element.rating}&nbsp;&#9734;</span>
                    </div>
                    <div className="lower_data d-flex justify-content-between">
                      <h5 className="mt-2">{element.dish}</h5>
                      <span>{element.price}</span>
                      
                    </div>
                    <div className="extra"></div>
                    <div className="last_data d-flex justify-content-between align-items-center">
                      <img src={element.arrimg} alt="" className='limg' />
                      <Button onClick={()=>send(element)} style={{ width: "150px", background: "#ff3054db", border: "none" }} variant='outline-light' className='mt-2 mb-2'  >Add to cart</Button>
                      <img src={element.delimg}alt="" className='laimg' />
                    </div>
                  </div>
                </Card>
              </>)
          }
        </div>
      </section>
    </div>
  )
}

export default home
