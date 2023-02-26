import { useState } from "react";

export default function useTask() {
  const [task, setTask] = useState([]);

  const handleAddNewTask = (e) => {
    e.preventDefault();
    setTask([...task, { title: e.target[0].value, isCheck: false }]);
    e.target.reset();
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

  return { updateChecked, handleAddNewTask, task };
}
