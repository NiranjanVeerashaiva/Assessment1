import {Link} from 'react-router-dom'
import '../css/home.css'
const Home = () => {
    return ( 
        <div className="home">
            <h1><Link to="/Assessment1">Assessment1 link</Link></h1>
            <h1><Link to="/Assessment2">Assessment2 link</Link></h1>
        </div>
     );
}
 
export default Home;