import React from 'react';
import './Items.scss';


const Items = ({items}) => {
    const itemList = items.length ? (
        items.map(item => {
            return(
                <div className="menu__item" key={item.id}>
                    <span className="menu__content">{item.content}</span>
                </div>
            );
        })
    ) : (
        <p className="center">No items yet!</p>
    );


    


    return (
        <div className="wrapper">
            <button className="btn" type='button' >Button</button>
            <div className="menu">
                {itemList}
            </div>
        </div>
        
    );
}


export default Items;