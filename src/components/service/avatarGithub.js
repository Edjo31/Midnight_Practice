import { useState, useEffect } from "react";

const AvatarGitHub = ({ onAvatarChange }) => {
 

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userResponse = await fetch('https://api.github.com/users/Edjo31')
        const userData = await userResponse.json()
        onAvatarChange(userData)
      } catch (error) {
        console.log("error 404")
      }
    }

    fetchUser();
  }, [])



 
}
export default AvatarGitHub