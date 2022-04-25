// import "./signUp.css"
export default function RestaurantSignUp() {
    return (
        <div className="signupMain" >
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Restaurant Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Restaurant Address
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                    />
                </div>
                <div className="mb-3 form-check d-flex justify-content-between">
                    <div>
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" for="exampleCheck1">
                            Remember Me
                        </label>
                    </div>
                    <div>
                        <span>Already Have an account? <a href="/login" style={{ color: "white" }} >Login In</a></span>
                    </div>
                </div>
                <button type="submit" className="btn w-100 signupSubmit">
                    Sign Up
                </button>
            </form>
        </div>
    );
}
