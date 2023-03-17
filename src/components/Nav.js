import whiteLogo from '../images/logo_white.png'
import colorLogo from '../images/logo_yellow.png'

const Nav = ({minimal, authToken}) => {

  return (
      <nav>
        <div className="logo-area">
          <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
        </div>

        {!authToken && <button className="nav-btn" >Log in</button>}
      </nav>
  )
}
export default Nav
