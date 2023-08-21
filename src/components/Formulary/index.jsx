export const Formulary = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
