import React from "react";
import styles from '../styles/Profile.module.css'

export const Profile = () => { 
    return (
        <div className={styles.profileContainer}>
            <form>
                <input  name='firstName' type='text' required placeholder="Edit First Name" ><button>Edit</button> </input>
            </form>
        </div>
    )
}
