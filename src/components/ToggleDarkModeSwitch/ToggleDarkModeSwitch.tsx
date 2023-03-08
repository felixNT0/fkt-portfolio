import { useAppContext } from "../../contexts/useAppContext";

function ToggleDarkModeSwitch() {
  const { toggleDarkMode } = useAppContext();
  return (
    <div className="switch_holder">
      <label className="switch">
        <input type="checkbox" onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleDarkModeSwitch;
