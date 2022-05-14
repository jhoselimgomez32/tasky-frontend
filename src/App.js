import AppRoutes from './routes';
import Layout from './layout/Layout';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/material/styles';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
          <Outlet />
        </Layout>
      </BrowserRouter>
    </StyledEngineProvider>
  );
};

export default App;
