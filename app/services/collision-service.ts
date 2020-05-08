import * as Common from "../entities/common";

export default class CollisionService {
    constructor() {

    }

    static intersects(entity1: Common.IEntity, entity2: Common.IEntity): boolean {
        let e1x1 = entity1.position.x;
        let e1x2 = entity1.position.x + entity1.width;
        let e2x1 = entity2.position.x;
        let e2x2 = entity2.position.x + entity2.width;
        if (e1x1 > e2x2 || e1x2 < e2x1) {
            return false;
        }

        let e1y1 = entity1.position.y;
        let e1y2 = entity1.position.y + entity1.height;
        let e2y1 = entity2.position.y;
        let e2y2 = entity2.position.y + entity2.height;
        if (e1y1 > e2y2 || e1y2 < e2y1) {
            return false;
        }

        return true;
    }
}