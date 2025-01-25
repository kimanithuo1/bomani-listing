const InvestorRelations = () => {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-teal mb-6">Investor Relations</h1>
        <p className="mb-8">Information for current and potential investors in Bomani.com</p>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Financial Reports</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sea hover:underline">
                  Q1 2025 Financial Results
                </a>
              </li>
              <li>
                <a href="#" className="text-sea hover:underline">
                  Annual Report 2024
                </a>
              </li>
              <li>
                <a href="#" className="text-sea hover:underline">
                  Q4 2024 Financial Results
                </a>
              </li>
            </ul>
          </div>
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Investor Events</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sea hover:underline">
                  Q2 2025 Earnings Call - July 15, 2025
                </a>
              </li>
              <li>
                <a href="#" className="text-sea hover:underline">
                  Annual Shareholder Meeting - September 1, 2025
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  
  export default InvestorRelations
  
  