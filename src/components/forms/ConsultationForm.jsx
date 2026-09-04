import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, AlertCircle, ArrowRight } from 'lucide-react'

const initialForm = {
  fullName: '',
  companyName: '',
  businessEmail: '',
  phone: '',
  designation: '',
  employeeCount: '',
  requirement: '',
  pickupLocations: '',
  consultationDate: '',
  consultationTime: '',
}

function validate(data) {
  const errors = {}
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.'
  if (!data.companyName.trim()) errors.companyName = 'Company name is required.'
  if (!data.businessEmail.trim()) errors.businessEmail = 'Business email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.businessEmail)) errors.businessEmail = 'Enter a valid business email.'
  if (!data.phone.trim()) errors.phone = 'Phone number is required.'
  if (!data.designation.trim()) errors.designation = 'Designation is required.'
  if (!data.requirement.trim()) errors.requirement = 'Please describe your requirement.'
  return errors
}

const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 font-heading">
    {children}
  </label>
)

const FieldError = ({ msg }) =>
  msg ? (
    <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1.5">
      <AlertCircle size={12} /> {msg}
    </p>
  ) : null

export default function ConsultationForm() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      const firstKey = Object.keys(validationErrors)[0]
      document.getElementById(`field-${firstKey}`)?.focus()
      return
    }
    setStatus('loading')
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setStatus('success')
      setStatusMessage("Request received. A specialist will contact you within 2 business hours.")
      setForm(initialForm)
    } catch {
      setStatus('error')
      setStatusMessage('Submission failed. Please try again.')
    }
  }

  const inputClass = (name) =>
    `custom-input ${errors[name] ? 'border-red-500 focus:border-red-500 box-shadow-[0_0_0_3px_rgba(239,68,68,0.1)]' : ''}`

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="text-center py-12 px-6 bg-slate-50 rounded-xl border border-slate-200"
        aria-live="polite"
      >
        <div className="w-16 h-16 rounded-full bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3">Consultation Request Received</h3>
        <p className="text-slate-600 text-base leading-relaxed max-w-md mx-auto mb-8">{statusMessage}</p>
        <button onClick={() => setStatus('idle')} className="btn-secondary">
          Submit Another Request
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Consultation request form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        <div>
          <Label htmlFor="field-fullName">Full Name <span className="text-red-500">*</span></Label>
          <input id="field-fullName" name="fullName" type="text" placeholder="e.g. Rahul Sharma"
            autoComplete="name" value={form.fullName} onChange={handleChange} className={inputClass('fullName')} aria-required="true" />
          <FieldError msg={errors.fullName} />
        </div>

        <div>
          <Label htmlFor="field-companyName">Company Name <span className="text-red-500">*</span></Label>
          <input id="field-companyName" name="companyName" type="text" placeholder="e.g. Acme Tech Corp"
            autoComplete="organization" value={form.companyName} onChange={handleChange} className={inputClass('companyName')} aria-required="true" />
          <FieldError msg={errors.companyName} />
        </div>

        <div>
          <Label htmlFor="field-businessEmail">Business Email <span className="text-red-500">*</span></Label>
          <input id="field-businessEmail" name="businessEmail" type="email" placeholder="rahul@company.com"
            autoComplete="email" value={form.businessEmail} onChange={handleChange} className={inputClass('businessEmail')} aria-required="true" />
          <FieldError msg={errors.businessEmail} />
        </div>

        <div>
          <Label htmlFor="field-phone">Phone Number <span className="text-red-500">*</span></Label>
          <input id="field-phone" name="phone" type="tel" placeholder="+91 98765 43210"
            autoComplete="tel" value={form.phone} onChange={handleChange} className={inputClass('phone')} aria-required="true" />
          <FieldError msg={errors.phone} />
        </div>

        <div>
          <Label htmlFor="field-designation">Designation <span className="text-red-500">*</span></Label>
          <input id="field-designation" name="designation" type="text" placeholder="e.g. HR Manager"
            value={form.designation} onChange={handleChange} className={inputClass('designation')} aria-required="true" />
          <FieldError msg={errors.designation} />
        </div>

        <div>
          <Label htmlFor="field-employeeCount">Number of Employees</Label>
          <select id="field-employeeCount" name="employeeCount" value={form.employeeCount}
            onChange={handleChange} className="custom-input bg-white">
            <option value="">Select range</option>
            <option value="1-50">1 – 50</option>
            <option value="51-100">51 – 100</option>
            <option value="101-250">101 – 250</option>
            <option value="251-500">251 – 500</option>
            <option value="500+">500+</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="field-requirement">Transportation Requirement <span className="text-red-500">*</span></Label>
          <textarea id="field-requirement" name="requirement" rows={3}
            value={form.requirement} onChange={handleChange}
            placeholder="Describe your shift timings, daily headcount, route areas..."
            className={`${inputClass('requirement')} min-h-[100px] resize-none`} aria-required="true" />
          <FieldError msg={errors.requirement} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="field-pickupLocations">Pickup / Service Locations</Label>
          <input id="field-pickupLocations" name="pickupLocations" type="text"
            placeholder="e.g. HITEC City, Gachibowli, Madhapur..."
            value={form.pickupLocations} onChange={handleChange} className="custom-input" />
        </div>

        <div>
          <Label htmlFor="field-consultationDate">Preferred Date</Label>
          <input id="field-consultationDate" name="consultationDate" type="date"
            value={form.consultationDate} onChange={handleChange} className="custom-input" />
        </div>

        <div>
          <Label htmlFor="field-consultationTime">Preferred Time Slot</Label>
          <select id="field-consultationTime" name="consultationTime" value={form.consultationTime}
            onChange={handleChange} className="custom-input bg-white">
            <option value="">Select time slot</option>
            <option value="09:00-10:00">9:00 AM – 10:00 AM</option>
            <option value="10:00-11:00">10:00 AM – 11:00 AM</option>
            <option value="11:00-12:00">11:00 AM – 12:00 PM</option>
            <option value="14:00-15:00">2:00 PM – 3:00 PM</option>
            <option value="16:00-17:00">4:00 PM – 5:00 PM</option>
          </select>
        </div>
      </div>

      {status === 'error' && (
        <div className="mt-5 flex items-center gap-3 text-red-600 bg-red-50 border border-red-200 rounded-lg p-4 text-sm" role="alert">
          <AlertCircle size={16} className="flex-shrink-0" />
          {statusMessage}
        </div>
      )}

      <div className="mt-8">
        <button type="submit" disabled={status === 'loading'}
          className="btn-primary w-full disabled:opacity-70">
          {status === 'loading' ? (
            <><Loader2 size={18} className="animate-spin" /> Processing...</>
          ) : (
            <>Schedule a Consultation <ArrowRight size={18} /></>
          )}
        </button>
      </div>

      <p className="text-slate-400 text-xs mt-4 text-center">
        * Required fields. Your information is kept strictly confidential.
      </p>
    </form>
  )
}
