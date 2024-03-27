import { Box } from '@mui/material'
import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    key: "all",
                    name:"Всё"
                },
                {
                    key: "chairs",
                    name:"Стулья"
                },
                {
                    key: "tables",
                    name:"Столы"
                },
                {
                    key: "sofa",
                    name:"Диваны"
                },
                {
                    key: "light",
                    name:"Свет"
                },
                {
                    key: "armchair",
                    name:"Кресло"
                },
            ]
        }
    }
  render() {
    return (
      <Box >
        {this.state.categories.map(el => (
            <Box sx={{
                display:"inline-block",
                background:"#f2f2f2",
                borderRadius:"50px",
                padding:"10px 20px",
                marginRight:"15px",
                marginBottom:"25px",
                cursor:"pointer",
                border:"1px solid transparent",
                transition:"all 500ms ease",
                '&:hover': {
                    borderColor:"silver",
                    transform:"scale(1.1)"
                  },
            }}  key={el.key} onClick={()=> this.props.chooseCategory(el.key)}>{el.name}</Box>
        ) )}
      </Box>
    )
  }
}

export default Categories