export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-serif text-center mb-12">
          About
        </h1>
        
        <div className="prose prose-lg mx-auto text-center">
          <p className="text-xl text-deep-grey mb-8">
            Favored Sinner is not a name. It's an idea.
          </p>
          
          <p className="text-lg text-deep-grey mb-6">
            I create things that speak louder than words. No biography. Just creativity.
          </p>
          
          <p className="text-lg text-deep-grey mb-6">
            In a world of endless self-promotion and personal branding, I choose to let the work speak for itself. 
            Every piece, every project, every pixel is crafted with intention.
          </p>
          
          <p className="text-lg text-deep-grey">
            Some call it art. Some call it service. I call it necessary.
          </p>
          
          <div className="mt-12 pt-12 border-t border-gray-200">
            <p className="font-serif text-2xl text-twitter-blue">
              "The best way to find yourself is to lose yourself in the service of others."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}