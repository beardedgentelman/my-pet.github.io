const { AuthContext } = require('context/AuthContext')
const { useContext } = require('react')

function useAuth() {
  return useContext(AuthContext)
}

export default useAuth
