import { Delete } from '@mui/icons-material'
import { Box } from '@mui/material'
import React, { Component } from 'react'

export class Order extends Component {
  render(props) {
    console.log()
    return (
     <Box sx={{
        width:"100%",
        float:"left",
        marginBottom:"20px"
     }}>
          <Box sx={{
                '&:hover': {
                    transform:"scale(1.05)",
                    transition:'transform 500ms ease'
                }
       }}>
       <img style={{
                        width: this.props.isSmall ? "70px":"100%",
                        borderRadius:"10px 10px 10px 10px",
                        height: this.props.isSmall ? "70px":"400px",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        float:"left",
                        marginLeft:"20px"
       }} src={'./img/' + this.props.item.img}/>
       </Box>
        <h2 style={{
            marginLeft:"110px",
            color:"#333",
            fontSize:"20px",
            marginBottom:"10px"
        }} >{this.props.item.title}</h2>
        <b style={{
            margin:"10px 20px",
            color:"#797979",
            fontWeight:"600"
        }}>{this.props.item.price}$</b>
        <Delete onClick={()=> this.props.onDelete(this.props.item.id)} sx={{
          color:"#ca5252",
          float:"right",
          position:"relative",
          top:"-25px",
          cursor:"pointer",
          transition:'color, transform 500ms ease',
          '&:hover': {
            color:"#d83030",
            transform:"scale(1.5)"
        }
        }}/>
     </Box>
    )
  }
}

export default Order