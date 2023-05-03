export default function Collapsible({ children, idname, trigger }) {
  function toggleClass() {
    var element = document.getElementById(idname);
    element.classList.toggle("open");
  }
  return (
    <div className="collapsible" onClick={toggleClass}>
      <div className="trigger">{trigger}</div>
      <div className="collapsible-content" id={idname}>
        {children}
      </div>
    </div>
  );
}
