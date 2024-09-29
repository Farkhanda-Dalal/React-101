import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import PostList from './components/PostList'
import PostListProvider from './store/PostList-store'
import { useState } from 'react'

function App() {

  const [selectedTab, setSelectedTab] = useState();

  const handleSidebarClick = (buttonClicked) => {
    setSelectedTab(buttonClicked);
  }
  return (
    <PostListProvider>
      <div className='app-container'>
        <Sidebar selectedTab={selectedTab} handleSidebarClick={handleSidebarClick}></Sidebar>
        <div className='main-content'>
          <Header></Header>
          {selectedTab === "Home" ?
            <PostList></PostList> : (selectedTab === "CreatePost" ? <CreatePost></CreatePost> : null)}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  )
}

export default App
