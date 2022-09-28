let joomlaUserData:any
let characterBackgroundInfo
  export async function resolveJoomlaSession() {
    // this doesn't work yet, we need to ask josh why
    await fetch('/idandgroups.php', {
      method: 'GET',
      mode: 'cors',
      headers: {
        'cache-control': 'no-cache',
      },
    }).then(async function (response) {
      if (response.status == 200) {
        joomlaUserData = await response.json()
      } else {
        console.log('[resolveJoomlaSession] something went wrong')
      }
    })
    return joomlaUserData
   // resolveUserType(joomlaUserData) «« do later for spelleider part of app
  }