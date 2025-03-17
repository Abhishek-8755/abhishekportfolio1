import React, { useEffect } from "react";

const ConsultancyPage = () => {
  const plans = [
    {
      id: "basic",
      title: "Basic Plan",
      price: "₹299",
      features: [
        "✅ 30-Minute One-on-One Career Guidance",
        "✅ Resume Review & Improvement Tips",
        "✅ Best Online Learning Resources",
      ],
      buttonText: "Get Started",
      bgColor: "bg-blue-100",
      buttonColor: "btn-blue",
    },
    {
      id: "intermediate",
      title: "Advanced Plan",
      price: "₹599",
      features: [
        "✅ Everything in Basic Plan +",
        "✅ LinkedIn Profile Optimization",
        "✅ Job/Internship Search Strategies",
        "✅ Personalized Career Roadmap",
      ],
      buttonText: "Upgrade Now",
      bgColor: "bg-green-100 most-demand",
      buttonColor: "btn-green",
    },
    {
      id: "premium",
      title: "Full Guide Plan",
      price: "₹999",
      features: [
        "✅ Everything in Advanced Plan +",
        "✅ Personal Mentorship for 1 Month",
        "✅ Mock Interview Preparation",
        "✅ Portfolio & Project Guidance",
      ],
      buttonText: "Get Full Guide",
      bgColor: "bg-yellow-100",
      buttonColor: "btn-yellow",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".plan-card");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          el.classList.add("animate-fadeIn");
        } else {
          el.classList.remove("animate-fadeIn");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppRedirect = (plan) => {
    const message = `I want consultancy for ${plan.title}`;
    const whatsappUrl = `https://wa.me/918755465950?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div id="consultancy" className="container mx-auto py-10 text-center">
      <h2 className="text-4xl font-bold mb-6 text-white">
        📘 Consultancy for College Students
      </h2>
      <p className="text-white mb-8 text-lg">
        Get expert guidance on career, skills, and industry trends! Choose a plan that suits your needs.
      </p>

      <div className="grid md:grid-cols-3 gap-6 px-4 md:px-0">
        {plans.map((plan) => (
          <div
            key={plan.id}
            id={plan.id}
            className={`plan-card rounded-xl p-6 shadow-lg ${plan.bgColor} border-2 border-gray-300 transition-transform transform hover:scale-105 duration-300`}
          >
            <h3 className="text-2xl font-semibold text-white">{plan.title}</h3>
            <p className="text-xl font-bold text-white my-3">{plan.price}</p>
            <ul className="text-white text-left list-none space-y-2 mb-4">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button 
              className={`px-btn ${plan.buttonColor}`}
              onClick={() => handleWhatsAppRedirect(plan)}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultancyPage;