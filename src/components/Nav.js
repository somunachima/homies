import whiteLogo from '../images/logo_white.png'
import colorLogo from '../images/logo_yellow.png'

const Nav = ({minimal}) => {

  return (
      <nav>
        <div className="logo-area">
          <img className="logo" src={minimal ? colorLogo : whiteLogo}/>
        </div>
      </nav>
  )
}
export default Nav
