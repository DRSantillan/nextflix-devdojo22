// Author: Dean Santillan @2022
// Email: dean@deansantillan.com
// 16-03-2022
// Login Component

//
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

//
import css from '../styles/Login.module.css';

//
const Login = ({}) => {
    const router = useRouter()
	const [email, setEmail] = useState();
	const [emailValid, setEmailValid] = useState(true);
	//
	const handleSignInWithEmail = () => {
		if (email && email === 'gaijincoach@gmail.com') {
			console.log(email, 'sending user to dashboard');
			setEmailValid(true);
            router.push('/')
		}

		if (!email) {
			setEmailValid(false);
		}
	};
	const handleEmailInputChange = event => {
		const emailAddress = event.target.value;
		if (emailAddress) setEmailValid(true);
		setEmail(emailAddress);
	};
	return (
		<div className={css.container}>
			<Head>
				<title>NextFlix Login</title>
			</Head>

			<header className={css.header}>
				<div className={css.headerWrapper}>
					<Link href='/' className={css.logoLink}>
						<a className={css.logoWrapper}>
							<Image
								src='/static/netflix.svg'
								alt='Netflix Logo'
								width='128px'
								height='32px'
							/>
						</a>
					</Link>
				</div>
			</header>
			<main className={css.main}>
				<div className={css.mainWrapper}>
					<h1 className={css.signinHeader}>Sign In</h1>
					<input
						id='email'
						type='text'
						placeholder='Email Address:'
						className={css.emailInput}
						onChange={handleEmailInputChange}
					/>
					{emailValid ? null : (
						<p className={css.userMsg}>
							Enter a valid email address!
						</p>
					)}

					<button
						className={css.loginBtn}
						onClick={handleSignInWithEmail}
					>
						Sign In
					</button>
				</div>
			</main>
		</div>
	);
};

export default Login;
