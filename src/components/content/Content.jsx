import Title from "../title/Title";
import Paragraph from "../paragraph/Paragraph";
import RegisterBtn from "../registerBtn/Register";
import './Content.scss'

const Content = () => {
  return (
    <article className="content">
      <Title />
      <Paragraph />
      <RegisterBtn />
    </article>
  );
}

export default Content;