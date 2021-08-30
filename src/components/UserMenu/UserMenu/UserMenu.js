import { useDispatch, useSelector } from "react-redux";
import  authSelectors  from '../../../auth/authSelectors';
import operations  from '../../../auth/authOperations';
/* import defaultavatar from 
 */
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};



export default function UserMenu() {

    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName)
  
    
    return (
        <div style={styles.container}>
           
            <span style={styles.name}>Welcome,{name}</span>
            <button type="button" onClick={() => dispatch(operations.logOut())}> Exit</button>
        </div>
    )
}
