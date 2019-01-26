import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "Radisav",
        email: "rades@gmail.com",
        phone: "5555-5555"
      },
      {
        id: 2,
        name: "John",
        email: "john@gmail.com",
        phone: "4444-45555"
      },
      {
        id: 3,
        name: "Michael",
        email: "michael@gmail.com",
        phone: "222-2222"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
