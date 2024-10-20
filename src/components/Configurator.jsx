import { useCustomization } from "../contexts/Customization";
import { mainColors, accessoryColors } from "../colors";

const Configurator = () => {
  const {
    material,
    setMaterial,
    accessory,
    setAccessory,
    mainColor,
    setMainColor,
    accessoryColor,
    setAccessoryColor,
  } = useCustomization();

  console.log("mainColor", mainColor);

  return (
    <div className="configurator">
      <div className="configurator-section">
        <h3>Accessory</h3>
        <div className="configurator-items">
          <div
            className={`configurator-select-item ${
              accessory === 1 ? "select-active" : ""
            }`}
            onClick={() => {
              setAccessory(1);
            }}
          >
            Roller
          </div>
          <div
            className={`configurator-select-item ${
              accessory === 2 ? "select-active" : ""
            }`}
            onClick={() => {
              setAccessory(2);
            }}
          >
            Tapper
          </div>
        </div>
      </div>
      <div className="configurator-section">
        <h3>Accessory Material</h3>
        <div className="configurator-items">
          <div
            className={`configurator-select-item ${
              material === "leather" ? "select-active" : ""
            }`}
            onClick={() => {
              setMaterial("leather");
            }}
          >
            Leather
          </div>
          <div
            className={`configurator-select-item ${
              material === "fabric" ? "select-active" : ""
            }`}
            onClick={() => {
              setMaterial("fabric");
            }}
          >
            Alcantara Fabric
          </div>
        </div>
      </div>
      <div className="configurator-section">
        <h3>Main Color</h3>
        <div className="configurator-items">
          {mainColors.map((item, index) => {
            return (
              <div
                key={index}
                className={`configurator-color-item ${
                  item.color === mainColor.color ? "active" : ""
                }`}
                onClick={() => setMainColor(item)}
              >
                <div
                  className="color-item-box"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="color-item-label">{item.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Configurator;
