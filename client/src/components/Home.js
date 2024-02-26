import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate();

    return(
        <div className="homePage">
            <nav>
                <ul>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
