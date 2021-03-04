import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function AddMovie({ callbackAdd }) {
  var subtitle;
  // Check If Modal Is Opened Or Closed
  const [modalIsOpen, setIsOpen] = useState(false);
  // Add New Movie
  const [newMoviez, setNewMoviez] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rate: "",
  });
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleChange = (e) => {
    setNewMoviez({ ...newMoviez, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    callbackAdd(newMoviez);
  };
  return (
    <div>
      <button
        id="btn"
        onClick={openModal}
        style={{
          padding: "10px",
          width: "80px",
          backgroundColor: "#fff",
          border: "1px solid #000",
          display: "block",
          margin: "0 auto",
          marginBottom: "15px",
        }}
      >
        Add
      </button>
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2
          style={{ textAlign: "center" }}
          ref={(_subtitle) => (subtitle = _subtitle)}
        >
          Add Your Movie
        </h2>
        <form
          style={{
            display: "flex",
            flexDirection: "Column",
            alignItems: "space-around",
            height: "450px",
            justifyContent: "space-around",
          }}
        >
          <label htmlFor="title">Enter Title : </label>
          <input
            id="title"
            name="title"
            value={newMoviez.title}
            onChange={handleChange}
          />
          <label htmlFor="description">Enter Description : </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            value={newMoviez.description}
            onChange={handleChange}
          />
          <label htmlFor="cover">Upload Cover : </label>
          <textarea
            id="cover"
            rows="5"
            value={newMoviez.posterUrl}
            name="posterUrl"
            onChange={handleChange}
          />
          <label htmlFor="rate">Choose Rating : </label>
          <select
            id="rate"
            name="rate"
            value={newMoviez.rate}
            onChange={handleChange}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <div style={{ textAlign: "center" }}>
            <button
              style={{
                padding: "10px",
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(0, 0, 0)",
                width: "60px",
                margin: "5px",
              }}
              onClick={handleClick}
            >
              Add
            </button>
            <button
              style={{
                padding: "10px",
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(0, 0, 0)",
                width: "60px",
                margin: "5px",
              }}
              onClick={closeModal}
            >
              close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

export default AddMovie;
