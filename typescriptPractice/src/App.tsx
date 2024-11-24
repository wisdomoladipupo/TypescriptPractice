import { Pet } from "./ApiResponsesTypes";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import AdoptedPetContext from "./AdoptedPetContext";
import Details from "./Details";
import SearchParams from "./SearchParams";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity, 
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState<Pet | null>(null);
  return (
    <div>
      <BrowserRouter>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <QueryClientProvider client={queryClient}>
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <main>
              <Routes>
                <Route path="/details/:id" element={<Details />} />
                <Route path="/" element={<SearchParams />} />
              </Routes>
            </main>
          </QueryClientProvider>
        </AdoptedPetContext.Provider>
      </BrowserRouter>
    </div>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("no cotainer found");
}
const root = createRoot(container);

root.render(<App />);
