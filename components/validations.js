
export const validarEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const emptyRegex = /^\s*$/;
    
    if (emptyRegex.test(email)) {
      return "El correo electrónico no puede estar vacío.";
    } else if (!emailRegex.test(email)) {
      return "El correo electrónico no es válido.";
    } else if (email.length > 35) {
      return "El correo electrónico no puede tener más de 35 caracteres.";
    }
    
    return ;
  };
  
  export const validarPassword = (password) => {
    const numberRegex = /\d/;
    const lengthRegex = /^.{6,10}$/;
    
    if (!numberRegex.test(password)) {
      return "La contraseña debe contener al menos un número.";
    } else if (!lengthRegex.test(password)) {
      return "La contraseña debe tener una longitud entre 6 y 10 caracteres.";
    }
    
    return ;
}



