import "./App.css";
import ResizableComponent from "./components/resizable-component";
import VSCodeWindow from "./components/vscode-window";

function App() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#282c34",
        }}
      >
        <VSCodeWindow>
          <p>This is the main editor area. You can put your content here.</p>
        </VSCodeWindow>
      </div>
    </div>
  );
}

export default App;
