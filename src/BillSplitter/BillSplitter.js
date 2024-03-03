import React, { useState } from 'react';
import './BillSplitter.css'// Assuming Navbar.js is in the same directory
import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';

const BillSplitter = () => {
    const [participants, setParticipants] = useState([{ name: '', amount: '' }]);
    const [settleTransactions, setSettleTransactions] = useState([]);
    // const [customPayee, setCustomPayee] = useState('');

    const addParticipant = () => {
        setParticipants([...participants, { name: '', amount: '' }]);
    };

    const removeParticipant = (index) => {
        const updatedParticipants = [...participants];
        updatedParticipants.splice(index, 1);
        setParticipants(updatedParticipants);
    };    
    
    const calculateSplit = () => {
        const totalExpense = participants.reduce(
            (total, participant) =>
                total + parseFloat(participant.amount || 0),
            0
        );
        const splitAmount =
            totalExpense / participants.length;

        const calculatedResults =
            participants.map((participant) => {
                const amount =
                    (splitAmount - parseFloat(participant.amount)).toFixed(2);
                return {
                    name: participant.name,
                    amount: parseFloat(amount),
                };
            });
            const settleTransactions = [];
            let positiveBalances =
                calculatedResults.filter(
                    (result) =>
                        result.amount > 0);
            let negativeBalances =
                calculatedResults.filter(
                    (result) =>
                        result.amount < 0);
    
            while (positiveBalances.length > 0 &&
                negativeBalances.length > 0) {
                const payer = positiveBalances[0];
                const payee = negativeBalances[0];
    
                const settledAmount =
                    Math.min(
                        Math.abs(payer.amount),
                        Math.abs(payee.amount));
    
                settleTransactions.push({
                    payer: payer.name,
                    payee: payee.name,
                    amount: settledAmount.toFixed(2),
                });
    
                payer.amount -= settledAmount;
                payee.amount += settledAmount;
    
                if (Math.abs(payer.amount) < 0.005) {
                    positiveBalances.shift();
                }
    
                if (Math.abs(payee.amount) < 0.005) {
                    negativeBalances.shift();
                }
            }
    
            setSettleTransactions(settleTransactions);
        };

    
    const resetApp = () => {
        setParticipants([{ name: '', amount: '' }]);
        setSettleTransactions([]);
    };

    return (
        <div>
  
            <div class="wrapper">
            <div class="title1">
                <h1 style={{fontSize:'50px'}}>Bill Splitter</h1></div>
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