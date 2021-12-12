import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import settings from '../settings.json'

function Contact() {
	const [name, setName] = useState('');
	const [mobile, setMobile] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	return (
		<div>
			<AddressDetails>
				<h3>Contact details of Sushant Agrawal</h3>
				<div> {contactDetails.address1}</div>
				<div>{contactDetails.address2}</div>
				<div>{contactDetails.nearLocation}</div>
				<div>{contactDetails.district}</div>
				<div>{contactDetails.pin}</div>
				<div>{contactDetails.phone}</div>
				<div>{contactDetails.email}</div>
			</AddressDetails>
			<h4>Directly mail to Sushant</h4>
			<div>
				<Form onSubmit={sendEmail}>
					<div>
						<label>
							Your name: <span className='required'>*</span>
						</label>
					</div>
					<div>
						<input
							type="text"
							required
							name="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<br></br>
					<div>
						<label>Your mobile: <span className='required'>*</span></label>
					</div>
					<div>
						<input type="text" pattern="[0-9]*" required name="mobile" value={mobile} minLength={10} maxLength={10} onChange={e => setMobile(e.target.value)} />
					</div>
					<br></br>
					<div>
						<label>Your email: <span className='required'>*</span></label>
					</div>
					<div>
						<input type="email" required pattern="^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$" name="email" value={email} onChange={e => setEmail(e.target.value)} />
					</div>
					<br></br>
					<div>
						<label>Message: <span className='required'>*</span></label>
					</div>
					<div>
						<textarea required rows={6} name="message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
					</div>
					<br></br>
					<div>
						<button type="submit" className="mailButton">Submit</button>
					</div>
					<div className='notes'> Fields marked with <span className='required'>*</span> are required</div>
				</Form>
			</div>
		</div>
	);

	function sendEmail(evt:any) {
		evt.preventDefault();
		const data = {
			subject: `Message from Sushant Agrawal's profile`,
			text: `From: ${email},\r\nName: ${name}\r\nMobile: ${mobile}\r\nMessage: ${message}`
		};

		axios.post(settings.emailHost, data)
			.then(() => resetForm())
			.catch(
				err => {
					console.log(err);
				}
			);
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
	width:100%;
`;
const Form = styled.form`
	.required {
		color: red;
	}
    input{
		width: 100%;
		font-size:1rem;
		line-height: 1.3rem;
    }
    textarea{
		width:100%;
		font-size:1rem;
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
