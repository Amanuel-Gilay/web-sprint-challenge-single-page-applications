import React, { useState, useEffect } from "react";
import Confirmation from "./confirmation";
import Form from "./Form";
import axios from "axios";
import Schema from './schema';
import { Route, Link, Switch } from 'react-router-dom';
//import * as yup from 'yup';
const initialFormValues = {
  name: "",
  size: "",
  peperoni: false,
  sausage: false,
  beacon: false,
  onions: false,
};
const initialFormErrors = {
  name: "",
  size: "",
};
const initialOrder = [];
const initialDisabled = true;
export default function App() {
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const postNewOrder= (newOrder) => {
    axios
      .post("http://buddies.com/api/friends", newOrder)
      .then((res) => {
        setOrder([res.data, ...order]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const inputChange = (name, value) => {
    yup.reach(Schema, name).validate(value).then(() => {
      setFormErrors({...formErrors,[name]: "",});
    }).catch((err) => {
      setFormErrors({...formErrors,[name]: err.errors[0],});
    });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  useEffect(() => {
    Schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      peperoni: formValues.peperoni,
      sausage: formValues.sausage,
      beacon: formValues.beacon,
      onions: formValues.onions,
      instructions: formValues.instructions,
    };
    postNewOrder(newOrder);
  };
  return (
    <div className="container">
      <header>
        <Link to='/'>Home  </Link>
        <Link to ='/order'>  Order</Link>
        <Link to ='/confirmation'>  confirmation</Link>
      </header>
      <Route exact path= '/'>
      <h1>Welcome to Sirak's Pizzeria</h1>
      <Link to = '/order'>
        <button> Order Pizza Here</button>
      </Link>
      </Route>
      <Route path = '/order'>
      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      </Route>
      <Route  exact path = '/confirmation'>
        <Confirmation
          order = {formValues}
        />
      </Route>
    </div>
  );
}
