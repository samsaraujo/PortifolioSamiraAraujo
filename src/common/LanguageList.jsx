function LanguageList({ src, language }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{language}</p>
    </span>
  );
}

export default LanguageList;
