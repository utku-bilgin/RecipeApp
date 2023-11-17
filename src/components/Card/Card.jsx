import './card.css'
import { useState } from 'react'

const Card = ({id, title, image, description,  deleteRecipe, isLoading}) => {
  
  const [isDeleted, setIsDeleted] = useState(false)
 

  const handleDeleteClick = async () => {
    setIsDeleted(true)
    await deleteRecipe(id);
    setIsDeleted(false)
  };

  return (
    <>
      <div className='card'>
        <img
          src={image}
          alt={title}
        />

        <div className='foodName'>
          <h3>{title}</h3>
        </div>
        <div className='foodAbout'>
          <p>{description}</p>
        </div>
        <div className='buttons'>
          <button onClick={handleDeleteClick}>
          {isDeleted ? 'Loading' : 'Delete'}
          </button>
        </div>
      </div>
    </>
  )
}

export default Card
