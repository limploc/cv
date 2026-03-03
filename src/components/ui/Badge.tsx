import './Badge.css';

interface BadgeProps {
  text: string;
}

function Badge({ text }: BadgeProps) {
  return <span className="badge">{text}</span>;
}

export default Badge;
