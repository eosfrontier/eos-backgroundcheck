<script lang="ts">
	import '../../app.css';
	import Fa from 'svelte-fa';
  	import { faUser } from '@fortawesome/free-solid-svg-icons';
	import { faUsers } from '@fortawesome/free-solid-svg-icons';
	import { faHouse } from '@fortawesome/free-solid-svg-icons';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';
	import { faCity } from '@fortawesome/free-solid-svg-icons';
	import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
	import {faGraduationCap} from '@fortawesome/free-solid-svg-icons';
	import {faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons';
	import {faHandsPraying} from '@fortawesome/free-solid-svg-icons';
	import {faIdCardClip} from '@fortawesome/free-solid-svg-icons';
	import {faBriefcase} from '@fortawesome/free-solid-svg-icons';
	import {faHandcuffs} from '@fortawesome/free-solid-svg-icons';
	import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
	import {faDroplet} from '@fortawesome/free-solid-svg-icons';
	import {faNotesMedical} from '@fortawesome/free-solid-svg-icons';
	import {faAward} from '@fortawesome/free-solid-svg-icons';
	import {faMask} from '@fortawesome/free-solid-svg-icons';
	import {faUserSecret} from '@fortawesome/free-solid-svg-icons';
	import {faUserGroup} from '@fortawesome/free-solid-svg-icons';
	import {faEllipsis} from '@fortawesome/free-solid-svg-icons';


	let characterInformation = {
    "id": "0",
    "characterID": "42",
    "chargen_name": "Nimuel Agati Iskandu",
    "first_name": "Nimuel",
    "family_name": "Agati Iskandu",
    "residence": "Bastion Eos",
    "homeplanet": "Eos",
    "birthplanet": "Hideyoshi",
    "birthdate": "3/Aug/210",
    "name_father": "Arturo (Lito) Agati Iskandu",
    "name_mother": "Hahnna Agati Iskandu",
    "birthplace": "Hideyoshi",
    "faction": "dugo",
    "education": "Militair",
    "current_position": "Apatar",
    "bloodtype": "A",
    "religion": "Geen",
    "company_ownership": "nvt",
    "court_accusations": "nvt",
    "court_sentences": "nvt",
    "special_medical_circumstances": "",
    "memberships": "",
    "life_achievements": "Appointed Apatar Kepala of Eos Colony",
    "little_secrets": "",
    "big_secrets": "",
    "political_preference": "Inabayan",
    "other_family": "Halina Agati Iskandu",
    "notable_friends": "",
    "miscellany": ""
}

</script>

<style>
	input[type="text"] {display:block;}
	.formgrid {
		width:100%;
		display:grid;
		padding:1.5rem;
		grid-template-columns: 1fr 1fr;
  		grid-auto-flow: row dense;
	}
	label {
		display:block;
		font-size: 1.6rem;
		line-height:1.6;
		margin:0.8rem 0;
		}
	.gridleft {grid-column-start:1;}
</style>

<div class="formgrid">

<label class="gridleft"><Fa icon={faUser}/> Full Name <input type="text" disabled value={characterInformation.chargen_name}></label> 

<label class="gridleft"><Fa icon={faUsers}/> Faction <input type="text" disabled value={characterInformation.faction}></label>


<label class="gridleft"><Fa icon={faUser}/> First Name
<input type="text" value={characterInformation.first_name}></label> 


<label class="gridleft"><Fa icon={faUser}/> Family Name 
<input type="text" value={characterInformation.family_name}></label>

<label class="gridleft"><Fa icon={faHouse}/> Residence 
<input type="text" value={characterInformation.residence}></label>

<label class="gridleft"><Fa icon={faGlobe}/> Homeplanet 
<input type="text" value={characterInformation.homeplanet}></label>

<label class="gridleft"><Fa icon={faGlobe}/> Birthplanet 
<input type="text" value={characterInformation.birthplanet}></label>

<label class="gridleft"><Fa icon={faCity}/> Birthplace 
<input type="text" value={characterInformation.birthplace}></label>

<label class="gridleft"><Fa icon={faCalendarAlt}/> Birthdate 
<input type="text" value={characterInformation.birthdate}></label>


<label class="gridleft"><Fa icon={faUser}/> Name Parent/Guardian 1 
<input type="text" value={characterInformation.name_father}></label>

<label class="gridleft"><Fa icon={faUser}/> Name Parent/Guardian 2 
<input type="text" value={characterInformation.name_mother}></label>

<label class="gridleft"><Fa icon={faUsers}/> Other Family 
<input type="text" value={characterInformation.other_family}></label>

<label class="gridleft"><Fa icon={faUserGroup}/> Notable Friends 
	<input type="text" value={characterInformation.notable_friends}></label>

<label><Fa icon={faGraduationCap}/> Education 
<input type="text" value={characterInformation.education}></label>

<label><Fa icon={faAngleDoubleUp}/> Current Position 
<input type="text" value={characterInformation.current_position}></label>

<label><Fa icon={faHandsPraying}/> Religion 
<input type="text" value={characterInformation.religion}></label>

<label><Fa icon={faIdCardClip}/> Memberships 
<input type="text" value={characterInformation.memberships}></label>

<label><Fa icon={faBriefcase}/> Company Ownership 
<input type="text" value={characterInformation.company_ownership}></label>

<label><Fa icon={faHandcuffs}/> Court Accusations 
<input type="text" value={characterInformation.court_accusations}></label>

<label><Fa icon={faBuildingColumns}/> Court Sentences 
<input type="text" value={characterInformation.court_sentences}></label>

<label><Fa icon={faDroplet}/> Bloodtype 
<input type="text" value={characterInformation.bloodtype}></label>

<label><Fa icon={faNotesMedical}/> Special Medical Circumstances 
<input type="text" value={characterInformation.special_medical_circumstances}></label>

<label><Fa icon={faAward}/> Life Achievements 
<input type="text" value={characterInformation.life_achievements}></label>

<label><Fa icon={faMask}/> Little Secrets 
<input type="text" value={characterInformation.little_secrets}></label>
<label><Fa icon={faUserSecret}/> Big Secrets 
<input type="text" value={characterInformation.big_secrets}></label>




<label><Fa icon={faEllipsis}/> Miscellany 
<input type="textarea" value={characterInformation.miscellany}></label>
</div>