import React, { PureComponent } from 'react';
import Styled from './Styled.js'
import { connect } from 'react-redux';
import {addNumber} from '../../store/features/counter.js'

class Demand extends PureComponent {
  constructor(props){
    super(props)

    this.state = {
      counter:this.props.counter
    }
  }
  changeRedux = () =>{
    console.log(this.props)
    this.props.changeRedux1()
  }
render(){
  return (
    <Styled>
      <div className={`aaa`}>
        Demand
        <h2>{this.state.counter}</h2>
        <button onClick={e => this.changeRedux()}>修改redux</button>
      </div>
    </Styled>
  )
}  
 
}

const mapStateToProps = (state)=>({
  counter:state.counter.counter
})

const mapDispatchToProps = (dispatch) =>({
  changeRedux1:() => dispatch(addNumber(3))
})

/**({
  
}) */

export default connect(mapStateToProps,mapDispatchToProps)(Demand)



