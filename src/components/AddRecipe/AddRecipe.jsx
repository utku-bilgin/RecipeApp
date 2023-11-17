import { useState } from 'react'
import './AddRecipe.css'
import axios from 'axios'


const AddRecipe = ({ addRecipeToList, isLoading }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')

  const [titleError, setTitleError] = useState('')
  const [descriptionError, setDescriptionError] = useState('')
  const [imageError, setImageError] = useState('')



  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title) {
      setTitleError('Recipe Title boş olamaz!')
      return
    } else {
      setTitleError('')
    }

    if (!description) {
      setDescriptionError('Recipe Description boş olamaz!')
      return
    } else {
      setDescriptionError('')
    }

    if (!image) {
      setImageError('Image URL boş olamaz!')
      return
    } else {
      setImageError('')
    }

    const response = await axios.post('http://localhost:3002/fakeRecipes', {
      title,
      description,
      image,
    });

    addRecipeToList(response.data);

    // axios
    //   .post('http://localhost:3002/fakeRecipes', { title, description, image })
    //   .then((response) => addRecipeToList(response.data))

    setTitle('')
    setDescription('')
    setImage('')
  }



  return (
    <div className='addRecipe'>
      <form onSubmit={handleSubmit}>
        <input
          className='formElement title'
          type='text'
          placeholder='Recipe Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
         {titleError && <p className="error-message">{titleError}</p>}
        <textarea
          className='formElement description'
          placeholder='Recipe Description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        {descriptionError && <p className="error-message">{descriptionError}</p>}
        <input
          className='formElement '
          type='text'
          placeholder='Image URL'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        {imageError && <p className="error-message">{imageError}</p>}
        <button
          type='submit'
          className='formElement'>
          Add Recipe
        </button>
      </form>
    </div>
  )
}

export default AddRecipe
