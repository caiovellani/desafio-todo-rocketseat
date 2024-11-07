import styles from './App.module.css';
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
export function App() {
  
  return (
    <>
      <main>
        <Header />

        <section  className={styles.content}>
          <div>
            <Input></Input>
            <Button></Button>
          </div>
        </section>
        </main>
    </>
  )
}


