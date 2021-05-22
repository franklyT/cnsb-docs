import { Header } from './Header/Header';
import Sidebar from "./Sidebar/Sidebar";
import CardContainer from './Card/CardContainer';

import styles from './App.module.scss';

// Add react-window

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />
      <CardContainer />
    </div>
  );
}

export default App;
