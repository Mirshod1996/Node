import React from "react";

const TodoList = ({
  setGender,
  setAge,
  setName,
  setWhere,
  addPost,
  age,
  gender,
  name,
  where,
}) => {
  return (
    <div className="box">
      <select
        default={"Gender"}
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <option>Gender</option>
        <option>Mr</option>
        <option>Mrs</option>
      </select>

      <input
        value={name}
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        value={age}
        placeholder="age"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="where"
        value={where}
        onChange={(e) => {
          setWhere(e.target.value);
        }}
      />

      <button onClick={addPost}>add</button>
    </div>
  );
};

export default TodoList;
