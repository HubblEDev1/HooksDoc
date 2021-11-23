import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    const {name, email} = form;
    console.log(form);
    useEffect(() => {
        console.log('Hola');
    }, []);//If we add an empty array the effect will dispatch one time

    useEffect(() => {
        console.log('Form');
    }, [form]);//If we add the dependency that we want dispatch

    useEffect(() => {
        console.log('Email effect');
    }, [email]);

    const handleInputChange = ({target}) => {
        console.log(target);
        setForm({
            ...form,
            [target.name]: target.value,
        });        
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className = "form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className = "form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            {(name === '123') && <Message/>}
        </>
    )
};
