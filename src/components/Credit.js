import React from "react";
import styled from "styled-components";
const Credit = () => {
	return (
		<CreditContainer>
			<Link href="" target="_blank">
				Made by nico bazzoni
			</Link>
	
			
		</CreditContainer>
	);
};

const CreditContainer = styled.div`
	user-select: none;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: flex-end;
	z-index: 9;
	bottom: 5px;
	right: 5px;
	color: rgb(11, 11, 11);
	font-size: 0.75rem;
`;

const Link = styled.a`
	color: rgb(20, 20, 20);
`;
export default Credit;