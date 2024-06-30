import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
	const nav = useNavigate();

	function handleBackButton() {
		nav('/');
	}
	return (
		<div>
			<h1>DRJ Industries: A Legacy of Innovation and Inspiration</h1>
			<section>
				<p className="p-indent">
					Founded on July 29, 1954, DRJ Industries has been a beacon of
					innovation in the realm of educational technology and creative spaces.
					Emerging from humble beginnings, the company has grown to become a
					pioneering force in the development of applications that seamlessly
					connect educators and learners with premier studios and learning
					environments.{' '}
				</p>
			</section>
			<br />
			<section>
				<h3>Origins and Vision</h3>
				<p className="p-indent">
					DRJ Industries was established by three visionaries: Daniela, Renan,
					and Jonathan, whose initials form the company's name. United by a
					shared passion for education and technology, they embarked on a
					journey to revolutionize the way people learn and create music.{' '}
				</p>
			</section>
			<br />
			<section>
				<h3>Innovative Products</h3>
				<p className="p-indent">
					The cornerstone of DRJ Industries is its groundbreaking application,
					which facilitates the scheduling of lessons with teachers and the
					booking of studios. This dual functionality caters to a wide array of
					users, from students seeking academic guidance to artists in need of
					creative spaces. The application's user-friendly interface and robust
					features have made it an indispensable tool in educational and
					creative communities.
				</p>
			</section>
			<br />
			<section>
				<h3>Commitment to Excellence</h3>
				<p className="p-indent">
					For over six decades, DRJ Industries has upheld its commitment to
					excellence, continually evolving to meet the changing needs of its
					users. The company's dedication to providing top-tier educational and
					creative solutions has earned it a reputation as a leader in its
					field.
				</p>
			</section>
			<br />
			<section>
				<h3>Legacy and Future</h3>
				<p className="p-indent">
					As DRJ Industries moves forward, it remains steadfast in its mission
					to empower individuals through innovative technology and a deep
					respect for the transformative power of education and creativity. The
					legacy of its founders lives on, and the company continues to draw
					inspiration from the timeless themes of bravery, knowledge, and
					imagination found in Tolkien's works. In every classroom and studio,
					DRJ Industries fosters an environment where learning and creativity
					thrive, making it not just a company, but a community bound by a
					shared love for discovery and artistry.
				</p>
			</section>
			<br />
			<br />
			<button onClick={handleBackButton}>Back</button>
		</div>
	);
};

export default AboutPage;
