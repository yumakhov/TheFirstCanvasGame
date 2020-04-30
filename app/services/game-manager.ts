import { Player, IPlayer } from '../entities/player';
import { Rocket, IRocket } from '../entities/rocket';
import { Target, ITarget } from '../entities/target';
import { Point } from '../entities/common';

export interface IGameManager {

}

export class GameManager implements IGameManager {

    private player: IPlayer;
    private targets: Array<ITarget>;
    private rockets: Array<IRocket>;

    constructor(){
        
    }
}