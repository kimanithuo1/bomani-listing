const PressCenter = () => {
    const pressReleases = [
      { title: "Bomani.com Expands to 5 New Countries", date: "May 15, 2025" },
      { title: "Bomani.com Launches Sustainable Travel Initiative", date: "April 3, 2025" },
      { title: "Bomani.com Reports Record Growth in Q1 2025", date: "March 20, 2025" },
      { title: "Bomani.com Partners with Major Airlines for Exclusive Deals", date: "February 8, 2025" },
    ]
  
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-teal mb-6">Press Center</h1>
        <p className="mb-8">Stay up to date with the latest news and announcements from Bomani.com</p>
  
        <h2 className="text-2xl font-semibold mb-4">Recent Press Releases</h2>
        <div className="space-y-6">
          {pressReleases.map((release, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold mb-2">{release.title}</h3>
              <p className="text-gray-600">{release.date}</p>
              <a href="#" className="btn btn-primary mt-4">
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default PressCenter
  
  