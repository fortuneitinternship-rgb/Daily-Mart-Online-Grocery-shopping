export default function Loader({ label = "Loading..." }) {
  return (
    <div
      className="d-flex justify-content-center align-items-center gap-2 py-5"
      role="status"
    >
      <div className="spinner-border text-success" aria-hidden="true" />
      <span className="visually-hidden">{label}</span>
    </div>
  );
}
