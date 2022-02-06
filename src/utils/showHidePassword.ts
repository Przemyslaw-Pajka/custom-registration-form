export const showHidePassword = (e:React.MouseEvent) => {
    e.preventDefault()
    const passwordInput = document.getElementById('password-input') as HTMLFormElement;
    
    passwordInput.type = (passwordInput.type === 'password')? 'text' : 'password';
}