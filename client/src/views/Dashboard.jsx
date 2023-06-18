import React, { useEffect, useState } from 'react'
import LogoutButton from '../components/LogoutButton';
import { ReactSortable } from "react-sortablejs";

const Dashboard = (props) => {

    const [state, setState] = useState([
        { id: 1, name: "apple" },
        { id: 2, name: "banana" },
        { id: 3, name: "strawberry" },
        { id: 4, name: "tangerine" },
        { id: 5, name: "blueberry" },
        { id: 6, name: "kiwi" },
    ]);

    let numberArray = [];
    for (let num = 1; num <= state.length; num++) {
        numberArray.push(num);
    }

    return (
        <div className='container-fluid p-3'>
            <div className="dash-header d-flex align-items-stretch justify-content-between p-2">
                <div>
                    <h1 className='title-logo'>Contested</h1>
                </div>
                <div className="d-flex align-items-baseline">
                    <h4 className='header-subtitle mx-5'>Welcome, User</h4>
                    {/* <LogoutButton setUser={setUser} /> */}
                </div>
            </div>
            <div className="dash-body col-4">
                <ul className="js-sortable sortablejs-custom list-group">
                    <table className='table'>
                        <tr>
                            <td style={{'width': '12px'}}>
                                <table>
                                    {
                                        numberArray.map((num) => (
                                            <tr>
                                                <td style={{'height': '43px'}}>{num}</td>
                                            </tr>
                                        ))
                                    }
                                </table>
                            </td>
                            <td>
                                <ReactSortable list={state} setList={setState}>
                                    {state.map((item) => (
                                        <ul className='row'>
                                            <li className='list-group-item' key={item.id}>{item.name}</li>
                                        </ul>
                                    ))}
                                </ReactSortable>
                            </td>
                        </tr>
                    </table>
                </ul>
            </div>
        </div>
    )
}

export default Dashboard