import { RemoteSimpleAdapter } from './remote-simple-adapter';

export class RemoteMultiAdapter extends RemoteSimpleAdapter {
    layers() {
        return this.data().map(l => ({ name: l.name }));
    }
}
