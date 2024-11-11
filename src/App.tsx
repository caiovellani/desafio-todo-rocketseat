import styles from './App.module.css';
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Empty } from './components/List/Empty';
export function App() {
  
  return (
      <main>
        <Header />
        <section  className={styles.content}>
          <div>
            <Input></Input>
            <Button></Button>
            <Empty></Empty>
          </div>
        </section>
      </main>
  )
}


