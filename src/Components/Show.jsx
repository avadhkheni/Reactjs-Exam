import React, { useState } from "react";
import { app } from "../auth/Firebase";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";

const auth = getAuth(app);

export default function Show() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    country: "",
    address: "",
  });

  const [arr, setArr] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleLogout = () => {
    signOut(auth).then(() => console.log("Signed Out"));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      const updatedArr = [...arr];
      updatedArr[editIndex] = input;
      setArr(updatedArr);
      setIsEdit(false);
      setEditIndex(null);
    } else {
      setArr([...arr, input]);
    }

    setInput({
      name: "",
      email: "",
      password: "",
      address: "",
      country: "",
    });
  };

  const handleDelete = (index) => {
    const filtered = arr.filter((_, i) => i !== index);
    setArr(filtered);
  };

  const handleEdit = (index) => {
    setInput(arr[index]);
    setIsEdit(true);
    setEditIndex(index);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">{isEdit ? "Edit Entry" : "Form"}</h2>
      <form onSubmit={handleFormSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Name"
            value={input.name}
            onChange={(e) => setInput({ ...input, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            value={input.email}
            onChange={(e) => setInput({ ...input, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            value={input.password}
            onChange={(e) => setInput({ ...input, password: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter Address"
            value={input.address}
            onChange={(e) => setInput({ ...input, address: e.target.value })}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <select
            className="form-select"
            value={input.country}
            onChange={(e) => setInput({ ...input, country: e.target.value })}
            required
          >
            <option value="">---Select---</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {isEdit ? "Update" : "Submit"}
        </button>
      </form>

      {arr.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-3">Submitted Data</h4>
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Address</th>
                <th>Country</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>{item.address}</td>
                  <td>{item.country}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="d-flex justify-content-center mt-4">
        <Link onClick={handleLogout} className="btn btn-danger" to="/signin">
          Logout
        </Link>
        {/* <Link className="btn btn-success" to="/">
          SignUp
        </Link> */}
      </div>
    </div>
  );
}
