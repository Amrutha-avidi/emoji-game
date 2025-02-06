import React from 'react'
import './index.css'

const NavBar = (props) => {
    const { currentScore, isGameInProgress, topScore } = props

    return (
        <nav className="nav-container">
            <div className="logo-and-score">
                <div className="logo-and-title">
                    <img
                        className="logo"
                        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
                        alt="emoji logo"
                    />
                    <h1 className="title">Emoji Game</h1>
                </div>
                {isGameInProgress && (
                    <div className="scores-container">
                        <p className="scores">Score: {currentScore}</p>
                        <p className="scores">Top Score: {topScore}</p>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar