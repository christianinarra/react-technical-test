import React from  'react';

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4">
                <a className="navbar-brand" href="/">Technical Test</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/problem-1">Problem 1</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/problem-2">Problem 2</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/problem-3">Problem 3</a>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}

export default Header;