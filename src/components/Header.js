function Header({ title }) {
  return (
    <header class="navbar navbar-dark sticky-top bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">{title}</span>
      </div>
    </header>
  );
}

export default Header;
