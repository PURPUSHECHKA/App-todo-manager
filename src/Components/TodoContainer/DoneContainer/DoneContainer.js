import { useSelector, useDispatch } from "react-redux";
import "./DoneContainer.css";

import { removeDoneCurrentText } from "../../../redux/reducers/MyDoneText";

import { addInputTextToDo } from "../../../redux/reducers/MyTodoText";
import { addInputTextDoing } from "../../../redux/reducers/MyDoingText";


const DoneContainer = () => {
  const dispatch = useDispatch();
  const { arrayOfDoneTasks } = useSelector((s) => s.myDoneText);

  const removeTask = (currentTask) => {
    const removeText = arrayOfDoneTasks.filter(
      ({ id }) => id !== currentTask.id
    );
    dispatch(removeDoneCurrentText(removeText));
  };
   const moveTaskToDo = (currentTask) => {
     dispatch(addInputTextToDo(currentTask.text));
     const removeText = arrayOfDoneTasks.filter(
       ({ id }) => id !== currentTask.id
     );
     dispatch(removeDoneCurrentText(removeText));
   };
   const moveTaskToDoing = (currentTask) => {

     dispatch(addInputTextDoing(currentTask.text));

     const removeText = arrayOfDoneTasks.filter(
       ({ id }) => id !== currentTask.id

     );

     dispatch(removeDoneCurrentText(removeText));
   };

  return (
    <div className="done-wrapper">
      DONE
      {arrayOfDoneTasks.length > 0 ? (
        <div className="done-wrapper-tasks">
          {arrayOfDoneTasks.map((task) => {
            return (
              <div key={task.id} className="done-wrapper-tasks__content">
                <div
                  className="done-wrapper-tasks__text-container"
                  lang="en-US"
                >
                  <span className="done-wrapper-tasks__text-date">
                    {task.date.split(" ")[3]} {task.date.split(" ")[4]}
                  </span>
                  <span className="done-wrapper-tasks__text">{task.text}</span>
                </div>
                <div className="done-wrapper-tasks__buttons-container">
                  <div className="done-wrapper-tasks__buttons-container-move">
                    <button
                      className="done-wrapper-tasks__button-move "
                      onClick={() => moveTaskToDo(task)}
                      type="button"
                    >
                      TO-DO
                    </button>
                    <button
                      className="done-wrapper-tasks__button-move "
                      onClick={() => moveTaskToDoing(task)}
                      type="button"
                    >
                      DOING
                    </button>
                  </div>
                  <button
                    className="done-wrapper-tasks__button-delete "
                    onClick={() => removeTask(task)}
                    type="button"
                  >
                    🗑
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="done-wrapper-empty">Empty</div>
      )}
    </div>
  );
};

export default DoneContainer;
