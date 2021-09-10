import './App.css';
import { VictoryPie } from "victory";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const sampleData = [
  { x: "Cats", y: 35 },
  { x: "Dogs", y: 40 },
  { x: "Birds", y: 55 }
];

function createPDF() {
  const chart = document.querySelector("#chart-pdf");
  
  // chart style
  const width = 500;
  const height = 500;
  const topMargin = 15;
  const pdfWidth = width + topMargin * 2;
  const pdfHeight = width * 1.5 + topMargin * 2;
  const canvasImageWidth = width;
  const canvasImageHeight = height;
  
  if (chart !== null) {
    html2canvas(chart).then(function (canvas) {
      const doc = new jsPDF("p", "pt", [pdfWidth, pdfHeight]);
      doc.text("Pie Chart PDF", 15, 15);
      doc.addImage(
      canvas,
      "png",
      topMargin,
      topMargin,
      canvasImageWidth,
      canvasImageHeight
      )
      doc.save("pie.pdf")
    })
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Default React app with typescript.
        </p>
        <div>
          <button onClick={createPDF}>Create PDF</button>
          </div>
        <div id="chart-pdf" style={{width: 500}}>
        <VictoryPie
          colorScale={["tomato", "navy", "gold" ]}
          data={sampleData}
        />
        </div>
      </header>
    </div>
  );
}

export default App;
