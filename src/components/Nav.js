import blackLogo from '../images/logo_black.png'
import colorLogo from '../images/logo_yellow.png'

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

  const handleClick = () => {
      setShowModal(true)
      setIsSignUp(false)
  }

  const authToken = false
  return (
      <nav>
        <div className="logo-area">
          <img className="logo" src={minimal ? blackLogo : colorLogo}/>
        </div>

        {!authToken && !minimal && <button
          className="nav-btn"
          onClick={handleClick}
          disabled={showModal}
        >Log in</button>}
      </nav>
  )
}
export default Nav
