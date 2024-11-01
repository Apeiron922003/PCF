import * as React from "react";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import HSTLTable, { IDataProps, IHSTLTableProps } from "./HSTLTable/HSTLTable";
import { IInputs, IOutputs } from "../generated/ManifestTypes";

// Sample Data
const taiLieuData: IDataProps[] = [
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
interface IAppProps {
  context: ComponentFramework.Context<IInputs>;
  setSelectedItem: (selectedItem: number) => void;
}
const App = (props: IAppProps) => {
  const [items, setItems] = React.useState<IDataProps[]>(taiLieuData);

  React.useEffect(() => {
    const data = props.context.parameters.Sources;
    if (data.records["id0"].getValue("ID")) {
      setItems(
        data.sortedRecordIds.map((id: string): IDataProps => {
          return {
            ID: +data.records[id].getValue("ID").valueOf(),
            Title: data.records[id].getValue("Title").toString(),
            MaTaiLieu: data.records[id].getValue("MaTaiLieu").toString(),
            TrangThai: {
              Value: data.records[id].getValue("TrangThai").toString(),
            },
            NgayMuon: data.records[id].getValue("NgayTra").toString(),
            NgayTra: data.records[id].getValue("NgayTra").toString(),
            NgayGiaHan: data.records[id].getValue("NgayGiaHan").toString(),
            NgayLayPhoto: data.records[id].getValue("NgayLayPhoto").toString(),
          };
        })
      );
    }
  }, []);

  return (
    <FluentProvider theme={webLightTheme}>
      <h1>HSTL cần xử lý</h1>
      <HSTLTable taiLieuData={items} setSelectedItem={props.setSelectedItem} />
    </FluentProvider>
  );
};

export default App;
