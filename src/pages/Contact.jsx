import { useState, FormEvent, ChangeEvent } from "react";

const Contact = () => {
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setSignUpData({
            ...signUpData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const data = await signUp(signUpData);
        } catch (err) {
            console.error("Failed to login", err);
        }
    };

    return (
        <section className="container-fluid">
        <div className="row text-center" id="title">
            <h1 className="col mt-5 mb-4"> Contact </h1>
        </div>

        <div className="d-flex justify-content-center mt-2" id="signUpForm">
            <div className="col-md-4 p-3 text-center border border-3 border-dark rounded-5">
                <form className="form sign-up-form" onSubmit={handleSubmit}>
                    <h3 className="mt-1">Name</h3>
                    <input
                        className="form-input"
                        placeholder="Enter your name here"
                        type="text"
                        name="username"
                        value={signUpData.username || ""}
                        onChange={handleChange}
                    />

                    <h3 className="mt-1">Email</h3>
                    <input
                        className="form-input"
                        placeholder="Enter your email"
                        type="text"
                        name="email"
                        value={signUpData.email || ""}
                        onChange={handleChange}
                    />

                    <h3 className="mt-1">Message</h3>
                    <input
                        className="form-input"
                        placeholder=""
                        type="password"
                        name="password"
                        value={signUpData.password || ""}
                        onChange={handleChange}
                    />
                    <div>
                        <button className="btn btn-primary mt-4" type="submit">
                            Sign Up
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
