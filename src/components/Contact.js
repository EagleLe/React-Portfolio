import React from 'react'

export const Contact = () => {
    return (
        <div className="container-fluid mybg">
            <div className="container">
            <div className="row ">
                <div className="col-md-8 col-xs-8 mt-3 pt-3 ml-4 pl-4">
                    <h1 className="ml-4 pl-4">Contact Me</h1>

                    <div className="col-md-5 mt-4">
 <p class="subheader subheader--2">Get in Touch with Us</p>

		

</div>  
</div>
 </div> 
 <section id="contact">
			
			<div className="contact-section">
			<div className="container">
				<form className="pb-4">
                    <div className="row">
					<div className="col-md-6 form-line">
			  			<div className="form-group">
			  				<label for="exampleInputUsername">Your name</label>
					    	<input type="text" className="form-control" id="" placeholder=" Enter Name" />
				  		</div>
				  		<div className="form-group">
					    	<label for="exampleInputEmail">Email Address</label>
					    	<input type="email" className="form-control" id="exampleInputEmail" placeholder=" Enter Email id" />
					  	</div>	
					  	<div className="form-group">
					    	<label for="telephone">Mobile No.</label>
					    	<input type="tel" className="form-control" id="telephone" placeholder=" Enter 10-digit mobile no." />
			  			</div>
			  		</div>
			  		<div className="col-md-6">
			  			<div className="form-group">
			  				<label for ="description"> Message</label>
			  			 	<textarea  className="form-control" id="description" placeholder="Enter Your Message"></textarea>
			  			</div>
			  			<div className="mt-4">

			  				<button type="button" className="btn btn-submit btn-primary submit">  Send Message</button>
			  			</div>
			  			
					</div>
                    </div>
				</form>
			</div>
            </div>
		</section>

 </div>
 </div>  
    )
}
