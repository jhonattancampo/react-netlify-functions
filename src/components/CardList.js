import React from 'react';
import Card from "./Card";

const CardList = ({ friends }) => {
    return (
        <div className='pa4'>
            {
                friends.map((user, i) => {
                    return (
                        <Card
                            key={friends[i].id}
                            id={friends[i].id}
                            name={friends[i].name}
                            email={friends[i].email}
                        />
                    );
                })
            }
        </div>
    );
};

export default CardList;