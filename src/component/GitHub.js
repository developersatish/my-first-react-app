import react, { useState, useEffect } from "react";



//https://api.github.com/users/developersatish

function GitHub(props) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!props.name) return;
        setLoading(true);
        fetch(`https://api.github.com/users/${props.name}`)
            .then((re) => re.json())
            .then(setUser)
            .then(()=>setLoading(false))
            .catch(setError);

    }, [props.name]);
    if (loading) return <h1>Loading..</h1>;
    if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>
    if (!user) return null;

    return (<div className="App">
        <h1>{user?.login}</h1>
        <h2>{user?.name}</h2>
        <img src={user?.avatar_url} alt={user?.location} />
    </div>);
}

export default GitHub;