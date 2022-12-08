let joomlaUserData: any;
let characterBackgroundInfo: any;
let activeCharacterId: any;
// let userType: string;
const orthanc: string = 'https://api.eosfrontier.space/orthanc/v2/';
const orthancdev: string = 'https://apidev2.eosfrontier.space/orthanc/v2/';

export async function resolveJoomlaSession() {
	let response = { id: '747', groups: ['2', '11', '17', '21', '28', '33', '36', '37', '42', '58'] };
	joomlaUserData = response.id;
	return joomlaUserData;
	// this doesn't work yet, we need to ask josh why
	// await fetch('/idandgroups.php', {
	//   method: 'GET',
	//   mode: 'cors',
	//   headers: {
	//     'cache-control': 'no-cache',
	//   },
	// }).then(async function (response) {
	//   if (response.status == 200) {
	//     joomlaUserData = await response.json()
	//   } else {
	//     console.log('[resolveJoomlaSession] something went wrong')
	//   }
	// })
	// resolveUserType(joomlaUserData);
	// return joomlaUserData
}

// user types we care about | hard coded, because there is no soft way to do this without being silly
/* id: "30" parent_id: "29" title: "SL"
    id: "31" parent_id: "29" title: "Figurant"
    id: '8', parent_id: '1', title: 'Super Users'
    id: '36', title: 'IT Team'
   */
// function resolveUserType(userData:any) {
//   userData.groups.forEach((id:number) => {
//     if (id == 30 || id == 36 || id == 8 || id == 31) {
//       if (id == 31) {
//         userType = 'figurant'
//       } else {
//         userType = 'spelleider'
//       }
//     }
//     if (userType != 'figurant' && userType != 'spelleider') {
//       userType = 'speler'
//     }
//   })
// }

export async function getActiveCharacterId(joomlaUserId: any) {
	await fetch(orthanc + 'chars_player/', {
		method: 'GET',
		mode: 'cors',
		headers: {
			token: 'rj4lki7oLzRsCpmmyrNM',
			'cache-control': 'no-cache',
			accountID: joomlaUserId
		}
	}).then(async function (response) {
		if (response.status == 200) {
			activeCharacterId = await response.json();
		} else {
			console.log('[getActiveCharacterId] something went wrong');
			console.log(response.statusText);
		}
	});
	return activeCharacterId.characterID;
}

export async function getCharacterBackgroundInformation(characterID: number) {
	await fetch(orthancdev + 'chars_all/background_check/', {
		method: 'GET',
		mode: 'cors',
		headers: {
			token: 'rj4lki7oLzRsCpmmyrNM',
			'cache-control': 'no-cache',
			char_id: characterID
		}
	}).then(async function (response) {
		if (response.status == 200) {
			characterBackgroundInfo = await response.json();
		} else {
			console.log('[getCharacterBackgroundInformation] something went wrong');
		}
	});
	return characterBackgroundInfo;
}
