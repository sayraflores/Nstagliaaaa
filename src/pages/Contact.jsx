import React from 'react'

const Contact = () => {
  return (
    <div>

<video autoPlay muted loop id="nstalgiaVideo">
<source src="images/nstalgia.MP4" type="video/mp4"></source>
 
</video>
    
<form className="my-form">
    <div className="form-group">
     <label>First Name</label>
     <textarea name="lastname"></textarea>
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
  
  <input type="submit" name="submit" value="Submit"></input>
    </form>
    

</div>



 
  )
}

export default Contact