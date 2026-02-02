import { Instagram, Twitter, Facebook } from "react-feather"

function Footer() {
  return (
    <footer>
      <div aria-label="Redes sociales">
        <a
          href="https://www.instagram.com/el_rincon_del_minion/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <Twitter />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <Facebook />
        </a>
      </div>
    </footer>
  )
}

export default Footer
