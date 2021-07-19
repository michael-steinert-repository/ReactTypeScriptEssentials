import React from "react";
import {IState} from "../App";

/* "List" have the Type Functional Component from React with the Type IProps for its Props */
const List: React.FC<IState> = ({people}) => {
    return (
        <ul>
            {
                people.map((person, key) =>
                    <li key={key} className="List">
                        <div className="List-header">
                            <img className="List-img" src={person.url}/>
                            <h2>{person.name}</h2>
                        </div>
                        <p>{person.age} Years old</p>
                        <p className="List-note">{person.note}</p>
                    </li>
                )
            }
        </ul>
    )
}

export default List;