// src/app/page.tsx

const Home: React.FC = () => {
  return (
    <main style={mainStyle}>
      <h2>Bem-vindo ao Visual Law</h2>
      <p>Visualize informações legais de forma clara e interativa.</p>
    </main>
  );
};

const mainStyle: React.CSSProperties = {
  padding: '20px',
  textAlign: 'center',
};

export default Home;
