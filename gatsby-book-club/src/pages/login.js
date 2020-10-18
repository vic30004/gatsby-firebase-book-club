import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import { FirebaseContext } from "../components/Firebase"
import { Form, Input, Button, ErrorMessage } from "../components/common"


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const { firebase } = useContext(FirebaseContext)
  const [error, setError] = useState("")
  const { email, password } = formData
  const onChange = e => {
    e.persist()
    setError("")
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const clearForm = () => {
    for (let x in formData) {
      formData[x] = ""
    }
  }
  const handleSubmit = e => {
    e.preventDefault()
    firebase.login({ email, password }).catch(error => {
      return setError(error.message)
    })
    clearForm()
  }
  return (
    <section>
      <ErrorMessage>{error ? error : ""}</ErrorMessage>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          required
          onChange={e => onChange(e)}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          required
          onChange={e => onChange(e)}
        />
        <Button type="submit" block>
          Login
        </Button>
      </Form>
    </section>
  )
}

export default Login
