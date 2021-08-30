import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { authSelectors } from '../../../auth/authSelectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};


export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
    return (
        <header style={styles.header}>
            <Navigation />
            {isLoggedIn ? <AuthNav /> : <UserMenu />}  
            
        </header>
    )
}