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

export const isValidName = (password) => {
  const match = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]{3,50}$/;

  return !!match;
};

export const isEmail = (email) => {
  return isValidEmail(email) ? undefined : 'No es un email válido';
};

export const isPassword = (password) => {
  return isValidPassword(password) ? undefined : 'Mín. 8 caracteres, 1 mayúscula, 1 minúscula y 1 caracter especial';
};

export const isName = (password) => {
  return isValidPassword(password) ? undefined : 'Mín. 3 caracteres. No se permiten números ni caracteres especiales';
};
