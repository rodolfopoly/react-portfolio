import React from 'react';
import portfolioImage from "../assets/images/IMG-20220331-WA0027.jpeg";
import NavTabs from './NavTabs';
import Work from './pages/Work';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Work') {
        return <Work />;
      }
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Resume') {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
        
      <div>
        <section class="hero">
            <img src={portfolioImage} alt="profile picture"></img>
            <h2 class="card">Above I invite you to know more about me</h2>
        </section>
        {/* We are passing the currentPage from state and the function to update it */}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    );
  }