import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'; // Importando o CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Bem-vindo à Página Principal</h1>
        <p className={styles.description}>
          Esta é a página inicial do seu projeto. Comece a editar para criar algo incrível!
        </p>
        <form className={styles.form}>
          <input type="email" placeholder="Seu e-mail" required />
          <input type="password" placeholder="Sua senha" required />
          <button type="submit">Entrar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}