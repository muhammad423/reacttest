import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import {Navbar, Feed, VideoDetail, SearchField, ChannelDetail} from './components'
import './App.css';


function App() {
 

  return (
    <div className='App'>
      <BrowserRouter>
       <Box sx={{backgroundColor: '#000'}}>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>}/>
          <Route path='/video/:id' element={<VideoDetail/>}/>
          <Route path='/channel/:id' element={<ChannelDetail/>}/>
          <Route path='/video/:searchTerm' element={<SearchField/>}/>
        </Routes>
       </Box>
      </BrowserRouter>
    </div>
  )

}

export default App;

