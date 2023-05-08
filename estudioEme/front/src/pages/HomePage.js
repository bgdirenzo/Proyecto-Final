import React from "react";
import '../styles/components/pages/HomePage.css';


const HomePage = (props) => {
    return (
        <main class="holder" style={{marginTop: 15 + 'px'}}>
        <div>
            <img src="img/index/img03.jpg" width="900" height="370" alt="Escritorio" />
        </div>
        <div class="columnas">
            <div class="bienvenidos">
                <h2>Bienvenidos!</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum enim maxime similique tenetur iure,
                    error
                    unde sit adipisci, distinctio non dignissimos debitis ullam veniam cupiditate! Dolorem voluptate
                    commodi
                    amet voluptates?
                </p>
            </div>
        </div>
    </main>
    );
}

export default HomePage;