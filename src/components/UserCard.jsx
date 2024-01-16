import './styles/UserCard.css'


const UserCard = ( { user, setUserUpdate, setFormClose, setAlertClose, setUserDelete } ) => {

  const handleDelete = () => {
    setAlertClose(false)
    setUserDelete(user)
  }

  const handleEdit = () => {
    setUserUpdate(user)
    setFormClose(false)
  }


  return (
    <article className="usercard">
      <h2 className="usercard__h2">{user.first_name} {user.last_name}</h2>
      <div className='usercard__div__img'>
        <img className='usercard__img' src={user.image_url} alt="" />
      </div>
      <ul className="usercard__ul">
        <li className="usercard__li">
          <span className='usercard__li--span--tittle'>Email:</span>
          <span className='usercard__li--span--content'> {user.email}</span>
        </li>
        <li className="usercard__li">
          <span className='usercard__li--span--tittle'>Birthday:</span>
          <span className='usercard__li--span--content'> {user.birthday}</span>
        </li>
      </ul>
      <hr className="usercard__hr" />
      <footer className='usercard__footer'>
        <button className="usercard__footer__botton botton--edit" onClick={handleEdit}><i className='usercard__botton__icon bx bx-edit-alt'></i></button>
        <button className="usercard__footer__botton botton--tras" onClick={handleDelete}><i className='usercard__botton__icon bx bx-trash'></i></button>
      </footer>
    </article>
  )
}

export default UserCard