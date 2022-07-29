const TodoItem = ({
  axios,
  todos,
  setTodos,
  index,
  name,
  gender,
  age,
  where,
  id,
}) => {
  const baseURL = "http://localhost:5000/person/";

  function removeTodo(id) {
    axios.delete(`${baseURL}${id}`).then((response) => {
      alert("Post deleted!");
      setTodos(response.data.data);
      console.log(response.data);
    });
    console.log(id);
  }
  return (
    <div className="item">
      <p>{index + 1}</p>
      <p className="gender">{gender}</p>
      <p className="name">{name}</p>
      <p className="age">{age}</p>
      <p className="where">{where}</p>
      <span className="delete">!</span>
      <span
        className="delete"
        onClick={() => {
          removeTodo(id);
        }}
      >
        &times;
      </span>
    </div>
  );
};

export default TodoItem;
