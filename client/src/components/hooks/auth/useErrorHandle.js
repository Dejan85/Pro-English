const useErrorHandle = () => {
  const errorHandle = input => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    const expression2 = /\d/;

    const firstname = (function() {
      if (!input.name) {
        return "Firstname is required";
      } else if (!input.name.length < 3 && !input.name.length > 20) {
        return "Name must be between 3 and 20 characters";
      }
    })();
    const lastname = (function() {
      if (!input.lastname) {
        return "Lastname is required";
      } else if (!input.lastname.length < 3 && !input.lastname.length > 20) {
        return "Name must be between 3 and 20 characters";
      }
    })();
    const email = (function() {
      if (!input.email) {
        return "Email is required";
      } else if (!expression.test(String(input.email).toLowerCase())) {
        return "Enter valid email addres";
      }
    })();
    const password = (function() {
      if (!input.password) {
        return "password is required";
      } else if (input.password !== input.confirmPassword) {
        return "Password does not match";
      } else if (!input.password.match(expression2)) {
        return "Password must contain a number";
      } else if (input.password.length < 6) {
        return "Password must be at least 6 chars long";
      }
    })();
    return {
      firstname,
      lastname,
      email,
      password,
    };
  };

  return {
    errorHandle,
  };
};

export default useErrorHandle;
