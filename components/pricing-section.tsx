"use client"

export default function PricingSection() {
  const pricing = {
    premium: 3.99,
    teams: 14.99,
  }

  return (
    <div className="w-full min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Select Pricing Plan
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {/* Premium Plan */}
          <div className="relative rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/20 dark:to-slate-900/20 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all flex flex-col">
            <div className="text-center mb-2">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24"><g fill="none"><path fill="#d9d9d9" d="M17.999 3a.75.75 0 0 1 .605.306l.055.087l3.263 6.028l.038.093l.012.04l.02.102l.006.094a.8.8 0 0 1-.027.2l-.024.062H15.5L13.5 3z"></path><path fill="url(#SVGORrjZb5b)" d="M17.999 3a.75.75 0 0 1 .605.306l.055.087l3.263 6.028l.038.093l.012.04l.02.102l.006.094a.8.8 0 0 1-.027.2l-.024.062H15.5L13.5 3z"></path><path fill="#d9d9d9" d="M2.006 9.843L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057l3.25-6a.75.75 0 0 1 .557-.386L5.999 3l4.501.007L8.25 10l-6.21-.009a1 1 0 0 1-.034-.148"></path><path fill="url(#SVG3ukbHcrT)" d="M2.006 9.843L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057l3.25-6a.75.75 0 0 1 .557-.386L5.999 3l4.501.007L8.25 10l-6.21-.009a1 1 0 0 1-.034-.148"></path><path fill="url(#SVGWaJAUcXm)" d="m21.96 9.514l-.038-.093L21.694 9h-5.928l-.769 1.5L12 18.187V21l.125-.01l.077-.017l.098-.033a.7.7 0 0 0 .297-.232l9.234-10.487l.04-.053l.016-.024l.038-.069l.047-.126a.8.8 0 0 0 .027-.199l-.006-.094l-.02-.102z"></path><path fill="#a9a9a9" d="m12 21l-.101-.006l-.118-.026a.7.7 0 0 1-.174-.076l-.009-.007a.7.7 0 0 1-.13-.104l-9.29-10.546l-.026-.032l-.04-.059a.75.75 0 0 1-.106-.301L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057L2.303 9h6.04l.655 1.5l3 7.687z"></path><path fill="url(#SVG2N1rxdpx)" d="m12 21l-.101-.006l-.118-.026a.7.7 0 0 1-.174-.076l-.009-.007a.7.7 0 0 1-.13-.104l-9.29-10.546l-.026-.032l-.04-.059a.75.75 0 0 1-.106-.301L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057L2.303 9h6.04l.655 1.5l3 7.687z"></path><path fill="#7c7a7a" d="M9.286 3.521A.75.75 0 0 1 10 3h4a.75.75 0 0 1 .714.521L16.628 9.5H7.373z"></path><path fill="url(#SVGu9uqybbw)" d="M9.286 3.521A.75.75 0 0 1 10 3h4a.75.75 0 0 1 .714.521L16.628 9.5H7.373z"></path><path fill="#3f3f3f" d="m7.533 9l-.247.771a.75.75 0 0 0 .015.502l4 10.25a.75.75 0 0 0 1.398 0l4-10.25a.75.75 0 0 0 .015-.502L16.468 9z"></path><path fill="url(#SVGzi8LleUH)" d="m7.533 9l-.247.771a.75.75 0 0 0 .015.502l4 10.25a.75.75 0 0 0 1.398 0l4-10.25a.75.75 0 0 0 .015-.502L16.468 9z"></path><path fill="url(#SVG53MYIePU)" fillOpacity={0.7} d="M17.999 3a.75.75 0 0 1 .605.306l.055.087l3.263 6.028l.038.093l.012.04l.02.102l.006.094a.8.8 0 0 1-.027.2l-.047.125l-.038.069a1 1 0 0 1-.075.102l.06-.078l-.025.035l-9.25 10.505a.7.7 0 0 1-.297.232l-.098.033l-.078.017L12 21l-.1-.006l-.118-.026a.7.7 0 0 1-.174-.076l-.009-.007a.7.7 0 0 1-.13-.104l-9.29-10.546l-.026-.032l-.04-.059a.75.75 0 0 1-.106-.301L2 9.75l.003-.066l.013-.089l.024-.086l.022-.059l.028-.057l3.25-6a.75.75 0 0 1 .557-.386L5.999 3z"></path><defs><linearGradient id="SVGORrjZb5b" x1={16.535} x2={21.091} y1={3} y2={13.647} gradientUnits="userSpaceOnUse"><stop stopColor="#0fafff"></stop><stop offset={1} stopColor="#102784"></stop></linearGradient><linearGradient id="SVG3ukbHcrT" x1={9.286} x2={5.308} y1={0.083} y2={8.955} gradientUnits="userSpaceOnUse"><stop stopColor="#9ff0f9"></stop><stop offset={1} stopColor="#29c3ff"></stop></linearGradient><linearGradient id="SVGWaJAUcXm" x1={24.351} x2={13.462} y1={3} y2={19.603} gradientUnits="userSpaceOnUse"><stop stopColor="#1b44b1"></stop><stop offset={1} stopColor="#2052cb"></stop></linearGradient><linearGradient id="SVG2N1rxdpx" x1={3.765} x2={11.05} y1={6.6} y2={20.884} gradientUnits="userSpaceOnUse"><stop stopColor="#0094f0"></stop><stop offset={1} stopColor="#6ce0ff"></stop></linearGradient><linearGradient id="SVGu9uqybbw" x1={12} x2={12} y1={3} y2={11.125} gradientUnits="userSpaceOnUse"><stop stopColor="#3bd5ff"></stop><stop offset={1} stopColor="#367af2"></stop></linearGradient><linearGradient id="SVGzi8LleUH" x1={11.994} x2={11.994} y1={4.8} y2={21} gradientUnits="userSpaceOnUse"><stop stopColor="#2052cb"></stop><stop offset={1} stopColor="#0fafff"></stop></linearGradient><linearGradient id="SVG53MYIePU" x1={-0.031} x2={15.123} y1={-13.95} y2={22.799} gradientUnits="userSpaceOnUse"><stop offset={0.533} stopColor="#ff6ce8" stopOpacity={0}></stop><stop offset={1} stopColor="#ff6ce8"></stop></linearGradient></defs></g></svg>
              </div>
              <h3 className="text-foreground text-2xl font-bold mb-2">Premium</h3>
              <p className="text-muted-foreground text-sm mb-6">
                For individuals and educators who want it all.
              </p>
              <div className="mb-2">
                <div className="text-foreground text-5xl font-bold">${pricing.premium}</div>
                <div className="text-muted-foreground text-sm">/month</div>
              </div>
            </div>
            <button className="hidden w-full mt-auto px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
              Get Premium
            </button>
          </div>

          {/* Teams Plan */}
          <div className="relative rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/20 dark:to-slate-900/20 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all flex flex-col">
            <div className="text-center mb-2">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 24 24"><g fill="none"><path fill="url(#SVGhZdyleXp)" d="M20.25 10c.967 0 1.75.784 1.75 1.75V15a4 4 0 1 1-8-.001V11.75a1.75 1.75 0 0 1 1.607-1.744z"></path><path fill="url(#SVGS3LRTdtw)" fillOpacity={0.5} d="M20.25 10c.967 0 1.75.784 1.75 1.75V15a4 4 0 1 1-8-.001V11.75a1.75 1.75 0 0 1 1.607-1.744z"></path><path fill="url(#SVGQAaiVcet)" d="M8.25 10c.967 0 1.75.784 1.75 1.75V15a4 4 0 1 1-8-.001V11.75a1.75 1.75 0 0 1 1.606-1.744z"></path><path fill="url(#SVGiO87M56u)" fillOpacity={0.5} d="M8.25 10c.967 0 1.75.784 1.75 1.75V15a4 4 0 1 1-8-.001V11.75a1.75 1.75 0 0 1 1.606-1.744z"></path><path fill="url(#SVGzzYbYcTQ)" d="M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75z"></path><path fill="url(#SVGLO3kxdrU)" d="M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75z"></path><path fill="url(#SVGrughhcvJ)" d="M18.5 4a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"></path><path fill="url(#SVGNr4bseCi)" d="M5.5 4a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"></path><path fill="url(#SVGcolyeckW)" d="M12 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></path><defs><linearGradient id="SVGhZdyleXp" x1={15.902} x2={20.703} y1={11.196} y2={18.011} gradientUnits="userSpaceOnUse"><stop offset={0.125} stopColor="#7a41dc"></stop><stop offset={1} stopColor="#5b2ab5"></stop></linearGradient><linearGradient id="SVGQAaiVcet" x1={3.903} x2={8.703} y1={11.196} y2={18.011} gradientUnits="userSpaceOnUse"><stop offset={0.125} stopColor="#9c6cfe"></stop><stop offset={1} stopColor="#7a41dc"></stop></linearGradient><linearGradient id="SVGzzYbYcTQ" x1={9.643} x2={15.657} y1={11.462} y2={19.322} gradientUnits="userSpaceOnUse"><stop offset={0.125} stopColor="#bd96ff"></stop><stop offset={1} stopColor="#9c6cfe"></stop></linearGradient><linearGradient id="SVGLO3kxdrU" x1={12.003} x2={21.131} y1={8.69} y2={22.648} gradientUnits="userSpaceOnUse"><stop stopColor="#885edb" stopOpacity={0}></stop><stop offset={1} stopColor="#e362f8"></stop></linearGradient><linearGradient id="SVGrughhcvJ" x1={17.189} x2={19.737} y1={4.665} y2={8.734} gradientUnits="userSpaceOnUse"><stop offset={0.125} stopColor="#7a41dc"></stop><stop offset={1} stopColor="#5b2ab5"></stop></linearGradient><linearGradient id="SVGNr4bseCi" x1={4.189} x2={6.737} y1={4.665} y2={8.734} gradientUnits="userSpaceOnUse"><stop offset={0.125} stopColor="#9c6cfe"></stop><stop offset={1} stopColor="#7a41dc"></stop></linearGradient><linearGradient id="SVGcolyeckW" x1={10.427} x2={13.485} y1={3.798} y2={8.68} gradientUnits="userSpaceOnUse"><stop offset={0.125} stopColor="#bd96ff"></stop><stop offset={1} stopColor="#9c6cfe"></stop></linearGradient><radialGradient id="SVGS3LRTdtw" cx={0} cy={0} r={1} gradientTransform="matrix(6.43822 0 0 12.2867 12.743 14.29)" gradientUnits="userSpaceOnUse"><stop offset={0.433} stopColor="#3b148a"></stop><stop offset={1} stopColor="#3b148a" stopOpacity={0}></stop></radialGradient><radialGradient id="SVGiO87M56u" cx={0} cy={0} r={1} gradientTransform="matrix(-7.12497 0 0 -13.5973 12.592 14.29)" gradientUnits="userSpaceOnUse"><stop offset={0.433} stopColor="#3b148a"></stop><stop offset={1} stopColor="#3b148a" stopOpacity={0}></stop></radialGradient></defs></g></svg>
              </div>
              <h3 className="text-foreground text-2xl font-bold mb-2">Teams</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Perfect for teams who need advanced tools.
              </p>
              <div className="mb-2">
                <div className="text-foreground text-5xl font-bold">${pricing.teams}</div>
                <div className="text-muted-foreground text-sm">/month</div>
              </div>
            </div>
            <button className="hidden w-full mt-auto px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
              Get Teams
            </button>
          </div>

          {/* Business Plan */}
          <div className="relative rounded-2xl p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/20 dark:to-slate-900/20 border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all flex flex-col">
            <div className="text-center mb-2">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 512 512"><path fill="currentColor" d="M432 176H320V64a48 48 0 0 0-48-48H80a48 48 0 0 0-48 48v416a16 16 0 0 0 16 16h104a8 8 0 0 0 8-8v-71.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 192 416v72a8 8 0 0 0 8 8h264a16 16 0 0 0 16-16V224a48 48 0 0 0-48-48M98.08 431.87a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 240a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m80 320a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79m0-80a16 16 0 1 1 13.79-13.79a16 16 0 0 1-13.79 13.79M444 464H320V208h112a16 16 0 0 1 16 16v236a4 4 0 0 1-4 4"></path><path fill="currentColor" d="M400 400a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m-64 160a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16m0-80a16 16 0 1 0 16 16a16 16 0 0 0-16-16"></path></svg>
              </div>
              <h3 className="text-foreground text-2xl font-bold mb-2">Business</h3>
              <p className="text-muted-foreground text-sm mb-6">
                Custom solutions for large organizations.
              </p>
              <div className="mb-2">
                <div className="text-foreground text-3xl font-bold">Custom</div>
                <div className="text-muted-foreground text-sm">pricing</div>
              </div>
            </div>
            <button className="hidden w-full mt-auto px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Free Plan Section */}
        <div className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950/20 dark:to-slate-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Our<br />free plan
                </h3>
              </div>

              <div className="flex-1">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-foreground">Create your own rooms</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-foreground">Host up to 20 learners</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-foreground">Analyze basic reports</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span className="text-foreground">Discover <span className="font-semibold">millions</span> of rooms</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 w-fit">
                <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg whitespace-nowrap">
                  Start for free
                </button>
                <p className="text-sm text-muted-foreground">No credit card needed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
