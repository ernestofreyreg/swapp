import React from "react";
import { Link, useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../fetcher";

export const CharacterPage = () => {
	const params = useParams();
	const { data } = useSWR("/api/people/" + params.id, fetcher);

	return (
		<div>
			<h1>Character Page for character No. {params.id}</h1>
			{data && <div>{data.name}</div>}
			<Link to="/">Go home</Link>
		</div>
	);
};
