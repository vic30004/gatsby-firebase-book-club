import React, { useState } from "react"
import { Link } from "gatsby"
import { useAuth } from "../components/Firebase"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { firebase } = useAuth()
  const { email, password } = formData
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    firebase.login({ email, password })
    
  }
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={e => onChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => onChange(e)}
        />
        <button type="submit">Login</button>
      </form>
    </Layout>
  )
}

export default SecondPage
