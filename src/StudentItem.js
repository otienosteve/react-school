import React from 'react'

const StudentItem = ({id, first_name, email, last_name}) => {
  return (
    <div className='col-md-3 py-3'>
        <div class="card" style={{'width': '18rem'}}>
  
  <div class="card-body">
    <h5 class="card-title">{last_name} - {first_name}</h5>
    <p class="card-text">{email}</p>
   
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
           </div>
  )
}

export default StudentItem