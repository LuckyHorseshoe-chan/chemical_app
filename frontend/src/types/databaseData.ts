import Nanoparticle from '../types/Nanoparticle';
import Material from '../types/Material';
import Synthesis from '../types/Synthesis';
import Nova from '../types/Nova';

interface databaseData {
    nanoparticle: Nanoparticle[];
    material: Material[];
    synthesis: Synthesis[];
    nova: Nova[];
}

export default databaseData;