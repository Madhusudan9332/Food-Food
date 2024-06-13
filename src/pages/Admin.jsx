import { useState } from 'react';
import { useApiContext } from '../context';
import {WorkOnUrls , PostData} from '../components';


const Admin = () => {
  const { adminProfiles } = useApiContext();
  const [username, setUsername] = useState('');
  const [postData , setPostData] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const admin = adminProfiles.find(
      (admin) => admin.username === username && admin.password === password
    );

    if (admin) {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isAuthenticated ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      ) : (
        <AdminSection postData={postData} setPostData={setPostData} />
      )}
    </div>
  );
};

const AdminSection = ({postData,setPostData}) => {
  // Logic for handling sensitive data changes goes here
  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-4xl mt-8">
      <h2 className="flex justify-between items-center text-2xl font-bold mb-4">
        <span>Admin Section</span>
        <span className='flex gap-2'>
            <button className='shadow-md p-2 rounded-md' onClick={()=>setPostData(false)}>Work on Urls</button>
            <button className='shadow-md p-2 rounded-md' onClick={()=>setPostData(true)}>Post Data</button>
        </span>
      </h2>
      {postData ? <PostData /> : <WorkOnUrls />}
    </div>
  );
};

export default Admin;
