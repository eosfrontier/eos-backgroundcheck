  export async function resolveJoomlaSession() {
    // this doesn't work yet, we need to ask josh why
    await fetch('/lib/idandgroups.php', {
      method: 'GET',
      mode: 'cors',
      headers: {
        token: environment.token,
        'cache-control': 'no-cache',
      },
    }).then(async function (response) {
      if (response.status == 200) {
        joomlaUserData = await response.json()
      } else {
        console.log('[resolveJoomlaSession] something went wrong')
      }
    })
   // resolveUserType(joomlaUserData) «« do later for spelleider part of app
  }

  export 