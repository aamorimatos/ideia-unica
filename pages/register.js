import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'; // Importando o CSS module

export default function Register() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Cadastro</h1>
        <form className={styles.form}>
          <div>
            <label>Nome:</label>
            <input type="text" name="name" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Senha:</label>
            <input type="password" name="password" required />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </main>
      <Footer />
    </div>
  );
}