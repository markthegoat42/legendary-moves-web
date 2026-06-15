import LegalPage from '@/components/LegalPage';

export const metadata = {
  title: 'Disclaimer - Legendary Moves',
  description: 'Educational purpose and no-guarantee disclaimer for Legendary Moves.',
};

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" lastUpdated="[EFFECTIVE DATE]">
      <p className="legal-intro">
        Legendary Moves provides education and guidance for student-athletes and their families. The information and
        services we offer are for general educational purposes. Please read this Disclaimer carefully before relying on
        anything provided through our Site, events, or Services.
      </p>

      <h2>No Guarantee of Results</h2>
      <p>
        We do not guarantee, promise, or warrant any specific outcome. This includes, without limitation, college
        recruitment, scholarship offers, roster spots, athletic or academic admission, NIL deals, or financial results.
        Recruiting outcomes depend on many factors outside our control &mdash; including an athlete&rsquo;s ability,
        performance, academics, work ethic, health, timing, and the independent decisions of coaches, schools, and third
        parties. Participation in our Symposium or use of our Services is not a substitute for an athlete&rsquo;s own
        effort and does not ensure any result.
      </p>

      <h2>Educational Information Only</h2>
      <p>
        Our content explains how recruiting, NCAA divisions, NIL, highlight film, social media, and related topics
        generally work. It is general information, not individualized advice for your specific situation. You are
        responsible for your own decisions and for verifying current rules, deadlines, and eligibility requirements with
        the relevant schools, athletic associations, and governing bodies.
      </p>

      <h2>Not Professional Advice</h2>
      <p>
        Nothing we provide is legal, financial, tax, or professional advice. Our NIL and financial-literacy content is
        educational only. For advice about your specific circumstances &mdash; including contracts, taxes, or NIL
        agreements &mdash; consult a qualified licensed professional.
      </p>

      <h2>No Affiliation or Endorsement</h2>
      <p>
        Legendary Moves is an independent organization. Unless expressly stated, we are not affiliated with, endorsed by,
        or sponsored by the NCAA, NAIA, NJCAA, any conference, any university or college, or any professional sports
        league or team. References to these organizations are for informational and educational purposes only.
      </p>

      <h2>Relationship with Offense-Defense Football Camps</h2>
      <p>
        Our Symposium is presented in connection with camps operated by Offense-Defense Football Camps, which is a
        separate and independent organization. We are not responsible for the camps, their content, their staff, or the
        outcomes of any camp. Camp registration and any camp-related claims are between you and Offense-Defense.
      </p>

      <h2>Testimonials and Success Stories</h2>
      <p>
        Any athlete stories, testimonials, or results shown on our Site are examples of individual experiences. They are
        not typical, not a prediction, and not a promise of what any athlete will achieve. Individual results vary, and
        appearing in or completing our Services does not mean similar results will occur for you or your athlete.
      </p>

      <h2>Assumption of Responsibility</h2>
      <p>
        By using our Site and Services, you acknowledge and agree that you rely on the information and Services at your
        own discretion and risk, and that Legendary Moves is not liable for decisions you make based on them, to the
        fullest extent permitted by law. This Disclaimer should be read together with our{' '}
        <a href="/terms">Terms of Use</a>.
      </p>

      <h2>Contact Us</h2>
      <p>Questions about this Disclaimer? Contact Legendary Moves at info@mylegendarymoves.com.</p>
    </LegalPage>
  );
}
