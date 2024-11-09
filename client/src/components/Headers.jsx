import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import "./style.css"

const headers = () => {
  const {cart} = useSelector((state)=>state.allCart)
  // console.log(cart);
  
  return (
    <>
      <Navbar style={{ height: "60px", background: "rgb(233, 80, 74,0.9)", color: "black", position: "fixed", top: 0, left: 0,  width: "100vw",  zIndex: 1000
}}>
        <Container>
          <Link to='/' style={{textDecoration:"None"}}>
          <h3 className='text-dark' >E Commerce</h3>
          </Link>
          <Link to='/cart' className='text-decortion-none text-light mx-2'>
          <div id='ex4' >
          <span style={{color:"black"}} className='p1 fa-stack fa-2x has-badge' data-count={cart.length} >
          <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default headers
