import "./TodoListItem.scss";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import { cls } from "../../../libs/util.js";

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem">
      <div
        className={cls("checkbox", checked ? "checked" : "")}
        onClick={() => onToggle(id)}
      >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
