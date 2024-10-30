import * as React from "react";
import { makeStyles, shorthands } from "@fluentui/react-components";
import HSTLHeader from "./HSTLHeader";
import { Icon, IconButton } from "@fluentui/react";

// Styles
const useStyles = makeStyles({
  table: {
    width: "100%",
    borderCollapse: "collapse",
    ...shorthands.border("1px", "solid", "#ddd"),
  },
  th: {
    ...shorthands.border("1px", "solid", "#ddd"),
    padding: "8px",
    textAlign: "center",
    backgroundColor: "#f2f2f2",
  },
  td: {
    ...shorthands.border("1px", "solid", "#ddd"),
    padding: "8px",
    textAlign: "center",
  },
  checkboxCell: {
    width: "40px", // tùy chỉnh độ rộng của ô chứa checkbox
  },
  iconCell: {
    width: "60px", // tùy chỉnh độ rộng của ô chứa icon
  },
});

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
}

export default function HSTLTable(props: IHSTLTableProps) {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th className={`${classes.th} ${classes.checkboxCell}`}>
            <input type="checkbox" name="" id="" />
          </th>
          <th className={classes.th}>STT</th>
          <th className={classes.th}>Mã tài liệu</th>
          <th className={classes.th}>Tên tài liệu</th>
          <th className={`${classes.th} ${classes.iconCell}`}>Hình chụp</th>
          <th className={classes.th}>Trạng thái HSTL</th>
          <th className={classes.th}>Ngày yêu cầu mượn/photo</th>
          <th className={classes.th}>Ngày trả</th>
          <th className={classes.th}>Ngày gia hạn</th>
          <th className={classes.th}>Ngày lấy photo</th>
          <th className={`${classes.th} ${classes.iconCell}`}>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {props.taiLieuData.map((item, index) => (
          <tr key={index}>
            <td className={`${classes.td} ${classes.checkboxCell}`}>
              <input type="checkbox" name="" id="" />
            </td>
            <td className={classes.td}>{index + 1}</td>
            <td className={classes.td}>{item.MaTaiLieu}</td>
            <td className={classes.td}>{item.Title}</td>
            <td className={`${classes.td} ${classes.iconCell}`}>
              <IconButton
                iconProps={{ iconName: "Camera" }}
                onClick={() => {
                  alert("Hình chụp");
                }}
              />
            </td>
            <td className={classes.td}>{item.TrangThai.Value}</td>
            <td className={classes.td}>{item.NgayMuon}</td>
            <td className={classes.td}>{item.NgayTra}</td>
            <td className={classes.td}>{item.NgayGiaHan}</td>
            <td className={classes.td}>{item.NgayLayPhoto}</td>
            <td className={`${classes.td} ${classes.iconCell}`}>
              <IconButton iconProps={{ iconName: "Edit" }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
