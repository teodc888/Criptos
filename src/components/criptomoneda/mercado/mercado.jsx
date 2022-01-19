import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { getCriptosTotal } from "../../../redux/actions";
import Stack from "@mui/material/Stack";
const columns = [
  {
    field: "icon",
    headerName: "Imagen",
    width: 110,
    renderCell: (params) => <img src={params.value} />,
  },
  { field: "symbol", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Nombre",
    width: 210,
    editable: true,
  },
  {
    field: "price",
    headerName: "Precio",
    width: 310,
    editable: true,
  },
  {
    field: "priceChange1d",
    headerName: "24 horas cambio",
    type: "number",
    width: 210,
    editable: true,
  },
  {
    field: "volume",
    headerName: "24 horas Valumen",
    type: "number",
    width: 410,
    editable: true,
  },
  {
    field: "marketCap",
    headerName: "Capacidad Mercado",
    type: "number",
    width: 410,
    editable: true,
  },
];

export default function Mercado() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCriptosTotal());
  }, [dispatch]);
  const criptos = useSelector((state) => state.criptosTotal);
  console.log(criptos);
  return (
    <>
           <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
            <h1>MERCADO</h1>
        </Stack>
      <div style={{ height: 650, width: "100%", backgroundColor: "white" }}>
        <DataGrid
          rows={criptos}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </div>
    </>
  );
}
