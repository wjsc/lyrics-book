const lyricsEndpoint="http://localhost:3000/lyrics";

const get = () => {
  return fetch(lyricsEndpoint).then(res => res.json());
}

const getById = (id) => {
  return fetch(lyricsEndpoint+'/'+id).then(res => res.json());
}

const insert = (lyric) => {
  return fetch(lyricsEndpoint, {
    method: "POST", 
    headers: new Headers({"Content-Type":"application/json"}), 
    body: JSON.stringify(lyric)
  });
}

const update = (lyric) => {
  let id = Object.keys(lyric)[0];
  return fetch(lyricsEndpoint+"/"+id, {
    method: "PUT", 
    headers: new Headers({"Content-Type":"application/json"}), 
    body: JSON.stringify(lyric[id])
  });
}

const remove = (id) => {
  return fetch(lyricsEndpoint+"/"+id, {
    method: "DELETE"
  });
}
module.exports = {get, getById, insert, update, remove};