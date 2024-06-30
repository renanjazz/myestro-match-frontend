import React from 'react';

const ContactsPage = () => {
	return (
		<div>
			<h1>How to contact us</h1>
			<h3>You can check our repositories in the following links:</h3>
			<a href="https://github.com/renanjazz/myestro-match-frontend">
				<p>Myestro Front-end</p>
			</a>
			<a href="https://github.com/Dani-A-Dias/myestro-match-backend">
				<p>Myestro Back-end</p>
			</a>
			<div>
      <section>
					{' '}
					<h2>Daniela Dias</h2>
					<a href="https://www.linkedin.com/in/daniela-dias-604926243/">
						<p>Linkedin</p>
					</a>
					<a href="https://github.com/Dani-A-Dias">
						<p>Github</p>
					</a>
				</section>
				<section>
					<h2>Renan Castro</h2>
					<a href="">
						<p>Linkedin</p>
					</a>
					<a href="https://github.com/renanjazz">
						<p>Github</p>
					</a>
				</section>
				<section>
					{' '}
					<h2>Jonathan Hingorani</h2>
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
