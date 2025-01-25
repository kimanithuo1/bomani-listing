const FAQ = () => {
    const faqs = [
      {
        question: "How do I make a booking?",
        answer:
          "To make a booking, search for your desired destination and dates, select your preferred option, and follow the booking process. You'll need to provide your personal details and payment information to confirm your reservation.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept various payment methods including major credit cards (Visa, MasterCard, American Express), PayPal, and mobile payment options like M-Pesa for select countries.",
      },
      {
        question: "Can I cancel or modify my booking?",
        answer:
          "Cancellation and modification policies vary depending on the type of booking and the specific property or service provider. Please check the cancellation policy on your booking confirmation. In many cases, you can cancel or modify your booking through your Bomani.com account.",
      },
      {
        question: "Is it safe to travel to East Africa?",
        answer:
          "East Africa is generally safe for tourists, but as with any travel, it's important to take normal precautions. We recommend checking your government's travel advisories before your trip and always being aware of your surroundings.",
      },
      {
        question: "Do I need a visa to visit East African countries?",
        answer:
          "Visa requirements vary depending on your nationality and the country you're visiting. Many East African countries offer visa-on-arrival or e-visa options. We recommend checking the official government websites of your destination country for the most up-to-date visa information.",
      },
    ]
  
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-teal mb-6">Frequently Asked Questions</h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="card">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default FAQ
  
  