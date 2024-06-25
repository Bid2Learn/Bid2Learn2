import { User, Login, Post} from "./User";

const map: Map<string, User> = new Map()

export type signUpResult = "Username taken" | User
export type signUpCallback = (output: signUpResult) => void;
export const signUpUser = (login: Login, cb: signUpCallback): void => {
    const double: User | undefined = map.get(login.username)
    if (double !== undefined) {
        cb("Username taken")
    } else {
        const user: User = {
            Login: login,
            learnPosts: [],
        }    
        map.set(login.username, user)
        cb(user)
    }
}

export type loginResult = "Wrong Password" | "Username doesn't exist" | User
export type loginCallback = (output: loginResult) => void;
export const loginUser = (login: Login, cb: loginCallback): void => {
    const user: User | undefined = map.get(login.username)
    if (user === undefined) {
        cb("Username doesn't exist")
    } else {
        if (user.Login.password !== login.password) {
            cb("Wrong Password")
        } else {
            cb(user)
        }
    }
}