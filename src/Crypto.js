import React from 'react';
import './Crypto.css';

const Crypto = ({
    name, image, symbol, price, volumn, priceChanged, supply}) => {
    return (
        <div className='cryptoContainer'>
            <div className='cryptoRow'>
                <div className='crypto'>
                    <img src={image} alt='crypto logo'/>
                    <h1>{name}</h1>
                    <div className='symbol'>{symbol}</div>
                </div>
                <div className='data'>
                    <div className = 'supply'>{supply}</div>
                    <div className = 'price'>${price.toFixed(2)}</div>
                    <div className = 'volumn'>${volumn.toLocaleString()}</div>
                    {priceChanged < 0 ? (
                        <div className ='coinPercent red'>{priceChanged.toFixed(2)}%</div>)
                        : (<div className ='coinPercent green'>{priceChanged.toFixed(2)}%</div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Crypto;