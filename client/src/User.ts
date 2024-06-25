export type User = {
    readonly Login: Login,
    readonly learnPosts: Array<Post> 
}

export type Login = {
    password: string,
    username: string
}

export type Post = {
    readonly title: string,
    readonly description: string,
    readonly minBid: string,
    readonly topics: Array<string>
}
