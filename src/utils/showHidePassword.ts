export const showHidePassword = (e:Event) => {
    e.preventDefault()
    const passwordInput = document.getElementById('password-input') as HTMLFormElement;
    
    passwordInput.type = (passwordInput.type === 'password')? 'text' : 'password';
}