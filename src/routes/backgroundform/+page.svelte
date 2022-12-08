<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import '../../app.css';
	import { resolveJoomlaSession } from './_api';
	import { getActiveCharacterId } from './_api';
	import { getCharacterBackgroundInformation } from './_api';
	import Fa from 'svelte-fa';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import { faUsers } from '@fortawesome/free-solid-svg-icons';
	import { faHouse } from '@fortawesome/free-solid-svg-icons';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';
	import { faCity } from '@fortawesome/free-solid-svg-icons';
	import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
	import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
	import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
	import { faHandsPraying } from '@fortawesome/free-solid-svg-icons';
	import { faIdCardClip } from '@fortawesome/free-solid-svg-icons';
	import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
	import { faHandcuffs } from '@fortawesome/free-solid-svg-icons';
	import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
	import { faDroplet } from '@fortawesome/free-solid-svg-icons';
	import { faNotesMedical } from '@fortawesome/free-solid-svg-icons';
	import { faAward } from '@fortawesome/free-solid-svg-icons';
	import { faMask } from '@fortawesome/free-solid-svg-icons';
	import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
	import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
	import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

	// interface characterInformation {
	// 	id: number;
	// 	characterID: number;
	// 	chargen_name: string;
	// 	first_name: string;
	// 	family_name: string;
	// 	residence: string;
	// 	homeplanet: string;
	// 	birthplanet: string;
	// 	birthdate: string;
	// 	name_father: string;
	// 	name_mother: string;
	// 	birthplace: string;
	// 	faction: string;
	// 	education: string;
	// 	current_position: string;
	// 	bloodtype: string;
	// 	religion: string;
	// 	company_ownership: string;
	// 	court_accusations: string;
	// 	court_sentences: string;
	// 	special_medical_circumstances: string;
	// 	memberships: string;
	// 	life_achievements: string;
	// 	little_secrets: string;
	// 	big_secrets: string;
	// 	political_preference: string;
	// 	other_family: string;
	// 	notable_friends: string;
	// 	miscellany: string;
	// }

	let characterInformation = {
		id: 0,
		characterID: 0,
		chargen_name: '',
		first_name: '',
		family_name: '',
		residence: '',
		homeplanet: '',
		birthplanet: '',
		birthdate: '',
		name_father: '',
		name_mother: '',
		birthplace: '',
		faction: '',
		education: '',
		current_position: '',
		bloodtype: '',
		religion: '',
		company_ownership: '',
		court_accusations: '',
		court_sentences: '',
		special_medical_circumstances: '',
		memberships: '',
		life_achievements: '',
		little_secrets: '',
		big_secrets: '',
		political_preference: '',
		other_family: '',
		notable_friends: '',
		miscellany: ''
	};

	beforeUpdate(() => {
		getCharacter();
	});

	async function getCharacter() {
		let joomlaId: number = await resolveJoomlaSession();
		let activeCharID: number = await getActiveCharacterId(joomlaId);
		characterInformation = await getCharacterBackgroundInformation(activeCharID);
	}
</script>

<div class="pagegrid">
	<header>
		<h1>{characterInformation.chargen_name} - {characterInformation.faction}</h1>
		<button><Fa icon={faArrowLeft} /> Back to character options</button>
		<hr />
		<p>
			This is where you edit your character's background check information. Other players can learn
			this information ingame with certain abilities.
		</p>
	</header>
	<!-- src="/eoschargen/img/passphoto/{characterInformation.characterID}.jpg" -->
	<img class="passphoto" alt="passphoto" onerror="this.src='images/nopassphoto.png';" />

	<div class="formcarousel">
		<section>
			<label
				><Fa icon={faUser} /> First Name
				<input type="text" value={characterInformation.first_name} /></label
			>

			<label
				><Fa icon={faUser} /> Family Name
				<input type="text" value={characterInformation.family_name} /></label
			>
			<label
				><Fa icon={faCalendarAlt} /> Birthdate
				<input type="text" value={characterInformation.birthdate} /></label
			>
			<label
				><Fa icon={faGlobe} /> Birthplanet
				<input type="text" value={characterInformation.birthplanet} /></label
			>

			<label
				><Fa icon={faCity} /> Birthplace
				<input type="text" value={characterInformation.birthplace} /></label
			>

			<label
				><Fa icon={faGlobe} /> Homeplanet
				<input type="text" value={characterInformation.homeplanet} /></label
			>
			<label
				><Fa icon={faHouse} /> Residence
				<input type="text" value={characterInformation.residence} /></label
			>
		</section>
		<section>
			<label
				><Fa icon={faUser} /> Name Parent/Guardian 1
				<input type="text" value={characterInformation.name_father} /></label
			>

			<label
				><Fa icon={faUser} /> Name Parent/Guardian 2
				<input type="text" value={characterInformation.name_mother} /></label
			>

			<label
				><Fa icon={faUsers} /> Other Family
				<input type="text" value={characterInformation.other_family} /></label
			>

			<label
				><Fa icon={faUserGroup} /> Notable Friends
				<input type="text" value={characterInformation.notable_friends} /></label
			>
			<label
				><Fa icon={faHandsPraying} /> Religion
				<input type="text" value={characterInformation.religion} /></label
			>
			<label
				><Fa icon={faDroplet} /> Bloodtype
				<input type="text" value={characterInformation.bloodtype} /></label
			>

			<label
				><Fa icon={faNotesMedical} /> Special Medical Circumstances
				<input type="text" value={characterInformation.special_medical_circumstances} /></label
			>
		</section>
		<section>
			<label
				><Fa icon={faAngleDoubleUp} /> Current Position
				<input type="text" value={characterInformation.current_position} /></label
			>
			<label
				><Fa icon={faGraduationCap} /> Education
				<input type="text" value={characterInformation.education} /></label
			>
			<label
				><Fa icon={faAward} /> Life Achievements
				<input type="text" value={characterInformation.life_achievements} /></label
			>
			<label
				><Fa icon={faBriefcase} /> Company Ownership
				<input type="text" value={characterInformation.company_ownership} /></label
			>

			<label
				><Fa icon={faIdCardClip} /> Memberships
				<input type="text" value={characterInformation.memberships} /></label
			>

			<label
				><Fa icon={faHandcuffs} /> Court Accusations
				<input type="text" value={characterInformation.court_accusations} /></label
			>

			<label
				><Fa icon={faBuildingColumns} /> Court Sentences
				<input type="text" value={characterInformation.court_sentences} /></label
			>
		</section>
		<section>
			<label
				><Fa icon={faMask} /> Little Secrets
				<input type="text" value={characterInformation.little_secrets} /></label
			>
			<label
				><Fa icon={faUserSecret} /> Big Secrets
				<input type="text" value={characterInformation.big_secrets} /></label
			>

			<label
				><Fa icon={faEllipsis} /> Miscellany
				<input type="textarea" value={characterInformation.miscellany} /></label
			>
		</section>
	</div>

	<button class="save">Save Changes</button>
</div>

<style>
	.pagegrid {
		display: grid;
		grid-template-columns: auto auto 150px;
		grid-template-rows: 180px 640px 75px;
		gap: 0px 0px;
		grid-template-areas:
			'header header passphoto'
			'formcarousel formcarousel formcarousel'
			'save save save';
		padding: 15px;
	}
	header {
		grid-area: header;
	}
	.passphoto {
		grid-area: passphoto;
	}
	.formcarousel {
		grid-area: formcarousel;
	}
	.save {
		grid-area: save;
	}

	input[type='text'] {
		display: block;
	}
	label {
		display: block;
		font-size: 1.6rem;
		line-height: 1.6;
		margin: 0.8rem 0;
	}
	input[type='text'] {
		background: none;
		border: 0;
		border-bottom: 2px solid var(--faded-text-color);
		color: var(--faded-text-color);
		padding: 0.8rem 0.25rem;
		transition: 0.3s;
	}
	input[type='text']:hover,
	input[type='text']:active,
	input[type='text']:focus {
		border: 0;
		color: var(--white-text-color);
		border-bottom: 2px solid var(--chargen-blue);
	}
	input[type='textarea'] {
		background: var(--background-color-z3);
		margin-top: 1rem;
		padding: 5px 5px 0 5px;
		border: 1px solid var(--faded-text-color);
		resize: both;
		overflow: auto;
	}
	input[type='textarea']:hover,
	input[type='textarea']:active,
	input[type='textarea']:focus {
		border: 1px solid var(--chargen-blue);
		color: var(--white-text-color);
	}

	.formcarousel {
		font-family: sans-serif;
		display: flex;
	}

	section {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(6, 1fr);

		padding: 1rem;
		width: 270px;
		scroll-snap-align: start;
		position: relative;
	}
</style>
