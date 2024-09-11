import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Comments from "./pages/Comments";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
