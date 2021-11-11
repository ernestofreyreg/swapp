import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../fetcher";

const getId = person => {
	return person.url.substring(29, person.url.length - 1);
};

export const FrontPage = () => {
	const { data: people, isValidating } = useSWR("/api/people", fetcher);

	return (
		<div>
			<h1>Front Page</h1>
			{isValidating &&
				!people && (
					<div className="spinner-border" role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				)}
			{people && (
				<div>
					{people.results.map(person => (
						<div key={getId(person)}>
							<Link to={"/character/" + getId(person)}>{person.name}</Link>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
