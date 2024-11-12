import { useState, FormEvent, ChangeEvent } from "react";

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value,
        });
    };

    const validation = () => {
        if (!form.name || !form.email || !form.message) {
            setError("All fields are required");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validation()){
            console.log("Form submitted:", form);
            setForm({
                name: "",
                email: "",
                message: "",
            });
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
                        type="email"
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
                            Submit
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
