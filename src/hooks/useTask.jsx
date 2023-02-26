import { useState } from "react";

export default function useTask() {
  const [task, setTask] = useState([]);

  const [inputTaskValue, setInputTaskValue] = useState("");

  const handleAddNewTask = (e) => {
    // if (key !== "Enter") return;
    e.preventDefault();

    setTask([...task, { title: e.target.value, isCheck: false }]);
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

  return { updateChecked, handleAddNewTask, inputTaskValue, task };
}
