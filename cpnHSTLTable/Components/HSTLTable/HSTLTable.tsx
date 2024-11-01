import * as React from "react";
import HSTLHeader from "./HSTLHeader";
import { Icon, IconButton } from "@fluentui/react";

export interface IDataProps {
  ID: number;
  Title: string;
  MaTaiLieu: string;
  TrangThai: {
    Value: string;
  };
  NgayMuon: string;
  NgayTra: string;
  NgayGiaHan: string;
  NgayLayPhoto: string;
}

export interface IHSTLTableProps {
  taiLieuData: IDataProps[];
  setSelectedItem: (selectedItem: number) => void;
}

export default function HSTLTable(props: IHSTLTableProps) {
  return (
    <table className={"HSTLTable"}>
      <thead>
        <tr>
          <th className="HSTLTable-header-checkbox">
            <input type="checkbox" name="" id="" />
          </th>
          <th>STT</th>
          <th>Mã tài liệu</th>
          <th>Tên tài liệu</th>
          <th>Hình chụp</th>
          <th>Trạng thái HSTL</th>
          <th>Ngày yêu cầu mượn/photo</th>
          <th>Ngày trả</th>
          <th>Ngày gia hạn</th>
          <th>Ngày lấy photo</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {props.taiLieuData.map((item, index) => (
          <tr key={index}>
            <td>
              <input type="checkbox" name="" id="" />
            </td>
            <td>{index + 1}</td>
            <td>{item.MaTaiLieu}</td>
            <td>{item.Title}</td>
            <td>
              <IconButton
                iconProps={{ iconName: "Camera" }}
                onClick={() => {
                  props.setSelectedItem(item.ID);
                }}
              />
            </td>
            <td>{item.TrangThai.Value}</td>
            <td>{item.NgayMuon}</td>
            <td>{item.NgayTra}</td>
            <td>{item.NgayGiaHan}</td>
            <td>{item.NgayLayPhoto}</td>
            <td>
              <IconButton iconProps={{ iconName: "Edit" }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
