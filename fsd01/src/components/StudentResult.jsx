import { useState } from 'react'
import StudentInfo from './StudentInfo'

const StudentResult = (props) => {
  const [resultData, setResultData] = useState({
    total: null,
    percentage: null,
    result: ''
  });

  const calculate = () => {
    if (!props.marks) return;

    let arr = props.marks.trim().split(" ");
    let n = arr.length;
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += Number(arr[i]);
    }

    let percentage = n > 0 ? total / n : 0;
    let result = "Fail";

    if (percentage >= 75) {
      result = "Distinction";
    } else if (percentage >= 60) {
      result = "First Class";
    } else if (percentage >= 50) {
      result = "Second Class";
    }

    setResultData({
      total: total,
      percentage: percentage.toFixed(2),
      result: result
    });
  }

  return (
    <div>
      <StudentInfo name={props.name} marks={props.marks} />
      <button onClick={calculate}>Calculate</button>
      {resultData.total !== null && (
        <div>
          <p><strong>Total:</strong> {resultData.total}</p>
          <p><strong>Percentage:</strong> {resultData.percentage}%</p>
          <p><strong>Result:</strong> {resultData.result}</p>
        </div>
      )}
    </div>
  )
}

export default StudentResult
