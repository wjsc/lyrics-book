const lyricsEndpoint="https://mighty-mesa-72816.herokuapp.com/lyrics";

let uid;

const setUid = (x) => {
  uid=x;
}

const buildHeaders = () => {
    return new Headers({
    "Content-Type":"application/json",
    "Authorization": 'Basic '+uid
  })
};

const get = () => {
  return fetch(lyricsEndpoint,{
    method: "GET", 
    headers: buildHeaders()
  }).then(res => res.json());
}

const getById = (id) => {
  return fetch(lyricsEndpoint+'/'+id,{
    method: "GET", 
    headers: buildHeaders()
  }).then(res => res.json());
}

const insert = (lyric) => {
  return fetch(lyricsEndpoint, {
    method: "POST", 
    headers: buildHeaders(),
    body: JSON.stringify(lyric)
  });
}

const update = (lyric) => {
  let id = Object.keys(lyric)[0];
  return fetch(lyricsEndpoint+"/"+id, {
    method: "PUT", 
    headers: buildHeaders(), 
    body: JSON.stringify(lyric[id])
  });
}

const remove = (id) => {
  return fetch(lyricsEndpoint+"/"+id, {
    method: "DELETE",
    headers: buildHeaders()
  });
}
module.exports = {setUid, get, getById, insert, update, remove};