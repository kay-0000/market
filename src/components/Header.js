import { ShoppingCart } from '@mui/icons-material'
import { Box } from '@mui/material'
import React, { useState } from 'react'
import Order from './Order'

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price))
  return(<Box>
    {props.orders.map(el => (
                  <Order onDelete={props.onDelete} key={el.id} isSmall={true} item={el}/>
                ))}
                <p style={{
                  float:"left",
                  width:"100%",
                  fontWeight:"600",
                  fontSize:"20px",
                  marginBottom:"20px"
                }}>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
  </Box>)
}

const showNothing = () =>{
  return(<Box>
    <h2 style={{
      fontSize:"20px",
      marginBottom:'20px'
    }}>Товаров нет</h2>
  </Box>)
}

export default function Header(props) {

  let [cartOpen,setCartOpen] = useState(false) 

  return (
    <Box sx={{position:"relative"}}>
        <Box>
            <span style={{
                fontWeight:"600",
                fontSize:"20px"
            }}>House Staff</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакты</li>
              <li>Кабинет</li>
            </ul>
            <ShoppingCart onClick={()=> setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} sx={{
              float:"right",
              cursor:"pointer",
              transition:"color, transform 500ms ease",
              '&:hover': {
              color:"#dc33dc",
              transform:"scale(1.5)"
            },
            }}/>
            {cartOpen && (
              <Box sx={{
                position:"absolute",
                top:"30px",
                right:0,
                width:"450px",
                background:"#fafafa",
                WebkitBoxShadow:"4px 5px 15px -7px #606060",
                boxShadow:"4px 5px 15px -7px #606060",
                zIndex:"1000",
                padding:"20px",
                paddingBottom:"0"
              }}>
                {props.orders.length > 0 ?
                showOrders(props) : showNothing()}
              </Box>
            )}
        </Box>
        <div className='presentation'></div>
    </Box>
  )
}
