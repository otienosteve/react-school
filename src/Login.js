import React from 'react'
import {useFormik} from 'formik'


function Login({loginUser}) {

const formik = useFormik({
initialValues:{
    email:'',
    password:""
}, onSubmit: (values)=>{
console.log(values)
loginUser(values.email, values.password)
}

})

  return (
    <div className='col-md-5'>
        
        <h3>Login</h3>
        <form onSubmit={formik.handleSubmit}>

    <label htmlFor="email">Email</label><input type="text" name="email" onChange={formik.handleChange} id="email" />
    <br /><label htmlFor="password">Password</label><input type="password"  onChange={formik.handleChange} name="password" id="password" />
    <br />
    <input type="submit" value="Submit" />

        </form>

    </div>
  )
}

export default Login