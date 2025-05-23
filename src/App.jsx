import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from './components/logo/Logo';
import Illustration from './components/illustration/Illustration';
import Content from './components/content/Content';
import Social from './components/social/Social';

function App() {
  return (
    <section className="App">
      <Logo />
      <article className="main-content">
        <Illustration />
        <Content />
      </article>
      <Social />
    </section>
  );
}

export default App;
