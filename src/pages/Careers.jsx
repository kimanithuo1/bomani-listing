import { Link } from "react-router-dom"

const Careers = () => {
  const jobOpenings = [
    { title: "Frontend Developer", department: "Engineering", location: "Nairobi, Kenya" },
    { title: "UX Designer", department: "Design", location: "Remote" },
    { title: "Customer Support Specialist", department: "Customer Service", location: "Kampala, Uganda" },
    { title: "Data Analyst", department: "Analytics", location: "Dar es Salaam, Tanzania" },
  ]

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-teal mb-6">Careers at Bomani.com</h1>
      <p className="mb-8">Join our team and help shape the future of travel in East Africa!</p>

      <h2 className="text-2xl font-semibold mb-4">Current Openings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobOpenings.map((job, index) => (
          <div key={index} className="card">
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600 mb-2">Department: {job.department}</p>
            <p className="text-gray-600 mb-4">Location: {job.location}</p>
            <Link to={`/careers/${job.title.toLowerCase().replace(/\s+/g, "-")}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Careers

