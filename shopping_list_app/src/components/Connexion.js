import React, { Component } from "react";
import axios from "axios";

class Connexion extends Component {
    //render a form to connect
    render() {
        return (
            <div>
                <h1>Connexion</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="username" />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        );
    }

    //handle the submit of the form for the connexion
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post("http://localhost:8000/api/token/", data)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    console.log("success");
                } else {
                    console.log("error");
                }
            })
    }



};

export default Connexion;
