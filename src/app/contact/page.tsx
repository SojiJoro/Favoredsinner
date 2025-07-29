export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">
          Contact
        </h1>
        
        <div className="text-center">
          <p className="text-xl text-deep-grey mb-8">
            Ready to work together? Have a question? Let&apos;s talk.
          </p>
          
          <div className="bg-light-grey rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-lg mb-4">Email us at:</p>
            <a 
              href="mailto:info@favoredsinner.com" 
              className="text-2xl font-medium text-twitter-blue hover:opacity-80"
            >
              info@favoredsinner.com
            </a>
          </div>
          
          <p className="mt-8 text-deep-grey">
            We typically respond within 24 hours
          </p>
          
          <div className="mt-12">
            <p className="text-lg mb-4">Or request a quote for a specific service:</p>
            <a href="/quote" className="btn-primary">
              Request a Quote
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}