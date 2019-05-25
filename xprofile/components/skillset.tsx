import React from 'react';
import styled from 'styled-components';

interface skill {
	w: string;
	b: string;
}

const StyledTable = styled.table`
	td,
	th,
	tr {
		border: 1px solid lightgray;
		font-size: 1rem;
	}
`;

const StyledDiv =
	styled.div <
	skill >
	`
        width: ${(props: skill) => props.w + 'px'};
		display: inline-block;
        background-color:${(props:skill)=>props.b};
        height: 10px;
        border: 1px solid black;
        vertical-align:middle;
`;

function Skillset() {
	return (
		<StyledTable>
			{/* <tbody> */}
			<tr>
				<th>Item</th>
				<th>Skill</th>
				<th>Remarks</th>
			</tr>
			{/* <tr>
                    <th></th>
                </tr> */}
			<tr>
				<td>Gatsby</td>
				<td>
					<StyledDiv w="300" b="green"/>
				</td>
				<td>1 Project</td>
			</tr>
			{/* </tbody> */}
		</StyledTable>
	);
}

const skills = {
	'Front end': [
		{
			name: 'React core',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'React Gatsby',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: '2 projects'
		},
		{
			name: 'React Next.js',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: '2 projects'
		},
		{
			name: 'Angular',
			level: '8',
			handsOn: false,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'HTML5',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'CSS',
			level: '6',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'Javascript / ES6 / Typescript',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'React mobile',
			level: '4',
			handsOn: false,
			intrested: true,
			remarks: 'learned'
		},
		{
			name: 'Flutter from Google',
			level: '8',
			handsOn: false,
			intrested: true,
			remarks: '1 project'
		},
		{
			name: 'Ionic',
			level: '8',
			handsOn: false,
			intrested: false,
			remarks: '3 projects'
		}
	],
	'Server side': [
		{
			name: 'C#',
			level: '8',
			handsOn: false,
			intrested: false,
			remarks: 'Many projects'
		},
		{
			name: 'Java',
			level: '7',
			handsOn: false,
			intrested: false,
			remarks: 'Many projects'
		},
		{
			name: 'Python',
			level: '5',
			handsOn: false,
			intrested: true,
			remarks: 'learned'
		},
		{
			name: 'Node.js / Javascript',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'asp.net',
			level: '5',
			handsOn: false,
			intrested: false,
			remarks: 'Many projects'
		}
	],
	Databases: [
		{
			name: 'Microsoft Sql Server',
			level: '7',
			handsOn: false,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'PostgreSQL',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'MySql',
			level: '4',
			handsOn: false,
			intrested: false,
			remarks: 'Learned'
		},
		{
			name: 'Oracle',
			level: '4',
			handsOn: false,
			intrested: false,
			remarks: '1 project'
		},
		{
			name: 'MongoDB',
			level: '4',
			handsOn: false,
			intrested: true,
			remarks: 'Learned'
		},
		{
			name: 'RethinkDB',
			level: '5',
			handsOn: false,
			intrested: true,
			remarks: '1 project'
		}
	],
	API: [
		{
			name: 'GraphQL Apollo',
			level: '7',
			handsOn: true,
			intrested: true,
			remarks: 'Learned'
		},
		{
			name: 'Core API development in node.js',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		}
	],
	'Javascript Libraries': [
		{
			name: 'moment.js',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'Lodash',
			level: '7',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'socket.io',
			level: '8',
			handsOn: false,
			intrested: true,
			remarks: '1 project'
		},
		{
			name: 'jquery',
			level: '8',
			handsOn: false,
			intrested: false,
			remarks: 'many projects'
		},
		{
			name: 'd3.js',
			level: '3',
			handsOn: false,
			intrested: true,
			remarks: '1 projects'
		}
	],
	Cloud: [
		{
			name: 'Docker',
			level: '6',
			handsOn: false,
			intrested: true,
			remarks: '2 projects'
		},
		{
			name: 'Serverless functions (Lambda in Zeit) ',
			level: '6',
			handsOn: true,
			intrested: true,
			remarks: '1 projects'
		},
		{
			name: 'Cloud hosting',
			level: '4',
			handsOn: false,
			intrested: true,
			remarks: 'Learned'
		}
	],
	Sharepoint: [
		{
			name: 'SharePoint on premises',
			level: '8',
			handsOn: false,
			intrested: false,
			remarks: 'Many projects'
		},
		{
			name: 'Office365',
			level: '4',
			handsOn: false,
			intrested: false,
			remarks: 'Learned'
		}
	],
	'Domain knowledge': [
		{
			name: 'Algorithms',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'Framework designs',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: 'Many projects'
		},
		{
			name: 'Financial accounting',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: '1 project'
		},
		{
			name: 'Payroll',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: '1 project'
		},
		{
			name: 'Legal',
			level: '6',
			handsOn: true,
			intrested: true,
			remarks: 'Some projects'
		},
		{
			name: 'Inventory',
			level: '8',
			handsOn: true,
			intrested: true,
			remarks: '3 projects'
		},
		{
			name: 'E-commerce',
			level: '6',
			handsOn: true,
			intrested: true,
			remarks: '1 project'
		}
	]
};

export default Skillset;
