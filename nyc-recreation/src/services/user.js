export function loginUser(loginParams) {
  const body = JSON.stringify(loginParams)
  return fetch("http://localhost:3000/login", {
    method: 'post',
    body: body,
    headers: {
      "Accept": "application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())
}

export function logoutUser(){
  localStorage.removeItem("jwtToken")
}

// export function refreshPage() {
//   return fetch('localhost:3000/users/me').then((resp))
//
// }

export function loadUserPrefs(){
  const jwt = localStorage.getItem("jwtToken")
  return fetch("http://localhost:3000/api/v1/users/me", {
    method: 'get',
    headers : {
      "Authorization": "Bearer " + jwt
    }
  }).then((res) => res.json())
}

export function saveLocation(locationObject){
  const body = JSON.stringify(locationObject)
  const jwt = localStorage.getItem("jwtToken")
  return fetch("http://localhost:3000/api/v1/users/me", {
    method: 'PATCH',
    body: body,
    headers: {
        "Authorization": "Bearer " + jwt,
        "Content-Type": 'application/json' //important
    }
  })
    .then((res) => res.json())
}

export function deleteSavedLocation(locationObject){
  const body = JSON.stringify(locationObject)
  const jwt = localStorage.getItem("jwtToken")
  return fetch("http://localhost:3000/api/v1/users/me", {
    method: 'DELETE',
    body: body,
    headers: {
      "Authorization": "Bearer " + jwt,
      "Content-Type": 'application/json'
    }
  }).then((res) => res.json())
}
