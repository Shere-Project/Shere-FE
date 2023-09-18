import { TownShelters } from "@/api/shelter";
import { TableHead, TableRow, TableCell, TableBody, Table } from "@mui/material";

interface ShelterTableProps {
  data: TownShelters
}

const ShelterTable: React.FC<ShelterTableProps> = ({
  data
}) => {
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
  </Table>
};

export default ShelterTable;