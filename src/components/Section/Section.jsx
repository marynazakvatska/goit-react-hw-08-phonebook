import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section className={s.section}>
      <h2 className={s.title}>
        {title === 'Phonebook' }
        {title}
      </h2>
      {children}
    </section>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};