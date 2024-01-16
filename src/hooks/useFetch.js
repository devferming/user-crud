import axios from "axios"
import { useState } from "react"

const useFetch = ( {baseUrl,
  setModalClose,
  setComment,
  userDelete,
  setUserDelete,
  setFormClose}) => {

  const [response, setResponde] = useState()

  //READ
  const getApi = () => {
    const url = `${baseUrl}/users/`
    axios.get(url)
    .then(res => {
      setResponde(res.data)
    })
    .catch(err => console.log(err))
  }

  //CREATE
  const createApi = (data) => {
    const url = `${baseUrl}/users/`
    axios.post(url, data)
    .then(res => {

      setFormClose(true)
      setComment(`${data.first_name} ${data.last_name} user created successfully`)
      setModalClose(false)

      setTimeout(() => {
          setModalClose(true);
          setComment()
          setResponde([...response, res.data])
      }, 3000);

    })
    .catch(err => console.log(err))
  }

  //DELETE
  const deleteApi = (id) => {

    const url = `${baseUrl}/users/${id}/`
    axios.delete(url)
    .then(res =>{
      
      setComment(`User ${userDelete.first_name} ${userDelete.last_name} successfully deleted`)
      setModalClose(false)

      setTimeout(() => {
          setModalClose(true);
          setComment()
          setUserDelete()
          setResponde(response.filter(user => user.id !== id))
      }, 3000);

    })
    .catch(err => console.log(err))

  }

  //UPDATE
  const updateApi = (id, data) => {
    const url = `${baseUrl}/users/${id}/`
    axios.put(url, data)
    .then(res => {

      setFormClose(true)
      setComment(`${data.first_name} ${data.last_name} user updated successfully`)
      setModalClose(false)

      setTimeout(() => {
          setModalClose(true);
          setComment()
          setResponde(response.map(user => user.id === id ? res.data : user))
      }, 3000);

    })
    .catch(err => console.log(err))
  }

  return [ response, createApi, getApi, updateApi, deleteApi ]  

}

export default useFetch