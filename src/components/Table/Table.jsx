import React, { useEffect } from 'react';
import TableGrid from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';

export default function Table({ data, onSort }) {

	return (
		<TableContainer>
			<TableGrid sx={{ minWidth: 650 }} aria-label="simple table">
				<TableHead>
					<TableRow>
						<TableCell>Data</TableCell>
						<TableCell align="right">distance</TableCell>
						<TableCell align="right">name</TableCell>
						<TableCell align="right">points</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((row) => (
						<TableRow
							key={row.date}
							sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
						>
							<TableCell component="th" scope="row">{row.date}</TableCell>
							<TableCell align="right">{row.distance}</TableCell>
							<TableCell align="right">{row.name}</TableCell>
							<TableCell align="right">{row.points}</TableCell>
						</TableRow>
					))}
				</TableBody>


			</TableGrid>
		</TableContainer>
	);
}
