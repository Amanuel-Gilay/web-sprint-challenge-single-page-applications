import React from "react";
export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;
  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  return (
    <form className="container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <h2>Build Your Own Pizza</h2>
      </div>
      <div>
        <label>
          Name:
            <input name = "name" type ="text"  placeholder = "Enter Your Name" value={values.name} onChange={onChange}/>
        </label>
      </div>
      <div className="form-group inputs">
        <h4>Choose your size</h4>
        <label>
          Select Size
          <select onChange={onChange} value={values.size} name="size">
            <option value="">- Select -</option>
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
            <option value="xl">extra large</option>
          </select>
        </label>
      </div>
      <div className="form-group checkboxes">
        <h4>Add Toppings </h4>
        <label>
          Pepperoni
          <input
            type="checkbox"
            name="peperoni"
            checked={values.pepperoni}
            onChange={onChange}
          />
        </label>
        <label>
          Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={values.sausage}
            onChange={onChange}
          />
        </label>
        <label>
          Beacon
          <input
            type="checkbox"
            name="beacon"
            checked={values.beacon}
            onChange={onChange}
          />
        </label>
        <label>
          onions
          <input
            type="checkbox"
            name="onions"
            checked={values.onions}
            onChange={onChange}
          />
        </label>
      <br/><br/>
        <div>
          <label>
              Instruction:
                <input name = "instructions" type ="text"  value={values.instructions} placeholder = "instructions" onChange ={onChange}/>
          </label>
        </div>
        <br/><br/>
        <button >Add to order</button>
      </div>
    </form>
  );
}