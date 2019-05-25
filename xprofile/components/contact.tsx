import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import settings from '../settings.json'

function Contact() {
    const [ name, setName ] = useState('');
    const [ mobile, setMobile ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ message, setMessage ] = useState('');
	return (
		<div>
			<AddressDetails>
				<h1>Contact details</h1>
				<div> {contactDetails.address1}</div>
				<div>{contactDetails.address2}</div>
				<div>{contactDetails.nearLocation}</div>
				<div>{contactDetails.district}</div>
				<div>{contactDetails.pin}</div>
				<div>{contactDetails.phone}</div>
				<div>{contactDetails.email}</div>
			</AddressDetails>
			<h2>Directly mail to me</h2>
			<div>
				<Form onSubmit={sendEmail}>
					<table>
						<tbody>
							<tr>
								<td>
									<label>
										Your name: <span className='required'>*</span>
									</label>
								</td>
								<td >
									<input
										type="text"
										required
										name="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</td>
							</tr>
							<tr>
								<td>
									<label>Your mobile: <span className='required'>*</span></label>
								</td>
								<td>
									<input type="text" pattern="[0-9]*" required name="mobile" value={mobile} minLength={10} maxLength={10} onChange={e => setMobile(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Your email: <span className='required'>*</span></label>
								</td>
								<td>
									<input type="email" required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" value={email} onChange={e => setEmail(e.target.value)} />
								</td>
							</tr>
							<tr>
								<td>
									<label>Message: <span className='required'>*</span></label>
								</td>
								<td>
									<textarea required rows={6} name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
								</td>
							</tr>
							<tr>
                                <td></td>
								<td>
									<button type="submit" className="mailButton">Submit</button>
								</td>
							</tr>
						</tbody>
					</table>
                    <div className='notes'> Fields marked with <span className='required'>*</span> are required</div>
				</Form>
				
			</div>
		</div>
    );
    
    function sendEmail(evt) {
        evt.preventDefault();
        const data = {
            subject: `Message from Sushant Agrawal's profile`,
            // text: 'From: '.concat(email, '\r\n', 'Name: ', name, '\r\n', 'Mobile: ', mobile, '\r\n', 'Message: ', message)
            text:`From: ${email},\r\nName: ${name}\r\nMobile: ${mobile}\r\nMessage: ${message}`
        };
    
        axios.post(settings.emailHost, data)
            .then(() => resetForm())
            .catch(err => console.log(err));
    }

    function resetForm() {
		setName("");
		setMobile("");
		setEmail("");
		setMessage("");
	}
}



const AddressDetails = styled.div`
	margin-top: 0.5em;
`;
const Form = styled.form`
	.required {
		color: red;
	}
    input{
        min-width:200px;
    }
    textarea{
        min-width:200px;
        margin-top: 1rem;
    }
    .notes{
        font-size:0.9rem;
    }
`;

const contactDetails = {
	address1: '92/2A Bidhan Nagar Road',
	address2: '1st floor, Concord towers',
	nearLocation: 'Near Ultadanga More',
	district: 'Kolkata, West bengal, India',
	pin: 'Pin: 700067',
	phone: 'Mobile: +91 8910 322267',
	email: 'Email: capitalch@gmail.com'
};

export default Contact;
