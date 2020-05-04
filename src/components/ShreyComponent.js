import React , { component, Component } from 'react'

class ShreyComponent extends Component{
     
     constructor(props){
          super(props);

          this.state = {}
     }

     render(){

          const members = this.props.members.map((member)=>{
               return(
                    <div key={member.id} className="col-12">
                         <p>{member.name}</p>
                    </div>
               )
          });


          return(
               <div className="container">
                    <div className="row">
                         {members}
                    </div>
               </div>
          );
     }
}

export default ShreyComponent;