import React, { Fragment } from 'react';
import styled from 'styled-components';
import skills from '../handy/skills.json'


function Skillset() {
	let runningIndex=0;
	function Skill({ allSkills, skillGroup }) {		
		return allSkills[skillGroup].map((skill, index) => {
			runningIndex++;
			return (
				<tr key={index}>
					<td>{runningIndex}</td>
					<td>{skill.name}</td>
					<td>						
						<StyledDiv style={{ width: `${skill.level * 10}%` }}></StyledDiv>
						<span>{skill.level}</span>
					</td>
					<td><img src={skill.handsOn ? '/static/images/yes-20px.png' : '/static/images/no-20px.png'}></img></td>
					<td><img src={skill.interested ? '/static/images/yes-20px.png' : '/static/images/no-20px.png'}></img></td>
					<td>{skill.projects}</td>
				</tr>
			);
		});
	};

	const skillGroups = Object.keys(skills).map((skillGroup, index) => {
		return (
			<Fragment key={index}>
				<tr>
					<th />
					<th colSpan="5">{skillGroup}</th>
				</tr>
				{<Skill allSkills={skills} skillGroup={skillGroup} />}
			</Fragment>
		);
	});

	const Container = (
		<div>
			<h1>Software development skills of Sushant</h1>
			<StyledTable>
				<thead>
					<tr>
						<th>No</th>
						<th>Skill name</th>
						<th>Skill bar (10 is best)</th>
						<th>Hands on</th>
						<th>Interested</th>
						<th>Experience</th>
					</tr>
				</thead>
				<tbody>{skillGroups}</tbody>
			</StyledTable>
		</div>
	);

	return Container;
}

function getRandomColor() {
	return 'hsla(' + Math.floor(Math.random() * 360) + ', 100%, 70%, 1)';
}

const StyledTable = styled.table`
	thead {
		background-color: #dfdfdf;
		font-size: 1.3rem;
		th {
			border: 1px solid #a0a0a0;
		}
	}
	th {
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		border: 1px solid lightgray;
		background-color: #f3f3f3;
	}
	td {
		border: 1px solid lightgray;
		padding-left: 0.5rem;
		padding-right: 0.5rem;
		img {
			display: block;
			margin: auto;
		}
		span {
			vertical-align: middle;
			margin-left: 0.3rem;
		}
	}
	font-size: 1.1rem;
	border-collapse: collapse;
`;

const StyledDiv = styled.div`
	display: inline-block;
	height: 10px;
	border: 2px solid yellow;
	vertical-align: middle;
	background-color: ${() => getRandomColor()};
	margin-left: 0.3rem;
`;

export default Skillset;

/*
interface skill {
	w: string;
	b: string;
}
width: ${(props: skill) => props.w + 'px'};
background-color:${(props:skill)=>props.b};
*/
