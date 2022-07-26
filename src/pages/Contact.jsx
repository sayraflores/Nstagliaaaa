import React from 'react'

const Contact = () => {
  return (
    <div>

<video autoPlay muted loop id="nstalgiaVideo">
<source src="images/nstalgia.mov" type="video/mp4"></source>
 
</video>
    
<form className="my-form">
    <div className="form-group">
     <label>First Name</label>
     <textarea name="firstname"></textarea>
</div>
  

<div className="form-group">
     <label>Last Name</label>
     <textarea name="lastname"></textarea> 
 </div>
  
  

<div className="form-group">
      <label>Email</label>
     <textarea name="email"></textarea>
  </div>
  


<div  className="form-group">
      <label>Phone Number</label>
     <textarea name="phone number"></textarea>
  </div>



  <div className="form-group">
    
      <label>Message</label>
      <textarea name="message"></textarea>
  </div>
  
  <input type="submit" name="submit" value="submit"></input>
    </form>

</div>



 
  )
}

export default Contact