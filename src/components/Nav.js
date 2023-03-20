import blackLogo from '../images/logo_black.png'
import colorLogo from '../images/logo_yellow.png'

const Nav = ({ minimal, authToken, setShowModal }) => {

  const handleClick = () => {
      setShowModal(true)
  }

  return (
      <nav>
        <div className="logo-area">
          <img className="logo" src={minimal ? blackLogo : colorLogo}/>
        </div>

        {!authToken && !minimal && <button
          className="nav-btn"
          onClick={handleClick}
        >Log in</button>}
      </nav>
  )
}
export default Nav
