import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useContext } from "react"
import { FirebaseContext } from "./Firebase"
import styled from "styled-components"

const LogoutLink = styled.span`
  cursor: pointer;
  color: #fff;
  &:hover {
    text-decoration: underline;
  }
`
const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;

  > h1 {
    margin: 0;
    flex-grow: 1;
    > a {
      color: white;
      text-decoration: none;
    }
  }
  > div {
    margin: auto 0;
  }
`

const UserInfo = styled.div`
  text-align: right;
  color: #ffff;
`

const LoginLink = styled.div`
  margin: auto 0;
  > a {
    color: #ffff;
  }
`
const Divider = styled.span`
  margin: 0 8px;
  padding-right: 1px;
  background-color: #ddd;
`

const Header = ({ siteTitle }) => {
  const { firebase, user } = useContext(FirebaseContext)
  console.log({ user })
  const handleLogout = e => {
    e.preventDefault()
    firebase.logout().then(() => navigate("/login"))
  }
  return (
    <HeaderWrapper>
      <HeaderContent>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <div>
          {!!user && !!user.email && (
            <div>
              Hello, {user.username || user.email}
              <UserInfo>
                <LogoutLink onClick={handleLogout}>Logout</LogoutLink>
              </UserInfo>
            </div>
          )}
          {(!user || !user.email) && (
            <LoginLink>
              <Link to="/login">Login</Link>
              <Divider />
              <Link to="/register">Register</Link>
            </LoginLink>
          )}
        </div>
      </HeaderContent>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
