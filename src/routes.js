import { createBrowserRouter } from "react-router-dom";
import Home from "./features/home/Home";
import { CasalForm } from "./features/casal/create";
import { Casal } from "./features/casal/getOne";
import { Ninhada } from "./features/ninhada/getOne";
import { AveForm } from "./features/aves/create";
import Ave from "./features/aves/getOne";
import { Especie } from "./features/especie/create";
//import Aves from "./features/aves/getAll";
import { Casais } from "./features/casal/getAll";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/aves/:id',
    element: <Ave/>
  }, 
  {
    path: '/aves/cadastro',
    element: <AveForm/>
  },
  {
    path: '/casais',
    element: <Casais/>
  },
  {
    path: '/casais/cadastro',
    element: <CasalForm/>
  },
  {
    path: 'casais/:id',
    element: <Casal/>
  },
  {
    path: 'ninhadas/:id',
    element: <Ninhada/>
  },
  {
    path: 'especies/cadastro',
    element: <Especie/>
  }
]);

export default router;

