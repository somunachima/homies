import { useState } from "react"
import Nav from "../components/Nav"

const OnBoarding = () => {

  const handleSubmit = () => {
      console.log("submitted")
  }

  const handleChange = () => {
    console.log("change")
  }

  return (
      <>
        <Nav
            minimal={true}
            setShowModal={() => []}
            showModal={false}
        />
        <div className="onboarding">
          <h2>CREATE ACCOUNT</h2>

          <form onSubmit={handleSubmit}>
              <section>
                  <label htmlFor="first_name">First Name</label>
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    required={true}
                    value={""}
                    onChange={handleChange}
                  />

                  <label>Birthday</label>
                  <div className="multiple-input-container">
                    <input
                      id="dob_day"
                      type="number"
                      name="dob_day"
                      placeholder="DD"
                      required={true}
                      value={""}
                      onChange={handleChange}
                    />
                    <input
                      id="dob_month"
                      type="number"
                      name="dob_month"
                      placeholder="MM"
                      required={true}
                      value={""}
                      onChange={handleChange}
                    />
                    <input
                      id="dob_year"
                      type="number"
                      name="dob_year"
                      placeholder="YYYY"
                      required={true}
                      value={""}
                      onChange={handleChange}
                    />
                  </div>

                  <label>Gender</label>
                  <div className="multiple-input-container">
                    <input
                      id="man-gender-identity"
                      type="radio"
                      name="gender-identity"
                      placeholder="Man"
                      value="man"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="man-gender-identity">Man</label>
                    <input
                      id="woman-gender-identity"
                      type="radio"
                      name="gender-identity"
                      placeholder="Woman"
                      value="woman"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="woman-gender-identity">Woman</label>
                    <input
                      id="transgender-identity"
                      type="radio"
                      name="gender-identity"
                      placeholder="Non-Binary"
                      value="transgender"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="transgender-identity">Transgender</label>
                    <input
                      id="non-binary-identity"
                      type="radio"
                      name="gender-identity"
                      placeholder="Non-Binary"
                      value="non-binary"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="non-binary-identity">Non-Binary</label>
                    <input
                      id="more-gender-identity"
                      type="radio"
                      name="gender-identity"
                      placeholder="More"
                      value="more"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="more-gender-identity">More</label>
                  </div>

                  <label htmlFor="show-gender">Show gender on my profile</label>
                  <input
                    id="show-gender"
                    type="checkbox"
                    name="show-gender"
                    onChange={handleChange}
                    checked={false}
                    />

                  <label>Show Me</label>
                  <div className="multiple-input-container">
                  <input
                      id="man-gender-interest"
                      type="radio"
                      name="gender-interest"
                      placeholder="Man"
                      value="man"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="man-gender-interest">Man</label>
                    <input
                      id="woman-gender-interest"
                      type="radio"
                      name="gender-interest"
                      placeholder="Woman"
                      value="woman"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="woman-gender-interest">Woman</label>
                    <input
                      id="transgender-interest"
                      type="radio"
                      name="gender-interest"
                      placeholder="Non-Binary"
                      value="transgender"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="transgender-interest">Transgender</label>
                    <input
                      id="non-binary-interest"
                      type="radio"
                      name="gender-interest"
                      placeholder="Non-Binary"
                      value="non-binary"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="non-binary-interest">Non-Binary</label>
                    <input
                      id="everyone-gender-interest"
                      type="radio"
                      name="gender-interest"
                      placeholder="More"
                      value="more"
                      onChange={handleChange}
                      checked={false}
                    />
                    <label htmlFor="more-gender-interest">Everyone</label>
                  </div>

                  <label htmlFor="about">About</label>
                  <input
                    id="about"
                    type="text"
                    name="about"
                    required={true}
                    placeholder="I like going for long walks..."
                    value={""}
                    onChange={handleChange}
                  />
                  <input type="submit"/>
              </section>

              <section>
                <label htmlFor="profile-picture">Profile Picture</label>
                <input
                  type="url"
                  name="url"
                  id="url"
                  onChange={handleChange}
                  required={true}
                />
                <div className="pic-container">

                </div>
              </section>
          </form>
        </div>
      </>
  )
}
export default OnBoarding
