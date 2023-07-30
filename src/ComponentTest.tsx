
import { Card, CardContent } from "@mui/material";
import CRUDTable from "./components/CRUDTable";
import { MenuItem } from '@mui/base';
import { AccountTree, ShoppingBag } from '@mui/icons-material';

const ComponentTest = () => {

	interface TableTypeOne {
		id:number;
		firstname:string;
		lastname:string;
		medicalCardId:string;
		[index:string|number]:string|number;
	}

	const dataone:TableTypeOne[] = [
		{id:0, firstname:"Tina", lastname:"Turner", medicalCardId:"122750"},
		{id:1, firstname:"Ike", lastname:"Turner", medicalCardId:"122750"},
		{id:2, firstname:"Manfred", lastname:"Lemmings", medicalCardId:"122750"},
		{id:3, firstname:"Carson", lastname:"Daly", medicalCardId:"122750"},
		{id:4, firstname:"Christopher", lastname:"Skunk", medicalCardId:"122750"},
		{id:5, firstname:"Bantam", lastname:"Forester", medicalCardId:"122750"}
	];

	return (
		<CRUDTable<TableTypeOne> 
		data={dataone} 
		index="id"
		additionalActions={[
			{
				menuItemLabel:"Additional Action 1",
				menuItemIcon:<AccountTree />,
				menuItemOnClick() {
					console.log('Additional Action 1 Was Clicked.');
				},
			},
			{
				menuItemLabel:"Additional Action 2",
				menuItemIcon:<ShoppingBag />,
				menuItemOnClick() {
					console.log('Additional Action 2 Was Clicked');
				},
			}
		]} />
	);
};

export default ComponentTest;
