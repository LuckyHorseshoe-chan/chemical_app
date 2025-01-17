import { 
    Grid,
} from '@chakra-ui/react'
import NavHeader from './NavHeader';
import Navbar from './Navbar';
import Footer from './Footer';
import Main from './Main';
import Header from './Header';

function MainPage(){
    return(
        <Grid
        templateAreas={`"nav-header header"
        "nav main"
        "nav footer"`}
        gridTemplateRows={'8vh 1fr 7vh'}
        gridTemplateColumns={'15vw 1fr'}>
            <NavHeader />
            <Header />
            <Navbar/>
            <Main/>
            <Footer />
        </Grid>
    )
}

export default MainPage;