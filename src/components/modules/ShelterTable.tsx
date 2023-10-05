import { TownShelters } from "@/api/shelter";
import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { TableHead, TableRow, TableCell, TableBody, Table, TableFooter, IconButton } from "@mui/material";
import React from "react";

interface ShelterTableProps {
  data: TownShelters
  ChangePage: (variant: 'prev' | 'next') => void
}

const ShelterTable: React.FC<ShelterTableProps> = ({
  data,
  ChangePage
}) => {
  // const [page, setPage] = React.useState(data.page);
  // const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const handleChangePage = (variant: 'prev' | 'next') => (event: React.MouseEvent) => {
    ChangePage(variant)
  }
  return <Table>
    <TableHead>
      <TableRow>
        <TableCell>
          상세주소
        </TableCell>
        <TableCell>
          시설
        </TableCell>
        <TableCell>
          수용가능면적
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {data.content.map((shelter) => (
        <TableRow key={`shelter-${shelter.id}`}>
          <TableCell>{shelter.fullAddress}</TableCell>
          <TableCell>{shelter.name}<br />{shelter.type ? `(${shelter.type})` : null}</TableCell>
          <TableCell>{shelter.area}m<sup>2</sup></TableCell>
        </TableRow>
      ))}
    </TableBody>
    <TableFooter>
      <TableRow>
        <TableCell colSpan={10} sx={{ textAlign: 'end' }}>
          <IconButton onClick={handleChangePage('prev')}>
            <ChevronLeftRounded />
          </IconButton>
          {data.page} / {data.totalPage}
          <IconButton onClick={handleChangePage('next')}>
            <ChevronRightRounded />
          </IconButton>
        </TableCell>
      </TableRow>
    </TableFooter>
  </Table>
};

export default ShelterTable;