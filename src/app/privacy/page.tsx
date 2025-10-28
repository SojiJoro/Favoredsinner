export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* Privacy Header */}
      <section style={{
        background: 'linear-gradient(to bottom, #e8f5fe 0%, #fafbfc 100%)',
        padding: '80px 0 40px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontFamily: 'Playfair Display, serif',
          fontWeight: 'bold',
          color: '#14171a',
          marginBottom: '16px'
        }}>
          Privacy Policy
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#657786'
        }}>
          Last updated: January 2025
        </p>
      </section>

      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 24px 80px'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '60px 48px',
          boxShadow: '0 8px 24px rgba(29, 161, 242, 0.08)',
          border: '1px solid #e1e8ed',
          lineHeight: '1.8'
        }}>
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Introduction
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              Favored Sinner (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Information We Collect
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We collect information that you provide directly to us, including:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Name and contact information (email, phone number)</li>
              <li style={{ marginBottom: '8px' }}>Information submitted through quote requests or contact forms</li>
              <li style={{ marginBottom: '8px' }}>Communication preferences</li>
              <li style={{ marginBottom: '8px' }}>Payment information (processed securely through third-party payment processors)</li>
            </ul>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We automatically collect certain information when you visit our website, including:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Browser type and version</li>
              <li style={{ marginBottom: '8px' }}>IP address</li>
              <li style={{ marginBottom: '8px' }}>Pages visited and time spent on pages</li>
              <li style={{ marginBottom: '8px' }}>Referring website addresses</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              How We Use Your Information
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We use the information we collect to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Provide, maintain, and improve our services</li>
              <li style={{ marginBottom: '8px' }}>Respond to your inquiries and fulfill your requests</li>
              <li style={{ marginBottom: '8px' }}>Send you service-related communications</li>
              <li style={{ marginBottom: '8px' }}>Process transactions and send related information</li>
              <li style={{ marginBottom: '8px' }}>Monitor and analyze usage patterns and trends</li>
              <li style={{ marginBottom: '8px' }}>Detect, prevent, and address technical issues or fraudulent activity</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Information Sharing
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>With service providers who assist us in operating our website and conducting our business</li>
              <li style={{ marginBottom: '8px' }}>When required by law or to protect our rights</li>
              <li style={{ marginBottom: '8px' }}>With your consent or at your direction</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Data Security
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Your Rights
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              You have the right to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Access the personal data we hold about you</li>
              <li style={{ marginBottom: '8px' }}>Request correction of inaccurate data</li>
              <li style={{ marginBottom: '8px' }}>Request deletion of your data</li>
              <li style={{ marginBottom: '8px' }}>Object to processing of your data</li>
              <li style={{ marginBottom: '8px' }}>Request transfer of your data to another service</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Cookies
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Changes to This Policy
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Contact Us
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              If you have questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p style={{ fontSize: '16px', color: '#14171a' }}>
              Email: <a href="mailto:info@favoredsinner.com" style={{ color: '#1DA1F2', textDecoration: 'none' }}>info@favoredsinner.com</a>
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
