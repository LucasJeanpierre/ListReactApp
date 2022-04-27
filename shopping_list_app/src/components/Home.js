import React, { Component } from "react";
import axios from "axios";

const token = '';

class Home extends React.Component {

    //constructor
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            idlist: null,
        };
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get('http://127.0.0.1:8000/api/ShoppingItem/?shoppinglist=test', {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then(response => {
                this.setState({ items: response.data.results });
            })
    }

    addItem = () => {
        axios
            .post('http://localhost:8000/api/ShoppingItem/', {
                name: 'test',
                shoppinglist: 'test',
            }, {
                headers: { 'Authorization': 'Bearer ' + token }
            })
            .then(response => {
                this.refreshList();
            })
    }

}




export default Home;
