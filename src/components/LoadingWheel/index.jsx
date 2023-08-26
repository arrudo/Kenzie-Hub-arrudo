export const LoadingWheel = () => {
  return (
    <div
      className="spinning_wheel"
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "10px solid #f3f3f3",
        borderTop: "10px solid var(--color-primary)",
        borderRadius: "50%",
        width: "80px",
        height: "80px",
        animation: "spin 1s linear infinite",
      }}
    ></div>
  );
};
