function App() {
  return (
    <div className="bg-[#111] p-6">
      <h1 className='text-4xl text-[#ff4500]'>E-Bazaar</h1>
    </div>
  )
}

export default App

// import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import {
//   HomeLayout,
//   Landing,
//   Error,
//   Products,
//   SingleProduct,
//   Cart,
//   About,
//   Register,
//   Login,
//   Checkout,
//   Orders,
// } from './pages'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <HomeLayout />,

//     children: [
//       {
//         index: true,
//         element: <Landing />,
//       },
//       {
//         path: 'products',
//         element: <Products />,
//       },
//       {
//         path: 'products/:id',
//         element: <SingleProduct />,
//       },
//       {
//         path: 'cart',
//         element: <Cart />,
//       },
//       { 
//         path: 'about', 
//         element: <About /> },
//       {
//         path: 'checkout',
//         element: <Checkout />,
//       },
//       {
//         path: 'orders',
//         element: <Orders />,
//       },
//     ],
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   },
//   {
//     path: '/register',
//     element: <Register />,
//   },
// ])

// const App = () => {
//   return <RouterProvider router={router} />;
// }
// export default App