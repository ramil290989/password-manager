const useAuthHeader = () => {
  const token = localStorage.getItem('pasManToken');  
  const authHeader = { headers: { Authorization: token }};
  return authHeader;
};

export default useAuthHeader;
