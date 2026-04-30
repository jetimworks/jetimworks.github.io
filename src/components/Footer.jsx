function Footer() {
  return (
    <footer className="footer">
      <img
        src="/logo_white_transparent.png"
        alt="Jetimworks"
        className="footer-logo"
      />
      <p className="footer-text">
        &copy; {new Date().getFullYear()} Jetimworks. Building the future.
      </p>
    </footer>
  )
}

export default Footer