import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const Cmdelete = () => {

  const [user, setuser] = useState({})

  const navigate = useNavigate()

  const { registerId } = useParams()

  async function fetchdata() {
    const result = await
      axios.get(`http://localhost:8090/registration/get/${registerId }`)
    setuser(result.data[0])
  }
  useEffect(() => {
    fetchdata()
  },[])

  function Delete() {
    axios.delete(`http://localhost:8090/registration/cmdelete/${registerId }`)
    navigate('/cmlist')

  }
  return (
    <>
      <div style={{paddingTop:'50px'}}>
        <center>
          <form onSubmit={() => (Delete())}>
            <h2> you want to Delete the {user.id} data successfully</h2>
            <input type='submit' value='Yes' className='btn btn-outline-warning col-2'></input>
            <NavLink to={'/cmlist'}><button type='reset' value='no' className='btn btn-outline-danger col-2'>No</button></NavLink>
          </form>
        </center>
      </div>
    </>
  )
}

export default Cmdelete