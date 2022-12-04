import React, {Component} from 'react';
import './ProcessCard.css';
import List from './List';
//import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Inputfield extends Component{
    state ={
        items:[],
        text:""
    }
    handlechange = e =>{
        this.setState({text:e.target.value})
    }
    handleAdd = e =>{
        if(this.state.text !== ""){
            const items = [...this.state.items, this.state.text]
            this.setState({items: items, text:""});
        }
    }
    handleDelete = id =>{
        console.log("Deleted",id);
        const olditems = [...this.state.items]
        console.log("olditems",olditems);
        const items = olditems.filter((element,i)=>{
            return i !== id
        })
        this.setState({items: items});
    }
    render()
    {
        return(
            //container ke liye
            <div className='container-fluid mt-5'>
                <div className='row'> 
                    <div className='col-sm-6 mx-auto shadow-lg p-3'>
                       <h2 className='text-center'>Process Card</h2>
                       <div className='row'>
                        <div className='col-9'>
                            <input type="text" className='form-control' placeholder='Process Name'
                            value={this.state.text}onChange={this.handlechange}/>

                        </div>
                        <div className="col2">
                            <button className='btn btn-warning px-5 font-weight-bold'
                            onClick={this.handleAdd}>Add</button>
                        </div>
                        <div className="container-fluid">
                            <ul className='list-unstyled row m-5'>
                                {
                                    this.state.items.map((value, i)=>{
                                        return <List key={i} id= {i}value={value}
                                         sendData = {this.handleDelete}/>
                                    })
                                }
                            </ul>
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Inputfield;
