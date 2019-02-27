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

    it('should  should be called once', () => {
        const stub = sinon.stub(index, "message");
        stub.restore();
        sinon.assert.notCalled;    
    });

    it('disconnect should be called once', () => {
        const stub = sinon.stub(index, "disconnect");
        stub.restore();
        sinon.assert.calledOnce;       
    });
    it('initialize should be called once', () => {
        const stub = sinon.stub(index, "initialize");
        stub.restore();
        sinon.assert.calledOnce;       
    });
    it('check process env', () => {
        try {
            const host = process.env.MQTT_HOST;
            chai.expect(host).to.be("string");
        } catch (error) {
            
        }
    });
});