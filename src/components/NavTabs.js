import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {

    return (
        <header class="header">
            <h1 class="card">Rodolfo Cabrera</h1>
            <nav>
                <ul>
                    <li>
                        <a
                            href="#About"
                            onClick={() => handlePageChange('About')}
                            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#Work"
                            onClick={() => handlePageChange('Work')}
                            // This is a conditional (ternary) operator that checks to see if the current page is "Work"
                            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
                            className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                    <a
                    href="#contactMe"
                    onClick={() => handlePageChange('ContactMe')}
                    // Check to see if the currentPage is `ContactMe`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}
                >
                    ContactMe
                </a>
                    </li>
                    <li>
                    <a
                    href="#Resume"
                    onClick={() => handlePageChange('Resume')}
                    // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                >
                    Resume
                </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavTabs;