export default function handler(req, res) {
    if (req.method === 'POST') {
      const { email, password } = req.body;
  
      // Aqui você pode adicionar a lógica de autenticação
      // Por exemplo, verificar o email e senha no banco de dados
  
      if (email === 'user@example.com' && password === 'password') {
        res.status(200).json({ message: 'Login bem-sucedido' });
      } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
      }
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }