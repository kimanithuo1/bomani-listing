import { useState } from "react"
import { Link } from "react-router-dom"

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle sign in logic here
    console.log("Sign in with:", email, password)
  }

  return (
    <div className="container py-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-teal mb-6">Sign In</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Sign In
        </button>
      </form>
      <p className="mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-sea hover:underline">
          Register here
        </Link>
      </p>
    </div>
  )
}

export default SignIn

