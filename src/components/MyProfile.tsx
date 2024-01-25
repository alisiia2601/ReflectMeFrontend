import React, { useState } from 'react';
import styles from './MyProfile.module.css';

function MyProfile() {
  const [userName, setUserName] = useState('John Doe'); // Default name
  const [userRole, setUserRole] = useState(''); // Default role
  const [isEditing, setIsEditing] = useState(true); // State to control editing mode

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserRole(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setIsEditing(false);
    // You can perform any additional actions upon submission if needed
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileHeader}>
        <div className={styles.profileImageContainer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16s-8-4.5-8-8a8 8 0 1 1 16 0c0 3.5-8 8-8 8zm6-2a6.4 6.4 0 0 1-3.4 1c-1.3 0-2.6-.4-3.7-1" />
          </svg>
        </div>
        <h2>{userName}</h2>
        <p>{userRole}</p>
        {isEditing && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={handleNameChange}
            />
            <input
              type="text"
              placeholder="Enter your role"
              value={userRole}
              onChange={handleRoleChange}
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <div className={styles.profileBoxes}>
        <a href="/create-post" className={styles.profileBox}>
          <h3>Create Post</h3>
          <p>Create and share your thoughts with the community.</p>
        </a>
        <a href="/messages" className={styles.profileBox}>
          <h3>Messages</h3>
          <p>Check and respond to your messages.</p>
        </a>
        <a href="/my-posts" className={styles.profileBox}>
          <h3>My Posts</h3>
          <p>View and manage your published posts.</p>
        </a>
      </div>
    </div>
  );
}

export default MyProfile;
