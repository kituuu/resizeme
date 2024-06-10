import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const ResizableComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizableBox
      width={300}
      height={300}
      minConstraints={[100, 100]}
      maxConstraints={[600, 600]}
      resizeHandles={["se"]}
      style={{
        border: "1px solid black",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
        {children}
      </div>
    </ResizableBox>
  );
};

export default ResizableComponent;
