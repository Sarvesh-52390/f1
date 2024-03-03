import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './ExpenseTracker.css';
import Footer from '../Footer/Footer';
        
function ExpenseTracker()
         {
            const [amount, setAmount] = useState('');
            const [to, setTo] = useState('');
            const [info, setInfo] = useState('');
            const [date, setDate] = useState('');
            const [total, setTotal] = useState(0);
            const [error, setError] = useState(false);
            const [expenses, setExpenses] = useState([]);
        
        
            const navigate = useNavigate()
            const handleClick = () =>
            {
                navigate("/Splitter")
            }
            useEffect(() => 
            {
                if (localStorage.getItem('react-expenses')) 
                {
                    setExpenses(JSON.parse(localStorage.getItem('react-expenses')));
                } 
                else
                {
                    localStorage.setItem('react-expenses', JSON.stringify([]));
                }
                getTotal();
        
            }, []);
        
            const addExpense = () => 
            {
                if (checkForm()) 
                {
                    setError(true);
                } 
                else 
                {
                    const data = 
                    {
                        amount: amount,
                        to: to,
                        info: info,
                        date: date
                    };
                    setAmount('');
                    setTo('');
                    setInfo('');
                    setDate('');
                    setExpenses([data, ...expenses]);
                    localStorage.setItem('react-expenses', JSON.stringify([data, ...expenses]));
                    getTotal();
                }
            };
        
            const clearExpenses = () => 
            {
                setExpenses([]);
                setTotal(0);
                localStorage.setItem('react-expenses', JSON.stringify([]));
            };
        
            const getTotal = () => 
            {
                let initialTotal = 0;
                expenses.forEach(data =>
                {
                    initialTotal += Math.abs(data.amount);
                });
                initialTotal += Math.abs(parseFloat(amount));
                
                setTotal(initialTotal);
            };
        
            const checkForm = () =>
            {
                return amount === '' || to === '' || info === '' || date === '' ? true : false;
            };
        
            const getCsv = () => 
            {
                const headers = 
                {
                    amount: "Amount",
                    to: "For",
                    info: "Info",
                    date: "Date"
                };
        
                let itemsNotFormatted = JSON.parse(localStorage.getItem('react-expenses'));
        
                let itemsFormatted = [];
        
                itemsNotFormatted.forEach((item) => 
                {
                    itemsFormatted.push({
                        amount: item.amount,
                        to: item.to,
                        info: item.info,
                        date: item.date
                    });
                });
        
                const fileTitle = 'Expenses';
        
                exportCSVFile(headers, itemsFormatted, fileTitle);
            };
        
            const convertToCSV = (objArray) => 
            {
                var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
                var str = '';
        
                for (var i = 0; i < array.length; i++) 
                {
                    var line = '';
                    for (var index in array[i]) 
                    {
                        if (line !== '') line += ',';
        
                        line += array[i][index];
                    }
        
                    str += line + '\r\n';
                }
        
                return str;
            };
        
            const exportCSVFile = (headers, items, fileTitle) => 
            {
                if (headers)
                {
                    items.unshift(headers);
                }
        
                var jsonObject = JSON.stringify(items);
        
                var csv = convertToCSV(jsonObject);
        
                var exportedFilename = fileTitle + '.csv' || 'export.csv';
        
                var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                if (navigator.msSaveBlob) 
                {
                    navigator.msSaveBlob(blob, exportedFilename);
                } 
                else 
                {
                    var link = document.createElement("a");
                    if (link.download !== undefined) 
                    {
                        var url = URL.createObjectURL(blob);
                        link.setAttribute("href", url);
                        link.setAttribute("download", exportedFilename);
                        link.style.visibility = 'hidden';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                    }
                }
            };
            return (
                <div className='wh'>
                <div id="app">
                    <h1 className="title">TRACKER</h1>
                    <p className="abt">
                        <q>This expense tracker helps you track your expenses for as long as you wish. Whenever you wish to start
                            tracking afresh (This can be after a week or a month or any period of time),<br></br> click on the clear records
                            button to clear everything. Click on the 'Export as CSV button to export the records as a .csv
                            file'
                        </q>
                    </p>
                    <div className="flex">
                        <div className="flex_content flex_form">
                            
                            <form onSubmit={(e) => { e.preventDefault(); addExpense(); }} className="form">
                                <label htmlFor="amount" style={{color:'black'}}>Amount</label>
                                <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} autoComplete="off" required />
        
                                <label htmlFor="to"style={{color:'black'}}>To</label>
                        <input type="text" id="to" value={to} onChange={(e) => setTo(e.target.value)} autoComplete="off" required />

                        <label htmlFor="note"style={{color:'black'}}>Note</label>
                        <textarea id="note" rows="5" value={info} onChange={(e) => setInfo(e.target.value)}></textarea>

                        <label htmlFor="date"style={{color:'black'}}>Date</label>
                        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

                        <button className="btn btn_success" type="submit"style={{color:'black'}}>Add expense</button>
                        <button className="btn btn_danger" onClick={clearExpenses} style={{color:'black'}}>Clear record</button>
                        <button className="btn btn_primary" onClick={getCsv}>Export as .csv</button>
                    </form>
                </div>
                <div className="flex_content flex_expenses">
                    <h2 className="head" style={{color:"white"}}>Expenses</h2>
                    <div className="total">
                        <h3 style={{color:"black"}}>TOTAL</h3>
                        {total > 0 && Math.abs(total) !== Math.floor(total) ? <h3>₹{total}</h3> : null}
                        {Math.abs(total) === Math.floor(total) ? <h3>₹{total}.0</h3> : null}
                        {total === 0 ? <h3>₹0.0</h3> : null}
                    </div>

                    {expenses.map((expense, index) => (
                        <div key={index} className="expense">
                            <p className="to"><b>To:</b> {expense.to}</p>
                            <p className="date"><b>Date:</b> {expense.date}</p>
                            <p className="amnt"><b>Amount:</b> ₹{expense.amount}</p>
                            <p className="note"><b>Note:</b> {expense.info}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div class = "c">
                <button onClick={handleClick}>Go Back</button>
            </div>
            </div>
        <Footer/>
        </div>
 );
}

export default ExpenseTracker;