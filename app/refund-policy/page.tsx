import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Refund & Cancellation Policy - Legendary Moves',
  description: 'Refund, transfer, and cancellation terms for the Legendary Moves Symposium.',
};

// NOTE FOR THE OWNER: the specific windows below (7 days, transfers, no-shows) are
// business decisions, not legal requirements. Adjust them to whatever you actually
// want to honor, then keep them consistent with what you tell Stripe and customers.

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund & Cancellation Policy" lastUpdated="June 12, 2026">
      <p className="legal-intro">
        This policy explains refunds, transfers, and cancellations for the Recruiting &amp; Player Development Symposium
        offered by Legendary Moves. By registering and paying, you agree to these terms.
      </p>

      <h2>Symposium Fee</h2>
      <p>
        The Symposium fee is $50 per athlete and is charged at the time of registration through our payment provider,
        Stripe. Registration is confirmed only once payment is received.
      </p>

      <h2>Refunds</h2>
      <ul>
        <li>
          <strong>7 or more days before the event:</strong> You may request a full refund of your registration fee.
        </li>
        <li>
          <strong>Within 7 days of the event:</strong> Refunds are not available, but your registration may be
          transferred (see below).
        </li>
        <li>
          <strong>No-shows:</strong> Registrations that are not used and not transferred are non-refundable.
        </li>
      </ul>

      <h2>Transfers</h2>
      <p>
        If you cannot attend the date you registered for, you may, subject to availability, transfer your registration
        to the other city, to a future Symposium, or to a different athlete. Transfer requests must be made before the
        event date by emailing us. Transfers are subject to available seats at the requested location.
      </p>

      <h2>If We Cancel or Reschedule</h2>
      <p>
        If Legendary Moves cancels the Symposium, or reschedules it to a date you cannot attend, you will be offered a
        full refund of your registration fee or a transfer to another date or city, at your choice. We are not
        responsible for any travel, lodging, or other costs you may incur in connection with the event.
      </p>

      <h2>How to Request a Refund or Transfer</h2>
      <p>
        Email your request to info@mylegendarymoves.com with the athlete&rsquo;s name, the city and date you registered
        for, and the email used at registration. Approved refunds are issued to the original payment method through
        Stripe and may take several business days to appear, depending on your bank or card issuer.
      </p>

      <h2>Camps Operated by Offense-Defense</h2>
      <p>
        This policy covers the Symposium fee paid to Legendary Moves only. Registration and payment for any
        Offense-Defense Football Camp are handled separately by Offense-Defense and are subject to their own refund and
        cancellation terms.
      </p>

      <h2>Contact Us</h2>
      <p>Questions about this policy? Contact Legendary Moves at info@mylegendarymoves.com.</p>
    </LegalPage>
  );
}
