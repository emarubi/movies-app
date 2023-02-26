type Props = {
  label: string
  className: string
}

const Tag:React.FC<Props> = ({ label, className }) => (
  <span className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${className}`}>{label}</span>
);

export default Tag;