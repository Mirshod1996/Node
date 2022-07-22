import { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";

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

  const addPost = () => {
    if (gender === "Mr" || gender === "Mrs") {
      if (name !== "") {
        if (age !== "") {
          if (where !== "") {
            axios
              .post(baseURL, {
                id: new Date(),
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

  return (
    <div>
      <label>
        {/* <Axios /> */}
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
        {todos.map((todo, index) => (
          <TodoItem
            key={todo.id}
            axios={axios}
            baseURL={baseURL}
            setTodos={setTodos}
            index={index}
            {...todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
