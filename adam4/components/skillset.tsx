import React, { Fragment } from 'react'
import styled from 'styled-components'
// import skills1 from '../docs/skills.json'
import diction from '../diction.json'


const Skillset = ({ skills }:any) => {
	let runningIndex = 0;
	function Skill({ allSkills, skillGroup }:any) {
		return allSkills[skillGroup].map((skill:any, index:number) => {
			runningIndex++;
			return (
				<tr key={index}>
					<td>{runningIndex}</td>
					<td>{skill.name}</td>
					<td>
						<StyledDiv style={{ width: `${skill.level * 10}%`, backgroundColor:`${getColor(skill.level)}` }}></StyledDiv>
						<span>{skill.level}</span>
					</td>
					<td className='media-768'><img src={skill.handsOn ? '/static/images/yes-20px.png' : '/static/images/no-20px.png'}></img></td>
					<td className='media-768'><img src={skill.interested ? '/static/images/yes-20px.png' : '/static/images/no-20px.png'}></img></td>
					<td className='media-992'>{skill.projects}</td>
				</tr>
			);
		});
	};

	const skillGroups = Object.keys(skills).map((skillGroup, index) => {
		return (
			<Fragment key={index}>
				<tr>
					<th />
					<th colSpan={5}>{skillGroup}</th>
				</tr>
				{<Skill allSkills={skills} skillGroup={skillGroup} />}
			</Fragment>
		);
	});

	const Container = (
		<div>
			<StyledH1>Skills of Sushant Agrawal</StyledH1>
			<StyledH4>Contact Sushant for his skills</StyledH4>
			<StyledText>{diction.skillset[0]}</StyledText>
			<StyledText>{diction.skillset[1]}</StyledText>
			<StyledText>{diction.skillset[2]}</StyledText><br></br>
			<StyledTable>
				<thead>
					<tr>
						<th>No</th>
						<th>Skill name</th>
						<th>Skill bar (10 is best)</th>
						<th className='media-768'>Hands on</th>
						<th className='media-768'>Interested</th>
						<th className='media-992'>Experience</th>
					</tr>
				</thead>
				<tbody>{skillGroups}</tbody>
			</StyledTable>
		</div>
	);

	return Container;
}

function getColor(value:any) {
	const colorScheme:any = {
		1: 'grey',
		2: 'yellow',
		3: 'green',
		4: 'blue',
		5: 'black',
		6: 'magenta',
		7: 'cyan',
		8: 'red',
		9: 'violet',
		10: 'red'
	}
	return(colorScheme[value])
}

const StyledText = styled.div`
	margin-bottom:1rem;
	font-size: 1.2rem;
	margin-left:1rem;
`

const StyledH1 = styled.h1`
	font-size: 1.4rem;
	margin-left: 1rem;
	@media(max-width:992px){
		font-size: 1.2rem;
}`

const StyledH4 = styled.h4`
	font-size: 1.1rem;
	margin-left: 1rem;
	@media(max-width:992px){
		font-size: 0.8rem;
}`

const StyledTable = styled.table`
	thead {
		background-color: #dfdfdf;
		font-size: 1.1rem;
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
			margin-left: 0.1rem;
		}
	}
	font-size: 1.0rem;
	border-collapse: collapse;
	margin-left:1rem;

	.media-768{
		@media (max-width:768px){		
		display:none;
		}
	}

	.media-992{
		@media(max-width:992px){
			display:none;
		}
	}

`;

const StyledDiv = styled.div`
	display: inline-block;
	height: 10px;
	border: 2px solid yellow;
	vertical-align: middle;
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
