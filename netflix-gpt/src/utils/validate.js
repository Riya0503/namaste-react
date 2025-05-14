export const checkValidData = (email, pswd, name="-1") => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(pswd);
    const isNameValid = /^[a-z ,.'-]+$/i.test(name)

    if(name !== '-1' && !isNameValid) return 'Name is not Valid';
    if(!isEmailValid) return 'Email Id not valid'
    if( !isPasswordValid) return 'Password Id not valid'

    return null;
}