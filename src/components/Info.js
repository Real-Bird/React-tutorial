import useInputs from "../hooks/useInputs";

const Info = () => {
  const [state, onChange] = useInputs({
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
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
};

export default Info;
