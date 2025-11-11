import Form from 'react-bootstrap/Form'
import './login.css'
import { useRef } from 'react';
import { verifyUser } from '../data/user';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip'
const Login = ({ setToken, setRole }) => {
    const userRef = useRef()
    const passRef = useRef()
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            type 'user'
        </Tooltip>
    )
    const renderTooltip2 = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            type 'pass'
        </Tooltip>
    )
    const handleLogin = () => {
        const user = userRef.current.value.trim()
        const pass = passRef.current.value.trim()
        const userInfo = verifyUser(user, pass)

        if (userInfo === null) {
            alert('Wrong username or password')
            userRef.current.value = ''
            passRef.current.value = ''
            userRef.current.focus()
        } else {
            setToken(userInfo.token)
            setRole(userInfo.role)
        }
    }

    return (
        <div className="login-page">
            <div className="login-card">
                <h2 className="login-title">Login</h2>
                <Form>
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}
                    >
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter username"
                                ref={userRef}
                                className="login-input"
                            />
                        </Form.Group>
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip2}
                    >
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                ref={passRef}
                                className="login-input"
                            />
                        </Form.Group>

                    </OverlayTrigger>


                    <button
                        type="button"
                        className="btn btn-success w-100 mt-2 login-button"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </Form>
            </div>
        </div>
    )
}

export default Login
