import { Link } from "react-router-dom";
//Redux
import {useDispatch,useSelector} from 'react-redux';

function Barra() {
    const usuario=useSelector(state=>state);

    return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bridge">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img src="/logo_thebridge.svg" width="180px"/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item"><Link to="/" class="nav-link active text-white">Articulos</Link></li>
                        <li class="nav-item"><Link to="proveedores" class="nav-link text-white">Proveedores</Link></li>
                    </ul>
                    <span class="navbar-text text-white">
                        Usuario: pacogomez
                    </span>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default Barra;