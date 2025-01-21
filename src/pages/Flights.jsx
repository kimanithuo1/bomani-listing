const Flights = () => {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-teal mb-6">Book Your Flights</h1>
        {/* Add flight search form here */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-teal mb-4">Popular Routes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{/* Add popular routes here */}</div>
        </section>
      </div>
    )
  }
  
  export default Flights
  
  