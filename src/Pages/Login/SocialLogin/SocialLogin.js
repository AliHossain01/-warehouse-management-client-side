import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import { BsGithub } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>

    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
                <p className='mt-2 px-2'>OR</p>
                <div style={{ height: '1px' }} className='bg-dark w-50'></div>
            </div>
            {errorElement}

            <div >
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-outline-dark  w-25 d-block mx-auto my-2'>
                    <BsGoogle className='icon' />

                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-outline-dark  w-25 d-block mx-auto'>
                    <BsGithub className='icon' />

                </button>
            </div>
        </div>
    );
};

export default SocialLogin;