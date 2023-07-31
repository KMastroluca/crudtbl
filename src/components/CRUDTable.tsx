import React from 'react';
import {
TableContainer,
Table,
TableHead,
TableRow,
TableBody,
MenuItem,
TableCell,
Paper,
Typography,
IconButton,
Button,
Menu,
MenuProps,
Tooltip,
SvgIconProps,
} from '@mui/material';

import {
	styled,
	alpha
} from '@mui/material/styles';

import { Stack } from '@mui/system';

import {
ArrowDropDown,
Delete,
MoreHoriz,
Update, 
ViewList 
} from '@mui/icons-material';

// Import Styles ----------------------------
import '../styles/CRUDTable.css';


interface DataItemType {
	[index: string | number]: string | number;
}

interface AdditionalActionType {
	menuItemLabel:string;
	menuItemIcon?:React.ReactElement<SvgIconProps>;
	menuItemOnClick?:() => void;
}

interface CRUDActionsType {
	crudActionCreate?:() => void;
	crudActionUpdate?:(updateIndex:any) => void;
	crudActionDelete?:(deleteIndex:any) => void;
	crudActionRead?:(readIndex:any) => void;
}

interface CRUDTableProps<T extends DataItemType> {
	data:T[];
	index:keyof T & string;
	additionalActions?:AdditionalActionType[];
	crudActions?:CRUDActionsType;
}


const MoreActionsMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical:'bottom',
			horizontal:'right',
		}}
		transformOrigin={{
			vertical:'top',
			horizontal:'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop:theme.spacing(1), minWidth:180,
		color:
			theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
		boxShadow:
			'rgb(255,255,255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list':{
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root':{
				fontSize:18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
			'&:active':{
				backgroundColor: alpha(
					theme.palette.primary.main,
					theme.palette.action.selectedOpacity,
				),
			},
		},
	}
}));

function CRUDTable<T extends DataItemType>({data, index, crudActions, additionalActions}:CRUDTableProps<T>)	{

	const [moreActionsMenuAnchor, setMoreActionsMenuAnchor] = React.useState<null | HTMLElement>(null) 
	const moreActionsMenuOpen = Boolean(moreActionsMenuAnchor);
	const handleMoreActionsMenuClick = (event:React.MouseEvent<HTMLElement>) => {
		setMoreActionsMenuAnchor(event.currentTarget);
	};
	const handleCloseMoreActionsMenu = () => {
		setMoreActionsMenuAnchor(null);
	};




	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow className='crudtbl-header-row'>
						{/* Figure Out The Header Names, Based On The DataType Keys -- */}
						{data[0] && Object.keys(data[0]).map((header) => header !== index && (
							<TableCell key={header} className='crudtbl-header-cell'>
								<Typography variant="overline" fontWeight={700}>
									{header.toUpperCase()}
								 </Typography>
							</TableCell>
						))}
						<TableCell align='right' className='crudtbl-header-actions-cell'  colSpan={2}>
							<Typography variant='overline' fontWeight={700}>ACTIONS</Typography>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody className='crudtbl-body'>
					{data.map((item, i) => (
						<TableRow key={String(item[index])}  className={i % 2 === 1 ? 'crudtbl-dark-row' : 'crudtbl-row'} >
						
							{/* -- Iterate Thru All The Keys Of Each Object -- */}
							{Object.keys(item).map((key) => key !== index && (
								<TableCell key={key}
										   style={{borderRight:'1px solid #808080'}}
								>
								<Typography variant='body1'>{String(item[key])}</Typography>
								</TableCell>
							))}

							{/* -- Actions Table Cell For Every Entry --  */}
							<TableCell
							 align='right'
							 colSpan={2}
							 style={{borderRight:'1px solid #808080'}}
							 >
								<Stack  justifyContent={'flex-end'} direction={"row"}>


									{crudActions ? (
									<>
										{/* -- Basic Crud Buttons + Additional Actions -- */}
										<Tooltip title="View Details">
												<IconButton onClick={() => 
													{if (crudActions.crudActionRead){
														crudActions.crudActionRead(item[index]);
													}
													}} color='info'>
												<ViewList />
											</IconButton>
										</Tooltip>

										<Tooltip title="Update Entry">
											<IconButton onClick={() => {
											if (crudActions.crudActionUpdate){
											crudActions.crudActionUpdate(item[index]) 
											}
											}} color='secondary'>
												<Update />
											</IconButton>
										</Tooltip>
									</>
									) : false}

									{additionalActions ? (
										<>
										{/* -- More Actions Dropdown Button & Menu -- */}

										<Tooltip title='More Actions' >
											<Button variant='text' 
												onClick={handleMoreActionsMenuClick}
												startIcon={<MoreHoriz/>} 
												endIcon={<ArrowDropDown />} 
												color='primary'>
											</Button>
										</Tooltip>


										{/* -- More Actions Dropdown Button & Menu End -- */}	


										<MoreActionsMenu 
										anchorEl={moreActionsMenuAnchor}
										open={moreActionsMenuOpen}
										onClose={handleCloseMoreActionsMenu}
										>
											{additionalActions?.map(action => (
												<MenuItem key={action.menuItemLabel as React.Key}
													onClick={action.menuItemOnClick}>
														{action.menuItemIcon}
														{action.menuItemLabel}
												</MenuItem>
											))}
											{/* -- Menu Items For Additonal Items --  */}

										</MoreActionsMenu>
										</>
									) : false}

									{crudActions ? (
									<>
										<Tooltip title="Delete Entry">
											<IconButton onClick={() => {
											if (crudActions.crudActionDelete) {
											crudActions.crudActionDelete(item[index]) 
											}
											}} color='error'>
												<Delete />
											</IconButton>
										</Tooltip>
									</>
									) : false}

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
