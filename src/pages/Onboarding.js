import Nav from "../components/Nav"
import {useState} from "react"

const OnBoarding = () => {
  const [formData, setFormData] = useState({
      user_id: "",
      first_name: "",
      dob_day: "",
      dob_month: "",
      dob_year: "",
      show_gender: false,
      gender_identity: "",
      gender_interest: "",
      email: "",
      location: "",
      available_day: "",
      available_month: "",
      monthly_budget: "",
      url: "",
      about: "",
      matches: []
  })

  const handleSubmit = () => {
      console.log('submitted')
  }

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    const name = e.target.name

    setFormData((prevState) => ({
      ...prevState,
      [name] : value
    }))
  }

  console.log(formData)

  return (
      <>
        <Nav
            minimal={true}
            setShowModal={() => {
            }}
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
                    value={formData.first_name}
                    onChange={handleChange}
                  />

                  <label htmlFor="location">Preferred Location to Live</label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    placeholder="West Hampstead, London"
                    required={true}
                    value={formData.location}
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
                      value={formData.dob_day}
                      onChange={handleChange}
                    />
                    <input
                      id="dob_month"
                      type="number"
                      name="dob_month"
                      placeholder="MM"
                      required={true}
                      value={formData.dob_month}
                      onChange={handleChange}
                    />
                    <input
                      id="dob_year"
                      type="number"
                      name="dob_year"
                      placeholder="YYYY"
                      required={true}
                      value={formData.dob_year}
                      onChange={handleChange}
                    />
                  </div>

                  <label>Gender</label>
                  <div className="multiple-input-container">
                    <input
                      id="man-gender-identity"
                      type="radio"
                      name="gender_identity"
                      value="man"
                      onChange={handleChange}
                      checked={formData.gender_identity === "man"}
                    />
                    <label htmlFor="man-gender-identity">Man</label>

                    <input
                      id="woman-gender-identity"
                      type="radio"
                      name="gender_identity"
                      value="woman"
                      onChange={handleChange}
                      checked={formData.gender_identity === "woman"}
                    />
                    <label htmlFor="woman-gender-identity">Woman</label>

                    <input
                      id="transgender-gender-identity"
                      type="radio"
                      name="gender_identity"
                      value="transgender"
                      onChange={handleChange}
                      checked={formData.gender_identity === "transgender"}
                    />
                    <label htmlFor="transgender-gender-identity">Transgender</label>

                    <input
                      id="non-binary-gender-identity"
                      type="radio"
                      name="gender_identity"
                      value="non-binary"
                      onChange={handleChange}
                      checked={formData.gender_identity === "non-binary"}
                    />
                    <label htmlFor="non-binary-gender-identity">Non-Binary</label>

                    <input
                      id="more-gender-identity"
                      type="radio"
                      name="gender_identity"
                      value="more"
                      onChange={handleChange}
                      checked={formData.gender_identity === "more"}
                    />
                    <label htmlFor="more-gender-identity">More</label>
                  </div>

                  <label htmlFor="show-gender">Show Gender on my profile</label>
                  <input
                    id="show-gender"
                    type="checkbox"
                    name="show-gender"
                    onChange={handleChange}
                    checked={formData.show_gender}
                    />

                  <label>Show Me</label>
                  <div className="multiple-input-container">
                  <input
                      id="man-gender-interest"
                      type="radio"
                      name="gender_interest"
                      value="man"
                      onChange={handleChange}
                      checked={formData.gender_interest === "man"}
                    />
                    <label htmlFor="man-gender-interest">Man</label>

                    <input
                      id="woman-gender-interest"
                      type="radio"
                      name="gender_interest"
                      value="woman"
                      onChange={handleChange}
                      checked={formData.gender_interest === "woman"}
                    />
                    <label htmlFor="woman-gender-interest">Woman</label>

                    <input
                      id="transgender-gender-interest"
                      type="radio"
                      name="gender_interest"
                      value="transgender"
                      onChange={handleChange}
                      checked={formData.gender_interest === "transgender"}
                    />
                    <label htmlFor="transgender-gender-interest">Transgender</label>

                    <input
                      id="non-binary-gender-interest"
                      type="radio"
                      name="gender_interest"
                      value="non-binary"
                      onChange={handleChange}
                      checked={formData.gender_interest === "non-binary"}
                    />
                    <label htmlFor="non-binary-gender-interest">Non-Binary</label>

                    <input
                      id="everyone-gender-interest"
                      type="radio"
                      name="gender_interest"
                      value="everyone"
                      onChange={handleChange}
                      checked={formData.gender_interest === "everyone"}
                    />
                    <label htmlFor="everyone-gender-interest">Everyone</label>
                  </div>

                  <label htmlFor="monthly_budget">Monthly Budget (£)</label>
                  <input
                    id="monthly_budget"
                    type="number"
                    name="monthly_budget"
                    required={true}
                    placeholder="850"
                    value={formData.monthly_budget}
                    onChange={handleChange}
                  />

                  <label>Moving Date</label>
                  <div className="multiple-input-container">
                    <input
                      id="available_day"
                      type="number"
                      name="available_day"
                      placeholder="DD"
                      required={true}
                      value={formData.available_day}
                      onChange={handleChange}
                    />
                    <input
                      id="available_month"
                      type="number"
                      name="available_month"
                      placeholder="MM"
                      required={true}
                      value={formData.available_month}
                      onChange={handleChange}
                    />
                  </div>

                  <label htmlFor="about">About</label>
                  <input
                    id="about"
                    type="text"
                    name="about"
                    required={true}
                    placeholder="I like going for long walks..."
                    value={formData.about}
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
                  <img src={formData.url} alt="profile pic preview"/>
                </div>
              </section>
          </form>
        </div>
      </>
  )
}
export default OnBoarding
