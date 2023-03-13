const Home = () => {

  const authToken = true

  const handleClick = () => {
    console.log('clicked')
  }
  <Nav/>
  return (
        <div className="home">
          <h1>Swipe Right</h1>
          <button className="home-btn" onClick={handleClick}>
              {authToken ? 'Signout' : 'Create Account'}
          </button>
        </div>
    )
}
export default Home
