import React, { Component } from 'react';
import '../css/Productlist.css';
import { Link } from 'react-router-dom';

class Productlist extends Component {

    TableRow(row, index) {
        return (
            <tbody key={index}>
                <tr key={index}>
                    <td>{row.id}</td>
                    <td>{row.productName}</td>
                    <td>{row.price}</td>
                    <td>{row.quantity}</td>
                    <td>{row.ROL}</td>
                    <td><Link to="/Edit"><button onClick={() => {
                        this.props.editItem(row);
                    }}>&#x270E;</button></Link><Link to="/"><button onClick={() => {
                        this.props.confirmDelete(row.id);
                    }}>&#x2716;</button></Link></td>

                </tr>
            </tbody>
        )
    };

    Table(product) {
        return (<table>
            <thead>
                <th>ID</th>
                <th>PRODUCT</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>R.O.L</th>
                <th>Action</th>
            </thead>
            {product.map((row, index) => {
                return this.TableRow(row, index);
            })}

        </table>);
    };
    tableDisplay = (product, currentpage, productPerPage) => {

        const indexLast = currentpage * productPerPage;
        const indexFirst = indexLast - productPerPage;
        const currentTodos = product.slice(indexFirst,
            indexLast);
        return (
            this.Table(currentTodos)
        )
    }
    pagination = (products, productPerPage) => {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(products.length / productPerPage); i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li 
                    key={number}
                    id={number}
                    onClick={this.props.pageDisplayClick}
                >
                    {number} |
                </li>

            );
        });
        return (
            <ul id="page-numbers">
                {renderPageNumbers}
            </ul>
        )
    }

    render() {

        return (
            <div>
                <h1 className="heading_style">ProductList</h1>
                <Link to="/Add" ><button className="addbutton_style" onClick={() => {
                    this.props.AddItem();
                }}> Add New Product</button></Link>
                {this.tableDisplay(this.props.product, this.props.currentpage, this.props.productPerPage)}
                {this.pagination(this.props.product, this.props.productPerPage)}


            </div>
        );
    }
}

export default Productlist;