import { Box } from '@mui/material'
import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <Box sx={{
        position:"fixed",
        top:"0",
        left:"0",
        right:"0",
        bottom:"0",
        background:"rgba(0,0,0,0.8)",
        zIndex:"9999",
        overflow:"auto",

      }}>
        <Box sx={{
            width:"600px",
            position:"relative",
            margin:"10% auto",
            padding:"40px 30px",
            background:"#fff",
            borderRadius:"9px"
        }}>
        <Box sx={{
                '&:hover': {
                    transform:"scale(1.05)",
                    transition:'transform 500ms ease'
                }
       }}>
       <img style={{
                        width:"100%",
                        borderRadius:"10px 10px 0 0",
                        height:"100%",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        cursor:"pointer"
       }} src={'./img/' + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
       </Box>
        <h2 style={{
            margin:"10px 20px",
            color:"#333"
        }} >{this.props.item.title}</h2>
        <p style={{
            margin:"10px 20px",
            color:"#333"
        }}>{this.props.item.desc}</p>
        <b style={{
            margin:"10px 20px",
            color:"#5fa35f"
        }}>{this.props.item.price}$</b>
        <Box sx={{
            background:"#ca5252",
            width:"35px",
            textAlign:"center",
            lineHeight:"35px",
            color:"#fff",
            borderRadius:"50%",
            cursor:"pointer",
            fontWeight:"600",
            transition:'transform 500ms ease',
            position:"absolute",
            right:"20px",
            bottom:"20px",
            '&:hover': {
                transform:"scale(1.5) translateY(-5px)",
                transition:'transform 500ms ease'
            }
        }} onClick={() => this.props.onAdd(this.props.item)}>+</Box>
        </Box>
      </Box>
    )
  }
}

export default ShowFullItem