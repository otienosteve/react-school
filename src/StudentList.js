import React from 'react'
import StudentItem from './StudentItem'

const StudentList = ({students}) => {
  return (
    <div className='container-fluid'>
        <div className='row'> 

        {students?.map(student => <StudentItem id={student.id} {...student} />)}
        </div>
    </div>
  )
}

export default StudentList