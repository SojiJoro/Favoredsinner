export default function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* Terms Header */}
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
          Terms of Service
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
              Agreement to Terms
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              By accessing or using Favored Sinner&apos;s website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Services
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              Favored Sinner provides digital services including but not limited to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Web design and development</li>
              <li style={{ marginBottom: '8px' }}>Graphics design and branding</li>
              <li style={{ marginBottom: '8px' }}>Cloud infrastructure management</li>
              <li style={{ marginBottom: '8px' }}>Cybersecurity services</li>
              <li style={{ marginBottom: '8px' }}>IT support and consultation</li>
            </ul>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              Specific terms for each service will be outlined in individual service agreements or statements of work.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              User Obligations
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              When using our services, you agree to:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Provide accurate and complete information</li>
              <li style={{ marginBottom: '8px' }}>Maintain the security of your account credentials</li>
              <li style={{ marginBottom: '8px' }}>Comply with all applicable laws and regulations</li>
              <li style={{ marginBottom: '8px' }}>Not use our services for any unlawful or prohibited purpose</li>
              <li style={{ marginBottom: '8px' }}>Not interfere with or disrupt our services or servers</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Payment Terms
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              Payment terms will be specified in individual service agreements. Generally:
            </p>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
              <li style={{ marginBottom: '8px' }}>Fees are due as specified in the service agreement</li>
              <li style={{ marginBottom: '8px' }}>Late payments may incur additional fees</li>
              <li style={{ marginBottom: '8px' }}>We reserve the right to suspend services for non-payment</li>
              <li style={{ marginBottom: '8px' }}>Refunds are handled on a case-by-case basis as outlined in service agreements</li>
            </ul>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Intellectual Property
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              All content on our website, including text, graphics, logos, and software, is the property of Favored Sinner or its content suppliers and is protected by copyright and intellectual property laws.
            </p>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              For commissioned work, intellectual property rights will be transferred to the client upon full payment, unless otherwise specified in the service agreement.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Confidentiality
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We maintain strict confidentiality regarding client projects and information. Both parties agree not to disclose confidential information without prior written consent, except as required by law.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Limitation of Liability
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              To the fullest extent permitted by law, Favored Sinner shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of our services.
            </p>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              Our total liability for any claims arising from our services shall not exceed the amount paid by you for the specific service in question.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Service Availability
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We strive to maintain high availability of our services but cannot guarantee uninterrupted access. We reserve the right to modify, suspend, or discontinue any part of our services with reasonable notice.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Termination
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              Either party may terminate service agreements according to the terms specified in individual contracts. We reserve the right to terminate or suspend access to our services immediately for violations of these terms.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Changes to Terms
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section style={{ marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Governing Law
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 style={{
              fontSize: '24px',
              fontFamily: 'Playfair Display, serif',
              color: '#14171a',
              marginBottom: '16px'
            }}>
              Contact Information
            </h2>
            <p style={{ fontSize: '16px', color: '#14171a', marginBottom: '16px' }}>
              For questions about these Terms of Service, please contact us at:
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
