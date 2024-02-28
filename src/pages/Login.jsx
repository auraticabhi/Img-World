import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
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
        p className = "py-6" > Login to Img.World < /p> <
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
        className = "btn btn-primary" > Login < /button> <
        /div> <
        /form> <
        p className = 'text-center mb-3' > New to Img.World ? < Link to = '/signup' > < span className = 'font-bold underline' > Sign Up < /span></Link > < /p> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}

export default Login;