import React, {useState} from "react";
import {IState} from "../App";

interface IProps {
    people: IState["people"],
    setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>
}

/* "AddToList" have the Type Functional Component from React with the Type IProps for its Props */
const AddToList: React.FC<IProps> = ({people, setPeople}) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (): void => {
        if (!input.name || !input.age || !input.url) {
            return;
        }

        setPeople([
            ...people,
            {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ]);

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        });
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                value={input.name}
                onChange={handleChange}
                name="name"
                className="AddToList-input"
            />
            <input
                type="number"
                placeholder="Age"
                value={input.age}
                onChange={handleChange}
                name="age"
                className="AddToList-input"
            />
            <input
                type="text"
                placeholder="URL"
                value={input.url}
                onChange={handleChange}
                name="url"
                className="AddToList-input"
            />
            <textarea
                placeholder="Note"
                value={input.note}
                onChange={handleChange}
                name="note"
                className="AddToList-input"
            />
            <button
                onClick={handleSubmit}
                className="AddToList-btn"
            >Add to List
            </button>
        </div>
    );
}

export default AddToList;