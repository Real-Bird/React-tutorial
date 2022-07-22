import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

function Info() {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
    console.log(e.target);
  };
  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <span>
            <strong>이름:</strong> {name}
          </span>
        </div>
        <div>
          <span>
            <strong>닉네임:</strong> {nickname}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;
