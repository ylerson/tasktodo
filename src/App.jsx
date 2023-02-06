import { useState, useEffect } from "react";
import "./App.css";
// 
function App() {
  const [task, setTask] = useState([]);

  const [inputTaskValue, setInputTaskValue] = useState("");

  const handleAddNewTask = ({ key, target }) => {
    if (key !== "Enter") return;

    setTask([...task, { title: target.value, isCheck: false }]);
    setInputTaskValue("");
  };

  const updateChecked =
    (index) =>
    ({ target }) => {
      const newArray = task.map((item, i) => {
        if (index === i) {
          return { ...item, isCheck: target.checked };
        } else {
          return item;
        }
      });

      setTask(newArray);
    };

  return (
    <main>
      <header>
        <h1>Next task today</h1>
        <h2>{[...task].pop()?.title}</h2>
      </header>
      <section className="input_header">
        <input
          name="title"
          value={inputTaskValue}
          onChange={({ target }) => setInputTaskValue(target.value)}
          placeholder="What is your next task?"
          className="input_add_task"
          onKeyPress={(e) => handleAddNewTask(e)}
        />
        {/* */}
      </section>
      <section className="show_task">
        {task.length <= 0 ? (
          <div className="any_task">
            <p>Any Task</p>
          </div>
        ) : (
          task.map((tasks, index) => {
            return (
              <div
                className={"card_task"}
                style={{
                  backgroundColor: tasks.isCheck ? "#8d99ae" : "white",
                  textDecoration: tasks.isCheck ? "line-through" : "none",
                }}
                key={index}
              >
                <p>{tasks.title} </p>

                <input
                  type="checkbox"
                  className="input_check_task"
                  onChange={updateChecked(index)}
                />
              </div>
            );
          })
        )}
      </section>
    </main>
  );
}

export default App;
