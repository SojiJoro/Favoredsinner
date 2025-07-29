'use client'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { services } from '@/data/services'

export default function QuoteForm() {
  const searchParams = useSearchParams()
  const serviceId = searchParams.get('service')
  const defaultService = services.find(s => s.id === serviceId)?.title || ''

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: defaultService,
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', service: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
      {/* Form fields remain the same */}
      {/* ... existing form fields ... */}

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="btn-primary w-full disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Submit Request'}
      </button>

      {submitStatus === 'success' && (
        <p className="text-green-600 text-center">
          Thank you! We&apos;ll get back to you within 24 hours.
        </p>
      )}
      
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  )
}