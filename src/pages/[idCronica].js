import { useRouter } from "next/router";
import { cronicaStore } from '@services/store/state'
import { Provider } from 'react-redux'
import { Cronica } from "@components/screens/Cronica";

const idCronica = ({ cronica }) => {
    const router = useRouter();
    const { idCronica } = router.query;

    return (
        <Provider store={cronicaStore}>
            <Cronica idCronica={idCronica} />
        </Provider>
    );
}

export default idCronica;