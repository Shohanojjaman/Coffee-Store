import PropTypes from 'prop-types';

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="text-center">
      <p className="text-xl">{subTitle}</p>
      <h4 className="text-theme text-5xl drop-shadow-[5px_5px_5px_rgba(51,26,21,0.6)]">{title}</h4>
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SectionTitle;
