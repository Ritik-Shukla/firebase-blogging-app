import {createBrowserRouter,RouterProvider} from 'react-router-dom'
// import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from 'react-router-dom';
// import {Home,CreatePost,PostDetail,Navbar} from './'
import Home from './Home';
import CreatePost from './CreatePost';
import Navbar from './Navbar';
import PostDetail from './PostDetail';
function App() {
 const router = createBrowserRouter([
    {path: '/', element:<Home/>},
    {path: '/create-post' , element:<CreatePost/>},
    {path: '/post/:postId', element:<PostDetail/>}
  ])
  return (
    <div className="container">
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
