export const UPDATE_FIRSTNAME = '@UPDATE_FIRSTNAME';
export const UPDATE_LASTNAME = '@UPDATE_LASTNAME';
export const UPDATE_ADDRESS = '@UPDATE_ADDRESS';
export const UPDATE_POSTCODE = '@UPDATE_POSTCODE';
export const UPDATE_CITY = '@UPDATE_CITY';
export const UPDATE_COUNTRY = '@UPDATE_COUNTRY';
export const UPDATE_TERRITORY = '@UPDATE_TERRITORY';
export const UPDATE_EMAIL = '@UPDATE_EMAIL';
export const UPDATE_PHONE = '@UPDATE_PHONE';

export const onChangeFirstName = (value) => ({
  type: UPDATE_FIRSTNAME,
  value
});

export const onChangeLastName = (value) => ({
  type: UPDATE_LASTNAME,
  value
});

export const onChangeAddress = (value) => ({
  type: UPDATE_ADDRESS,
  value
});

export const onChangePostCode = (value) => ({
  type: UPDATE_POSTCODE,
  value
});

export const onChangeCity = (value) => ({
  type: UPDATE_CITY,
  value
});

export const onChangeCountry = (value) => ({
  type: UPDATE_COUNTRY,
  value
});

export const onChangeTerritory = (value) => ({
  type: UPDATE_TERRITORY,
  value
});

export const onChangeEmail = (value) => ({
  type: UPDATE_EMAIL,
  value
});

export const onChangePhone = (value) => ({
  type: UPDATE_PHONE,
  value
});