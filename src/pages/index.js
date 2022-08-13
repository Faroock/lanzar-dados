import Principal from '@components/screens/Principal'
import { cronicaStore } from '@services/store/state'
import { Provider } from 'react-redux'

export default function Home() {

  return (
    <Provider store={cronicaStore}>
      <Principal />
    </Provider>
  )
}
