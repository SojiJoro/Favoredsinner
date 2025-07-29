export default function ContactPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* Contact Header */}
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
          Contact
        </h1>
        <p style={{
          fontSize: '20px',
          color: '#657786',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Ready to work together? Have a question? Let&apos;s talk.
        </p>
      </section>
      
      {/* Contact Content */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 24px 80px',
        textAlign: 'center'
      }}>
        {/* Email Box */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '48px',
          maxWidth: '500px',
          margin: '0 auto 40px',
          boxShadow: '0 8px 24px rgba(29, 161, 242, 0.1)',
          border: '1px solid #e1e8ed'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 24px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #e8f5fe 0%, #1DA1F2 100%)',
            fontSize: '36px'
          }}>
            ✉️
          </div>
          <p style={{
            fontSize: '18px',
            color: '#657786',
            marginBottom: '16px'
          }}>
            Email us at:
          </p>
          <a 
            href="mailto:info@favoredsinner.com" 
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#1DA1F2',
              textDecoration: 'none',
              display: 'inline-block',
              padding: '8px 0',
              borderBottom: '2px solid transparent',
              transition: 'all 0.3s ease'
            }}
          >
            info@favoredsinner.com
          </a>
        </div>
        
        <p style={{
          color: '#657786',
          fontSize: '16px',
          marginBottom: '48px'
        }}>
          We typically respond within 24 hours
        </p>
        
        {/* Divider */}
        <div style={{
          width: '100px',
          height: '1px',
          backgroundColor: '#e1e8ed',
          margin: '48px auto'
        }}></div>
        
        {/* Quote Section */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '48px',
          maxWidth: '600px',
          margin: '0 auto',
          border: '1px solid #e1e8ed'
        }}>
          <h2 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: '28px',
            color: '#14171a',
            marginBottom: '16px'
          }}>
            Need a Custom Quote?
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#657786',
            marginBottom: '32px'
          }}>
            Tell us about your project and we&apos;ll create a tailored solution for you.
          </p>
          <a 
            href="/quote" 
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#1DA1F2',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '50px',
              fontWeight: '500',
              textDecoration: 'none',
              fontSize: '16px',
              boxShadow: '0 4px 14px rgba(29, 161, 242, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            Request a Quote
          </a>
        </div>
        
        {/* Social Links (Optional) */}
        <div style={{
          marginTop: '60px',
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          <span style={{
            color: '#657786',
            fontSize: '14px'
          }}>
            Or find us on:
          </span>
          <div style={{
            display: 'flex',
            gap: '16px',
            alignItems: 'center'
          }}>
            <a 
              href="https://twitter.com/favoredsinner" 
              style={{
                color: '#1DA1F2',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Twitter
            </a>
            <span style={{ color: '#e1e8ed' }}>•</span>
            <a 
              href="https://instagram.com/favoredsinner" 
              style={{
                color: '#1DA1F2',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}