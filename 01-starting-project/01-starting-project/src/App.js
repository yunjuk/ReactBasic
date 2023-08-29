import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
// import { children } from "react";
import ErrorPage from "./pages/Error";

//라우터: 경로라고 생각하면 됨. 컴포넌트 주소랑 프로덕트랑 연결하는데 씀

// const routerDefinition = createRoutesFromElements(
//   <Route>
//     <Route path ="/" element={<HomePage />}/>
//     <Route path ="/Products" element={<ProductsPage />}/>
//   </Route>
// );
// const router = createBrowserRouter(routerDefinition);
//이건 옛날 방식임.

const router = createBrowserRouter([
  {
    //레이아웃으로 쓸 경로 , 이제 루트레이아웃 컴포넌트는 라우터로 배치가 된 것.
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/", //이제 이런 경로가 들어오면 홈페이지컴포넌트가 실행됨.
        element: <HomePage />,
      }, //슬래시: 가장 상위 디렉토리
      { path: "./Products", element: <ProductsPage /> },
    ],
  },
]);
//이게 더 간편한 방식

function App() {
  return <RouterProvider router={router} />;
}

export default App;
