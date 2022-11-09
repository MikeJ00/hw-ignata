import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType>  // need to fix any
    addUserCallback: (name: string) => void // need to fix any
}

export const pureAddUser = (name: string, setError: (error: string) => void,
                            setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    if(name.trim()){
        setName(name);
        addUserCallback(name.trim());
        setName("")
    } else {
        setError("Ошибка! Введите имя!")
    }
    // {
    //     name === setName(name) ? setError("Ошибка! Введите имя!") : addUserCallback(name.trim()) & setName("")
    // можно ли написать тернарным оператором? }

}

export const pureOnBlur = (name: string, setError:(error:string)=>void) => {
    // если имя пустое - показать ошибку
    if(name.trim() === ""){
        setError("Ошибка! Введите имя!")
    }
}

export const pureOnEnter = (e:KeyboardEvent<HTMLInputElement>, addUser:()=>void ) => {
    if(e.key==="Enter"){
        addUser();
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length// need to fix
    const lastUserName = users[users.length - 1]?.name
        // users.length > 0 ? users[users.length - 1].name : undefined use
        // users[totalUsers.length - 1].name don't work
    // users[users.length - 1]
        // users.length ? users[totalUsers - 1].name : "" work

    // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
