import react, { useState, useEffect } from "react";



//https://api.github.com/users/developersatish

function GitHub(props) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        fetch(`https://api.github.com/users/${props.name}`)
            .then((re) => re.json())
            .then(setUser);
    }, []);
    if (user) {
        return <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url}/>
        </div>;
    } else {
        return <div className="App">
            NO DATA FOUND!
        </div>;
    }

}

export default GitHub;