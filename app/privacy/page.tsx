import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Privacy Policy - Legendary Moves',
  description: 'How Legendary Moves collects, uses, and protects your information.',
};

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="[EFFECTIVE DATE]">
      <p className="legal-intro">
        This Privacy Policy explains how Legendary Moves (&ldquo;Legendary Moves,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
        or &ldquo;our&rdquo;) collects, uses, and shares information when you visit [your-domain.com] (the
        &ldquo;Site&rdquo;) or register for our Recruiting &amp; Player Development Symposium and related services (the
        &ldquo;Services&rdquo;). Legendary Moves is a sole proprietorship operated by [OWNER LEGAL NAME] and based in
        Texas.
      </p>

      <p>
        By using the Site or the Services, you agree to the practices described in this Policy. If you do not agree,
        please do not use the Site or the Services.
      </p>

      <h2>Information We Collect</h2>

      <h3>Information you give us</h3>
      <p>When you register, contact us, or book a call, we may collect:</p>
      <ul>
        <li>Your name and the athlete&rsquo;s name</li>
        <li>Email address and phone number</li>
        <li>The athlete&rsquo;s graduation year, position, school, or city, if you provide it</li>
        <li>Any message or information you choose to send us</li>
      </ul>

      <h3>Payment information</h3>
      <p>
        Payments for the Symposium are processed by our third-party payment provider, Stripe. Your full payment card
        details are entered on Stripe&rsquo;s secure checkout and are handled by Stripe &mdash; we do not collect or store
        your full card number. Stripe&rsquo;s handling of your information is governed by its own privacy policy,
        available at <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">stripe.com/privacy</a>.
      </p>

      <h3>Information collected automatically</h3>
      <p>
        Like most websites, we may automatically collect limited technical information such as your IP address, browser
        type, device information, and pages visited, through cookies and similar technologies. We use this to operate
        and improve the Site. You can set your browser to refuse cookies, though some parts of the Site may not function
        properly.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To register you for the Symposium and manage your attendance</li>
        <li>To process payments and send receipts and confirmations</li>
        <li>To respond to your questions and communicate about the Services</li>
        <li>To send event reminders and, where permitted, updates about future events (you can opt out at any time)</li>
        <li>To operate, maintain, secure, and improve the Site and Services</li>
        <li>To comply with legal obligations and enforce our terms</li>
      </ul>

      <h2>How We Share Your Information</h2>
      <p>
        We do not sell your personal information. We may share information with:
      </p>
      <ul>
        <li>
          <strong>Service providers</strong> who help us operate, such as our payment processor (Stripe), email and
          scheduling tools, and hosting providers, only as needed to perform their services.
        </li>
        <li>
          <strong>Event partners</strong> where necessary to deliver the event you registered for. The camps are
          operated by Offense-Defense Football Camps, a separate organization with its own policies.
        </li>
        <li>
          <strong>Legal and safety</strong> recipients when required by law, to enforce our terms, or to protect the
          rights, property, or safety of any person.
        </li>
      </ul>

      <h2>Children&rsquo;s Privacy</h2>
      <p>
        Our Services involve youth athletes, but they are directed to and intended for use by parents, guardians, and
        adults 18 and older. Registration and payment must be completed by a parent, guardian, or other adult. We do not
        knowingly collect personal information directly from children under 13. If you believe a child under 13 has
        provided us personal information, please contact us at [contact@your-domain.com] and we will delete it.
      </p>

      <h2>Data Retention</h2>
      <p>
        We keep your information only as long as needed for the purposes described here, including to provide the
        Services, meet legal and accounting requirements, and resolve disputes. We then delete or anonymize it.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable administrative and technical measures to protect your information. However, no method of
        transmission or storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>Your Choices and Rights</h2>
      <p>
        You may request to access, correct, or delete the personal information we hold about you, and you may opt out of
        marketing emails at any time using the unsubscribe link or by contacting us. Depending on where you live, you may
        have additional rights under laws such as the California Consumer Privacy Act or the Texas Data Privacy and
        Security Act, including the right to know what we collect and to request deletion. We do not sell personal
        information. To exercise any right, contact us at [contact@your-domain.com].
      </p>

      <h2>Third-Party Links</h2>
      <p>
        The Site may link to third-party websites and services, including Stripe and Offense-Defense Football Camps. We
        are not responsible for the privacy practices or content of those third parties, and we encourage you to read
        their policies.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date above.
        Your continued use of the Site or Services after changes take effect means you accept the updated Policy.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions about this Policy or your information? Contact Legendary Moves at [contact@your-domain.com].
      </p>
    </LegalPage>
  );
}
