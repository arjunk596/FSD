import React from 'react'

const StudentInfo = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Marks: {props.marks}</p>
        </div>
    )
}

export default StudentInfo