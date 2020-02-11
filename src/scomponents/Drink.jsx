import React from 'react';
import '../styles/Drink.css'
import ScreenModal from './ScreenModal.jsx';
import useModal from '../hooks/useModal.jsx'

const Drink = ({oneDrink}) => {

    const {id, date, btype, name, price, desiltr, permille, place} = oneDrink;
    const {isShowing, toggle} = useModal();
    const monthMap = {'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr':'04', 'May':'05', 'Jun':'06', 'Jul':'07', 'Aug':'08', 'Sep':'09', 'Oct':'10', 'Nov':'11', 'Dec':'12'}

    const modifyDate = dateStr => {
        let dateArray = dateStr.split(' ');
        let day = parseInt(dateArray[1])
        let month = parseInt(monthMap[dateArray[2]])
        let year = parseInt(dateArray[3])

        return (day + '/' + month + '/' + year)
    }

    return (
        <tr>
            <th>{modifyDate(date)}</th>
            <th>{place}</th>
            <th>{btype}</th>
            <th>{name}</th>
            
            <th><button onClick={toggle} className="button-default">Show Modal</button>
                <ScreenModal
                    isShowing={isShowing}
                    hide={toggle}
                    oneDrink={oneDrink}/>
            </th>
        </tr>
    )
}

export default Drink;