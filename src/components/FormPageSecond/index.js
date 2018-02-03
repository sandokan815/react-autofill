import React, { Component } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import Phone from 'react-phone-number-input';
import 'react-phone-number-input/rrui.css';
import 'react-phone-number-input/style.css';
import './FormPageSecond.css';

class FormPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isDisabled: true
    }

    this.changeFirstName = this.changeFirstName.bind(this)
    this.changeLastName = this.changeLastName.bind(this)
    this.changeAddress = this.changeAddress.bind(this)
    this.changePostCode = this.changePostCode.bind(this)
    this.changeCity = this.changeCity.bind(this)
    this.changeCountry = this.changeCountry.bind(this)
    this.changeTerritory = this.changeTerritory.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhone = this.changePhone.bind(this)
  }

  changeFirstName (e) {
    const value = e.currentTarget.value;
    this.props.onChangeFirstName(value);
  }
  changeLastName (e) {
    const value = e.currentTarget.value;
    this.props.onChangeLastName(value);
  }
  changeAddress (e) {
    const value = e.currentTarget.value;
    this.props.onChangeAddress(value);
  }
  changePostCode (e) {
    const value = e.currentTarget.value;
    this.props.onChangePostCode(value);
  }
  changeCity (e) {
    const value = e.currentTarget.value;
    this.props.onChangeCity(value);
  }
  changeCountry (value) {
    this.props.onChangeCountry(value);
  }
  changeTerritory (value) {
    this.props.onChangeTerritory(value);
  }
  changeEmail (e) {
    const value = e.currentTarget.value;
    this.props.onChangeEmail(value);
  }
  changePhone (value) {
    this.props.onChangePhone(value);
  }

  render () {
    const {
      firstName,
      lastName,
      address,
      postCode,
      city,
      country,
      territory,
      email,
      phone
    } = this.props.formState;
    return (
      <form>
        <div className="form-content">
          <div className="form-item">
            <label>First Name:</label>
            <input type="text" placeholder="First Name" value={firstName} onChange={this.changeFirstName} />
          </div>
          <div className="form-item">
            <label>Last Name:</label>
            <input type="text" placeholder="last Name" value={lastName} onChange={this.changeLastName} />
          </div>
          <div className="form-item">
            <label>Address:</label>
            <input type="text" placeholder="Address" value={address} onChange={this.changeAddress} />
          </div>
          <div className="form-item">
            <label>PostCode:</label>
            <input type="text" placeholder="Post Code" value={postCode} onChange={this.changePostCode} />
          </div>
          <div className="form-item">
            <label>City:</label>
            <input type="text" placeholder="City" value={city} onChange={this.changeCity} />
          </div>
          <div className="form-item">
            <label>Country:</label>
            <CountryDropdown
              value={country}
              onChange={this.changeCountry} />
          </div>
          <div className="form-item">
            { country === 'Australia' ? <label>Territory:</label> : <label>State:</label> }
            <RegionDropdown
              country={country}
              value={territory}
              onChange={this.changeTerritory} />
          </div>
          <div className="form-item">
            <label>Email:</label>
            <input type="email" placeholder="Email" value={email} onChange={this.changeEmail} />
          </div>
          <div className="form-item">
            <label>Phone:</label>
            <Phone
              country="US"
              placeholder="Enter a phone number"
              value={phone}
              onChange={this.changePhone} />
          </div>
          <div className="form-submit">
            <button disabled={this.state.isDisabled} value="Submit" type="submit" onClick={this.onClick}><span>Submit</span></button>
          </div>
        </div>
      </form>
    )
  }
}

export default FormPage