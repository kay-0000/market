import { Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component{
  constructor(props){
  super(props)
  this.state = {
    orders:[],
    currentItems:[],
    items:[
      {
        id:1,
        title:"Стул серый",
        img:"kreslo bishop svetlo-seryy halmar.jpg",
        desc:"Стул Серый: элегантное сочетание стиля и удобства в вашем пространстве.",
        category:"chairs",
        price:"49.99"
      },
      {
        id:2,
        title:"Стол",
        img:"L_height.webp",
        desc:"Стол: место, где рождаются идеи и разделяются моменты.",
        category:"tables",
        price:"149.00"
      },
      {
        id:3,
        title:"Диван",
        img:"chester-moon-by-baxter-leather-sofa-xxtraordinaire-176-1438.0825565912x1080.jpg",
        desc:"Диван: остров уюта в океане повседневности.",
        category:"sofa",
        price:"549.99"
      },
      {
        id:4,
        title:"Кресло",
        img:"194(3).jpg",
        desc:"Кресло: островок уюта и спокойствия в вашем доме.",
        category:"armchair",
        price:"349.99"
      },
      {
        id:5,
        title:"Лампа",
        img:"75ac922da10bb21465d4967a0155bc425e7ca549_1024_1024.jpg",
        desc:"Лампа: олицетворение уюта и тепла в вашем пространстве.",
        category:"light",
        price:"25.00"
      },
      {
        id:6,
        title:'Стул-белый',
        img:"Sc4c41b3c16894c86af5e693542a73046G.webp",
        desc:"Стул-белый: символ простоты и изящества в интерьере.",
        category:"chairs",
        price:'49.99'
      }
    ],
    showFullItem: false,
    fullItem:{}
  }  
  this.state.currentItems = this.state.items
  this.addToOrder = this.addToOrder.bind(this)
  this.deleteOrder = this.deleteOrder.bind(this)
  this.chooseCategory = this.chooseCategory.bind(this)
  this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
    return(
      <Box sx={{
        width:"1280px",
        margin:"50px 0 0 300px",
      }}>
    <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
    <Categories chooseCategory={this.chooseCategory}/>
    <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
    {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
    <Footer/>
  </Box>
)
}

onShowItem(item){
  this.setState({fullItem: item})
  this.setState({showFullItem : !this.state.showFullItem})
}

chooseCategory(category){
  if(category === "all"){
    this.setState({currentItems:this.state.items})
    return
  }
this.setState({
  currentItems:this.state.items.filter(el => el.category === category)
})
}

deleteOrder(id){
this.setState({orders:this.state.orders.filter(el => el.id !== id)})
}

addToOrder(item){
  let isInArray = false
  this.state.orders.forEach(el =>{
    if(el.id === item.id)
    isInArray = true
  })
  if(!isInArray)
this.setState({orders:[...this.state.orders, item]})
}

}

export default App;
