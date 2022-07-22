import React, { useMemo, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

function Average() {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const onChange = ({ target: { value } }) => {
    setNumber(value);
  };
  const onInsert = () => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
  };

  const avg = useMemo(() => getAverage(list), [list]);
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))}
      </ul>
      <div>
        <span>
          <strong>평균값:</strong>
          {avg}
        </span>
      </div>
    </div>
  );
}

export default Average;