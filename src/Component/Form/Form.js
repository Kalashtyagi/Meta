import React, { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [score, setScore] = useState(10);
  const [comment, setComment] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setName("");
    alert("form submitted");
  }

  function handleFeedback(e) {
    e.preventDefault();
    if (Number(score) <= 5 && comment.length <= 10) {
      alert("Please provide a comment why the experience was poor");
      return;
    }
    alert("feedback submitted");
    setScore("10");
    setComment("");
  }
  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="field">
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                type="text"
                placeholder="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button disabled={!name} type="submit">
              Submit
            </button>
          </fieldset>
        </form>
        <form onSubmit={handleFeedback}>
          <fieldset>
            <div>
              <h1>FeedBack Form</h1>
              <label>Score:{score}⭐</label>
              <input
                type="range"
                value={score}
                min="0"
                max="10"
                onChange={(e) => setScore(e.target.value)}
              />
            </div>
            <label>Comment:</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              //   required
            />
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default ControlledForm;
