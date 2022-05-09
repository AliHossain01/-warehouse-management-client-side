import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from './../../../firebase.init';
import Loading from './../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiLogIn } from 'react-icons/fi';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }


    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
        // toast("Invalid username or password");
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    if (loading || sending) {
        return <Loading></Loading>
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;


        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address');
        }
    }



    return (
        <div className='container w-25 mx-auto'>
            <h2 className='text-dark text-center mt-2'>Please Sign In </h2>

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Email Address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="dark w-50 mx-auto d-block mb-2 " type="submit">
                    Sign In <FiLogIn />
                </Button>

            </Form>



            {errorElement}

            <p>New to Book's World? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Sign Up</Link> </p>
            <p>Forget Password? <button className='btn btn-link text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;