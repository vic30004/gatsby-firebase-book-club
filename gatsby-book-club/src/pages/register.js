import React, { useState } from "react"
import { Form, Input, Button } from "../components/common"

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
  })

  const { email, password, confirmedPassword } = formData
  const onChange = e => {
    e.persist()
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('hello')
  }
  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Input
        placeholder="Email"
        type="email"
        required
        value={email}
        name="email"
        onChange={e => onChange(e)}
      />
      <Input
        placeholder="Password"
        type="password"
        required
        minLength={6}
        value={password}
        name="password"
        onChange={e => onChange(e)}
      />
      <Input
        placeholder="Confirm Password"
        type="password"
        required
        minLength={6}
        value={confirmedPassword}
        name="confirmedPassword"
        onChange={e => onChange(e)}
      />
      <Button block type="submit">
        Register
      </Button>
    </Form>
  )
}

export default Register
