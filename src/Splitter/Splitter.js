import React, { useState } from 'react';
import '../Splitter/BillSplitter.css';// Assuming Navbar.js is in the same directory

import Footer from '../Footer/Footer';

const BillSplitter = () => {
    const [participants, setParticipants] = useState([{ name: '', amount: '' }]);
    const [settleTransactions, setSettleTransactions] = useState([]);
    const [customPayee, setCustomPayee] = useState('');

    const addParticipant = () => {
        setParticipants([...participants, { name: '', amount: '' }]);
    };

    const removeParticipant = (index) => {
        const updatedParticipants = [...participants];
        updatedParticipants.splice(index, 1);
        setParticipants(updatedParticipants);
    };    
    
    const calculateSplit = () => {
        const totalAmount = participants.reduce((total, participant) => total + parseFloat(participant.amount), 0);
    
        const averageAmount = totalAmount / participants.length;
    
        const settleTransactions = [];
    
        participants.forEach(participant => {
            const amountDifference = parseFloat(participant.amount) - averageAmount;
    
            if (amountDifference < 0) {
                settleTransactions.push({ payer: 'You', payee: participant.name, amount: (-amountDifference).toFixed(2) });
            } else if (amountDifference > 0) {
                settleTransactions.push({ payer: participant.name, payee: 'You', amount: amountDifference.toFixed(2) });
            }
        });
    
        setSettleTransactions(settleTransactions);
    };
    
    const resetApp = () => {
        setParticipants([{ name: '', amount: '' }]);
        setSettleTransactions([]);
    };

    return (
        <div>
            
            <div class="wrapper">
            <div class="title">
                <h1>Bill Splitter</h1></div>
            <div className="container">
                <div className="participantList">
                    {participants.map((participant, index) => (
                        <div key={index} className="participantItem">
                            <input
                                className="input"
                                type="text"
                                placeholder="Name"
                                value={participant.name}
                                onChange={(e) => {
                                    const updatedParticipants = [...participants];
                                    updatedParticipants[index].name = e.target.value;
                                    setParticipants(updatedParticipants);
                                }}
                                />
                            <input
                                className="input"
                                type="number"
                                placeholder="Amount"
                                value={participant.amount}
                                onChange={(e) => {
                                    const updatedParticipants = [...participants];
                                    updatedParticipants[index].amount = e.target.value;
                                    setParticipants(updatedParticipants);
                                }}
                                />
                            <button
                                className="removeButton"
                                onClick={() => removeParticipant(index)}
                                >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                <button className="addButton" onClick={addParticipant}>
                    Add Participant
                </button>
                <button className="calculateButton" onClick={calculateSplit}>
                    Calculate
                </button>
                <button className="resetButton" onClick={resetApp}>
                    Reset
                </button>

                <div className="resultBox">
                    <h2 className="resultsTitle">Settle Transactions</h2>
                    <div className="resultsList">
                        {settleTransactions.map((transaction, index) => (
                            <div key={index} className="resultItem">
                                {transaction.payer} should pay {transaction.payee} ₹{transaction.amount}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           <Footer/>
        </div>
        </div>
    );
};

export default BillSplitter;