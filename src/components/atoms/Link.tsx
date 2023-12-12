const TextLink: React.FC<{ children: React.ReactNode; link: string }> = ({
  children,
  link,
}) => (
  <a className="text-link" href={link} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export default TextLink;
