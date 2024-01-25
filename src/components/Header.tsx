// Header.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import auth from '../lib/auth';

const Header: React.FC = () => {
    const isAuthenticated = auth.isSignedIn();
    const [signOutError, setSignOutError] = useState<string | null>(null);

    const handleSignOut = async () => {
        try {
            // Perform the sign-out logic using the fetch API or your preferred method
            // Example:
            const response = await fetch('/sign-out', { method: 'POST' });

            if (response.ok) {
                // Perform any additional sign-out logic (e.g., clearing user data)
            } else {
                // Handle sign-out error without exposing details
                setSignOutError('Sign-out failed. Please try again.');
            }
        } catch (error) {
            // Handle other errors during sign-out without exposing details
            setSignOutError('Error during sign-out. Please try again.');
        }
    };

    return (
        <div className={classes.header}>
            <Link to="/" className={classes.logoLink}>
                <h1>ReflectMe</h1>
            </Link>
            <div className={classes.headerActions}>
                {isAuthenticated ? (
                    <>
                        <Link to="/create-post" className={classes.buttonLink}>
                            <button className={classes.button}>New Post</button>
                        </Link>
                        <Link to="/my-profile" className={classes.buttonLink}>
                            <button className={classes.button}>Profile</button>
                        </Link>
                        <Link to="/my-posts" className={classes.buttonLink}>
                            <button className={classes.button}>My Posts</button>
                        </Link>
                        <Link to="/messages" className={classes.buttonLink}>
                            <button className={classes.button}>Messages</button>
                        </Link>
                        <button onClick={handleSignOut} className={classes.button}>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/sign-up" className={classes.buttonLink}>
                            <button className={classes.button}>Sign Up</button>
                        </Link>
                        <Link to="/sign-in" className={classes.buttonLink}>
                            <button className={classes.button}>Sign In</button>
                        </Link>
                    </>
                )}
            </div>
            {signOutError && <p className={classes.error}>{signOutError}</p>}
        </div>
    );
};

export default Header;
