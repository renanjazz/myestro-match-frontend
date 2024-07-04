import React from 'react';
import dani from '../assets/dani.png'
import jonny from '../assets/jonny.png'
import renan from '../assets/renan.png'

const ContactsPage = () => {
	return (
		<div className='contact-page-margin'>
			
			<h2>How to contact us</h2>
			<h3>Repositories</h3>
			<a href="https://github.com/renanjazz/myestro-match-frontend">
				<p className='li-github-link'>Myestro Front-end</p>
			</a>
			<a href="https://github.com/Dani-A-Dias/myestro-match-backend">
				<p className='li-github-link'>Myestro Back-end</p>
			</a>
			<div>
     	 		<section className='section-contacts'>
					{' '}
					<h3>Daniela Dias</h3>
					<div id="contact-picture">
					<img className="teacher-studio-picture" src={dani} alt="daniela" />
					</div>
			
				
					<a href="https://www.linkedin.com/in/daniela-dias-604926243/">
						<p className='li-github-link'>Linkedin</p>
					</a>
					<a href="https://github.com/Dani-A-Dias">
						<p className='li-github-link'>Github</p>
					</a>
				</section>
				
				<section className='section-contacts'>
					<h3>Renan Castro</h3>
					<div id="contact-picture">
					<img className="teacher-studio-picture" src={renan} alt="renan" />
					</div>
					<a href="">
						<p className='li-github-link'>Linkedin</p>
					</a>
					<a href="https://github.com/renanjazz">
						<p className='li-github-link'>Github</p>
					</a>
				</section >
				<section className='section-contacts'>
					{' '}
					<h3>Jonathan Hingorani</h3>
					<div id="contact-picture">
					<img className="teacher-studio-picture" src={jonny} alt="jonny" />
					</div>
					<a href="">
						<p className='li-github-link'>Linkedin</p>
					</a>
					<a href="https://github.com/jonathanhingorani">
						<p className='li-github-link'>Github</p>
					</a>
				</section>

			</div>
		</div>
	);
};

export default ContactsPage;
