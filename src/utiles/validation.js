export const validateEmail = (email , that) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (typeof email === 'undefined' || email.trim() === "" || re.test(email)) {
        //return true;
        that.setState({emailError: ""});
    } else if (email.trim() !== '' && !re.test(email)) {
        //return false;
        that.setState({emailError: "Adresse e-mail invalide ."})
    }
};

export const validatePass = (pass , that) => {
    let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    if (typeof pass === 'undefined' || re.test(pass) || pass.trim() === "") {
        that.setState({passError: ""})
    } else if (!re.test(pass)) {
        that.setState({passError: "mot de pass doit contenir au moins 8 caractères dont est majuscule et un est numerique "})
    }
};

export const validateConfirmPass = (confirmPass , that) => {
    if (typeof confirmPass === 'undefined' || confirmPass.trim() === "" || confirmPass === that.state.passInput) {
        that.setState({confirmPassError: ""})
    } else if (confirmPass !== that.state.passInput) {
        that.setState({confirmPassError: "les mots de passe saisis ne correspondent pas"})
    }
};

export const validateUsername = (user , that) => {
    let hasNumber = /\d/;
    if (typeof user === 'undefined' || user.trim() === "") {
        that.setState({userError: ""})
    } else if (user.length < 8 || hasNumber.test(user)) {
        that.setState({userError: "Username doit contenir au moins 8 caractères non numeriques"})
    } else {
        that.setState({userError: ""})
    }
};