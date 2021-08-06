export const ERROR_SIGNIN = 'ERROR_SIGNIN';
export const ERROR_SIGNUP = 'ERROR_SIGNUP';
export const ERROR_CONTACT= 'ERROR_CONTACT';

export const errorSignIn = (messageSignIn) => ({
  type: ERROR_SIGNIN,
  messageSignIn,
})
export const errorSignUp = (messageSignUp) => ({
  type: ERROR_SIGNUP,
  messageSignUp,
})
export const errorContact = (messageErrorContact) => ({
  type: ERROR_CONTACT,
  messageErrorContact,
})

