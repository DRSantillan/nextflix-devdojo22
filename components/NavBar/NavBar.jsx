// Author: Dean Santillan @2022
// Email: dean@deansantillan.com

//
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

//
import css from './NavBar.module.scss';

// this is located at the top of the every page.
const NavBar = ({ userName }) => {

    // state management vars
    const [showSignOutDropDown, setShowSignOutButton] = useState(false)
	const router = useRouter();

	// this method determines whick link was clicked then
    // send the user to the specified link
    const handleNavBarLinkClick = event => {
		event.preventDefault();
		const clickedLinked = event.target.id;
		clickedLinked === 'home'
			? router.push('/')
			: router.push('/browse/my-list') 
	};

    // this handles when the user clicks on the username to show
    // a sign out link
    const handleShowDropdown = () => {
       setShowSignOutButton(!showSignOutDropDown)
    }

   // 
	return (
		<div className={css.container}>
			<div className={css.wrapper}>
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

				<ul className={css.navItems}>
					<li
						id='home'
						className={css.navItem}
						onClick={handleNavBarLinkClick}
					>
						Home
					</li>
					<li
						id='myList'
						className={css.navItem2}
						onClick={handleNavBarLinkClick}
					>
						My List
					</li>
				</ul>
				<nav className={css.navContainer}>
					<div>
						<button
							className={css.usernameBtn}
							onClick={handleShowDropdown}
						>
							<p className={css.username}>{userName}</p>
                            <Image src='/static/expand_more.svg' width={24} height={24} />
						</button>
						{showSignOutDropDown && (
							<div className={css.navDropdown}>
								<div>
									<Link href='/login'>
										<a className={css.linkName}>Sign Out</a>
									</Link>

									<div className={css.lineWrapper}></div>
								</div>
							</div>
						)}
					</div>
				</nav>
			</div>
		</div>
	);
};

//
export default NavBar;
