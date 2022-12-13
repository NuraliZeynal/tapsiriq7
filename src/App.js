import React, { Component } from "react";
import "./styles.css";
class App extends Component {
  state = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    feed: ""
  };

  changeHandler = (e) => {
    if (e.target.id === "name") {
      this.setState({ name: e.target.value });
    }
    if (e.target.id === "surname") {
      this.setState({ surname: e.target.value });
    }
    if (e.target.id === "phone") {
      this.setState({ phone: e.target.value });
    }
    if (e.target.id === "email") {
      this.setState({ email: e.target.value });
    }
    if (e.target.id === "feed") {
      this.setState({ feed: e.target.value });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    alert("Qebul edilmisdir");
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Adiniz: <br />
            <input
              id="name"
              type="text"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </label>
          <br />
          <label htmlFor="surname">
            Soyadiniz: <br />
            <input
              id="surname"
              type="text"
              value={this.state.surname}
              onChange={this.changeHandler}
            />
          </label>
          <br />

          <label htmlFor="email">
            Poct unvaniniz:
            <br />
            <input
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.changeHandler}
            />
          </label>
          <br />

          <label htmlFor="phone">
            Elaqe nomreniz:
            <br />
            <input
              id="phone"
              type="text"
              value={this.state.phone}
              onChange={this.changeHandler}
            />
          </label>
          <br />

          <label htmlFor="feed">
            Qeyd sahesi:
            <br />
            <textarea
              id="serh"
              type="text"
              value={this.state.feed}
              onChange={this.changeHandler}
            />
          </label>
          <br />
          <button type="submit">Gonder</button>
        </form>
      </div>
    );
  }
}
export default App;
