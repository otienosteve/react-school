import { useEffect, useState } from "react"
import StudentList from "./StudentList"
import { Route,Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"

function App() {
  const [students, setStudents] = useState([])
        useEffect(()=>{
          fetch('http://127.0.0.1:5000/students',{headers:{
            'Authorization':`Bearer ${localStorage.getItem('token')}`
          }}).then(res => res.json()).then(data=> {
            setStudents(data)
          })
        },[])
  function loginUser(email, password){
    console.log('user logged in ')
    fetch('http://127.0.0.1:5000/login', {method:"POST", 
     headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email:email, password:password})}).then(res=> res.json()).then(data=> 
      {
        console.log(data)
        localStorage.setItem('token',data.token)
        localStorage.setItem('refresh',data.refresh)
      }
    )


  }
  return (
<Routes>
  <Route path='/' element={<Home />}/>
<Route path='login' element={<Login loginUser={loginUser} />}/>
<Route path ='/students' element={<StudentList students={students} />} />
</Routes>
  
  );
}

export default App;
