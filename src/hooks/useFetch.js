import axios from "axios"
import { useState } from "react"

const useFetch = ( {baseUrl,
  setModalClose,
  setComment,
  userDelete,
  setUserDelete,
  setFormClose,
  setUserUpdate}) => {

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

      setResponde([...response, res.data])

      setTimeout(() => {
          setModalClose(true);
          setComment()
      }, 2000);

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

      setResponde(response.filter(user => user.id !== id))

      setTimeout(() => {
          setModalClose(true);
          setComment()
          setUserDelete()
      }, 2000);

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

      setResponde(response.map(user => user.id === id ? res.data[1][0] : user))
      setUserUpdate()
      setTimeout(() => {
          setModalClose(true);
          setComment()
      }, 2000);

    })
    .catch(err => console.log(err))
  }

  return [ response, createApi, getApi, updateApi, deleteApi ]  

}

export default useFetch