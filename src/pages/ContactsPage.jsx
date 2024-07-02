import React from 'react';

const ContactsPage = () => {
	return (
		<div className='contact-page-margin'>
			
			<h2>How to contact us</h2>
			<h3>Repositories</h3>
			<a href="https://github.com/renanjazz/myestro-match-frontend">
				<p>Myestro Front-end</p>
			</a>
			<a href="https://github.com/Dani-A-Dias/myestro-match-backend">
				<p>Myestro Back-end</p>
			</a>
			<div>
      <section>
					{' '}
					<h3>Daniela Dias</h3>
					<a href="https://www.linkedin.com/in/daniela-dias-604926243/">
						<p>Linkedin</p>
					</a>
					<a href="https://github.com/Dani-A-Dias">
						<p>Github</p>
					</a>
				</section>
				<section>
					<h3>Renan Castro</h3>
					<a href="">
						<p>Linkedin</p>
					</a>
					<a href="https://github.com/renanjazz">
						<p>Github</p>
					</a>
				</section>
				<section>
					{' '}
					<h3>Jonathan Hingorani</h3>
					<a href="">
						<p>Linkedin</p>
					</a>
					<a href="https://github.com/jonathanhingorani">
						<p>Github</p>
					</a>
				</section>

			</div>
		</div>
	);
};

export default ContactsPage;
