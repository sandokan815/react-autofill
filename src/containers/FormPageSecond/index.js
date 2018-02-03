import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import FormPage from '../../components/FormPageSecond';
import {
  onChangeFirstName,
  onChangeLastName,
  onChangeAddress,
  onChangePostCode,
  onChangeCity,
  onChangeCountry,
  onChangeTerritory,
  onChangeEmail,
  onChangePhone
} from '../../actions/main';

class FormPageContainer extends Component {
  render () {
    return (
      <div>
        <FormPage {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { main } = state;
  return {
    formState: main
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChangeFirstName: (value) => {
      dispatch(onChangeFirstName(value))
    },
    onChangeLastName: (value) => {
      dispatch(onChangeLastName(value))
    },
    onChangeAddress: (value) => {
      dispatch(onChangeAddress(value))
    },
    onChangePostCode: (value) => {
      dispatch(onChangePostCode(value))
    },
    onChangeCity: (value) => {
      dispatch(onChangeCity(value))
    },
    onChangeCountry: (value) => {
      dispatch(onChangeCountry(value))
    },
    onChangeTerritory: (value) => {
      dispatch(onChangeTerritory(value))
    },
    onChangeEmail: (value) => {
      dispatch(onChangeEmail(value))
    },
    onChangePhone: (value) => {
      dispatch(onChangePhone(value))
    }
  }
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FormPageContainer))