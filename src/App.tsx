import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TheDecree from "./pages/archive/TheDecree";
import NoctyrrVale from "./pages/archive/NoctyrrVale";
import TheThrone from "./pages/archive/TheThrone";
import TheArchive from "./pages/archive/TheArchive";
import TheArchivist from "./pages/archive/TheArchivist";
import TheMeeting from "./pages/archive/TheMeeting";
import TheErased from "./pages/archive/TheErased";
import TheSecret from "./pages/archive/TheSecret";
import TheChoice from "./pages/archive/TheChoice";
import TheOath from "./pages/archive/TheOath";
import TheFall from "./pages/archive/TheFall";
import WhatRemains from "./pages/archive/WhatRemains";
import TheBlackCouncil from "./pages/archive/TheBlackCouncil";
import TheCrown from "./pages/archive/TheCrown";
import LettersNeverSent from "./pages/archive/LettersNeverSent";
import TheEpilogue from "./pages/archive/TheEpilogue";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* THE BLACK ARCHIVE - Linear narrative */}
          <Route path="/" element={<Index />} />
          <Route path="/the-decree" element={<TheDecree />} />
          <Route path="/noctyrr-vale" element={<NoctyrrVale />} />
          <Route path="/the-throne" element={<TheThrone />} />
          <Route path="/the-archive" element={<TheArchive />} />
          <Route path="/the-archivist" element={<TheArchivist />} />
          <Route path="/the-meeting" element={<TheMeeting />} />
          <Route path="/the-erased" element={<TheErased />} />
          <Route path="/the-secret" element={<TheSecret />} />
          <Route path="/the-choice" element={<TheChoice />} />
          <Route path="/the-oath" element={<TheOath />} />
          <Route path="/the-fall" element={<TheFall />} />
          <Route path="/what-remains" element={<WhatRemains />} />
          
          {/* Supplemental Records */}
          <Route path="/the-black-council" element={<TheBlackCouncil />} />
          <Route path="/the-crown" element={<TheCrown />} />
          <Route path="/letters-never-sent" element={<LettersNeverSent />} />
          
          {/* Secret Epilogue */}
          <Route path="/the-epilogue" element={<TheEpilogue />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
