import React, { useContext, useEffect } from 'react';
import styles from './login.module.css';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../Store/storeContext';

const Login = () => {
    const { loged, setLoged } = useContext(StoreContext);

    function login(e) {
        e.preventDefault();

        // Extract form data
        const formData = new FormData(e.target);
        const enteredEmail = formData.get('userName');
        const enteredPassword = formData.get('password');

        // Retrieve users from local storage
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if user exists and verify password
        const user = users.find(user => user.email === enteredEmail);
        if (user && user.password === enteredPassword) {
            // Set login status and store in local storage
            setLoged(true);
            localStorage.setItem('loged', JSON.stringify({ isLoged: true, name: user.name }));
            console.log('Login successful:', { isLoged: true, name: user.name });
            window.location.href = '/';
        } else {
            alert('Incorrect email or password');
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='full-page-section'>
            <div className='centre-page-section min-h-[900px] justify-center bg-green '>
                <div className='h-3/4 flex flex-col items-centre w-[450px] '>
                    <div className='h-1/6 w-full items-center justify-center flex font-bold'>
                        <h1>Sign in to <span className='text-blue-500'>E Commerce</span></h1>
                    </div>
                    <div style={{backgroundColor:'rgba(95, 84, 171, 0.31)'}} className={styles.inputDetails}>
                        <form className={styles.inputForm} action="#" onSubmit={login}>
                            <div className={styles.inputField}>
                                <label htmlFor="userName">Email address</label>
                                <input type="text" className={styles.formControl} id="userName" name="userName" placeholder='Only alphanumeric allowed [a-z, 0-9]' />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className={styles.formControl} id="password" name="password" placeholder='Enter a new password' />
                            </div>
                            <button style={{ margin: '30px' }} className={styles.submit} type="submit">Sign In</button>
                        </form>
                        {/* <div className={styles.useEmail}>
                            <p>Or continue with</p>
                        </div> */}
                        {/* <div className={styles.loginWithGF}>
                            <NavLink className={styles.withLogin}><img className='h-6' src="https://shorturl.at/bhrxL" alt="" /></NavLink>
                            <NavLink className={styles.withLogin}><img className='h-6' src="https://shorturl.at/tAKSV" alt="" /></NavLink>
                        </div> */}
                        <div className={styles.createAccount}>
                        <p style={{ margin: '30px' }}>Don't have an account? <NavLink to='/signUp' className={styles.createSignUp}> Create Account</NavLink>
                        </p>
                        </div>
                        {/* <div className={styles.verifyEmail}>
                            <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
