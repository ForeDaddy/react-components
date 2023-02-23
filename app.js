// TODO


const { useState } = React;

const GroceryItem = (props) => {
  const [isHover, setIsHover] = useState(false);
  const style = {
    fontWeight: isHover ? 'bold' : 'normal'
  };

  return (
    <li style={style} onMouseEnter={() => setIsHover(!isHover)} onMouseLeave={() => setIsHover(!isHover)}>{props.item}</li>
  )
};


const GroceryList = (props) => (


    <ul>
     {props.items.map((item) => (
      <GroceryItem item={item} />
     ))}
    </ul>
  );


const App = () => {


return (
  <div>
    <h2>Grocery List</h2>
    <GroceryList items={['bread', 'milk', 'cheese']} />

  </div>
)
};

ReactDOM.render(<App />, document.getElementById("app"));



// const { useState } = React;

// const GroceryItem = (props) => {
//   const [newItem, setNewItem] = useState('');
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setNewItem('');
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//     <label for="additem">Add Item to List</label><br></br>
//     <input type="text"
//       id="newItem"
//       name="newItem"
//       placeholder="bread, milk, etc..."
//       value={newItem}
//       onChange={(event) =>
//         setNewItem(event.target.value)
//       }
//     /></input>

//     <button type="submit">Add Item</button>
//    </form>

//   );
// };
// const GroceryListItem = (props) => {
//   const [isDone, setIsDone] = useState(false);
//   const style = {
//     fontWeight: isDone ? 'bold' : 'normal'
//   };

//   return (
//   <li style={style} onMouseEnter={()=> setIsDone(true)} onMouseLeave={()=> setIsDone(false)}>
//   {props.newItem}
//   </li>
//   );
//   };

// const GroceryList = (props) => (



//     <ul>
//       {props.todos.map((todo) => (
//         <GroceryListItem todo={todo} />
//       ))}
//     </ul>
// );



// const App = () => (


//   <div>
//    <h2>Grocery List</h2>
//    <GroceryList todos={['Bread', 'Cheese', 'Milk']} />
//    <GroceryItem />
//   </div>
// );

// ReactDOM.render(<App />, document.getElementById("app"));

// //  <GroceryList todos={} />