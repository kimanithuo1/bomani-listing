import { Link } from "react-router-dom"

const AboutUs = () => {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-teal mb-6">About Bomani.com</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold text-sea mb-4">Our Mission</h2>
          <p className="mb-4">
            At Bomani.com, we're on a mission to make travel in East Africa more accessible, enjoyable, and sustainable.
            We believe in connecting travelers with unique experiences while supporting local communities and preserving
            the natural beauty of the region.
          </p>
          <h2 className="text-2xl font-semibold text-sea mb-4">Our Story</h2>
          <p className="mb-4">
            Founded in 2020, Bomani.com started as a small startup with a big dream: to showcase the best of East
            African hospitality to the world. Today, we're proud to be the leading travel platform in the region,
            offering a wide range of accommodations, experiences, and services.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-sea mb-4">For Investors</h2>
          <p className="mb-4">
            Bomani.com is at the forefront of the rapidly growing East African travel market. Our innovative platform
            and strong partnerships make us an attractive investment opportunity.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Consistent year-over-year growth</li>
            <li>Expanding market share across East Africa</li>
            <li>Partnerships with leading hotels and travel providers</li>
            <li>Commitment to sustainable and responsible tourism</li>
          </ul>
          <Link to="/investor-relations" className="btn btn-primary">
            Learn More About Investing
          </Link>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-sea mb-4">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Add team member cards here */}
        </div>
      </div>
    </div>
  )
}

export default AboutUs

