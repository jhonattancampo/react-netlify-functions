import React, {useState, useEffect } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";

function App() {

    const [friends, setFriends] = useState([]);
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch(`/.netlify/functions/notion-api`)
            .then(response => response.json())
            .then(friends => {setFriends(friends)});
    },[]);

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }
    const filteredFriends = friends.filter(friend => {
        return friend.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !friends.length ?
         <h1>Loading...</h1> :
    (
        <div className='tc pa3'>
            <h1 className='purple'>Chelli's Friends</h1>
            <SearchBox searchChange={onSearchChange} />
            <CardList friends={filteredFriends} />
        </div>
    );

}

export default App;