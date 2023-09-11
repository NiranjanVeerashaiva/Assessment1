import {Link} from 'react-router-dom'
import '../css/home.css'
const Home = () => {
    return ( 
        <div className="home">
            <h3><Link to="/Assessment01">Assessment1 link</Link></h3>
            <h3><Link to="/Assessment02">Assessment2 link</Link></h3>
        </div>
     );
}
 
export default Home;