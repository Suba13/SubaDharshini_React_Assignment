import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/add.css';

class Addproduct extends Component {
    render() {
        return (
            <div>
                <form onChange={(e) => {
                    this.props.Additems(e);
                }}>
                    <h1>Add Item </h1>
                    <p>Id:<input type="text"  name="id"  ></input></p>
                    <p>Product Name:<input type="text" name="productName"  >
                    </input></p>
                    <p>Price : <input type="text" name="price"  >
                    </input></p>
                    <p>Quantity:<input type="text"  name="quantity"  >
                    </input></p>
                    <p>ROL : <input type="text"  name="ROL"  >
                    </input></p>
                    <Link to="/" ><button type="button" className="save_button" onClick={() => {
                        this.props.Additemsclick(this.props.addItem);
                    }}>
                        Add</button></Link>
                        <Link to="/" ><button type="button" className="back_button">
                        Back</button></Link>
                </form>
            </div>
        )
    }
}

export default Addproduct;