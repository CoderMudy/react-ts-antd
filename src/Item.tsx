import React from 'react'

interface ItemInterface{

    email: string;
}

const Item : React.FC<ItemInterface> = ({ email }) => {
  return (
      <div>

        <h1>{email}</h1>
    </div>
  )
}

export default Item