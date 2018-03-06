import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from "redux";
import * as productActions from "./actionCreators/product";
import { connect } from "react-redux";
import Productlist from "./components/Productlist";
import Addproduct from "./components/Addproduct";
import Editproduct from "./components/Editproduct";
import { Route, Switch } from "react-router-dom";
import { withRouter } from 'react-router';

class App extends Component {
  componentWillMount() {
    this.props.actions.productlist();
  }
  handleAddItem = () => {
    console.log("helloadditem");
  }
  Additems = (e) => {
    let addItem = {};
    let name = e.target.name;
    let value = e.target.value;
    addItem[name] = value;
    console.log(addItem)
    this.props.actions.additem(addItem);
  }
  Additemsclick = (e) => {
    this.props.actions.additemsuccess(e);
    window.location.href = "/"
  }
  editItembutton = (e) => {
    this.props.actions.edititem(e);
  }
  Edititems = (e) => {
    let editItem = {};
    let name = e.target.name;
    let value = e.target.value;
    editItem[name] = value;

    console.log(editItem);
    this.props.actions.newedititem(editItem);
  }
  Edititemsclick = (e) => {
    this.props.actions.edititemsuccess(e);
    window.location.href = "/"
  }
  confirmDelete = (e) => {
    if (window.confirm("Do you really want to delete?")) {
      this.props.actions.deleteItem(e);
      window.location.href = "/"
    }
    else {
      window.location.href="/"
    }
  }

  pageDisplayClick = (e) => {
    const num = Number(e.target.id);
    this.props.actions.pagination(num);
  }
  backButton=()=>{
    window.location.href = "/"
  }
  render() {
    return (
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={props =>
              this.props.isLoading ? (
                <p style={{ paddingTop: "100px" }}>Loading...</p>
              ) : (
                  <Productlist {...props}
                    product={this.props.product}
                    AddItem={this.handleAddItem}
                    confirmDelete={this.confirmDelete}
                    editItem={this.editItembutton}
                    pageDisplayClick={this.pageDisplayClick}
                    currentpage={this.props.currentpage}
                    productPerPage={this.props.productPerPage}
                  />
                )
            }
          />
          <Route
            path="/Add"
            render={props => (
              <Addproduct
                {...props}
                addItem={this.props.addItem}
                Additems={this.Additems}
                Additemsclick={this.Additemsclick}
              />
            )}
          />
          <Route
            path="/Edit"
            render={props => (
              <Editproduct
                {...props}
                editItem={this.props.editItem}
                Edititems={this.Edititems}
                Edititemsclick={this.Edititemsclick}
                backButton={this.backButton}
              />
            )}
          />

        </Switch>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    product: state.product,
    isLoading: state.isLoading,
    addItem: state.addItem,
    editItem: state.editItem,
    currentpage: state.currentpage,
    productPerPage: state.productPerPage

  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch)
  }

}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
