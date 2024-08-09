import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Error, ViewGameAll, ViewGameDetails, ViewStoreAll, ViewStoreDetails, ViewCreatorAll } from '../views/index';
import BaseLayout from "../layouts/BaseLayout";
import Login from '../FirstPage/Login'; // Adjust the path as necessary
import Register from '../FirstPage/Register'; // Adjust the path as necessary

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} /> {/* Set login as the default route */}
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<BaseLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="/games" element={<ViewGameAll />} />
          <Route path="/games/:gameId" element={<ViewGameDetails />} />
          <Route path="/stores" element={<ViewStoreAll />} />
          <Route path="/stores/:storeId" element={<ViewStoreDetails />} />
          <Route path="/creators" element={<ViewCreatorAll />} />
          <Route path="*" element={<Error />} /> {/* Catch-all route for 404 errors */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
