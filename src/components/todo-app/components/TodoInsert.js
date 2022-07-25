import "./TodoInsert.scss";
import { MdAdd } from "react-icons/md";
import { useCallback, useState } from "react";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      if (value === "") return;
      onInsert(value);
      setValue("");
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요."
        onChange={onChange}
        value={value}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
