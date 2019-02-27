import * as chai from 'chai';
import 'mocha';
import * as index from '../src/index';
import * as sinon from 'sinon';



describe('Index.js test suite', () => {

    it('connected should be called once', () => {
        const stub = sinon.stub(index, "connected");
        stub.restore();
        sinon.assert.calledOnce;
    });

    it('disconnect should be called once', () => {
        const stub = sinon.stub(index, "disconnect");
        stub.restore();
        sinon.assert.calledOnce;       
    });
});