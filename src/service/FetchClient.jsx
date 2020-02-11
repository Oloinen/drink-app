export const fetchMainData =()=> {
    return fetch("http://127.0.0.1:5000/api/getall")
    .then(res => res.json())
  };

export const createDrink =(data) => {
    console.log(data)
    return fetch("http://127.0.0.1:5000/api/drinks", {
        method: "POST",
        headers: {
        "Accept": "application/json", "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const putDrink =(id, data) => {
    return fetch("/api/sienet/"+id, {
        method: "PUT",
        headers: {
        "Accept": "application/json", "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
}

export const deleteDrink = (id) => {
    return fetch("/api/sienet/"+id, {
        method: 'DELETE'
    })
}

export const showDrink = (id) => {
    return fetch ("http://127.0.0.1:5000/api/drinks/"+id)
    .then(res => res.json())
}