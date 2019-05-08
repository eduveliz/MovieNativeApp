import React from 'react';

const getDataLinkServer = 'https://api.themoviedb.org/3/discover/movie?api_key=327b4f6563405fc4a62b7ac8866f676d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';

async function getDataFromServer() {
    try {
        let response = await fetch(getDataLinkServer);
        let responseToJson = await response.json();
        return responseToJson;

    } catch (e) {
        console.log(e)
    }
}

async function putDataFromServer() {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify({
                id: 1,
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    } catch (e) {
        console.log(e)
    }
}

async function postDataFromServer() {
    try {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'ddd',
                body: 'ddd',
                userId: 0
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    } catch (e) {
        console.log(e)
    }
}

export {getDataFromServer}
export {postDataFromServer}
export {putDataFromServer}