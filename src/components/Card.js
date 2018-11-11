import React, { Component } from 'react';
class Card extends Component {

state={selected:false,focused:false};

onClick=(e)=>{
  e.preventDefault();
this.setState({ selected:!this.state.selected});
this.setState({focused:false}); 
}

onFocus=()=>{
  this.setState({focused:true});
}
onLeave=()=>{
this.setState({focused:false});
}

  render() {
  const {active,taste,quantity,gift,description,weight}=this.props.itemData;
  const color=(active?(this.state.selected?(this.state.focused?"#e62e7a":"#d91667"):(this.state.focused?"#2ea8e6":"#1698d9")):"#b3b3b3");
    const weightStyle={
      "backgroundColor" : color
    }



    return <div className="full_card"> 

    <div className="card" onClick={active&&this.onClick} onPointerOver={active&&this.onFocus} onPointerLeave={active&&this.onLeave}>
    
    <svg>
<polyline points="0,45 40,2 318,2 318,478 2,478 2,45 " fill={active?"none":"rgba(242,242,242,0.7)"} strokeWidth="4" stroke={color}/>
  </svg>
   {(this.state.selected&&this.state.focused)?<p className="card_first fist_hover card_item">Котэ не одобряет?</p>:<p className="card_first card_item">Сказачное заморское яство</p>}
   <h1 className="card_title card_item">Нямушка</h1>
   <p className="card_taste card_item">{taste}</p>
   <p className="card_quantity card_item">{quantity}</p>
   <p className="card_gift card_item">{gift}</p>
   <div className="card_weight" style={weightStyle}>
   <span className="weight_value" >
   {weight}</span> 
   <br/>
   <span className="kilos">
   кг
  </span>
   </div>
   </div>
<div className="card_description">
{active?(!this.state.selected?<p>Чего сидишь? Порадуй котэ, <a href="#" onClick={this.onClick}>купи</a></p>:<p>{description}</p>):<p className="disabled_description">Печалька,{taste} закончился</p>} 
</div>
   </div>;
   

}
}

export default Card;