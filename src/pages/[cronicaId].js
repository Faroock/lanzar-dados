import { useRouter } from "next/router";
import { cronicaStore } from '@services/store/state'
import { Provider } from 'react-redux'
import { Cronica } from "@components/screens/Cronica";

const IdCronica = ({ cronica }) => {
    const router = useRouter();
    const { cronicaId } = router.query;

    return (
        <Provider store={cronicaStore}>
            <Cronica idCronica={cronicaId} />
        </Provider>
    );
}

export default IdCronica;