import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactMe() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        } else {
            console.log('errorMessage', errorMessage);
        }

    }

    //console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }



    return (
        <section class="row">
            <aside class="aside">
                <h3 id="Contact Me">Contact Me</h3>
            </aside>
            <section class="section">
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                    </div>
                    <div>
                        <input class="form-control" type="text" defaultValue={name} onChange={handleChange} name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                    </div>
                    <div>
                        <input class="form-control" type="email" defaultValue={email} onChange={handleChange} name="email" />

                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                    </div>
                    <div>
                        <textarea class="form-control" name="message" defaultValue={message} onChange={handleChange} rows="5" />

                    </div>
                    {errorMessage && (
                        <div>
                            <p class="is-danger">{errorMessage}</p>
                        </div>
                    )}
                    <button class="btn btn-secondary btn-lg btn-block mt-3" type="submit">Submit</button>
                </form>
            </section>
        </section>
    );
}
export default ContactMe;