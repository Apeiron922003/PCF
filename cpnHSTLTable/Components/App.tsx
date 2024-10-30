import * as React from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import HSTLTable from "./HSTLTable/HSTLTable";
import { IInputs, IOutputs } from "../generated/ManifestTypes";
// Sample Data
const taiLieuData = [
  {
    ID: 1,
    Title: "Tài liệu A",
    MaTaiLieu: "TA1",
    TrangThai: { Value: "Có sẵn" },
    NgayMuon: "01/08/2024",
    NgayTra: "08/08/2024",
    NgayGiaHan: "",
    NgayLayPhoto: "",
  },
  {
    ID: 2,
    Title: "Tài liệu B",
    MaTaiLieu: "TB1",
    TrangThai: { Value: "Không sẵn" },
    NgayMuon: "05/08/2024",
    NgayTra: "12/08/2024",
    NgayGiaHan: "10/08/2024",
    NgayLayPhoto: "06/08/2024",
  },
  {
    ID: 3,
    Title: "Tài liệu C",
    MaTaiLieu: "TC1",
    TrangThai: { Value: "Không mượn/photo" },
    NgayMuon: "10/08/2024",
    NgayTra: "17/08/2024",
    NgayGiaHan: "15/08/2024",
    NgayLayPhoto: "",
  },
  {
    ID: 4,
    Title: "Tài liệu D",
    MaTaiLieu: "TD1",
    TrangThai: { Value: "Có sẵn" },
    NgayMuon: "12/08/2024",
    NgayTra: "19/08/2024",
    NgayGiaHan: "",
    NgayLayPhoto: "13/08/2024",
  },
];
const App = (context: ComponentFramework.Context<IInputs>) => {
  return (
    <FluentProvider theme={webLightTheme}>
      <h1>{"Không có gì hấp dẫn"}</h1>
      <button
        onClick={() => {
          console.log(context.parameters.sampleDataTest);
        }}
      >
        Log
      </button>
      <HSTLTable taiLieuData={taiLieuData} />
    </FluentProvider>
  );
};

export default App;
