
import { useState } from "react";

export let CreateCard = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [interest, setInterest] = useState("");
    const [interests, setInterests] = useState([]);
    const [linkedinID, setLinkedinID] = useState("");
    const [twitterID, setTwitterID] = useState("");

    const handleAddInterest = () => {
        setInterests([...interests, interest]);
        setInterest("");
    };

    return (
        <div>
            <h1>Business Card</h1>
            <input
                type="text"
                name=""
                id=""
                placeholder="name"
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />{" "}
            <br /> <br />

            <input
                type="text"
                name=""
                id=""
                placeholder="description"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
            />{" "}
            <br /> <br />

            <input
                type="text"
                name=""
                id=""
                placeholder="interest"
                value={interest}
                onChange={(e) => {
                    setInterest(e.target.value);
                }}
            />
            <button onClick={handleAddInterest}>+</button>
            <br /> <br />

            <input
                type="text"
                name=""
                id=""
                placeholder="linkedinID"
                onChange={(e) => {
                    setLinkedinID(e.target.value);
                }}
            />{" "}
            <br /> <br />

            <input
                type="text"
                name=""
                id=""
                placeholder="twitterID"
                onChange={(e) => {
                    setTwitterID(e.target.value);
                }}
            />{" "}
            <br /> <br />


            <button
                onClick={() => {
                    console.log("clicked");

                    const requestBody = JSON.stringify({
                        name: name,
                        description: description,
                        interests: interests,
                        linkedinID: linkedinID,
                        twitterID: twitterID,
                    });

                    fetch("http://localhost:3000/cards", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Content-Length": requestBody.length.toString(),
                        },
                        body: requestBody
                    }).then(async () => {
                        await alert("Card added!");
                    });
                }}
            >
                Add Card
            </button>
            <button onClick={() => {
                console.log(`name: ${ name }, description: ${ description }, interests: ${ interests }, linkedinID: ${ linkedinID }, twitterID: ${ twitterID }`);
            }}>debug</button>
            <hr />
        </div>
    );
};

// Styles
const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa'
    },
    name: {
        fontSize: '24px',
        marginBottom: '10px',
        color: '#333',
    },
    description: {
        fontSize: '16px',
        color: '#555',
        marginBottom: '15px',
    },
    socialLinks: {
        display: 'flex',
        marginBottom: '15px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff', // Text color
        padding: '10px 15px', // Padding for the button
        borderRadius: '5px', // Border radius for rounded corners
        backgroundColor: '#007BFF', // Background color for the button
        display: 'inline-block', // Display as inline-block to be side by side
        margin: '10px', // Margin between buttons
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
    },
    interestsHeader: {
        fontSize: '18px',
        marginBottom: '10px',
        color: '#333',
    },
    interestsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
    },
    interestItem: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555',
    },
    Delete: {
        textDecoration: 'none',
        color: '#fff', // Text color
        padding: '10px 15px', // Padding for the button
        borderRadius: '5px', // Border radius for rounded corners
        backgroundColor: '#d15a36', // Background color for the button
        display: 'inline-block', // Display as inline-block to be side by side
        margin: '10px', // Margin between buttons
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
    }
};