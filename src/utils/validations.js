export const isValidEmail = (email) => {
  const match = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return !!match;
};

export const isValidPassword = (password) => {
  const match = String(password).match(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{8,50}/);

  return !!match;
};

export const isEmail = (email) => {
  return isValidEmail(email) ? undefined : 'El correo no parece ser válido';
};

export const isPassword = (password) => {
  return isValidPassword(password)
    ? undefined
    : 'La contraseña de tener un mínimo 8 caracteres, e incluir al menos una letra en mayúscula y un caracter especial';
};
