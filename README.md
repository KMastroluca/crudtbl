# 🚀 @nfa/crudtbl

**@nfa/crudtbl** is a highly adaptable, easy to use, and efficient CRUD Table component for React built with TypeScript and Material UI.

## 🌟 Features
- 🛠️ Customizable
- 🎯 CRUD operations ready
- 😍 Good looking

## 🛠️ Usage

1. Install the component library using npm:
```
npm install @nfa/crudtbl
```
2. Import `CRUDTable` from the library:
```
import CRUDTable from "@nfa/crudtbl";
```
3. Setup your data and pass it to the `CRUDTable` component:

Setting up your data involves defining an interface for the data type as shown below:
```
interface DataType {
	id: number;
	firstname: string;
	lastname: string;
	medicalCardId: string;
	[index: string | number]: string | number;
}

const data: DataType[] = [
	{ id: 0, firstname: "John", email: "john@example.com" },
	// More objects...
];
```
Then pass the data and the index to the `CRUDTable` component:
```
<CRUDTable<DataType> data={data} index="id" />
```
## 🎯 Examples

The following is an example of a `CRUDTable` component wrapped inside a `Card` component:
```
import { Card, CardContent } from '@mui/material';
import CRUDTable from "@nfa/crudtbl";

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
		<Card>
			<CardContent>
				<CRUDTable<TableTypeOne> data={dataone} index="id" />
			</CardContent>
		</Card>
	);
};

export default ComponentTest;
```
This example shows the `CRUDTable` component being used to display a table of users inside a Material UI `Card` component.

## ❤️ Support
Like **@nfa/crudtbl**? Please give this repository a ⭐️ and share the love!

## 🤝 Contributing
Contributions are always welcome! Please read the [contribution guidelines](CONTRIBUTING.md) first.

## 📜 License
Licensed under the MIT License. See [LICENSE](LICENSE) for more information.

*🚀 Happy coding with @nfa/crudtbl! 🚀*
