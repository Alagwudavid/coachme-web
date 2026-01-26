"use client"

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Starter Plan",
      price: 29,
      description: "Individual coaches and educators",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="8" width="48" height="48" rx="8" fill="currentColor" className="text-gray-200 dark:text-gray-700" />
        </svg>
      ),
      features: [
        "Host up to 50 students",
        "Unlimited courses & sessions",
        "Student progress tracking",
        "Basic analytics dashboard",
        "Automated reminders",
        "Email support"
      ]
    },
    {
      name: "Pro Plan",
      price: 79,
      description: "Growing coaches and training businesses",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path d="M32 8L8 24L32 40L56 24L32 8Z" fill="currentColor" className="text-teal-400" />
          <path d="M32 40L8 24V40L32 56L56 40V24L32 40Z" fill="currentColor" className="text-teal-600" />
        </svg>
      ),
      features: [
        "Host up to 250 students",
        "Advanced analytics & insights",
        "Custom branding & white-label",
        "Payment processing & invoicing",
        "Priority email + chat support",
        "Zoom & calendar integrations"
      ],
      recommended: true
    },
    {
      name: "Enterprise Plan",
      price: null,
      description: "Training organizations and academies",
      icon: (
        <svg className="w-16 h-16" viewBox="0 0 64 64" fill="none">
          <path d="M16 8L8 16V56H24V40H40V56H56V16L48 8H16Z" fill="currentColor" className="text-amber-300" />
          <rect x="16" y="16" width="8" height="8" fill="currentColor" className="text-amber-600" />
          <rect x="28" y="16" width="8" height="8" fill="currentColor" className="text-amber-600" />
          <rect x="40" y="16" width="8" height="8" fill="currentColor" className="text-amber-600" />
          <rect x="16" y="28" width="8" height="8" fill="currentColor" className="text-amber-600" />
          <rect x="28" y="28" width="8" height="8" fill="currentColor" className="text-amber-600" />
          <rect x="40" y="28" width="8" height="8" fill="currentColor" className="text-amber-600" />
        </svg>
      ),
      features: [
        "Unlimited students & team members",
        "Advanced reporting & analytics",
        "Team access & role permissions",
        "API & LMS integrations",
        "Dedicated account manager",
        "Premium 24/7 support"
      ]
    }
  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-950 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${plan.recommended
                ? 'bg-gradient-to-br from-teal-500 to-teal-600 shadow-2xl ring-4 ring-teal-300/50'
                : 'bg-gradient-to-br from-teal-700 to-teal-800 shadow-xl'
                }`}
            >
              {/* Best for label */}
              {plan.recommended && (
                <div className="absolute -top-4 right-8 bg-white text-teal-800 px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Best for large scale
                </div>
              )}

              {/* Icon */}
              <div className="flex justify-center mb-4">
                {plan.icon}
              </div>

              {/* Plan Name */}
              <h3 className="text-white text-xl font-bold mb-2 text-center">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-4">
                {plan.price ? (
                  <>
                    <div className="text-white text-5xl font-bold">${plan.price}/month</div>
                  </>
                ) : (
                  <div className="text-white text-4xl font-bold">Custom Pricing</div>
                )}
              </div>

              {/* Description */}
              <p className="text-teal-100 text-sm mb-6 text-center">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.recommended
                ? 'bg-white text-teal-700 hover:bg-teal-50'
                : 'bg-teal-600 text-white hover:bg-teal-500'
                }`}>
                {plan.price ? (plan.recommended ? 'Book a Demo' : 'Start Free Trial') : 'Book a Demo'}
              </button>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Benefit 1 */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="text-white text-lg font-semibold mb-2">Save Hours Every Week</h4>
            <p className="text-teal-200 text-sm">
              Automate scheduling, reminders, and student management so you can focus on teaching instead of admin tasks.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h4 className="text-white text-lg font-semibold mb-2">Track Student Progress</h4>
            <p className="text-teal-200 text-sm">
              Real-time analytics give you full visibility into student engagement, completion rates, and performance helping you deliver better outcomes.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-teal-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-white text-lg font-semibold mb-2">Grow With Confidence</h4>
            <p className="text-teal-200 text-sm">
              Secure, cloud-based, and always accessible. Scale your coaching business while keeping student data safe and sessions organized from anywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
