const HelpCenter = () => {
    const helpTopics = [
      { title: "Booking a Stay", link: "/help/booking-a-stay" },
      { title: "Cancellation Policy", link: "/help/cancellation-policy" },
      { title: "Payment Methods", link: "/help/payment-methods" },
      { title: "Travel Insurance", link: "/help/travel-insurance" },
      { title: "COVID-19 Travel Information", link: "/help/covid-19-info" },
      { title: "Contact Customer Support", link: "/help/contact-support" },
    ]
  
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-teal mb-6">Help Center</h1>
        <p className="mb-8">Find answers to your questions and get support</p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpTopics.map((topic, index) => (
            <a key={index} href={topic.link} className="card hover:bg-mint/10 transition-colors">
              <h2 className="text-xl font-semibold mb-2">{topic.title}</h2>
              <p className="text-gray-600">Get help with {topic.title.toLowerCase()}</p>
            </a>
          ))}
        </div>
      </div>
    )
  }
  
  export default HelpCenter
  
  