import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { FirebaseContext } from "../components/Firebase"
import { Form, Input, Button } from "../components/common"


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { firebase } = useContext(FirebaseContext)
  const { email, password } = formData
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleSubmit = e => {
    e.preventDefault()
    firebase.login({ email, password })
  }
  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={e => onChange(e)}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => onChange(e)}
        />
        <Button type="submit" block>Login</Button>
      </Form>
    </section>
  )
}

export default Login
