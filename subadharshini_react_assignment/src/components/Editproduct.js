import React, { Component } from 'react';
import { Link, } from 'react-router-dom';
import '../css/edit.css';


class Editproduct extends Component {
    render() {
        return (
            <div>
                <form onChange={(e) => {
                    this.props.Edititems(e);
                }}>
                    <h1>Edit Item </h1>
                    <p>Id:<input type="text" name="id" defaultValue={this.props.editItem.id}  ></input></p>
                    <p>Product Name:<input type="text"  name="productName" defaultValue={this.props.editItem.productName}  >
                    </input></p>
                    <p>Price : <input type="text" defaultValue={this.props.editItem.price} name="price"  >
                    </input></p>
                    <p>Quantity:<input type="text" defaultValue={this.props.editItem.quantity} name="quantity"  >
                    </input></p>
                    <p>ROL : <input type="text" defaultValue={this.props.editItem.ROL} name="ROL"  >
                    </input></p>
                    <Link to="/"> <button type="button" className="edit_button" onClick={() => {
                        this.props.Edititemsclick(this.props.editItem);
                    }}>
                        Edit</button></Link>
                        <Link to="/" ><button type="button" className="back_button"onClick={() => {
                        this.props.backButton();
                    }}>
                        Back</button></Link>
                </form>
            </div>

        )
    }
}

export default Editproduct;