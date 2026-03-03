import './SectionTitle.css';

interface SectionTitleProps {
  label: string;
  heading: string;
}

function SectionTitle({ label, heading }: SectionTitleProps) {
  return (
    <div className="section-title">
      <span className="section-title__label">{label}</span>
      <h2 className="section-title__heading">{heading}</h2>
      <div className="section-title__line" />
    </div>
  );
}

export default SectionTitle;
