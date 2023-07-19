import React, { useEffect, useState } from 'react'

const RepoList = ({ onRepoListChange}) => {
 
  useEffect(() => {
    const fetchRepository = async () => {
      try {
        const response = await fetch('https://api.github.com/users/EduardJiron/starred')
        const data = await response.json()
        onRepoListChange((data))
        
      }
      catch (error) {
        console.log('error 404')
      }
    }

    fetchRepository()
  }, [])

  
}

export default RepoList