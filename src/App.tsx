/* The Hook useState is used to Store the State in the Component */
import React, {useState} from "react";
import List from "./components/List";
import AddToList from "./components/AddToList";
import "./App.css";

export interface IState {
    people: {
        name: string,
        age: number,
        url: string,
        note?:string
    }[]
}

function App() {
    /* TypeScript infers the Type of the Variable by passing the Argument */
    /* So passing the Type with <number> would be not necessary */
    const [number, setNumber] = useState<number | string>(27);
    const changeNumber = () => {
        setNumber("42");
    }

    const [people, setPeople] = useState<IState["people"]>([
        {
            name: "Michael",
            age: 27,
            url: "myURL"
        },
        {
            name: "Maire",
            age: 26,
            url: "myURL",
            note: "Comes 30 min later"
        }
    ]);

    return (
        <div className="App">
            <h1>People invited to Meeting</h1>
            <List people={people}/>
            <AddToList people={people} setPeople={setPeople}/>
        </div>
    );
}

export default App;
