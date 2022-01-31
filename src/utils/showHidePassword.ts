export const showHidePassword = (e:Event) => {
    e.preventDefault()
    const phoneInput = document.getElementById('password-input') as HTMLFormElement;

    if (phoneInput.type === "password") {
        phoneInput.type = "text";
    } else {
        phoneInput.type = "password";
    }
}