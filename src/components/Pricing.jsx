import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {

   const plans = [
    {
      name: 'Starter',
      subtitle: 'Perfect for beginners and hobbyists',
      price: '0',
      period: '/month',
      buttonText: 'Get Started Free',
      buttonStyle: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-100',
      features: [
        'Access to 5 basic tools',
        'Standard processing speed',
        'Community support',
        '1GB cloud storage',
      ],
      popular: false,
    },

    {
      name: 'Pro',
      subtitle: 'Best for professionals and freelancers',
      price: '29',
      period: '/month',
      badge: 'Most Popular',
      subtext: 'Billed annually or $35/mo',
      buttonText: 'Start Pro Trial',
      buttonStyle: 'bg-white text-indigo-600 hover:bg-slate-50 font-bold',
      features: [
        'Access to ALL 200+ tools',
        'Ultra-fast AI processing',
        '24/7 Priority support',
        '100GB cloud storage',
        'Commercial license included',
        'API access',
      ],
      popular: true,
    },

    {
      name: 'Enterprise',
      subtitle: 'For teams and growing businesses',
      price: '99',
      period: '/month',
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-100',  

      features: [
        'Everything in Pro plan',
        'Unlimited cloud storage',
        'Dedicated account manager',
        'Custom API integration',
        'Team management (up to 20)',
        'SLA 99.9% uptime guarantee',
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="max-w-6xl mx-auto px-6 py-20 text-center">
      <div className="space-y-3 mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-slate-500 text-sm md:text-base max-w-xl mx-auto">
          Choose the plan that fits your needs. Upgrade or cancel anytime with zero hassle.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-8 flex flex-col justify-between text-left transition-all duration-300 relative ${
              plan.popular
                ? 'bg-indigo-600 text-white shadow-2xl shadow-indigo-200 scale-105 border-2 border-indigo-600 z-10'
                : 'bg-white text-slate-800 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1'
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 text-xs font-black px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
                {plan.badge}
              </span>
            )}
            <div>
              <div className="mb-6">
                <h3 className={`text-xl font-bold ${plan.popular ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs mt-1 ${plan.popular ? 'text-indigo-200' : 'text-slate-400'}`}>
                  {plan.subtitle}
                </p>
              </div>
              <div className="mb-6 border-b border-slate-100/20 pb-6">  
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl md:text-5xl font-black tracking-tight">${plan.price}</span>
                  <span className={`text-sm font-medium ${plan.popular ? 'text-indigo-200' : 'text-slate-400'}`}>
                    {plan.period}
                  </span>
                </div>
                {plan.subtext && (
                  <p className="text-[11px] text-indigo-200 mt-2 font-medium">{plan.subtext}</p>
                )}
              </div>
              <div className="space-y-3 mb-8">
                <p className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? 'text-indigo-200' : 'text-slate-400'}`}>
                  What's included:
                </p>
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3 text-xs md:text-sm">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${ 
                        plan.popular ? 'text-amber-300' : 'text-indigo-600'
                      }`}
                    />
                    <span className={plan.popular ? 'text-indigo-50' : 'text-slate-600'}> 
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <button
              className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold transition-all ${plan.buttonStyle}`}  
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
