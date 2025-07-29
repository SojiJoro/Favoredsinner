import QuoteForm from '@/components/QuoteForm'

export default function QuotePage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-4">
          Request a Quote
        </h1>
        <p className="text-xl text-center text-deep-grey mb-12">
          Tell us about your project and we'll get back to you within 24 hours
        </p>
        
        <QuoteForm />
      </section>
    </div>
  )
}