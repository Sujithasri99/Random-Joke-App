import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import CachedIcon from '@mui/icons-material/Cached';
import Footer from "./Footer";

function App() {

    const [joke, setJoke] = useState(null);

    function getJoke() {
        
            axios.get('https://v2.jokeapi.dev/joke/Any')
            .then(response => {
                setJoke(response.data);
    })
            .catch(error => console.error("Error fetchin joke:", error));
        
    }

    useEffect(() => {
        getJoke()
    },[]);
        
    

    return (
        <div>
             <Header />
            <form>
               
                { joke?.type === "single" ? <p>{joke.joke}</p> : joke?.type === "twopart" ? <div><p>{joke.setup}</p><p>{joke.delivery}</p></div> : <p>Loading...</p> }
                <button onClick={getJoke}><CachedIcon/></button>
                
            </form>
            <Footer />
        </div>
        
    );
}

export default App;