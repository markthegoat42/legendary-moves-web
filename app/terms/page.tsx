import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Terms of Use - Legendary Moves',
  description: 'The terms that govern your use of the Legendary Moves website and services.',
};

export default function TermsOfUse() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="June 12, 2026">
      <p className="legal-intro">
        These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of mylegendarymoves.com (the
        &ldquo;Site&rdquo;) and the services offered by Legendary Moves (&ldquo;Legendary Moves,&rdquo; &ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;), a sole proprietorship operated by Chris Scott in Texas. Please
        read them carefully.
      </p>

      <p>
        By accessing the Site, registering for the Symposium, or otherwise using our services (together, the
        &ldquo;Services&rdquo;), you agree to these Terms. If you do not agree, do not use the Site or the Services.
      </p>

      <h2>Eligibility</h2>
      <p>
        You must be at least 18 years old to register, pay, or enter into these Terms. The Services involve youth
        athletes, but all registration and payment must be completed by a parent, guardian, or other adult acting on the
        athlete&rsquo;s behalf. By registering an athlete, you confirm you are that athlete&rsquo;s parent or legal
        guardian, or have their authorization to register the athlete.
      </p>

      <h2>The Services</h2>
      <p>
        Legendary Moves provides the Recruiting &amp; Player Development Symposium and related educational content,
        covering topics such as recruiting, player development, NCAA divisions, NIL, highlight film, and social media.
        The Symposium is presented in connection with camps operated by Offense-Defense Football Camps, which is a
        separate organization. Registration for the Symposium is separate from registration for any Offense-Defense camp.
      </p>
      <p>
        Our Services are educational. We do not guarantee any recruiting result, scholarship, roster spot, NIL deal, or
        other outcome. Please see our <a href="/disclaimer">Disclaimer</a> for important details.
      </p>

      <h2>Registration and Payment</h2>
      <p>
        The Symposium fee is stated at registration and is processed securely through our payment provider, Stripe. By
        registering, you agree to pay the stated amount and you authorize the charge. All fees are handled according to
        our <a href="/refund-policy">Refund &amp; Cancellation Policy</a>. You are responsible for providing accurate
        registration information.
      </p>

      <h2>Acceptable Use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Use the Site or Services for any unlawful purpose</li>
        <li>Interfere with or disrupt the Site, its security, or its servers</li>
        <li>Attempt to gain unauthorized access to any part of the Site or another user&rsquo;s data</li>
        <li>Copy, resell, or commercially exploit our content without permission</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        All content on the Site &mdash; including text, graphics, logos, video, and the design and layout &mdash; is owned
        by Legendary Moves or its licensors and is protected by intellectual property laws. You may not reproduce,
        distribute, or create derivative works from our content without our prior written permission.
      </p>

      <h2>Third-Party Services and Links</h2>
      <p>
        The Site links to third parties, including Stripe and Offense-Defense Football Camps. We do not control and are
        not responsible for the content, products, services, or practices of those third parties. Your dealings with
        them are solely between you and them.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The Site and Services are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any
        kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and
        non-infringement, to the fullest extent permitted by law. We do not warrant that the Site will be uninterrupted,
        error-free, or secure.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, Legendary Moves and its owner will not be liable for any indirect,
        incidental, special, consequential, or punitive damages, or for any loss of profits or opportunities, arising
        from your use of the Site or Services. Our total liability for any claim relating to the Services will not exceed
        the amount you paid to us for the Services giving rise to the claim.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold harmless Legendary Moves and its owner from any claims, losses, liabilities, and
        expenses (including reasonable attorneys&rsquo; fees) arising out of your use of the Services, your violation of
        these Terms, or your violation of any rights of another person.
      </p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of Texas, without regard to its conflict-of-laws rules. Any
        dispute relating to these Terms or the Services will be brought exclusively in the state or federal courts
        located in Texas, and you consent to their jurisdiction.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. Changes take effect when posted, and we will revise the &ldquo;Last
        updated&rdquo; date above. Your continued use of the Site or Services means you accept the updated Terms.
      </p>

      <h2>Contact Us</h2>
      <p>Questions about these Terms? Contact Legendary Moves at info@mylegendarymoves.com.</p>
    </LegalPage>
  );
}
