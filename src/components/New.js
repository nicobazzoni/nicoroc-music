import React from "react";
import styled from "styled-components";
const New = () => {
	return (
		<CreditContainer>
			<Link href="" target="_blank">
				Hello
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
	z-index: 50;
	bottom:50px;
	right: 27px;
	color: rgb(155, 155, 155);
	font-size: 0.75rem;
`;

const Link = styled.a`
	color: rgb(155, 155, 155);
`;
export default New;