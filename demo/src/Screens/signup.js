

// const RegisterScreen = ({ location, history }) => {


//   // const dispatch = useDispatch()

// //   const userRegister = useSelector((state) => state.userRegister)
// //   const { loading, error, userInfo } = userRegister

// //   const redirect = location.search ? location.search.split('=')[1] : '/'

// //   useEffect(() => {
// //     if (userInfo) {
// //       history.push(redirect)
// //     }
// //   }, [history, userInfo, redirect])

//   const submitHandler = (e) => {
//     e.preventDefault()
//     if (password !== confirmPassword) {
//       setMessage('Passwords do not match')
//     } else {
//     //   dispatch(register(name, email, password))
//     console.log({'name':name,'email':email,'password':password})
//     fetch("http://localhost:3000/signup", {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json"
//       },
//       body: JSON.stringify({'name':name,'email':email,'password':password})
//     })
//     }
//   }

//   return (
//     <FormContainer>
//       <h1>Sign Up</h1>
//       {/* {message && <Message variant='danger'>{message}</Message>}
//       {error && <Message variant='danger'>{error}</Message>}
//       {loading && <Loader />} */}
//       <Form onSubmit={submitHandler}>
//         <Form.Group controlId='name'>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type='name'
//             placeholder='Enter name'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId='email'>
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control
//             type='email'
//             placeholder='Enter email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId='password'>
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Enter password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Form.Group controlId='confirmPassword'>
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type='password'
//             placeholder='Confirm password'
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           ></Form.Control>
//         </Form.Group>

//         <Button type='submit' variant='primary'>
//           Register
//         </Button>
//       </Form>

//       {/* <Row className='py-3'>
//         <Col>
//           Have an Account?{' '}
//           <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
//             Login
//           </Link>
//         </Col>
//       </Row> */}
//     </FormContainer>
//   )
// }

import React from 'react'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import Message from '../components/Message'
// import Loader from '../components/Loader'
// import { register } from '../actions/userActions'
import FormContainer from './FormContainer'
import { Form, Button, Row, Col } from 'react-bootstrap'

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '', confirmPassword: '', message: ''};
  }
 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    console.log(this.state)
    fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}
 
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>
        <label>
          emial:
          <input type="email" value={this.state.value} name="email" onChange={this.handleChange} />
        </label>
        <label>
          password:
          <input type="password" value={this.state.value} name="password" onChange={this.handleChange} />
        </label>
        <label>
          confirm Password:
          <input type="password" value={this.state.value} name="confirmPassword" onChange={this.handleChange} />
        </label>
        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
    );
  }
}

export default RegisterScreen;