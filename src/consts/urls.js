const baseURL = 'https://jsonplaceholder.typicode.com';

const users = '/users';
const posts = '/posts';
const comments = '/comments';

const urls = {
    users: {
        users,
        getUserDetailsByID: (userID) => `${users}/${userID}`
    },
    posts: {
        getPostDetailsByID: (postID) => `${posts}/${postID}`,
        getPostsByUserID: (userID) => `${users}/${userID}${posts}`
    },
    comments : {
        getCommentsByPostID: (postID) => `${posts}/${postID}/${comments}`
    }
}

export {
    baseURL, urls
}