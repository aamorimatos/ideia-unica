import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'; // Importando o CSS module

export default function Login() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form}>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Entrar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}