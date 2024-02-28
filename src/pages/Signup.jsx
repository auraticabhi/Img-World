import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
                //console.log(user);
            navigate('/');
        } catch (e) {
            setError(e.message)
        }
    }

    return ( <
        div >
        <
        div className = 'mt-5 text-center mb-5' > { error && error } < /div> <
        div className = "hero min-h-screen bg-base-200" >
        <
        div className = "hero-content flex-col" >
        <
        div className = "text-center" >
        <
        h1 className = "text-5xl font-bold" > Img. { " " }
        World < /h1> <
        p className = "py-6" > Sign Up to share your photos to the world! < /p> <
        /div> <
        div className = "card sm:w-[30rem] shadow-2xl bg-base-100" >
        <
        form className = "card-body"
        onSubmit = { handleSubmit } >
        <
        div className = "form-control" >
        <
        label className = "label" >
        <
        span className = "label-text" > Email < /span> <
        /label> <
        input type = "email"
        value = { email }
        onChange = {
            (e) => { setEmail(e.target.value) } }
        placeholder = "email"
        className = "input input-bordered"
        required / >
        <
        /div> <
        div className = "form-control" >
        <
        label className = "label" >
        <
        span className = "label-text" > Password < /span> <
        /label> <
        input type = "password"
        placeholder = "password"
        value = { password }
        onChange = {
            (e) => { setPassword(e.target.value) } }
        className = "input input-bordered"
        required / >
        <
        /div> <
        div className = "form-control mt-6" >
        <
        button type = 'submit'
        className = "btn btn-primary" > Sign Up < /button> <
        /div> <
        /form> <
        p className = 'text-center mb-3' > Already have an account ? < Link to = '/login' > < span className = 'font-bold underline' > Login < /span></Link > < /p> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}

export default Signup;