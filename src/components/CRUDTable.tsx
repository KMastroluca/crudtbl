import {
TableContainer,
Table,
TableHead,
TableRow,
TableBody,
TableCell,
Paper,
Typography,
IconButton,
Button,
Tooltip,
} from '@mui/material';
import { Stack } from '@mui/system';

import {
	ArrowDropDown,
    Delete,
	More,
	MoreHoriz,
Update, ViewList 
} from '@mui/icons-material';

// Import Styles ----------------------------
import '../styles/CRUDTable.css';


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
							<TableCell key={header}><Typography variant="overline" fontWeight={700}>{header.toUpperCase()}</Typography></TableCell>
						))}
						<TableCell align='right'  colSpan={2}><Typography variant='overline' fontWeight={700}>ACTIONS</Typography></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((item, i) => (
						<TableRow key={String(item[index])}
								  className={i % 2 === 1 ? 'crudtbl-dark-row' : 'crudtbl-row'} 
						>

							{Object.keys(item).map((key) => key !== index && (
								<TableCell key={key}
										   style={{borderRight:'1px solid #808080'}}
								>
								<Typography variant='body1'>{String(item[key])}</Typography>
								</TableCell>
							))}

							<TableCell
							 align='right'
							 colSpan={2}
							 style={{borderRight:'1px solid #808080'}}
							 >
								<Stack  justifyContent={'flex-end'} direction={"row"}>

									<Tooltip title="View Details">
										<IconButton color='info'>
											<ViewList />
										</IconButton>
									</Tooltip>

									<Tooltip title="Update Entry">
										<IconButton color='secondary'>
											<Update />
										</IconButton>
									</Tooltip>

									<Tooltip title='More Actions...' >
										<Button variant='text' 
											startIcon={<MoreHoriz/>} 
											endIcon={<ArrowDropDown />} 
											color='primary'>
										</Button>
									</Tooltip>

									<Tooltip title="Delete Entry">
										<IconButton color='error'>
											<Delete />
										</IconButton>
									</Tooltip>

								</Stack>
							</TableCell>

						</TableRow>
					))}

				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default CRUDTable;
