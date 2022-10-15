import TaskProcessor from "./core/TaskProcessor";

class calculate{
    constructor(){
        this.worker=new TaskProcessor('CreateCalculateWorker',3);
    }
    startTaskworker(){
        const workerPromise= this.worker.scheduleTask({
            data:10
        });
        return workerPromise;
    }
}
export default calculate