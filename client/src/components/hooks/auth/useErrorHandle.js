const useErrorHandle = () => {
  const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  const expression2 = /\d/;

  const errorHandle = input => {
    const firstname = (function () {
      if (!input.firstname) {
        return 'Firstname is required';
      } else if (!input.firstname.length < 3 && !input.firstname.length > 20) {
        return 'Name must be between 3 and 20 characters';
      }
    })();
    const lastname = (function () {
      if (!input.lastname) {
        return 'Lastname is required';
      } else if (!input.lastname.length < 3 && !input.lastname.length > 20) {
        return 'Name must be between 3 and 20 characters';
      }
    })();
    const email = (function () {
      if (!input.email) {
        return 'Email is required';
      } else if (!expression.test(String(input.email).toLowerCase())) {
        return 'Enter valid email addres';
      }
    })();
    const password = (function () {
      if (!input.password) {
        return 'Password is required';
      } else if (!input.password.match(expression2)) {
        return 'Password must contain a number';
      } else if (input.password.length < 6) {
        return 'Password must be at least 6 chars long';
      }
    })();

    const confirmPassword = (function () {
      if (input.password !== input.confirmPassword) {
        return 'Password does not match';
      }
    })();

    return {
      firstname,
      lastname,
      email,
      password,
      confirmPassword
    };
  };

  return {
    errorHandle
  };
};

export default useErrorHandle;
