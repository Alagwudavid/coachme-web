import React, { useState } from 'react'
import { X } from 'lucide-react'
interface PreferenceModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (preferences: { currency: string; language: string }) => void
}
export function PreferenceModal({
  isOpen,
  onClose,
  onSave,
}: PreferenceModalProps) {
  const [currency, setCurrency] = useState('USD')
  const [language, setLanguage] = useState('English')
  if (!isOpen) return null
  const handleSave = () => {
    onSave({
      currency,
      language,
    })
    onClose()
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center p-4" style={{ zIndex: 999 }}>
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className="relative w-full max-w-md transform overflow-hidden rounded-3xl bg-muted p-6 text-left shadow-2xl transition-all sm:p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 id="modal-title" className="text-xl font-semibold text-foreground">
            Preference
          </h2>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-foreground hover:text-muted-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="space-y-6">
          {/* Currency Filter */}
          <div className="space-y-2">
            <label
              htmlFor="currency"
              className="block text-sm font-medium text-gray-700"
            >
              Currency
            </label>
            <div className="relative">
              <select
                id="currency"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="block w-full rounded-lg border bg-card py-2.5 pl-3 pr-10 text-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm shadow-sm transition-shadow cursor-pointer hover:border-foreground"
              >
                <option value="USD">USD - US Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="AUD">AUD - Australian Dollar</option>
              </select>
            </div>
          </div>

          {/* Language Filter */}
          <div className="space-y-2">
            <label
              htmlFor="language"
              className="block text-sm font-medium text-gray-700"
            >
              Language
            </label>
            <div className="relative">
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="block w-full rounded-lg border bg-card py-2.5 pl-3 pr-10 text-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm shadow-sm transition-shadow cursor-pointer hover:border-foreground"
              >
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Japanese">Japanese</option>
                <option value="Chinese">Chinese</option>
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex justify-end">
          <button
            onClick={handleSave}
            className="inline-flex justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  )
}
