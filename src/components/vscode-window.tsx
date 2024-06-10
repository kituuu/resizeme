import React from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";

const VSCodeWindow = ({ children }: { children: React.ReactNode }) => {
  return (
    <ResizableBox
      width={800}
      height={600}
      minConstraints={[400, 300]}
      maxConstraints={[1200, 900]}
      resizeHandles={["se"]}
      className="vscode-window"
    >
      <div className="vscode-title-bar">VSCode - Clone</div>
      <div style={{ display: "flex", flex: 1 }}>
        <div className="vscode-sidebar">Sidebar</div>
        <div className="vscode-editor">{children}</div>
      </div>
    </ResizableBox>
  );
};

export default VSCodeWindow;
