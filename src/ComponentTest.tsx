
import { Card, CardContent } from "@mui/material";
import CRUDTable from "./components/CRUDTable";

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
		<CRUDTable<TableTypeOne> data={dataone} index="id" />
	);
};

export default ComponentTest;
