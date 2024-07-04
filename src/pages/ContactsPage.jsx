import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactsPage = () => {

	const nav = useNavigate();

	function handleBackButton() {
		nav('/');
	}
	
	return (
		<div className='contact-page-margin'>
			
			<h2>How to contact us</h2>
	
			<div>
     	 		<section>
					{' '}
					<h3>Daniela Dias</h3>
					<a href="https://www.linkedin.com/in/daniela-dias-604926243/">
						<p className='li-github-link'>Linkedin</p>
					</a>
					<a href="https://github.com/Dani-A-Dias">
						<p className='li-github-link'>Github</p>
					</a>
				</section>
				<section>
					<br/>
					<h3>Renan Castro</h3>
					<a href="">
						<p className='li-github-link'>Linkedin</p>
					</a>
					<a href="https://github.com/renanjazz">
						<p className='li-github-link'>Github</p>
					</a>
				</section>
				<section>
					{' '}
					<br/>
					<h3>Jonathan Hingorani</h3>
					<a href="">
						<p className='li-github-link'>Linkedin</p>
					</a>
					<a href="https://github.com/jonathanhingorani">
						<p className='li-github-link'>Github</p>
					</a>
				</section>
				<br/>
				<h3>Our project repositories</h3>
				<a href="https://github.com/renanjazz/myestro-match-frontend">
				<p className='li-github-link'>Myestro Front-end</p>
				</a>
				<a href="https://github.com/Dani-A-Dias/myestro-match-backend">
				<p className='li-github-link'>Myestro Back-end</p>
			</a>
			</div>
			<br/>
			<br/>
			<div className="book-back-box">
			<button className="book-back-button" onClick={handleBackButton}>Back</button>
			</div>
			<br />
			<br />
		</div>
		
	);
};

export default ContactsPage;
