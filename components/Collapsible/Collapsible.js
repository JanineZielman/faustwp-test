export default function Collapsible({ children, idname, trigger }) {
  function toggleClass() {
    var element = document.getElementById(idname);
    element.classList.toggle("open");

    var trigger = document.getElementById(`${idname}-trigger`);
    trigger.classList.toggle("active");
  }
  return (
    <div className="collapsible">
      <div className="trigger" id={`${idname}-trigger`} onClick={toggleClass}>{trigger}</div>
      <div className="collapsible-content" id={idname}>
        {children}
      </div>
    </div>
  );
}
