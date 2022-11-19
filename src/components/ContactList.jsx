import React from 'react'
import ContactCard from './ContactCard';
import Classical from '../img/classical.jpg'
import Folk from '../img/folk.jpg'

const ContactList = (props)  => {
   
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} />
    })

  return (
    <div className='main'>
        <h1>Groups Of Dance Class</h1>
  <h3>Indian Classical Dance</h3>
        <img className='avatar image' src={Classical} alt='Classical' />
            <form className='form'>
    <input type="text" id="filterInput" placeholder="search names.." />
    <ul id="names" class="collection with-header">
        <li class="collection-header">
        <h5>Indian Classcial Dance</h5>
        </li>

        <li class="collection-item">
            <a href="#">Bharatnatyam</a>
        </li>
        <li class="collection-item">
            <a href="#">Kathak</a>
        </li>
        <li class="collection-item">
            <a href="#">Kuchipudi</a>
        </li>
        <li class="collection-item">
            <a href="#">Kathakali</a>
        </li>
        <li class="collection-item">
            <a href="#">Sattriya</a>
        </li>
        <li class="collection-item">
            <a href="#">Odissi</a>
        </li>
        <li class="collection-item">
            <a href="#">Manipuri</a>
        </li>
        <li class="collection-item">
            <a href="#">Mohiniyattam</a>
        </li> 
        </ul>

        <br/>
        <button>Ok</button>  <button>Cancel</button>        
        <br/>

<h3>Indian Folk Dance</h3>
        <img className='avatar image' src={Folk} alt='Folk' /> 
        <input type="text" id="filterInput" placeholder="search names.." />
        <ul id="names" class="collection with-header">
        
        <li class="collection-header">
                <h5>Indian Folk Dance</h5>
           </li>

    <li class="collection-item">
        <a href="#">Vilasini Natyam</a>
    </li>
    <li class="collection-item">
        <a href="#">Bhamakalpam</a>
    </li>
    <li class="collection-item">
        <a href="#">Veeranatyam</a>
    </li>
    <li class="collection-item">
        <a href="#">Dappu</a>
    </li>
    <li class="collection-item">
        <a href="#">Tappeta Gullu</a>
    </li>
    <li class="collection-item">
        <a href="#">Lambadi</a>
    </li>
    <li class="collection-item">
        <a href="#">Dhimsa</a>
    </li> 
    <li class="collection-item">
        <a href="#">Kolattam</a>   
    </li> 
    <li class="collection-item">
      <a href="#">Nautank</a>
    </li> 
    <li class="collection-item">
      <a href="#">Naga dance</a>
    </li> 
    <li class="collection-item">
      <a href="#">Cheraw Dance</a>
    </li> 
  </ul>
                <br/>
                <button>Ok</button>  <button>Cancel</button>
            </form>
                <div className='celled list' style={{ display:"flex" }}>
                <br/>                   
                {renderContactList}
                </div>
    </div>
  )
}

export default ContactList
