const serverAddress = process.env.SERVERADDRESS || '';

const apiRoutes = {
  signup: () => `${serverAddress}/api/signin`,
  login: () => `${serverAddress}/api/login`,
  changeUserPassword: () => `${serverAddress}/api/changeuserpassword`,
  data: () => `${serverAddress}/api/data`,
  addPassword: () => `${serverAddress}/api/addpassword`,
  editPassword: () => `${serverAddress}/api/editpassword`,
  removePassword: () => `${serverAddress}/api/removepassword`,
};

export default apiRoutes;
