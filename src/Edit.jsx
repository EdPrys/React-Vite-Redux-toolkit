import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./UserReducer";

const Edit = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const exitingUser = users.filter((f) => f.id == id);
  const { name, email } = exitingUser[0];
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: editName,
        email: editEmail,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h2>Edit user</h2>
        <form onSubmit={handleEdit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={editEmail}
              onChange={(e) => setEditEmail(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-info">Edit</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
