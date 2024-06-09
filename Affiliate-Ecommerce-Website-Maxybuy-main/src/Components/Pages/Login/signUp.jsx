import React from 'react';
import styles from './login.module.css';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    function onsubmit(e) {
        e.preventDefault(); // Prevent the default form submission

        // Extract form data
        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        // Check if user already exists
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === data.email);

        if (userExists) {
            alert('User already exists');
        } else {
            // Store new user data
            users.push(data);
            localStorage.setItem('users', JSON.stringify(users));
            console.log('User registered successfully:', data);
        }

    }

    return (
        <div className='full-page-section'>
            <div  className='centre-page-section min-h-[900px] justify-center'>
                <div className={styles.loginOuter}>
                    {/* <div className={styles.heading}>
                        <h1>Create a <span>free account</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolores voluptate molestiae sequi.</p>
                    </div> */}
                    <h1 style={{fontSize:'35px'}}>signUp</h1>
                    <div style={{backgroundColor:'rgba(95, 84, 171, 0.31)'}} className={styles.inputDetails}>
                        {/* <div className={styles.loginWithGF}>
                            <NavLink className={styles.withLogin}><img className='h-6' src="https://shorturl.at/bhrxL" alt="" /></NavLink>
                            <NavLink className={styles.withLogin}><img className='h-6' src="https://shorturl.at/tAKSV" alt="" /></NavLink>
                        </div> */}
                        {/* <div className={styles.useEmail}>
                            <p>Or use email to signup </p>
                            
                        </div>
                        <h1>signUp</h1> */}
                        <form className={styles.inputForm} action="#" onSubmit={onsubmit}>
                            <div className={styles.inputField}>
                                <label htmlFor="name">Name</label>
                                <input type="text" className={styles.formControl} id="name" name="name" placeholder='Enter your name' />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className={styles.formControl} id="email" name="email" placeholder='Enter your email Address' />
                            </div>
                            <div className={styles.inputField}>
                                <label htmlFor="password">Password</label>
                                <input type="password" className={styles.formControl} id="password" name="password" placeholder='Enter a new password' />
                            </div>
                            <button className={styles.submit} type="submit">Sign Up</button>
                        </form>
                        <div className={styles.createAccount}>
                            <p style={{margin:'30px'}}>Already Sign Up <NavLink to='/login' className={styles.createSignUp}>Login</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
