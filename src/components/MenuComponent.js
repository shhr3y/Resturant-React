import React, {} from 'react';
import { Card,CardImg,CardImgOverlay,CardTitle } from 'reactstrap';



function RenderDishCards(dish,props){
     return(
          <Card onClick={()=>props.onClick(dish.id)} onDoubleClick={()=>props.onClick(null)}>
               <CardImg width="100%"  src={dish.image} alt={dish.name}/>
               <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
               </CardImgOverlay>
          </Card>
     );
}

function Menu(props) {
     
     const menu = props.dishes.map((dish) => {
          return(
               <div key={dish.id} className="col-12 col-md-5 m-1">
                         {RenderDishCards(dish,props)}    
               </div>
          );
     });

     return (
          <div className="row">
               {menu}      
          </div>
     );
}


export default Menu;