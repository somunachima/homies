import blackLogo from '../images/logo_black.png'
import colorLogo from '../images/logo_yellow.png'

const Nav = ({minimal, authToken}) => {

  return (
      <nav>
        <div className="logo-area">
          <img className="logo" src={minimal ? blackLogo : colorLogo}/>
        </div>

        {!authToken && <button className="nav-btn" >Log in</button>}
      </nav>
  )
}
export default Nav
