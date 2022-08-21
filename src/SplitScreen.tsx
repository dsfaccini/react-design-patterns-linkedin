import React, { Component, FC, PropsWithChildren, ReactNode, FunctionComponent } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
`;

interface PaneProps {
	// should be called "flex"
	weight: number;
}

const Pane = styled.div<PaneProps>`
	flex: ${(props) => props.weight};
`;
// https://codinginfinite.com/using-typescript-with-styled-components/
// https://github.com/Microsoft/typescript-styled-plugin#configuration

interface SplitScreenProps {
	// extends PropsWithChildren {
	leftWeight: number;
	rightWeight: number;
	// children?: React.ReactNode;
	children: React.ElementType[];
}

// export const SplitScreen: React.FC<PropsWithChildren<SplitScreenProps>> = ({ leftWeight, rightWeight, children }) => {
export const SplitScreen = ({ leftWeight, rightWeight, children }: SplitScreenProps) => {
	const [Left, Right] = children;
	return (
		<Container>
			<Pane weight={leftWeight}>
				<Left></Left>
			</Pane>
			<Pane weight={rightWeight}>
				<Right></Right>
			</Pane>
		</Container>
	);
};
