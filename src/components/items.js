import { Box } from '@mui/material'
import React, { Component } from 'react'
import { Item } from './item'

export class Items extends Component {
  render() {
    return (
      <Box sx={{
        display:"flex",
        width:"100%",
        flexWrap:"wrap",
        justifyContent:"space-between"
      }}>
        {this.props.items.map(el => (
            <Item onShowItem={this.props.onShowItem} key={el.id} item={el} onAdd={this.props.onAdd}/>
        ) )}
      </Box>
    )
  }
}

export default Items