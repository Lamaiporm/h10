const root = ReactDOM.createRoot(document.getElementById("root"));
// let user = { name: 'andy', age: 22}
// let isAdmin = true
// let countNum = 0

// const hdlClick = () => {

//   setCountNum(5)
//   console.log(countNum)
// }

// root.render(
//   <>
//     <h1 className="title">Today : {(new Date()).toDateString()}</h1>
//     <p>Codecamp Academy 01</p>
//     <p> Name : {user.name}</p>
//     <p> Age : {user.age}</p>
//     <p> User : {JSON.stringify(user)}</p>
//     <p> Welcome, {isAdmin ? "Boss" : "Guest"  }</p>
//     { isAdmin ? <h1>Hello, Admin</h1>
//               : <h2>Hi, visitor</h2> }
//     <button onClick={hdlClick} >Click {countNum}</button>
//     <hr />

//     <form>
//       <input />
//     </form>
//   </>
// );

function Counter() {
  return (
    <div className="counter">
      <button>+</button>
      <h2>0</h2>
      <button>-</button>
      <button>C</button>
      <button>X</button>
    </div>
  );
}

function App() {
  return (
    <div className="main">
      <h1 className="title">Today : {new Date().toDateString()}</h1>
      <br />
      <h1 className="Sum">Sum = 0</h1>
      <br />
      <button>Add Couter</button>
      <Counter />
    </div>
  );
}

root.render(<App />);