<script lang="ts">
	export let title: string;
	export let description: string;
	export let author: {
		firstName: string;
		lastName: string;
		role: string;
		age: number;
	};
	export let hobbies: {
		name: string;
		description: string;
	}[];
</script>

<h1>{title}</h1>
<h2>{description}</h2>
<div>
	<h2>{author.firstName} {author.lastName}</h2>
	<div>{author.role}</div>
	<div>Age: {author.age}</div>
</div>
<ul>
	{#each hobbies as hobby}
		<li>
			<h3>{hobby.name}</h3>
			<p>{hobby.description}</p>
		</li>
	{/each}
</ul>
