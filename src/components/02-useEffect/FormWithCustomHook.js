import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {
    const [form, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    })

    const {name, email, password} = form;
    console.log(form);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form With Custom Hook</h1>
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
            <div className = "form-group">
                <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>
        </form>
    )
};