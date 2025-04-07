export function Footer() {
  return (
    <footer className="page-footer indigo lighten-4">
      <div className="container">
        <div className="row">
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          ©  {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">
            More Links
          </a>
        </div>
      </div>
    </footer>
  );
}
