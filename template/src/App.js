import React, { useState } from 'react'
import { Divider, Segment } from 'semantic-ui-react'

import { AppHome, AppMenu, AppSettings } from './components'

function App () {
  const [settingsOpen, setSettingsOpen] = useState(false)

  return (
    <>
      <AppMenu setSettingsOpen={setSettingsOpen} />
      <Divider />
      <Segment basic>
        <AppHome />
      </Segment>
      <AppSettings open={settingsOpen} setOpen={setSettingsOpen} />
    </>
  )
}

export default App
