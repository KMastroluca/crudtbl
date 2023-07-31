import CRUDTable from "./components/CRUDTable";
import { AccountTree, ShoppingBag } from '@mui/icons-material';

const ComponentTest = () => {

	interface TableTypeOne {
		id:number;
		firstname:string;
		lastname:string;
		age:number;
		medicalCardId:string;
		[index:string|number]:string|number;
	}

	const dataone:TableTypeOne[] = [
		{id:0, firstname:"Tina", lastname:"Turner", age:22, medicalCardId:"122750"},
		{id:1, firstname:"Ike", lastname:"Turner", age:54, medicalCardId:"122750"},
	];

	const crudActionObj = {
		crudActionCreate:() => {
			console.log("Create");
		},
		crudActionDelete:(id:string) => {
			console.log("Delete"+id);
		},
		crudActionUpdate:(id:string) => {
			console.log("Update"+id);
		},
		crudActionRead:(id:string) => {
			console.log("Read"+id);
		}
	};

	return (
		<CRUDTable<TableTypeOne> 
		data={dataone} 
		index="id"
		crudActions={crudActionObj}
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
