import { Box } from '@mui/material'
import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <Box sx={{
        width:"30%",
        marginBottom:"50px",
        background:"#f5f5f5",
        overflow:"hidden",
        position:"relative",
        paddingBottom:"20px"
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
                        height:"400px",
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
            position:"absolute",
            right:"20px",
            bottom:"20px",
            background:"#ca5252",
            width:"35px",
            textAlign:"center",
            lineHeight:"35px",
            color:"#fff",
            borderRadius:"50%",
            cursor:"pointer",
            fontWeight:"600",
            transition:'transform 500ms ease',
            '&:hover': {
                transform:"scale(1.5) translateY(-5px)",
                transition:'transform 500ms ease'
            }
        }} onClick={() => this.props.onAdd(this.props.item)}>+</Box>
      </Box>
    )
  }
}

export default Item