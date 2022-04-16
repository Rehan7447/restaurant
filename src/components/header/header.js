import "./header.css";

export default function Header() {
  return (
    <nav>
      <a href="/" className="nav-logo">
        Logo
      </a>
      <div className="nav-links" >
        <a href="/login">Login</a>
        <a href="/signUp">Register</a>
      </div>
    </nav>
  );
}
