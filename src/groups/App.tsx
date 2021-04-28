import './App.module.scss';
import HeaderComponent from './Header/HeaderComponent';
import Sidebar from "./Sidebar/SidebarComponent";

import styles from './App.module.scss';
import CardContainer from './Card/CardContainer';

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
