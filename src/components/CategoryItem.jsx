import React from 'react';
import Button from './Button';
import './CategoryItem.scss';

const CategoryItem = ({item}) => {

return (
    <div className='categoryCard'>
        <div className='categoryCardImageContainer'>
            <img src={item.imageUrl} className = 'categoryCardImage' />
        </div>
        <div className='categoryCardInfo'>
            <p className='categoryCardName'>{item.name}</p>
            <p className='categoryCardDescription'>{item.description}</p>
            <Button>
            {'Explore ' + item.key}
            </Button>
        </div>
    </div>
)

}

export default CategoryItem;