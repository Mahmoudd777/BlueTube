import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components';

import { Box } from '@mui/material';

const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: '#d3d3c5' }}>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
