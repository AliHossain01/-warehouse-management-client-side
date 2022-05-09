import React from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';


const AddBook = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        // console.log(data);
        const url = `http://localhost:5000/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast('Book Added');
                reset()
            })
    };




    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Please add a Book</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Description' value={user?.email} {...register("email")} />
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 50 })} />

                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Supplier' type="text" {...register("supplier")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input type="submit" value="Add Book" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddBook;