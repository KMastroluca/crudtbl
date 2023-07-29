import React from "react";
import {
TableContainer,
Table,
TableHead,
TableRow,
TableBody,
TableCell,
Paper,
} from '@mui/material';

interface DataItemType {
	[index: string | number]: string | number;
}

interface CRUDTableProps<T extends DataItemType> {
	data:T[];
	index:keyof T & string;
}

function CRUDTable<T extends DataItemType>({data, index}:CRUDTableProps<T>)	{

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						{data[0] && Object.keys(data[0]).map((header) => header !== index && (
							<TableCell key={header}>{header.toUpperCase()}</TableCell>
						))}
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((item) => (
						<TableRow key={String(item[index])}>
							{Object.keys(item).map((key) => key !== index && (
								<TableCell key={key}>
									{String(item[key])}
								</TableCell>
							))}
							<TableCell>
								{/* Actions Buttons For Crud Actions */}
								Actions
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);

};

export default CRUDTable;
