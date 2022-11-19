import React from 'react'

class AddContact extends React.Component {
  render() {
        return (
            <div className='main'>
              <h4>Add Contact</h4>
                <form className='form'>
                  <div className='field'>
                      <label>Name: </label>
                      <input type='text' name='name' placeholder='Name' />
                  </div>
                  <br/>
                  <div className='field'>
                      <label>Email: </label>
                      <input type='text' name='email' placeholder='Email' />
                  </div>
                  <br/>
                  <div className='field'>
                      <label>Address: </label>
                      <input type='text' name='address' placeholder='Address' />
                  </div>
                  <br/>
                  <button>Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact
