import { ELoglevel, ETransportType } from "../utils/enums";


export class BaseTransport {
    loglvl: ELoglevel = ELoglevel.WARN;
    showData: boolean = false;
    showBaseComment: boolean = false;
    showLoglevel: boolean = true;
    baseComment: string = `Default`;

    constructor(baseTransport?: BaseTransport) {
        if (baseTransport) {
            this.baseComment = baseTransport.baseComment;
            this.loglvl = baseTransport.loglvl;
            this.showBaseComment = baseTransport.showBaseComment;
            this.showData = baseTransport.showData;
            this.showLoglevel = baseTransport.showLoglevel;
        }
    }
}

export class DefaultConsolTransport extends BaseTransport {
    type: ETransportType = ETransportType.console;

    constructor(baseTransport?: BaseTransport) {
        super(baseTransport);
    }
}

export class DefaultFsTransport extends BaseTransport {
    type: ETransportType = ETransportType.filesystem;
    logpath: string = `%appdata%/tf_log`;

    constructor(baseTransport?: BaseTransport) {
        super(baseTransport);
    }
}