import HeaderComponent from './Header/HeaderComponent';
import Sidebar from "./Sidebar/SidebarComponent";
import CardContainer from './Card/CardContainer';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <HeaderComponent />
      <Sidebar />
      <CardContainer />
    </div>
  );
}

export default App;
