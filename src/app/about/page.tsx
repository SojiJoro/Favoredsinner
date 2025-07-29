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
          <p style={{
            fontSize: '28px',
            color: '#14171a',
            marginBottom: '24px',
            fontFamily: 'Playfair Display, serif'
          }}>
            Favored Sinner is not a name. It’s a contradiction I live with, a storyteller and a system builder, a digital artist and a DevOps engineer, all rolled into one loud quiet presence.
          </p>
          <p style={{ fontSize: '18px', color: '#14171a', marginBottom: '24px' }}>
            I create things that look like art but behave like infrastructure. Stories that read like burnt memoirs, visuals that stick to your head, platforms that don’t crash when the world shows up.
          </p>
          <p style={{ fontSize: '18px', color: '#14171a', marginBottom: '24px' }}>
            Some days I draw worlds from pixels and emotion.<br />Other days I automate backend deployments and secure cloud infrastructure like it’s poetry.
          </p>
          <p style={{ fontSize: '18px', color: '#14171a', marginBottom: '24px' }}>
            This site is my middle ground.<br />Where surreal art meets solid systems.<br />Where bold tweets meet well-architected platforms.<br />Where stories, code, and design are treated with the same respect.
          </p>
          <p style={{ fontSize: '18px', color: '#14171a', marginBottom: '16px', fontWeight: 'bold' }}>
            I build and offer:
          </p>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginBottom: '24px' }}>
            <li>Surreal digital art for visuals that don’t just decorate, they disturb and inspire</li>
            <li>Web design &amp; UI that tells stories with every scroll</li>
            <li>Digital strategy for creatives and brands who want meaning, not just metrics</li>
            <li>SEO &amp; content planning that respects both bots and humans</li>
            <li>Cloud infrastructure that scales quietly, securely, and efficiently</li>
            <li>DevOps services like CI/CD, monitoring, AWS builds, disaster recovery, backup</li>
            <li>IT support &amp; cybersecurity that’s calm, smart, and silent until it needs to shout</li>
            <li>Social media growth &amp; branding if you want to make noise without sounding forced</li>
            <li>CV review &amp; career support especially for dyslexic talents breaking into tech</li>
            <li>PPC campaigns &amp; automation for when you want results and receipts</li>
          </ul>
          <p style={{ fontSize: '18px', color: '#14171a', marginBottom: '24px' }}>
            This isn’t a studio. This is one person with layered skills, strong opinions, and a deep respect for clean work and controlled chaos.
          </p>
          <p style={{ fontSize: '18px', color: '#14171a' }}>
            If you’re here, you’re welcome to explore.<br />If it feels strange, surreal or slightly too true, then it’s working.
          </p>
        </div>
      </section>
    </div>
  )
}