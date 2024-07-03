import React from 'react';
import { useNavigate } from 'react-router-dom';

const TermsOfServicePage = () => {
    const nav = useNavigate();

	function handleBackButton() {
		nav('/');
	}
	return (
		<div className='general-page-margin'>
			<h1>DRJ Industries Terms of Service</h1>
			<h3>Effective Date: 03 of July of 2024</h3>
			<p>
				Welcome to DRJ Industries. By accessing or using our services, you agree
				to be bound by these Terms of Service ("Terms"). Please read them
				carefully.
			</p>
            <hr className='hr-general'/>
			<p>
				<strong>1. Introduction</strong>
			</p>
			<p>
				1.1 DRJ Industries ("Company," "we," "us," "our") provides an online
				platform that facilitates the scheduling of lessons with teachers and
				the booking of studio spaces (the "Service").
			</p>
			<p>
				1.2 These Terms govern your use of our Service, including any updates,
				new features, or modifications.
			</p>
            <br />
			<p>
				<strong>2. User Accounts</strong>
			</p>
			<p>
				2.1 To use our Service, you must create an account and provide accurate
				and complete information.
			</p>
			<p>
				2.2 You are responsible for maintaining the confidentiality of your
				account information and for all activities that occur under your
				account.
			</p>
            <br />
			<p>
				<strong>3. Payments</strong>
			</p>
			<p>
				3.1 All payments for lessons and studio bookings are made directly to
				the respective teacher or studio ("Service Providers"). DRJ Industries
				does not handle or process payments between users and Service Providers.
			</p>
			<p>
				3.2 Service Providers are responsible for setting their own fees and
				payment terms.
			</p>
            <br />
			<p>
				<strong>4. Booking and Cancellation</strong>
			</p>
			<p>
				4.1 Users can schedule and manage their bookings through the "My
				Schedule" page.
			</p>
			<p>
				4.2 You may cancel or archive your bookings via the "My Schedule" page:
			</p>
			<ul>
				<li>
					<strong>Cancel Booking/Class:</strong> Cancelling a booking will terminate the reservation
					and any associated obligations.
				</li>
				<li>
					<strong>Archive Booking/Class:</strong> Archiving a booking will stop the reservation from
					occurring but will retain the record for future reference.
				</li>
			</ul>
			<p>4.3 Please note that Service Providers may have their own cancellation
			policies, which will apply in addition to these Terms.</p>
            <br />
			<p>
				<strong>5. User Conduct</strong>
			</p>
			<p>
				5.1 You agree to use the Service in compliance with all applicable laws
				and regulations.
			</p>
			<p>5.2 You are prohibited from using the Service to:</p>
			<ul>
				<li>Violate any local, state, national, or international law.</li>
				<li>
					Infringe upon the rights of others, including intellectual property
					rights.
				</li>
				<li>Engage in harmful, abusive, or fraudulent activities.</li>
			</ul>
            <br />
			<p>
				<strong>6. Intellectual Property</strong>
			</p>
			<p>
				6.1 All content and materials available through the Service, including
				but not limited to software, text, graphics, and logos, are the property
				of DRJ Industries or its licensors and are protected by copyright and
				other intellectual property laws.
			</p>
			<p>
				6.2 You are granted a limited, non-exclusive, non-transferable license
				to access and use the Service for your personal, non-commercial use.
			</p>
            <br />
			<p>
				<strong>7. Disclaimers and Limitation of Liability</strong>
			</p>
			<p>
				7.1 The Service is provided "as is" and "as available" without any
				warranties of any kind, either express or implied.
			</p>
			<p>
				7.2 DRJ Industries does not guarantee the accuracy, completeness, or
				usefulness of any information provided through the Service.
			</p>
			<p>
				7.3 To the fullest extent permitted by law, DRJ Industries will not be
				liable for any indirect, incidental, special, consequential, or punitive
				damages, or any loss of profits or revenues, whether incurred directly
				or indirectly, or any loss of data, use, goodwill, or other intangible
				losses, resulting from:
			</p>
			<ul>
				<li>Your use of or inability to use the Service.</li>
				<li>
					Any unauthorized access to or use of our servers and/or any personal
					information stored therein.
				</li>
				<li>
					Any errors or omissions in any content or for any loss or damage
					incurred as a result of the use of any content posted, emailed,
					transmitted, or otherwise made available through the Service.
				</li>
			</ul>
            <br />
			<p>
				<strong>8. Changes to the Terms</strong>
			</p>
			<p>
				8.1 We may update these Terms from time to time. We will notify you of
				any changes by posting the new Terms on our website.
			</p>
			<p>
				8.2 Your continued use of the Service after the changes take effect
				constitutes your acceptance of the new Terms.
			</p>
            <br />
			<p>
				<strong>9. Contact Information</strong>
			</p>
			<p>
				9.1 If you have any questions about these Terms, please contact us at
				any of the platforms provided on Contact us page.
			</p>
			<hr className='hr-general'/>
			<h3>
				By using our Service, you acknowledge that you have read, understood,
				and agree to be bound by these Terms of Service.
			</h3>
            <br />
			<div className="book-back-box">
			<button className="book-back-button" onClick={handleBackButton}>Back</button>
			</div>
			<br />
		</div>
	);
};

export default TermsOfServicePage;
