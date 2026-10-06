import authPhoto from "../assets/sign_up_image.png";

function AuthPage() {
  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-content">
          <p className="eyebrow">All your services, just a Single Plan</p>

          <h1>
            Create your <span>Urbannet</span> account
          </h1>

          <p className="intro-text">
            Access The Urban Planner Today.
          </p>

          <form className="auth-form">
            <label>
              Email
              <input type="email" placeholder="Enter your email" />
            </label>

            <label>
              Password
              <input type="password" placeholder="Enter your password" />
            </label>

            <button type="submit">Sign Up / Login</button>
          </form>
        </div>

        <div className="auth-image">
          <img src={authPhoto} alt="Urbannet registration visual" />
        </div>
      </section>
    </main>
  );
}

export default AuthPage;