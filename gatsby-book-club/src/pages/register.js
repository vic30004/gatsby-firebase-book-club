import React, { useState, useContext } from "react"
import { Form, Input, Button, ErrorMessage } from "../components/common"
import { FirebaseContext } from "../components/Firebase"
const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmedPassword: "",
    username: "",
  })

  const { firebase } = useContext(FirebaseContext)
  const { email, password, confirmedPassword, username } = formData
  const onChange = e => {
    e.persist()
    setError("")
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const [error, setError] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (password === confirmedPassword) {
      firebase
        .register({
          email: email,
          username: username,
          password: password,
        })
        .catch(error => {
          return setError(error.message)
        })
      for (let x in formData) {
        formData[x] = ""
      }
      return
    }
    setError("Passwords do not match")
  }
  return (
    <>
      <ErrorMessage>{error ? error : ""}</ErrorMessage>
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
          placeholder="Username"
          type="text"
          required
          value={username}
          name="username"
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
    </>
  )
}

export default Register
