export default function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fafbfc' }}>
      {/* About Header */}
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
          About
        </h1>
      </section>
      
      {/* About Content */}
      <section style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 24px 80px',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '60px 48px',
          boxShadow: '0 8px 24px rgba(29, 161, 242, 0.08)',
          border: '1px solid #e1e8ed'
        }}>
          <p style={{
            fontSize: '28px',
            color: '#14171a',
            marginBottom: '40px',
            fontFamily: 'Playfair Display, serif',
            lineHeight: '1.4'
          }}>
            Favored Sinner is not a name. It&apos;s an idea.
          </p>
          
          <p style={{
            fontSize: '18px',
            color: '#657786',
            marginBottom: '32px',
            lineHeight: '1.8'
          }}>
            I create things that speak louder than words. No biography. Just creativity.
          </p>
          
          <p style={{
            fontSize: '18px',
            color: '#657786',
            marginBottom: '32px',
            lineHeight: '1.8'
          }}>
            In a world of endless self-promotion and personal branding, I choose to let the work speak for itself. 
            Every piece, every project, every pixel is crafted with intention.
          </p>
          
          <p style={{
            fontSize: '18px',
            color: '#657786',
            marginBottom: '48px',
            lineHeight: '1.8'
          }}>
            Some call it art. Some call it service. I call it necessary.
          </p>
          
          {/* Quote Section */}
          <div style={{
            marginTop: '48px',
            paddingTop: '48px',
            borderTop: '2px solid #e8f5fe',
            position: 'relative'
          }}>
            <div style={{
              fontSize: '60px',
              color: '#e8f5fe',
              position: 'absolute',
              top: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              lineHeight: '1'
            }}>
              "
            </div>
            <p style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              color: '#1DA1F2',
              fontStyle: 'italic',
              lineHeight: '1.6',
              padding: '0 20px'
            }}>
              The best way to find yourself is to lose yourself in the service of others.
            </p>
          </div>
        </div>
        
        {/* Additional Philosophy Section */}
        <div style={{
          marginTop: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '32px'
        }}>
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              margin: '0 auto 16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #e8f5fe 0%, #1DA1F2 100%)',
              fontSize: '28px'
            }}>
              🎭
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '20px',
              color: '#14171a',
              marginBottom: '8px'
            }}>
              Anonymous
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#657786',
              lineHeight: '1.6'
            }}>
              Identity is irrelevant when the work speaks volumes
            </p>
          </div>
          
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              margin: '0 auto 16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #e8f5fe 0%, #1DA1F2 100%)',
              fontSize: '28px'
            }}>
              ✨
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '20px',
              color: '#14171a',
              marginBottom: '8px'
            }}>
              Creative
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#657786',
              lineHeight: '1.6'
            }}>
              Every project is an opportunity to push boundaries
            </p>
          </div>
          
          <div style={{
            textAlign: 'center'
          }}>
            <div style={{
              width: '60px',
              height: '60px',
              margin: '0 auto 16px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #e8f5fe 0%, #1DA1F2 100%)',
              fontSize: '28px'
            }}>
              🎯
            </div>
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '20px',
              color: '#14171a',
              marginBottom: '8px'
            }}>
              Intentional
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#657786',
              lineHeight: '1.6'
            }}>
              Purpose-driven design with meaning in every detail
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}