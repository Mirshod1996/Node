import "./TodoItem.scss";

const TodoItem = ({
  axios,
  baseURL,
  setTodos,
  index,
  name,
  gender,
  age,
  where,
  id,
}) => {
  function removeTodo() {
    axios.delete(`${baseURL}/${id}`).then(() => {
      alert("Post deleted!");
      setTodos(null);
    });
  }
  return (
    <div className="item">
      <p>{index}</p>
      <p className="gender">{gender}</p>
      <p className="name">{name}</p>
      <p className="age">{age}</p>
      <p className="where">{where}</p>
      <span className="delete" onClick={removeTodo}>
        &times;
      </span>
    </div>
  );
};

export default TodoItem;
