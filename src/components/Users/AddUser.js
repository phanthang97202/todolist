import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError ] = useState();

    const handlerEnteredUsername = (e) => {
        console.log(enteredUsername);
        setEnteredUsername(e.target.value);
    };
    const handlerEnteredAge = (e) => {
        console.log(enteredAge);
        setEnteredAge(e.target.value);
    };

    const addUserHanlder = (event) => {
        event.preventDefault();        
        // console.log('username', enteredUsername);
        // console.log('age', enteredAge);

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Empty value', 
                message: "Please not enter empty value ! ",
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Value less than 1',
                message: 'Please not enter value < 1 ! ',
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('');
    
    };

    const handlerClose = () => {
        setError();
    }

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onClose={handlerClose}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHanlder}>
                    <label htmlFor="username">UserName</label>
                    <input value={enteredUsername} onChange={handlerEnteredUsername} id="username" type="text" />

                    <label htmlFor="age">Age</label>
                    <input value={enteredAge} onChange={handlerEnteredAge} id="age" type="number" />

                    <Button type="submit"> Add user</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
