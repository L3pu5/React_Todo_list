import { useState } from "react";


export default function Todo_Adder(props) {;
  const [newItem, setNewItem] = useState("");

  function handleOnClick(e) {
    e.preventDefault();
    if (newItem === "") return;
    props.adder(newItem);
    setNewItem("");
  }

    return <> <form className="new-item-form" onSubmit={handleOnClick}>
    <div className="form-row">
      <label htmlFor="item"> New Item</label>
      <input className="new-item-input" type="text" id="item" value={newItem} onChange={e => setNewItem(e.target.value)} ></input>
    </div>
    <div className="form-row">
      <button className="btn" >Add</button>
    </div>
  </form>
  </>
}