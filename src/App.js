import { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [where, setWhere] = useState("");

  const baseURL = "http://localhost:5000/person/";
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setTodos(response.data);
    });
  }, []);

  let newId = todos.length + 1;

  if (todos.length === 0) return "No post!";
  const addPost = () => {
    if (gender === "Mr" || gender === "Mrs") {
      if (name !== "") {
        if (age !== "") {
          if (where !== "") {
            axios
              .post(baseURL, {
                id: newId,
                gender,
                name,
                age,
                where,
              })
              .then((response) => {
                setTodos(response.data);
              });

            setName("");
            setAge("");
            setWhere("");
            setGender("Gender");
          } else {
            alert("write where you are from");
          }
        } else {
          alert("enter your age in numbers");
        }
      } else {
        alert("fill in your name");
      }
    } else {
      alert("choose your gender");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <label>
        <TodoList
          setAge={setAge}
          age={age}
          setGender={setGender}
          gender={gender}
          setName={setName}
          name={name}
          setWhere={setWhere}
          where={where}
          addPost={addPost}
        />
      </label>
      <div>
        {todos?.map((todo, index) => (
          <TodoItem
            key={todo.id}
            axios={axios}
            baseURL={baseURL}
            setTodos={setTodos}
            todos={todos}
            index={index}
            {...todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
