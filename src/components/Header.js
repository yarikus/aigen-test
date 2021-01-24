function Header({ title }) {
  return (
    <header className="navbar navbar-dark sticky-top bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">{title}</span>
      </div>
    </header>
  );
}

export default Header;
